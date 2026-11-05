# Toán 10 SGK ChVI — 74 canonical ITEM_ID candidate crosswalk, Q15 AUTHORING preflight

PACKET_ID: G10-SGK-CHVI
ROLE: AUTHORING_ONLY
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
STATUS: ITEM_ID_INVENTORY_74_RECONCILED_WRITTEN_OUTCOME_MAPPING_PARTIAL
LEGACY_R01_CANONICAL_RECEIPT_BLOB: 23156f35aab6ec28771a6a57d48bad74f3900e9c
OLD_18_FORMATIVE_SNAPSHOT_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb
OLD_8_APPLICATION_PUBLIC_PAGE_BLOB: 4876a1d38267bfaf0a570b9ea5bffa48563488ad
CURRENT_CLIENT_CHVI_JSON_BLOB: 0760782256a2d8d91c398814e62d013cf6083eb7
R03_PED_CANONICAL_SOURCE_BLOB: 77d42ce0ecf6fd4677ea0d831589db4bb18290d8
R04_NEW_WRITTEN_REVIEWED_SOURCE_BLOB: ef0b82555bb9f8028c49d948d2276b6ea0f16956
R04_REVIEW_ACCEPTANCE_RECEIPT_BLOB: 43b2da942b9d8d3ec5a32647e3ed1a217125a255
CURRENT_PUBLIC_CANONICAL_IDS_FROM_R01_PLUS_R03: 72
R04_REVIEWED_NOT_DEPLOYED_NEW_ITEM_IDS: 2
PROPOSED_TOTAL_DISTINCT_CANONICAL_ITEM_IDS: 74
R03_PRE_CORE_FIRST_TRY_PLACEMENTS: 19
R03_NEW_DISTINCT_FIRST_TRY_ITEMS: 18
R03_REUSED_OLD_CANONICAL_ITEM: THPT-G10-B18-C01
R01_CORE_PRACTICE_APPLICATION_ITEM_IDS: 28
R01_WRITTEN_ANCHOR_ITEM_IDS: 8
R01_PUBLIC_CHAPTER_END_ITEM_IDS: 18
R04_PUBLIC_WRITTEN_SELF_CHECK_ITEM_IDS: 2
ITEM_TO_OUTCOME_DIRECT_OR_AUTHOR_MAPPED: 66
R01_WRITTEN_ITEM_TO_OUTCOME_NOT_VERIFIABLE_IN_CURRENT_PUBLIC_SOURCES: 8
PRIVATE_RD1_NEW: 0
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## Tại sao đây là một kiểm tra sư phạm thực tế?

Bảng này dựa vào **đề và kỹ năng hiện hữu** để phát hiện đường học đúng outcome, không chỉ thấy item ID hợp lệ là kết luận PASS. 28 formative R01 có đề công khai ở B15/B17/B18 JS (18 câu), Core/Topic B16 pilot (2 câu), và các bài tổng hợp A1–B4 (8 câu). 18 câu cuối chương có nguồn JSON công khai và ma trận tác giả từng đọc đề; `outcome_id` JSON vẫn đang rỗng nên đây là **phân loại đề xuất**, chưa phải metadata website. R03 đưa 19 vị trí Tự thử với 18 mã mới; `THPT-G10-B18-C01` được dùng chung FIRST_TRY/Core, **không thêm mã thứ 19**. R04 bổ sung hai câu public Written đạt NotebookLM PASS, **chưa tích hợp**.

**Giới hạn quan trọng:** R01 có 8 mã Written/Anchor lịch sử, nhưng trong những nguồn public được trực tiếp đối chiếu ở lượt này mới có **mã và role**, chưa có đủ chính đề để gắn từng `OUTCOME_ID` cụ thể. Không suy đoán chỉ từ “WRI-15” hay tên ID; ghi `UNVERIFIED_WRITTEN_OUTCOME`, blocker cần AUTHORING đối chiếu với nguồn R01 riêng. Điều đó **không hủy Academic PASS** của R01, nhưng chưa thể tự nhận ma trận V2 hoàn chỉnh cho 74 ID. Không tạo bản sao câu và không tiết lộ nguồn private để lấp bảng cho đẹp.

## 74 ID distinct — bản đồ actual item → outcome/placement/role

| ITEM_ID | R01/R03/R04 | Outcome chính hiện có chứng cứ | Vai trò / placement | Độ chắc chắn | Nguồn chứng cứ |
|---|---|---|---|---|---|
| `THPT-G10-B15-C01` | R01 | `B15_OUT_01` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Bảng dữ liệu có các cặp (x;y): (1;3), (2;4), (2;5). Đây có là một hàm số y của x không? |
| `THPT-G10-B15-C02` | R01 | `B15_OUT_02` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Tìm tập xác định của f(x)=√(2x−3) trong ℝ. |
| `THPT-G10-B15-P01` | R01 | `B15_OUT_02` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Tìm tập xác định của g(x)=(x+1)/(x²−9). |
| `THPT-G10-B15-P02` | R01 | `B15_OUT_05` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Phí giao hàng giả định (nghìn đồng): C(x)=8x với 0≤x≤2; C(x)=16+6(x−2) khi x>2; x tính b |
| `THPT-G10-B15-P03` | R01 | `B15_OUT_04` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | f(x)=/x+2/ đồng biến/nghịch biến trên những khoảng nào? |
| `THPT-G10-B15-P04` | R01 | `B15_OUT_05` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Dịch vụ giả định thu 100 nghìn đồng cho quãng đường 0<x≤2 km; trên 2 km thu thêm 12 nghì |
| `THPT-G10-B17-C01` | R01 | `B17_OUT_01` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Xét dấu f(x)=x²−4x+8 trên ℝ. |
| `THPT-G10-B17-C02` | R01 | `B17_OUT_02` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | g(x)=−3(x−2)². Khi nào g(x)=0? Có x nào làm g(x)>0 không? |
| `THPT-G10-B17-P01` | R01 | `B17_OUT_03` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Giải bất phương trình 2x²−10x+12≤0. |
| `THPT-G10-B17-P02` | R01 | `B17_OUT_03` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Giải bất phương trình −x²+2x+8>0. |
| `THPT-G10-B17-P03` | R01 | `B17_OUT_04` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Tìm m để x²−2(m+1)x+m²+3>0 với mọi số thực x. |
| `THPT-G10-B17-P04` | R01 | `B17_OUT_05` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Có 30 m lưới rào ba cạnh hình chữ nhật sát tường; x (m) là mỗi cạnh vuông góc tường. Tìm |
| `THPT-G10-B18-C01` | R01 | `B18_OUT_02` | `SGK_CORE_PRACTICE_APPLICATION + SGK_PRE_CORE_FIRST_TRY_REUSE` | `DIRECT_STEM_SAME_CANONICAL` | Giải √(x+5)=x−1 trong ℝ.; R03 FIRST_TRY17 same mathematical question/answer |
| `THPT-G10-B18-C02` | R01 | `B18_OUT_01` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Giải √((x+4)²)=√(x+4) trong ℝ. |
| `THPT-G10-B18-P01` | R01 | `B18_OUT_03` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Giải √(3x+4)=x. |
| `THPT-G10-B18-P02` | R01 | `B18_OUT_03` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Giải √(2x²+9)=x+3. |
| `THPT-G10-B18-P03` | R01 | `B18_OUT_01` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Giải trên ℝ: √(x²+7x+11)=√(x+3). |
| `THPT-G10-B18-P04` | R01 | `B18_OUT_04` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_STEM_AND_SKILL` | Tam giác vuông có hai cạnh góc vuông dài x>0 mét và 3 mét; cạnh huyền dài x+1 mét. Tìm x |
| `THPT-CORE-QF01` | R01 | `B16_OUT_02` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_VISIBLE_STEM` | Hoành độ đỉnh y=(x+3)^2−5 |
| `PRACTICE-THPT-DEMO-01` | R01 | `B16_OUT_03` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_VISIBLE_STEM` | Giao điểm parabol với trục Ox; placement Topic hiện hữu |
| `THPT-G10-CHVI-APP-A1` | R01 | `B15_OUT_02` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_VISIBLE_STEM` | Application A1: Cho \(f(x)=\sqrt{7-2x}\). 1. Tìm tập xác định \(D\). 2. Giải thích vì sao \(f(x)\ge0\ |
| `THPT-G10-CHVI-APP-A2` | R01 | `B16_OUT_03` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_VISIBLE_STEM` | Application A2: Xét \(g(x)=-x^2+6x-5\). 1. Viết thành dạng đỉnh. 2. Tìm tọa độ đỉnh, trục đối xứng và |
| `THPT-G10-CHVI-APP-A3` | R01 | `B17_OUT_03` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_VISIBLE_STEM` | Application A3: Giải cả hai bất phương trình: 1. \(x^2-7x+10<0\). 2. \(x^2-7x+10\ge0\). |
| `THPT-G10-CHVI-APP-A4` | R01 | `B17_OUT_03` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_VISIBLE_STEM` | Application A4: Giải \(-2x^2+8x+10\ge0\). |
| `THPT-G10-CHVI-APP-B1` | R01 | `B18_OUT_02` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_VISIBLE_STEM` | Application B1: Giải \(\sqrt{3x+1}=x+1\) và thử lại mọi nghiệm. |
| `THPT-G10-CHVI-APP-B2` | R01 | `B18_OUT_01` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_VISIBLE_STEM` | Application B2: Giải \(\sqrt{x^2-2x+5}=\sqrt{x+3}\). |
| `THPT-G10-CHVI-APP-B3` | R01 | `B16_OUT_05` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_VISIBLE_STEM` | Application B3: Một mảnh đất hình chữ nhật sát tường được rào ba mặt bằng \(40\) m lưới. Gọi \(x\) (m |
| `THPT-G10-CHVI-APP-B4` | R01 | `B17_OUT_04` | `SGK_CORE_PRACTICE_APPLICATION` | `DIRECT_VISIBLE_STEM` | Application B4: Tìm các giá trị thực \(m\) sao cho \(x^2-2mx+4>0\) với mọi \(x\in\mathbb{R}\). |
| `THPT-G10-B15-R01` | R01 | `B15_OUT_01` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B15-R02` | R01 | `B15_OUT_05` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B15-R03` | R01 | `B15_OUT_04` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B15-R04` | R01 | `B15_OUT_03` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B15-R05` | R01 | `B15_OUT_02` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B16-R01` | R01 | `B16_OUT_02` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B16-R02` | R01 | `B16_OUT_03` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B16-R03` | R01 | `B16_OUT_05` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B16-R04` | R01 | `B16_OUT_05` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B16-R05` | R01 | `B16_OUT_01` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B17-R01` | R01 | `B17_OUT_03` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B17-R02` | R01 | `B17_OUT_04` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B17-R03` | R01 | `B17_OUT_02` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B17-R04` | R01 | `B17_OUT_05` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B18-R01` | R01 | `B18_OUT_02` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B18-R02` | R01 | `B18_OUT_01` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B18-R03` | R01 | `B18_OUT_01` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `THPT-G10-B18-R04` | R01 | `B18_OUT_04` | `SGK_PUBLIC_CHAPTER_END_CLIENT_SELFCHECK` | `AUTHOR_MAPPING` | R03 author prompt-derived chapter-end map, not original empty JSON outcome_id |
| `HPT-G10-CHVI-WRI-15-01` | R01 | `UNVERIFIED_WRITTEN_OUTCOME` | `WRITTEN_ANCHOR_SHARED` | `HOLD` | R01 receipt ID only; item-level body not in presently verified public source |
| `HPT-G10-CHVI-WRI-15-02` | R01 | `UNVERIFIED_WRITTEN_OUTCOME` | `WRITTEN_ANCHOR_SHARED` | `HOLD` | R01 receipt ID only; item-level body not in presently verified public source |
| `HPT-G10-CHVI-WRI-17-01` | R01 | `UNVERIFIED_WRITTEN_OUTCOME` | `WRITTEN_ANCHOR_SHARED` | `HOLD` | R01 receipt ID only; item-level body not in presently verified public source |
| `HPT-G10-CHVI-WRI-17-02` | R01 | `UNVERIFIED_WRITTEN_OUTCOME` | `WRITTEN_ANCHOR_SHARED` | `HOLD` | R01 receipt ID only; item-level body not in presently verified public source |
| `HPT-G10-CHVI-WRI-18-01` | R01 | `UNVERIFIED_WRITTEN_OUTCOME` | `WRITTEN_ANCHOR_SHARED` | `HOLD` | R01 receipt ID only; item-level body not in presently verified public source |
| `HPT-G10-CHVI-WRI-18-02` | R01 | `UNVERIFIED_WRITTEN_OUTCOME` | `WRITTEN_ANCHOR_SHARED` | `HOLD` | R01 receipt ID only; item-level body not in presently verified public source |
| `HPT-WRI-DEMO-01` | R01 | `UNVERIFIED_WRITTEN_OUTCOME` | `WRITTEN_ANCHOR_SHARED` | `HOLD` | R01 receipt ID only; item-level body not in presently verified public source |
| `HPT-WRI-DEMO-ANCHOR-01` | R01 | `UNVERIFIED_WRITTEN_OUTCOME` | `WRITTEN_ANCHOR_SHARED` | `HOLD` | R01 receipt ID only; item-level body not in presently verified public source |
| `THPT-G10-CHVI-TRY01` | R03 | `B15_OUT_01` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY01 |
| `THPT-G10-CHVI-TRY02` | R03 | `B15_OUT_02` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY02 |
| `THPT-G10-CHVI-TRY03` | R03 | `B15_OUT_03` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY03 |
| `THPT-G10-CHVI-TRY04` | R03 | `B15_OUT_04` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY04 |
| `THPT-G10-CHVI-TRY05` | R03 | `B15_OUT_05` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY05 |
| `THPT-G10-CHVI-TRY06` | R03 | `B16_OUT_01` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY06 |
| `THPT-G10-CHVI-TRY07` | R03 | `B16_OUT_02` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY07 |
| `THPT-G10-CHVI-TRY08` | R03 | `B16_OUT_03` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY08 |
| `THPT-G10-CHVI-TRY09` | R03 | `B16_OUT_04` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY09 |
| `THPT-G10-CHVI-TRY10` | R03 | `B16_OUT_05` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY10 |
| `THPT-G10-CHVI-TRY11` | R03 | `B17_OUT_01` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY11 |
| `THPT-G10-CHVI-TRY12` | R03 | `B17_OUT_02` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY12 |
| `THPT-G10-CHVI-TRY13` | R03 | `B17_OUT_03` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY13 |
| `THPT-G10-CHVI-TRY14` | R03 | `B17_OUT_04` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY14 |
| `THPT-G10-CHVI-TRY15` | R03 | `B17_OUT_05` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY15 |
| `THPT-G10-CHVI-TRY16` | R03 | `B18_OUT_01` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY16 |
| `THPT-G10-CHVI-TRY18` | R03 | `B18_OUT_03` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY18 |
| `THPT-G10-CHVI-TRY19` | R03 | `B18_OUT_04` | `SGK_PRE_CORE_FIRST_TRY_FORMATIVE` | `R03_CANONICAL_SOURCE` | R03 reviewed concept-first First Try; HELP HELP-G10-CHVI-TRY19 |
| `THPT-G10-B16-R06` | R04 | `B16_OUT_04` | `SGK_CHAPTER_PUBLIC_WRITTEN_SELFCHECK` | `R04_REVIEW_ACCEPTED` | R04 scoped NotebookLM A/PED PASS 2/2; post-Final-Submit rubric and HELP |
| `THPT-G10-B17-R05` | R04 | `B17_OUT_01` | `SGK_CHAPTER_PUBLIC_WRITTEN_SELFCHECK` | `R04_REVIEW_ACCEPTED` | R04 scoped NotebookLM A/PED PASS 2/2; post-Final-Submit rubric and HELP |

## 19 vị trí FIRST_TRY và D6 — không nhân bản câu

| OUTCOME_ID | Canonical item at FIRST_TRY | HELP_ID | Đường khắc phục (SOURCE R03) |
|---|---|---|---|
| `B15_OUT_01` | `THPT-G10-CHVI-TRY01` | `HELP-G10-CHVI-TRY01` | `THPT-G10-B15-C01` |
| `B15_OUT_02` | `THPT-G10-CHVI-TRY02` | `HELP-G10-CHVI-TRY02` | `THPT-G10-B15-C02` |
| `B15_OUT_03` | `THPT-G10-CHVI-TRY03` | `HELP-G10-CHVI-TRY03` | `SGK Bài 15 §2 — điểm thuộc đồ thị` |
| `B15_OUT_04` | `THPT-G10-CHVI-TRY04` | `HELP-G10-CHVI-TRY04` | `THPT-G10-B15-P03` |
| `B15_OUT_05` | `THPT-G10-CHVI-TRY05` | `HELP-G10-CHVI-TRY05` | `THPT-G10-B15-P02` |
| `B16_OUT_01` | `THPT-G10-CHVI-TRY06` | `HELP-G10-CHVI-TRY06` | `SGK Bài 16 §1 — hệ số a khác 0` |
| `B16_OUT_02` | `THPT-G10-CHVI-TRY07` | `HELP-G10-CHVI-TRY07` | `THPT-CORE-QF01` |
| `B16_OUT_03` | `THPT-G10-CHVI-TRY08` | `HELP-G10-CHVI-TRY08` | `THPT-G10-CHVI-APP-A2` |
| `B16_OUT_04` | `THPT-G10-CHVI-TRY09` | `HELP-G10-CHVI-TRY09` | `SGK Bài 16 §2 — tính biến thiên và tập giá trị` |
| `B16_OUT_05` | `THPT-G10-CHVI-TRY10` | `HELP-G10-CHVI-TRY10` | `SGK Bài 16 §5 — mô hình thực tế` |
| `B17_OUT_01` | `THPT-G10-CHVI-TRY11` | `HELP-G10-CHVI-TRY11` | `THPT-G10-B17-C01` |
| `B17_OUT_02` | `THPT-G10-CHVI-TRY12` | `HELP-G10-CHVI-TRY12` | `THPT-G10-B17-C02` |
| `B17_OUT_03` | `THPT-G10-CHVI-TRY13` | `HELP-G10-CHVI-TRY13` | `THPT-G10-B17-P01` |
| `B17_OUT_04` | `THPT-G10-CHVI-TRY14` | `HELP-G10-CHVI-TRY14` | `THPT-G10-B17-P03` |
| `B17_OUT_05` | `THPT-G10-CHVI-TRY15` | `HELP-G10-CHVI-TRY15` | `THPT-G10-B17-P04` |
| `B18_OUT_01` | `THPT-G10-CHVI-TRY16` | `HELP-G10-CHVI-TRY16` | `THPT-G10-B18-C02` |
| `B18_OUT_02` | `THPT-G10-B18-C01` | `HELP-G10-CHVI-TRY17` | `THPT-G10-B18-P01` |
| `B18_OUT_03` | `THPT-G10-CHVI-TRY18` | `HELP-G10-CHVI-TRY18` | `THPT-G10-B18-P01` |
| `B18_OUT_04` | `THPT-G10-CHVI-TRY19` | `HELP-G10-CHVI-TRY19` | `THPT-G10-B18-P04` |

## Cổng Q15 và Q16

- Q15 ID uniqueness: **74/74 unique** across 54 R01 +18 new R03 +2 R04, regardless of many placements. Eight historical Written IDs **still need evidence-based primary outcome**; matrix is marked partial, not falsely signed.
- R01 18 end-check and R04 two proposed Written end-check: **CLIENT_SELF_CHECK_NO_MASTERY**, no official RD1. Answers/right-wrong/rubric/HELP/Tutor cannot show pre Final Submit. R04 rubric 8/10 points means **tự đối chiếu**, not Skill Mastery awarded.
- R03 public First Try is prior to Core, self-revealed explanation; not reused for independent postchapter evidence.
- `PRACTICE-THPT-DEMO-01` originates in Topic preview; referencing by placement for SGK Practice must remain optional; the **SGK** body is self-sufficient without an obligatory Topic link. The actual website is untouched by this AUTHORING register.
- A source snippet that currently contains keys or hints belongs to **public formative/selfcheck** only; protected RD1 needs separate private custody and cannot be inferred from public 20 candidates.

## Gate and next

This is a **source-locked preflight register**, NOT a V2 signed ready packet. Preserve original NotebookLM verdict on correct immutable sources; confirm the eight R01 Written item-to-outcome mappings against their actual reviewed source before claiming Q15 complete. Q18 complete whole-chapter provenance remains AUTHORING-owned; do not delegate hashes to NotebookLM. No release integration, merge/deploy, Mastery, REGISTER promotion or `ready/` manifest.
