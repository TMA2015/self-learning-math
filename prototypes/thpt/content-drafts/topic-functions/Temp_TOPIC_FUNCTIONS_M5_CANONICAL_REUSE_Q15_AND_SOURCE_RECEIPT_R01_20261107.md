# Chuyên đề Hàm số và đồ thị — M5 Q15 canonical placement và S1 receipt

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-M5-R01-20261107  
**LANE:** AUTHORING; **STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18; **ACADEMIC/PED:** PENDING  
**NO_CLONE:** tất cả câu đã tồn tại có duy nhất một bản câu/đáp án/lời giải/rubric, nhiều placement. **NO_PRIVATE_RD1 / NO_NEW_MASTERY / NO_RELEASE.**

## 1. Hai bản nguồn sơ cấp đã kiểm trực tiếp

| Nguồn S1 | Phạm vi đã mở từng trang trên bản scan | PDF index 1-based | Raw PDF SHA256 |
|---|---|---|---|
| SGK KNTT Toán 11 Tập 1, B16 Giới hạn hàm số | Trang in 111–118 | 112–119 | 4492122eb2c9df626582d37b5c3d0e6513d66ca68d80d8a1e69577aa8b706828 |
| SGK KNTT Toán 11 Tập 1, B17 Hàm số liên tục | Trang in 119–122 | 120–123 | Cùng SGK SHA ở hàng trên |
| SBT KNTT Toán 11 Tập 1, B16 | Trang in 79–83 | 80–84 | fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229 |
| SBT KNTT Toán 11 Tập 1, B17 | Trang in 84–86 | 85–87 | Cùng SBT SHA ở hàng trên |

**Source inspection method:** trực tiếp nhìn ảnh render từng trang, cả sơ đồ minh họa, ví dụ và họ bài. PDF quét image-only, không có text layer; không dùng OCR và không tuyên bố đã trích text từ PDF. Không đưa bản PDF/Drive link cá nhân lên GitHub.

**Nội dung đã xác nhận từ SGK:** B16 có giới hạn hữu hạn tại điểm, phép tính và liên hợp, giới hạn một phía, giới hạn tại vô cực, giới hạn vô cực tại một điểm, tình huống thực tế/đọc đồ thị; B17 có liên tục tại một điểm, liên tục trên khoảng/đoạn (đầu mút một phía), phép toán hàm liên tục, tính chất bảo đảm có nghiệm khi liên tục và đổi dấu. SBT cung cấp thêm họ bài tìm tham số liên tục, tính giới hạn với căn, phân thức, xét gián đoạn và ứng dụng. **Không đưa B15 dãy số thành bài đầu riêng của Topic**: chỉ dùng trực giác tiến gần nếu cần giải thích, không ép theo chương SGK.

## 2. Kiểm đúng canonical nguồn hiện hữu

Nguồn canonical AUTHORING có lịch sử review SGK riêng, được fetch/readback:
- \`prototypes/thpt/content-drafts/G11_CHV_B15_B17_S1_PAGINATION_EQUIVALENT_R03_SOURCE_20261102.md\`, Git blob \`7934757ed06de4ae4b63dbc351ef524fc054e0d0\`. Ghi rõ R03 chỉ sửa nguồn trang SBT theo Delta B, **không thay đổi toán/đáp án/rubric** của R02 đã nhận PASS theo receipt riêng. Giữ nguyên source SGK.
- \`prototypes/thpt/content-drafts/G11_CHV_B15_B17_D3_PUBLIC_CANONICAL_CANDIDATES_R01_20261101.md\`, blob \`aae88016555eff2553bfb1016692e310d25a84dc\`: bản nguồn public ban đầu, đã được tích hợp vào R03/receipt sau; không coi dòng trạng thái candidate cũ là verdict hiện tại.
- \`prototypes/thpt/content-drafts/G11_CHV_B15_B17_D4_WRITTEN_D6_HELP_R01_20261101.md\`, blob \`6b370781e3bab2951d8a11fd8d97030ffbb528d5\`: bốn Written và bốn HELP liên quan M5 (cùng dữ liệu tích hợp R03).

## 3. Hai mươi public canonical G11 B16/B17 (đã đọc đúng tiêu đề và nội dung)

| ID canonical hiện hữu | Mạch luyện Topic M5 | Level/placement dự kiến |
|---|---|---|
| THPT-G11-CHV-B16-C01 | giới hạn khác giá trị tại điểm | TOPIC_PRACTICE M5 cơ bản |
| THPT-G11-CHV-B16-C02 | giới hạn trái/phải của hàm từng đoạn | TOPIC_PRACTICE M5 cơ bản |
| THPT-G11-CHV-B16-C03 | hai phía của tiệm cận đứng | TOPIC_PRACTICE M5 cơ bản |
| THPT-G11-CHV-B16-P01 | nhân liên hợp, dạng 0/0 | TOPIC_PRACTICE M5 vận dụng |
| THPT-G11-CHV-B16-P02 | phân tích nhân tử 0/0 | TOPIC_PRACTICE M5 vận dụng |
| THPT-G11-CHV-B16-P03 | so hai giới hạn tại điểm nối | TOPIC_PRACTICE M5 vận dụng |
| THPT-G11-CHV-B16-P04 | căn tại x→−∞ và dấu tuyệt đối | TOPIC_PRACTICE M5 vận dụng |
| THPT-G11-CHV-B16-P05 | hữu tỉ khi x→+\infty | TOPIC_PRACTICE M5 vận dụng |
| THPT-G11-CHV-B16-P06 | giới hạn một phía vô cực | TOPIC_PRACTICE M5 vận dụng |
| THPT-G11-CHV-B16-P07 | giới hạn hiệu suất mô hình | TOPIC_PRACTICE M5 ứng dụng |
| THPT-G11-CHV-B17-C01 | vá lỗ đúng giá trị | TOPIC_PRACTICE M5 cơ bản |
| THPT-G11-CHV-B17-C02 | giá trị điểm không khớp giới hạn | TOPIC_PRACTICE M5 cơ bản |
| THPT-G11-CHV-B17-C03 | liên tục tại đầu mút căn | TOPIC_PRACTICE M5 cơ bản |
| THPT-G11-CHV-B17-P01 | miền liên tục của phân thức | TOPIC_PRACTICE M5 vận dụng |
| THPT-G11-CHV-B17-P02 | tìm tham số liên tục điểm nối | TOPIC_PRACTICE M5 vận dụng |
| THPT-G11-CHV-B17-P03 | tồn tại nghiệm bằng đổi dấu | TOPIC_PRACTICE M5 vận dụng |
| THPT-G11-CHV-B17-P04 | vá lỗ với tham số | TOPIC_PRACTICE M5 vận dụng |
| THPT-G11-CHV-B17-P05 | căn và liên tục trên đoạn | TOPIC_PRACTICE M5 vận dụng |
| THPT-G11-CHV-B17-P06 | liên tục ghép nhánh | TOPIC_PRACTICE M5 vận dụng |
| THPT-G11-CHV-B17-P07 | tồn tại ≠ duy nhất trong ứng dụng | TOPIC_PRACTICE M5 ứng dụng |

**Count:** B16=10 public IDs (3 Core + 7 Practice); B17=10 public IDs (3 Core + 7 Practice); tổng **20**. Tên ID và stem/solution đã đọc từ source R03, không tự điền số câu. Khi website Topic hiển thị các câu này, chính \`item_id\` trên phải được render trong Topic bằng placement riêng; không clone source hoặc bắt người học chuyển sang trang SGK.

## 4. Written/Anchor và HELP: một thư viện, không sinh bản sao

| Existing canonical ID | Ý nghĩa/review scope | Topic role |
|---|---|---|
| THPT-G11-CHV-B16-W01 | giới hạn lỗ và hai phía, rubric /4 | TOPIC_WRITTEN |
| THPT-G11-CHV-B16-W02-ANCHOR | liên hợp và dấu x ở âm vô cực, rubric /4 | TOPIC_WRITTEN, ANCHOR_TAG |
| THPT-G11-CHV-B17-W01 | liên tục điểm ghép và có nghiệm, rubric /4 | TOPIC_WRITTEN |
| THPT-G11-CHV-B17-W02-ANCHOR | liên tục đầu mút/đoạn và ghép nhánh, rubric /4 | TOPIC_WRITTEN, ANCHOR_TAG |

**Do not normalize** các rubric này thành một phiên bản điểm khác. Tất cả bốn Written giữ y nguyên version/rubric nguồn, chỉ thêm placement/role Topic. Anchor là nhãn, không là ngân hàng phụ.

**Bốn HELP source canonical:** \`HELP-G11-CHV-B16-01\` (nhầm giới hạn với giá trị điểm), \`HELP-G11-CHV-B16-02\` (một phía vs hai phía), \`HELP-G11-CHV-B17-01\` (liên tục thiếu f(a)), \`HELP-G11-CHV-B17-02\` (đổi dấu nhưng suy duy nhất). Cùng HELP source hiển thị ngay trong Topic, quay lại từng đoạn nội dung và formative tương ứng.

**D5 shared figures hiện hữu:** \`FIG-G11-B16-01_R01.svg\` Git blob \`d623e8a96c6d5f9723aafb9c62bffe57bdc9aa73\` (lỗ/giới hạn) và \`FIG-G11-B17-01_R01.svg\` blob \`0cc06960b371bca72ee78da414a04aa56f5e5fbe\` (chấm đặc khác lỗ). Đã fetch actual SVG từ \`docs/assets/images/thpt/\` và \`prototypes/thpt/content-drafts/svg/\`; không tạo hình lặp. Khi render tại Topic phải kèm mô tả đọc hình, không dùng link sang SGK.

## 5. Triage các P-M5 candidates (không làm tăng số item trên giấy)

- **P-M5-07:** so A không định nghĩa tại 2 / B giá trị 4 / C giá trị 7. Đây là COMPOSITE từ ý toán đã có B17-C01/C02, dùng làm minh họa tổng hợp, **không cấp item mới**.
- **P-M5-09:** phản ví dụ bỏ tính liên tục mà hai đầu đổi dấu. **NEW_CANDIDATE** vì hỏi sai giả thiết của định lí chứ không chỉ áp dụng; vẫn phải rà whole bank trước khi cấp ID.
- **P-M5-11:** phối hợp miền của \(\sqrt{x+2}/(x-1)\) và liên tục phải tại −2, loại x=1. **NEW_CANDIDATE** khác B17-P01/P05 về giao điều kiện và endpoint, nhưng chưa qua rà toàn chương/lớp.
- **P-M5-01/02/03/04/05/06/08/10/12:** MICRO/REUSE_FAMILY, không cấp canonical mới chỉ vì thay số.

**Current counts:** 20 existing public IDs + 4 existing Written + 4 existing HELP + 2 FIG sources, chỉ **2 new public practice candidates đang HOLD**, **0 new canonical IDs approved**. Không đưa 2 candidate mới vào Topic Readiness khi đã cho xem lời giải công khai.

## 6. Canonical promotion rules and review gate

- Không ghi hai stem/key/rubric cho cùng một item trên hai nhánh. \`item_id\`, \`source_version\`, \`outcome_id\`, \`placement\`, \`role\`, \`prerequisite\`, \`difficulty\` phải trỏ tới cùng canonical record. Metadata Topic khác nhau không nhân bản đáp án.
- Hai bài new candidates là **Delta C**, yêu cầu NotebookLM độc lập đúng 5 Permanent Sources THPT v2.1 sau khi rà trùng toàn nguồn; G11 SGK Academic PASS cũ là snapshot bất biến, không cấp PASS cho prose Topic mới.
- Full Topic readiness cho G10–12 vẫn thiếu evidence độc lập; không phát hành hoặc ghi Mastery. Học sinh xem các câu formative ở Topic chỉ nhận hướng dẫn **sau khi tự thử**, RD1 riêng cấm key/hint trước Final Submit.
- **AUTHORING stop at handoff**, không viết website, không merge/deploy; source Q01–Q18 cùng một, Q09–Q14 là cách dạy linh hoạt, không là một form cứng.

**STATUS:** \`M5_Q15_EXISTING_CANONICAL_20_CONFIRMED\`; \`M5_WRITTEN_EXISTING_4_CONFIRMED\`; \`M5_HELP_4_FIG_2_CONFIRMED\`; \`NEW_PRACTICE_CANDIDATE_2_PENDING\`; \`TOPIC_FULL_CONTENT_READY=NO\`.
