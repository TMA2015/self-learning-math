# ENRICHMENT_DELTA_RECEIPT — Toán 10 Chương I, B01–B02 · 11/11/2026

**MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` · **STANDARD:** `SLM-THPT-QUALITY-ONE v3.0.1` (§X-C/§X-E) · **RESPONSIBLE_LANE:** RELEASE
**SCOPE:** chỉ hai trang **Kiến thức SGK B01 Mệnh đề, B02 Tập hợp**, KHÔNG phải kết luận Q18 của B03–B27, không đổi Core/Practice/Written, Chapter Readiness, Q15/Q16/RD1, Firebase hoặc dữ liệu học viên.
**VERDICT:** `CONTENT_MATH_PED_SOURCE=SELF_QA_PASS_SCOPED_B01_B02` · `P0=0; P1=0` *trong nội dung đã kiểm dưới đây*. `RENDER_RELEASE_QA=REQUIRES_EXACT_FINAL_HEAD`; `P1_DEPLOY=NOT_YET`.
**Provenance:** kiểm nội dung thực trên branch PR #797 (HEAD trước receipt `fe5e90f6fae6c1eea28b6fc92b3775706dd31b75`). Đây là **tự kiểm bởi RELEASE**, không tự xưng kết luận reviewer độc lập mới.

## 1. Source lock và phạm vi SGK

| LESSON_ID | Main baseline Git blob | Candidate Knowledge Git blob | S1 gốc đã đối chiếu trong reviewer receipt lịch sử |
|---|---|---|---|
| G10-B01 | `0ffa4eecff1aa8dd249e8863fccbc7a674a6ddb2` | `fb4bd72f6101523e30e30cc970d74c23b76228a8` | SGK KNTT Toán 10 Tập 1 **trang in 5–11**; SBT trang in 5–7 |
| G10-B02 | `70c77844b0bee75565f8a059ddc4befd3ad9dd2d` | `8a7b90f1768b789429def045e38ebe97e6adbf3a` | SGK KNTT Toán 10 Tập 1 **trang in 12–19**; SBT trang in 8–11 |

**S1 provenance:** reviewer source-scope receipt có thật tại `prototypes/thpt/content-drafts/THPT_G10_CHI_B01_B02_NOTEBOOKLM_D1D6_R01_PASS_RECEIPT_20261029.md`, blob `fece80dcb4b0e17d369e2ecbe12e8d13b672281a`, với 11/11 outcomes, 18/18 original canonical items và 7 D2 original examples PASS **trên snapshot cũ**; source học thuật cũ blob `95a554e31a613b8e215679fe6790738473d598df`. Bản kiểm này **dùng phạm vi S1 và baseline đã có**, **không tuyên bố vừa mở lại PDF gốc** hay chuyển reviewer PASS cũ sang nguồn mới. Chỉ kiểm toán Delta C của Knowledge. Nếu nguồn S1 gốc mới mâu thuẫn với nội dung ở đây, phải mở lại đúng dòng đó.

## 2. MATH + PED verified trên nội dung ứng viên (mỗi outcome bị tác động)

| LESSON / OUTCOME_ID | DELTA và phép kiểm toán cụ thể trên candidate | PED và first-try/remediation | Self-QA |
|---|---|---|---|
| B01 / `G10-B01-PROPOSITION` | 14=7×2 đúng; “14 là số lẻ” sai vẫn là mệnh đề; câu hỏi không có chân trị; `n+2=7` với n=5 đúng, n=4 sai; phân biệt mệnh đề chứa biến trước lượng từ | Khám phá bằng phát biểu quen thuộc → định nghĩa; TRY01, HELP01 | PASS |
| B01 / `G10-B01-NEGATION` | Phủ định `x≥a` là `x<a`, `x>a` là `x≤a`; ¬“mọi đều biết bơi” = “có ít nhất một người không biết bơi”, KHÔNG phải “không ai”; phủ định ¬∀ = ∃¬ | Bảng 2 giá trị chân lý, phản ví dụ và TRY02; HELP02 | PASS |
| B01 / `G10-B01-IMPLICATION` | Bảng `P⇒Q` bốn hàng đúng: chỉ sai nếu P đúng Q sai. `6k=3(2k)` với k nguyên chứng minh 6∣n ⇒ 3∣n; n=3 bác đảo. TRY03: 8∣n ⇒ 4∣n, n=4 bác đảo | Hình tập bội số + chứng minh đại số không dùng hình làm chứng minh; TRY03, HELP02 | PASS |
| B01 / `G10-B01-EQUIVALENCE` | n chẵn ⇒ n²=4k² chẵn; n lẻ ⇒ n²=4k(k+1)+1 lẻ nên n² chẵn ⇒ n chẵn. TRY04: n chẵn ⇔ n+2 chẵn, cả hai chiều đúng trên Z | Ví dụ nêu lý do phải chứng minh hai chiều, TRY04 | PASS |
| B01 / `G10-B01-QUANTIFIERS` | `∀n∈Z,n²≥0` đúng; `∃n∈Z,n²=0` đúng với n=0. Phủ định `∀n,n²>0` là `∃n,n²≤0`, n=0 phản ví dụ; `∀x∈R,x²≥0` phủ định ∃x∈R x²<0 sai | Ký hiệu được nối với câu chữ, TRY05 và đoạn giải thích miền | PASS |
| B02 / `G10-B02-MEMBERSHIP_SUBSET` | A={2,4}, B={2}: 2∈A, B⊆A, A≠B, nhưng {2}∉A vì phần tử của A là hai số; lưu ý tập hợp có thể làm phần tử của tập khác nếu thực tế được liệt kê | Ví dụ hộp thẻ, hình mới đúng đối tượng, TRY06, HELP01 | PASS |
| B02 / `G10-B02-UNION_INTERSECTION` | A={a,b,c}, B={b,c,d}: giao={b,c}, hợp={a,b,c,d}. Quy tắc và/hoặc là bao hàm; phân biệt hai tập trùng vùng giao | Tình huống hai câu lạc bộ → phép toán, TRY07 | PASS |
| B02 / `G10-B02-DIFFERENCE` | A={1,2,3,4}, B={2,4,6}: A\\B={1,3}, B\\A={6}; ví dụ A={1,2,3,4}, B={3,4,5}: hai hiệu lần lượt {1,2} và {5} | Nêu vì sao hiệu không giao hoán, TRY08 và ví dụ giải đủ bước | PASS |
| B02 / `G10-B02-COMPLEMENT` | U={0,1,2,3,4,5}, A={1,3,5}: U\\A={0,2,4}; bắt buộc nêu rõ U mới xác định phần bù | TRY09 và HELP02 | PASS |
| B02 / `G10-B02-INTERVALS` | X=(-2,4], Y=[1,6): giao=[1,4], hợp=(-2,6), thử đầu mút 1,4,6; ví dụ A=(-3,2], B=[0,5): giao=[0,2], hợp=(-3,5), A\\B=(-3,0) | Lý giải chọn/loại đầu mút trước ghi ngoặc, TRY10, HELP03 | PASS |
| B02 / `G10-B02-VENN_MODEL` | 40 HS, 23 Anh,25 Toán,12 cả hai: 11 chỉ Anh,13 chỉ Toán,4 ngoài,24 đúng một môn, tổng 40. Tình huống 32 HS/18/15/6: 12 chỉ Âm nhạc,9 chỉ Thể thao,5 ngoài, tổng 32. Không lẫn dữ liệu hai hình | Hình Venn gắn đúng 40 HS, tự thử khác 32 HS/TRY11, HELP02 và ví dụ có lý do trừ giao | PASS |

**Kết quả sư phạm:** trang học sinh có đúng 4 tab `Khám phá kiến thức / Kiến thức SGK / Ví dụ / Lỗi thường gặp`; ví dụ giải thích *vì sao chọn phương pháp*; 5 B01 + 6 B02 câu Tự thử chủ động mở đối chiếu; 2 HELP B01 + 3 HELP B02 có đường thực hành trở lại canonical Core/Practice. Không đặt nhãn PED/QA thô vào lời giảng, không giả Tutor hoặc tính Mastery từ luyện tập.

## 3. Hình và assessment boundary

| Asset | Git blob | Ý nghĩa đã kiểm |
|---|---|---|
| `THPT_G10_B01_IMPLICATION_DIVISIBILITY_D5_R01.svg` | `40b53b26deb48a7cfdff91be5fe01d12a67bebeb` | Tập bội 6 nằm trong tập bội 3; n=3 nằm ngoài bội 6, bác chiều đảo |
| `G10_B02_MEMBERSHIP_SUBSET_R01.svg` | `c78f7e746ed8837603919f9ed8666d6f8657f0b8` | B={2} là tập con A={2,4}, không nhầm {2} với phần tử 2 |
| `THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg` | `ea84ee68187e83aa4bc6b14e49a965b3d7da5a11` | 11+12+13+4=40, các nhóm khớp 23/25/12 |

**Q15/Q16:** Giữ nguyên bank và bản ghi học viên trên main; FIRST_TRY IDs `THPT-G10-CHI-TRY01..TRY11` duy nhất, HELP B01 2/B02 3; các câu Tự thử này không phải item held-out RD1 hoặc bằng chứng Skill Mastery. Các phép kiểm Golden/Final Submit/browser hiện hành vẫn là cổng RELEASE riêng **trên final integration HEAD**, chưa đánh đồng source check này với QA phát hành.

## 4. Kết luận và giới hạn

`ACADEMIC_PED_SELF_VERIFICATION=B01_B02_PASS_FOR_KNOWLEDGE_DELTA`; `Q18_CONTENT_CHECK_PENDING=B03..B27`; `INDEPENDENT_REVIEWER_NEW_PASS=NOT_CLAIMED`. Hồ sơ này khóa đúng **hai bài**; không tự phát hành toàn 27 hay khẳng định SGK scan vừa mở. Không đòi thêm NotebookLM/27 manifest với hai bài đã có chứng cứ. Có thể tách B01–B02 thành một release scope độc lập nếu final-head R4, Roadmap, Q15/Q16, AP1–AP5 và owner conditional release permission đạt; P1/P2 phải ghi đúng thực tế sau deploy.
