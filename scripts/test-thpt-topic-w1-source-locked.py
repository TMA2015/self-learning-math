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
    "02": ("e8e1efe7d119fa0e37f6d80100c9583de19ad757",
           "prototypes/thpt/content-drafts/topic02-ineq-quad-region/Temp_TOPIC02_R06_NUMBERING_CONSISTENT_20261116.md",
           "88446b124096057f98f2742c78d4b93ca73d8883",
           "463eab588a4ee13b3e4532089088ebecf28ebc9c", (16, 38, 16, 4)),
    "03": ("9b6d3a1c7b599c559ccb0c2a0fea48f12365409f",
           "prototypes/thpt/content-drafts/topic03-algebra-equations/Temp_TOPIC03_R06_NUMBERING_CONSISTENT_20261116.md",
           "bd3b88b635b203872a9afa5893cc1e3af3e7d7c6",
           "28c43a014a015b1c81986e0b9c7b7127c3dfe55b", (12, 31, 12, 4)),
    "04": ("62eb09df620af13313d8a17ea74c0922ae9c61aa",
           "prototypes/thpt/content-drafts/topic04-powers-exp-log/Temp_TOPIC04_R06_NUMBERING_CONSISTENT_20261116.md",
           "71853ed34cb5cb21e312a0a9f9c713b76e5219b4",
           "0e605108aefcf18b81348311445225d559f96e8e", (18, 75, 18, 5)),
    "05": ("731dba42d606a5bc506516fe04eea5199f6d6360",
           "prototypes/thpt/content-drafts/topic05-functions-graph/Temp_TOPIC05_R06_NUMBERING_CONSISTENT_20261116.md",
           "277e8738c6cb7cce7f7f11c666382446f69be8e9",
           "c2fba301449c6ca519d1d7f75f28db3dffb4b1db", (17, 38, 17, 4)),
}
CUSTODY = {
    "02": (
        ("prototypes/thpt/review-packets/Temp_TOPIC02_R06_NUMBERING_DELTA_A_Q18_20261116.md", "463eab588a4ee13b3e4532089088ebecf28ebc9c"),
        ("prototypes/thpt/release-handoffs/THPT-TOPIC02-INEQ-QUAD-REGION-FULL-R06_HANDOFF_V2_NUMBERING_20261116.md", "0a2a64a39f7323b192da67ec77c5c8489b90b972"),
        ("prototypes/thpt/release-queue/ready/THPT-TOPIC02-INEQ-QUAD-REGION-FULL-R01.md", "4cc94314f92840050b49efe22537ef68317eab4e"),
    ),
    "03": (
        ("prototypes/thpt/review-packets/Temp_TOPIC03_R06_NUMBERING_DELTA_A_Q18_20261116.md", "28c43a014a015b1c81986e0b9c7b7127c3dfe55b"),
        ("prototypes/thpt/release-handoffs/THPT-TOPIC03-ALGEBRA-EQUATIONS-FULL-R06_HANDOFF_V2_NUMBERING_20261116.md", "1b0e9680b3ea340f6ee01a3dd100941aa0b1e828"),
        ("prototypes/thpt/release-queue/ready/THPT-TOPIC03-ALGEBRA-EQUATIONS-FULL-R01.md", "e97dde9beb89b9867f66cd6bbf3ce0ac0600d000"),
    ),
    "04": (
        ("prototypes/thpt/review-packets/Temp_TOPIC04_R06_NUMBERING_DELTA_A_Q18_20261116.md", "0e605108aefcf18b81348311445225d559f96e8e"),
        ("prototypes/thpt/release-handoffs/THPT-TOPIC04-POWERS-EXP-LOG-FULL-R06_HANDOFF_V2_NUMBERING_20261116.md", "b8a9511203f49a5e2a70fef6aa6f9f2020d61355"),
        ("prototypes/thpt/release-queue/ready/THPT-TOPIC04-POWERS-EXP-LOG-FULL-R01.md", "a4e807a91df6a60b92864179f4dfb8255fca9bda"),
    ),
    "05": (
        ("prototypes/thpt/review-packets/Temp_TOPIC05_R06_COMPOSITE_Q18_AUTHOR_SELF_QA_20261118.md", "c2fba301449c6ca519d1d7f75f28db3dffb4b1db"),
        ("prototypes/thpt/release-handoffs/THPT-TOPIC05-FUNCTION-GRAPH-TRANSFORMS-FULL-R06_HANDOFF_V2_NUMBERING_20261116.md", "32ad6c62a2d48c34b904e8db7b322b1bc5634d90"),
        ("prototypes/thpt/release-queue/ready/THPT-TOPIC05-FUNCTION-GRAPH-TRANSFORMS-FULL-R06.md", "c9a657074c313232ace991cf367eba9db951b9fa"),
    ),
}
FIGURE_BLOBS = {
    "docs/assets/visuals/THPT_TOPIC02_QUADRATIC_SIGN_R01.svg": "809ee7091849592e8312548fb8d916f1f461a77f",
    "docs/assets/images/thpt/THPT_G10_B03_HALFPLANES_D5_R01.svg": "a69e5ffabce6c77787ba3829471be7da97e21578",
    "docs/assets/images/thpt/THPT_G10_B04_FEASIBLE_POLYGON_D5_R01.svg": "64b0ca1142f9cbcb1edebbb220e5bb7a0752ec61",
    "docs/assets/visuals/THPT_TOPIC03_EQUIVALENCE_VS_SQUARING_R01.svg": "abb748c7b13dadc1786ea0de5f489a09dd2fe676",
    "docs/assets/visuals/THPT_TOPIC03_RADICAL_DOMAIN_NUMBERLINE_R01.svg": "78689938988f1a4e097aebbade89c85be0ab8b79",
    "docs/assets/images/thpt/THPT_G10_CHVI_B18_RADICAL_FLOW_D5_R03.svg": "57dc5868ca6b726c4936b2b5e5a3419112752930",
    "docs/assets/images/thpt/FIG-G11-CHVI-B18-01_R00.svg": "79528bcd2c87eb40b1b54f18c697b0ae3458e642",
    "docs/assets/images/thpt/FIG-G11-CHVI-B19-01_R00.svg": "fe2895ac101dcc4cf4046d57428181ad0f448dc8",
    "docs/assets/images/thpt/FIG-G11-CHVI-B20-01_R00.svg": "64bcb465bd6d809095a4ca2b910555e314badb69",
    "docs/assets/images/thpt/FIG-G11-CHVI-B21-01_R00.svg": "6d43f842d096b974eb70af21e6751f1ec70eea00",
    "docs/assets/visuals/THPT_TOPIC04_LOG_DOMAIN_AND_DECREASING_INEQUALITY_R01.svg": "7fe8a2d2faf325f3ee9b0876929402b733138f96",
    "docs/assets/visuals/THPT_TOPIC05_GRAPH_TRANSLATION_R01.svg": "e73c9c7a076de103edebf65cae0ed3529449ad06",
    "docs/assets/visuals/THPT_TOPIC05_REFLECTION_VERTICAL_SCALE_R01.svg": "0f20dc39c3432be8a8fe0af6e86df7207ffdcaa7",
    "docs/assets/visuals/THPT_TOPIC05_PIECEWISE_ENDPOINTS_R01.svg": "77f9345af366a64a3fba4a35c3d8d6b84a5d845e",
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
    for proof_path, proof_blob in CUSTODY[topic]:
        proof = subprocess.check_output(["git", "show", f"{head}:{proof_path}"], cwd=ROOT)
        assert git_blob(proof) == proof_blob, (topic, proof_path, "signed custody blob changed")
        assert blob in proof.decode("utf-8"), (topic, proof_path, "learner blob missing")
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
for figure, expected in FIGURE_BLOBS.items():
    assert git_blob((ROOT / figure).read_bytes()) == expected, (figure, "signed W1 SVG mismatch")
print("PASS all 14 W1 SVGs pinned to current AUTHORING source")
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
# Read-only existing CĐ01 → CĐ02 navigation compatibility. No CĐ01 changes or browser rerun for this W1 refresh.
for part in PARTS:
    path = ROOT / f"docs/thpt-preview/chuyen-de/cd01/{part}.md"
    text = path.read_text(encoding="utf-8")
    nav = re.search(r'<nav class="thpt-sgk-lesson-nav"[^>]*>[\s\S]*?</nav>', text)
    assert nav and nav.group(0).count('href="../../cd02/kien-thuc/"') == 1, (part,"CĐ01 → CĐ02 deep-link")
    assert len(re.findall(r'<(?:a|span)\b', nav.group(0))) == 4, (part,"exact four navigation controls")
    assert text.count("<!-- TOPIC01_APPROVED_SOURCE_START -->") == 1
    assert text.count("<!-- TOPIC01_APPROVED_SOURCE_END -->") == 1
print("PASS existing CĐ01 next-Topic deep-link intact; no CĐ01 delta")
print("PASS W1 source/receipt/Q15/Q16, no private grader/Mastery or unrelated site changes")
