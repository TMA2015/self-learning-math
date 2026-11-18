# R16 — S1 reference exception ledger: SBT G11 Tập 2 bài 8.27 và guard chống lặp lỗi trong học liệu

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-G11-S1-SBT-827-CANONICAL-IMPACT-GUARD-R16
LANE: AUTHORING_REFERENCE_AUDIT_ONLY
STANDARD: SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18
PURPOSE: source anomaly custody, not a new academic standard or a change request
SOURCE_EXCEPTION_ID: S1-G11-SBT-T2-CHVIII-EX8.27-20261106
SOURCE_STATUS: VERIFIED_ANOMALY_IN_OWNER_PDF_SNAPSHOT
PUBLISHER_OFFICIAL_CORRECTION_STATUS: NOT_VERIFIED
CONTENT_READY_OR_RELEASE_IMPACT: NONE_ESTABLISHED
WRITTEN_BASELINE: 238 (G10 31, G11 83, G12 124)
CANONICAL_ITEM_SOURCE_EDIT: 0
REVIEWER_REOPEN: NO
TOPIC_RELEASE_MERGE_DEPLOY: NO

## A. Nguồn, số trang và mức chứng cứ

- **Nguồn chính S1**: SBT Toán 11 Kết nối tri thức, Tập 2, bản PDF do chủ dự án lưu trong thư mục Google Drive KNTT TOAN 11. SHA256 nguyên PDF: `a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189`; 20,297,100 bytes; 126 trang PDF. Không upload bytes/scan S1 lên repo.
- **Đề bài** 8.27 trang **in 53**, PDF **trang 54** (1-based, offset bìa +1); xem ảnh của chính file S1: hai biến cố A,B cùng được gọi *độc lập* và *xung khắc*, với P(A)=0,35 và P(A∪B)=0,8. Các ý hỏi P(B), P(A∩B), đúng một trong A/B.
- **Hướng dẫn lời giải** trang **in 110**, PDF **trang 111** (1-based): suy P(B)=0,45 do xung khắc, nhưng tiếp đó tính P(A∩B)=0,1575 do độc lập. Tính đúng một là 0,485 theo giả thiết độc lập sau khi đã tự chọn P(B)=0,45.
- **Đối chiếu web công khai (secondary only):** https://timdapan.com/dapan/giai-bai-827-trang-53-sach-bai-tap-toan-11-ket-noi-tri-thuc-voi-cuoc-song và https://www.vietjack.com/sbt-toan-11-kn/bai-tap-cuoi-chuong-8.jsp có bản mô tả trùng cấu trúc/lời giải; đây chỉ xác nhận việc lỗi được *truyền lại*, không phải publisher erratum, không là S1 mới và không thay photo PDF chủ dự án. Không xác nhận được bản đính chính chính thức của NXB từ các kết quả đã tra.
- R15 source proof/read-only SHA receipt: [G11 S1 direct scan and exception R15](G11_S1_SGK_SBT_CHVIII_DIRECT_SCAN_SOURCE_EXCEPTION_R15.md). R16 là **follow-up impact guard**, không sửa/hồi tố kết quả R15.

## B. Chứng minh kiểm toán nội tại — không có lời giải cho cả ba giả thiết

Vì xung khắc: P(A∩B)=0. Vì độc lập: P(A∩B)=P(A)P(B)=0,35×P(B). Do P(A)>0 nên P(B)=0. Do đó P(A∪B)=0,35+0−0=0,35, **mâu thuẫn** với đề cho P(A∪B)=0,8. Bộ điều kiện **không khả thi**; bộ đáp án của sách không thể đúng đồng thời.

Hai cách *giả định sửa đề* cho thấy KHÔNG có quyền tự phỏng đoán ý đồ biên tập:
- **Giữ xung khắc, bỏ độc lập**: P(B)=0,45; P(A∩B)=0; P(đúng một)=0,8. Đây KHÔNG phải đáp án sách hiện in và KHÔNG phải hiệu đính được NXB phê duyệt.
- **Giữ độc lập, bỏ xung khắc**: P(A∪B)=0,35+p−0,35p=0,8 ⇒ p=P(B)=9/13≈0,6923077; P(A∩B)=63/260≈0,2423077; P(đúng một)=0,8−0,2423077=29/52≈0,5576923. Cũng chỉ là một diễn giải khả dĩ, **không** được gọi là đáp án chính thức.

**Source verdict:** `S1_SOURCE_EXCEPTION_VERIFIED`, `SOURCE_FIX_AUTHORITY=NONE`, `CANONICAL_DEFECT_NOT_OBSERVED`. Không có quyền chọn một trong hai cách sửa giả định và thay nguồn S1 gốc.

## C. QA ảnh hưởng đối với canonical G11 ChVIII — đọc file thực, không suy từ thống kê

- G11 ChVIII canonical full source `prototypes/thpt/content-drafts/G11_CHVIII_B28_B30_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md` trên AUTHORING Draft #710; Git blob `fde4f8be91b5884b4559fef59fde46cf826c2bc9`.
- Tách trực tiếp đoạn `## D4 — Written` tới `## D5`: **8/8** canonical D4 item IDs thực tế (B28: 2; B29: 3; B30: 2; integrated CHVIII: 1). Không có bài D4 nào *đồng thời* áp đặt A/B có xác suất dương vừa độc lập vừa xung khắc. Định danh/role và rubric bảo toàn, không cấp PASS mới.
- Pedagogical D1 **B28 §4**, **B30 §3** giải thích vì sao xung khắc xác suất dương không thể độc lập. Core `THPT-G11-CHVIII-B30-C05`: P(A)=1/3, P(B)=1/4, xung khắc ⇒ P(giao)=0≠1/12. Practice `THPT-G11-CHVIII-B30-P05`: nếu độc lập P(A)=P(B)=1/2, P(giao)=1/4>0 nên không xung khắc.
- D4 `THPT-G11-CHVIII-B28-W02-ANCHOR` dùng phép thử lấy thẻ thực sự phân biệt hai khái niệm. Các item còn lại của ChVIII dạy đúng công thức cộng có chồng lấp, nhân chỉ khi có độc lập.
- G11 D4 baseline `G11_WRITTEN_83_CANONICAL_BASELINE.md`, Git blob `0bf2130e22759e8be870e7575cad69a4a2e2ae55`, đã chứa đúng 8 item D4 ChVIII; tổng baseline **238 unique** từ ba lớp bất biến. Không tìm lỗi từ nguồn SBT 8.27 trong **phần canonical trực tiếp đã kiểm**, không suy ra audit toàn bộ bank/thực tế RELEASE.

## D. Guard cho các lượt AUTHORING sau — không phát hành lệnh/thêm chuẩn mới

1. Khi đối chiếu SGK/SBT ChVIII hoặc tạo yêu cầu kiểm soát nguồn, gắn `SOURCE_EXCEPTION_ID` ở trên với chính SBT 8.27; mọi lời giải/số liệu của nó **SOURCE_HOLD**, không lấy số từ sách làm ground truth nếu điều kiện mâu thuẫn.
2. Nếu được giao tạo học liệu mới cùng năng lực, dùng **phương pháp toán đúng và ví dụ tự biên soạn có dữ kiện nhất quán**, có canonical item_id mới chỉ khi chứng minh được thiếu depth/method theo owner-approved scope; sau đó thực hiện `DELTA_C` reviewer independent đúng phần mới. Không sửa file snapshot gốc hoặc copy nguyên đề SBT bị lỗi.
3. Nếu NXB có đính chính chính thức hoặc một nguồn S1 edition khác, phải lập provenance phiên bản, trang in và SHA, đối chiếu chính xác với lỗi; chỉ cập nhật **chứng cứ nguồn**, không hồi tố Review PASS hay sửa item nếu không có lỗi canonical thực tế. Khi có xung đột với quyết định owner/chuẩn Q01–Q18, HOLD và trình owner chứ không lập chuẩn thứ hai.
4. Tiếp tục kiểm toán bài học/outcome theo các đề HKI/HKII Hà Nội có PDF source đủ issuer/page/code, không tăng số D4 theo tần suất/khẩu hiệu. Nguồn Scribd OCR R14 vẫn `EXAM_PDF_VISUAL_HOLD`, bài hẹn gặp vẫn `NO_DIRECT_CHVIII_S1_METHOD_MANDATE_FOUND` theo R15.
5. Không có hành động nhánh RELEASE nào từ record này: không sửa site, không can thiệp public Final Submit, RD1, Firebase hay Mastery; không merge/deploy.

CHECKPOINT: R16=SBT_827_TWO_HYPOTHESES_CONFLICT_PROVEN;SOURCE_EXCEPTION_ID_REGISTERED;G11_CHVIII_8_OF_8_D4_SCREENED;G11_B30_D1_D3_METHOD_CORRECT;PUBLISHER_ERRATUM_UNVERIFIED;CONTENT_EDIT=0;FORMAL_GAP=0;RELEASE=NO
