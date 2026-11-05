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
    return sorted(set(re.findall(rb'\bB\d{2}_OUT_\d{2}\b', data)))


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
    if not outcomes(data):
        raise ValueError('No Bxx_OUT_xx outcome IDs in source')
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


def preflight(args):
    record = parse_receipt(Path(args.receipt))
    reviewfile = Path(args.file)
    if reviewfile.name != record['REVIEW_FILE_BASENAME']:
        raise ValueError('Wrong review filename: STOP')
    bytes_on_disk = reviewfile.read_bytes()
    repo = Path(args.repo).resolve()
    commit = record['SOURCE_REPO_COMMIT']
    path = record['SOURCE_RELATIVE_PATH']
    blob = git(repo, 'rev-parse', '--verify', f'{commit}:{path}').decode().strip()
    data = git(repo, 'cat-file', 'blob', blob)
    if blob != record['SOURCE_GIT_BLOB'] or data != bytes_on_disk:
        raise ValueError('Git canonical versus delivery bytes mismatch: STOP')
    if sha256(bytes_on_disk) != record['REVIEW_FILE_SHA256'] or len(bytes_on_disk) != int(record['REVIEW_FILE_BYTES']):
        raise ValueError('SHA256 or byte length changed: STOP')
    if git_blob(bytes_on_disk) != blob:
        raise ValueError('Deliverable Git blob mismatch: STOP')
    print('SOURCE_LOCK_PREFLIGHT_PASS:', reviewfile.name)
    print('EVIDENCE_LEVEL: AUTHOR_DELIVERED_BYTES_LOCKED_ONLY')
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
    v = sub.add_parser('preflight', help='fail if Temp_ file differs by even one byte')
    v.add_argument('--repo', default='.')
    v.add_argument('--receipt', required=True)
    v.add_argument('--file', required=True)
    c = sub.add_parser('check-report', help='verify reviewer-reported source name and textual anchors')
    c.add_argument('--receipt', required=True)
    c.add_argument('--report', required=True)
    args = ap.parse_args()
    try:
        {'prepare': prepare, 'preflight': preflight, 'check-report': check_report}[args.action](args)
    except (ValueError, FileNotFoundError, KeyError, UnicodeError, subprocess.SubprocessError) as err:
        print('SOURCE_LOCK_HOLD:', err, file=sys.stderr)
        sys.exit(2)


if __name__ == '__main__':
    main()
