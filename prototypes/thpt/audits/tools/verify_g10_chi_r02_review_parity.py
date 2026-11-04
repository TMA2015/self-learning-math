#!/usr/bin/env python3
"""G10 ChI R02 SOURCE_REVIEW custody verifier (not an academic verdict).

Uses only Python stdlib. Checks original ZIP members and computes both SHA256 and
Git blob SHA1 from their raw bytes. When supplied independently exported files
from the review environment, compares their bytes and reports the first mismatch.
Never assumes that an LLM can hash virtual/mounted files or that whitespace-only
changes are semantically safe for mathematics.

Usage:
  python verify_g10_chi_r02_review_parity.py --zip Temp_G10_CHI_PED_R02_NOTEBOOKLM_REVIEW_20261104.zip
  python verify_g10_chi_r02_review_parity.py --zip ... --reviewed-dir exported_exact_reviewed_files --json-out result.json
"""
import argparse
import hashlib
import json
from pathlib import Path
import sys
import zipfile

PACKET_ID = 'G10-SGK-CHI-PED-BRIDGE-R02-20261104'
ZIP_SHA256 = '196f88bbb9f854f904947c81faddc719b46166606725270e07c778212ff6f05d'
FILES = {
    'Temp_G10_CHI_PED_R02_LEARNING_20261104.md': {
        'size': 30927,
        'sha256': '8bf91a21aab6bae0617b8aaf2d3770c487918d4536bbee14fdb93adaec9e6339',
        'git_blob': '6e35f036329b11465189a2256cfbfd536e95993c',
    },
    'Temp_G10_CHI_PED_R02_OUTCOME_ITEM_MATRIX_20261104.md': {
        'size': 4681,
        'sha256': '6402c0d367c192bca909fb4cffb605576772ec11cca144c99a7e7c9ecc30c50c',
        'git_blob': 'a112973b74768c3177d1a50a09229b214a1ef8b6',
    },
    'Temp_G10_CHI_PED_R02_S1_SCOPE_AUDIT_20261104.md': {
        'size': 2948,
        'sha256': 'ddfe2b2a4c31baf333d23f9239621b7b0df84a8e7b2c4ac982b61fef791663f2',
        'git_blob': 'ef7c1b5bec66aca0b4bd427218a4eb653cf9f92e',
    },
    'Temp_G10_CHI_PED_R02_AUTHOR_QA_SHA_20261104.md': {
        'size': 3317,
        'sha256': '1522eded1b0c586281322e5af018dfa4a3a9c145bd550e2c636b46c3c4afb305',
        'git_blob': '3711fbd92e912661424d228c575b0dddf7dc979a',
    },
}


def sha256(b):
    return hashlib.sha256(b).hexdigest()


def git_blob(b):
    return hashlib.sha1(b'blob ' + str(len(b)).encode('ascii') + b'\x00' + b).hexdigest()


def first_diff(original: bytes, reviewed: bytes):
    limit = min(len(original), len(reviewed))
    pos = next((i for i in range(limit) if original[i] != reviewed[i]), limit)
    return {'byte_offset_0_based': pos,
            'canonical_line_1_based': original[:pos].count(b'\n') + 1,
            'reviewed_line_1_based': reviewed[:pos].count(b'\n') + 1,
            'canonical_byte_at_offset': original[pos] if pos < len(original) else None,
            'reviewed_byte_at_offset': reviewed[pos] if pos < len(reviewed) else None}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--zip', required=True, type=Path, help='The ORIGINAL Authoring source ZIP')
    parser.add_argument('--reviewed-dir', type=Path, help='Directory of ACTUALLY EXPORTED 4 REVIEWED files, not a renamed copy of the ZIP')
    parser.add_argument('--json-out', type=Path, help='Optional report JSON (no student private content)')
    a = parser.parse_args()
    result = {'packet_id': PACKET_ID, 'zip': str(a.zip), 'canonical_source': {},
              'canonical_zip_git_parity': 'NOT_CHECKED', 'reviewed_source_parity': 'UNPROVEN',
              'q18_source_fidelity': 'HOLD', 'warnings': [], 'reviewed_files': {}}
    try:
        raw_zip = a.zip.read_bytes()
        result['zip_sha256_observed'] = sha256(raw_zip)
        if sha256(raw_zip) != ZIP_SHA256:
            raise ValueError('Original ZIP SHA256 mismatch (unknown ZIP snapshot)')
        with zipfile.ZipFile(a.zip) as z:
            bad = z.testzip()
            if bad:
                raise ValueError('ZIP CRC failed at ' + bad)
            if set(z.namelist()) != set(FILES) or len(z.namelist()) != len(FILES):
                raise ValueError('Wrong entries in ZIP; exact four canonical source files required')
            originals = {name: z.read(name) for name in FILES}
            for name, target in FILES.items():
                b = originals[name]
                observed = {'bytes': len(b), 'sha256': sha256(b), 'git_blob': git_blob(b),
                            'crlf_count': b.count(b'\r\n')}
                result['canonical_source'][name] = observed
                if (observed['bytes'] != target['size'] or observed['sha256'] != target['sha256']
                        or observed['git_blob'] != target['git_blob']):
                    raise ValueError('Canonical file differs from locked Git source: ' + name)
        result['canonical_zip_git_parity'] = 'PASS'
        if a.reviewed_dir:
            all_match = True
            for name, b in originals.items():
                export = a.reviewed_dir / name
                if not export.is_file():
                    result['reviewed_files'][name] = {'status': 'MISSING'}
                    all_match = False
                    continue
                reviewed = export.read_bytes()
                row = {'bytes': len(reviewed), 'sha256': sha256(reviewed),
                       'git_blob': git_blob(reviewed),
                       'status': 'BYTE_IDENTICAL' if b == reviewed else 'BYTE_MISMATCH'}
                if b != reviewed:
                    all_match = False
                    row['first_difference'] = first_diff(b, reviewed)
                result['reviewed_files'][name] = row
            result['reviewed_source_parity'] = 'PASS_BYTE_EXACT' if all_match else 'DIFFERENT_OR_MISSING'
            if all_match:
                result['q18_source_fidelity'] = 'PASS_AS_TO_SOURCE_BYTES_IF_REVIEW_EXPORT_PROVEN_AUTHENTIC'
                result['warnings'].append('File comparisons cannot independently authenticate the provenance of the reviewed-dir; preserve export custody evidence and independent reviewer receipt.')
            else:
                result['q18_source_fidelity'] = 'HOLD'
                result['warnings'].append('Do not infer semantic equality from matching IDs or matching overall item counts; examine each difference.')
        else:
            result['warnings'].append('No actual reviewer export was provided: canonical source verified, but reviewed-source parity remains UNPROVEN (Q18 HOLD).')
    except (OSError, ValueError, zipfile.BadZipFile) as err:
        result['canonical_zip_git_parity'] = 'FAIL'
        result['q18_source_fidelity'] = 'HOLD'
        result['error'] = str(err)
    if a.json_out:
        a.json_out.parent.mkdir(parents=True, exist_ok=True)
        a.json_out.write_text(json.dumps(result, ensure_ascii=False, indent=2, sort_keys=True) + '\n', encoding='utf-8')
    print(json.dumps(result, ensure_ascii=False, indent=2, sort_keys=True))
    return 2 if result['canonical_zip_git_parity'] == 'FAIL' else (3 if result['reviewed_source_parity'] == 'DIFFERENT_OR_MISSING' else 0)


if __name__ == '__main__':
    sys.exit(main())
