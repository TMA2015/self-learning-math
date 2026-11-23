#!/usr/bin/env python3
"""W5 RELEASE ONLY: immutable learner + Q18, 12 exact public projections, SVG,
Q15 Practice identity and Q16 same-ID public replay. No full-site QA/deploy."""
from __future__ import annotations

import hashlib
import json
from pathlib import Path
import re
import subprocess

ROOT=Path(__file__).resolve().parent.parent
M=json.loads((ROOT/"prototypes/thpt/release-queue/W5_CD19_22_SOURCE_INTAKE_20261123.json").read_text(encoding="utf-8"))
PARTS=("kien-thuc","luyen-tap","tu-kiem-tra")
HEADINGS=("# Kiến thức","# Luyện tập","# Tự kiểm tra")
assert M["wave"]=="W5" and set(M["topics"])=={"19","20","21","22"}

def git(*args:str)->bytes:
    return subprocess.check_output(("git",*args),cwd=ROOT)
def blob(b:bytes)->str:
    return hashlib.sha1(f"blob {len(b)}\0".encode()+b).hexdigest()

def sections(source:str,topic:str)->list[str]:
    i,j,k=(source.index("\n"+h+"\n") for h in HEADINGS)
    assert 0<i<j<k
    pref=source[source.index("\n")+1:i].strip()
    know=source[i+1:j].strip()
    if pref: know=know.replace("# Kiến thức\n","# Kiến thức\n\n"+pref+"\n",1)
    return [know,source[j+1:k].strip(),source[k+1:].strip()]

def projection(payload:str,topic:str)->str:
    payload=payload.replace("../../../../docs/assets/images/thpt/","../../../assets/images/thpt/")
    if topic=="22":
        payload=re.sub(r"\]\(assets/(Temp_STATISTICS_[A-Za-z0-9_-]+\.svg)\)",
                       r"](../../../assets/images/thpt/\1)",payload)
    if topic=="19":
        payload=re.sub(r"\[([^\]\n]+)\]\(Temp_THPT_TOPIC19_COUNT_CHOOSE_PASCAL_R00_20261114\.html\)",
                       r'<a href="../../../math-lab/models/slm-top19-combinatorics-pascal-r00/">\1</a>',payload)
    if topic=="20":
        payload=re.sub(r"\[([^\]\n]+)\]\(Temp_PLAN22_20_EVENTS_INTERACTIVE_WHITE_R00_20261114\.html\)",
                       r'<a href="../../../math-lab/models/slm-top20-prob-events-r00/">\1</a>',payload)
    return payload.strip()

def bank_ids(part:str)->list[str]:
    return re.findall(r"<!--\s*(?:DISPLAY_ONLY_CANONICAL|CANONICAL_ITEM_ID|ITEM_ID|DISPLAY_ONLY)\s*:\s*(THPT-[A-Z0-9-]+)",part)
def replay_ids(part:str)->list[str]:
    return re.findall(r"<!--\s*(?:DISPLAY_ONLY_CANONICAL|REUSE_PUBLIC)\s*:\s*(THPT-[A-Z0-9-]+)",part)

for n,t in M["topics"].items():
    original=git("show",f'{t["authorHead"]}:{t["sourcePath"]}')
    receipt=git("show",f'{t["authorHead"]}:{t["receiptPath"]}')
    ready=git("show",f'{t["authorHead"]}:{t["readyPath"]}')
    assert (blob(original),blob(receipt),blob(ready))==(t["sourceBlob"],t["q18ReceiptBlob"],t["readyBlob"]),(n,"signed SOURCE/Q18/ready mismatch")
    assert t["sourceBlob"].encode() in receipt and t["sourceBlob"].encode() in ready
    assert t["q18ReceiptBlob"].encode() in ready
    parts=sections(original.decode("utf-8"),n)
    k,p,q=parts
    h3=re.findall(r"(?m)^### \d+\.\d+\.",k)
    groups=re.findall(r"(?m)^## \d+\.",k)
    practiceGroups=re.findall(r"(?m)^## \d+\.",p)
    firstTry=re.findall(r"<!--\s*ITEM_ID:\s*(THPT-[A-Z0-9-]+)",k)
    ids=bank_ids(p)
    replay=replay_ids(q)
    nums=[int(x) for x in re.findall(r"(?m)^\*\*Bài luyện\s*(\d+)\.\*\*",p)]
    questions=[int(x) for x in re.findall(r"(?m)^\*\*Câu\s*(\d+)\.",q)]
    assert len(h3)==t["knowledgeSections"] and len(groups)==t["knowledgeGroups"],(n,"knowledge")
    assert len(practiceGroups)==t["practiceGroups"],(n,"practice groups")
    assert len(firstTry)==t["q15Canonical"]-t["practice"] and len(set(firstTry))==len(firstTry),(n,"FT Q15")
    assert len(ids)==len(set(ids))==t["practice"],(n,"Practice owner Q15")
    assert not set(firstTry)&set(ids),(n,"colliding canonical item_id")
    assert nums==list(range(1,t["practice"]+1)),(n,"Practice numbers")
    assert len(re.findall(r"<details\b",p))==t["practice"],(n,"original solutions")
    assert len(replay)==len(set(replay))==t["replay"] and set(replay)<=set(ids),(n,"same-ID Q16")
    assert questions==list(range(1,t["replay"]+1)),(n,"public replay question numbers")
    for part,payload in zip(PARTS,parts):
        page=(ROOT/f"docs/thpt-preview/chuyen-de/cd{n}/{part}.md").read_text(encoding="utf-8")
        begin,end=(f"<!-- TOPIC{n}_APPROVED_SOURCE_{point} -->" for point in ("START","END"))
        assert page.count(begin)==page.count(end)==1,(n,part,"canonical boundaries")
        region=page.split(begin,1)[1].split(end,1)[0].strip()
        meta=f'<!-- Q18 SOURCE_LEARNER_BLOB {t["sourceBlob"]}; Q18_RECEIPT_BLOB {t["q18ReceiptBlob"]}; AUTHORING_PR #{t["authorPR"]}; PUBLIC_PROJECTION_ONLY -->'
        assert region.startswith(meta),(n,part,"source receipt proof")
        assert region.count("<!-- W5_LINK_EQUIVALENT:")==1
        published=region.split("<!-- W5_LINK_EQUIVALENT:",1)[1].split("-->",1)[1].strip()
        assert published==projection(payload,n),(n,part,"DISPLAY_ONLY_PROJECTION_NOT_EXACT",len(published),len(payload))
        assert page.count(f'data-topic-w1-source-start="{part}"')==1
        assert page.count(f'data-topic-w1-source-end="{part}"')==1
        assert "thpt-topic-w5-golden-v1.js" in page
        nav=re.search(r'<nav class="thpt-sgk-lesson-nav"[\s\S]*?</nav>',page)
        assert nav and len(re.findall(r"<(?:a|span)\b",nav.group()))==4,(n,part,"four nav controls")
        assert f'href="../{part}/"' not in nav.group(),(n,part,"self-navigation")
        assert "data-thpt-readiness" not in page,(n,part,"official readiness forbidden")
        if part=="tu-kiem-tra":
            assert "NO_MASTERY" in page and ("CLIENT_SELF_CHECK_NO_MASTERY" in published or (n=="22" and "REUSE_PUBLIC:" in published)),(n,"original public-only Q16")
            assert not re.search(r"Final Submit|Skill Mastery",re.sub(r"<!--.*?-->","",published,flags=re.S),re.I)
    refs=set(re.findall(r"(?:FIG-[A-Za-z0-9_.-]+|Temp_STATISTICS_[A-Za-z0-9_.-]+)\.svg",k))
    assert len(refs)==t["sourceSVGCount"],(n,"original SVG refs",refs)
    for name in refs:
        authorPath=(("prototypes/thpt/content-drafts/topic-statistics/assets/" if n=="22" else "docs/assets/images/thpt/")+name)
        author=git("show",f'{t["authorHead"]}:{authorPath}')
        dest=ROOT/"docs/assets/images/thpt"/name
        assert dest.is_file() and dest.read_bytes()==author,(n,name,"SOURCE_SVG_MUTATED_OR_MISSING")
    model=t["optionalModel"]
    assert re.fullmatch(r"slm-top\d+-[a-z0-9-]+",model)
    print(f"PASS W5 CĐ{n}: source/Q18/ready exact + 3 projections + {len(h3)} tabs, {len(ids)} Q15 Practice, {len(replay)} same-ID Q16, {len(refs)} original SVG")

js=(ROOT/"docs/assets/javascripts/thpt-topic-w5-golden-v1.js").read_text(encoding="utf-8")
for token in ('credentials:"omit"','method:"GET"','target.origin!==location.origin','THPT_GOLDEN_RUNTIME','golden.bindPager','golden.bindDialog','REUSE_PUBLIC','CANONICAL_ITEM_ID'):
    assert token in js,("W5 adapter missing safeguard",token)
assert js.count("fetch(")==1 and js.count("new URL(")==1, "W5 public same-origin answer lookup count changed"
for bad in ("localStorage","sessionStorage","indexedDB","firebase.firestore","setDoc(","sendBeacon","WebSocket(","FINAL_SUBMIT"):
    assert bad not in js,("forbidden client state/Mastery",bad)
for nav in ("mkdocs.yml","mkdocs.thpt-preview.yml"):
    text=(ROOT/nav).read_text(encoding="utf-8")
    for n in M["topics"]:
        for part in PARTS:
            assert f"thpt-preview/chuyen-de/cd{n}/{part}.md" in text,(nav,n,part)
for part in PARTS:
    p=(ROOT/f"docs/thpt-preview/chuyen-de/cd18/{part}.md").read_text(encoding="utf-8")
    assert p.count('href="../../cd19/kien-thuc/"')==1
catalog=(ROOT/"docs/thpt-preview/chuyen-de/index.md").read_text(encoding="utf-8")
assert "22 chuyên đề" in catalog
for n in M["topics"]: assert f'data-thpt-topic="{n}"' in catalog
print("PASS W5 RELEASE SOURCE-LOCK/PROJECTION only. Browser/strict MkDocs/deploy gates are separate.")
