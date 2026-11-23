"""Math Lab RELEASE view compositor: restore all 25 wrapper contexts, without iframes.

Runs for exactly the 25 signed Math Lab Markdown routes in BOTH inherited
MkDocs configs. Original model HTML assets stay byte-for-byte unchanged.
No lesson/assessment/shared runtime paths are touched.
"""
from __future__ import annotations

import csv
import hashlib
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "scripts" / "math-lab-25-release-manifest.tsv"
_ROUTE = re.compile(r"^thpt-preview/math-lab/models/(slm-(?:top[0-9]{2}|sgk-g11-b0[34])-[a-z0-9-]+)\.md$")
_STYLE = """
<style id="ml-restored-viewer-css">
#ml-restored-top, #ml-restored-bottom {
  box-sizing:border-box; width:min(1120px, 100%); margin:0 auto 16px;
  padding:14px 18px; color:#183b54; background:#f5f9ff;
  border:1px solid #c9dbea; border-radius:12px;
  font:400 16px/1.6 system-ui,-apple-system,"Segoe UI",Arial,sans-serif;
}
#ml-restored-top .ml-kicker {margin:12px 0 4px;color:#3254a0;font-size:.8rem;font-weight:700;letter-spacing:.035em}
#ml-restored-top .ml-heading {margin:4px 0;color:#183b54;font-size:clamp(1.2rem,2.4vw,1.65rem);line-height:1.35;font-weight:750}
#ml-restored-top .ml-description {margin:6px 0 2px;color:#36566b;font-size:1rem;line-height:1.6}
#ml-restored-top a, #ml-restored-bottom a {display:inline-flex;align-items:center;min-height:44px;
  color:#175d91;text-decoration:underline;font-weight:700;overflow-wrap:anywhere}
#ml-restored-top a:focus-visible, #ml-restored-bottom a:focus-visible {
  outline:3px solid #e9922a;outline-offset:3px}
#ml-restored-bottom {margin:18px auto 26px}
#ml-restored-bottom .ml-guidance {font-size:.9rem;margin:0 0 8px;color:#36566b}
@media(max-width:600px) {
 #ml-restored-top, #ml-restored-bottom {padding:10px 12px;margin-bottom:10px}
}
</style>
"""


def _field(source: str, name: str, tag: str = "p") -> str:
    match = re.search(
        r'<'+tag+r'\b[^>]*class="'+re.escape(name)+r'"[^>]*>([^<]+)</'+tag+r'>',
        source,
    )
    if not match:
        raise RuntimeError("Math Lab wrapper missing " + name)
    return match.group(1).strip()


def _manifest() -> dict[str, tuple[str, Path, Path]]:
    with MANIFEST.open(encoding="utf-8", newline="") as handle:
        rows = list(csv.reader((line for line in handle if not line.startswith("#")), delimiter="\t"))
    if len(rows) != 25:
        raise RuntimeError("Math Lab must contain exactly 25 approved models")
    result = {}
    for row in rows:
        model_id, sha, _authoring, asset, page, _grade, _group = row
        slug = Path(page).stem
        if slug in result or not _ROUTE.fullmatch(page.removeprefix("docs/")):
            raise RuntimeError("Unsafe or duplicate Math Lab route: " + page)
        result[slug] = (sha, ROOT / asset, ROOT / page)
    return result


def _source_sha(data: bytes) -> str:
    return hashlib.sha1(b"blob " + str(len(data)).encode("ascii") + b"\0" + data).hexdigest()


def on_post_page(output: str, page, config, **kwargs) -> str:
    uri = page.file.src_uri
    route = _ROUTE.fullmatch(uri)
    if not route:
        return output
    slug = route.group(1)
    signed = _manifest()
    if slug not in signed:
        raise RuntimeError("Unregistered Math Lab page: " + slug)
    sha, asset_path, wrapper_path = signed[slug]
    raw = asset_path.read_bytes()
    if _source_sha(raw) != sha:
        raise RuntimeError("Math Lab source SHA mismatch: " + slug)
    model = raw.decode("utf-8")
    wrapper = wrapper_path.read_text(encoding="utf-8")
    if wrapper.count('<iframe') != 1 or wrapper.count('href="../../"') != 2:
        raise RuntimeError("Legacy Math Lab wrapper context changed: " + slug)
    marker = re.search(r'data-math-lab-model="([^"]+)"', wrapper)
    if marker is None or marker.group(1) != slug.upper():
        raise RuntimeError("Math Lab wrapper model ID mismatch: " + slug)
    label = _field(wrapper, "ml-overline")
    title_match = re.search(r"<h1>([^<]+)</h1>", wrapper)
    desc = _field(wrapper, "ml-model-desc")
    note = _field(wrapper, "ml-note")
    if not title_match or "Khám phá bằng cách điều chỉnh mô hình." not in note:
        raise RuntimeError("Math Lab wrapper teaching context missing: " + slug)
    title = title_match.group(1).strip()
    if model.count("</head>") != 1 or len(re.findall(r"<body\b[^>]*>", model)) != 1 or len(re.findall(r"</body\s*>", model)) != 1:
        raise RuntimeError("Math Lab standalone HTML document shape changed: " + slug)
    top = (
        '\n<div id="ml-restored-top" data-ml-restored-full-page="true" '
        'data-math-lab-model="'+marker.group(1)+'">'
        '<a href="../../" aria-label="Quay về thư viện Math Lab">← Về tổng quan Math Lab</a>'
        '<p class="ml-kicker">'+label+'</p>'
        '<p class="ml-heading" role="heading" aria-level="1">'+title+'</p>'
        '<p class="ml-description">'+desc+'</p>'
        '</div>\n'
    )
    bottom = (
        '\n<div id="ml-restored-bottom">'
        '<p class="ml-guidance">'+note+'</p>'
        '<a href="../../">← Trở về danh sách 25 mô hình</a>'
        '</div>\n'
    )
    # The standalone model body/scripts remain intact and execute as the
    # TOP document, never within a nested iframe. The separate signed HTML
    # under assets/math-lab/models is not rewritten.
    model = model.replace("</head>", _STYLE + "</head>", 1)
    model = re.sub(r"(<body\b[^>]*>)", lambda m: m.group(1) + top, model, count=1)
    model = re.sub(r"</body\s*>", lambda m: bottom + m.group(0), model, count=1)
    return model
