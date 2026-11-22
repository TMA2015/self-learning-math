#!/usr/bin/env python3
"""W3 CĐ12–15 RELEASE source/receipt, Q15/Q16 and exact projection; NO DEPLOY."""
from __future__ import annotations
import hashlib
import json
import pathlib
import re
import subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "prototypes/thpt/release-queue/W3_CD12_15_SOURCE_INTAKE_20261122.json"
data = json.loads(MANIFEST.read_text(encoding="utf-8"))
assert data["wave"] == "W3" and set(data["topics"]) == {"12", "13", "14", "15"}
PARTS = ("kien-thuc", "luyen-tap", "tu-kiem-tra")
HEADINGS = ("# Kiến thức", "# Luyện tập", "# Tự kiểm tra")


def blob_sha(content: bytes) -> str:
    return hashlib.sha1(f"blob {len(content)}\0".encode() + content).hexdigest()


def source_sections(text: str) -> tuple[str, list[str]]:
    points = [text.index("\n" + t + "\n") for t in HEADINGS]
    assert points == sorted(points)
    pref = re.sub(r"<!--\s*AUTHORING_ONLY[^>]*-->", "", text[text.index("\n"):points[0]]).strip()
    parts = [text[points[0]+1:points[1]].strip(), text[points[1]+1:points[2]].strip(),
             text[points[2]+1:].strip()]
    if pref:
        parts[0] = parts[0].replace("# Kiến thức\n", "# Kiến thức\n\n" + pref + "\n\n", 1)
    parts[1] = re.sub(
        r"^### Bài luyện (\d+)(?:\s*[·—]\s*([^\n]*))?$",
        lambda m: f"**Bài {m.group(1)}.**" + (" " + m.group(2) if m.group(2) else ""),
        parts[1], flags=re.M)
    parts[1] = re.sub(
        r"^\*\*Bài luyện (\d+)\.([^*\n]*)\*\*",
        lambda m: f"**Bài {m.group(1)}.**" + m.group(2), parts[1], flags=re.M)
    parts[1] = re.sub(
        r"<!-- CANONICAL_ITEM_ID:\s*([A-Z0-9-]+);[^>]*-->",
        lambda m: f"<!-- DISPLAY_ONLY_CANONICAL: {m.group(1)}; SOURCE_CANONICAL_UNCHANGED -->\n" + m.group(0),
        parts[1])
    parts[2] = re.sub(
        r"<!-- DISPLAY_ONLY_CANONICAL:\s*([A-Z0-9-]+);([^>]+) -->",
        lambda m: f"<!-- PUBLIC_REPLAY_ONLY: {m.group(1)}; NO_RD1; NO_MASTERY -->\n" + m.group(0)
        if "PUBLIC_SELF_CHECK" in m.group(2) else m.group(0), parts[2])
    return pref, parts


def projection(s: str) -> str:
    def replace_svg(m: re.Match) -> str:
        name = m.group(1).split("/")[-1]
        asset = "visuals" if name.startswith("FIG_G11_CHIV_B") else "images/thpt"
        return f"](../../../assets/{asset}/{name})"
    s = re.sub(r"\]\(([^)\n]+\.svg)\)", replace_svg, s)
    s = re.sub(r'<details class="slm-topic-first-try" markdown="1">\s*<summary>([^<]*)</summary>',
               r'<details markdown="1"><summary>\1</summary>', s)
    s = re.sub(r'(<details\b[^>]*>)(.*?)(</details>)',
               lambda m: m.group(1) + re.sub(r"<(?!/?summary\b)", "&lt;", m.group(2)) + m.group(3),
               s, flags=re.S)
    return re.sub(r"<(?!/?(?:details|summary)(?:\s|>)|!--)", "&lt;", s)


for topic, d in data["topics"].items():
    source = subprocess.check_output(["git", "show", f'{d["authorHead"]}:{d["sourcePath"]}'], cwd=ROOT)
    assert blob_sha(source) == d["sourceBlob"], (topic, "SOURCE_BLOB_MISMATCH")
    receipt = subprocess.check_output(["git", "show", f'{d["authorHead"]}:{d["receiptPath"]}'], cwd=ROOT)
    assert blob_sha(receipt) == d["q18ReceiptBlob"], (topic, "Q18_RECEIPT_MISMATCH")
    preface, parts = source_sections(source.decode("utf-8"))
    ids = re.findall(r"<!-- DISPLAY_ONLY_CANONICAL:\s*([A-Z0-9-]+)", parts[1])
    replay = re.findall(r"<!-- PUBLIC_REPLAY_ONLY:\s*([A-Z0-9-]+)", parts[2])
    labels = [int(x) for x in re.findall(r"^\*\*Bài (\d+)\.\*\*", parts[1], re.M)]
    counts = (len(re.findall(r"^### \d+\.\d+\.", parts[0], re.M)),
              len(ids), len(replay), len(re.findall(r"^## \d+\.", parts[0], re.M)),
              len(re.findall(r"^## \d+\.", parts[1], re.M)))
    expected = (d["outcomes"], d["items"], d["replay"], d["groupsKnowledge"], d["groupsPractice"])
    assert counts == expected, (topic, "OUTCOME_ITEM_COUNT", counts, expected)
    assert len(set(ids)) == len(ids) and len(set(replay)) == len(replay) and set(replay) <= set(ids), (topic,"Q15/Q16 unique answer owner")
    assert labels == list(range(1, d["items"]+1)), (topic, "sequential Practice headings")
    assert len(re.findall(r"<details", parts[1])) == d["items"], (topic, "original Practice solution count")
    for n, part in enumerate(PARTS):
        page = (ROOT / f"docs/thpt-preview/chuyen-de/cd{topic}/{part}.md").read_text(encoding="utf-8")
        start, end = f"<!-- TOPIC{topic}_APPROVED_SOURCE_START -->", f"<!-- TOPIC{topic}_APPROVED_SOURCE_END -->"
        assert page.count(start) == 1 and page.count(end) == 1, (topic, part, "source markers")
        region = page.split(start, 1)[1].split(end, 1)[0].strip()
        meta = f'<!-- Q18 SOURCE_LEARNER_BLOB {d["sourceBlob"]}; Q18_RECEIPT_BLOB {d["q18ReceiptBlob"]};'
        assert region.startswith(meta), (topic, part, "snapshot metadata")
        published = region.split("PUBLIC_PROJECTION_ONLY -->", 1)[1].strip()
        assert published == projection(parts[n]).strip(), (topic, part, "DISPLAY_ONLY_PROJECTION_NOT_EXACT")
        assert page.count(f'data-topic-w1-source-start="{part}"') == 1
        assert page.count(f'data-topic-w1-source-end="{part}"') == 1
        assert 'thpt-topic-w3-golden-v1.js' in page
        nav = re.search(r'<nav class="thpt-sgk-lesson-nav"[\s\S]*?</nav>',page)
        assert nav and len(re.findall(r'<(?:a|span)\b', nav.group()))==4
        assert f'href="../{part}/"' not in nav.group(), (topic,part,"self-nav")
        assert "data-thpt-readiness" not in published
        if part == "tu-kiem-tra":
            assert "PUBLIC_REPLAY_ONLY" in published
            assert not re.search(r"Final Submit|Skill Mastery|data-g10.*submit",published,re.I)
    for svg in d["svg"]:
        path = ROOT / "docs/assets" / ("visuals" if svg.startswith("FIG_G11_CHIV_B") else "images/thpt") / svg
        assert path.is_file() and "<svg" in path.read_text(encoding="utf-8"), (topic,"broken SVG",svg)
        if svg.startswith("FIG_G11_CHIV_B"):
            origin = subprocess.check_output(
                ["git", "show", f'{d["authorHead"]}:prototypes/thpt/visuals/{svg}'],cwd=ROOT)
            assert path.read_bytes() == origin, (topic,"signed SVG changed",svg)
    print(f"PASS W3 CĐ{topic}: canonical {d['sourceBlob'][:12]}, Q18 {d['q18ReceiptBlob'][:12]}, {counts}, {len(d['svg'])} SVG")

js = (ROOT/"docs/assets/javascripts/thpt-topic-w3-golden-v1.js").read_text(encoding="utf-8")
assert 'credentials:"omit"' in js and 'method:"GET"' in js and "target.origin!==location.origin" in js
assert "THPT_GOLDEN_RUNTIME" in js and "golden.bindPager" in js and "golden.bindDialog" in js
assert js.count("fetch(")==1 and js.count("new URL(")==1
for forbidden in ("localStorage","sessionStorage","indexedDB","firebase.firestore","setDoc(","sendBeacon","WebSocket(","FINAL_SUBMIT"):
    assert forbidden not in js, ("forbidden write",forbidden)
for nav in ("mkdocs.yml","mkdocs.thpt-preview.yml"):
    t=(ROOT/nav).read_text(encoding="utf-8")
    for topic in data["topics"]:
        for p in PARTS:
            assert f"thpt-preview/chuyen-de/cd{topic}/{p}.md" in t, (nav,topic,p)
for p in PARTS:
    page=(ROOT/f"docs/thpt-preview/chuyen-de/cd11/{p}.md").read_text(encoding="utf-8")
    assert page.count('href="../../cd12/kien-thuc/"')==1
print("PASS W3 RELEASE only: Q18 source/receipt/Q15/Q16, source-only public review and Golden navigation")
