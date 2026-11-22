#!/usr/bin/env python3
"""W2 RELEASE SOURCE-LOCK, Q15/Q16 and Golden projection scope (CĐ06–11 ONLY).
Does not inspect SGK/THCS as a QA suite or change academic/authoring source.
"""
from __future__ import annotations
import hashlib
import pathlib
import re
import subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
CASES = {
    "06": ("28bd2103731eef4b4a6960cd5fc33d49c0680017",
           "prototypes/thpt/content-drafts/topic06-trigonometry/Temp_TOPIC06_R06_NUMBERING_CONSISTENT_20261116.md",
           "edfecb3edd165e87bcb615ec4cbb66833ad52675",
           "ef1e607675b82fcbf7c7aa6005c0c1005a836d1f", (16, 66, 16, 4, 4)),
    "07": ("a1d0c5ae4c37ca0def035939fcbeef0109be3e1b",
           "prototypes/thpt/content-drafts/topic07-sequences/Temp_TOPIC07_R07_NUMBERING_CONSISTENT_20261116.md",
           "7ce02dd8894f8d270ad39c66ca81abaa3b3eb0ba",
           "737f3c09766f4c15b50ee05ce93bcf0bb375d861", (18, 69, 18, 4, 4)),
    "08": ("c78cbbeefc92d14060a5bd81a1e2036ea2f6afeb",
           "prototypes/thpt/content-drafts/topic08-limits-continuity/Temp_TOPIC08_R05_STUDENT_FIRST_58_CANONICAL_VISIBLE_20261115.md",
           "0853a6de4be055d63a767b58dab20fa113e11098",
           "9e80780f05096269b7cd1942c7006138d72d7ec9", (18, 58, 18, 4, 4)),
    "09": ("c644ae7a75dc1d02c4e2ac0d0e7ee0856df62f07",
           "prototypes/thpt/content-drafts/topic09-derivative/Temp_TOPIC09_R05_STUDENT_FIRST_108_CANONICAL_VISIBLE_20261116.md",
           "5681dd894755165e799b4a20d9741f43115778d9",
           "b0e17ea8fbd00075c5de7dcaeb178985743645f8", (32, 108, 32, 5, 4)),
    "10": ("7ccecad8e357319f6f432b0765630fd50625b56f",
           "prototypes/thpt/content-drafts/topic10-applied-derivative/Temp_TOPIC10_R06_NUMBERING_CONSISTENT_20261116.md",
           "7954f917b89c64527b166d02aac1844da08ed806",
           "4cf2638f752b93fd87aa5446a1d89b66665afede", (36, 120, 36, 6, 6)),
    "11": ("a7d3d7756535cfee29f04bde86af6ab58b0a9d30",
           "prototypes/thpt/content-drafts/topic11-integrals/Temp_TOPIC11_R06_NUMBERING_CONSISTENT_20261116.md",
           "9c27c384af7fad186047aed555ef1a9877c6a30a",
           "a6c64c4d9280fbde9752598190206ff1a8e82fca", (22, 116, 22, 4, 4)),
}
PARTS = ("kien-thuc", "luyen-tap", "tu-kiem-tra")
HEADINGS = ("Kiến thức", "Luyện tập", "Tự kiểm tra")


def git_blob(data: bytes) -> str:
    return hashlib.sha1(f"blob {len(data)}\0".encode() + data).hexdigest()


def project_svg(md: str) -> str:
    # Display-only SVG path rewrite and safe math '<' escaping inside ANY
    # author-approved native details block, including <details class=...>
    # with separate <summary> line. Original SOURCE and words stay frozen.
    def replace_svg(m: re.Match[str]) -> str:
        filename = m.group(1).split("/")[-1]
        return f"](../../../assets/visuals/{filename})"
    projected = re.sub(r"\]\(([^)\n]+\.svg)\)", replace_svg, md)
    # Use the same native Golden details syntax as approved CĐ01–05.
    # Only removes a legacy CSS class and merges the summary tag line.
    projected = re.sub(
        r'<details class="slm-topic-first-try" markdown="1">\s*<summary>([^<]*)</summary>',
        r'<details markdown="1"><summary>\1</summary>', projected)
    def escape_details(m: re.Match[str]) -> str:
        body = re.sub(r"<(?!/?summary\b)", "&lt;", m.group(2))
        return m.group(1) + body + m.group(3)
    projected = re.sub(r"(<details\b[^>]*>)(.*?)(</details>)",
                       escape_details, projected, flags=re.S)
    # Bare '<' in canonical comparisons (e.g. x<a/x>a) can be misparsed as
    # an HTML tag and swallow later H2/MathJax. Escape only for HTML projection.
    # Preserve the sole approved native tags and authoring identity comments.
    return re.sub(r"<(?!/?(?:details|summary)(?:\s|>)|!--)", "&lt;", projected)


for topic, (head, path, blob, receipt, (outcomes, items, replay, groups, p_groups)) in CASES.items():
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
    assert len(re.findall(r"^## \d+\.", parts[1], re.M)) == p_groups
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
    print(f"PASS CĐ{topic}: SOURCE {blob[:12]}, receipt {receipt[:12]}, outcomes {outcomes}, {items} Q15 items, {replay} Q16 public, {groups} knowledge/{p_groups} practice groups, three Q18 projections")
js = (ROOT / "docs/assets/javascripts/thpt-topic-w2-golden-v1.js").read_text(encoding="utf-8")
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
# Only CĐ05's forward deep link is affected by W2.
for part in PARTS:
    path = ROOT / f"docs/thpt-preview/chuyen-de/cd05/{part}.md"
    text = path.read_text(encoding="utf-8")
    nav = re.search(r'<nav class="thpt-sgk-lesson-nav"[^>]*>[\s\S]*?</nav>', text)
    assert nav and nav.group(0).count('href="../../cd06/kien-thuc/"') == 1
    assert len(re.findall(r'<(?:a|span)\b', nav.group(0))) == 4
print("PASS CĐ05 boundary deep links and source fidelity")
print("PASS W2 source/receipt/Q15/Q16, no private grader/Mastery or unrelated site changes")
