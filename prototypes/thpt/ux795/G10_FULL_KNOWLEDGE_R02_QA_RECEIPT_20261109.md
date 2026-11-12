# UX795 · Toán 10 SGK Knowledge · B07–B27 R02 source receipt / QA

**Ngày:** 09/11/2026 · **Branch:** `research/thpt-crossgrade-hybrid-ux795-20261108` · **PR:** [Draft #797](https://github.com/TMA2015/self-learning-math/pull/797) · **Phạm vi:** trang Kiến thức SGK, không sửa Core/Luyện tập/Written/Final Submit.

**Quyết định owner:** dùng **mô hình B**, một tầng 4 tab ngang cấp trang; không làm A/B từng bài, đi liên tục hết Toán 10. Giữ mạch SGK, giải thích có lý do/điều kiện, ưu tiên câu văn tự nhiên, đặt hình ngay chỗ cần; nguồn Gemini/NotebookLM có thể chọn lọc nhưng không dùng bản sai mapping. Không đụng đến nhánh AUTHORING Chuyên đề.

## 1. Snapshot và chứng cứ

- **Tình trạng biên soạn:** 27/27 bài Toán 10 có Markdown ứng viên R01 (B01–B06) / R02 (B07–B27). **Không đồng nghĩa với website đã tích hợp hoặc phát hành**.
- **Kiểm thử tĩnh B07–B27:** 21/21 PASS bằng JavaScript chạy trên nội dung source lấy trực tiếp từ **GitHub main** và candidate trên branch. Chi tiết: **106 First Try IDs**, **102 HELP IDs** có cùng tập ID với từng file source; không duplicate; cả 21 bài đúng 4 đầu mục; 26 phần tử figure gồm các hình gốc và bổ sung; không để source figure gốc bị mất; thẻ `details` cân bằng; dấu `\(...\)` và `\[...\]` cân bằng; không còn raw `??? question/tip`, ký tự điều khiển, các nhãn QA nội bộ bị phát hiện.
- **Hình mới:** B16 (parabol), B17 (bảng dấu), B19 (chỉ phương/pháp tuyến, đã sửa tỷ lệ hai trục), B20 (khoảng cách), B21 (đường tròn/tiếp tuyến), B22 (tiêu điểm/đường chuẩn), B23 (quy tắc cộng/nhân), B24 (chỉnh hợp/tổ hợp), B25 (tam giác Pascal); tổng **9 SVG mới ở B07–B27**. B06 có thêm một SVG riêng đã được ghi receipt Chương III.
- **Sửa hiển thị:** `??? question/tip` đã chuyển sang `<details markdown="1">` với nội dung tự đối chiếu và tự khắc phục mặc định đóng; không đổi `data-thpt-first-try-id` hay `data-thpt-help-id`. Chú thích hình mới được sửa escape TeX. B12/B13 không còn nhúng tiêu đề của bài kế bên.
- **Kiểm spot toán học đã thực hiện khi biên tập:** hình/định lí côsin B05/B06; parabol đỉnh và nghiệm B16; bảng dấu B17; nghiệm ngoại lai B18; vectơ pháp tuyến B19; khoảng cách B20; tiếp tuyến B21; elip/hypebol/parabol B22; phép đếm B23–B24; hệ số Newton B25; xác suất B26–B27. **Spot-check không phải review S1 từng outcome**.
- [Test tĩnh toàn lớp](test-ux795-g10-full-knowledge-r03.cjs) có mã kiểm file trong repo thực, kiểm SHA blob canonical, bảo toàn ID, hình và đường dẫn, và trả nonzero khi FAIL. **Chưa chạy script bằng Node tại GitHub CI/checkout thật**; các kết quả nêu trên đến từ chạy hàm kiểm tra thuần trong V8 trên các cặp source lấy từ GitHub.

## 2. SOURCE_RECEIPT blob SHA (snapshot tệp, không phải verdict học thuật)

| Bài | Chương | Source main Git blob SHA | Candidate R02 Git blob SHA | Kiểm tĩnh |
|---|---|---|---|---|
| B07 | IV | `1f1b0976cfcfe6c5d812c056e13df09e561eb89f` | `94015489d8b69e364d69d3b7e71997926a340627` | Static PASS |
| B08 | IV | `a7758b4647f28681acdc3f99b8f7f80956deebf1` | `c5536c1ef5bb50f3da5397d90714a7bb176042e6` | Static PASS |
| B09 | IV | `84c67363264698fab87db0e76eca5e4561006fa6` | `a8d9860dccb8e7d67e6eec827dfa2cbd520ca541` | Static PASS |
| B10 | IV | `84494e72805d4beb681465595d923bb98a2afb61` | `382a233a51bd17b4929de1a324d726bdd490efec` | Static PASS |
| B11 | IV | `899379e55ce9cc332acb88009c99626dd316f7be` | `345b9785944acaa76b791468e56b7f10c601791b` | Static PASS |
| B12 | V | `672ac88b3c36a5abde45b73ab7ad0fb7ff830983` | `b8534b10a943b36aa2ddf3bf1d9f3b7d6bab32ac` | Static PASS |
| B13 | V | `b4008a227494ef7165871b67a1a0f255c66c5c6c` | `e6593a87e4ba011ed8808a0ebda8f51d3ad04798` | Static PASS |
| B14 | V | `0cb35d210afc9dba136a6b256bc1c8138cb01396` | `b4d90fbe0aa6f0e119ed92e82d339d66225c6524` | Static PASS |
| B15 | VI | `72ed03b1cb625f157bb49064cf1df2100856e057` | `c897bd2dd2c27d2d3e323d3a2475eac48ee5d58e` | Static PASS |
| B16 | VI | `a0fc509e1c08b7ee90225dee3994d6b3fa84e21a` | `de6ceae76a0ab77e784850c751dbb46ef74917e0` | Static PASS |
| B17 | VI | `f94608d832b43e671439afde9c14332bb443ac13` | `6618941281c03e8a02361b95577a15d1de567411` | Static PASS |
| B18 | VI | `0f2c6420f40112018dfd4be1268b0deb83f4452a` | `9737cc86117c95d0ae9d1564fe411ae38b72a15e` | Static PASS |
| B19 | VII | `a4dbf99d12c35f0b3af73fb3df423126aa861add` | `86aa35b57c02b320feebf064dd90645a2300b52c` | Static PASS |
| B20 | VII | `489e4d1784e19a896748d83a9e71a9b00ac73a09` | `cfc21cd5544d6a89568513cea6b1a752dd4b01e2` | Static PASS |
| B21 | VII | `361f5ed232e500d7db567ef9ffa8aaca4e5b6fe5` | `c2999ca82d4edf87d92083a57b129c397739db63` | Static PASS |
| B22 | VII | `fb879e4428998cfd388315b4781810a98637b67b` | `62dcbe7a7df774b70d59e5460d8be81fff4f835b` | Static PASS |
| B23 | VIII | `a3adcc4882a58d3ffd5346c65d94821092686cf7` | `25ff9b7b8059d39654fcdf1ebe62448d68f2cdd6` | Static PASS |
| B24 | VIII | `f0ec9161dc9553fc36b203f63e2d45f212cace89` | `86715d36fbdcea30f0ecadb83cd1240af0a2e970` | Static PASS |
| B25 | VIII | `7fa6775d6da704193e0e0924451abc844873428f` | `1b1a859314107555f5ab61d97922e0231b05cd06` | Static PASS |
| B26 | IX | `74b1ba86a8c3b0ac9a48c6545e28af29792cb734` | `47b7a09a86ba36f3f735673f43826fbebf467e5a` | Static PASS |
| B27 | IX | `80bfadb4a9a3ae91e303f89506eb73e4a0d5bf9f` | `4cea185f36bcd46a41b5168b79cab925499075a5` | Static PASS |

## 3. Cổng release chưa đạt

| Gate | Trạng thái |
|---|---|
| Owner UX Model B | Đã chốt toàn chương; B03–B04 owner UX PASS; B05 sửa văn phong được owner phê duyệt |
| Q01–Q14 đối chiếu SGK S1 theo **từng outcome**, P0/P1 | **PENDING** trên snapshot R02; chưa tự cấp Academic/PED PASS |
| Q15 canonical ID | **PASS tĩnh** cho B07–B27; runtime/source-bank version alignment **PENDING** |
| Q16 RD1/Final Submit/Mastery | **UNCHANGED** trong source, runtime regression **PENDING**; First Try là tự đối chiếu không ghi Mastery |
| Q17 SGK/Topic độc lập | Nguồn ứng viên chỉ SGK Knowledge; Topic không đổi, kiểm integration **PENDING** |
| Q18 source/receipt snapshot | Git blob SHA khóa cho **tệp** ở bảng trên; phản biện học thuật/sư phạm và chứng cứ cuối cùng **PENDING** |
| AP1–AP5, MathJax, SVG mobile/ARIA/keyboard | **NOT RUN** browser thật trên 390/820/1440, Safari/Chrome; có sửa các lỗi tĩnh |
| Bản ứng viên → docs runtime | **LINK_REBASE_HOLD**: đường dẫn `src="images/..."` và `../../../docs/assets/..."` trong thư mục bản thảo phải ánh xạ đúng khi tích hợp website; các liên kết `../luyen-tap/` cũng phải kiểm lại tại nơi phát hành |
| CI exact HEAD, P1/P2, owner permission | **PENDING**; PR #797 vẫn Draft, **NO MERGE / NO DEPLOY** |

**Delta:** lời dẫn, ví dụ và hình/giải thích mới là `DELTA_C_ACADEMIC_MATERIAL`, không được tái sử dụng verdict của source cũ mà chưa có chứng cứ tương đương hoặc quyết định rõ ràng theo chuẩn. Owner quyết định không lặp lại khâu review Gemini/NotebookLM trước đây; riêng chứng cứ S1 theo outcome và QA tích hợp vẫn cần chứng minh trước phát hành.

**Checkpoint:** `G10_27_OF_27_SOURCE_DRAFTED / B07_B27_21_OF_21_STATIC_PASS / Q18_AP1_AP5_LINK_REBASE_HOLD / NO_MERGE_DEPLOY`.
