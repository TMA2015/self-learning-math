# CĐ07 R05 — SOURCE-LOCKED AUTHORING DELTA QA · 15/11/2026

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
PACKET_ID: THPT-TOPIC07-SEQUENCES-AP-GP-FULL-R01
Q18_STATUS: TARGETED_CONTENT_CHECK_IN_PROGRESS
R05_STATUS: AUTHORING_CANDIDATE_NOT_CONTENT_READY
PREVIOUS_R04_SOURCE_BLOB: 238813098845ee8b7bc525174febb16ef6f70d70
R05_SOURCE_PATH: prototypes/thpt/content-drafts/topic07-sequences/Temp_TOPIC07_CONTINUOUS_NUMBERED_FORMAL_R05_CANDIDATE_20261115.md
R05_SOURCE_BLOB: ed884971ebb31577f1db8b84f67c3cdb1c3a1c3a
ORIGINAL_NEW22_BANK_BLOB: 3bf3ab77d89497b39ae50ac54f71b81eccddc14c
RELEASE_AUTHORIZATION: NO

## Delta được kiểm

1. Q03/O01: sửa câu sai về miền chỉ số thực; tính chất dãy phải chứng minh với các chỉ số nguyên thuộc miền đã định nghĩa.
2. Q13/O16: phân biệt công thức đánh số số hạng từ 1 với hình SVG bắt đầu từ kỳ 0; u_k=u_0+kd, v_k=v_0(1+r)^k.
3. Q03/Q13/O18: n>=1, a>=0, 1+r>0 và trường hợp r=0 cho mô hình dòng tiền gửi cuối kỳ.
4. Q04/Q09-Q14: đánh số 4 mạch liên tục / 18 mục; các công thức chủ chốt được viết trong MathJax sau giải thích bản chất.
5. Q07/Q15/Q16: 3 SVG và toàn bộ 69 canonical source IDs, 18 phần Đối chiếu, 22 item gốc không đổi; không tạo private RD1 hoặc Mastery.

## Source checks đã chạy

1. PASS — 18 lessons/outcomes
2. PASS — 18 reveal
3. PASS — 4 main arcs
4. PASS — 18 titled sections
5. PASS — 3 outer pages
6. PASS — 3 diagrams unchanged
7. PASS — 69 canonical references unchanged
8. PASS — 22 original bank records
9. PASS — index statement corrected
10. PASS — period 0 aligned
11. PASS — deposit assumptions
12. PASS — inline MathJax balanced
13. PASS — deposit 331
14. PASS — loan 121
15. PASS — n=6 strict threshold

### Tính toán đối chứng

SVG dãy 2n−1 với n=1..6: 1,3,5,7,9,11; CSC kỳ 0: 100/110/120/130; CSN kỳ 0: 100/110/121/133,1. Gửi ba khoản cuối kỳ 100 với r=10%: FV=331. Vay 210 trong 2 kỳ: A=121. Written W03 sai số 8/2^n < 1/4: n nhỏ nhất là 6.

## NOT_TESTED / GATE

- R05 chưa có nguồn Q18 self-QA receipt mới và chưa khóa handoff V2/ready/REGISTER. R04 receipt vẫn chỉ thuộc blob R04; không repoint RELEASE sang R05.
- Chưa quét lại PDF S1 trong lượt này; phạm vi SGK/SBT G11 dùng đúng historical S1 receipt của R04 và không mở rộng Core/outcome.
- Chưa kiểm browser thật/AP/Final Submit/responsive hoặc nguồn CI cho R05. Không suy từ source checks sang RELEASE PASS.
- Next: hoàn tất targeted Q18 đối chiếu 18 outcomes và 22 item theo bản học sinh R05; khi P0/P1=0, chốt receipt+V2+ready+REGISTER cùng một pass, không merge/deploy.
