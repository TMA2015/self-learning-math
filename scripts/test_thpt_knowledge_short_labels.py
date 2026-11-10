"""Build-time editorial title regression. No academic/source or assessment mutations."""
from __future__ import annotations

import importlib.util
from pathlib import Path
from types import SimpleNamespace

root = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("topic_markdown_fixes", root / "hooks" / "topic_markdown_fixes.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


def page(path: str):
    return SimpleNamespace(file=SimpleNamespace(src_path=path))


def run(markdown: str, path: str) -> str:
    return module.on_page_markdown(markdown, page(path), None, None)


lesson = "thpt-preview/sgk/chuong-i/bai-2.md"
sample = """
<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" data-thpt-first-try-id="ITEM-01" markdown="1">
<summary>Em đã tính? Mở lời giải để đối chiếu</summary>
  $1+1=2$.
</details>
<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" markdown="1">
<summary>Mở lời giải sau khi tự tính</summary>
</details>
    ??? question "Em đã chọn đúng góc? Mở đối chiếu"
        Đây là đáp án gốc.
    ??? question "Em đã kiểm điều kiện tam giác? Mở đáp án"
        Đây là đáp án.
    ??? question "Em đã tự tính khoảng cách? Mở lời giải"
        Đây là lời giải.
    ??? note "Mở lời giải"
        Đây là ví dụ mẫu.
    ??? question "Tự mở kết quả sau khi đã thử"
        Lời giải chỉ mở khi người học chọn.
    ??? question "Kiến thức mở rộng: tâm sai"
        Đây là tiêu đề khái niệm, không phải lời giải.
    ??? question "Luyện tập mở rộng và chuyên sâu"
        Không phải câu cần đổi nhãn.
    **Em vận dụng.** Hãy tính toán.
    **Em vận dụng — giao và hợp.** Hãy đọc hình.
## Em vận dụng
Đây là đoạn văn nói “Em vận dụng” và “mở lời giải sau khi tự làm” tự nhiên, giữ nguyên.
"""

rendered = run(sample, lesson)
assert rendered.count("Đối chiếu") == 6, rendered
assert '<summary>Đối chiếu</summary>' in rendered
assert '??? note "Lời giải"' in rendered
assert '??? question "Kiến thức mở rộng: tâm sai"' in rendered
assert '??? question "Luyện tập mở rộng và chuyên sâu"' in rendered
assert "**Vận dụng.**" in rendered
assert "**Vận dụng — giao và hợp.**" in rendered
assert "## Vận dụng" in rendered
assert 'data-thpt-first-try-id="ITEM-01"' in rendered
assert "$1+1=2$." in rendered
assert 'Đây là đoạn văn nói “Em vận dụng”' in rendered

for route in (
    "thpt-preview/sgk/chuong-i/luyen-tap.md",
    "thpt-preview/sgk/chuong-i/tu-kiem-tra-chuong.md",
    "kien-thuc/10-ham-so-do-thi/index.md",
    "thpt-preview/sgk/lop-11/chuong-i/luyen-tap.md",
    "thpt-preview/chuyen-de/ham-so/tu-kiem-tra.md",
):
    if route.startswith("kien-thuc/"):
        # THCS has a separate source-rendering hook: only the new label
        # transformer must not be applied; no THCS Golden layout changes.
        assert not module._is_thpt_knowledge_page(route), route
        continue
    assert run(sample, route) == sample, route

assert module._is_thpt_knowledge_page("thpt-preview/sgk/lop-11/chuong-i/bai-1.md")
assert module._is_thpt_knowledge_page("thpt-preview/sgk/lop-12/chuong-i/bai-1.md")
assert module._is_thpt_knowledge_page("thpt-preview/chuyen-de/ham-so/kien-thuc.md")
assert run(sample, "thpt-preview/chuyen-de/ham-so/kien-thuc.md") == rendered

# Idempotence matters for multiple MkDocs build variants and source-lock QA.
assert module._short_thpt_knowledge_labels(rendered) == rendered
print("PASS short THPT Knowledge headings: six reveals (including mở kết quả), Vận dụng, scope & Q16 boundaries")
