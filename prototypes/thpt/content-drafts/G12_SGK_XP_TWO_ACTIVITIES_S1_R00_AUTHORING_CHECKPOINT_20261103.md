# G12 SGK Tập Hai — Hoạt động thực hành trải nghiệm · S1 source audit and R00 authoring checkpoint
WORK_ID: G12-SGK-XP-2ACTIVITIES-R00
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
LEARNING_PATH: SGK_EXPERIENCE
AUTHORING_STATUS: REVIEW_CANDIDATE_LOCAL_ONLY
ACADEMIC_VERDICT: NOTEBOOKLM_REPORTED_PASS_PENDING_ORIGINAL_SOURCE_PARITY
PEDAGOGICAL_VERDICT: NOTEBOOKLM_REPORTED_PASS_PENDING_ORIGINAL_SOURCE_PARITY
CONTENT_READY: NO
SOURCE_CUSTODY_HOLD: LOCAL_ZIP_AND_PNG_NOT_YET_GITHUB_BLOB_LOCKED
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
- Numeric spot QA: `∫₀²x²dx=8/3`; hình thang `T4=11/4` sai lệch `+1/12`; bound `1/(6n²)<0.001` có n nhỏ nhất 13, n=12 không đủ; vận tốc bảng cho `21 m` **theo các nút (0,2,4,6) và vận tốc (2,5,4,1) từ reviewer — bản R00 học sinh đang chờ đối chiếu**, bảng diện tích không đều cho `12 cm³`; mô hình Möbius `M(0,v)=M(2π,−v)`; lăng trụ đáy diện tích 2, cao 3 → thể tích 6.

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

**GATE:** S1 source audit + original authored R00 + ZIP CRC/byte-equality PASS. **NotebookLM Academic/PED: ĐÃ NHẬN VERDICT PASS DO CHỦ DỰ ÁN GỬI (03/11/2026), CHƯA KHÓA SNAPSHOT BẢN HỌC LIỆU**; code/source/PNG chưa được đưa lên nhánh GitHub để khóa Git SHA vì gói review vừa được tạo trong máy biên soạn. Không tự gắn `CONTENT_READY`, không có manifest `ready/`, REGISTER row hay release handoff V2; đây chỉ là checkpoint để truy vết scope và checksum. Sau phản biện độc lập, AUTHORING đưa tệp bất biến lên GitHub, đối chiếu SHA256 và xử lý Delta (nếu có), rồi mới ký source receipt theo Q18.


## 5. Tiếp nhận NotebookLM R00 ngày 03/11/2026 (chỉ lưu biên bản, không tự nâng trạng thái)

- Báo cáo NotebookLM nguyên văn chủ dự án gửi đã được bảo toàn trong `prototypes/thpt/review-packets/G12_XP_R00_NOTEBOOKLM_OWNER_VERDICT_SUBMITTED_20261103.txt`, Git blob `9a9654d068c897db123da0ab25bd9febb7a5a785`. Reviewer ghi `ACADEMIC=PASS`, `PED=PASS`, `P0/P1/P2=0`, `MINIMAL_DELTA=0` trên PACKET_ID `G12-SGK-EXP01-EXP02-R00-REVIEW_CANDIDATE`.
- Biên bản kiểm toán tác giả tại `prototypes/thpt/content-drafts/G12_SGK_XP_R00_NOTEBOOKLM_REVIEW_RECONCILIATION_20261103.md` ghi rõ lỗi chép số liệu checkpoint 22 m so với 21 m đúng cho dữ liệu reviewer, bảng đánh số tên Q không khớp v1.1.0 và thiếu 9 file R00 nguyên bản để chứng minh Git blob parity.
- Không sửa nội dung học sinh vì file gốc chưa phục hồi; giữ `SOURCE_CUSTODY_HOLD` và `CONTENT_READY=NO`. Bước tiếp theo là khôi phục ZIP 9 file R00 theo checksum đã khai báo, kiểm từng file trước khi lập A1–A7 + V2/ready/REGISTER.
