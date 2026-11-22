#!/usr/bin/env python3
"""W1 RELEASE SOURCE-LOCK, Q15/Q16 and Golden projection scope (CĐ02–05 ONLY).
Does not inspect SGK/THCS as a QA suite or change academic/authoring source.
"""
from __future__ import annotations
import hashlib
import pathlib
import re
import subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
CASES = {
    "02": ("a720cce239fdae6a8d9bc537029f634adc6f3d11",
           "prototypes/thpt/content-drafts/topic02-ineq-quad-region/Temp_TOPIC02_R06_NUMBERING_CONSISTENT_20261116.md",
           "d2f1ac8d5526e28cb9cf4e4c56b005ebea51dbb5",
           "c1766ba52a80be61b9f8fd2124d0116605f74b92", (16, 38, 16, 4)),
    "03": ("501d5d892aa8542b72f0a354e32f93724a1699f0",
           "prototypes/thpt/content-drafts/topic03-algebra-equations/Temp_TOPIC03_R06_NUMBERING_CONSISTENT_20261116.md",
           "38f41f013e75b42605d7a88f9205c20af6315a41",
           "ef40b5871762558959108cf1879155c7e14158fe", (12, 31, 12, 4)),
    "04": ("053645571ce5b59dbfc0d502d18884acc706680a",
           "prototypes/thpt/content-drafts/topic04-powers-exp-log/Temp_TOPIC04_R06_NUMBERING_CONSISTENT_20261116.md",
           "4e8238e188204eefc060f18c88ef7a0a3c51a60e",
           "eba1e820c2544b54e3ff09b0c37ed780e18c3dd5", (18, 75, 18, 5)),
    "05": ("fb7da5885dffa7b8ea1f3b192dd894cec8cf3db9",
           "prototypes/thpt/content-drafts/topic05-functions-graph/Temp_TOPIC05_R06_NUMBERING_CONSISTENT_20261116.md",
           "909f873c57e543b8f6d3c383d0b88df6900e334a",
           "9c8c62a406e24af99efbdbe0bc081f1998c1f2ba", (17, 38, 17, 4)),
}
PARTS = ("kien-thuc", "luyen-tap", "tu-kiem-tra")
HEADINGS = ("Kiến thức", "Luyện tập", "Tự kiểm tra")


def git_blob(data: bytes) -> str:
    return hashlib.sha1(f"blob {len(data)}\0".encode() + data).hexdigest()


def project_svg(md: str) -> str:
    def repl(m: re.Match[str]) -> str:
        name = m.group(1).split("/")[-1]
        sub = "images/thpt" if name.startswith(("FIG-G11-", "THPT_G10_")) else "visuals"
        return f"](../../../assets/{sub}/{name})"
    projected = re.sub(r"\]\(([^)\n]+\.svg)\)", repl, md)
    # DELTA_A_UI display encoding: plain-text '<' inside raw HTML details
    # must be an HTML entity; otherwise MkDocs raw-HTML parser consumes
    # subsequent lesson headings (CĐ02 O06/O07 regression). Same mathematics.
    def escape_details(match: re.Match[str]) -> str:
        return match.group(1) + match.group(2).replace("<", "&lt;") + match.group(3)
    return re.sub(r'(<details markdown="1"><summary>[^<]*</summary>)(.*?)(</details>)',
                  escape_details, projected, flags=re.S)


for topic, (head, path, blob, receipt, (outcomes, items, replay, groups)) in CASES.items():
    source = subprocess.check_output(["git", "show", f"{head}:{path}"], cwd=ROOT)
    assert git_blob(source) == blob, (topic, "AUTHORING SOURCE SHA CHANGED")
    text = source.decode("utf-8")
    pos = [text.find("# " + x + "\n") for x in HEADINGS]
    assert all(p >= 0 for p in pos) and pos == sorted(pos), (topic, "invalid source sections")
    parts = (text[pos[0]:pos[1]], text[pos[1]:pos[2]], text[pos[2]:])
    assert len(re.findall(r"^### \d+\.\d+\.", parts[0], re.M)) == outcomes
    ids = re.findall(r"DISPLAY_ONLY_CANONICAL:\s*([A-Z0-9-]+)", parts[1])
    public = re.findall(r"PUBLIC_REPLAY_ONLY:\s*([A-Z0-9-]+)", parts[2])
    assert len(ids) == len(set(ids)) == items, (topic, "duplicate/unexpected Q15 items")
    assert len(public) == len(set(public)) == replay, (topic, "duplicate/unexpected public replays")
    assert set(public) <= set(ids), (topic, "Public replay ID not in Practice")
    assert len(re.findall(r"^## \d+\.", parts[1], re.M)) == groups
    assert len(re.findall(r"^<details markdown=\"1\"><summary>Lời giải", parts[1], re.M)) == items
    for p, name in enumerate(PARTS):
        html = (ROOT / f"docs/thpt-preview/chuyen-de/cd{topic}/{name}.md").read_text(encoding="utf-8")
        assert html.count("<!-- TOPIC" + topic + "_APPROVED_SOURCE_START -->") == 1
        assert html.count("<!-- TOPIC" + topic + "_APPROVED_SOURCE_END -->") == 1
        region = html.split("<!-- TOPIC" + topic + "_APPROVED_SOURCE_START -->", 1)[1].split(
            "<!-- TOPIC" + topic + "_APPROVED_SOURCE_END -->", 1)[0]
        metadata = f"<!-- Q18 SOURCE_LEARNER_BLOB {blob}; Q18_RECEIPT_BLOB {receipt};"
        assert region.strip().startswith(metadata), (topic, name, "source receipt mismatch")
        projected = region.split("PUBLIC_PROJECTION_ONLY -->", 1)[1].strip()
        assert projected == project_svg(parts[p]).strip(), (topic, name, "source projection not byte-exact")
        assert html.count('data-topic-w1-source-start="' + name + '"') == 1
        assert html.count('data-topic-w1-source-end="' + name + '"') == 1
        assert html.count('class="topic-w1-boot-status"') == 1
        assert 'topic-w1-pending' in html and 'topic-w1-fallback' in html
        assert 'href="../../"' in html
        nav = re.search(r'<nav class="thpt-sgk-lesson-nav"[\s\S]*?</nav>', html)
        assert nav and len(re.findall(r'<(?:a|span)\b', nav.group(0))) == 4, (topic,name,"4 Golden destinations")
        assert f'href="../{name}/"' not in nav.group(0), (topic,name,"self-page link")
        assert "data-thpt-readiness" not in region
        if name == "tu-kiem-tra":
            assert "CLIENT_SELF_CHECK" not in region or "NO_MASTERY" in region
            assert not re.search(r"Final Submit|Skill Mastery|data-g10-.*submit", region, re.I)
    print(f"PASS CĐ{topic}: SOURCE {blob[:12]}, receipt {receipt[:12]}, outcomes {outcomes}, {items} Q15 items, {replay} Q16 public, {groups} groups, three Q18 projections")
js = (ROOT / "docs/assets/javascripts/thpt-topic-w1-golden-v1.js").read_text(encoding="utf-8")
assert 'credentials:"omit"' in js and 'method:"GET"' in js and "target.origin!==location.origin" in js
assert "FINAL_SUBMIT" not in js and "Skill Mastery" not in js
assert not any(word in js for word in ("localStorage", "sessionStorage", "indexedDB", "firebase.firestore", "setDoc(", "sendBeacon", "WebSocket("))
assert js.count("new URL(") == 1, "Only public selfcheck existing-Practice GET authorized"
assert js.count("fetch(") == 1, "Only one controlled public read allowed"
assert "THPT_GOLDEN_RUNTIME" in js and "golden.bindPager" in js and "golden.bindDialog" in js
mk = (ROOT / "mkdocs.yml").read_text(encoding="utf-8")
for topic in CASES:
    for part in PARTS:
        assert f"thpt-preview/chuyen-de/cd{topic}/{part}.md" in mk
# Directly affected existing CĐ01 routes: ONLY previously unavailable "next topic"
# now targets CĐ02. Keep original academic body and other Golden nav unchanged.
for part in PARTS:
    path = ROOT / f"docs/thpt-preview/chuyen-de/cd01/{part}.md"
    text = path.read_text(encoding="utf-8")
    nav = re.search(r'<nav class="thpt-sgk-lesson-nav"[^>]*>[\\s\\S]*?</nav>', text)
    assert nav and nav.group(0).count('href="../../cd02/kien-thuc/"') == 1, (part,"CĐ01 → CĐ02 deep-link")
    assert len(re.findall(r'<(?:a|span)\\b', nav.group(0))) == 4, (part,"exact four navigation controls")
    assert text.count("<!-- TOPIC01_APPROVED_SOURCE_START -->") == 1
    assert text.count("<!-- TOPIC01_APPROVED_SOURCE_END -->") == 1
print("PASS CĐ01 direct impact: only Golden next-Topic deep-link, academic source delimiters intact")
print("PASS W1 source/receipt/Q15/Q16, no private grader/Mastery or unrelated site changes")
