# CURRENT AUTHORING HEAD — Chuyên đề 1 M1–M7, R04 (10/11/2026)

**LANE:** AUTHORING · **PR:** #801 (Draft) · **STANDARD:** \`SLM-THPT-QUALITY-ONE/1.2.0\` Q01–Q18 · **RELEASE:** NO · **CONTENT_READY:** NO.

## 1. Canonical đã PASS và tuyệt đối không sửa

- \`prototypes/thpt/content-drafts/topic-functions/Temp_TOPIC_FUNCTIONS_FULL_PUBLIC_CANONICAL_SOURCE_R18_20261108.md\`: blob **\`2340ea4975b37a457363eea59dd617070934983c\`**.
- Toàn bộ 7 mạch M1–M7 có nguồn R18 đã nghiệm thu đúng snapshot; M4/M5/M7 và M6 cũ giữ nguyên. Private RD1 30 câu vẫn ở kho kín. Không thay đổi website, Golden UI, Firebase, item bank gốc, Mastery hoặc đánh giá Final Submit.

## 2. Phần mới đã biên soạn và tự QA

- M1–M3: giải thích sâu điều kiện miền, tập giá trị, điểm rỗng/đặc, đồ thị biến đổi trị tuyệt đối, tịnh tiến trên miền hữu hạn, tối ưu miền con; **4 SVG và 3 HTML tự chứa**. Nội dung SVG/HTML mới chưa được nhận Academic/PED PASS.
- M6: bài học sinh về độ dốc cát tuyến hai phía, tiếp tuyến, liên kết \(f\) và \(f'\), và phản ví dụ \(f'(0)=0\) **không** là cực trị; **1 HTML D5** hai đồ thị có thang trục tự co giãn để giữ M/N trong khung.
- Luyện tập còn **14 DRAFT ứng viên (10 APP + 4 Written)** sau Q15 dedup ba câu gần trùng. Các câu đã loại: \`DRAFT-T1-M1-APP03\`, \`DRAFT-T1-M2-APP04\`, \`DRAFT-T1-M3-APP06\`. Không đăng ký ID mới chỉ vì đề đổi số. 14/14 ID duy nhất theo chuỗi trong hai file practice.
- **Math spot QA:** 13/13 SymPy cases đạt cho các nội dung đã kiểm, không thay review toàn bài; code M6 **36/36 mock JS checks** và **12/12 mock-geometry** đạt tại 390/820/1440 px; **chưa real-browser render/touch/keyboard/a11y QA** trên chính Git HEAD.
- SGK/SBT KNTT S1 theo B15/B16 lớp 10 T2 và B31 lớp 11 T2 đã đọc trực tiếp, số trang in đối chiếu PDF trong hai receipt nguồn, có SHA PDF.

## 3. CHỈ một nguồn transport review đang hiệu lực trên HEAD

**File:** \`Temp_TOPIC1_ALL_NEW_DELTA_M1_M3_M6_NOTEBOOKLM_ONE_SOURCE_R04_20261110.md\`  
**Git blob SHA:** **\`72ed291e65f1a321fcc6150e81319362631a96eb\`**

- Gồm **22 nguồn** trọn vẹn (20 thành phần cũ đã QA + ma trận Q15 hiện tại + checkpoint R04), đã đối chiếu **22/22 exact Git blob SHA và nội dung** trên HEAD theo ba lượt readback.
- Có một prompt 5 câu cho NotebookLM, dùng **đúng 5 Permanent Sources THPT v2.1** và S1/SBT. Targeted review chỉ M1–M3/M6 bổ sung \`DELTA_C\`, **không** review lại R18 đã PASS.
- Bản transport R02 M1–M3, R02 M6 và R03 chung **đã được xóa khỏi HEAD** sau khi chuyển nguồn (Git history vẫn lưu), không upload/đánh giá cùng R04. Những tài liệu QA cũ có ghi 17 câu hoặc nguồn R02 là **lịch sử ở thời điểm trước Q15 R04**, không phải quyết định hiện hành.

## 4. Cổng chưa đóng

| Gate | Trạng thái |
|---|---|
| D5 toán / source math spot | PASS **chỉ phần được thử** |
| Q15 14 ID uniqueness và 3 internal near-duplicates retired | VERIFIED nội bộ; **full cross-bank semantic vẫn HOLD** |
| Independent Academic + PED trên delta M1–M3/M6, SOURCE_RECEIPT | **PENDING** |
| AP/Q07 real browser responsive/touch/accessibility | **PENDING** |
| Handoff V2 TOPIC/ready/REGISTER; blocker issue #790 | **HOLD**, không tự phát hành |
| \`CONTENT_READY\` / merge / deploy | **NO** |

**NEXT:** reviewer độc lập chỉ phần DELTA_C R04, phân loại lỗi P0/P1/P2 theo outcome/item/model và xử lý \`MINIMAL_DELTA\` nếu có; không phát triển thêm gói source mới cùng nghĩa, giữ mọi PASS của snapshot bất biến. Không yêu cầu chủ dự án tự lưu ZIP hay quản lý các file kỹ thuật.
