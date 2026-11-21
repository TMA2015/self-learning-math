"""RELEASE DELTA_A_UI: render the approved SGK Golden shell in initial HTML.

Only presentation markup for canonical SGK lesson routes is affected.
No authored Markdown, math, assessment, IDs, Firebase, or JS interactions.
"""
from __future__ import annotations
import re
from html import unescape

_ROUTE = re.compile(r"^thpt-preview/sgk/(?:(lop-11|lop-12)/)?chuong-([ivx]+)/bai-(\d+)\.md$")
_CHAPTERS = "i ii iii iv v vi vii viii ix".split()
_G10_ENDS = [2, 4, 6, 11, 14, 18, 22, 25, 27]
_EXPECTED = ("Khám phá kiến thức", "Kiến thức SGK", "Ví dụ", "Lỗi thường gặp")
_HEADINGS = ("1. Khám phá kiến thức", "2. Kiến thức SGK", "3. Ví dụ",
             "4. Lỗi thường gặp và cách tự khắc phục")
_ARTICLE = '<article class="md-content__inner md-typeset">'
_BLOCK = '<div class="tabbed-block">'
_LABELS = re.compile(r'<div class="tabbed-labels">([\s\S]*?)</div>')
_LABEL = re.compile(r'<label\b[^>]*>([\s\S]*?)</label>')
_H2 = re.compile(r'<h2 class="thpt-g10-section-heading">')


def _classes(src_uri: str):
    match = _ROUTE.fullmatch(src_uri)
    if not match:
        return None
    level, chapter, raw_number = match.groups()
    number = int(raw_number)
    if level is None:
        if not 1 <= number <= 27:
            return None
        idx = next((i for i, end in enumerate(_G10_ENDS) if number <= end), -1)
        if idx == -1 or chapter != _CHAPTERS[idx]:
            return None
        return ("thpt-g10-knowledge-ap1",
                "thpt-g10-first-six-golden" if number <= 6
                else "thpt-g10-chiv-golden")
    # B01 is published; B02 automatically activates only after its Golden
    # four-tab source is accepted. No other grade-11/12 route is modified.
    if level == "lop-11" and chapter == "i" and number in (1, 2):
        return ("thpt-g10-knowledge-ap1", "thpt-g10-chiv-golden")
    return None


def _render_first_paint(html: str, class_names: tuple[str, str]) -> str:
    # Fail closed if the compiled HTML differs from the approved 4-tab layout.
    if html.count(_ARTICLE) != 1 or html.count(_BLOCK) != 4:
        return html
    label_groups = _LABELS.findall(html)
    if len(label_groups) != 1:
        return html
    labels = [unescape(re.sub(r"<[^>]+>", "", item)).strip()
              for item in _LABEL.findall(label_groups[0])]
    if tuple(labels) != _EXPECTED:
        return html
    h2_count = len(_H2.findall(html))
    if h2_count not in (0, 4):
        return html
    needs_headings = h2_count == 0
    if not needs_headings and not all(
        f'<h2 class="thpt-g10-section-heading">{title}</h2>' in html
        for title in _HEADINGS
    ):
        return html

    result = html.replace(
        _ARTICLE,
        '<article class="md-content__inner md-typeset ' + " ".join(class_names) +
        '" data-sgk-golden-first-paint="true">',
        1,
    )
    # Native Material selects the first tab by default; do not replace radio
    # inputs or persisted tab behavior. Script continues to sync active labels.
    label_markup = label_groups[0]
    first = re.sub(r"<label\b", '<label class="slm-g10-active-tab"',
                   label_markup, count=1)
    result = result.replace(label_markup, first, 1)
    if needs_headings:
        index = 0
        def add_heading(found):
            nonlocal index
            heading = _HEADINGS[index]
            index += 1
            return (found.group(0) +
                    '\n<h2 class="thpt-g10-section-heading">' + heading + '</h2>')
        result = re.sub(re.escape(_BLOCK), add_heading, result)
        if index != 4:
            return html
    return result


def on_post_page(output, page, config):
    uri = page.file.src_uri
    classes = _classes(uri)
    if classes is None:
        return output
    rendered = _render_first_paint(output, classes)
    # Published G10 B01-B27 and G11 B01 are known four-tab Golden routes.
    # Make a broken initial-HTML contract fail during MkDocs build, not after
    # deployment; the older G11 B02 is intentionally skipped until upgraded.
    required = uri.startswith("thpt-preview/sgk/chuong-") or (
        uri == "thpt-preview/sgk/lop-11/chuong-i/bai-1.md"
    )
    if required and (
        rendered == output or
        'data-sgk-golden-first-paint="true"' not in rendered or
        len(_H2.findall(rendered)) != 4
    ):
        raise RuntimeError("Golden first-paint build contract failed: " + uri)
    return rendered
