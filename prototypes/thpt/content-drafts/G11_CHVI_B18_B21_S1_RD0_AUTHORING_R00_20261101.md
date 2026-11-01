# G11 KNTT Tập 2 — Chương VI: S1 source scope + RD0 outcome register R00

**PACKET_ID:** `THPT-G11-CHVI-B18-B21-WHOLE-CHAPTER-AUTHORING-R00-20261101`.  
**LEARNING_PATH:** `SGK_CHAPTER`; `READINESS_SCOPE=SGK_CHAPTER_READINESS:G11:CHVI` (**NOT TOPIC_READINESS**).  
**STATUS:** `AUTHORING_R00`; **not** reviewed/approved/integrated/QA PASS/released.  
**Original pedagogical requirement:** Owner Issue #691 — **WHY → WHAT → HOW FORMED → formal definition, conditions → when it is useful → reasoned examples → try → Core/Practice/Application/D6**. No “formula first” shortcuts, no repeated prerequisites already taught unless needed. Whole chapter must pass PED1–PED6 separately from D1–D6 in one independent NotebookLM batch.

## 1. Phạm vi bắt buộc (Chapter VI SGK KNTT Toán 11 **Tập 2**)

| Bài | SGK trang in **tham chiếu công khai** | SBT Tập 2 trang in **tham chiếu từ mục lục scan** | Nội dung |
|---|---|---|---|
| B18 — Lũy thừa với số mũ thực | 4–9 | 4–7 | Số mũ nguyên, hữu tỉ, vô tỉ/thực, quy tắc và mô hình |
| B19 — Lôgarit | 10–15 | 8–10 | Định nghĩa đảo, điều kiện, tính chất, đổi cơ số, vận dụng |
| B20 — Hàm số mũ và hàm số lôgarit | 16–19 | 11–15 | Hàm, TXĐ/TGT, biến thiên, đồ thị, tương quan ngược nhau |
| B21 — Phương trình, bất phương trình mũ và lôgarit | 20–24 | 16–19 | Phương trình/bất phương trình dạng cơ bản; điều kiện, chiều bất đẳng thức, ứng dụng |
| Bài tập cuối Chương VI | 25–26 | 20–23 | Liên hệ tổng hợp, tập hợp kỹ năng trọn chương |

**SOURCE_RECEIPT STATUS:** SGK indexes from Toan11.edu.vn/SGKVN and SBT PDF Toán 11 KNTT Tập 2 accessed via web `https://file.toan9.edu.vn/file-pdf/sach-bai-tap-toan-11-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf`, PDF extracted table of contents for SBT pages p4/8/11/16/20; original owner-specific SGK/SBT PDFs and their exact printed page labels **MUST be reconfirmed in NotebookLM S1**, and competing third-party indices are not permission to modify Core. Public PDF screenshot retrieval did not succeed, so **DO NOT claim visual scan QA PASS**. All questions authored original; no copying textbook stems.

**Scope fence:** B22–B27 belong Chapter VII (not Chapter VI). “Một vài mô hình toán học sử dụng hàm số mũ và hàm số lôgarit” is a later experiential section of the volume, not automatically Chapter VI Core. Do not import Topic Practice or advanced calculus.

## 2. 22 RD0 outcomes — canonical single skill register

| outcome_id = skill_id | Bài | Học sinh cần tự hiểu/giải thích được | Teaching readiness |
|---|---|---|---|
| `G11-B18-POWER_INTEGER` | B18 | Lũy thừa số mũ nguyên: cùng cơ số, số mũ 0 và số mũ âm; điều kiện a≠0 nếu số mũ ≤0 | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B18-POWER_RATIONAL` | B18 | Căn bậc n, lũy thừa số mũ hữu tỉ của cơ số dương, lý do a^(m/n)=căn bậc n của a^m | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B18-POWER_REAL` | B18 | Vì sao cần lũy thừa số mũ vô tỉ; xấp xỉ bởi dãy hữu tỉ và tính nhất quán với quy tắc cũ | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B18-POWER_LAWS` | B18 | Các quy tắc nhân, chia, lũy thừa của lũy thừa; phát biểu đúng điều kiện cơ số | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B18-GROWTH_MODEL` | B18 | Dùng nhân lặp trong bài toán tăng trưởng/lãi kép và giới hạn ý nghĩa của mô hình | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B19-LOG_DEFINITION` | B19 | Lôgarit là số mũ cần tìm trong a^y=b; khái niệm đảo của lũy thừa | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B19-LOG_DOMAIN` | B19 | Điều kiện a>0, a≠1, b>0; giải thích vì sao và các lỗi ghi log(0), log(âm) | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B19-LOG_LAWS` | B19 | Tại sao log(ab)=log a+log b; log(a/b), log(a^r) với điều kiện | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B19-LOG_BASE_CHANGE` | B19 | Tại sao công thức đổi cơ số đúng; phân biệt cơ số a, b và đối số | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B19-LOG_APPLICATION` | B19 | Tìm thời gian/số chu kỳ khi biết mức tăng theo hàm mũ và kiểm đơn vị | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B20-EXP_FUNCTION` | B20 | Hàm số mũ y=a^x: biến nào ở số mũ, TXĐ R, TGT (0,+∞), đường qua (0,1) | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B20-EXP_MONOTONIC` | B20 | Vì sao a>1 tăng, 0<a<1 giảm; tiệm cận ngang y=0, tập điểm quan sát | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B20-LOG_FUNCTION` | B20 | Hàm số lôgarit y=log_a x: TXĐ x>0, TGT R, qua (1,0) | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B20-LOG_MONOTONIC` | B20 | Vì sao đồng/nghịch biến theo cơ số; tiệm cận đứng x=0 | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B20-INVERSE_GRAPH` | B20 | Hai hàm là hàm ngược; điểm (x,y) ↔ (y,x), đối xứng qua y=x; liên hệ mô hình | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B21-EXP_EQUATION` | B21 | Phương trình mũ cơ bản a^{f(x)}=a^{g(x)}, đơn ánh và số mũ bằng nhau | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B21-LOG_EQUATION` | B21 | Phương trình log_a f(x)=log_a g(x), phải đặt f,g>0 | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B21-EXP_INEQUALITY` | B21 | Bất phương trình mũ: giữ/đổi chiều phụ thuộc a>1 hay 0<a<1 | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B21-LOG_INEQUALITY` | B21 | Bất phương trình lôgarit: điều kiện đối số dương và biến đổi chiều theo cơ số | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B21-DOMAIN_CHECK` | B21 | Nghiệm ngoại lai khi biến đổi, log(a)=log(b) không cho phép bỏ điều kiện a,b>0 | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-B21-REAL_CONTEXT` | B21 | Giải bài toán thời gian đạt ngưỡng tăng/giảm mũ, ràng buộc biến thời gian không âm/nguyên nếu có | D1 WHY/WHAT→D2→D3; PED **PENDING** |
| `G11-CHVI-INTEGRATED` | CHVI | Sợi dây nhân lặp → số mũ thực → câu hỏi số mũ → logarit → hàm và đồ thị → giải phương trình thực tế | D1 WHY/WHAT→D2→D3; PED **PENDING** |

**COUNT:** B18=5, B19=5, B20=5, B21=6, chapter integrated=1 → **22 distinct**. These are proposed RD0 candidate IDs, subject to matching S1 outcomes. Preserve canonical `item_id` and `skill_id` across placements; no duplicates for SGK Core vs Topic. All public D3 feedback formative only; RD1 not written to any public GitHub path.

## 3. Development/QA gate

- D1: complete concept-first teaching with prerequisites *appropriately* recalled, each first-use term explained, conditions and rationale before laws.
- D2: student can follow every choice of transformation and see common wrong attempts.
- D3/D4: **all distinct original items**; one Written/Anchor library, with rubric; prove outcome depth and diversity, not only total quantity.
- D5/D6: figures must be mathematically precise and **teaching** (guided interpretation); HELP diagnosable and actionable after formative submission, never RD1 before Final Submit.
- RD1: private held-out independent one-per-outcome minimum, **with different structure** from D3/SBT, answer and rubric stored outside public repo; owner Library preferred.
- S1 original source receipt, math/anti-clone QA, PED1–PED6 per outcome, full-chapter NotebookLM reviewer verdict `ACADEMIC_CHAPTER_VI` and `PEDAGOGICAL_SELF_LEARNING_READY` on exact public/private snapshot **before A6**.
- Release lane handles R1–R5/AP1–AP5/P1/P2 and only explicit owner approval can merge/deploy; independent PASS not a scoring/Mastery activation.

**Source links for traceability:** SGK Toán 11 KNTT Tập 2 `https://toan11.edu.vn/sgk-toan-11-ket-noi-tri-thuc`; SBT original scan public `https://file.toan9.edu.vn/file-pdf/sach-bai-tap-toan-11-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf`. Project authority: 08/06/07, Issue #675 and Issue #691.
