#!/usr/bin/env python3
"""AUTHORING only: export an immutable Git blob as Temp_ and verify transfer bytes.

No NotebookLM access, independent academic verdict, or release authorization.
Python stdlib and git executable only.
"""
import argparse
import hashlib
import re
import subprocess
import sys
import zipfile
from pathlib import Path


def git(repo, *args):
    p = subprocess.run(['git', '-C', str(repo), *args], capture_output=True)
    if p.returncode:
        raise ValueError('Git failed: ' + p.stderr.decode('utf-8', 'replace').strip())
    return p.stdout


def git_blob(data):
    header = f'blob {len(data)}\0'.encode('ascii')
    return hashlib.sha1(header + data).hexdigest()


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def field(data, name):
    text = data.decode('utf-8', 'strict')
    m = re.search(r'^' + re.escape(name) + r'\s*:\s*(\S[^\n]*)$', text, re.M)
    return m.group(1).strip() if m else None


def outcomes(data):
    """Prefer explicit lesson/Topic outcome declarations; fallback to SGK Bxx IDs."""
    text = data.decode('utf-8', 'strict')
    for name in ('EXPECTED_OUTCOME_IDS', 'OUTCOME_ID'):
        lines = re.findall(r'^' + name + r'\s*:\s*(.+)$', text, re.M)
        if lines:
            values = set()
            for line in lines:
                for token in re.split(r'[,;|\s]+', line):
                    token = token.strip('\x60*[]()')
                    if re.fullmatch(r'[A-Za-z][A-Za-z0-9_-]{3,}', token):
                        values.add(token)
            if values:
                return sorted(values)
    return sorted(set(re.findall(r'\bB\d{2}_OUT_\d{2}\b', text)))


def topic_outcome_declaration_exists(data):
    return bool(re.search(rb'(?m)^(?:OUTCOME_ID|EXPECTED_OUTCOME_IDS)\s*:', data))


def first_last(data):
    lines = [x.strip() for x in data.decode('utf-8').splitlines() if x.strip()]
    if not lines:
        raise ValueError('Empty review source')
    return lines[0], lines[-1]


def parse_receipt(path):
    obj = {}
    for line in path.read_text(encoding='utf-8').splitlines():
        if not line or line.startswith('#'):
            continue
        k, sep, v = line.partition(': ')
        if sep and k in obj:
            raise ValueError('Duplicate receipt key: ' + k)
        if sep:
            obj[k] = v
    return obj


def prepare(args):
    repo = Path(args.repo).resolve()
    source = Path(args.source)
    if source.is_absolute() or '..' in source.parts:
        raise ValueError('--source must be a repo-relative path without ..')
    if source.suffix not in ('.md', '.txt'):
        raise ValueError('NotebookLM review source must be Markdown/TXT, not JSON')
    revision = git(repo, 'rev-parse', '--verify', f'{args.ref}^{{commit}}').decode().strip()
    blob = git(repo, 'rev-parse', '--verify', f'{revision}:{source.as_posix()}').decode().strip()
    data = git(repo, 'cat-file', 'blob', blob)
    if git_blob(data) != blob:
        raise ValueError('Git blob hash mismatch: STOP')
    work = repo / source
    if not work.is_file() or work.read_bytes() != data:
        raise ValueError('Working source differs from committed Git blob: STOP, commit/revert first')
    if field(data, 'PACKET_ID') != args.packet:
        raise ValueError('PACKET_ID in reviewed file does not match --packet')
    if field(data, 'LEARNING_PATH') != args.scope:
        raise ValueError('LEARNING_PATH differs from --scope')
    if field(data, 'STANDARD_ID') != 'SLM-THPT-QUALITY-ONE':
        raise ValueError('Missing one official STANDARD_ID')
    if args.scope not in ('SGK_CHAPTER', 'TOPIC'):
        raise ValueError('Unsupported LEARNING_PATH; use SGK_CHAPTER or TOPIC')
    if args.scope == 'TOPIC' and not topic_outcome_declaration_exists(data):
        raise ValueError('TOPIC requires explicit OUTCOME_ID or EXPECTED_OUTCOME_IDS')
    if not outcomes(data):
        raise ValueError('No explicit outcome IDs in review source')
    prefix = re.sub(r'[^A-Za-z0-9_-]+', '_', args.packet)
    if not prefix or len(prefix) > 100:
        raise ValueError('Unsafe or oversized PACKET_ID')
    filename = f'Temp_{prefix}_{blob[:12]}{source.suffix}'
    output = Path(args.outdir).resolve()
    output.mkdir(parents=True, exist_ok=True)
    deliver = output / filename
    receipt = output / f'AuthorLock_{prefix}_{blob[:12]}.txt'
    if deliver.exists() and deliver.read_bytes() != data:
        raise ValueError('Deliverable basename already exists with different bytes: STOP')
    deliver.write_bytes(data)
    head, tail = first_last(data)
    values = {
        'REVIEW_PACKET_ID': args.packet,
        'REVIEW_FILE_BASENAME': filename,
        'LEARNING_PATH': args.scope,
        'STANDARD_ID': 'SLM-THPT-QUALITY-ONE',
        'SOURCE_REPO_COMMIT': revision,
        'SOURCE_RELATIVE_PATH': source.as_posix(),
        'SOURCE_GIT_BLOB': blob,
        'SOURCE_SHA256': sha256(data),
        'SOURCE_BYTES': str(len(data)),
        'REVIEW_FILE_SHA256': sha256(data),
        'REVIEW_FILE_BYTES': str(len(data)),
        'EXPECTED_OUTCOME_COUNT': str(len(outcomes(data))),
        'REVIEW_SOURCE_FIRST_LINE': head,
        'REVIEW_SOURCE_LAST_LINE': tail,
        'EVIDENCE_LEVEL': 'AUTHOR_DELIVERED_BYTES_LOCKED_ONLY',
        'MOUNTED_BYTES_EXACT_PROVEN': 'NO',
        'CONTENT_READY': 'NO',
        'RELEASE_AUTHORIZATION': 'NO',
    }
    record = '# AUTHORING local source-lock receipt. DO NOT upload as a sixth NotebookLM source.\n'
    record += ''.join(f'{k}: {v}\n' for k, v in values.items())
    if receipt.exists() and receipt.read_text(encoding='utf-8') != record:
        raise ValueError('Receipt exists with different content: STOP')
    receipt.write_text(record, encoding='utf-8', newline='\n')
    print('SOURCE_LOCK_PREPARE_PASS')
    print('UPLOAD_ONLY:', deliver)
    print('AUTHOR_ONLY_RECEIPT:', receipt)
    print('GIT_BLOB:', blob)
    print('SHA256:', sha256(data))
    print('BYTES:', len(data))
    print('OUTCOME_COUNT:', len(outcomes(data)))
    print('NEXT: preflight --repo ... --receipt ... --file ... immediately before upload')
    print('NOTE: this proves delivered bytes, NOT the independent reviewer mount')


def prepare_private(args):
    """Private RD1 review: lock local bytes only; never commit source or receipt."""
    repo = Path(args.repo).resolve()
    source = Path(args.source).resolve()
    if source.suffix not in ('.md', '.txt') or not source.is_file():
        raise ValueError('Private source must be an existing Markdown/TXT file')
    if source == repo or repo in source.parents:
        raise ValueError('PRIVATE_RD1 source must be OUTSIDE the public Git checkout')
    data = source.read_bytes()
    if field(data, 'PACKET_ID') != args.packet or field(data, 'LEARNING_PATH') != args.scope:
        raise ValueError('Private source PACKET_ID/LEARNING_PATH mismatch')
    if field(data, 'STANDARD_ID') != 'SLM-THPT-QUALITY-ONE' or not outcomes(data):
        raise ValueError('Missing STANDARD_ID or outcome IDs in private source')
    if args.scope == 'TOPIC' and not topic_outcome_declaration_exists(data):
        raise ValueError('Private TOPIC requires explicit outcome declaration')
    prefix = re.sub(r'[^A-Za-z0-9_-]+', '_', args.packet)
    if not prefix or len(prefix) > 100:
        raise ValueError('Invalid PACKET_ID')
    filename = f'Temp_{prefix}_PRIVATE_{sha256(data)[:12]}{source.suffix}'
    output = Path(args.outdir).resolve()
    if output == repo or repo in output.parents:
        raise ValueError('PRIVATE_RD1 output must be OUTSIDE the public Git checkout')
    output.mkdir(parents=True, exist_ok=True)
    deliver = output / filename
    receipt = output / f'AuthorLock_{prefix}_PRIVATE_{sha256(data)[:12]}.txt'
    if deliver.exists() and deliver.read_bytes() != data:
        raise ValueError('Private output already exists with conflicting content: STOP')
    head, tail = first_last(data)
    values = {
        'REVIEW_PACKET_ID': args.packet,
        'REVIEW_FILE_BASENAME': filename,
        'LEARNING_PATH': args.scope,
        'STANDARD_ID': 'SLM-THPT-QUALITY-ONE',
        'SOURCE_KIND': 'PRIVATE_RD1_DO_NOT_COMMIT',
        'SOURCE_LOCAL_PRIVATE_PATH': str(source),
        'SOURCE_GIT_BLOB': 'NOT_APPLICABLE_PRIVATE',
        'SOURCE_SHA256': sha256(data),
        'SOURCE_BYTES': str(len(data)),
        'REVIEW_FILE_SHA256': sha256(data),
        'REVIEW_FILE_BYTES': str(len(data)),
        'EXPECTED_OUTCOME_COUNT': str(len(outcomes(data))),
        'REVIEW_SOURCE_FIRST_LINE': head,
        'REVIEW_SOURCE_LAST_LINE': tail,
        'EVIDENCE_LEVEL': 'AUTHOR_PRIVATE_DELIVERED_BYTES_LOCKED_ONLY',
        'MOUNTED_BYTES_EXACT_PROVEN': 'NO',
        'CONTENT_READY': 'NO',
        'RELEASE_AUTHORIZATION': 'NO',
    }
    record = '# PRIVATE AUTHOR-ONLY receipt. NEVER commit or upload as an extra Permanent Source.\n'
    record += ''.join(f'{k}: {v}\n' for k, v in values.items())
    if receipt.exists() and receipt.read_text(encoding='utf-8') != record:
        raise ValueError('Private receipt exists with different content: STOP')
    deliver.write_bytes(data)
    receipt.write_text(record, encoding='utf-8', newline='\n')
    print('PRIVATE_SOURCE_LOCK_PREPARE_PASS:', deliver)
    print('PRIVATE_AUTHOR_ONLY_RECEIPT:', receipt)
    print('SHA256:', sha256(data))
    print('PRIVATE_RD1_DO_NOT_COMMIT: YES')


def preflight(args):
    record = parse_receipt(Path(args.receipt))
    reviewfile = Path(args.file)
    if reviewfile.name != record['REVIEW_FILE_BASENAME']:
        raise ValueError('Wrong review filename: STOP')
    bytes_on_disk = reviewfile.read_bytes()
    if record.get('SOURCE_KIND') == 'PRIVATE_RD1_DO_NOT_COMMIT':
        source = Path(record['SOURCE_LOCAL_PRIVATE_PATH'])
        if source.read_bytes() != bytes_on_disk:
            raise ValueError('Private source changed or deliverable modified: STOP')
        if sha256(bytes_on_disk) != record['SOURCE_SHA256']:
            raise ValueError('Private source SHA mismatch: STOP')
    else:
        repo = Path(args.repo).resolve()
        commit = record['SOURCE_REPO_COMMIT']
        path = record['SOURCE_RELATIVE_PATH']
        blob = git(repo, 'rev-parse', '--verify', f'{commit}:{path}').decode().strip()
        data = git(repo, 'cat-file', 'blob', blob)
        if blob != record['SOURCE_GIT_BLOB'] or data != bytes_on_disk:
            raise ValueError('Git canonical versus delivery bytes mismatch: STOP')
        if git_blob(bytes_on_disk) != blob:
            raise ValueError('Deliverable Git blob mismatch: STOP')
    if sha256(bytes_on_disk) != record['REVIEW_FILE_SHA256'] or len(bytes_on_disk) != int(record['REVIEW_FILE_BYTES']):
        raise ValueError('SHA256 or byte length changed: STOP')
    print('SOURCE_LOCK_PREFLIGHT_PASS:', reviewfile.name)
    print('EVIDENCE_LEVEL:', record['EVIDENCE_LEVEL'])
    print('MOUNTED_BYTES_EXACT_PROVEN: NO')


def check_report(args):
    """Metadata/anchor sanity only, never cryptographic reviewer attestation."""
    rec = parse_receipt(Path(args.receipt))
    report = Path(args.report).read_text(encoding='utf-8')
    for name in ('REVIEW_PACKET_ID', 'REVIEW_FILE_BASENAME', 'REVIEW_SOURCE_FIRST_LINE',
                 'REVIEW_SOURCE_LAST_LINE'):
        val = field(report.encode('utf-8'), name)
        if val != rec[name]:
            raise ValueError(f'Reviewer report {name} absent or mismatched: HOLD')
    print('REVIEW_REPORT_METADATA_ANCHOR_PASS')
    print('EVIDENCE_LEVEL: REVIEWER_SOURCE_NAMED_WITH_TEXT_ANCHORS')
    print('MOUNTED_BYTES_EXACT_PROVEN: NO')
    print('Academic/PED independent verdict and source fidelity still require human audit')


def bundle(args):
    """Transport ZIP only: all members have independently verified author receipts."""
    if len(args.files) != len(args.receipts) or len(args.files) < 3:
        raise ValueError('ZIP requires 3+ review files and 1 exact receipt per file')
    dest = Path(args.output).resolve()
    if dest.suffix != '.zip' or not dest.name.startswith('Temp_'):
        raise ValueError('Transport ZIP must be Temp_*.zip')
    pairs = []
    for filename, receipt in zip(args.files, args.receipts):
        preflight(argparse.Namespace(repo=args.repo, receipt=receipt, file=filename))
        raw = Path(filename).read_bytes()
        pairs.append((Path(filename).name, raw, parse_receipt(Path(receipt))))
    if len({name for name, _, _ in pairs}) != len(pairs):
        raise ValueError('Duplicate ZIP member names')
    if any(rec.get('SOURCE_KIND') == 'PRIVATE_RD1_DO_NOT_COMMIT' for _, _, rec in pairs):
        root = Path(args.repo).resolve()
        if dest == root or root in dest.parents:
            raise ValueError('ZIP with PRIVATE_RD1 must stay OUTSIDE public Git checkout')
    import io
    data = io.BytesIO()
    with zipfile.ZipFile(data, 'w') as archive:
        for name, raw, _ in sorted(pairs):
            info = zipfile.ZipInfo(name, date_time=(1980, 1, 1, 0, 0, 0))
            archive.writestr(info, raw, compress_type=zipfile.ZIP_DEFLATED)
    z = data.getvalue()
    if dest.exists() and dest.read_bytes() != z:
        raise ValueError('Transport ZIP already exists with different content: STOP')
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(z)
    with zipfile.ZipFile(dest) as verify:
        if verify.testzip() is not None or len(verify.namelist()) != len(pairs):
            raise ValueError('ZIP archive invalid')
    print('TEMP_ZIP_TRANSPORT_PASS:', dest)
    print('ZIP_SHA256:', sha256(z))
    print('MEMBER_COUNT:', len(pairs))
    print('UNZIP_AND_ADD_EACH_TEMP_TO_NOTEBOOKLM: YES')
    print('AUTHOR_LOCK_RECEIPTS_NOT_INCLUDED_IN_ZIP: YES')


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    sub = ap.add_subparsers(dest='action', required=True)
    p = sub.add_parser('prepare', help='copy immutable committed Git source into one Temp_ file')
    p.add_argument('--repo', default='.')
    p.add_argument('--ref', default='HEAD')
    p.add_argument('--source', required=True)
    p.add_argument('--packet', required=True)
    p.add_argument('--scope', required=True, choices=['SGK_CHAPTER', 'TOPIC'])
    p.add_argument('--outdir', required=True)
    pv = sub.add_parser('prepare-private', help='lock private RD1 outside public Git (NO commit)')
    pv.add_argument('--repo', default='.')
    pv.add_argument('--source', required=True)
    pv.add_argument('--packet', required=True)
    pv.add_argument('--scope', required=True, choices=['SGK_CHAPTER', 'TOPIC'])
    pv.add_argument('--outdir', required=True)
    v = sub.add_parser('preflight', help='fail if Temp_ file differs by even one byte')
    v.add_argument('--repo', default='.')
    v.add_argument('--receipt', required=True)
    v.add_argument('--file', required=True)
    c = sub.add_parser('check-report', help='verify reviewer-reported source name and textual anchors')
    c.add_argument('--receipt', required=True)
    c.add_argument('--report', required=True)
    b = sub.add_parser('bundle', help='package 3+ individually locked Temp_ review sources')
    b.add_argument('--repo', default='.')
    b.add_argument('--files', nargs='+', required=True)
    b.add_argument('--receipts', nargs='+', required=True)
    b.add_argument('--output', required=True)
    args = ap.parse_args()
    try:
        {'prepare': prepare, 'prepare-private': prepare_private, 'preflight': preflight, 'check-report': check_report, 'bundle': bundle}[args.action](args)
    except (ValueError, FileNotFoundError, KeyError, UnicodeError, subprocess.SubprocessError) as err:
        print('SOURCE_LOCK_HOLD:', err, file=sys.stderr)
        sys.exit(2)


if __name__ == '__main__':
    main()
