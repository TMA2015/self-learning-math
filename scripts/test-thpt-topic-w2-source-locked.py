#!/usr/bin/env python3
"""W2 RELEASE SOURCE-LOCK, Q15/Q16 and Golden projection scope (CĐ06–11 ONLY).
Does not inspect SGK/THCS as a QA suite or change academic/authoring source.
"""
from __future__ import annotations
import hashlib
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
CASES = {
    "06": ("d5c44c6f4dec50a2e04e867c74bbf08aab2ba582",
           "prototypes/thpt/content-drafts/topic06-trigonometry/Temp_TOPIC06_R06_NUMBERING_CONSISTENT_20261116.md",
           "621afad176e6944f832746b231cbd9265e96bce2",
           "07e70b50c23db3caaa87254e1bd0236bd76dd1c0", (16, 66, 16, 4, 4)),
    "07": ("b73c6bea5eb02508c26faa089e9b43700f5550b0",
           "prototypes/thpt/content-drafts/topic07-sequences/Temp_TOPIC07_R07_NUMBERING_CONSISTENT_20261116.md",
           "3f81555846b55690b1a19fed6b69d48950a77309",
           "d0fe9e8b1b5234eb98f0120fe5d98035ff7a4705", (18, 69, 18, 4, 4)),
    "08": ("b3d22f4d9524f812d4e92584f379f3b0575f48ed",
           "prototypes/thpt/content-drafts/topic08-limits-continuity/Temp_TOPIC08_R05_STUDENT_FIRST_58_CANONICAL_VISIBLE_20261115.md",
           "64dc1d59c48e1f666c0f6b3f33155175724b078b",
           "371a76f49383e5bca016627c01b8f1887f56cd0c", (18, 58, 18, 4, 4)),
    "09": ("7696b705c52a0d14d453083730cc9e0f9f3b2a9f",
           "prototypes/thpt/content-drafts/topic09-derivative/Temp_TOPIC09_R05_STUDENT_FIRST_108_CANONICAL_VISIBLE_20261116.md",
           "9281c89b9928cb0ccd38dedbc466fe1ef50bc6e0",
           "dae205e928e26916c4bdfcbc232c5aca0dd91856", (32, 108, 32, 5, 4)),
    "10": ("92eaf00e64b4bae1a35165926279407dc192759e",
           "prototypes/thpt/content-drafts/topic10-applied-derivative/Temp_TOPIC10_R06_NUMBERING_CONSISTENT_20261116.md",
           "952ce21e99953348068b6499449dae75d4490d10",
           "74ecc58ea5c86f83b5549732a2dde769ad5696a8", (36, 120, 36, 6, 6)),
    "11": ("2b492772734431b37c9331f63dc6e7b23e314afe",
           "prototypes/thpt/content-drafts/topic11-integrals/Temp_TOPIC11_R06_NUMBERING_CONSISTENT_20261116.md",
           "64688cf81991a432264c06a2ff0a908371ca1f21",
           "e63f9a5df598ea3c6d57efdbeb6808e86ad9f68f", (22, 116, 22, 4, 4)),
}
W2A="--w2a" in sys.argv
W2B="--w2b" in sys.argv
assert not (W2A and W2B), "Select one wave"
if W2A or W2B:
    CASES={k:v for k,v in CASES.items() if k in (("06","07","08") if W2A else ("09","10","11"))}
CUSTODY={"06":[["review-packets/Temp_TOPIC06_R06_COMPOSITE_Q18_AUTHOR_SELF_QA_20261118.md","07e70b50c23db3caaa87254e1bd0236bd76dd1c0"],["release-handoffs/THPT-TOPIC06-TRIGONOMETRY-FULL-R06_HANDOFF_V2_NUMBERING_20261116.md","266322c646bb64140e630735a120ada3c6d965f6"],["release-queue/ready/THPT-TOPIC06-TRIGONOMETRY-FULL-R06.md","29debfd6250633b093d3855c29799a852663cff8"]],"07":[["review-packets/Temp_TOPIC07_R07_NUMBERING_DELTA_A_Q18_20261116.md","d0fe9e8b1b5234eb98f0120fe5d98035ff7a4705"],["release-handoffs/THPT-TOPIC07-SEQUENCES-AP-GP-FULL-R07_HANDOFF_V2_NUMBERING_20261116.md","3d5b7cb3e3501c696da8733b6ef12b23df7ca3ff"],["release-queue/ready/THPT-TOPIC07-SEQUENCES-AP-GP-FULL-R01.md","9b987418e25a94a2d87d0f6c21d5902f3dc219e7"]],"08":[["review-packets/Temp_TOPIC08_R05_AUTHOR_SELF_QA_RECEIPT_20261115.md","371a76f49383e5bca016627c01b8f1887f56cd0c"],["release-handoffs/THPT-TOPIC08-LIMITS-CONTINUITY-FULL-R05_HANDOFF_V2_20261115.md","307b035a06b93bc3a6489cc30b4ce0f1211fdde2"],["release-queue/ready/THPT-TOPIC08-LIMITS-CONTINUITY-FULL-R01.md","dafb6826c3780b364807a2c5a434a7e5415fd886"]]}
FIGURE_BLOBS={"THPT_TOPIC06_COS_PHASE_COMPARISON_R01.svg":"c8734ab09037afc437aa48344178a975bc23bf87","THPT_TOPIC06_COT_ASYMPTOTES_R01.svg":"eac15f15e82e2e33cde3e09b07ced3c6455728b5","THPT_TOPIC06_SINE_PERIOD_R01.svg":"57a59a8d14e547680022793270d8b8691881c6f1","THPT_TOPIC06_TAN_ASYMPTOTES_R01.svg":"76edbe0917c90d9f67f82cfd91f1fd28784f2e53","THPT_TOPIC06_UNIT_CIRCLE_QUADRANTS_R01.svg":"3974269a87ca54be3bb89382655ec2ebc934a73c","THPT_TOPIC07_AP_VS_GP_GROWTH_R01.svg":"e3be79f17eadcd26d36b99f28dc0df8f4158addb","THPT_TOPIC07_END_PERIOD_CASHFLOW_R01.svg":"385fa4e3c5b4e09d29076aacd1e0a08476ff370b","THPT_TOPIC07_SEQUENCE_DISCRETE_VS_CONTINUOUS_R01.svg":"259ba93ec3036b32dd796ea1c06d8c8df7633f06","THPT_TOPIC08_IVT_BISECTION_R01.svg":"60a389862b5bc221a51447179ec8aab6c03b7ca4","THPT_TOPIC08_ONE_SIDED_JUMP_R01.svg":"e420051bbf2e4db6925924bde454ea267d396418","THPT_TOPIC08_SEQUENCE_LIMIT_R05.svg":"a0b3f79194cbc8d15bc2f7ba27b2f6d696392634"}
CUSTODY.update({"10":[["review-packets/Temp_TOPIC10_R06_CURRENT_SOURCE_EQUIVALENCE_Q18_AUTHOR_SELF_QA_20261118.md","74ecc58ea5c86f83b5549732a2dde769ad5696a8"],["release-handoffs/THPT-TOPIC10-APPLIED-DERIVATIVE-SURVEY-OPTIMIZATION-FULL-R06_HANDOFF_V2_NUMBERING_20261116.md","5bce4e0e98362e56f9b5985508f55908648e3814"],["release-queue/ready/THPT-TOPIC10-APPLIED-DERIVATIVE-SURVEY-OPTIMIZATION-FULL-R01.md","62e72b2752a3877100c82957814ff098b33c3b9e"]],"11":[["review-packets/Temp_TOPIC11_R06_CURRENT_SOURCE_AUTHOR_Q18_AFFECTED_DELTA_20261118.md","e63f9a5df598ea3c6d57efdbeb6808e86ad9f68f"],["release-handoffs/THPT-TOPIC11-ANTIDERIVATIVE-INTEGRAL-GEOMETRY-FULL-R06_HANDOFF_V2_NUMBERING_20261116.md","ee14e9bfc0afefbe949b5287435d3426c63b067a"],["release-queue/ready/THPT-TOPIC11-ANTIDERIVATIVE-INTEGRAL-GEOMETRY-FULL-R01.md","237f30a72dc793346e13798de645d2da869c7139"]],"09":[["review-packets/Temp_TOPIC09_R05_AUTHOR_SELF_QA_RECEIPT_20261116.md","dae205e928e26916c4bdfcbc232c5aca0dd91856"],["release-handoffs/THPT-TOPIC09-DERIVATIVE-MEANING-FULL-R05_HANDOFF_V2_20261116.md","35500608ab11fafcadf34f45c5c50c4294a5fbbb"],["release-queue/ready/THPT-TOPIC09-DERIVATIVE-MEANING-FULL-R01.md","2c45cfc1d2c672fe4b1f3f3772bada7c846f6e57"]]})
FIGURE_BLOBS.update({"THPT_TOPIC09_LINEAR_DIFFERENTIAL_R01.svg":"1665cbd9346452af8dfa667cfde201dfd10836c6","THPT_TOPIC09_PRODUCT_RULE_AREA_R01.svg":"705c7aee8029a8c50a6bcbb1a5620ed741b9e219","THPT_TOPIC09_SECANT_TANGENT_R01.svg":"e6ed104a54c8e932597f41ec63a743040252d227","THPT_TOPIC09_VELOCITY_ACCELERATION_R01.svg":"dc4d16740d001730c298ae94d94a4aeee7f97ec4","THPT_TOPIC10_ASYMPTOTE_READING_R01.svg":"fd95665e72fb029bf5182643ea3888f19bb9732b","THPT_TOPIC10_BOX_VOLUME_OPT_R01.svg":"ed12c88d5f79ba1f6c2e8db7b5e4e0f4077ce33c","THPT_TOPIC10_CLOSED_INTERVAL_EXTREMA_R01.svg":"9ad34c544b55ebf64a9d6f4688f293e0d96fed89","THPT_TOPIC10_DERIVATIVE_SIGN_VARIATION_R01.svg":"021f2f588804f81a42c8b490b123d923b46232e1","THPT_TOPIC10_RATIONAL_ASYMPTOTES_R01.svg":"4582dd5abd7d660d27b2d574fd7c6780e8271739","THPT_TOPIC11_CROSS_SECTION_SQUARE_CIRCLE_R01.svg":"f20c2cdb2e24115a051dc1d8f197e4945d35a2e5","THPT_TOPIC11_SIGNED_INTEGRAL_R01.svg":"9a4b0b56c9613711d60c623e349df2415f4dbb4d","THPT_TOPIC11_TWO_CURVES_SPLIT_R01.svg":"bbfb83ef7fcbd3f39f46848856f7d96f8233d50d","THPT_TOPIC11_WASHER_REVOLUTION_R01.svg":"e24c8d91fd5421e6b20ab5c4215db0b2d51342c2"})
FIGURE_BLOBS={k:v for k,v in FIGURE_BLOBS.items() if k.split("TOPIC")[1][:2] in CASES}
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
    for proof_path, proof_sha in CUSTODY.get(topic,[]):
        proof=subprocess.check_output(["git","show",f"{head}:prototypes/thpt/{proof_path}"],cwd=ROOT)
        assert git_blob(proof)==proof_sha and blob in proof.decode("utf-8"),(topic,proof_path,"signed custody mismatch")
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
for name,expected in FIGURE_BLOBS.items():
    assert git_blob((ROOT/"docs/assets/visuals"/name).read_bytes())==expected,(name,"signed figure mismatch")
print(f"PASS {len(FIGURE_BLOBS)} signed SVG blobs in selected W2 scope")
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
