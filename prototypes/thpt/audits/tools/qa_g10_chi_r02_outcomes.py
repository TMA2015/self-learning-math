#!/usr/bin/env python3
"""Scoped deterministic AUTHORING source QA for G10 ChI B01–B02 PED R02.

Verifies identity, source mapping, first-try ordering, approved R01 reuse pointers,
exposure boundaries, and eleven specified mathematical sample invariants.
DOES NOT issue independent Academic/PED verdicts or Q18 reviewer-source parity.

Usage:
  python qa_g10_chi_r02_outcomes.py --zip Temp_G10_CHI_PED_R02_NOTEBOOKLM_REVIEW_20261104.zip
  python qa_g10_chi_r02_outcomes.py --source-dir prototypes/thpt/content-drafts/G10_SGK_CHI_PED_R02_REVIEW_CANDIDATE_20261104 --r01 prototypes/thpt/content-drafts/THPT_G10_CHI_B01_B02_D1D6_AUTHORING_R01_SNAPSHOT.md
"""
import argparse
import hashlib
import re
import sys
import zipfile
from pathlib import Path

ZIP_SHA = '196f88bbb9f854f904947c81faddc719b46166606725270e07c778212ff6f05d'
FILES = {
    'Temp_G10_CHI_PED_R02_LEARNING_20261104.md': (30927,'8bf91a21aab6bae0617b8aaf2d3770c487918d4536bbee14fdb93adaec9e6339','6e35f036329b11465189a2256cfbfd536e95993c'),
    'Temp_G10_CHI_PED_R02_OUTCOME_ITEM_MATRIX_20261104.md': (4681,'6402c0d367c192bca909fb4cffb605576772ec11cca144c99a7e7c9ecc30c50c','a112973b74768c3177d1a50a09229b214a1ef8b6'),
    'Temp_G10_CHI_PED_R02_S1_SCOPE_AUDIT_20261104.md': (2948,'ddfe2b2a4c31baf333d23f9239621b7b0df84a8e7b2c4ac982b61fef791663f2','ef7c1b5bec66aca0b4bd427218a4eb653cf9f92e'),
    'Temp_G10_CHI_PED_R02_AUTHOR_QA_SHA_20261104.md': (3317,'1522eded1b0c586281322e5af018dfa4a3a9c145bd550e2c636b46c3c4afb305','3711fbd92e912661424d228c575b0dddf7dc979a'),
}
EXPECTED_OUTCOMES = (
    'G10-B01-PROPOSITION','G10-B01-NEGATION','G10-B01-IMPLICATION',
    'G10-B01-EQUIVALENCE','G10-B01-QUANTIFIERS','G10-B02-MEMBERSHIP_SUBSET',
    'G10-B02-UNION_INTERSECTION','G10-B02-DIFFERENCE','G10-B02-COMPLEMENT',
    'G10-B02-INTERVALS','G10-B02-VENN_MODEL'
)
R01_BLOB = '95a554e31a613b8e215679fe6790738473d598df'
G10_SGK = '3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2'
G10_SBT = '2b1b98665b2c5cccb99f6699a43cbf71b8b2dfc63bdaec759a7b1c51778e2fa1'

class QaError(Exception):
    pass

def ensure(condition, detail):
    if not condition:
        raise QaError(detail)

def sha256(b):
    return hashlib.sha256(b).hexdigest()

def git_blob(b):
    return hashlib.sha1(f'blob {len(b)}\0'.encode('ascii') + b).hexdigest()

def verify(zip_path=None, source_dir=None, r01_path=None):
    # The on-GitHub source directory is a complete primary input. ZIP is optional transport.
    zip_contents = None
    if zip_path:
        raw = zip_path.read_bytes()
        ensure(sha256(raw) == ZIP_SHA, 'PACKET_ZIP_SHA_MISMATCH')
        with zipfile.ZipFile(zip_path, 'r') as z:
            ensure(z.testzip() is None, 'ZIP_CRC_FAIL')
            ensure(set(z.namelist()) == set(FILES), 'ZIP_FILENAMES_NOT_CANONICAL')
            zip_contents = {filename:z.read(filename) for filename in FILES}
    allfiles = {}
    for filename, (size, digest, blob) in FILES.items():
        if source_dir:
            data = (source_dir / filename).read_bytes()
            if zip_contents is not None:
                ensure(data == zip_contents[filename], f'SOURCE_DIRECTORY_ZIP_MEMBER_MISMATCH:{filename}')
        else:
            data = zip_contents[filename]
        ensure(len(data)==size, f'BYTE_LENGTH_MISMATCH:{filename}')
        ensure(sha256(data)==digest, f'SHA256_MISMATCH:{filename}')
        ensure(git_blob(data)==blob, f'GIT_BLOB_MISMATCH:{filename}')
        ensure(b'\r' not in data, f'EXPECTED_LF_SOURCE:{filename}')
        allfiles[filename] = data.decode('utf-8')
    learning = allfiles['Temp_G10_CHI_PED_R02_LEARNING_20261104.md']
    matrix = allfiles['Temp_G10_CHI_PED_R02_OUTCOME_ITEM_MATRIX_20261104.md']
    s1 = allfiles['Temp_G10_CHI_PED_R02_S1_SCOPE_AUDIT_20261104.md']
    for body in (learning,matrix,s1):
        ensure('G10-SGK-CHI-PED-BRIDGE-R02-20261104' in body, 'PACKET_ID_NOT_ALIGNED')
    for digest in (G10_SGK,G10_SBT):
        ensure(digest in s1 and digest in matrix, 'S1_PDF_DIGEST_NOT_ALIGNED')

    # Parse the 11 pedagogical blocks. Parsing is source-scoped, not rendering QA.
    h = list(re.finditer(r'^### (\d{2})\. (G10-B0[12]-[A-Z_]+) —',learning,re.M))
    ensure(len(h)==11, 'PED_OUTCOME_SECTION_COUNT_NOT_11')
    end = learning.index('## D6 bổ sung scoped duy nhất')
    ensure(all(int(v.group(1))==i+1 and v.group(2)==EXPECTED_OUTCOMES[i] for i,v in enumerate(h)),
           'OUTCOME_ID_ORDER_NOT_CANONICAL')
    rows = [line.split('|')[1:-1] for line in matrix.splitlines() if re.match(r'^\| B0[12] \| `G10-B0[12]-',line)]
    ensure(len(rows)==11, 'OUTCOME_MATRIX_NOT_11')
    checklist=[]
    for i, hit in enumerate(h):
        block = learning[hit.start():h[i+1].start() if i+1<len(h) else end]
        item = 'THPT-G10-CHI-TRY'+str(i+1).zfill(2)
        outcome = EXPECTED_OUTCOMES[i]
        lesson = 'G10-SGK-B01' if i<5 else 'G10-SGK-B02'
        ensure(len(re.findall(r'^ITEM_ID: '+re.escape(item)+r'\s*$',block,re.M))==1, f'CANONICAL_ITEM_ID_MISSING_OR_DUPLICATE:{item}')
        ensure('LESSON_ID: '+lesson in block and 'OUTCOME_ID: '+outcome in block, f'LESSON_OUTCOME_LINK:{item}')
        ensure('PLACEMENT: SGK_PRE_CORE_FIRST_TRY' in block and 'ROLE: PUBLIC_FORMATIVE_DIAGNOSTIC_UNSCORED' in block,
               f'PUBLIC_FIRST_TRY_ROLE:{item}')
        markers = ['**PED1','**PED2','**PED3','**Quy tắc','**PED5','**PED6','<details><summary>','</details>','**Nếu chưa làm được:**','**Đi tiếp:**']
        positions = [block.find(x) for x in markers]
        ensure(all(p>=0 for p in positions) and positions==sorted(positions), f'PED_FLOW_OR_SELF_REVEAL_INVALID:{item}')
        ensure(block.count('<details><summary>')==1 and block.count('</details>')==1,
               f'ANSWER_REVEAL_MULTIPLICITY:{item}')
        row_candidates=[r for r in rows if r[1].strip()=='`'+outcome+'`']
        ensure(len(row_candidates)==1 and row_candidates[0][5].strip()=='`'+item+'`', f'OUTCOME_ITEM_MATRIX_MISMATCH:{item}')
        rem=re.search(r'^REMEDIATION_HELP: (HELP-G10-B0[12]-\d{2})',block,re.M)
        ensure(rem is not None and rem.group(1) in row_candidates[0][6], f'REMEDIATION_MATRIX_MISMATCH:{item}')
        ex=re.search(r'^REUSE_EXAMPLE: (EX-G10-B0[12]-\d{2})',block,re.M)
        ensure(ex is not None and ex.group(1) in row_candidates[0][2], f'EXAMPLE_MATRIX_MISMATCH:{item}')
        # This should NOT grant student mastery; even <details> appears only after the question.
        ensure('không chấm Mastery' in block, f'SELF_CHECK_EXPOSURE_CUSTODY:{item}')
        checklist.append((item,outcome,rem.group(1),ex.group(1)))
    ensure(len(set(x[0] for x in checklist))==11,'DUPLICATE_CANONICAL_ITEM')
    ensure(len(re.findall(r'^ITEM_ID: THPT-G10-CHI-TRY',learning,re.M))==11,'ITEM_ID_DECLARATION_MULTIPLICITY')

    # Only one genuinely NEW D6 card; all four older R01 cards are reused by reference.
    suffix=learning[end:]
    for token in ('HELP_ID: HELP-G10-B02-03','OUTCOME_ID: G10-B02-INTERVALS',
                  'TRIGGER_ITEM_ID: THPT-G10-CHI-TRY10','ROLE: D6_SOURCE_CANDIDATE_ONLY'):
        ensure(token in suffix,f'NEW_D6_CARD_SOURCE_META_MISSING:{token}')
    ensure(len(re.findall(r'^HELP_ID:',learning,re.M))==1, 'NEW_HELP_COUNT_NOT_ONE')
    ensure(all(re.search(r'^'+str(i)+r'\. \*\*',suffix,re.M) for i in range(1,6)),'D6_FIVE_STEP_ROUTE_MISSING')
    ensure('CLIENT_SELF_CHECK' in learning or 'không dùng như nguồn chứng cứ kiểm tra độc lập' in learning,
           'INDEPENDENT_READINESS_UNSAFE')

    # Recheck explicit answer assertions against the *answer panel*, not only question text.
    answer_requirements={
     1:['14=7×2','k=5','k=4'],
     2:['Chọn **(B)**'],
     3:['P⇒Q **đúng**','Q⇒P **sai**','n=4'],
     4:['n=2m','n+2=2(m+1)','n=2(k−1)'],
     5:['n=0','n²≤0'],
     6:['(a) **đúng**','(b) **đúng**','(c) **sai**'],
     7:['A∩B={b,c}','A∪B={a,b,c,d}'],
     8:['A\\B={1,3}','B\\A={6}'],
     9:['U\\A={0,2,4}'],
     10:['X∩Y=[1,4]','X∪Y=(-2,6)'],
     11:['18−6=12','15−6=9','32−27=5','12+6+9+5=32']
    }
    for i,hit in enumerate(h):
        block=learning[hit.start():h[i+1].start() if i+1<len(h) else end]
        panel=block.split('<details><summary>',1)[1].split('</details>',1)[0]
        for expected in answer_requirements[i+1]:
            ensure(expected in panel, f'ANSWER_PANEL_EXPECTED_LITERAL_MISSING:TRY{i+1:02}:{expected}')

    # Independently evaluate 11 worked sample families. No independent reviewer verdict follows.
    assert 14%7==0 and (5+2==7) and (4+2!=7)
    assert not all([True,True,False])
    assert all((8*t)%4==0 for t in range(-500,501)) and (4%4==0 and 4%8!=0)
    assert all((n%2==0)==((n+2)%2==0) for n in range(-500,501))
    assert not all(n*n>0 for n in range(-4,5)) and 0*0<=0
    assert 2 in {2,4} and {2}.issubset({2,4}) and frozenset({2}) not in {2,4}
    assert ({'a','b','c'}&{'b','c','d'})=={'b','c'} and len({'a','b','c'}|{'b','c','d'})==4
    assert ({1,2,3,4}-{2,4,6})=={1,3} and ({2,4,6}-{1,2,3,4})=={6}
    assert set(range(6))-{1,3,5}=={0,2,4}
    assert all(1<=x<=4 for x in (1,4)) and -2<1<4<6 and (6 not in [1,4])
    assert 18-6==12 and 15-6==9 and 32-(18+15-6)==5 and 12+6+9+5==32

    r01_status='NOT_PROVIDED'
    if r01_path:
        r01_bytes=r01_path.read_bytes()
        ensure(git_blob(r01_bytes)==R01_BLOB,'R01_FROZEN_SOURCE_BLOB_CHANGED')
        r01=r01_bytes.decode('utf-8')
        for i,hit in enumerate(h):
            b=learning[hit.start():h[i+1].start() if i+1<len(h) else end]
            newid=checklist[i][0]
            # Original source IDs include only the canonical old items after REUSE_ORIGINAL_ITEM.
            old_refs=re.search(r'^REUSE_ORIGINAL_ITEM: (.+)$',b,re.M)
            ensure(old_refs is not None, f'R01_ITEM_LINK_MISSING:{newid}')
            for oldid in re.findall(r'THPT-G10-(?:B0[12]|CHI)-[A-Z0-9-]+',old_refs.group(1)):
                ensure(oldid in r01 and oldid!=newid,f'R01_ITEM_REFERENCE_BROKEN:{newid}:{oldid}')
            ensure(checklist[i][3] in r01,f'R01_EXAMPLE_REFERENCE_BROKEN:{newid}')
            if checklist[i][2]!='HELP-G10-B02-03':
                ensure(checklist[i][2] in r01,f'R01_HELP_REFERENCE_BROKEN:{newid}')
        r01_status='PASS_PINNED_R01_BLOB_AND_REFERENCES'
    return {'source':'PASS_4_FILE_SHA256_GIT_BLOB'+('_ZIP_CRC' if zip_path else '_SOURCE_DIR'),
            'matrix':'PASS_11_OUTCOME_11_CANONICAL_ITEMS',
            'ped':'PASS_MARKER_ORDER_AND_11_SELF_REVEALS',
            'math':'PASS_11_AUTHOR_CONTROL_SAMPLES',
            'r01_refs':r01_status,
            'scope':'AUTHORING_ONLY_NO_INDEPENDENT_ACADEMIC_VERDICT',
            'reviewer_source_binding':'UNPROVEN',
            'q18':'HOLD','content_ready':'NO'}

def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('--zip',type=Path,help='Optional original 4-file Temp_ R02 ZIP for transport checks')
    p.add_argument('--source-dir',type=Path,help='4-file canonical directory from Git checkout (works without ZIP)')
    p.add_argument('--r01',type=Path,help='Optional immutable R01 source file from checkout')
    a=p.parse_args()
    if not (a.zip or a.source_dir):
        p.error('Supply --zip and/or --source-dir')
    try:
        report=verify(a.zip,a.source_dir,a.r01)
    except (QaError, OSError, zipfile.BadZipFile, UnicodeDecodeError, AssertionError) as e:
        print(f'FAIL {e}',file=sys.stderr)
        return 2
    for k,v in report.items(): print(k.upper()+': '+v)
    return 0

if __name__=='__main__':
    sys.exit(main())
