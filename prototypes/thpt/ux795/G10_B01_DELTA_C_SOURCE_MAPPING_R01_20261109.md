# UX795 — G10 B01 (Mệnh đề) · Provenance & Delta C / QA receipt R01

**Scope:** SGK G10 Chương I, riêng B01 trang **Kiến thức**, do RELEASE phụ trách theo quyết định 09/11/2026. Không sửa Core, Practice, Written, Final Submit, RD1, Firebase, Gemini, THCS/THPT Golden. Đang ở nhánh nghiên cứu Draft PR #797, **không phát hành**.

## 1. Căn cứ

| Loại | Nguồn có thật | Receipt/ghi chú |
|---|---|---|
| Phạm vi S1 | SGK Toán 10 KNTT tập 1, Bài 1 Mệnh đề, trang in **5–11** | Đã được mô tả trong nguồn handoff cũ; **chưa xác minh lại từng trang S1 trong lần sửa mới** |
| Canonical SLM main | \`docs/thpt-preview/sgk/chuong-i/bai-1.md\` | blob \`0ffa4eecff1aa8dd249e8863fccbc7a674a6ddb2\` |
| Authoring D1–D6/5 outcome | \`prototypes/thpt/content-drafts/THPT_G10_CHI_B01_B02_D1D6_AUTHORING_R01_SNAPSHOT.md\` | blob \`95a554e31a613b8e215679fe6790738473d598df\`; receipt cũ không tự áp dụng cho R01 mới |
| Gemini v1 bài 1 | \`Gemini/Lớp 10-bài 1.docx\` (owner's Drive archive) | ZIP SHA-256 \`6bf4927f5a3df2a9a925d3e81b49eb44c48051e1e2a7518d2222718d1e060391\`. DOCX có công thức OMML; phần text trích xuất thiếu một số ký hiệu, phải đối chiếu SGK/canonical trước khi dùng |
| NotebookLM v1 Toán 10 bài 1 | \`Notebook Gemini/bai-hoc-chi-tiet-toan-10-kntt.md\` | ZIP member SHA-256 \`19d572505065ab742a97f2507a5a56b566f461191e7f0ae8452d411cc2e3ec1c\`; phần v1 có ví dụ \`x²+1=0\` và lập luận về lượng từ |
| Hình canonical giữ nguyên | \`docs/assets/images/thpt/THPT_G10_B01_IMPLICATION_DIVISIBILITY_D5_R01.svg\` | blob \`40b53b26deb48a7cfdff91be5fe01d12a67bebeb\`. Bội số 6 ⊆ bội số 3, ví dụ n=3 bác bỏ đảo |
| Candidate B01 R01 | [G10_B01_HYBRID_KNOWLEDGE_CANDIDATE_R01.md](G10_B01_HYBRID_KNOWLEDGE_CANDIDATE_R01.md) | nguồn mới \`DELTA_C\` trên PR #797, receipt blob khóa ở HEAD khi nghiệm thu |
| A/B HTML research | [UX795_G10_B01_CONTINUOUS_NARRATIVE_AB_R01.html](UX795_G10_B01_CONTINUOUS_NARRATIVE_AB_R01.html) | A khóa HTML phát hành (blob \`443d6f52a98990131852c0ce38ee818afd8929aa\`), B là bản mới với cùng **4 tab ngang cấp 1** |

Chỉ lấy **ý tưởng diễn giải có ích, những ví dụ hợp lý** từ các nguồn Gemini/NotebookLM v1; không lấy nguyên bộ làm SGK chuẩn, không đưa bản v2 placeholder vào trang.

## 2. Ma trận 5 outcome canonical

| OUTCOME_ID | Mảng liên tục trong R01 | Evidence / ví dụ | ID self attempt |
|---|---|---|---|
| \`G10-B01-PROPOSITION\` | Khám phá từ câu 14 chia hết cho 7, câu hỏi, \`n+2=7\`; Kiến thức SGK 2.1 | Mệnh đề đúng/sai, biến miền xác định, Ví dụ 1 \`x²+1=0\` từ Notebook v1 | \`THPT-G10-CHI-TRY01\` |
| \`G10-B01-NEGATION\` | 2.2 phủ định và bảng đối chiếu \`P/¬P\` | Chính xác dấu \`≥ ↔ <\`, phản ví dụ “mọi” vs “tồn tại”, Ví dụ 2 | \`THPT-G10-CHI-TRY02\` |
| \`G10-B01-IMPLICATION\` | 2.3 kéo theo/đảo + **bảng chân lý** và hình canonical đặt sát giải thích | Định nghĩa kéo theo / đủ-cần; Ví dụ 3 chia hết 6 → 3, đảo sai n=3 | \`THPT-G10-CHI-TRY03\` |
| \`G10-B01-EQUIVALENCE\` | 2.3 “khi và chỉ khi”, cần đủ hai chiều | Ví dụ 4 \`n chẵn ⇔ n² chẵn\`, chứng minh đúng hai chiều | \`THPT-G10-CHI-TRY04\` |
| \`G10-B01-QUANTIFIERS\` | 2.4 \`∀/∃\`, phủ định, giữ miền xét | Hai công thức lượng từ, đúng chỗ của dấu bằng; Ví dụ 2 | \`THPT-G10-CHI-TRY05\` |

**Cách tổ chức trang:** đúng bốn phần lớn \`Khám phá kiến thức\`, \`Kiến thức SGK\`, \`Ví dụ giải toán\`, \`Lỗi thường gặp\`. \`Thuật ngữ & Kiến thức, kỹ năng\` nằm trong **cuối Khám phá**, không tạo phần/tab mới. Khi hiển thị B, dùng đúng **4 tab cấp 1**, không có tab cấp 2. Các mảng Kiến thức SGK cuộn dọc, hình/bảng nằm sát khái niệm.

## 3. Delta và bảo vệ các thành phần đã duyệt

**DELTA_C_ACADEMIC_MATERIAL (không coi là chỉnh UI):**
- Viết lại mạch giảng mới thay cho nhãn PED lặp; thêm ví dụ đời thường đúng toán, bảng chân lý \`¬P\` và \`P⇒Q\`, khung “Kiến thức cần nhớ”, diễn giải lý do chọn cách và các ví dụ thật.
- Sử dụng bài \`x²+1=0\` có giải thích toán, đưa hình chia hết có sẵn sát 2.3; bổ sung proof cho \`n chẵn ⇔ n² chẵn\`.
- Giữ 5 câu tự thực hiện **trước Core**, nhưng đặt trong Kiến thức SGK với \`<details>\` đóng; giữ đúng \`TRY01...TRY05\` **một lần mỗi ID**, không đưa vào đánh giá độc lập.
- Giữ 2 HELP_ID \`HELP-G10-B01-01\` và \`HELP-G10-B01-02\`; giải thích khắc phục được biên tập, không đổi item bank/canonical assessment.

**Không đổi:** Core/Practice/Written/Anchor, Q15 canonical registry, Q16 Final Submit/RD1, Skill Mastery, Gemini, Firebase, website production, THCS Golden. Phần hình SVG nguồn là hình cũ, **không thay blob**.

## 4. Checklist mở trước nghiệm thu

| Cổng | Chứng cứ / trạng thái |
|---|---|
| Cấu trúc 4 mục / tab cấp 1 | Kết cấu Markdown đã tạo và A/B preview dựng từ cùng template UX795. **Browser QA chưa chạy** |
| Câu tự thực hiện Q14 | 5 ID gốc có mặt duy nhất mỗi ID, đáp án trong \`details\` đóng; QA runtime còn thiếu |
| Q07/PED4 | Existing SVG đặt ngay §2.3; truth tables cần kiểm đọc được trên 390/820/1440, screen-reader |
| Q01–Q14/Q18 của Delta C | **PENDING** đối chiếu chính xác SGK S1 từng outcome và nhận xét đã có; không gán PASS mới cho snapshot R01 khi chưa có receipt |
| AP1–AP5 / MathJax | **NOT RUN** trong Chrome/Safari trên thiết bị thật; test 4 tab, tables, '\`\\overline{P}\`' và số dòng math |
| Giao diện chung | Dùng đồng nhất H1–H4, CSS/tab template từ pilot G10 B02, chưa chứng minh rollout 79 bài |
| Quyền merge/deploy | **KHÔNG** có quyền tự phát hành; PR vẫn Draft và tệp nằm ngoài \`docs/\` |

**Current:** \`UX795_G10_CHI_B01_R01_DRAFTED / FIVE_OUTCOMES_MAPPED / NO_PRODUCTION_CHANGE / Q18_BROWSER_QA_PENDING\`.
