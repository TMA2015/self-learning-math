# RELEASE intake · Toán 10 Kiến thức B01–B27 · candidate source SHA ledger R01

**Ngày:** 10/11/2026. **Nhánh:** `research/thpt-crossgrade-hybrid-ux795-20261108` · **PR:** [#797](https://github.com/TMA2015/self-learning-math/pull/797) · **Issue:** [#795](https://github.com/TMA2015/self-learning-math/issues/795).

**Quyết định chủ dự án:** đồng ý cho PHÁT HÀNH phần Kiến thức Toán 10 cập nhật sau khi đầy đủ cổng chất lượng bắt buộc. Đây là quyền phát hành theo điều kiện; **không** phải Academic/PED PASS, không miễn kiểm Q01–Q18, không bỏ khóa SHA.

## Phạm vi và nguyên tắc

- 27/27 trang Kiến thức ứng viên Model B có thay đổi Git blob so với main hiện tại. Core, Luyện tập, Tự kiểm tra, ngân hàng RD1 kín và dữ liệu học viên không nằm trong phạm vi nội dung thay đổi.
- Nhãn `Đối chiếu` / `Lời giải` / `Vận dụng` đã phát hành độc lập qua PR #800 ở MkDocs rendering; nên PR #797 phải nhận quy tắc đó từ main mới, không sửa toán để đổi nhãn.
- Bảng dưới đây khóa **27 Git blob Markdown trên PR #797 hiện hành** để đối chiếu receipt. Các SHA này KHÁC SHA của file nháp R01/R02 riêng dưới prototypes; tài liệu này không phải academic approval.

| Bài | Chương | Git blob main baseline | Git blob PR #797 staged |
|---|---|---|---|
| B01 | I | `0ffa4eecff1aa8dd249e8863fccbc7a674a6ddb2` | `fb4bd72f6101523e30e30cc970d74c23b76228a8` |
| B02 | I | `70c77844b0bee75565f8a059ddc4befd3ad9dd2d` | `8a7b90f1768b789429def045e38ebe97e6adbf3a` |
| B03 | II | `a8ca8ff2a354df8cfa0292cf26051d0a8fe8edb0` | `c9ae5104c2f65779f2dd452d3f7775abe2600b7b` |
| B04 | II | `69d4067e31ac714b451e9d1827e6081c8f9f2726` | `2c432958169cd9f3a8a66e6bc07610b6a60d5815` |
| B05 | III | `a84ada557f30e484c1b5033238ed3ee6deab366e` | `d45eacd18ad14ee3bdf90a1fe4ba24926b602cd2` |
| B06 | III | `6a305a9ebcd156809b880365c04a2de3d442d011` | `3a2f4392357b0a7155488ba2427fbb2dde0dde81` |
| B07 | IV | `1f1b0976cfcfe6c5d812c056e13df09e561eb89f` | `3766d84af8cbd27d1d84824048c39f974036020b` |
| B08 | IV | `a7758b4647f28681acdc3f99b8f7f80956deebf1` | `fdf2a7619f1a804a59ede82564a4853cadf6c5f7` |
| B09 | IV | `84c67363264698fab87db0e76eca5e4561006fa6` | `30cf7ba3fea8e8ebb4212ac5b06840b4ef7d380e` |
| B10 | IV | `84494e72805d4beb681465595d923bb98a2afb61` | `d4e0ad482ef7b8b5374c4e0f4cebea54e8deac82` |
| B11 | IV | `899379e55ce9cc332acb88009c99626dd316f7be` | `117e35eb3a9d96bd138826f6ed648d857019473c` |
| B12 | V | `672ac88b3c36a5abde45b73ab7ad0fb7ff830983` | `701ef6224ba101ea06e2f3148dc5f1ee12de7976` |
| B13 | V | `b4008a227494ef7165871b67a1a0f255c66c5c6c` | `c55d650f5b59c5260960de136e3c7fc26f219cdf` |
| B14 | V | `0cb35d210afc9dba136a6b256bc1c8138cb01396` | `894c31de396a2f6d6d30912399d6cad39f790130` |
| B15 | VI | `72ed03b1cb625f157bb49064cf1df2100856e057` | `7b579927e0f6fe4d5a562d5e1127efa8d6deeb96` |
| B16 | VI | `a0fc509e1c08b7ee90225dee3994d6b3fa84e21a` | `afe31b484ba60f8f7fed243b29995332a5609826` |
| B17 | VI | `f94608d832b43e671439afde9c14332bb443ac13` | `93cd934ce90cc41d46d07a9af011975d6f930332` |
| B18 | VI | `0f2c6420f40112018dfd4be1268b0deb83f4452a` | `f6fee0d64fd5452d8ac00a59e7d21b3d3ba48c6f` |
| B19 | VII | `a4dbf99d12c35f0b3af73fb3df423126aa861add` | `36226f87857499897da3f62aaa9bd6a6f2ec7784` |
| B20 | VII | `489e4d1784e19a896748d83a9e71a9b00ac73a09` | `4a704fdbc8ff6eecb932c8c61187b891f40e01ec` |
| B21 | VII | `361f5ed232e500d7db567ef9ffa8aaca4e5b6fe5` | `13692ca5f8c0a7d648edccf5f9a7535cfdb1b85d` |
| B22 | VII | `fb879e4428998cfd388315b4781810a98637b67b` | `aac177881e9e8a1fde9f7fa8213c56793eb966f2` |
| B23 | VIII | `a3adcc4882a58d3ffd5346c65d94821092686cf7` | `f63524ef47d2990e00799e772a15f7aab1b2d4ca` |
| B24 | VIII | `f0ec9161dc9553fc36b203f63e2d45f212cace89` | `1d7ac3e42f45ded6023573569c34c6d3d7b753cd` |
| B25 | VIII | `7fa6775d6da704193e0e0924451abc844873428f` | `eebf2002e558f3c8e2bf049fd9a734bf01cc4f7c` |
| B26 | IX | `74b1ba86a8c3b0ac9a48c6545e28af29792cb734` | `dafdfcfd801a0873f73e44d42ac102a1b8ffccbe` |
| B27 | IX | `80bfadb4a9a3ae91e303f89506eb73e4a0d5bf9f` | `633c7cd0aaa70cdd1524fce17bb81cbf5d1b9a6d` |


## RELEASE prose-only refinement — 10/11/2026 (B07–B09)

- B07/B08/B09: đã chỉnh **17 câu dẫn/nhắc tiền đề** còn máy móc, chuyển sang lời dẫn trực tiếp với học sinh; không sửa định nghĩa, kết luận, điều kiện, ví dụ, First Try, HELP, MathJax/TeX hay quyền đánh giá.
- Nguồn ứng viên SHA tại bảng trên được cập nhật theo Git blob thực của B07/B08/B09; **các SHA ứng viên cũ không còn là nguồn phát hành hiện tại**. Baseline trên main không đổi.
- So sánh trước/sau trong từng file: tập biểu thức TeX theo thứ tự, First Try ID, HELP ID **bất biến**. Đây là QA biên tập RELEASE, **không** tự cấp Academic/PED PASS; Q18 đối với các phần nội dung nâng cấp vẫn HOLD.
- Cần chạy lại exact-head UX795/browser + source-lock và dùng SHA mới nếu lập hồ sơ tự kiểm chứng sau này. Không đổi Core/Practice/Readiness/RD1/Firebase/Mastery, không merge/deploy.

## RELEASE wording and context cleanup — 10/11/2026 (B10–B14)

- **B10:** sửa ký hiệu vectơ trong lời mục tiêu học tập đang bị rơi dấu gạch chéo thành lời Việt dễ đọc; loại chỉ dẫn nội bộ “D2 mới” khỏi bước tự ôn.
- **B11:** sửa hai chỉ dẫn tự khắc phục vốn lẫn số liệu của bài khác: hai lực **6 N và 6 N** không phải `8+15`; chặn trên độ lớn hợp lực là **12 N**, không phải 23 N. Với góc 120°, \(R^2=6^2+6^2+2\cdot6\cdot6\cos120^\circ=36\), do đó \(R=6\,\mathrm{N}\le12\,\mathrm{N}\). Làm rõ lý do chọn phương pháp, bỏ thuật ngữ QA “D2 WHY/METHOD/LIMIT” và nhãn đánh giá nội bộ khỏi hướng dẫn học sinh.
- **B12–B13:** bỏ hai đoạn chỉ thị QA nội bộ bị lọt vào trang học sinh. Câu ở B12 nhắc **tứ phân vị/Q2**, ở B13 nhắc **phương sai/hàng rào ngoại lệ**, đều lạc nội dung bài. Không sử dụng các đoạn bị loại làm nguồn trang in SGK/SBT; số trang cần kiểm chứng lại từ S1 trước khi ghi vào receipt chính thức.
- **B12–B14:** chuẩn hóa tên ví dụ theo câu tiếng Việt cho dễ đọc; không thay nội dung bài toán.
- Đã so từng trang: **HTML `data-*` attributes, toàn bộ MathJax/TeX tokens và 4 tab cấp 1 bất biến**. Các sửa số học B11 đã kiểm bằng phép tính nêu trên; đây là QA nội bộ của RELEASE, **không là Q18 Academic/PED PASS** và không mở nguồn Q18 theo dự thảo.
- 5 Git blob SHA ứng viên mới được cập nhật vào bảng trên. Không tác động Core, Practice, Readiness, private RD1, Firebase hoặc Mastery. Exact-head CI/browser phải chạy lại; Q18 HOLD và cấm merge/deploy giữ nguyên.

## RELEASE natural-language cleanup — G10 ChVI B15–B18

- B15: lời dẫn về cặp đầu vào–đầu ra, miền căn thức và mô hình tính phí rõ hơn cho người tự học.
- B16: giải thích vai trò bình phương không âm tự nhiên hơn; thay ghi chú kỹ thuật về *item ID/placement* bằng lời mời luyện Core dễ hiểu, **không đổi nút Core, nguồn câu hoặc điểm số**.
- B17: thay thuật ngữ nội bộ “S1 đã đính chính” bằng lời nhắc điều kiện hệ số bậc hai; các nhãn “Luyện lại (không nhân bản câu)” nay là “Luyện lại”.
- B18: hướng học sinh trực tiếp thử lại nghiệm, làm rõ điều kiện căn thức, bớt văn phong viết cho reviewer.
- Kiểm tĩnh từng file: toàn bộ MathJax/TeX token và chuỗi thuộc tính `data-*` giữ nguyên, đủ 4 tabs. Tất cả 4 Git blob ứng viên được khóa lại trong bảng. Không sửa Core/Practice/Readiness/đáp án/RD1/Firebase.
- **Không biến QA biên tập thành Academic/PED reviewer PASS**. Q18 v2.0 còn ở PR #804 Draft; không merge/deploy trước khi các cổng chính thức và SHA/receipt mới tương thích.

## RELEASE final-chapter self-study wording — G10 B19–B27

- **ChVII B19–B22:** thay 23 lời nhắc `HELP-G10-CHVII-TRYxx` lộ mã kỹ thuật và 23 bước “luyện tiếp” lộ mã item thành hướng dẫn học sinh mở mục tự sửa / dùng **liên kết luyện tập đã có**. Không xóa một `data-thpt-help-id`, câu Tự thử, link hay ID nào.
- **ChVIII B23–B25:** thay 12 dòng “chứng nhận đánh giá độc lập” ở vùng luyện lại bằng lời nhắc tự thử sau khi xem đối chiếu. Giữ liên kết canonical ngay dưới từng lời nhắc; B25 xóa từ “reviewer” ở một lời nhắc về hệ số khai triển, giữ điều kiện \(n=4,5\) và công thức áp dụng với \(n\) nguyên không âm.
- **ChIX B26–B27:** biến 10 mã item hiển thị bằng backtick thành **10 liên kết `../luyen-tap/?item=<canonical>`**; giữ nguyên tham số item/nguồn câu, không nhân bản ngân hàng hay bật Mastery. B26 sửa một câu nói ngôi thứ ba thành lời hướng dẫn học sinh.
- Mọi trang trong nhóm đã qua QA tĩnh **toàn bộ MathJax/TeX token và chuỗi `data-*` không đổi, 4 tab chủ dự án phê duyệt còn nguyên**. B19–25 giữ chính các link hiện có. B26–27 bổ sung link học tập (cần browser/deep-link QA), không sửa quiz engine/assessment.
- 9 SHA mới đã ghi tại bảng intake. Bản này vẫn **Draft**, chưa có `SELF_QA_EVIDENCE_RECEIPT` có hiệu lực, không tự cấp Academic/PED PASS. Final-head QA vẫn phải đạt trước merge/deploy.

## Figure-guided learning enhancement — B16/B20 (10/11/2026)

- B16: hướng dẫn đọc hình parabol bằng chính trục đối xứng `x=1`, đỉnh `I(1;-4)`, hai nghiệm `-1, 3` và chiều biến thiên. Kiểm trực tiếp `(x-1)^2-4` tại các vị trí nêu trong hình.
- B20: thay chuỗi toán bị rơi MathJax `(H=(12/5,6/5))`, `(MH=6/sqrt5)` bằng hiển thị MathJax chuẩn. Kiểm `2(12/5)+(6/5)=6`, vectơ `MH=(12/5,6/5)` cùng hướng pháp tuyến `(2,1)`, `|MH|=6/√5`.
- Hai SHA mới đã ghi trong bảng trên; các thuộc tính `data-*` và bốn tab giữ nguyên. Đây là `DELTA_C` về lời diễn giải theo ngữ cảnh hình, không tự cấp `ACADEMIC/PED PASS`. Cần kiểm browser/MathJax trên HEAD mới và nhập đầy đủ delta vào receipt Q18 khi có hiệu lực.

## SOURCE S1 page audit + B16 table outcome (10/11/2026)

- Đã mở chính SGK KNTT Toán 10 Tập 2 dạng scan, khóa SHA256 tài liệu; đối chiếu B16 trang in 11 (PDF trang 12), yêu cầu **thiết lập bảng giá trị hàm số bậc hai**. B16 Knowledge trước đây chưa có bảng \\(x,f(x)\\) cụ thể.
- Đã bổ sung bảng \\(x=0,1,2,3,4\\) cho \\(f(x)=x^2-4x+3\\), nhận các giá trị \\(3,0,-1,0,3\\); chọn các cặp điểm đối xứng và giải thích cách nối thành parabol. Đây là \\`DELTA_C_ACADEMIC_MATERIAL\\`, không phải chỉ UI.
- Git blob B16 mới đã cập nhật trong bảng intake. Bằng chứng trang in/phiên bản SGK: [S1 ChVI scope R01](UX795_G10_CHVI_S1_PRINTED_PAGE_SCOPE_R01_20261110.md). Các câu First Try, D6 HELP và Core/Practice/Readiness không đổi. Q18 hiện hành vẫn HOLD.

## S1 B16 reversible parabola modeling — 10/11/2026

- Đối chiếu trực tiếp SGK Toán 10 KNTT Tập 2 trang in **16**, bài 6.9–6.10: có dạng **xác định hàm số bậc hai từ thông tin hình học** (điểm, trục, đỉnh). Nguồn Knowledge cũ B16 chưa dạy rõ quy trình đi ngược từ đỉnh + điểm về công thức.
- Đã bổ sung ví dụ tự biên soạn: đỉnh \(I(1;2)\), đi qua \(A(0;0)\), chọn dạng đỉnh \(y=a(x-1)^2+2\), suy ra \(a=-2\), kiểm ngược tại \(x=0,1,2\); cảnh báo tính duy nhất và điều kiện \(a\ne0\). Đây là `DELTA_C_ACADEMIC_MATERIAL` thuộc Knowledge, không thay outcome, First Try, HELP, Core, Practice, ngân hàng hay Readiness.
- SHA mới của B16 được re-lock tại hàng B16; bộ kiểm toán ví dụ ChVI có thêm một trường hợp. Chưa gọi S1/PED toàn chương PASS; chưa kích hoạt Q18 self-QA mode hoặc merge/deploy.

## S1 B17 inequality within physical flight-time domain — 10/11/2026

- SGK Toán 10 KNTT Tập 2 trang in **24** có dạng ứng dụng bất phương trình bậc hai vào chuyển động/độ cao (bài 6.18); SBT Tập 2 trang in **18** có dạng quỹ đạo vật phóng (bài 6.26). Họ bài này đòi xác định **miền có ý nghĩa của thời gian** trước khi kết luận tập nghiệm. B17 trước đó có ví dụ rào vườn nhưng thiếu minh họa miền thời gian vận động.
- Bổ sung **ví dụ tự biên soạn, khác dữ kiện SGK/SBT**: \(h(t)=-5t^2+20t+5\) m, yêu cầu \(h(t)\ge20\); thời gian bay \(0\le t\le2+\sqrt5\), giải \(h(t)\ge20\iff(t-1)(t-3)\le0\), được \(1\le t\le3\) giây. Kiểm \(h(0)=5\), \(h(1)=h(3)=20\), \(h(2)=25\), \(h(2+\sqrt5)=0\).
- Đồng thời sửa lỗi vỡ công thức \(a\ne0\) thành hai dòng 'a'/'e0' trong tab Khám phá. Giữ nguyên First Try, HELP, các ID canonical và 4 tab; **B17 là DELTA_C phần giải thích/ứng dụng**, không đổi toán hoặc rubric của ngân hàng câu cũ.
- New candidate B17 Git blob khóa ở bảng; [ChVI S1 source scope R01](UX795_G10_CHVI_S1_PRINTED_PAGE_SCOPE_R01_20261110.md). Không gọi ứng dụng mới là kết quả review độc lập; Q18 hiệu lực vẫn HOLD.

## S1 B18 radical and meeting-time pedagogy — 10/11/2026

- **S1 verified directly:** SGK Toán 10 KNTT Tập 2 pp.25–27 (PDF pp.26–28): both \(\sqrt{A(x)}=\sqrt{B(x)}\), \(\sqrt{A(x)}=B(x)\), trial of squaring candidates, and a real-world equal-travel-time model at printed p.26. SBT Toán 10 Tập 2 pp.19–21 corroborates both forms and sign/domain checks; it is **not** claimed to be the source of the new invented meeting-time numbers. Both private source PDF SHA256 values remain only in [S1 scope R01](UX795_G10_CHVI_S1_PRINTED_PAGE_SCOPE_R01_20261110.md).
- **Confirmed P1/D6 error:** HELP-G10-CHVI-TRY19 told student to mark *cạnh huyền 5 m* despite the ladder being 13 m, horizontal leg 5 m and vertical leg 12 m. Fixed HTML guidance to **cạnh huyền 13 m / cạnh góc vuông 5 m**. Canonical HELP ID unchanged.
- **Targeted Knowledge Delta C:** B18_OUT_04 additionally teaches travel-time equality with an original independent two-person example: \(AB=3\), \(BC=8\), \(x=BM\in[0,8]\), speeds 5/4 km/h; \(\sqrt{x^2+9}/5=(8-x)/4\). Squaring gives \((x-4)(9x-364)=0\), reject \(364/9>8\), verify both times exactly 1 hour at \(x=4\). Shows why domain and substituting into **original** time equation matter. No new canonical assessment item, no protected RD1/Final Submit change.
- Source SHA for B18 re-locked below; source-bound regressions added for both D6 geometry labels and travel model. These are scoped evidence, **not** Q18/Academic/PED PASS. 27-candidate CI/browser must rerun on exact HEAD.

## RELEASE QA hiện có

- Candidate commit: `2ea2a8286f7d6f4fe81a9c4b9225c0eb9398280f`; main baseline: `cbd3c86ca8c41f13baf16b37418a89dee8981496`.
- [UX795 G10 draft render/browser QA #42769677271](https://github.com/TMA2015/self-learning-math/actions/runs/42769677271) SUCCESS: 27/27 HTML, 81/81 trường hợp trình duyệt thật (27 bài × 390/820/1440). Bốn tab, First Try/D6 IDs, đáp án mặc định đóng và tự mở/đóng, hình SVG, MathJax, không tràn ngang.
- G Learning branding và Skill assessment pilot QA đã PASS ở SHA ứng viên. **Full R4 vẫn FAIL theo đúng khóa SHA B01 cũ**; đó là Delta C/Q18 HOLD, không phải lý do nới kiểm thử.
- Owner đã cấp quyền phát hành có điều kiện. **0/27 phiên bản nội dung mới đã phát hành**. Không tự khẳng định đã nghiệm thu thiết bị vật lý P2.

## Điều kiện đóng và phân công

1. Kiểm tra độc lập theo S1 SGK/SBT từng bài/outcome bị ảnh hưởng: Academic + PED verdict, P0/P1/P2, MINIMAL_DELTA và SOURCE_RECEIPT cho đúng Git blob hiện hành. Sửa lỗi thực chất đúng phạm vi và kiểm lại SHA; không lấy static/browser QA làm thay review.
2. Nếu các SHA thay đổi sau phản biện, cập nhật bảng bằng Git thực và review phần ảnh hưởng. Cổng Q01–Q18 + Q15/Q16 + đối chiếu hình/toán phải đạt; nguồn canonical, ngân hàng câu hỏi, private RD1, Mastery được bảo toàn.
3. Nhận handoff hợp lệ, manifest ready/ và REGISTER theo hợp đồng hiện hành; RELEASE tích hợp trên HEAD mới nhất của main (đã có PR #800); chỉ thay source-lock expectation khi có receipt hợp lệ. Chạy AP1–AP5, R1–R5, Q16, Golden, deep-link, Responsive, CI và nghiệm thu thiết bị thật nếu được yêu cầu.
4. Khi toàn bộ cổng đạt, sử dụng quyền phát hành đã cấp 10/11/2026 cho đúng gói Kiến thức Toán 10 và xác minh GitHub Pages sau deploy.

**STATUS:** `OWNER_RELEASE_AUTHORIZED_WHEN_READY / SOURCE_SHA_27_INTAKE / BROWSER_81_PASS / ACADEMIC_PED_Q18_HOLD / NO_MERGE_DEPLOY`

Đây là **RELEASE intake metadata**, không cấp CONTENT_READY và không chuyển vai trò sang AUTHORING.
