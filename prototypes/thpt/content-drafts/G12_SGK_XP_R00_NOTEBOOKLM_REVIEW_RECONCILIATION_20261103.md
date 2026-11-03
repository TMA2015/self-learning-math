# G12 SGK Tập Hai — hai Hoạt động trải nghiệm R00 · Reconciliation sau NotebookLM (03/11/2026)

WORK_ID: G12-SGK-XP-2ACTIVITIES-R00
REVIEW_PACKET_ID: G12-SGK-EXP01-EXP02-R00-REVIEW_CANDIDATE
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
LEARNING_PATH: SGK_EXPERIENCE
AUTHORING_STATE: REVIEW_RECEIVED_SOURCE_LOCK_HOLD
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
PUBLIC_RD1: NOT_CREATED
SOURCE_CUSTODY: PENDING_EXACT_9_FILE_R00_RECOVERY

## 1. Chứng cứ nhận được (bảo toàn nguyên văn)

- Original owner-pasted NotebookLM report: `prototypes/thpt/review-packets/G12_XP_R00_NOTEBOOKLM_OWNER_VERDICT_SUBMITTED_20261103.txt`; Git blob SHA `84f41a2e6e53619772d385cec3ae69483d8ae081`. File nguyên văn, không chỉnh sửa cách đặt tên cổng Q, công thức hoặc verdict.
- Reviewer declares `ACADEMIC_VERDICT=PASS`, `PEDAGOGICAL_SELF_LEARNING_READY=PASS`, `P0=0`, `P1=0`, `P2=0`, `MINIMAL_DELTA=0`, `PERMANENT_SOURCES_VERSION=THPT-v2.1`, `STANDARD_VERSION=1.1.0`. Đây là **verdict được báo cáo**, không phải bằng chứng đã source-lock hay được phép phát hành.
- Phạm vi reviewer: EXP01 trang in SGK 81–84 (PDF 83–86), EXP02 trang in 85–89 (PDF 87–91); 10 outcomes, 40 public canonical items (C/P/A/W), 10 worked examples, 10 written rubrics /5, 10 D6 HELP, 5 PNG, 4 first-tries, 10 secondary placements tham chiếu Application ID đã có; không có private RD1.
- SGK PDF S1 SHA256 trong source-audit checkpoint: `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`.
- Trước review, tác giả đã tạo ZIP R00 9 file trong cuộc trò chuyện cũ: `Temp_G12_SGK_XP_BOTH_ACTIVITIES_NOTEBOOKLM_R00_20261103.zip`, SHA256 `9e1e9f6f328a40de99a0a5485f5eee1d1af466256cc44df3bcc5e2653337184f`; 4 Markdown và 5 PNG. ZIP và file nguyên bản **chưa có trong nhánh GitHub này và chưa được phục hồi từ nguồn tương đương**. Checkpoint liệt kê SHA256 riêng của cả chín file; chúng chỉ là manifest khai báo, chưa phải đối chiếu byte thực.

## 2. Sai khác bắt buộc đối chiếu (không sửa R00 đoán chừng)

### R1 — bảng vận tốc EXP01-O05 / số liệu 21 m hay 22 m

- Checkpoint trước review ghi kết quả spot-QA `22 m`. Reviewer báo `T_3=21\,\mathrm m` với các nút `t=(0,2,4,6)\,\mathrm s`, `v=(2,5,4,1)\,\mathrm{m/s}`.
- Với **chính dữ liệu reviewer công bố**, quy tắc hình thang cho `h=2` tính: `T_3=2[(2+1)/2+5+4]=2(1.5+9)=21\,\mathrm m`; 22 m **không khớp**. Đây là kiểm toán độc lập về phép tính, không chứng minh bản Markdown R00 thực tế viết 21 hay 22.
- **QUYẾT ĐỊNH TẠM:** sửa mô tả checkpoint thành 21 m, ghi rõ đang chờ đối chiếu file học sinh. Nếu learner-source/đáp án/rubric ghi 22 m, phân loại `DELTA_C_ACADEMIC_MATERIAL` và review đúng EXP01-O05 cùng item liên quan theo Policy 07; nếu learner-source đã là 21 m, chỉ là lỗi chép metadata, không review lại snapshot không đổi.

### R2 — Bảng tên cổng Q01–Q18 của reviewer khác ma trận chuẩn chính thức

- Báo cáo độc lập gọi Q02 là `Math Correctness & Domain Limits`, Q03 là `Canonical Exercise & ID Contract`, Q04 là `Assessment Security`, Q18 là `System Authorization Boundary`.
- Chuẩn chính thức v1.1.0 trong `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md` quy định **Q02=Outcomes, Q03=D1, Q04=D2, Q18=Review/Fidelity**. Không được coi bảng reviewer “Q01–Q18 ALL_PASS” đã chứng minh từng cổng theo đúng mã Q.
- Reviewer vẫn có thể đã đánh giá đúng toán/PED; **không huỷ verdict nguyên văn**, nhưng A1–A7 và handoff V2 phải được tác giả đối chiếu từng Q từ **nguồn học sinh gốc** và receipt trên **đúng snapshot**. Nếu còn thiếu chứng cứ/không thể reconcile, giữ `Q18_SOURCE_FIDELITY_HOLD`; có thể yêu cầu NotebookLM rà đúng phần cần thiết, không tạo vòng review toàn gói chỉ vì thay metadata.

### R3 — Khoảng/định dạng trong bản báo cáo chép lại

- Một số chỗ đầu vào bản report chứa LaTeX khoảng trống `\(\)` (ví dụ phát biểu hàm `x^2` trên miền chưa hiển thị). Không tự điền miền khi chưa xem source.
- Khi lấy lại 4 Markdown, đối chiếu mọi điều kiện miền, cả cận sai số `|I-T_n|\le M(b-a)^3/(12n^2)`, đáp án, rubric và FIG-READ-THROUGH trước khi gắn Q02–Q14 PASS tác giả.

### R4 — Boundary đánh giá

- Hoạt động trải nghiệm là bổ sung trong hành trình SGK, **không** là Chương VII hoặc Core/Readiness riêng.
- 10 secondary placements tham chiếu item `-A01...-A05` tương ứng, dùng `CLIENT_SELF_CHECK_NO_MASTERY`, không phải `SGK_CHAPTER_READINESS` có RD1 độc lập. Q16 chỉ được đánh giá theo scope của mode này; công khai không được lộ giải đáp trước tự thử/Final Submit nếu UI triển khai, và không tự ghi Mastery.
- `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`; phần frontend/AP/R do RELEASE làm sau handoff thực, không thuộc công việc này.

## 3. Đường đóng AUTHORING chưa được phép bỏ qua

1. Phục hồi **đúng nguyên bản** ZIP R00 và tách 9 file; verify ZIP SHA256 và 9 file SHA256 từ checkpoint; kiểm bản nháp thực tế, không dựng lại từ thống kê trong verdict.
2. Đưa 4 Markdown/5 PNG gốc vào đúng khu vực source authoring trên nhánh PR #733, lưu Git blob SHA và xác minh byte parity; không đặt mã nguồn RD1 kín lên GitHub.
3. Đối chiếu 10 `OUTCOME_ID`/40 `ITEM_ID`/D1–D6/PED1–PED6, đáp án, rubric, PNG và câu được reuse; xử lý R1/R2/R3 theo phạm vi ảnh hưởng; log Delta.
4. Khi Academic + PED verdict đúng snapshot, Q01–Q18 và A1–A7 có bằng chứng, tạo **một** handoff V2 trong `release-handoffs/`, **một** manifest `release-queue/ready/G12-SGK-EXP01-EXP02-R00.md` và **một** dòng REGISTER; chạy source-lock gate trên chính HEAD PR.
5. Chỉ khi hoàn tất mọi điều kiện mới chuyển `CONTENT_READY`. Không tự tích hợp website, merge/deploy, chấm RD1 hay sửa Firebase.

## 4. Kiểm toán ngoài reviewer (không thay kết luận NotebookLM)

- Hướng dẫn chính thức GeoGebra xác nhận cú pháp `IntegralSymbolic(<Function>)` (CAS) và `Integral(<Function>,<Start x-Value>,<End x-Value>)` cho tích phân xác định.
  - https://geogebra.github.io/docs/manual/en/commands/IntegralSymbolic/
  - https://geogebra.github.io/docs/manual/en/commands/Integral/
- Đây là kiểm chứng riêng về cú pháp, không phải thử nghiệm vận hành phần mềm trên thiết bị học sinh hay xác minh byte snapshot R00.

**CHECKPOINT:** Review nhận và lưu bất biến; số học discrepancy đã khoanh; **source custody còn thiếu → BLOCKED_BY_AUTHORING(Q18, EXP01/EXP02, original R00 input files)**. Không có claim release.
