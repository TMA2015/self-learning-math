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
_HERO = re.compile(r'(<div class="thpt-r4-screen"[^>]*>)([\s\S]*?)(</div>)')
_LEAD = re.compile(r'\s*<p class="thpt-r4-lead">[^<]*</p>')
_OLD_NAV = re.compile(r'<nav class="thpt-r4-lesson-tabs">[\s\S]*?</nav>')
_G11_ENDS = [4, 7, 9, 14, 17, 21, 27, 30, 33]


def _nav_markup(src_uri: str):
    """Mirror the one existing SGK runtime nav before first paint.

    Relative URLs work both under GitHub project prefix and local MkDocs
    preview. No canonical lesson URLs, user state or assessment are changed.
    """
    m = _ROUTE.fullmatch(src_uri)
    if m is None:
        return None
    level, chapter, raw = m.groups()
    grade = 10 if level is None else int(level[4:])
    ends = _G10_ENDS if grade == 10 else _G11_ENDS
    num = int(raw)
    if grade not in (10, 11) or num < 1 or num > ends[-1]:
        return None

    def href(neighbor: int):
        index = next(i for i, e in enumerate(ends) if neighbor <= e)
        destination = _CHAPTERS[index]
        return ("../" if destination == chapter else
                "../../chuong-" + destination + "/") + "bai-" + str(neighbor) + "/"

    def choice(label: str, kind: str, dest: str | None):
        if dest is None:
            return ('<span class="thpt-sgk-nav-unavailable" aria-disabled="true">' +
                    label + '</span>')
        return ('<a href="' + dest + '" data-sgk-lesson-link="' + kind +
                '">' + label + '</a>')

    return ('<nav class="thpt-r4-lesson-tabs thpt-sgk-lesson-nav" ' +
            'data-sgk-lesson-nav="' + str(grade) + '-B' + str(num) +
            '" aria-label="Điều hướng bài học theo SGK">' +
            choice("← Bài trước", "previous", href(num - 1) if num > 1 else None) +
            choice("Bài sau →", "next", href(num + 1) if num < ends[-1] else None) +
            choice("Core và Luyện tập", "practice", "../luyen-tap/") +
            choice("Tự kiểm tra", "selfcheck", "../tu-kiem-tra-chuong/") +
            '</nav>')


def _hero_first_paint(html: str, src_uri: str) -> str:
    """Do the same *above-the-fold* layout work now done after JS starts.

    The old JS removes only these decorative leads on G10 B01–B22 and
    inserts/replaces one nav in every SGK lesson. Keep student narrative,
    source IDs, diagrams and every text inside the four tabs unchanged.
    """
    matches = list(_HERO.finditer(html))
    nav = _nav_markup(src_uri)
    if len(matches) != 1 or nav is None or 'data-sgk-lesson-nav=' in html:
        return html
    hero = matches[0]
    body = hero.group(2)
    if '<div' in body or len(_OLD_NAV.findall(body)) > 1:
        return html  # Unknown nested hero: fail-closed in on_post_page.
    m = _ROUTE.fullmatch(src_uri)
    level, _, raw = m.groups()
    # Hide presentation-only hero leads in G10 B01-B22 and B24-B27.
    # B23 has no lead; no learner Markdown or tab content is altered.
    if level is None and (int(raw) <= 22 or 24 <= int(raw) <= 27):
        body = _LEAD.sub('', body)
    body = _OLD_NAV.sub('', body)  # G11 B01 preexisting small nav.
    new_hero = hero.group(1) + body + '\n' + nav + '\n' + hero.group(3)
    return html[:hero.start()] + new_hero + html[hero.end():]




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
    if rendered != output:
        rendered = _hero_first_paint(rendered, uri)
    # Published G10 B01-B27 and G11 B01 are known four-tab Golden routes.
    # Make a broken initial-HTML contract fail during MkDocs build, not after
    # deployment; the older G11 B02 is intentionally skipped until upgraded.
    required = uri.startswith("thpt-preview/sgk/chuong-") or (
        uri == "thpt-preview/sgk/lop-11/chuong-i/bai-1.md"
    )
    if required and (
        rendered == output or
        'data-sgk-golden-first-paint="true"' not in rendered or
        len(_H2.findall(rendered)) != 4 or
        rendered.count('data-sgk-lesson-nav="') != 1
    ):
        raise RuntimeError("Golden first-paint build contract failed: " + uri)
    return rendered
