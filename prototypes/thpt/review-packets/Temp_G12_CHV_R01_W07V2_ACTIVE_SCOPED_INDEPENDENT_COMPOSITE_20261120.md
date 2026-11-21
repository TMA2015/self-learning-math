# G12 Chương V gói R01 — Delta C W07 v2 trên canonical hiện hành, bảo toàn snapshot trước

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
PACKET_ID: G12-SGK-CHV-B14-B17-R01
REVIEW_TYPE: COMPOSITE_PRIOR_SIGNED_SGK_R01_PLUS_AFFECTED_INDEPENDENT_W07_V2
SOURCE_BLOB: a24abd682932e11761f7c85fa3a3d3cdd77b600e
SOURCE_PATH: prototypes/thpt/content-drafts/G12_SGK_CHV_B14_B17_PUBLIC_CANONICAL_R01_SOURCE_LOCK.md
PREVIOUS_ACCEPTED_SGK_SOURCE_BLOB: 11eb2834cfdb4a24685157f84666c2bb0767970a
PREVIOUS_REVIEW_RECEIPT_BLOB: a07070119259bd0133535fc3250d008cd78d8195
NEW_AFFECTED_INDEPENDENT_RECEIPT_BLOB: fac6e71538a1e0b1d2cd2d216bc6abaef9d27bba
ACADEMIC_VERDICT: PASS_ON_COMPOSITE_SCOPED_EVIDENCE_NOT_A_NEW_FULL_CHAPTER_REVIEW
PED_VERDICT: PASS_ON_COMPOSITE_SCOPED_EVIDENCE_NOT_A_NEW_FULL_CHAPTER_REVIEW
P0: 0
P1: 0
P2: 0
MINIMAL_DELTA: NONE
RELEASE_AUTHORIZATION: NO

## Cơ sở học thuật không suy rộng

1. [Nguồn SGK Chương V R01 cũ](../release-queue/archive/G12-SGK-CHV-B14-B17-R01.md) giữ nguyên ở Git blob `11eb2834cfdb4a24685157f84666c2bb0767970a` (bản đã ký Q01–Q18, 24 outcomes/96 public item IDs). Composite reviewer gốc `a07070119259bd0133535fc3250d008cd78d8195` đã bao phủ phần không bị sửa, bao gồm W01 rubric và phạm vi B14–B17. Không tự khẳng định reviewer vừa xem lại cả Chương V.
2. Tác giả đã đối chiếu chính xác **hai nguồn bằng cách thay đúng khối `THPT-G12-B14-W07` thành placeholder**: 100% byte bên ngoài khối W07 trùng nhau. Trong khối W07 chỉ thay **đề, đáp án, lời giải, rubric** và gắn `CONTENT_VERSION: 2`; vẫn cùng ITEM_ID; 96/96 unique public canonical IDs giữ nguyên.
3. Reviewer độc lập mới **Academic PASS + PED PASS; P0/P1/P2 = 0/0/0; MINIMAL_DELTA NONE** cho W07 v2 cùng TOP18-O38/O23 và ngữ cảnh O40; biên bản do chủ dự án cung cấp, được ghi vào `prototypes/thpt/review-packets/Temp_TOPIC18_W07_O38_O23_NOTEBOOKLM_INDEPENDENT_ACADEMIC_PED_PASS_20261120.md`. Các kết luận chứng minh riêng phần W07 được sửa và tương thích hình học mặt/khối cầu.
4. Đây là **hợp nhất bằng chứng từ snapshot cũ bất biến + review độc lập Delta C đúng phạm vi**, không phải kết luận NotebookLM độc lập mới cho cả 24 SGK outcomes. Nguồn R02 chỉ được coi là canonical mới sau kiểm tra handoff, manifest, Register/HEAD CI và rút R01 khỏi danh sách *active*; không phải bằng chứng website đã phát hành.

## Nội dung toán học đã phản biện

- Mặt cầu `{M: IM=R}` khác khối cầu `{M: IM≤R}`. Với chân vuông H từ I xuống P, h=IH≥0, HM²=R²−h².
- h<R: **đường tròn** tâm H bán kính `sqrt(R²−h²)` trên mặt cầu; h=R: một tiếp điểm; h>R: rỗng. Đĩa tròn chỉ là giao của khối cầu với P khi h<R.
- Rubric W07 /5: 2 điểm điều kiện/ba trường hợp, 1 điểm dựng H, 1 điểm Pitago và r, 1 điểm phân biệt đường tròn/đĩa cùng trường hợp tiếp xúc/không giao. Không còn đòi ý nghĩa vật lý ngoài đề.
- `G12-CHV-B14-O07` chỉ có placement liên kết tùy chọn sau B17. Tránh đẩy mặt cầu thành Core bắt buộc ở B14.

## Q15, Q16, Q18 và ranh giới

CANONICAL_Q15: One canonical `THPT-G12-B14-W07` version2 in the one active R01 packet's source path; its previous version1 is immutable historical Git snapshot only, not a second currently active owner. Topic18 W07 displays exact same stem/key/proof/rubric as successor bank. No duplicated item IDs.
ASSESSMENT_Q16: 24 public END item placements remain reuse-only, no independent readiness/Mastery from practice/self comparison; 28 private RD1 items not included in Git; no Final Submit change.
Q18_REVIEW_LIMIT: scoped independent reviewer on W07, original SGK R01 review stays historical; only-source-cloned 95 other items are byte-identical.
SBT_P25: unverified original scan page citation is nonblocking; the mathematics above was independently proven, no new SBT text invented.
AUTHORING_SIGNOFF: full new versioned SGK source candidate is exact proposed approved Git blob, and its single-active ready state must pass real source-lock CI before CONTENT_READY is claimed.

NO_MERGE_DEPLOY: yes.
**Authoring mode:** DELTA_C_AFFECTED_REVIEW_PASS; the unchanged 95 items retain prior Academic/PED PASS at old exact blob; this author-composite receipt does not imply a blanket rerun of NotebookLM.
