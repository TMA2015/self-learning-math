# UX795 — Phụ lục thực thi Q18: tách khóa snapshot lịch sử và kiểm chứng bản ứng viên (DRAFT)

**Ngày:** 10/11/2026. **Thuộc SCR:** STANDARD_CHANGE_REQUEST_Q18_ENRICHMENT_SELF_VERIFICATION_20261110. **Chuẩn duy nhất:** SLM-THPT-QUALITY-ONE. **Tình trạng:** PROPOSED_ONLY / OWNER_EXACT_APPROVAL_PENDING / STANDARD_CONFLICT_HOLD / NO_MERGE_NO_DEPLOY. Đây là phụ lục kỹ thuật của cùng chuẩn, không tạo một tiêu chuẩn học thuật thứ hai.

## 1. Hai nút thắt trực tiếp, đã chứng minh bằng mã nguồn và Git blob

| Cổng | Khóa lịch sử được dùng | Điều đã xác minh trên ứng viên | Kết luận |
|---|---|---|---|
| R4, scripts/test-thpt-academic-presentation-pilot.cjs, B09 | FNV-32 caa5d2b4 trên Git blob lịch sử d58826cf4f12a0814a420c5cefb6cb2469129d23 | B09 mới: blob 30cf7ba3fea8e8ebb4212ac5b06840b4ef7d380e, FNV fb249205. **30 biểu thức toán gốc liên tiếp giữ đúng thứ tự**, 5 First Try, 2 HELP, 4 tab | Khóa toàn văn cũ không phải một verdict toán học mới; snapshot lịch sử này cũng KHÔNG phải main hiện hành |
| Roadmap, scripts/test-thpt-chvi-math-block-render.cjs, B15 | blob 295b0d032c4d91cc718bf9c556924b4ff9f74da5; 1 display và 205 inline | blob mới 7b579927e0f6fe4d5a562d5e1127efa8d6deeb96; nội dung đã đổi; kiểm cũ fail ngay tại SHA | Khóa số lượng và toàn văn của phiên bản trước |
| Roadmap cùng script, B16 | blob 02d4bd23fd584cee78105e074766cb31f875141d; 4 display / 148 inline | ứng viên có 4 display / 193 inline, thêm bảng giá trị + tìm ngược parabol theo SGK/SBT | Công thức mới hợp lệ sẽ làm sai bộ đếm cũ |
| Roadmap cùng script, B17 | blob 38f9683aa332bc713a44616eff1b7e199af3011e; 4 display / 220 inline | ứng viên có 5 display / 241 inline, thêm mô hình thời gian bay | Khóa số lượng không phân biệt thêm đúng/sai |
| Roadmap cùng script, B18 | blob 06e97d3685f0dbfb5ef80082622eda185a5dfe7d; 8 display / 118 inline | ứng viên có 10 display / 160 inline, thêm mô hình hai người gặp nhau và sửa D6 | Khóa số lượng không phân biệt thêm đúng/sai |

Nguồn thực chứng: R4 run 42834732882, Roadmap run 42834733141, test script hiện có trên GitHub. Git blob API cho thấy đúng các bản gốc nói trên tồn tại, bao gồm B09 cũ có FNV caa5d2b4 và 4 blob B15–B18 có số công thức được hard-code. Không thay các giá trị lịch sử.

**Nguy cơ còn phía sau, chưa được công bố là FAIL:** sau bước R4 B09, workflow còn chạy các bộ test source exact/reconstruction cho ChIV, ChV, ChVI, ChVII, ChVIII, ChIX, trong đó có scripts/test-thpt-g10-chiv-full-r04-release.cjs, test-thpt-g10-chv-full-r03-release.cjs, test-thpt-g10-chvi-full-r04-release.cjs, test-thpt-g10-chvii-full-r03-release.cjs, test-thpt-g10-chviii-full-r02-release.cjs, test-thpt-g10-chix-full-r02-release.cjs. Cần audit tiếp CHI–CHIII và cả phụ thuộc Q15/Q16. Hai lỗi đầu tiên chỉ là các chốt chặn sớm, không chứng minh các bước sau đã PASS hay FAIL.

## 2. Luồng kiểm chứng hai phiên bản, vẫn chỉ có một Q18

**A — Baseline lịch sử (bảo toàn):** nguồn main đã phát hành phải khớp Git blob tại ledger; receipt/reviewer Academic gốc phải khớp snapshot và scope; hình, bank, key/rubric và RD1 giữ bất biến. Riêng B09, khóa FNV-32 cũ thuộc **snapshot trung gian UX795**, không được coi là hash main. Cần replay đúng blob lịch sử ấy nếu chạy test khóa nguyên bản.

**B — Candidate mới (không hợp thức hóa giả):** 27 nguồn ứng viên phải khớp SHA trên HEAD; đối chiếu trực tiếp nguồn main theo SHA hai cột; ID Tự thử/HELP/outcome không mất hoặc nhân bản; 4 tab, TeX/MathJax, SVG/đơn vị và các tính toán/điều kiện quan trọng được kiểm theo từng delta. Các ví dụ mới không thể vượt qua chỉ nhờ giữ số lượng công thức cũ.

**C — Chứng cứ Q18 thực chất:** chỉ sau khi chủ dự án phê duyệt chính văn bản chuẩn Q18, Source 07/V2/CI đồng bộ và SELF_QA_EVIDENCE_RECEIPT gắn SHA có kiểm toán toán/S1/PED **từng outcome chịu ảnh hưởng**, mới thay đường source-lock dành cho các bài thuộc scope. Reviewer Academic/PED PASS lịch sử không được suy từ việc CI/browser xanh; thiếu Academic baseline, lỗi toán hoặc thiếu PED mới thì HOLD/affected independent review.

**D — Regression release toàn phần:** các cổng Q15, Q16, ngân hàng câu, rubric, RD1, Final Submit, Mastery, Golden UI, deep links, Firebase, Gemini, P1/P2 và browser các khối lớp khác vẫn độc lập; không vô hiệu hóa test, dùng continue-on-error hoặc sửa expected SHA cho xanh.

## 3. Thí điểm kỹ thuật đã chạy, KHÔNG thay cổng chính thức

Trong Draft PR #797 có scripts/test-ux795-g10-legacy-dual-source-audit.cjs. Workflow UX795 thực hiện bước **EVIDENCE ONLY** sau khi checkout main thật:
- Khóa cả **main baseline** lẫn **ứng viên** theo hai cột ledger 27 bài.
- Kiểm B09 30/30 biểu thức gốc đúng thứ tự; B09 và B15–B18 giữ nguyên tập canonical First Try/HELP/outcome so với main; 4 tab Model B.
- Đối chiếu TeX display/inline của bản mới có bổ sung so với ngưỡng lịch sử; xác thực hai script gốc nguyên blob SHA, kiểm thử âm khi giả lập mất ID hoặc sửa byte nguồn.
- Run UX795 Draft 42837013091 **SUCCESS** trên HEAD thí điểm 1ae99e65a001d530a77098f23979b9a80a5a4196, gồm dual-source QA, 81 Chromium và integration dry-run. R4 và Roadmap vẫn đỏ theo đúng cổng hiệu lực.

Đây là **migration evidence**, không phải Academic/PED PASS, không cấp CONTENT_READY hoặc quyền deploy.

## 4. Đề xuất triển khai SAU KHI chuẩn được duyệt

1. Giữ snapshot lịch sử và receipt ở **legacy reference**; không đè/viết lại SHA nguồn cũ.
2. Thay các phép so sánh **toàn văn và đếm công thức tuyệt đối cũ** chỉ trong đúng bài đã được Q18 v2.0 và SELF_QA receipt cho phép bằng **(a) baseline source + (b) candidate source SHA + (c) approved Q18 receipt + (d) canonical/assessment invariants + (e) math/PED/render tests**. Các bài chưa được phê duyệt tiếp tục legacy behavior.
3. Gỡ từng điểm chặn theo dependency-chain của R4/Roadmap, phân loại log thành LEGACY_REFERENCE / CANDIDATE_CONTENT / ASSESSMENT_SECURITY / BROWSER_RELEASE; không cho phép kích hoạt theo tên PR, nhánh hoặc một cờ môi trường tự đặt.
4. Toàn bộ cấu hình chính thức phải fail-closed nếu Q18 chưa có hiệu lực, receipt sai SHA, thiếu bản gốc hoặc ID/key/rubric bất biến không khớp. Không đổi source test trên main khi chưa có owner exact approval.
5. Chủ dự án đã cho phép phát hành gói G10 **có điều kiện**: sau khi Q18/Source07/V2/CI hợp lệ và mọi gate actual HEAD PASS, RELEASE triển khai đúng scope; không dùng PR Draft để suy ra đã deploy.

**Checkpoint:** LEGACY_SOURCE_LOCK_COLLISION_MAPPED / DUAL_SNAPSHOT_EVIDENCE_PASS / GOVERNANCE_DRAFT / STANDARD_CONFLICT_HOLD / NO_MERGE_NO_DEPLOY.
