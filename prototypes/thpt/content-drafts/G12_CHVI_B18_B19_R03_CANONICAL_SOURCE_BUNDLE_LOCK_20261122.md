# G12-SGK-CHVI-B18-B19-R03 — SOURCE LOCK · AUTHORING (không phải learner thứ hai)

PACKET_ID: G12-SGK-CHVI-B18-B19-R03
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
LEARNING_PATH: SGK_CHAPTER
LESSONS: G12-SGK-B18, G12-SGK-B19
SOURCE_COMMIT_BEFORE_PACKAGING: a8186d7fea6717b2a3ffa4c8f18c1d22ebf4a7f6
MASTER_ISSUE: 987
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
RELEASE_AUTHORIZATION: NO

## 1. Một nguồn canonical đang hoạt động

Đây là **manifest danh mục blob**, không chứa bản sao bài học, ngân hàng câu hỏi hay RD1. B18/B19 dùng đúng các file gốc trên branch; 1 public bank, 7 SVG. Git history giữ nguồn R00/R02 trước sửa; không dựng learner mới.

| # | Original active path | Git blob SHA |
|---:|---|---|
| 1 | `docs/thpt-preview/sgk/lop-12/chuong-vi/bai-18.md` | `132460dc79f161e2fe5c782fe832d6ae38268cdd` |
| 2 | `docs/thpt-preview/sgk/lop-12/chuong-vi/bai-19.md` | `da3e29a44c9f538305145c6be7e55bdd415d2d23` |
| 3 | `docs/assets/data/thpt-g12-chvi-b18-b19-public-r00.json` | `6183ab278ceb263542ec90d0effe6abe1b2f7b13` |
| 4 | `docs/assets/images/thpt/FIG-G12-CHVI-B18-SET-R02.svg` | `f95df387c3862b053cefb9f4c4352449acc081a0` |
| 5 | `docs/assets/images/thpt/FIG-G12-CHVI-B18-TABLE-R02.svg` | `45958a01cded7c64cdb08fdf90a36806c15b9bbe` |
| 6 | `docs/assets/images/thpt/FIG-G12-CHVI-B18-TREE-R02.svg` | `56c42e91896a4e292583ac0966dcca650eb2319c` |
| 7 | `docs/assets/images/thpt/FIG-G12-CHVI-B18-DOORS-R02.svg` | `044e371b8094b56794cf50983aa749e6fc58feaa` |
| 8 | `docs/assets/images/thpt/FIG-G12-CHVI-B19-TOTAL-R02.svg` | `ae1ae9606d02f609c1e4d75824ee85da40d746fb` |
| 9 | `docs/assets/images/thpt/FIG-G12-CHVI-B19-BAYES-R02.svg` | `11935bbeecf7e5439a1c6f34db0ba3a2fa294fec` |
| 10 | `docs/assets/images/thpt/FIG-G12-CHVI-B19-TRANSITION-R02.svg` | `af8b30362fefdd59bcff0a2956855d2de788ab24` |

## 2. Provenance S1 và hiệu lực kiểm chứng

Nguồn thẩm quyền: SGK Toán 12 KNTT **Tập hai**, trang in B18 64–71 / PDF1 66–73; B19 72–78 / PDF1 74–80; bản gốc SHA256 `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`. SBT gốc B18 trang in 40–43 / PDF1 38–41; B19 43–45 / PDF1 41–43; SHA256 `823b013adeb487639e55493b4a7c09edb9a21daabc058ea53e6fe92f7a0352f1`. Kế thừa đối chiếu trực tiếp SGK/SBT, checksum và bản xem trang in có ghi trong `prototypes/thpt/ux795/G12_CHVI_B18_B19_SGK_AUTHORING_Q18_20261122.md` blob `94b4a620cf71e143d021c06b75491f19af8ab1f1`; **không tuyên bố quét lại toàn bộ PDF trong R03**.

## 3. Delta và giới hạn QA

R02 biên tập nội dung `DELTA_C_ACADEMIC_MATERIAL` đã kiểm 14 outcome, 22 FirstTry, 27 Ví dụ có lập luận, 14 HELP, 7 SVG, 56 public items. B18-A06 làm rõ đơn vị lấy mẫu là *một hành khách có hành trình nối chuyến*, đáp án 18/25 không đổi; mọi item khác giữ ID/answer/rubric. B19 ví dụ dương tính dùng dữ liệu không lặp nguyên W05.

R03 thay **96 liên kết điều hướng tương đối** (48 mỗi bài) từ cú pháp Markdown sang thẻ `<a>`, **giữ nguyên từng nhãn, href và fragment**, không thay toán/outcome/stem/key/rubric. B18 R02 blob `f18236ba76a3f7b6041982377e3e39cc80a731e2` → R03 `132460dc79f161e2fe5c782fe832d6ae38268cdd`; B19 `d38167249f8364787627dda056508e32d4916e60` → `da3e29a44c9f538305145c6be7e55bdd415d2d23`. Source R03 read-back verified 96/96 converted links and 0 remaining from this relative-Markdown pattern; mathematical characters/answers not edited. Old R02 structural/math/SVG receipt remains explicitly **source-scoped historic evidence**, not falsely assigned to a different blob.

## SOURCE_LOCKED_ID_REGISTER

Đây là các định danh trên **cùng 10 original canonical paths/blob**; không sao chép item hay answer. Metadata khóa đúng dữ liệu đã kiểm và phục vụ V2 source-lock.

### LESSON_IDS
- G12-CHVI-B18
- G12-CHVI-B19

### OUTCOME_IDS
- G12-CHVI-B18-O01
- G12-CHVI-B18-O02
- G12-CHVI-B18-O03
- G12-CHVI-B18-O04
- G12-CHVI-B18-O05
- G12-CHVI-B18-O06
- G12-CHVI-B18-O07
- G12-CHVI-B19-O01
- G12-CHVI-B19-O02
- G12-CHVI-B19-O03
- G12-CHVI-B19-O04
- G12-CHVI-B19-O05
- G12-CHVI-B19-O06
- G12-CHVI-B19-O07

### PUBLIC_ITEM_IDS
- THPT-G12-B18-C01
- THPT-G12-B18-P01
- THPT-G12-B18-A01
- THPT-G12-B18-W01
- THPT-G12-B18-C02
- THPT-G12-B18-P02
- THPT-G12-B18-A02
- THPT-G12-B18-W02
- THPT-G12-B18-C03
- THPT-G12-B18-P03
- THPT-G12-B18-A03
- THPT-G12-B18-W03
- THPT-G12-B18-C04
- THPT-G12-B18-P04
- THPT-G12-B18-A04
- THPT-G12-B18-W04
- THPT-G12-B18-C05
- THPT-G12-B18-P05
- THPT-G12-B18-A05
- THPT-G12-B18-W05
- THPT-G12-B18-C06
- THPT-G12-B18-P06
- THPT-G12-B18-A06
- THPT-G12-B18-W06
- THPT-G12-B18-C07
- THPT-G12-B18-P07
- THPT-G12-B18-A07
- THPT-G12-B18-W07
- THPT-G12-B19-C01
- THPT-G12-B19-P01
- THPT-G12-B19-A01
- THPT-G12-B19-W01
- THPT-G12-B19-C02
- THPT-G12-B19-P02
- THPT-G12-B19-A02
- THPT-G12-B19-W02
- THPT-G12-B19-C03
- THPT-G12-B19-P03
- THPT-G12-B19-A03
- THPT-G12-B19-W03
- THPT-G12-B19-C04
- THPT-G12-B19-P04
- THPT-G12-B19-A04
- THPT-G12-B19-W04
- THPT-G12-B19-C05
- THPT-G12-B19-P05
- THPT-G12-B19-A05
- THPT-G12-B19-W05
- THPT-G12-B19-C06
- THPT-G12-B19-P06
- THPT-G12-B19-A06
- THPT-G12-B19-W06
- THPT-G12-B19-C07
- THPT-G12-B19-P07
- THPT-G12-B19-A07
- THPT-G12-B19-W07

## 4. Cổng bảo vệ

- 56 canonical public items (14 x Core/Practice/Application/Written), 14 HELP và 14 END là *placement* của Application đã xem; 22 FirstTry riêng với nhãn `SGK_KNOWLEDGE_FIRST_TRY`, không nhân bản câu trong bank.
- Public END `CLIENT_SELF_CHECK_NO_MASTERY`, không đóng vai `SGK_CHAPTER_READINESS` độc lập.
- RD1 owner-private giữ ngoài GitHub; không chứa đề/đáp án/điểm/giải thích RD1 trong gói này.
- AUTHORING không chạm JS/CSS/runtime, Golden UI, Firebase, Auth, Gemini, dữ liệu học sinh, merge/deploy. RELEASE còn AP1–AP5/R1–R5/P1–P2, website/browser/final-submit và quyền chủ dự án.
