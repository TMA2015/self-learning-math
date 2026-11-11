# AUTHORING Q15/Q07 R06 — kiểm lại Toán và tính khác biệt của 11 DRAFT (10/11/2026)

**Lane:** AUTHORING only; **scope:** \`THPT-TOPIC1-M1M3-M6-DELTA-C\`; **standard:** \`SLM-THPT-QUALITY-ONE/1.2.0\`, Q01–Q18.  
**Verdict:** \`AUTHORING_MATH_SPOT_24_OF_24_PASS\` · \`Q15_SEMANTIC_HOLD\` · \`INDEPENDENT_ACADEMIC_PED_HOLD\` · \`Q07_REAL_BROWSER_HOLD\` · \`CONTENT_READY=NO\`.

## 1. Source identity / unchanged approval

- R18 canonical public M1–M7: Git blob \`2340ea4975b37a457363eea59dd617070934983c\` — **không sửa**; independent Academic/PED PASS chỉ đúng snapshot này.
- M1/M2/M3 Practice hiện hành: \`c956563f8e3dc88f6a6277f493b32a629f5069ae\` và \`469f196958dfb6e64a14c22171c376d85f7096d5\`, **11 DRAFT = 7 APP + 4 Written**.
- S1 source visual receipts gốc nằm ở chính nguồn D1–D6/R05 (G10 T2 B15–B16, G11 T2 B31), không tự suy lại trang.
- Protected private RD1 30 câu không được truy cập/thay đổi; mọi nhận định dưới đây chỉ nói về câu PUBLIC có giải công khai.

## 2. Toán — 24 kiểm tra tự động có giới hạn (SymPy / lập luận điều kiện)

| # | Mã/đối tượng | Điều kiện/đẳng thức hoặc tình huống được kiểm | QA |
|---:|---|---|---|
| 1 | M1 APP02 | \((x^2-1)/(x-1)=x+1\) chỉ trên \(x\ne1\) | PASS |
| 2 | M1 APP02 | Giới hạn khi \(x\to1\) bằng 2 nhưng điểm \(x=1\) vẫn bị loại khỏi hàm gốc | PASS |
| 3 | M1 APP05 | \(9-x^2\ge0 \iff x\in[-3,3]\), sau đó loại \(x=-2\) do mẫu | PASS |
| 4 | M1 APP05 | \(q(-3)=0\) | PASS |
| 5 | M1 APP05 | \(q(0)=3/2\) | PASS |
| 6 | M1 APP05 | \(q(3)=0\) | PASS |
| 7 | M1 APP06 | \((x-1)(x-3)=0\) tại đúng 1,3 | PASS |
| 8 | M1 APP06 | Căn ở tử yêu cầu \(x\ge-2\), \(x=-2\) được nhận | PASS |
| 9 | M1 WR01 | \(1/\sqrt{x-1}\) phải có \(x>1\), không phải \(x\ge1\) | PASS |
| 10 | M1 WR02 | Giá trị \(\sqrt2\) của \(\sqrt{x+1}\) chỉ đạt tại \(x=1\); rút gọn phân thức có điểm khuyết làm mất duy nhất giá trị đó | PASS |
| 11 | M2 APP05 | \(p(0)=2,p(1)=1,p(2)=3\) với đúng điều kiện chọn nhánh | PASS |
| 12 | M2 APP05 | Nhánh \(x+1\) phía phải có giới hạn 2 khi \(x\downarrow1\), nhưng \(p(1)=1\) | PASS |
| 13 | M2 APP06 | \(-0,5<0\) nhưng \(r(-0,5)=0,5>r(0)=-2\), bác bỏ đồng biến toàn miền | PASS |
| 14 | M2 WR01 | Dưới giả định tuyến tính từ 10 đến 20 km/h trong 10 phút, vận tốc phút 5 là 15 km/h | PASS |
| 15 | M3 APP07 | Với \(f=x^2+2x-3\), \(|f(x)|=0\) có nghiệm \(-3,1\) | PASS |
| 16 | M3 APP07 | \(f(|x|)=0\) chỉ cho \(u=|x|=1\), nên \(x=\pm1\); loại \(u=-3\) | PASS |
| 17 | M3 APP09 | Trên \(D=[0,1]\cup[3,4]\), \(m(0),m(1),m(3),m(4)=(1,4,4,1)\) | PASS |
| 18 | M3 APP09 | Đỉnh \(x=2\) không thuộc miền D dù \(m(2)=5\) | PASS |
| 19 | M3 WR02 | \(g(2)=1,g(-2)=15,h(2)=h(-2)=-1\) | PASS |
| 20 | M3 WR02 | \(g=|f|\) có nghiệm 1,3 | PASS |
| 21 | M3 WR02 | \(h=f(|x|)\) có nghiệm \(-3,-1,1,3\) | PASS |
| 22 | M6 f/f′ | Với \(f=x^3/3-x\), thương sai phân tại \(x_0=1\) rút thành \(h+h^2/3\) | PASS |
| 23 | M6 f/f′ | Hai phía \(h\to0\) cùng giới hạn 0, đúng \(f'(1)=0\) | PASS |
| 24 | M6 phản ví dụ | \(f=x^3\): \(f'(0)=0\) nhưng \(f(-1)<f(0)<f(1)\), không cực trị tại 0 | PASS |

Đây chỉ là **các trường hợp đã chọn**, không phải formal proof trên mọi pixel/đầu vào, không thay độc lập NotebookLM Academic/PED, không đánh giá toàn bộ SGK/SBT.

## 3. Q15 cross-bank: quyết định có chứng cứ, còn phải phản biện

Các đối chiếu trực tiếp hiện có: 6 item public formative B15 của \`docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js\` (blob \`1223d4c2b574433479c5d222dbeff363718ee4bb\`); 6 item G10 Topic P01–P06 (reviewed R01 blob \`57eaf0141a5db9bfba91f0e6c863fc7dcc638068\`); hai Written B15 (source \`docs/thpt-preview/thu-vien/tu-luan.md\` blob \`4da918f36d30c9b7110099e81fc88943e5b7705b\`); R18 Kiến thức và các bài Tự thử. Không khẳng định đã so hết toàn kho 10–12.

| DRAFT candidate | Khác biệt năng lực so với nguồn đã biết | Quyết định Q15 hiện tại |
|---|---|---|
| M1-APP02 | Phép khử nhân tử ở mẫu nhưng giữ điểm khuyết; **cũng gần R18 M7-T03** \((x^2-9)/(x-3)\), khác vị trí trong hành trình | \`REUSE_OR_REVIEW_AS_SCAFFOLD\`, chưa mint ID |
| M1-APP05 | Căn \(9-x^2\) cho **miền hữu hạn hai đầu kín**, mẫu loại một điểm **ở trong miền** | \`RETAIN_FOR_REVIEW\` |
| M1-APP06 | Căn \(x+2\) cho **nửa trục vô hạn**, mẫu tích loại hai điểm, có biên căn bằng 0 ở tử; cùng họ dạng APP05 nhưng khác cấu trúc miền | \`SEMANTIC_DISTINCTNESS_REVIEW\` |
| M1-WR01 | Căn ở **mẫu**, biện luận điều kiện nghiêm ngặt có rubric; nguồn M1 Kiến thức đã giải thích \(1/\sqrt{5-x}\) | \`WRITTEN_RUBRIC_VS_KNOWLEDGE_REVIEW\` |
| M1-WR02 | Rút gọn có điểm khuyết, còn buộc xác định **tập giá trị thiếu đúng một phần tử** | \`RETAIN_FOR_REVIEW\` (không tự trùng APP02) |
| M2-APP05 | Hàm từng đoạn nhánh nào nhận dấu bằng, chấm rỗng/đặc; gần **M2 Kiến thức Vận dụng 1/2**, nhưng đã đổi điều kiện và số liệu | \`HIGH_OVERLAP_REUSE_OR_RETIRE_REVIEW\` |
| M2-APP06 | Hai nhánh riêng đều tăng, song **bước nhảy xuống** khiến toàn hàm không đồng biến, khác B15-P03 xét một hàm \(|x+2|\) | \`RETAIN_FOR_REVIEW\` |
| M2-WR01 | Dữ kiện hai lần đo khác với **giả thiết nội suy**; M2 Kiến thức cũng có bài mẫu tăng đều của nhiệt độ | \`WRITTEN_RUBRIC_VS_EXAMPLE_REVIEW\` |
| M3-APP07 | Đặt \(u=|x|\ge0\), **loại nghiệm \(u<0\)**; WR02 hỏi thêm hình phản chiếu/giá trị và có hai nghiệm gốc dương | \`ENRICHMENT_SCAFFOLD_REVIEW\` |
| M3-APP09 | Tối ưu trên **hai đoạn rời**, thay vì một đoạn chứa/không chứa đỉnh như R18 M3/Topic-P05 | \`RETAIN_FOR_REVIEW\` |
| M3-WR02 | Viết luận chứng cho **hai phép biến đổi** \(|f(x)|\) và \(f(|x|)\), nghiệm, giá trị và hình; ngoài Core B16 | \`ENRICHMENT_REVIEW_HOLD\` |

Các mục \`RETAIN_FOR_REVIEW\` **không phải** verdict uniqueness hay Academic PASS. Các mục \`HIGH_OVERLAP\` vẫn trong R05 candidate để reviewer quyết định không quá tay cắt một thang luyện tập hữu ích. Sau verdict mới gán một \`item_id/content_version\` canonical và nhiều \`placement/role\` có kiểm soát; không tự sửa nguồn R18.

## 4. Q07/D5 SVG audit và một lỗi nguồn đã sửa

Tại SVG M1 \`Temp_FIG_TOPIC1_M1_DOMAIN_INTERSECTION_R00.svg\`, accessible \`<title>\` trước đây ghi **“căn thức trên mẫu số”** trong khi biểu thức là \(\sqrt{4-x^2}/(x-1)\). Đây là nhầm vị trí căn thức, gây sai cho người dùng trợ năng.

- Bản sửa **chỉ accessible title** thành “Tập xác định của biểu thức có căn ở tử và mẫu x trừ 1”.
- **NEW SVG Git blob:** \`ede8ac7f7bf1d4f4b98af1d5736b74a14ab0980f\`.
- Không đổi \`<desc>\`, đồ thị, tập xác định hay các endpoint; phần hình mới vẫn \`DELTA_C_UNREVIEWED\`.
- Static review: 4 SVG đều có \`title\`, \`desc\`, \`viewBox\`, \`aria-labelledby\`, không chứa script/foreignObject. Các nhãn chính đã được đọc, **không suy** từ static XML thành Browser/Touch/Keyboard/Safari PASS.
- 4 HTML gốc có lời dẫn và kết quả public; source mock QA lịch sử không phải visual-render QA exact head, nên \`Q07_REAL_BROWSER=HOLD\`.

## 5. Cổng đóng còn thiếu

1. Review độc lập **R06** (sẽ tạo duy nhất sau khi khóa sửa SVG) cho M1/M2/M3/M6 DELTA_C + 11 ứng viên + 4 SVG/4 HTML; đúng 5 Permanent THPT v2.1, source receipt, P0/P1/P2, minimal delta.
2. Reviewer Q15 quyết định các ứng viên HIGH_OVERLAP; kiểm full semantic current bank trước cấp ID/canonical content version; không dùng câu công khai làm private Topic RD1.
3. Q07 real browser (Chromium, Safari/thiết bị thật theo cổng phù hợp) chưa được thực thi trên source thực trong lượt này.
4. V2 TOPIC intake \`#790\` và \`CONTENT_READY\` còn HOLD; không tạo ready manifest, REGISTER, merge, deploy hay viết Mastery.

**AUTHORING CHECKPOINT:** \`24_OF_24_MATH_SPOTS_PASS\`, \`M1_SVG_ACCESSIBILITY_TITLE_CORRECTED\`, \`11_DRAFT_Q15_REVIEW_PENDING\`, \`R18_PRESERVED\`, \`NO_CONTENT_READY\`.
