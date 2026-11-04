# G10 SGK 9 chương / 27 bài — kiểm toán khoảng trống theo nguồn live R01 (04/11/2026)

AUDIT_ID: G10-SGK-S1-TO-LEARNER-GAP-R01-20261104
AUTHORING_ROLE: SOURCE_AND_PED_GAP_AUDIT_ONLY
ONE_STANDARD: SLM-THPT-QUALITY-ONE v1.1.0 Q01–Q18
OWNER_APPROVAL: 04/11/2026 resume SGK G10 GAP AUDIT only; SGK-first before Topic
BASELINE_MAIN_COMMIT: 4fe8de616928d687d7718f48770f98502538ac68
AUDIT_BRANCH: audit/thpt-sgk-g10-closure-g11-g12-sequence-20261030
ACADEMIC_VERDICT_NEW: NOT_ISSUED
PED_VERDICT_NEW: NOT_ISSUED
V2_NEW_HANDOFF: NONE
CONTENT_READY_NEW: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
REVIEWED_PRIVATE_RD1_PUBLICATION: PROHIBITED

## 1. Kết luận nhanh có thể kiểm chứng

- Đọc trực tiếp **27/27 file** `docs/thpt-preview/sgk/chuong-{i..ix}/bai-{1..27}.md` trên `main` tại commit `4fe8de616928d687d7718f48770f98502538ac68`: đủ 9 nhóm chương và từng B01–B27. Đây là tồn tại FILE SOURCE, **không** chứng nhận đủ Q01–Q18 theo từng outcome hay chứng nhận website production.
- Đọc **9/9 file** `docs/thpt-preview/sgk/chuong-{i..ix}/tu-kiem-tra-chuong.md`: mỗi file có vùng mount `data-g10-chapter-selfcheck`, mô tả Final Submit và tự đối chiếu; tổng số câu theo nhãn từng file là **141** (CHI 14, CHII 14, CHIII 14, CHIV 21, CHV 18, CHVI 18, CHVII 22, CHVIII 14, CHIX 6). **PR #680 đã MERGED** và ghi rõ giao diện client-only, đáp án/giải thích có trong JSON client nguồn công khai; không phải ngân hàng đề held-out chống DevTools hay chứng cứ độc lập và không ghi Skill Mastery. Các báo cáo cũ ghi `TỰ_KIỂM_TRA_CHƯA_KÍCH_HOẠT` được thay bằng mô tả thực tế **PUBLIC_CLIENT_SELF_CHECK_MOUNTED**, vẫn `OFFICIAL_READINESS=NOT_CLAIMED`.
- Khôi phục từ hồ sơ kiểm toán [PR #641](https://github.com/TMA2015/self-learning-math/pull/641): các snapshot của 9 chương/27 bài đã có **scope-specific D1–D6 và 9 bộ 141 Readiness candidate được reviewer xem và khóa phiên bản** (metadata riêng, có khác biệt source từng giai đoạn). Đây là **kết luận lịch sử đúng snapshot**, không phải một chứng nhận Q01–Q18 v1.1 đồng loạt ngày 04/11. Không tự tạo lại 141 câu, không chọn 20 candidate ChVI đã loại, không đưa RD1 còn kín lên repo.
- Trên main **ChV B12 đã có trang học**, bản sửa sai kí hiệu `a/\\bar a` của FIG01 và hai HELP B12 có receipt review; không dùng nhận xét cũ “chưa có B12”. ChVI nguồn bổ sung **8 D6 đã được review độc lập trên Draft #642**; manifest cũ `inventory/G10-SGK-CHVI.md` vẫn để `A5_D1_D6_SCOPE` unchecked vì văn bản HOLD lịch sử nhắc cả đánh giá chính thức — cần tách **source-scoped D6 PASS** khỏi **runtime official Readiness chưa có**, không tự sửa manifest trong AUTHORING. Trang B15–B18 hiện không có marker D6 nội tuyến qua bước quét dưới đây; xác minh asset/placement thực tế với RELEASE.
- ChVII/VIII bản chỉnh **trang in SGK/SBT (PR #646)** đã merge, do đó xử lý riêng như chứng cứ metadata, không yêu cầu review lại toàn bài. ChI–IX đã có các trang Core/Luyện tập; vẫn phải kiểm outcome-level, Written/Anchor shared và độ sâu (D3/D4), không đánh đồng hiện diện trang với hoàn tất hành trình.

## 2. Ma trận chín chương — bảo toàn đúng bằng chứng

| Chương | Bài SGK | Outcome từ checkpoint 31/10* | Candidate từ nguồn lịch sử* | Tình trạng review cần bảo toàn | Bước xác minh tiếp |
| --- | --- | ---: | ---: | --- | --- |
| I | B01–B02 | 11 historical outcome entries | 14 historical private-source items; now public client self-check only | historical scoped PASS; ChI R02 candidate source | ChI lesson-start concept-first / pre-Core self-try verification |
| II | B03–B04 | 10 historical outcome entries | 14 historical private-source items; now public client self-check only | public D1–D6 R01 scoped PASS; #631 academic merged | ChII verify why+TRY; live Final Submit scope != official Readiness |
| III | B05–B06 | 10 historical outcome entries | 14 historical private-source items; now public client self-check only | R01 source scoped PASS; #633 academic merged | ChIII why/TRY and actual deeper method explanations |
| IV | B07–B11 | 24 historical outcome entries | 21 historical private-source items; now public client self-check only | two historical R01 public batches B07–B08 and B09–B11 | reconcile one chapter bank; first-try flow on B07/08/10/11 |
| V | B12–B14 | 14 historical outcome entries | 18 historical private-source items; now public client self-check only | public source R01 + B12 FIG01/HELP R02; release main pages present | B12 corrected notation fidelity; why/TRY; release stale labels |
| VI | B15–B18 | 19 historical outcome entries | 18 historical private-source items; now public client self-check only | public D1–D5 historical + 8 D6 R01 scoped PASS #642; inventory A5 still unchecked | authoring source vs manifest A5 D6 parity; WHY+TRY evidence |
| VII | B19–B22 | 23 historical outcome entries | 22 historical private-source items; now public client self-check only | public D5/D6 reviewed; source printed page fix #646 merged | PED1/TRY; prior S1 citation correction must not cause mass review |
| VIII | B23–B25 | 12 historical outcome entries | 14 historical private-source items; now public client self-check only | public D5/D6 reviewed; source printed page fix #646 merged | PED1/TRY; verify diagram/interpretation context under Q12 |
| IX | B26–B27 | 10 historical outcome entries | 6 historical private-source items; now public client self-check only | public academic D5/D6 reviewed; 6 revision candidates | PED1/TRY; concept and conditional uniform sample space |

\* Các số trên lấy từ hồ sơ **source custody 31/10** tại `prototypes/thpt/audits/G10_9CH_27LESSONS_CHAPTER_ACADEMIC_COMPLETENESS_CHECKPOINT_20261031.md` của Draft audit #641: 133 outcome entries bao gồm support/optional/merged, và 141 item nguồn lịch sử. **141 câu hiện là dữ liệu client public cho tự đối chiếu**, không được coi là các held-out chính thức còn kín. Không dùng con số này làm tiêu chí đủ tự học.

## 3. Screening Q09/PED1, Q14/PED6 và D6 trên đúng 27 trang bài hiện tại

Đây là kiểm tra thô **chuỗi văn bản trong 27 file Markdown trang bài**, không phải khẳng định toán sai, không phải gán PASS/FAIL, không đại diện cho JSON/JS và chưa đối chiếu từng outcome S1. Tìm các cụm tương đương `vì sao cần/phải/lại/chọn`, `tại sao`, `mục đích`, `để ... hiểu/giải quyết/giúp`, `WHY/động cơ`; `tự thử/thử trước/tự làm trước/first-try`; `data-thpt-help-id/khắc phục/khi gặp khó khăn/D6`.

- **25/27** trang bài chưa tìm thấy cụm biểu thị rõ mở đầu WHY/motivation bằng bộ từ khóa; chỉ B18/B26 có chuỗi liên quan **ở đâu đó trong bài** (không bảo đảm nằm ở đầu).
- **26/27** trang bài chưa tìm thấy chuỗi **Tự thử** explicit; chỉ B09 có chuỗi liên quan (không chứng minh đúng thứ tự trước Core).
- **4/27** trang bài (B15–B18, ChVI) chưa có dấu hiệu trợ giúp D6 trực tiếp trong chính file bài, trong khi PR #642 có 8 D6 độc lập đã review. Đây là chênh lệch **placement/evidence**, không kết luận 8 D6 chưa từng được biên soạn.
- **Không được đánh đồng thiếu từ khóa với PED FAIL:** D1, lý giải và hoạt động tự thử có thể mang nhãn khác hoặc xuất hiện ở trang/hub liên kết. Với ChI B01/B02 đã đọc trực tiếp phần mở đầu: cả hai bắt đầu với `## 1. Kiến thức SGK`, định nghĩa/phát biểu trước khi dẫn vào vấn đề thực tế và không có bước First Try explicit; vì thế **cần Q09/Q11/Q14 targeted outcome-level review trên học liệu đang hiển thị**. Không sửa nguồn đã reviewer PASS khi chưa khóa phạm vi Delta_C.

| Chương / bài | File và Git blob tại main | Q09/PED1 marker (thô) | Q14/PED6 marker (thô) | D6 marker ở file bài | Verdict |
| --- | --- | --- | --- | --- | --- |
| I / B01 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-i/bai-1.md) · `cf223eeaf930` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| I / B02 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-i/bai-2.md) · `6b8df27a91cd` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| II / B03 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-ii/bai-3.md) · `d63f02e28766` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| II / B04 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-ii/bai-4.md) · `2cbcd2f1c2e7` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| III / B05 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-iii/bai-5.md) · `0ae9457ec2c3` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| III / B06 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-iii/bai-6.md) · `5e83960d6b84` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| IV / B07 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-iv/bai-7.md) · `fc4e42731409` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| IV / B08 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-iv/bai-8.md) · `c5724953a5d8` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| IV / B09 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-iv/bai-9.md) · `355fcefb56f7` | không tìm thấy chuỗi | có chuỗi liên quan | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| IV / B10 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-iv/bai-10.md) · `4fb41cfb430e` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| IV / B11 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-iv/bai-11.md) · `4b45cd8d1d76` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| V / B12 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-v/bai-12.md) · `e91ddf5b5246` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| V / B13 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-v/bai-13.md) · `4b2c09387616` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| V / B14 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-v/bai-14.md) · `02ca8f4045a2` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| VI / B15 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-vi/bai-15.md) · `11ec84bedd9a` | không tìm thấy chuỗi | không tìm thấy chuỗi | không tìm thấy marker trang | VERIFY BY OUTCOME, no automatic FAIL |
| VI / B16 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-vi/bai-16.md) · `0c1ce1ddbd44` | không tìm thấy chuỗi | không tìm thấy chuỗi | không tìm thấy marker trang | VERIFY BY OUTCOME, no automatic FAIL |
| VI / B17 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-vi/bai-17.md) · `dafa3ee1d687` | không tìm thấy chuỗi | không tìm thấy chuỗi | không tìm thấy marker trang | VERIFY BY OUTCOME, no automatic FAIL |
| VI / B18 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-vi/bai-18.md) · `1f832722a7ae` | có chuỗi liên quan | không tìm thấy chuỗi | không tìm thấy marker trang | VERIFY BY OUTCOME, no automatic FAIL |
| VII / B19 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-vii/bai-19.md) · `8c85401ded1a` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| VII / B20 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-vii/bai-20.md) · `4253bae511ff` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| VII / B21 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-vii/bai-21.md) · `23fdc71c66f5` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| VII / B22 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-vii/bai-22.md) · `0d991a9b461c` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| VIII / B23 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-viii/bai-23.md) · `71cbb566fcb2` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| VIII / B24 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-viii/bai-24.md) · `62e1936c7bc4` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| VIII / B25 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-viii/bai-25.md) · `58869d20956c` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| IX / B26 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-ix/bai-26.md) · `c469d19c6ba7` | có chuỗi liên quan | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |
| IX / B27 | [source](https://github.com/TMA2015/self-learning-math/blob/4fe8de616928d687d7718f48770f98502538ac68/docs/thpt-preview/sgk/chuong-ix/bai-27.md) · `a47e8e149f3e` | không tìm thấy chuỗi | không tìm thấy chuỗi | có marker | VERIFY BY OUTCOME, no automatic FAIL |

## 4. Những khoảng trống thật vs phần thuộc RELEASE

| Gap ID | Chứng cứ | Tính chất | Hướng xử lý / không làm |
| --- | --- | --- | --- |
| `G10-AUD-PED-01` | B01/B02 mở bằng phát biểu khái niệm; 25/27 page không có marker WHY, 26/27 không có marker Tự thử | **PED EVIDENCE GAP CANDIDATE** theo Q09/Q11/Q14, không phải verdict độc lập | Mở kiểm toán sâu **Chương I B01–B02 theo từng outcome**, kiểm điều hướng vào Core; chỉ nếu thiếu thực chất mới soạn bổ sung `DELTA_C_ACADEMIC_MATERIAL` và gửi NotebookLM phần chịu ảnh hưởng; bảo toàn PASS các câu toán cũ |
| `G10-AUD-D6-02` | B15–B18 không có marker D6 trong 4 trang hiện tại; gói 8 D6 reviewer #642 PASS; old ChVI A5 chưa được đánh dấu | SOURCE↔PLACEMENT RECONCILIATION; may be RELEASE lane | Tìm vị trí thực của 8 HELP trong site và SHA; nếu đã nằm ở tab/Practice thì gỡ flag; nếu chưa tích hợp thì báo `BLOCKED_BY_RELEASE`, không viết lại D6 đã PASS |
| `G10-AUD-SELF-03` | 9 tự kiểm tra mount client; merged #680, key trong client JSON; 141 entries | Không phải lỗi thiếu câu của AUTHORING; **đánh giá độc lập / Mastery chưa được chứng minh** | Duy trì `CLIENT_SELF_CHECK_NO_MASTERY`, không tái phân loại thành official RD1; technical Final Submit/QA và release receipts do RELEASE chịu trách nhiệm |
| `G10-AUD-UI-04` | Một số thẻ điều hướng trang bài, ví dụ B01/B03/B12/B19/B26, vẫn ghi “Tự kiểm tra · chưa kích hoạt” trong khi 9 route mount #680 đã merged | **DELTA_A_UI candidate** — nhãn hiển thị có thể đã cũ | Trả RELEASE chỉnh nhãn và QA UI nếu xác minh browser đúng; AUTHORING không sửa website |
| `G10-AUD-S1-05` | S1 SGK/SBT chính thức có receipt trực tiếp ở PR #641, các chương VII/VIII đã sửa trang in #646 | **Nguồn kế thừa có giới hạn**; lượt 04/11 chưa fetch/scan lại bốn PDF SGK/SBT G10 | Kế thừa đúng receipt theo phiên bản và đánh dấu S1_NOT_RECHECKED_THIS_TURN. ChI cần audit từng outcome/chương theo đúng SGK S1 trước khi tạo Delta_C; không bịa số trang |
| `G10-AUD-DEPTH-06` | 27 file tồn tại và có ví dụ, nhưng không có ma trận D1–D6/PED/item–role chính xác theo từng outcome được tái đối chiếu trong đợt này | **CHAPTER COMPLETENESS NOT RE-VERIFIED** | Trước khi sửa: kiểm một chương trọn gói, so sánh bài→outcome→D1/D2/D3/D4/D5/D6→PED/TRY→written/rubric→Final Submit mode, phân loại source vs rendered omission; chỉ xuất `AUTHORING_DEFECT` với Q và ID cụ thể |

## 5. Đề xuất vòng tiếp theo — Chương I, không làm lại 9 chương

1. **Khóa ChI B01/B02 snapshot bằng blob:** hai file live `cf223eeaf9302d4218625c2598ab0202fbee7623` / `6b8df27a91cd05982855d4c5bfea8f342c06572b`, đối chiếu nguồn reviewer Q09–Q14 theo snapshot cũ; không coi mọi thành phần mới phải được review lại.
2. **Kiểm đủ outcome-level** của 11 historical outcomes B01–B02, including SGK S1 printed page receipt; lập bài/outcome→WHY→tiền đề→ý nghĩa trước formal→lí do phương pháp→worked example→First Try→D6→Core/Practice→Written. Tách trang thiếu thành `SOURCE_DEFECT`, `PRESENTATION_MISSING`, `ALREADY_APPROVED_NOT_RENDERED`, `NOT_APPLICABLE_WITH_REASON`; không dùng checkbox số câu làm PASS.
3. Nếu thiếu WHY/TRY thật, bổ sung **một consolidated pedagogical Delta_C của ChI** với D6 remediation và 3–6 câu prompt NotebookLM đúng **5 Permanent Sources v2.1**. Chỉ reviewer độc lập mới PASS scope thay đổi; **không đụng đề 141 câu client, câu cũ, rubric và RD1** khi không có lý do toán học.
4. Chuyển kết quả ChI rõ ràng trước khi sang ChII...ChIX, hoàn thành mỗi chương rồi mới mở rộng Topic. Bài toán website/Final Submit/nhãn/preview và P1/P2 là RELEASE, không tác động vào học liệu tự động.

**Audit checkpoint:** `MAIN=4fe8de616928d687d7718f48770f98502538ac68`, `G10_9_CHAPTERS_27_PAGES=SOURCE_PRESENT`, `SELF_CHECK_9_ROUTES_141_PUBLIC_CLIENT=SOURCE_MOUNT_PRESENT`, `INDEPENDENT_OFFICIAL_READINESS=NOT_CLAIMED`, `Q09_Q14_TARGETED_REVIEW_CHI=RECOMMENDED`, `G10_NEW_AUTHORING_SOURCE_CHANGE=NONE`, `ACADEMIC_PASS_NEW=NOT_ISSUED`, `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`. **Không merge/deploy, không mở Topic.**
