# CĐ15 R01 — AUTHORING QA checkpoint (NOT a signed Q18 PASS)

**STATE:** `Q18_CONTENT_CHECK_PENDING` / `TOP15_SCOPE_ID_PROVISIONAL` · One standard `SLM-THPT-QUALITY-ONE / 3.1.0`.

## Nguồn và tính bất biến

- SGK Toán 11 Tập Một ChIV B10–B14 source S1 receipt from PR #705 (source blob `e945ccdd434689a5c6d8d7bfd44ba26d287a7b9b`), SBT source references inherited, no claim of new physical PDF review.
- Topic R01 learner source: `Temp_TOPIC15_SPATIAL_PARALLELISM_R01_FULL_22_OUTCOMES_20261113.md`; model source R01 `Temp_THPT_TOPIC15_LINE_PLANE_RELATION_R01_20261113.html` — source blobs to be confirmed after GitHub commit.
- Academic reviewer history of SGK **not automatically granted** to new Topic R01. Self-review is not external NotebookLM PASS.

## QA đã thực thi trên bản làm việc

- `STRUCTURE=PASS`: 22/22 learner modules, 22 First Try and reveal, 22 reasoning examples, 22 D6 prompts, 5 guided source figure placements, 3 learner pages.
- `Q15_STATIC=PASS`: 49 unique new IDs, exact 40 original source IDs by references = 89 unique; 8 self-check placements reuse IDs and do not increase unique count.
- `R00_IMMUTABILITY=PASS`: seven old P01–P05/W01–W02 complete question blocks identical to R00 candidate; no re-ID.
- `COMPUTATION_SPOT_TEST=PASS`: 26 explicit independent formula, coordinate, section scale, projection and math-edge assertions listed below.
- `MODEL_CHROMIUM=PASS` for widths 390/820/1440: initial parallel, h=0 contained, α=45 intersection, α=5 exact tan-text/approx point, Reset, no overflow or page JS errors. **Real iPhone Safari, touch/embedding, website Golden/AP tests NOT TESTED**.
- `MODEL_DISPLAY_DELTA=FIXED`: R00 printed rounded slope `0.09` at α=5° while calculating precise tan(5°), potentially inconsistent; R01 now displays exact `tan(5°)` and marks x as approximation.
- `Q01_SOURCE=HISTORICAL_RECEIPT_REFERENCED`, not a new SGK scan; `Q18_SELFQA=NOT_SIGNED` and `CONTENT_READY=NO`.

## Danh sách 26 kiểm tra toán có kết quả

1. PASS — model contained h=0 alpha=0
2. PASS — model h=1 alpha=0 parallel
3. PASS — model h=1 alpha=45 intersection x=-1
4. PASS — model h=-1 alpha=45 intersection x=1
5. PASS — model h=1 alpha=5 beyond viewport
6. PASS — line d 3+t intersect z0 t=-3
7. PASS — new P09 t=2 intersect (4,1,0)
8. PASS — new P12 ratios 2:3 ->2/5
9. PASS — new P19 parallel intersection lines
10. PASS — new P20 oblique projection point
11. PASS — new P22 midpoint preservation
12. PASS — area t=3/5 original75 ->27
13. PASS — area t=2/5 original100 ->16
14. PASS — perimeter t=3/5 original30 ->18
15. PASS — area ratio t=3/5 9/25
16. PASS — new W05 base area
17. PASS — new W05 section area
18. PASS — new W05 area ratio
19. PASS — rectangle original dot AB AD =0
20. PASS — oblique image rectangle angle nonright
21. PASS — projection U and V equal
22. PASS — parallel plane z0 and z2 disjoint
23. PASS — two intersecting planes x0 z0 meet on y axis
24. PASS — independent line parameter skew candidate
25. PASS — new P07 collinear abc
26. PASS — new P07 noncollinear ABD

## P0/P1 và cổng chưa đạt

- `TOP15_SCOPE_ID_PROVISIONAL`: chưa tìm thấy bằng chứng danh mục phân nhóm 22 Chuyên đề khóa tên CĐ15. Không tự chốt số thứ tự là taxonomy website.
- `TOP15_Q18_FULL_SUBSTANTIVE_QA_PENDING`: đối chiếu toàn 22 outcome với S1, thẩm định khó/giải thích và figure placement/Readiness cần ký receipt thực; 26 tests là **spot checks**, không chứng minh mọi đề đều đúng.
- `TOP15_MODEL_IOS_EMBED_NOT_TESTED`: Safari thật/touch và nhúng Knowledge thuộc RELEASE, không suy từ Chromium headless.
- `TOP15_FINAL_SOURCE_LOCK_PENDING`: khóa Git blobs và QA receipt sau khi commit; chưa tạo V2/ready/REGISTER vì chưa đủ substantive gate.
- Không có quyền merge/deploy/đổi website/Firebase/student data; private RD1 giữ riêng.

**NEXT:** hoàn thiện Q18 author audit theo 22 outcome và xác nhận taxonomy CĐ15; khi P0/P1=0 và source-lock thật thì AUTHORING_PASS=CONTENT_READY cùng một pass V2/ready/REGISTER, sau đó dừng tại handoff.