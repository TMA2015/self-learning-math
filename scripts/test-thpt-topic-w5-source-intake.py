#!/usr/bin/env python3
"""W5 CĐ19–22 original AUTHORING source/Q18/Q15/Q16 intake only. NOT website QA."""
from __future__ import annotations
import json
import pathlib
import re
import subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
M = json.loads((ROOT / "prototypes/thpt/release-queue/W5_CD19_22_SOURCE_INTAKE_20261123.json").read_text(encoding="utf-8"))

def git(*args):
    p = subprocess.run(["git", *args], cwd=ROOT, text=True, capture_output=True, check=True)
    return p.stdout.strip()

assert M["wave"] == "W5" and set(M["topics"]) == {"19", "20", "21", "22"}
assert M["status"] == "W5_NO_MERGE_NO_DEPLOY_SCOPED_QA_PENDING"
assert M["standard"] == "SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18"
assert M["assessment"].startswith("PUBLIC_REPLAY_ONLY / CLIENT_SELF_CHECK_NO_MASTERY")
totals = {"topics": 0, "outcomes": 0, "knowledgeSections": 0, "practice": 0,
          "q15Canonical": 0, "replay": 0, "sourceSVGCount": 0}

for n, t in M["topics"].items():
    sha = t["authorHead"]
    def source_blob(path):
        return git("rev-parse", f"{sha}:{path}")
    for path, expected in ((t["sourcePath"], t["sourceBlob"]),
                           (t["receiptPath"], t["q18ReceiptBlob"]),
                           (t["readyPath"], t["readyBlob"])):
        actual = source_blob(path)
        assert actual == expected, f"CĐ{n}: wrong original blob {path}: {actual} != {expected}"
    content = git("show", f'{sha}:{t["sourcePath"]}')
    receipt = git("show", f'{sha}:{t["receiptPath"]}')
    ready = git("show", f'{sha}:{t["readyPath"]}')
    assert t["sourceBlob"] in receipt and t["sourceBlob"] in ready, f"CĐ{n} source/Q18 mismatch"
    assert t["q18ReceiptBlob"] in ready, f"CĐ{n} ready/Q18 mismatch"
    if "v2Blob" in t:
        v2=git("show",f'{sha}:{t["v2Path"]}')
        assert source_blob(t["v2Path"])==t["v2Blob"] and t["v2Blob"] in ready
        assert all(t[k] in v2 for k in ("sourceBlob","q18ReceiptBlob")) and "STATE: CONTENT_READY" in ready
    assert "AUTHOR_SELF_VERIFIED" in ready or "AUTHOR_SELF_VERIFIED" in receipt
    assert content.count("\n# Luyện tập") == content.count("\n# Tự kiểm tra") == 1
    know, rest = content.split("\n# Luyện tập", 1)
    practice, check = rest.split("\n# Tự kiểm tra", 1)
    ktabs = re.findall(r"(?m)^### \d+\.\d+\.", know)
    fts = re.findall(r"<!--\s*ITEM_ID:\s*(THPT-[A-Z0-9-]+)", know)
    exercises = re.findall(r"(?m)^\*\*Bài luyện\s*(\d+)\.\*\*", practice)
    identities = re.findall(
        r"<!--\s*(?:DISPLAY_ONLY_CANONICAL|CANONICAL_ITEM_ID|ITEM_ID|DISPLAY_ONLY)\s*:\s*(THPT-[A-Z0-9-]+)",
        practice)
    replays = re.findall(
        r"<!--\s*(?:DISPLAY_ONLY_CANONICAL|REUSE_PUBLIC)\s*:\s*(THPT-[A-Z0-9-]+)",
        check)
    assert len(ktabs) == t["knowledgeSections"], f"CĐ{n} knowledge subsection count"
    assert len(fts) == t["q15Canonical"] - t["practice"], f"CĐ{n} Q15 FirstTry count"
    assert len(set(fts)) == len(fts), f"CĐ{n} duplicate FirstTry IDs"
    assert len(exercises) == len(identities) == t["practice"], f"CĐ{n} Practice/owner-ID mismatch"
    assert list(map(int, exercises)) == list(range(1, t["practice"] + 1)), f"CĐ{n} display numbering"
    assert len(set(identities)) == t["practice"], f"CĐ{n} duplicate Practice IDs"
    assert not set(fts) & set(identities), f"CĐ{n} duplicate Q15 first-try/Practice IDs"
    assert len(replays) == len(set(replays)) == t["replay"], f"CĐ{n} replay count"
    assert set(replays).issubset(set(identities)), f"CĐ{n} replay not canonical Practice"
    assert len(re.findall(r"(?m)^\*\*Câu\s*\d+\.", check)) == t["replay"]
    assert "NO_MASTERY" in check or "không phải điểm" in check.lower()
    svgnames = set(re.findall(r"(?:FIG-[A-Za-z0-9_.-]+|Temp_STATISTICS_[A-Za-z0-9_.-]+)\.svg", content))
    assert len(svgnames) == t["sourceSVGCount"], f"CĐ{n} original SVG references: {svgnames}"
    for name in svgnames:
        if n == "22":
            path = "prototypes/thpt/content-drafts/topic-statistics/assets/" + name
            assert path in t["sourceSVGPaths"], f"CĐ22 unreviewed SVG path: {name}"
        else:
            path = "docs/assets/images/thpt/" + name
        blob = source_blob(path)
        assert re.fullmatch(r"[0-9a-f]{40}", blob), f"CĐ{n} original SVG unavailable: {name}"
    for key in totals:
        totals[key] += 1 if key == "topics" else t[key]
    print(f"PASS W5 CĐ{n}: original learner/Q18/ready exact SHA; {len(ktabs)} tabs;"
          f" {len(fts)} first tries + {len(identities)} Practice Q15;"
          f" {len(replays)} Q16 public same-ID replays; {len(svgnames)} SVG")

for key, actual in totals.items():
    assert M["totals"][key] == actual, (key, M["totals"][key], actual)
assert M["totals"]["plannedPages"] == 12
print("PASS W5 source-intake only, no site pages, browser QA or deploy certified")
