# G12 SGK Tập Hai — Hoạt động thực hành trải nghiệm · S1 source audit and R00 authoring checkpoint
WORK_ID: G12-SGK-XP-2ACTIVITIES-R00
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
LEARNING_PATH: SGK_EXPERIENCE
AUTHORING_STATUS: REVIEW_CANDIDATE_LOCAL_ONLY
ACADEMIC_VERDICT: NOTEBOOKLM_REPORTED_PASS_R00_SOURCE_LOCKED_REVIEW_PARITY_PENDING
PEDAGOGICAL_VERDICT: NOTEBOOKLM_REPORTED_PASS_R00_SOURCE_LOCKED_REVIEW_PARITY_PENDING
CONTENT_READY: NO
SOURCE_CUSTODY: EXACT_9_FILE_R00_GIT_BLOB_LOCKED_AT_78bc23671981934e1b27742ff8a322ee9d7d766d
RD1: NOT_CREATED_IN_SGK_EXPERIENCE
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## 1. Nguồn gốc SGK kiểm chứng trực tiếp trên bản gốc
SGK Toán 12 Kết nối tri thức **Tập Hai**, original PDF SHA256 `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`. Đã kiểm bằng ảnh của chính 9 trang in 81–89 / PDF index 1-based **83–91**, không suy ra từ mục lục:
- **Trải nghiệm 1** in **81–84** / PDF1 **83–86**: tính nguyên hàm/tích phân bằng CAS GeoGebra, giá trị tích phân xác định; công thức hình thang; cận sai số `M(b−a)^3/(12n²)` từ `|f''|≤M`; ứng dụng tính lượng tích lũy từ số liệu.
- **Trải nghiệm 2** in **85–89** / PDF1 **87–91**: đồ họa không gian GeoGebra 3D, tam giác Penrose như ảo giác chiếu và mặt Möbius tham số với nửa vòng vặn, ghép đảo chiều.
- Đây là **2 hoạt động SGK**, không tạo chương VII/Bài 20–21 giả, không coi Möbius là toán Core mới bắt buộc. Đề, đáp án, D6, rubric và hình vẽ **tự biên soạn**, không copy đề/ảnh SGK; phiên bản/cú pháp GeoGebra có thể thay đổi nên nội dung cung cấp cả đường thao tác CAS/3D **và đường suy luận không có máy**.

## 2. Độ phủ học liệu đã biên soạn trong gói R00 tại cuộc trò chuyện
- **10 outcome**: 5 mỗi hoạt động; **40 item công khai canonical** (10 Core dạng luyện tập trong trải nghiệm, 10 Practice, 10 Application, 10 Written /5); **10 ví dụ có giải thích D2**, 10 đường sửa lỗ hổng D6 với 5 bước **đặc thù từng outcome**, 4 Tự thử trước Core (2/hoạt động), 5 hình PNG tự tạo kèm bản thiết kế SVG lưu ở máy biên soạn.
- **10 secondary END placements** dùng lại 10 `-Axx` đã có, không nhân bản item; `CLIENT_SELF_CHECK_NO_MASTERY`. Không tạo bộ RD1 official mới cho hoạt động trải nghiệm. `SGK_CHAPTER_READINESS` thuộc từng chương trước, không lấy hoạt động bổ trợ để cấp Mastery.
- Bản học liệu học sinh chứa đáp án/rubric để tác giả và reviewer đối chiếu, **không** là quyền tiết lộ trước nút đối chiếu/Final Submit trong website.
- Numeric spot QA từ **bản R00 thực tế**: `∫₀²x²dx=8/3`; `T4=11/4` sai lệch `+1/12`; bound `1/(6n²)<0.001` n nguyên nhỏ nhất 13; ví dụ vận tốc `t=(0,2,4,6)` và `v=(2,3,5,4)` cho **22 m đúng toán**, Written W05/rubric khớp 22 m; dữ liệu reviewer chép nhầm thành `v=(2,5,4,1)` dẫn ra 21 m khác bài gốc; bảng diện tích không đều `12 cm³`; Möbius `M(0,v)=M(2π,−v)`; lăng trụ đáy S=2/h=3 → V=6.

## 3. Ma trận outcome dự thảo (không phải academic PASS)
| OUTCOME_ID | WHAT TO LEARN | CANONICAL ITEM ROLE |
|---|---|---|
| `G12-SGK-EXP01-O01` | Nguyên hàm CAS và chứng nhận bằng đạo hàm | C/P/A/W: `THPT-G12-EXP01` + item 01–05 mapped 1:1 |
| `G12-SGK-EXP01-O02` | Tích phân có cận và kiểm miền xác định | C/P/A/W: `THPT-G12-EXP01` + item 01–05 mapped 1:1 |
| `G12-SGK-EXP01-O03` | Cơ sở diện tích và thuật toán hình thang | C/P/A/W: `THPT-G12-EXP01` + item 01–05 mapped 1:1 |
| `G12-SGK-EXP01-O04` | Cận sai số và chọn số hình thang từ f'' | C/P/A/W: `THPT-G12-EXP01` + item 01–05 mapped 1:1 |
| `G12-SGK-EXP01-O05` | Ứng dụng bảng đo/quãng đường/thể tích và đơn vị | C/P/A/W: `THPT-G12-EXP01` + item 01–05 mapped 1:1 |
| `G12-SGK-EXP02-O01` | Ảo giác Penrose: ảnh chiếu không chứng minh giao trong Oxyz | C/P/A/W: `THPT-G12-EXP02` + item 01–05 mapped 1:1 |
| `G12-SGK-EXP02-O02` | Mô hình lăng trụ tam giác từ tọa độ và kiểm hình học | C/P/A/W: `THPT-G12-EXP02` + item 01–05 mapped 1:1 |
| `G12-SGK-EXP02-O03` | Thay góc nhìn và kiểm ảnh 2D so với hình 3D | C/P/A/W: `THPT-G12-EXP02` + item 01–05 mapped 1:1 |
| `G12-SGK-EXP02-O04` | Dải Möbius tham số và ghép mép đảo dấu | C/P/A/W: `THPT-G12-EXP02` + item 01–05 mapped 1:1 |
| `G12-SGK-EXP02-O05` | Báo cáo mô hình có thể tái lập, giới hạn và điều kiện | C/P/A/W: `THPT-G12-EXP02` + item 01–05 mapped 1:1 |

## 4. Handoff review chỉ dành AUTHORING, chưa CONTENT_READY
Gói `Temp_G12_SGK_XP_BOTH_ACTIVITIES_NOTEBOOKLM_R00_20261103.zip` đã được tạo tại cuộc trò chuyện, **9 tệp thật** (4 Markdown: học liệu EXP01, học liệu EXP02, ma trận, QA/SHA; 5 PNG). ZIP SHA256 `9e1e9f6f328a40de99a0a5485f5eee1d1af466256cc44df3bcc5e2653337184f`. **Giải nén trước khi thêm vào NotebookLM.** Ngoài 9 file này không cần gửi tệp README/prompt vào source.

Nguồn Markdown original SHA256:
- EXP01 `bbf34859bb439ebe38c8ccb48cd8f6f28529ef4fce3f02e10319bb99d5b0cb21`
- EXP02 `f9b84c421d7681b1d1a05f7d39cc84c5f41bd07ff0a01b26dcda6ec8dc826f64`
- ma trận `1b60e1f3430a03e0d148cd08003eaa61574babf5a3a687a0465539224a05d271`
- QA `6707d1366b929f200e8ae8a471769342230db3a08370177f1ea3683a5ec3c7c7`

| PNG tên tệp thật | SHA256 |
|---|---|
| `Temp_FIG_G12_XP01_CAS_VERIFICATION_R00.png` | `b71287b714b79c08287454c28c5cbdc73d578b679a0efe82379a5b9b0622d20f` |
| `Temp_FIG_G12_XP01_TRAPEZOID_R00.png` | `8025cc7ef0c691bb7ec09f8ca762021f6e1d01fa99f74772174a019cdc926118` |
| `Temp_FIG_G12_XP01_ERROR_BOUND_R00.png` | `c5227e4019305e0bfbd50cfdb22b4db37e55d66cdb8a6934ee43660006f8b727` |
| `Temp_FIG_G12_XP02_PROJECTION_R00.png` | `71a83480cbaee41c2d3664d369bbba7ab6d4a2437401f08325e9007df5f665ff` |
| `Temp_FIG_G12_XP02_MOBIUS_R00.png` | `458f859d3dcfab7d200ff61954adcb0bd3cf8d78695f5fb2c7cd682622bafa87` |

**GATE CẬP NHẬT (03/11/2026):** Zip CRC + SHA256 9/9 PASS; 9 file Markdown/PNG byte-exact đã được đưa lên GitHub tại `prototypes/thpt/content-drafts/G12_SGK_XP_R00_ORIGINAL_SOURCE/` (commit `78bc23671981934e1b27742ff8a322ee9d7d766d`). NotebookLM Academic/PED đã báo PASS; vẫn có mismatch trên reviewer EXP01-O05 (21 m khác 22 m đúng trong nguồn), Q-map labels và D4 Written W01/W05 chiều sâu lời giải cần đánh giá targeted. `CONTENT_READY=NO`; A1–A7/V2 chưa ký, RELEASE không thực hiện.


## 5. Tiếp nhận NotebookLM R00 ngày 03/11/2026 (chỉ lưu biên bản, không tự nâng trạng thái)

- Báo cáo NotebookLM nguyên văn chủ dự án gửi đã được bảo toàn trong `prototypes/thpt/review-packets/G12_XP_R00_NOTEBOOKLM_OWNER_VERDICT_SUBMITTED_20261103.txt`, Git blob `84f41a2e6e53619772d385cec3ae69483d8ae081`. Reviewer ghi `ACADEMIC=PASS`, `PED=PASS`, `P0/P1/P2=0`, `MINIMAL_DELTA=0` trên PACKET_ID `G12-SGK-EXP01-EXP02-R00-REVIEW_CANDIDATE`.
- Biên bản kiểm toán tác giả tại `prototypes/thpt/content-drafts/G12_SGK_XP_R00_NOTEBOOKLM_REVIEW_RECONCILIATION_20261103.md` ghi rõ kết luận mới sau khi nhận đủ ZIP: **22 m là đúng trong học liệu R00**, reviewer đổi bộ số liệu khi tóm tắt để ra 21 m; Q labels mismatch; D4 Written cần kiểm chỗ lời giải quá tóm tắt. 9/9 file gốc đã Git-custodied và đối chiếu blob.
- Giữ 9/9 nguồn học sinh R00 **bất biến**, không sửa đáp án 22 m đang đúng. Nguồn review target R01 (nếu cần) phải là file riêng và chỉ review phần bị ảnh hưởng theo Source 07. Chưa được đặt `CONTENT_READY` cho tới khi reviewer/cổng A1–A7/V2 đủ; không thay lịch sử PASS.
