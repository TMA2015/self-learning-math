# G12 SGK KNTT Tập Hai — Chương VI, SOURCE S1 AUDIT & OUTCOME BLUEPRINT (AUTHORING WORKING)
WORK_ID: G12-SGK-CHVI-B18-B19-R00-S1-OUTCOME-BLUEPRINT
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
STATE: AUTHORING_WORKING_UNREVIEWED
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: FULL_LEARNING_PATH_TARGET_ONLY
CONTENT_READY: NO
ACADEMIC_VERDICT: NOT_REVIEWED
PEDAGOGICAL_VERDICT: NOT_REVIEWED
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
PRIVATE_RD1: NOT_CREATED_OR_PUBLISHED_IN_THIS_BLUEPRINT
CANDIDATE_OUTCOMES: 14
CANDIDATE_ITEM_BANK: NOT_CREATED
CANONICAL_ITEM_ID_LOCK: NOT_YET

## 1. Nguồn S1 xác minh trực tiếp bằng ảnh trang sách gốc
| SOURCE_ROLE | Tài liệu/SHA256 | Nội dung | Trang **in** (sách) | Chỉ số PDF 1-based |
|---|---|---|---|---|
| SGK_CORE_AUTHORITY | SGK Toán 12 KNTT Tập Hai · SHA256 `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb` | ChVI mở đầu, Bài 18 *Xác suất có điều kiện* | 64–71 | 66–73 |
| SGK_CORE_AUTHORITY | cùng SGK S1 | Bài 19 *Công thức xác suất toàn phần và công thức Bayes* | 72–78 | 74–80 |
| SGK_CORE_AUTHORITY | cùng SGK S1 | Bài tập cuối Chương VI | 79–80 | 81–82 |
| REFERENCE_EXERCISE | SBT Toán 12 KNTT Tập Hai · SHA256 `823b013adeb487639e55493b4a7c09edb9a21daabc058ea53e6fe92f7a0352f1` | Bài 18 | 40–42 | 38–40 |
| REFERENCE_EXERCISE | cùng SBT S1 | Bài 19 | 43–44 | 41–42 |
| REFERENCE_EXERCISE | cùng SBT S1 | Bài tập cuối Chương VI | 45–47 | 43–45 |

**Đã kiểm bằng hình trang thật:** sách SGK có chương VI bắt đầu in64/PDF66, B18 in64–71; B19 mở ở in72/PDF74; cuối chương ở in79/PDF81. SBT phần này tiếp nối trọn in40–47 (PDF38–45); không phát hiện thiếu trang trong đoạn đã đọc. Trang SBT gốc chỉ là tham khảo họ dạng theo Q01 v1.1.0; học liệu chúng ta tạo câu, đáp án, phương pháp và rubric mới, không buộc chép đề gốc. **Chưa tuyên bố mọi exercise SBT được đối chiếu câu-đến-câu.**

**Phạm vi ngoài chapter:** SGK *Hoạt động thực hành trải nghiệm* ở in81–89/PDF83–91 và *Bài tập ôn tập cuối năm* in90–93/PDF92–95 là các phần **sau** ChVI, cần gói source/outcome độc lập theo hành trình SGK trước khi chốt học liệu trọn lớp 12. Không kéo chúng vào ChVI vô căn cứ và không tự cấp PASS.

## 2. Ma trận dự kiến Bài→outcome→họ dạng→điều kiện→độ khó (chưa review)
Bảng dưới đây là **đề xuất AUTHORING**, không phải nội dung đã được NotebookLM xác nhận; reviewer có quyền yêu cầu gộp/tách outcome để phản ánh đúng SGK. Mỗi outcome sẽ phải có kiến thức D1; một ví dụ D2 giải thích vì sao; các họ dạng bài D3 có độ sâu; một Written D4/rubric /5; đồ thị/cây hoặc bảng D5 hướng dẫn đọc; D6 cùng-outcome để tự khắc phục; PED1–PED6 concept trước công thức.

| OUTCOME_ID dự kiến | Năng lực và biểu hiện | SOURCE_ROLE | Họ dạng bài/mô hình | Điều kiện/bẫy cần kiểm | Dải độ sâu |
|---|---|---|---|---|---|
| `G12-CHVI-B18-O01` | Hiểu phép thu hẹp không gian mẫu khi biết biến cố B đã xảy ra | `SGK_CORE_AUTHORITY` | Sơ đồ tập hợp, cây trạng thái | Điều kiện B phải có thể xảy ra; phân biệt trước/sau thông tin | Nhận biết→Thông hiểu |
| `G12-CHVI-B18-O02` | Tính P(A|B)=P(A∩B)/P(B) và kiểm P(B)>0 | `SGK_CORE_AUTHORITY` | Không gian đều khả năng, phép giao và xác suất | Mẫu số là P(B), không phải P(A); không tính nếu P(B)=0 | Nhận biết→Vận dụng |
| `G12-CHVI-B18-O03` | Phân biệt chiều P(A|B) và P(B|A), diễn giải ngôn ngữ | `SGK_CORE_AUTHORITY` | Đọc điều kiện từ câu chữ, đổi góc nhìn | Đảo nhãn A/B làm sai mẫu số; không suy bằng nhau | Thông hiểu→Vận dụng |
| `G12-CHVI-B18-O04` | Nối xác suất có điều kiện với tính độc lập | `SGK_CORE_AUTHORITY` | P(A|B)=P(A) khi A,B độc lập và P(B)>0 | Không đồng nhất độc lập với xung khắc; điều kiện xác suất >0 | Thông hiểu→Vận dụng |
| `G12-CHVI-B18-O05` | Đọc bảng dữ liệu 2×2 và tính tần suất có điều kiện | `SGK_CORE_AUTHORITY` | Bảng 2×2; tổng hàng/cột và ô giao | Chọn tổng của nhóm điều kiện làm mẫu; tránh nhầm P(A|B) | Nhận biết→Vận dụng |
| `G12-CHVI-B18-O06` | Suy ra và áp dụng công thức nhân xác suất | `SGK_CORE_AUTHORITY` | P(A∩B)=P(A)P(B|A)=P(B)P(A|B) | Chọn thứ tự thuận dữ kiện; điều kiện phía sau mẫu số hợp lệ | Thông hiểu→Vận dụng |
| `G12-CHVI-B18-O07` | Giải tình huống lấy mẫu liên tiếp hoặc cây biến cố phụ thuộc | `SGK_CORE_AUTHORITY` | Không hoàn lại, phân nhánh, tích xác suất theo đường | Thay đổi số phần tử sau lượt 1; tổng xác suất các nhánh | Vận dụng→Tổng hợp |
| `G12-CHVI-B19-O01` | Phân chia sự kiện theo A và biến cố đối Ā | `SGK_CORE_AUTHORITY` | Hai nhánh đầy đủ, loại trừ nhau; diễn giải bằng Venn/cây | A và Ā xung khắc, tổng bằng 1, không bỏ trường hợp | Nhận biết→Thông hiểu |
| `G12-CHVI-B19-O02` | Suy luận và dùng công thức xác suất toàn phần hai trường hợp | `SGK_CORE_AUTHORITY` | P(B)=P(A)P(B|A)+P(Ā)P(B|Ā) | Giả thiết điều kiện và hai nhánh hợp lệ; không nhân chéo | Thông hiểu→Vận dụng |
| `G12-CHVI-B19-O03` | Biểu diễn cùng bài toán bằng sơ đồ cây và tổng các đường đến B | `SGK_CORE_AUTHORITY` | Đường nhánh điều kiện, tích mỗi đường, tổng các đường phù hợp | Các xác suất nhánh cộng thành 1; lá giao nhau không được đếm hai lần | Thông hiểu→Vận dụng |
| `G12-CHVI-B19-O04` | Dùng Bayes đảo điều kiện với P(B)>0 | `SGK_CORE_AUTHORITY` | P(A|B)=P(A)P(B|A)/P(B) | Xác suất hậu nghiệm không phải tỉ lệ nhánh thuận; tính đủ mẫu | Thông hiểu→Vận dụng |
| `G12-CHVI-B19-O05` | Phân tích tác động xác suất nền khi đảo điều kiện | `SGK_CORE_AUTHORITY` | Tỉ lệ gốc, độ nhạy/nhận diện; hiệu ứng base rate | Kết quả dương tính không đồng nghĩa đã mắc; phải tính giả dương | Vận dụng→Tổng hợp |
| `G12-CHVI-B19-O06` | Giải bài toán nhiều nguồn dân số/sản phẩm/khí tượng có đơn vị và diễn giải | `SGK_CORE_AUTHORITY` | Biến cố B định nghĩa rõ; dữ liệu theo tỉ lệ/nhóm | Rà chuẩn hóa dữ liệu, phần trăm, số trường hợp và điều kiện | Vận dụng→Tổng hợp |
| `G12-CHVI-B19-O07` | Tổng hợp bài tự luận nhiều bước: cây→toàn phần→Bayes→kiểm kết quả | `EXAM_PRACTICE` | Sơ đồ cây hai nhánh, số liệu thực tế và phân tích sai lầm | Không vượt chương trình; ghi nhãn bài luyện thi/ứng dụng tích hợp | Vận dụng→Tổng hợp |

## 3. Điểm bắt buộc trước khi biên soạn công thức
1. **VÌ SAO HỌC (PED1):** Một xác suất thay đổi khi người học biết thông tin mới; đầu bài phải nêu rõ *đã biết biến cố nào xảy ra*. B18 trong SGK mở với trò ba cánh cửa; khi viết lại dạng tự tạo, phải nêu rõ người dẫn biết vị trí phần thưởng, luôn mở cửa có giải thưởng phụ, và quy tắc chọn cửa — không kết luận xác suất đổi cửa là 2/3 nếu cơ chế mở cửa khác.
2. **TIỀN ĐỀ (PED2):** không gian mẫu, biến cố, giao, hợp, biến cố đối, độc lập, đếm trường hợp đồng khả năng, bảng tần số.
3. **BẢN CHẤT (PED3):** điều kiện B làm thu hẹp không gian xác suất, rồi mới dẫn tới `P(A|B)=P(A∩B)/P(B)` với `P(B)>0`; phân biệt việc nhân xác suất theo hai đường có điều kiện và sự kiện độc lập.
4. **HÌNH/CÂY (PED4):** chú giải rõ nhánh gốc, xác suất tại mỗi nhánh, tích đường đến lá, cộng các lá thỏa điều kiện; bảng 2×2 cần chú giải mẫu số theo hàng/cột. Phân biệt hình thông tin với sơ đồ cây xác suất.
5. **CHỌN PHƯƠNG PHÁP (PED5):** khi biết tỉ lệ của B theo A thì dùng toàn phần để tìm P(B); khi cần đảo chiều `P(A|B)` thì dùng Bayes sau khi tính P(B). Tránh đánh đồng xác suất thuận và nghịch, kiểm nền mẫu và giả dương, giả âm.
6. **TỰ THỬ & KHẮC PHỤC (PED6):** ít nhất một thử hiểu mẫu số trước Core B18 và một thử phân biệt xác suất thuận/ngược trước Bayes B19; học sinh chỉ chủ động mở so sánh, không ghi Mastery; HELP phải trả về đúng bẫy/mẫu số theo outcome.

## 4. Ví dụ toán do AUTHORING tự tạo và tự kiểm (chưa là item bank)
Năm ví dụ này **không trích hoặc tuyên bố là đề SBT**. Chỉ là dữ liệu tham chiếu để phát triển D2; khi thành item canonical phải cấp ITEM_ID một lần, gắn outcome, chứng minh và kiểm số.

| EX_DRAFT_ID | Đề tự biên soạn | D2 giải thích có điều kiện | Kết quả QA | Điểm sai thường gặp |
|---|---|---|---|---|
| `B18-DEMO-01` | Xúc xắc cân đối: B là số chẵn, A là số chia hết cho 3. Biết B xảy ra, tính P(A|B). | Trong B={2,4,6}, giao A∩B={6}; P(A|B)=1/3. | 1/3 | P(B)=1/2>0; đếm theo tập điều kiện, không lấy 2/6. |
| `B18-DEMO-02` | Lớp 120 học sinh: đi xe buýt có 24 đạt,16 chưa đạt; không đi xe buýt có 50 đạt,30 chưa đạt. Tính P(đạt|xe buýt) và P(xe buýt|đạt). | 24/(24+16)=3/5; 24/(24+50)=12/37. | 3/5 và 12/37 | Hai mẫu số khác; số liệu tổng 24+16+50+30=120. |
| `B18-DEMO-03` | Túi có 5 bi đỏ, 3 bi xanh; rút hai bi không hoàn lại. Tính P(cả hai đỏ). | P(đỏ lượt 1)=5/8; P(đỏ lượt 2|đỏ lượt 1)=4/7, nhân=5/14. | 5/14 | Không nhầm lượt 2 thành 5/8; nhánh thay đổi sau rút. |
| `B19-DEMO-01` | Nhà máy có dây A cung cấp 60% sản phẩm, hỏng 2%; dây B cung cấp 40%, hỏng 5%. Tính P(hỏng) và P(dây A|hỏng). | P(H)=0,6·0,02+0,4·0,05=0,032; P(A|H)=0,012/0,032=3/8. | 4/125 và 3/8 | Không nhầm P(H|A)=2% với P(A|H)=37,5%. |
| `B19-DEMO-02` | Giả định minh họa: tỷ lệ mắc 1%, độ nhạy xét nghiệm 90%, độ đặc hiệu 95%. Nếu kết quả dương, xác suất thực sự mắc là bao nhiêu? | P(+)=0,01·0,9+0,99·0,05=0,0585; P(mắc|+)=0,009/0,0585=2/13. | 2/13 ≈ 15,38% | Dữ liệu giả định để học Bayes, không dùng như xác suất chẩn đoán cá nhân. |

**Kiểm định số học độc lập bằng phân số hữu tỉ:** xác suất xúc xắc có điều kiện `1/3`; bảng 2×2 `3/5` và `12/37`; rút bi không hoàn lại `5/14`; nhà máy `4/125`, Bayes `3/8`; kiểm tra giả định `2/13`. Đây chỉ là QA tính toán của *những ví dụ này*, không phải Academic/PED PASS cả chương.

## 5. Cổng biên soạn tiếp theo trước NotebookLM
- [x] SGK nguồn S1 SHA256, trang in vs PDF chỉ số thực tế đã xem; xác định đúng B18/B19/END.
- [x] SBT nguồn SHA256, B18/B19/END có đoạn trang thực tế; dùng tham khảo họ dạng, không ép bao phủ từng đề.
- [x] 14 outcome gợi ý và ma trận họ dạng/điều kiện/độ sâu chuẩn bị để phát triển, chưa khóa canonical.
- [x] Năm ví dụ minh họa gốc tính toán tự kiểm bằng phân số hữu tỉ.
- [ ] Soát độc lập đầy đủ SGK/SBT B18–B19 đến từng subsection và ghi nguồn cho outcome bắt buộc. Không nâng scope mẫu ví dụ thành Core nếu chưa có chứng cứ.
- [ ] Hoàn tất hai bài: WHY→tiền đề→bản chất→D1→D2→Tự thử→Core→D3/D4 Written /5→D5 PNG/SVG→D6 same-outcome; ví dụ và đáp án không bịa nguồn.
- [ ] Thiết kế 1 canonical ITEM_ID / 1 câu với `placement` nhiều vai trò; kết thúc chương dùng lại ID công khai cho `CLIENT_SELF_CHECK_NO_MASTERY`, RD1 kín riêng, Q16.
- [ ] Kiểm toán toán/đáp án/rubric và hình học/đồ thị; review trọn ChVI bằng đúng 5 Permanent Sources THPT v2.1 + SGK/SBT S1 + Temp Markdown/PNG (tách rõ thao tác GIỮ/BỎ CHỌN/THÊM MỚI).
- [ ] Reviewer độc lập Academic+PED verdict + source receipt, P0/P1/P2/Minimal Delta. Chỉ khi PASS và các cổng Q01–Q18/A1–A7 đạt: một handoff V2 + một manifest `ready/` + một REGISTER row, source SHA exact-head CI.
- [ ] Hai phần sau chương (*Hoạt động thực hành trải nghiệm*, *Bài tập ôn tập cuối năm*) xử lý đúng nguồn/phạm vi SGK toàn lớp 12 và một handoff riêng theo quyết định chủ dự án.

**AUTHORING_WORKING**: chưa tạo gói NotebookLM, chưa tự cấp Academic/PED PASS, chưa gửi RELEASE, không merge/deploy website.
