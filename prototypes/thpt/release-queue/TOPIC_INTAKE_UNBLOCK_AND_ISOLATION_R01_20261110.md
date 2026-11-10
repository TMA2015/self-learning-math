# RELEASE — Gỡ nút thắt Topic intake và cách ly QA SGK / Chuyên đề R01

**Ngày:** 10/11/2026 · **Chuẩn duy nhất:** SLM-THPT-QUALITY-ONE Q01–Q18 · **Code Draft:** PR #799 · **Owner direction:** tháo gỡ khóa kiểm cũ gây nghẽn cả SGK Knowledge và Chuyên đề. **Không tạo chuẩn toán mới, không tự phát hành.**

## 1. Phân biệt nút thắt thật, tránh yêu cầu review lại học liệu PASS

| Gói | Học thuật nguồn | Chướng ngại RELEASE | Lối tiếp nhận đúng |
|---|---|---|---|
| Chuyên đề Hàm số M1–M7, PR #782 | Reviewer Academic/PED PASS, RD1 30 owner-held PASS cho R18; 48 outcome, 116 canonical IDs, 122 placements | Gate V2 cũ từ chối TOPIC/FULL_TOPIC_LEARNING_PATH, v1.2.0 và một item có nhiều placements | Sửa validator/contract, không review lại R18 chỉ để đổi metadata; nhập đúng SHA/handoff/owner-held RD1, không tự cấp READY |
| Chuyên đề Vectơ/tọa độ, PR #793 | 7/7 Academic/PED PASS, RD1 42 owner-held PASS; 56 outcome, 114 public IDs | V2 cũ không chấp nhận compact matrix và phiên bản hiện hành | Hỗ trợ format đã review, không ép đổi thành SGK; giữ private bank hash/count và Q16 |
| Chuyên đề Hàm số R10, PR #801 | R18 cũ PASS đúng snapshot; M4–M7 R10 có nội dung sư phạm/SVG mới chỉ là AUTHORING Draft | Không được kế thừa PASS R18 cho Delta C học thuật mới, cũng không đòi review lại R18 vì metadata | AUTHORING kiểm/review đúng delta theo Q18 hiện hành; Topic luôn chỉ Kiến thức/Luyện tập/Tự kiểm tra, không Core riêng |
| SGK Knowledge G10, PR #797 | 27 trang nâng cấp Model B, Q18 receipt chưa đóng | R4/Roadmap khóa SHA/FNV cũ | Self-QA mode ở PR #804 chỉ ĐỀ XUẤT riêng cho Knowledge đã có Academic baseline; không áp Topic mới |

## 2. Thay đổi code trực tiếp trong PR #799

1. Validator V2 tiếp nhận TOPIC/FULL_TOPIC_LEARNING_PATH, chuẩn v1.2.0, nhiều placement của một canonical item và hai schema handoff đã review. Giữ nguồn/receipt SHA, A1–A7, PED1–PED6, private RD1 metadata.
2. Phiên bản V2 không bị đóng băng cứng tại v1.2.0: đọc VERSION và STATUS từ đúng một file quy phạm SLM-THPT-QUALITY-ONE. Governance proposal/draft/PENDING_OWNER không được tự coi là hiệu lực. Test âm bảo đảm v2.0.0 Draft bị từ chối, một v2.0.0 đã được duyệt mới có thể được tiếp nhận, STANDARD_ID khác luôn FAIL.
3. Script test-thpt-release-scope-isolation.cjs phân loại Topic-only, SGK-only, mixed source và shared assessment/runtime: chỉ chẩn đoán, không tự cho PASS. Với mixed scope, mỗi nhánh phải có chứng cứ đúng nguồn, không truyền Academic PASS hay Q18 self-QA từ SGK sang Topic.
4. Workflow thpt-topic-intake-qa.yml thực thi QA intake nhẹ cho Topic: V2 contract, negative Q15/Q16/RD1, REGISTER và manifest READY thực, không deploy. R4/Golden/browser và đánh giá phát hành vẫn độc lập.
5. R4 bổ sung negative self-test cho Topic và nhận chuẩn hiệu lực; không tắt bất kỳ script source-lock SGK cũ.

## 3. Không để khóa cũ kéo sang Topic

- Khi chỉ học liệu Topic thay đổi, không bắt bài B09/B15 SGK có receipt mới; hai bài nằm ngoài scope. Test an toàn shared runtime vẫn bắt buộc nếu website, route, MkDocs hoặc JS thay đổi.
- Khi SGK Knowledge nâng cấp, giữ historical academic blob/receipt bất biến; candidate mới chỉ được đi theo Q18/Source07/V2 đã phê duyệt và receipt theo từng outcome, không sửa SHA cũ để ép xanh.
- Khi cùng PR sửa SGK và Topic, tách hồ sơ và QA; ưu tiên hai PR độc lập. Không biến Topic Reviewer PASS thành phép hợp thức hóa SGK enrichment, cũng không biến Knowledge self-QA thành Topic Reviewer PASS.
- Khi thay đổi assessment/runtime chung, vẫn phải kiểm Golden/Q15/Q16/Final Submit/RD1/Mastery/Firebase theo HEAD thực. Topic client self-check không được nhận là readiness chính thức.

## 4. Đường đến phát hành Topic

AUTHORING nộp một source canonical + reviewer Academic/PED PASS đúng snapshot + A1–A7/PED1–PED6/S1, 1 handoff V2. Private RD1 owner-held chỉ có count/SHA256 ở public Git. Sau V2 valid mới tạo đúng một manifest ready/PACKET_ID.md và một REGISTER đồng bộ — AUTHORING ký CONTENT_READY, RELEASE không tự nâng trạng thái.

RELEASE nhận gói và tích hợp thành đúng ba mục Kiến thức/Luyện tập/Tự kiểm tra, bảo toàn reusable canonical IDs, kiểm render/SVG/MathJax/mobile, Golden/Q15/Q16, no hint/no key/no AI Tutor before Final Submit, không ghi Mastery trái phép, không công khai RD1. R1–R5/P1–P2 và quyền owner riêng với Academic/PED, không gọi source PASS là website PASS.

## 5. Vì sao chưa tự merge PR #799

Workflow production deploy.yml chạy trên bất kỳ push vào main. Vì vậy merge ngay cả PR chỉ sửa QA intake cũng có thể kích hoạt một deploy production. Để tránh tự phát hành trái phạm vi, giữ PR #799 ở bước kiểm/đề nghị merge khi exact-head checks đạt, không gộp code-only compatibility với phát hành website hay học liệu Topic.

**Checkpoint:** TOPIC_V2_OPERATIONAL_COMPAT_IN_DRAFT / TOPIC_INTAKE_CI_SEPARATE / FUTURE_STANDARD_VERSION_FAIL_CLOSED / TOPIC_AUTHORING_DRAFT_NOT_READY / NO_MERGE_NO_DEPLOY.
