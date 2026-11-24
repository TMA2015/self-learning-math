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
    if level == "lop-11" and chapter == "i" and number in (1, 2, 3, 4):
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



# SGK-REL-006: transform only the fourth tab of the three exact W1 pages.
# Preserve original h3 anchor ID and the complete rendered content bytes.
_W1_MISTAKE_COUNTS = {2: 5, 3: 6, 4: 6}
def _w1_mistake_disclosures(html: str, number: int) -> str:
    heading = '<h2 class="thpt-g10-section-heading">' + _HEADINGS[3] + '</h2>'
    if html.count(heading) != 1:
        raise RuntimeError("W1 tab4 heading changed")
    start = html.index(heading) + len(heading)
    foot = re.search(r'<p>\s*<p class="thpt-r4-footnote">|<p class="thpt-r4-footnote">', html[start:])
    if foot is None:
        raise RuntimeError("W1 tab4 source note missing")
    end = start + foot.start()
    body = html[start:end]
    pattern = re.compile(r'<h3 id="([^"]+)">(4\.\d+\.[^<]+)</h3>\s*((?:<p>[\s\S]*?</p>\s*){3})')
    matches = list(pattern.finditer(body))
    if len(matches) != _W1_MISTAKE_COUNTS[number] or pattern.sub("", body).strip():
        raise RuntimeError("W1 tab4 unexpected source shape: B" + str(number))
    for i, item in enumerate(matches, 1):
        if not item[2].startswith(f"4.{i}. ") or re.findall(r'<p><strong>([^<]+)</strong>', item[3])[:3] != ["Dấu hiệu:", "Vì sao sai:", "Cách sửa:"]:
            raise RuntimeError("W1 tab4 missing original recovery labels")
    def disclosure(item):
        return '<details class="tip" id="' + item[1] + '">\n<summary>' + item[2] + '</summary>\n' + item[3] + '</details>\n'
    return html[:start] + '\n<p>Mở từng mục để xem dấu hiệu, vì sao sai và cách sửa.</p>\n' + pattern.sub(disclosure, body) + html[end:]

# #1039 W2: only these five signed Knowledge routes. W1 remains byte-identical.
_W2_ROUTES = {
    f"thpt-preview/sgk/lop-11/chuong-{chapter}/bai-{n}.md": (n, 5 if n == 5 else 6)
    for chapter, numbers in (("ii", (5, 6, 7)), ("iii", (8, 9)))
    for n in numbers
}

def _w2_mistake_disclosures(html: str, number: int, count: int) -> str:
    heading = '<h2 class="thpt-g10-section-heading">' + _HEADINGS[3] + '</h2>'
    if html.count(heading) != 1:
        raise RuntimeError("W2 tab4 heading changed")
    start = html.index(heading) + len(heading)
    foot = re.search(r'<p>\s*<p class="thpt-r4-footnote">|<p class="thpt-r4-footnote">', html[start:])
    if foot is None:
        raise RuntimeError("W2 tab4 source note missing")
    end = start + foot.start()
    body = html[start:end]
    # Preserve heading markup (including inline math), IDs, and the 3 original paragraphs.
    pattern = re.compile(r'<h3 id="([^"]+)">(4\.\d+\.[\s\S]*?)</h3>\s*((?:<p>[\s\S]*?</p>\s*){3})')
    matches = list(pattern.finditer(body))
    tail = pattern.sub("", body)
    if len(matches) != count:
        raise RuntimeError("W2 tab4 unexpected recovery count: B" + str(number))
    if number == 5:
        valid_tail = not tail.strip()
    else:
        valid_tail = re.fullmatch(r'\s*<p><strong>Học tiếp:</strong>[\s\S]*?</p>\s*', tail) is not None
    if not valid_tail:
        raise RuntimeError("W2 tab4 unexpected trailing content: B" + str(number))
    for i, item in enumerate(matches, 1):
        if not item[2].startswith(f"4.{i}. ") or re.findall(r'<p><strong>([^<]+)</strong>', item[3])[:3] != ["Dấu hiệu:", "Vì sao sai:", "Cách sửa:"]:
            raise RuntimeError("W2 tab4 missing original recovery labels")
    def disclosure(item):
        return '<details class="tip" id="' + item[1] + '">\n<summary>' + item[2] + '</summary>\n' + item[3] + '</details>\n'
    return html[:start] + '\n<p>Mở từng mục để xem dấu hiệu, vì sao sai và cách sửa.</p>\n' + pattern.sub(disclosure, body) + html[end:]

def _render_w2(output: str, uri: str) -> str:
    number, count = _W2_ROUTES[uri]
    rendered = _render_first_paint(output, ("thpt-g10-knowledge-ap1", "thpt-g10-chiv-golden"))
    if rendered != output:
        rendered = _hero_first_paint(rendered, uri)
    if rendered == output or 'data-sgk-golden-first-paint="true"' not in rendered or len(_H2.findall(rendered)) != 4 or rendered.count('data-sgk-lesson-nav="') != 1:
        raise RuntimeError("W2 Golden first-paint build contract failed: " + uri)
    rendered = _w2_mistake_disclosures(rendered, number, count)
    # Reuse the existing W1 Golden values, no shared CSS/JS mutations.
    return rendered.replace(
        '</article>',
        """<style id="sgk-g11-w2-golden-formula">
.md-typeset.thpt-g10-knowledge-ap1.thpt-g10-chiv-golden[data-sgk-golden-first-paint] .thpt-r4-key-formula {
  background: transparent; border: 1px solid var(--slm-g10-line);
  border-radius: 8px; padding: 12px 14px; margin: 14px 0;
  line-height: 1.75; overflow-x: auto; max-width: 100%;
}
[data-md-color-scheme="slate"] .md-typeset.thpt-g10-knowledge-ap1.thpt-g10-chiv-golden[data-sgk-golden-first-paint] .thpt-r4-key-formula {
  background: transparent; border-color: #58677f; color: #eef4ff;
}
</style><script id="sgk-g11-w2-golden-tabs">
(() => {
 const mount=()=>{
  if(!/\/thpt-preview\/sgk\/lop-11\/(?:chuong-ii\/bai-[567]|chuong-iii\/bai-[89])\/?$/.test(location.pathname))return;
  const a=document.querySelector("article[data-sgk-golden-first-paint]");
  const t=a?.querySelector(":scope > .tabbed-set");
  if(!t||t.dataset.g11W2Golden==="true")return;
  const labels=[...t.querySelectorAll(":scope > .tabbed-labels > label")];
  const radios=[...t.querySelectorAll(':scope > input[type="radio"]')];
  if(labels.length!==4||radios.length!==4||!labels.every((l,i)=>l.htmlFor===radios[i].id))return;
  const sync=()=>labels.forEach((l,i)=>l.classList.toggle("slm-g10-active-tab",radios[i].checked));
  t.addEventListener("change",sync);sync();t.dataset.g11W2Golden="true";
 };
 if(window.document$?.subscribe)window.document$.subscribe(mount);
 else if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount);
 else mount();
})();
</script></article>""", 1)

# #1039 W3 exact route scope; reuse proven recovery transformation.
_W3_ROUTES = {f"thpt-preview/sgk/lop-11/chuong-iv/bai-{n}.md": (n, 6) for n in range(10, 15)}

def _render_w3(output: str, uri: str) -> str:
    number, count = _W3_ROUTES[uri]
    rendered = _render_first_paint(output, ("thpt-g10-knowledge-ap1", "thpt-g10-chiv-golden"))
    if rendered != output:
        rendered = _hero_first_paint(rendered, uri)
    if rendered == output or 'data-sgk-golden-first-paint="true"' not in rendered or len(_H2.findall(rendered)) != 4 or rendered.count('data-sgk-lesson-nav="') != 1:
        raise RuntimeError("W3 Golden first-paint build contract failed: " + uri)
    rendered = _w2_mistake_disclosures(rendered, number, count)
    # Reuse the existing W1 Golden values, no shared CSS/JS mutations.
    return rendered.replace(
        '</article>',
        """<style id="sgk-g11-w3-golden-formula">
.md-typeset.thpt-g10-knowledge-ap1.thpt-g10-chiv-golden[data-sgk-golden-first-paint] .thpt-r4-key-formula {
  background: transparent; border: 1px solid var(--slm-g10-line);
  border-radius: 8px; padding: 12px 14px; margin: 14px 0;
  line-height: 1.75; overflow-x: auto; max-width: 100%;
}
[data-md-color-scheme="slate"] .md-typeset.thpt-g10-knowledge-ap1.thpt-g10-chiv-golden[data-sgk-golden-first-paint] .thpt-r4-key-formula {
  background: transparent; border-color: #58677f; color: #eef4ff;
}
</style><script id="sgk-g11-w3-golden-tabs">
(() => {
 const mount=()=>{
  if(!/\/thpt-preview\/sgk\/lop-11\/chuong-iv\/bai-1[0-4]\/?$/.test(location.pathname))return;
  const a=document.querySelector("article[data-sgk-golden-first-paint]");
  const t=a?.querySelector(":scope > .tabbed-set");
  if(!t||t.dataset.g11W3Golden==="true")return;
  const labels=[...t.querySelectorAll(":scope > .tabbed-labels > label")];
  const radios=[...t.querySelectorAll(':scope > input[type="radio"]')];
  if(labels.length!==4||radios.length!==4||!labels.every((l,i)=>l.htmlFor===radios[i].id))return;
  const sync=()=>labels.forEach((l,i)=>l.classList.toggle("slm-g10-active-tab",radios[i].checked));
  t.addEventListener("change",sync);sync();t.dataset.g11W3Golden="true";
 };
 if(window.document$?.subscribe)window.document$.subscribe(mount);
 else if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount);
 else mount();
})();
</script></article>""", 1)

# #1039 W4 exact route scope; reuse proven recovery transformation.
_W4_ROUTES = {f"thpt-preview/sgk/lop-11/chuong-v/bai-{n}.md": (n, 6) for n in range(15, 18)}

def _render_w4(output: str, uri: str) -> str:
    number, count = _W4_ROUTES[uri]
    rendered = _render_first_paint(output, ("thpt-g10-knowledge-ap1", "thpt-g10-chiv-golden"))
    if rendered != output:
        rendered = _hero_first_paint(rendered, uri)
    if rendered == output or 'data-sgk-golden-first-paint="true"' not in rendered or len(_H2.findall(rendered)) != 4 or rendered.count('data-sgk-lesson-nav="') != 1:
        raise RuntimeError("W4 Golden first-paint build contract failed: " + uri)
    rendered = _w2_mistake_disclosures(rendered, number, count)
    # Reuse the existing W1 Golden values, no shared CSS/JS mutations.
    return rendered.replace(
        '</article>',
        """<style id="sgk-g11-w4-golden-formula">
.md-typeset.thpt-g10-knowledge-ap1.thpt-g10-chiv-golden[data-sgk-golden-first-paint] .thpt-r4-key-formula {
  background: transparent; border: 1px solid var(--slm-g10-line);
  border-radius: 8px; padding: 12px 14px; margin: 14px 0;
  line-height: 1.75; overflow-x: auto; max-width: 100%;
}
[data-md-color-scheme="slate"] .md-typeset.thpt-g10-knowledge-ap1.thpt-g10-chiv-golden[data-sgk-golden-first-paint] .thpt-r4-key-formula {
  background: transparent; border-color: #58677f; color: #eef4ff;
}
</style><script id="sgk-g11-w4-golden-tabs">
(() => {
 const mount=()=>{
  if(!/\/thpt-preview\/sgk\/lop-11\/chuong-v\/bai-1[5-7]\/?$/.test(location.pathname))return;
  const a=document.querySelector("article[data-sgk-golden-first-paint]");
  const t=a?.querySelector(":scope > .tabbed-set");
  if(!t||t.dataset.g11W4Golden==="true")return;
  const labels=[...t.querySelectorAll(":scope > .tabbed-labels > label")];
  const radios=[...t.querySelectorAll(':scope > input[type="radio"]')];
  if(labels.length!==4||radios.length!==4||!labels.every((l,i)=>l.htmlFor===radios[i].id))return;
  const sync=()=>labels.forEach((l,i)=>l.classList.toggle("slm-g10-active-tab",radios[i].checked));
  t.addEventListener("change",sync);sync();t.dataset.g11W4Golden="true";
 };
 if(window.document$?.subscribe)window.document$.subscribe(mount);
 else if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount);
 else mount();
})();
</script></article>""", 1)

# #1039 W5 exact route scope; reuse proven recovery transformation.
_W5_ROUTES = {f"thpt-preview/sgk/lop-11/chuong-vi/bai-{n}.md": (n, 6) for n in range(18, 22)}

def _render_w5(output: str, uri: str) -> str:
    number, count = _W5_ROUTES[uri]
    rendered = _render_first_paint(output, ("thpt-g10-knowledge-ap1", "thpt-g10-chiv-golden"))
    if rendered != output:
        rendered = _hero_first_paint(rendered, uri)
    if rendered == output or 'data-sgk-golden-first-paint="true"' not in rendered or len(_H2.findall(rendered)) != 4 or rendered.count('data-sgk-lesson-nav="') != 1:
        raise RuntimeError("W5 Golden first-paint build contract failed: " + uri)
    rendered = _w2_mistake_disclosures(rendered, number, count)
    # Reuse the existing W1 Golden values, no shared CSS/JS mutations.
    return rendered.replace(
        '</article>',
        """<style id="sgk-g11-w5-golden-formula">
.md-typeset.thpt-g10-knowledge-ap1.thpt-g10-chiv-golden[data-sgk-golden-first-paint] .thpt-r4-key-formula {
  background: transparent; border: 1px solid var(--slm-g10-line);
  border-radius: 8px; padding: 12px 14px; margin: 14px 0;
  line-height: 1.75; overflow-x: auto; max-width: 100%;
}
[data-md-color-scheme="slate"] .md-typeset.thpt-g10-knowledge-ap1.thpt-g10-chiv-golden[data-sgk-golden-first-paint] .thpt-r4-key-formula {
  background: transparent; border-color: #58677f; color: #eef4ff;
}
</style><script id="sgk-g11-w5-golden-tabs">
(() => {
 const mount=()=>{
  if(!/\/thpt-preview\/sgk\/lop-11\/chuong-vi\/bai-(?:1[89]|2[01])\/?$/.test(location.pathname))return;
  const a=document.querySelector("article[data-sgk-golden-first-paint]");
  const t=a?.querySelector(":scope > .tabbed-set");
  if(!t||t.dataset.g11W5Golden==="true")return;
  const labels=[...t.querySelectorAll(":scope > .tabbed-labels > label")];
  const radios=[...t.querySelectorAll(':scope > input[type="radio"]')];
  if(labels.length!==4||radios.length!==4||!labels.every((l,i)=>l.htmlFor===radios[i].id))return;
  const sync=()=>labels.forEach((l,i)=>l.classList.toggle("slm-g10-active-tab",radios[i].checked));
  t.addEventListener("change",sync);sync();t.dataset.g11W5Golden="true";
 };
 if(window.document$?.subscribe)window.document$.subscribe(mount);
 else if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount);
 else mount();
})();
</script></article>""", 1)

def on_post_page(output, page, config):
    uri = page.file.src_uri
    if uri in _W5_ROUTES:
        return _render_w5(output, uri)
    if uri in _W4_ROUTES:
        return _render_w4(output, uri)
    if uri in _W3_ROUTES:
        return _render_w3(output, uri)
    if uri in _W2_ROUTES:
        return _render_w2(output, uri)
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
        uri in {f"thpt-preview/sgk/lop-11/chuong-i/bai-{n}.md" for n in range(1, 5)}
    )
    if required and (
        rendered == output or
        'data-sgk-golden-first-paint="true"' not in rendered or
        len(_H2.findall(rendered)) != 4 or
        rendered.count('data-sgk-lesson-nav="') != 1
    ):
        raise RuntimeError("Golden first-paint build contract failed: " + uri)
    if uri in {f"thpt-preview/sgk/lop-11/chuong-i/bai-{n}.md" for n in (2, 3, 4)}:
        rendered = _w1_mistake_disclosures(rendered, int(uri.rsplit('-', 1)[1][:-3]))
        # #1039 W1: only the three exact approved Golden Knowledge routes.
        # The existing G10 B10 formula rule is applied unchanged in value.
        # Its selector is scoped to this built article, overriding the
        # authoring-only neutral formula dimensions without altering source.
        rendered = rendered.replace(
            '</article>',
            """<style id="sgk-g11-w1-golden-formula">
.md-typeset.thpt-g10-knowledge-ap1.thpt-g10-chiv-golden[data-sgk-golden-first-paint] .thpt-r4-key-formula {
  background: transparent; border: 1px solid var(--slm-g10-line);
  border-radius: 8px; padding: 12px 14px; margin: 14px 0;
  line-height: 1.75; overflow-x: auto; max-width: 100%;
}
[data-md-color-scheme="slate"] .md-typeset.thpt-g10-knowledge-ap1.thpt-g10-chiv-golden[data-sgk-golden-first-paint] .thpt-r4-key-formula {
  background: transparent; border-color: #58677f; color: #eef4ff;
}
</style><script id="sgk-g11-w1-golden-tabs">
(() => {
 const mount=()=>{
  if(!/\/thpt-preview\/sgk\/lop-11\/chuong-i\/bai-[234]\/?$/.test(location.pathname))return;
  const a=document.querySelector("article[data-sgk-golden-first-paint]");
  const t=a?.querySelector(":scope > .tabbed-set");
  if(!t||t.dataset.g11W1Golden==="true")return;
  const labels=[...t.querySelectorAll(":scope > .tabbed-labels > label")];
  const radios=[...t.querySelectorAll(':scope > input[type="radio"]')];
  if(labels.length!==4||radios.length!==4||!labels.every((l,i)=>l.htmlFor===radios[i].id))return;
  const sync=()=>labels.forEach((l,i)=>l.classList.toggle("slm-g10-active-tab",radios[i].checked));
  t.addEventListener("change",sync);sync();t.dataset.g11W1Golden="true";
 };
 if(window.document$?.subscribe)window.document$.subscribe(mount);
 else if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount);
 else mount();
})();
</script></article>""", 1)
    return rendered
