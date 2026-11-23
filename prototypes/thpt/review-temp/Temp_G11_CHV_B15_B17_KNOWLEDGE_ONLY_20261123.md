# Temp — NotebookLM independent review of Toán 11 Chapter V B15–B17 KNOWLEDGE ONLY

PACKET_ID: `G11_CHV_B15_B17_KNOWLEDGE_SCOPE_REVIEW_20261123`  
STANDARD_ID: `SLM-THPT-QUALITY-ONE`, GitHub main unified Q01–Q18 (v3.2.0)  
REVIEW_SCOPE: `G11_G12_SGK_KNOWLEDGE_PAGES_ONLY`  
PERMANENT_SOURCES: **exactly 5 THPT v2.1**, no v2.0/no sixth  
AUTHORING_STATUS: `SELF_CHECKED / NOTEBOOKLM_PENDING`, not CONTENT_READY  
PRINTED_SGK_REFERENCE: Toán 11 KNTT tập một pp.104–122, **visual print source page-to-PDF offset not independently verified**  
OWNER_SCOPE_LOCK: https://github.com/TMA2015/self-learning-math/issues/1039  
FROZEN: Core/Luyện tập, Tự kiểm tra cuối chương, official bank, Written/Anchor, RD1, rubric, item canonical ID, Final Submit, Mastery — NOT IN THIS REVIEW  

## Review targets (SHA exact)

| Lesson | SGK printed pages (visual pending) | Draft PR | HEAD commit | Learner blob | Golden section pairing | New SVG SHA | Existing SVG SHA |
|---|---|---|---|---|---|---|---|
| B15 Giới hạn của dãy số | 104–110 | #1041 | `871c5b20143254f5a282d6a89b8ac918050a5a8b` | `110d26c475df0f00dda7fa53bdc1afdfd6cb915a` | 4↔4 | `fa7db1642d772acaef27c1b1f4654df867cc2aba` | `632bef51196757f9c71f54c53bb3c7639ce158e0` |
| B16 Giới hạn của hàm số | 111–118 | #1042 | `f8bb7b9f35d05d2674b40047a1fd73b002d6debd` | `df4d5536c079d4825222c4320e8d3e443aa88ae5` | 3↔3 | `62c7f1a3c9d5b7455b3223c347ba7aa48adb5526` | `d623e8a96c6d5f9723aafb9c62bffe57bdc9aa73` |
| B17 Hàm số liên tục | 119–122 | #1043 | `da585f0e68a9f63538dc69ef71e0aee4fe2efc75` | `22e4e8c777a989ad00e72af94ea3e2eae0690ec9` | 3↔3 | `612883b518746c9d535fbcd151e226da562cfa1c` | `0cc06960b371bca72ee78da414a04aa56f5e5fbe` |

## Independent NotebookLM review instructions

1. Đọc SGK/SBT KNTT S1 Toán 11 tập một **đúng bài và trang in** (B15 104–110, B16 111–118, B17 119–122); đánh giá **chỉ nội dung Kiến thức** đã thay đổi. Kiểm từng mục chính, khái niệm, định nghĩa, định lí, nhận xét, ví dụ và điều kiện; ghi `SOURCE_RECEIPT` theo nguồn thật và `SOURCE_VISUAL_HOLD` khi thiếu ảnh SGK.
2. Kiểm từng bài/từng mục cả hai tab **Khám phá 1:1 Kiến thức SGK**: mỗi tab học độc lập được, giải thích vì sao trước công thức, dẫn dắt bằng hình và ví dụ có phương pháp/giới hạn áp dụng, 3+1 nhãn/khung đúng bản chất SGK. Kiểm đúng 8 Ví dụ với Đề bài/Phân tích/Lời giải/Kiểm lại, các Vận dụng tự mở Đối chiếu, Kiểm lỗi và lối khắc phục.
3. **Phản biện toán độc lập**: B15 hội tụ dãy, quy tắc thương hữu hạn, tổng cấp số nhân khi |q|<1, quy tắc giới hạn vô cực; B16 giới hạn một phía, tại điểm và tại vô cực, căn ở x<0, 0/0, dấu một phía, mô hình m(v); B17 tiêu chuẩn liên tục tại điểm, một phía đầu mút đoạn, điều kiện mẫu khác 0, kết quả đổi dấu **ít nhất một nghiệm** (không suy duy nhất).
4. Kiểm SVG từ phần mã ở cuối gói và ALT/figcaption trong learner; chỉ khẳng định **semantic/source SVG**, không tự gọi Pixel/Browser PASS khi chưa nhìn hình render light/slate/màn hình thực.
5. Trả **Academic và PED verdict riêng B15, B16, B17**, P0/P1/P2 với `LESSON_ID`, đoạn, tác động, `MINIMAL_DELTA` và `SOURCE_RECEIPT`/SHA; `NOT_REVIEWED` cho bất kỳ thứ gì chưa kiểm. **Không review lại Core, Tự kiểm tra hay ngân hàng đã nghiệm thu**, không tự Q15/Q16/full chapter PASS/CONTENT_READY/Release Authorization/Mastery từ gói này.

## SGK headings and Golden semantic cards to verify

### B15 — Giới hạn của dãy số
Khám phá: 1.1. Giới hạn hữu hạn của dãy số / 1.2. Định lí về giới hạn hữu hạn của dãy số / 1.3. Tổng của cấp số nhân lùi vô hạn / 1.4. Giới hạn vô cực của dãy số
Kiến thức SGK: 2.1. Giới hạn hữu hạn của dãy số / 2.2. Định lí về giới hạn hữu hạn của dãy số / 2.3. Tổng của cấp số nhân lùi vô hạn / 2.4. Giới hạn vô cực của dãy số
- FORMAL_DEFINITION — Định nghĩa — Dãy có giới hạn bằng 0
- FORMAL_DEFINITION — Định nghĩa — Dãy có giới hạn hữu hạn \(a\)
- FORMAL_RULE — Định lí — Các phép toán với giới hạn hữu hạn
- FORMAL_DEFINITION — Định nghĩa — Cấp số nhân lùi vô hạn và tổng của nó
- KEY_FORMULA — Công thức — Tổng cấp số nhân lùi vô hạn
- FORMAL_DEFINITION — Định nghĩa — Giới hạn \(+\infty\) và \(-\infty\)
- FORMAL_RULE — Quy tắc — Một số giới hạn vô cực và điều kiện dấu

### B16 — Giới hạn của hàm số
Khám phá: 1.1. Giới hạn hữu hạn của hàm số tại một điểm / 1.2. Giới hạn hữu hạn của hàm số tại vô cực / 1.3. Giới hạn vô cực của hàm số tại một điểm
Kiến thức SGK: 2.1. Giới hạn hữu hạn của hàm số tại một điểm / 2.2. Giới hạn hữu hạn của hàm số tại vô cực / 2.3. Giới hạn vô cực của hàm số tại một điểm
- FORMAL_DEFINITION — Định nghĩa — Giới hạn hữu hạn tại \(x_0\)
- FORMAL_RULE — Định lí — Phép toán trên các giới hạn hữu hạn
- FORMAL_DEFINITION — Định nghĩa — Giới hạn hữu hạn một phía
- FORMAL_DEFINITION — Định nghĩa — Giới hạn hữu hạn tại \(+\infty\) và \(-\infty\)
- FORMAL_DEFINITION — Định nghĩa — Giới hạn vô cực tại \(x_0\)
- FORMAL_DEFINITION — Định nghĩa — Giới hạn vô cực một phía
- FORMAL_RULE — Quy tắc — Tích và thương khi có giới hạn vô cực

### B17 — Hàm số liên tục
Khám phá: 1.1. Hàm số liên tục tại một điểm / 1.2. Hàm số liên tục trên một khoảng / 1.3. Một số tính chất cơ bản
Kiến thức SGK: 2.1. Hàm số liên tục tại một điểm / 2.2. Hàm số liên tục trên một khoảng / 2.3. Một số tính chất cơ bản
- FORMAL_DEFINITION — Định nghĩa — Liên tục tại một điểm
- FORMAL_DEFINITION — Định nghĩa — Liên tục trên khoảng và trên đoạn
- FORMAL_RULE — Tính chất — Phép toán đối với các hàm liên tục

## Handoff control

- Knowledge-only upgrade; source canonical stays on per-lesson Draft PR branches. This review file is **a snapshot, not a canonical learner path**.
- `CORE_PRACTICE=FROZEN`, `CHAPTER_SELF_CHECK=FROZEN`, `EXISTING_NOTEBOOKLM_VERDICTS=PRESERVED`. Do not infer independently reviewed assessment readiness from these pages.
- Existing SVGs from main are not modified; new SVGs only under lesson-specific assets. No CI/browser execution is evidenced by text.
- Any substantial content change after review must be review-delta scoped; source SHA/receipt must update. No merge/deploy without owner approval and downstream gates.

---

# SNAPSHOT: THREE CANONICAL KNOWLEDGE SOURCES

## B15 — Giới hạn của dãy số
CANONICAL_PATH: `docs/thpt-preview/sgk/lop-11/chuong-v/bai-15.md`
SOURCE_HEAD: `871c5b20143254f5a282d6a89b8ac918050a5a8b`
SOURCE_BLOB: `110d26c475df0f00dda7fa53bdc1afdfd6cb915a`

~~~~markdown
# Bài 15. Giới hạn của dãy số

<style>
/* Chỉ B15: phân loại 3+1; không đổi Golden/UI/runtime chung. */
.md-typeset:has([data-g11-b15-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border-color:#a9dccc;border-left-color:#087d69;color:#174137}
.md-typeset:has([data-g11-b15-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border-color:#a5bee5;border-left-color:#4879c2;color:#193d66}
.md-typeset:has([data-g11-b15-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-recap-card {background:#fff3d5;border-color:#eacb7c;border-left-color:#c49a37;color:#27344f}
.md-typeset:has([data-g11-b15-knowledge-only]) .thpt-r4-key-formula {background:transparent;color:inherit;border:1px solid #8c9ab0;border-left:4px solid #64748b;border-radius:10px;padding:.75rem 1rem;margin:.65rem 0 1rem;line-height:1.7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b15-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b15-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b15-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-recap-card {background:#453919;border-color:#856b37;border-left-color:#d4b05f;color:#fff2d5}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b15-knowledge-only]) .thpt-r4-key-formula {background:transparent;color:inherit;border-color:#8c9ab0;border-left-color:#bdc8d8}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b15-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG V · SGK KẾT NỐI TRI THỨC</p>
<p class="thpt-r4-lead">Hiểu vì sao số hạng tiến gần một giá trị, cách tính giới hạn, tổng vô hạn có thể hữu hạn và giới hạn vô cực. Kiểm điều kiện trước mọi phép biến đổi.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương V</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Mỗi lần Achilles chạy hết khoảng cách đến vị trí cũ của con rùa, rùa lại nhích lên một đoạn. Nếu cứ chia quãng đường như vậy, ta có **vô số đoạn**; nhưng điều ấy có đồng nghĩa thời gian đuổi kịp là vô hạn? Câu hỏi này dẫn đến hai điều khác nhau: **giới hạn các số hạng** và **giới hạn của tổng các số hạng**. Trước khi dùng công thức, em cần hình dung thế nào là “đủ gần”, “tổng riêng” và “vượt mọi mốc”.

    ### 1.1. Giới hạn hữu hạn của dãy số

    Xét dãy \(u_n=\frac1n\) với \(n=1,2,\ldots\). Các giá trị đầu là \(1;\frac12;\frac13;\frac14;\ldots\). Không có số hạng cuối cùng và **không số hạng nào bằng 0**. Nhưng các số hạng càng về sau càng gần 0. Nếu yêu cầu khoảng cách tới 0 nhỏ hơn \(0{,}01\), chỉ cần \(n>100\); từ đó về sau **mọi** số hạng đều đáp ứng. Yêu cầu khoảng cách nhỏ hơn \(0{,}0001\) thì lại chọn mốc lớn hơn. Một mốc cố định cho tất cả độ chính xác là không cần thiết.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B15-01_R01.svg" alt="Các điểm của dãy một chia n tiến sát trục 0 và không chạm trục"><figcaption><strong>Đọc hình:</strong> trục ngang là số thứ tự \(n\), trục đứng là \(u_n\); các điểm \(1/n\) luôn dương nhưng tiến sát đường \(u_n=0\). Không cần tồn tại số hạng “cuối” bằng 0.</figcaption></figure>

    Ta nói \(u_n\to0\) khi các giá trị tuyệt đối \(|u_n|\) cuối cùng **nhỏ hơn mọi mức sai số dương** được chọn. Chữ “cuối cùng” nghĩa là kể từ một chỉ số \(N\), tất cả số hạng đều thỏa điều kiện; không phải chỉ vài số hạng tình cờ gần 0. Khi muốn dãy tiến đến \(a\), ta xét khoảng cách \(|u_n-a|\). Nói \(u_n\to a\) tương đương \(u_n-a\to0\). Chẳng hạn \(3+\frac2n\to3\) vì khoảng cách đến 3 là \(2/n\to0\).

    **Kết quả cơ bản:** \(\frac1{n^k}\to0\) với số nguyên dương \(k\); \(q^n\to0\) khi \(|q|<1\). Vì thế \(0{,}8^n\to0\), và \((-\frac12)^n\to0\) dù đổi dấu. Nếu \(|u_n|\le v_n\) với \(v_n\ge0\) và \(v_n\to0\), thì \(u_n\to0\): một khoảng cách nhỏ hơn khoảng cách khác đang tiến về 0 cũng phải tiến về 0.

    Không phải mọi dãy đều có giới hạn hữu hạn. Dãy \((-1)^n\) lần lượt nhận \( -1,1,-1,1,\ldots\); dù bị chặn trong khoảng \([-1,1]\), nó **không tiến gần một số thực duy nhất**. Nhưng \(\frac{(-1)^n}{n}\to0\) vì giá trị tuyệt đối bằng \(1/n\to0\). Điều quan trọng là **khoảng cách tới giới hạn**, không chỉ có hay không có dấu âm.

    **Vận dụng.** Hai dãy \(a_n=4+\frac{3}{n}\) và \(b_n=\frac{(-1)^n}{n}\) có giới hạn hữu hạn nào? Giải thích bằng khoảng cách chứ không chỉ thay số lớn.

    ??? question "Đối chiếu"

        **Lời giải:** \(|a_n-4|=3/n\to0\) nên \(a_n\to4\). Với \(b_n\), \(|b_n|=1/n\to0\), nên \(b_n\to0\). Dãy \(b_n\) đổi dấu nhưng vẫn có giới hạn 0 vì độ lớn ngày càng nhỏ.

    ??? tip "Kiểm lỗi"

        Đừng nói “dãy không có giới hạn vì có số hạng âm”. Hãy kiểm \(|u_n-a|\) có tiến về 0 không; và nhớ \(n\to+\infty\) **không có nghĩa** thay \(n\) bằng một số mang tên “vô cực”.

    ### 1.2. Định lí về giới hạn hữu hạn của dãy số

    Khi đã biết hai dãy \(u_n\to a\), \(v_n\to b\) với \(a,b\) là **số thực**, ta có thể cộng, trừ, nhân và — với điều kiện — chia các giới hạn. Tại sao? Nếu từ một mốc đủ lớn, \(u_n\) gần \(a\) và \(v_n\) gần \(b\), thì tổng và tích của chúng gần \(a+b\), \(ab\). Nhưng với phép chia, nếu **mẫu tiến về 0**, giá trị thương có thể biến động mạnh; không thể lấy \(a/b\) khi \(b=0\).

    Lấy dãy \(w_n=\frac{5n^2-3}{2n^2+n}\). Ta không “thay \(n=\infty\)”; thay vào đó chia **cả tử và mẫu cho cùng \(n^2\)**:
    
    \[
    w_n=\frac{5-\frac3{n^2}}{2+\frac1n}\longrightarrow\frac52.
    \]

    Đây là chọn phương pháp có lí do: tử và mẫu đều bậc hai, sau khi chia cho \(n^2\), mỗi phần còn lại có giới hạn hữu hạn, và **mẫu tiến đến 2 khác 0**. Nếu mẫu sau khi chuẩn hóa tiến đến 0, ta không được áp dụng ngay định lí phép chia.

    Nếu \(u_n\ge0\) và \(u_n\to a\ge0\), thì \(\sqrt{u_n}\to\sqrt a\). Chẳng hạn \(\sqrt{\frac{n+1}{4n+5}}\to\sqrt{\frac14}=\frac12\), vì biểu thức trong căn không âm và mẫu giới hạn sau chia cho \(n\) bằng 4. **Không thể tự lấy căn** nếu biểu thức bên trong âm hoặc ngoài miền xác định.

    **Vận dụng.** Tính \(\lim\limits_{n\to+\infty}\frac{2n+3}{n-1}\) (dãy xác định từ \(n\ge2\)), và nêu vì sao phép chia giới hạn hợp lệ.

    ??? question "Đối chiếu"

        **Lời giải:** Chia tử, mẫu cho \(n\): \(\frac{2+3/n}{1-1/n}\to\frac{2+0}{1-0}=2\). Mẫu của biểu thức đã chuẩn hóa tiến về 1 khác 0 (và \(n-1\ne0\) với \(n\ge2\)), nên định lí phép chia áp dụng được.

    ??? tip "Kiểm lỗi"

        Sai phổ biến là viết \(\frac{0}{0}\) rồi tùy tiện “rút gọn” vì nhìn thấy \(n\to\infty\), hoặc quên kiểm mẫu. Trước khi chia giới hạn, hãy chỉ ra **giới hạn của mẫu khác 0**.

    ### 1.3. Tổng của cấp số nhân lùi vô hạn

    Khi biết \(\frac1n\to0\), em có thể nghĩ: “Số hạng ngày càng nhỏ thì tổng vô số số hạng có thể vẫn rất lớn không?” Câu trả lời tùy dãy. Với cấp số nhân \(1,\frac12,\frac14,\frac18,\ldots\), tổng riêng \(S_n\) sau \(n\) số hạng không ngừng tăng, nhưng luôn nhỏ hơn 2; phần thiếu so với 2 giảm dần. Đây là ví dụ tổng của **vô hạn số hạng nhưng hữu hạn**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B15_GEOMETRIC_PARTIAL_SUMS_AUTHORING_20261123.svg" alt="Các tổng riêng 1, 1.5, 1.75, 1.875, 1.9375 tiến gần đường giới hạn 2"><figcaption><strong>Đọc hình:</strong> các chấm là \(S_1=1\), \(S_2=1{,}5\), \(S_3=1{,}75\),...; đường ngang tại 2 là **giới hạn của các tổng riêng**, không phải số hạng mới được cộng vào. Mỗi số hạng tiếp theo nhỏ dần, các tổng riêng tiến gần 2.</figcaption></figure>

    Với cấp số nhân có số hạng đầu \(u_1\), công bội \(q\), tổng \(n\) số hạng đầu (khi \(q\ne1\)) là \(S_n=u_1\frac{1-q^n}{1-q}\). Nếu \(|q|<1\), \(q^n\to0\), nên \(S_n\to\frac{u_1}{1-q}\). **Tổng của cấp số nhân lùi vô hạn** là giới hạn đó. Điều kiện \(|q|<1\) bảo đảm phần còn lại \(u_1q^n/(1-q)\to0\); không phải “vô hạn số hạng nào cũng cộng được”.

    Thử dãy \(6,-3,\frac32,-\frac34,\ldots\) có \(q=-\frac12\). Công bội âm không cản trở hội tụ, vì \(|q|=\frac12<1\); tổng vô hạn bằng \(6/(1+\frac12)=4\). Các tổng riêng của ví dụ **luân phiên trên và dưới 4**, không tăng đều như dãy có \(q>0\). Nếu \(q=1\), tổng \(2+2+2+\cdots\) tăng không bị chặn; không áp dụng công thức tổng vô hạn.

    **Vận dụng.** Một mô hình ghi nhận các khoản đóng góp \(8,4,2,1,\ldots\) (đơn vị). Tính tổng lý thuyết nếu mô hình kéo dài mãi. Vì sao tổng thực tế sau hữu hạn đợt nhỏ hơn tổng đó?

    ??? question "Đối chiếu"

        **Lời giải:** Đây là cấp số nhân lùi vô hạn với \(u_1=8\), \(q=\frac12\), \(|q|<1\). Tổng vô hạn bằng \(8/(1-\frac12)=16\) đơn vị. Sau \(n\) đợt, \(S_n=16(1-2^{-n})<16\) do \(2^{-n}>0\); khoảng thiếu tiến về 0 khi \(n\) tăng.

    ??? tip "Kiểm lỗi"

        Đừng lấy \(S_n\) hữu hạn rồi gọi nó **bằng** tổng vô hạn; cũng đừng áp dụng \(u_1/(1-q)\) khi \(|q|\ge1\). Kiểm công bội trước, sau đó mới tính.

    ### 1.4. Giới hạn vô cực của dãy số

    Từ ngữ “tiến tới vô cực” khác hẳn “tiến tới một số rất lớn cố định”. Dãy \(u_n=n^2\) có thể vượt **mọi mốc dương \(M\)** mà em chỉ định, và từ một chỉ số đủ lớn trở đi **mọi số hạng** đều vượt \(M\). Ta viết \(n^2\to+\infty\). Tương tự, \(-n^2\to-\infty\) vì cuối cùng mọi số hạng nhỏ hơn \(-M\).

    Chẳng hạn nếu đặt \(M=10^6\), chỉ cần \(n>1000\) thì \(n^2>M\). Nếu đặt một mốc lớn hơn nữa, chọn \(n\) lớn hơn. Dấu \(+\infty\) không phải **một số thực để thay vào phép tính**. Với \(v_n=(-1)^n n\), độ lớn tăng mãi nhưng dấu thay đổi, nên dãy không tiến đến \(+\infty\) hay \(-\infty\); không thể chỉ nhìn \(|v_n|\).

    Các ví dụ cơ bản: \(n^k\to+\infty\) với \(k\) nguyên dương; \(q^n\to+\infty\) khi \(q>1\). Với tổng có thành phần hữu hạn, nếu \(u_n\to+\infty\) và \(v_n\to b\) hữu hạn, thì \(u_n+v_n\to+\infty\). Với tích, nếu \(u_n\to+\infty\) và \(v_n\to b>0\) thì \(u_nv_n\to+\infty\); còn nếu \(b<0\) thì \(u_nv_n\to-\infty\). **Nếu \(b=0\)** thì không được suy ra giới hạn của tích từ các mệnh đề này.

    Ví dụ \(\frac{n^2}{2n+1}=\frac n{2+1/n}\to+\infty\) vì mẫu đã chuẩn hóa tiến về 2 dương, cuối cùng nằm giữa hai số dương cố định (chẳng hạn \(2<2+1/n\le3\)), còn tử \(n\) tăng không bị chặn. Không viết \(\infty/\infty=1\) hoặc coi vô cực như số để rút gọn.

    **Vận dụng.** Dãy \(a_n=\frac{n^2}{2n+1}\) và \(b_n=(-1)^n n\) có cùng giới hạn \(+\infty\) không? Chứng minh bằng một ước lượng hoặc xét dấu.

    ??? question "Đối chiếu"

        **Lời giải:** \(a_n=\frac n{2+1/n}\ge n/3\) với \(n\ge1\), nên \(a_n\to+\infty\). Dãy \(b_n\) có các số hạng chẵn dương và lẻ âm với độ lớn tăng, nên không có giới hạn \(+\infty\) cũng không có giới hạn \(-\infty\).

    ??? tip "Kiểm lỗi"

        \(\lvert b_n\rvert\to+\infty\) **không đủ** kết luận \(b_n\to+\infty\). Với dãy dạng phân thức bậc khác nhau, chia cho lũy thừa thích hợp và kiểm dấu, không coi ký hiệu vô cực là số thực.

=== "Kiến thức SGK"

    ### 2.1. Giới hạn hữu hạn của dãy số

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Dãy có giới hạn bằng 0</strong><p>Dãy \((u_n)\) có <strong>giới hạn 0</strong> khi \(n\to+\infty\) nếu \(|u_n|\) có thể nhỏ hơn <strong>một số dương bé tùy ý</strong> kể từ một số hạng nào đó trở đi. Viết \(\lim_{n\to+\infty}u_n=0\). Nói chính xác: với mỗi \(\varepsilon>0\), có \(N\) sao cho mọi \(n\ge N\) đều có \(|u_n|<\varepsilon\).</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Dãy có giới hạn hữu hạn \(a\)</strong><p>Với \(a\in\mathbb R\), dãy \((u_n)\) có <strong>giới hạn là \(a\)</strong> khi \(n\to+\infty\) nếu \(\lim_{n\to+\infty}(u_n-a)=0\). Kí hiệu \(\lim_{n\to+\infty}u_n=a\) hoặc \(u_n\to a\). Như vậy điều kiện chỉ yêu cầu từ một lúc đủ muộn các số hạng sát \(a\); không yêu cầu có số hạng bằng \(a\).</p></div>

    **Những giới hạn cơ bản SGK:** Với \(k\) nguyên dương, \(\lim 1/n^k=0\); với \(|q|<1\), \(\lim q^n=0\). Dãy hằng \(u_n=c\) có giới hạn \(c\). Nếu \(|u_n|\le v_n\) và \(v_n\to0\) với \(v_n\ge0\), thì \(u_n\to0\) (định lí kẹp trong dạng SGK dùng).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B15-01_R01.svg" alt="Hình các điểm 1 trên n dần tiến tới 0"><figcaption><strong>Tra hình:</strong> \(\frac1n\to0\) vì với mỗi khoảng cách nhỏ \(\varepsilon\) tới 0 có thể chọn \(n\) đủ lớn; không có số hạng cuối cùng cần bằng 0.</figcaption></figure>

    **Phân biệt:** Dãy \((-1)^n\) không có giới hạn hữu hạn vì luân phiên \(-1,1\). Dãy \(\frac{(-1)^n}{n}\to0\) nhờ \(\left|\frac{(-1)^n}{n}\right|=1/n\to0\).

    ### 2.2. Định lí về giới hạn hữu hạn của dãy số

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Định lí — Các phép toán với giới hạn hữu hạn</strong><p>Nếu \(u_n\to a\) và \(v_n\to b\) với \(a,b\in\mathbb R\), thì \(u_n\pm v_n\to a\pm b\); \(u_nv_n\to ab\); và \(u_n/v_n\to a/b\) khi <strong>\(b\ne0\)</strong> (khi ấy \(v_n\ne0\) từ một chỉ số đủ lớn). Nếu \(u_n\ge0\) và \(u_n\to a\ge0\), thì \(\sqrt{u_n}\to\sqrt a\).</p></div>

    **Điều kiện/giới hạn:** Các phép toán trên áp dụng cho **hai giới hạn hữu hạn**. Không dùng phép chia khi giới hạn mẫu là 0. Với căn bậc hai phải bảo đảm dãy dưới căn không âm; nếu các số hạng \(u_n\ge0\) và \(u_n\to a\), thì nhất thiết \(a\ge0\).

    **Phương pháp với phân thức theo \(n\):** Chia cả tử và mẫu cho cùng lũy thừa \(n\) cao nhất thích hợp; sau khi chuẩn hóa, dùng định lí khi giới hạn mẫu khác 0. Ví dụ \(\lim\frac{5n^2-3}{2n^2+n}=\frac52\). Với biểu thức căn, chỉ lấy giới hạn căn khi dãy dưới căn xác định và không âm.

    ### 2.3. Tổng của cấp số nhân lùi vô hạn

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Cấp số nhân lùi vô hạn và tổng của nó</strong><p>Cấp số nhân vô hạn có số hạng đầu \(u_1\) và công bội \(q\) thỏa <strong>\(|q|<1\)</strong> được gọi là <strong>cấp số nhân lùi vô hạn</strong>. Tổng vô hạn của cấp số nhân ấy là <strong>giới hạn của dãy tổng riêng</strong> \(S_n=u_1+u_1q+\cdots+u_1q^{n-1}\), chứ không phải phép cộng đến một số hạng cuối cùng.</p></div>

    <div class="thpt-r4-key-formula" role="note"><strong>Công thức — Tổng cấp số nhân lùi vô hạn</strong><p>Với \(|q|<1\): \(\displaystyle S_n=\frac{u_1(1-q^n)}{1-q}\), và \(\displaystyle S=\lim_{n\to+\infty}S_n=\frac{u_1}{1-q}\).</p><p>Nếu \(|q|\ge1\), <strong>không dùng công thức</strong> tổng vô hạn này; giới hạn tổng riêng phải được xem xét riêng.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B15_GEOMETRIC_PARTIAL_SUMS_AUTHORING_20261123.svg" alt="Tổng riêng của cấp số nhân công bội một phần hai tăng và tiến tới 2"><figcaption><strong>Tra hình:</strong> với \(u_1=1,q=\frac12\), \(S_n=2(1-2^{-n})\to2\). Đây là giới hạn của **tổng riêng**, không phải giới hạn của các số hạng \(u_n\), vốn bằng 0.</figcaption></figure>

    **Cách kiểm hợp lí:** Với \(u_1>0\), \(0<q<1\), mọi tổng riêng dương tăng dần và nhỏ hơn \(S\). Nếu \(q<0\) nhưng \(|q|<1\), các tổng riêng có thể luân phiên quanh \(S\), dù vẫn hội tụ về \(S\).

    ### 2.4. Giới hạn vô cực của dãy số

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Giới hạn \(+\infty\) và \(-\infty\)</strong><p>Dãy \((u_n)\) có <strong>giới hạn \(+\infty\)</strong> khi từ một số hạng nào đó trở đi, \(u_n\) lớn hơn <strong>mọi mốc dương</strong> cho trước; kí hiệu \(u_n\to+\infty\). Dãy có <strong>giới hạn \(-\infty\)</strong> nếu từ một lúc đủ muộn \(u_n\) nhỏ hơn <strong>mọi mốc âm có độ lớn tùy ý</strong>, tức với mọi \(M>0\) có \(u_n<-M\) kể từ một chỉ số đủ lớn.</p></div>

    **Giới hạn cơ bản SGK:** \(n^k\to+\infty\) với số nguyên dương \(k\), \(q^n\to+\infty\) khi \(q>1\); \(-n^k\to-\infty\). Vô cực không phải một số thực.

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Một số giới hạn vô cực và điều kiện dấu</strong><p>Nếu \(u_n\to+\infty\), \(v_n\to b\in\mathbb R\) thì \(u_n+v_n\to+\infty\). Nếu thêm \(b>0\), \(u_nv_n\to+\infty\); nếu \(b<0\), \(u_nv_n\to-\infty\). Với \(b=0\), <strong>không thể suy ngay</strong> giới hạn tích chỉ từ hai giới hạn đó. Các trường hợp \(\infty-\infty\), \(0\cdot\infty\), \(\infty/\infty\) là dạng cần biến đổi hoặc xét riêng.</p></div>

    **Lí do chọn phương pháp:** Với \(u_n=\frac{n^2}{2n+1}=\frac n{2+1/n}\), mẫu chuẩn hóa dương và tiến về 2, nên \(u_n\to+\infty\). Cũng có thể kẹp: với \(n\ge1\), \(n/3\le u_n<n/2\). Việc thấy bậc tử lớn hơn bậc mẫu chỉ là dự đoán; cần kiểm cả **dấu của mẫu**.

    **Không nhầm:** \((-1)^n n\) có độ lớn tăng vô hạn nhưng **không** có giới hạn \(+\infty\) hay \(-\infty\) vì dấu đổi qua lại. Không lấy \(\infty\) như số để thay vào biểu thức.

=== "Ví dụ"

    ### 3.1. Chứng minh giới hạn 0, rồi chuyển sang giới hạn hữu hạn

    **Đề bài.** Xét \(u_n=1/n^2\) và \(v_n=5+2/n^2\) với \(n\ge1\). Hãy tìm giới hạn của hai dãy, giải thích vì sao dãy thứ hai có giới hạn 5.

    **Phân tích:** Không cần tìm “số hạng cuối”. Với \(u_n\), khoảng cách đến 0 là \(1/n^2\). Với \(v_n\), xét hiệu \(v_n-5\) để dùng định nghĩa giới hạn hữu hạn.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> Vì \(n^2\) tăng không bị chặn, \(1/n^2\to0\). Nếu cần độ chính xác \(\varepsilon>0\), chọn \(N>1/\sqrt\varepsilon\); khi \(n\ge N\), \(1/n^2<\varepsilon\). Mặt khác \(|v_n-5|=2/n^2\to0\), nên \(v_n\to5\).</p></div>

    **Kiểm lại:** \(u_n>0\) với mọi \(n\); \(v_n>5\) với mọi \(n\). Cả hai vẫn có giới hạn dù không hề bằng giá trị giới hạn ở một số hạng hữu hạn.

    ### 3.2. Đổi dấu nhưng vẫn có thể có giới hạn

    **Đề bài.** So sánh hai dãy \(a_n=(-1)^n/n\) và \(b_n=(-1)^n\). Dãy nào có giới hạn hữu hạn?

    **Phân tích:** Khi có dấu luân phiên, kiểm độ lớn. Đừng đồng nhất “thay đổi dấu” với “không có giới hạn”.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> \(|a_n|=1/n\to0\), do đó \(a_n\to0\). Trong khi đó \(b_{2k}=1\), \(b_{2k+1}=-1\) với mọi \(k\) tự nhiên, nên hai nhóm số hạng chẵn và lẻ không tiến đến một giá trị chung; \(b_n\) không có giới hạn hữu hạn.</p></div>

    **Kiểm lại:** Mỗi dãy đều đổi dấu. Chỉ dãy \(a_n\) có độ lớn tiến về 0, bảo đảm mọi số hạng về sau nằm gần 0.

    ### 3.3. Chọn cùng bậc để chia phân thức

    **Đề bài.** Tính \(\lim\limits_{n\to+\infty}\dfrac{5n^2+3n}{2n^2-1}\).

    **Phân tích:** Tử và mẫu cùng bậc 2, nên chia cả hai cho \(n^2\). Phải kiểm **giới hạn mẫu sau chia khác 0** rồi mới dùng định lí thương.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> \(\dfrac{5n^2+3n}{2n^2-1}=\dfrac{5+3/n}{2-1/n^2}\). Khi \(n\to+\infty\), tử tiến đến 5, mẫu tiến đến 2 khác 0. Vậy giới hạn là \(5/2\).</p></div>

    **Kiểm lại:** Mẫu gốc \(2n^2-1>0\) khi \(n\ge1\), nên biểu thức xác định. Không thế \(n=\infty\) để nhận \(\infty/\infty\).

    ### 3.4. Giới hạn của căn bậc hai

    **Đề bài.** Tính \(\lim\limits_{n\to+\infty}\sqrt{\dfrac{n+1}{4n+5}}\).

    **Phân tích:** Trước khi lấy căn giới hạn, kiểm biểu thức dưới căn không âm. Chia cả tử/mẫu bên trong cho \(n\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> Với \(n\ge1\), \((n+1)/(4n+5)>0\). Ta có \(\dfrac{n+1}{4n+5}=\dfrac{1+1/n}{4+5/n}\to1/4\). Theo định lí giới hạn căn bậc hai của dãy không âm, \(\sqrt{\dfrac{n+1}{4n+5}}\to\sqrt{1/4}=1/2\).</p></div>

    **Kiểm lại:** Dãy dưới căn dương và giới hạn \(1/4\ge0\); căn kết quả là \(1/2>0\), không lấy giá trị âm.

    ### 3.5. Tổng cấp số nhân lùi vô hạn với công bội dương

    **Đề bài.** Tính \(T=8+4+2+1+\cdots\); viết tổng \(n\) số hạng đầu và giải thích vì sao tổng vô hạn tồn tại.

    **Phân tích:** Xác định \(u_1=8\), \(q=1/2\), kiểm \(|q|<1\), rồi lấy giới hạn **dãy tổng riêng**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> Đây là cấp số nhân lùi vô hạn vì \(|q|=1/2<1\). Tổng \(n\) số hạng đầu là \(S_n=8(1-(1/2)^n)/(1-1/2)=16(1-2^{-n})\). Do \(2^{-n}\to0\), nên \(T=\lim S_n=16\).</p></div>

    **Kiểm lại:** Với \(n=3\), tổng \(8+4+2=14\), khớp \(16(1-1/8)=14\). Tổng riêng luôn nhỏ hơn 16 và tiến dần đến 16.

    ### 3.6. Công bội âm vẫn có thể hội tụ

    **Đề bài.** Tính \(T=6-3+\dfrac32-\dfrac34+\cdots\). Các tổng riêng có luôn tăng không?

    **Phân tích:** Công bội \(q=-1/2\) có giá trị tuyệt đối nhỏ hơn 1, nên **công thức tổng vô hạn vẫn dùng được**, nhưng dấu các số hạng luân phiên làm tổng riêng không đơn điệu.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> \(u_1=6\), \(q=-1/2\), \(|q|<1\), nên \(T=6/(1-(-1/2))=6/(3/2)=4\). Ba tổng riêng đầu là \(S_1=6\), \(S_2=3\), \(S_3=9/2=4{,}5\), lần lượt nằm trên, dưới, trên 4. Chúng không tăng đơn điệu nhưng tiến đến 4.</p></div>

    **Kiểm lại:** Không nhầm \(q=-1/2\) với \(q=+1/2\); nếu thay nhầm dấu sẽ ra 12 thay vì 4.

    ### 3.7. Chứng minh giới hạn dương vô cực bằng chặn dưới

    **Đề bài.** Chứng minh \(\lim\limits_{n\to+\infty}\dfrac{n^2}{2n+1}=+\infty\).

    **Phân tích:** Chia tử, mẫu cho \(n\) để thấy phần tăng theo \(n\); sau đó dùng một chặn dưới tăng không bị chặn nhằm giải thích đúng định nghĩa \(+\infty\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> Với \(n\ge1\), \(\dfrac{n^2}{2n+1}=\dfrac{n}{2+1/n}\ge\dfrac n3\). Với mỗi \(M>0\), chọn \(N>3M\); mọi \(n\ge N\) đều có \(\dfrac{n^2}{2n+1}\ge n/3>M\). Vì vậy giới hạn bằng \(+\infty\).</p></div>

    **Kiểm lại:** Mẫu \(2n+1>0\), nên phép so sánh đúng hướng. Kí hiệu \(+\infty\) không phải số để làm phép chia.

    ### 3.8. Tăng trưởng và giới hạn vô cực của mô hình vi khuẩn

    **Đề bài.** Một quần thể ban đầu có 50 vi khuẩn, cứ sau 4 giờ số lượng gấp đôi. Giả sử quy luật kéo dài, sau bao nhiêu chu kì số lượng lần đầu vượt 10 000? Dãy số lượng có giới hạn nào khi số chu kì tăng không bị chặn?

    **Phân tích:** Sau \(n\) chu kì, \(u_n=50\cdot2^n\) (với \(n=0\) là ban đầu). Kiểm hai chu kì liên tiếp để tìm thời điểm **đầu tiên** vượt ngưỡng, rồi phân biệt mô hình với thực tế.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> Điều kiện \(50\cdot2^n>10\,000\) tương đương \(2^n>200\). \(2^7=128<200\), \(2^8=256>200\), nên lần đầu vượt 10 000 ở **chu kì thứ 8**, tức sau 32 giờ. Vì \(2>1\), \(50\cdot2^n\to+\infty\) trong mô hình lí tưởng.</p></div>

    **Kiểm lại:** Sau 7 chu kì có 6 400; sau 8 chu kì có 12 800. Mô hình thực có thể thiếu dinh dưỡng và không nhân đôi vô hạn — đây là giới hạn **của giả thiết toán học**.

=== "Lỗi thường gặp"

    ### 4.1. Đồng nhất giới hạn với số hạng cuối cùng

    **Dấu hiệu:** Nói \(1/n\) không thể có giới hạn 0 vì không có số hạng nào bằng 0.

    **Vì sao sai:** Giới hạn mô tả mọi số hạng đủ muộn tiến gần 0 tùy ý, không yêu cầu dãy có số hạng cuối.

    **Cách sửa:** Kiểm \(|u_n-a|\) so với một sai số dương tùy nhỏ và xác nhận **tất cả** số hạng sau mốc đều thỏa.

    ### 4.2. Thấy dãy đổi dấu thì kết luận không có giới hạn

    **Dấu hiệu:** Đánh đồng \((-1)^n\) với \((-1)^n/n\).

    **Vì sao sai:** Dãy thứ nhất dao động ở \(\pm1\); dãy thứ hai có độ lớn \(1/n\to0\).

    **Cách sửa:** Xét giá trị tuyệt đối hoặc hai nhóm chỉ số chẵn/lẻ để phân biệt dãy hội tụ và dao động không hội tụ.

    ### 4.3. Chia hai giới hạn khi giới hạn mẫu bằng 0

    **Dấu hiệu:** Thay trực tiếp \(n\to\infty\) vào phân thức rồi thao tác với \(0/0\) hoặc \(\infty/\infty\).

    **Vì sao sai:** Định lí thương của hai giới hạn hữu hạn yêu cầu giới hạn mẫu khác 0. Hai dạng trên **không xác định** bằng phép thay số.

    **Cách sửa:** Chia đúng lũy thừa \(n\), quy đồng, nhân liên hợp hoặc tìm chặn tùy dạng; sau biến đổi mới kiểm mẫu giới hạn khác 0.

    ### 4.4. Dùng tổng cấp số nhân vô hạn mà quên \(|q|<1\)

    **Dấu hiệu:** Với \(2+2+2+\cdots\) hoặc \(1+2+4+\cdots\), vẫn dùng \(u_1/(1-q)\).

    **Vì sao sai:** Khi \(q=1\) hoặc \(q=2\), \(q^n\) không tiến về 0; tổng riêng không hội tụ hữu hạn.

    **Cách sửa:** Ghi \(u_1,q,|q|\) trước, chỉ dùng công thức nếu \(|q|<1\). Phân biệt **số hạng tiến về 0** và **tổng riêng tiến về một tổng hữu hạn**.

    ### 4.5. Quên dấu âm của công bội

    **Dấu hiệu:** Dùng \(q=1/2\) cho tổng \(6-3+\frac32-\frac34+\cdots\) và tính thành 12.

    **Vì sao sai:** Công bội thật bằng \(-1/2\), nên \(1-q=3/2\), tổng là 4.

    **Cách sửa:** Tính \(q=u_2/u_1\) có dấu rồi dùng \(S=u_1/(1-q)\); kiểm ba tổng riêng đầu với kết quả dự đoán.

    ### 4.6. Coi vô cực là một số hoặc bỏ điều kiện dấu

    **Dấu hiệu:** Viết \(\infty/\infty=1\), hoặc từ \(|u_n|\to+\infty\) tự kết luận \(u_n\to+\infty\).

    **Vì sao sai:** \(+\infty,-\infty\) là cách mô tả vượt mọi ngưỡng, không phải số thực. Dãy \((-1)^nn\) đổi dấu nên không tiến về một trong hai phía.

    **Cách sửa:** Dùng bất đẳng thức, so sánh hoặc chuẩn hóa phân thức, kiểm **dấu từ một chỉ số đủ lớn**, rồi mới kết luận chiều của giới hạn.

    **Học tiếp:** [Core và Luyện tập Bài 15](luyen-tap.md) · [Tự luận Chương V](../../../thu-vien/tu-luan-g11-chuong-v.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn đối chiếu văn bản: SGK Toán 11 Kết nối tri thức với cuộc sống, tập một, Bài 15 “Giới hạn của dãy số”, trang in 104–110, tham chiếu bản đọc số hóa SGKVN và mục tiêu nội dung SGK. Bốn mục gốc: Giới hạn hữu hạn của dãy số; Định lí về giới hạn hữu hạn của dãy số; Tổng của cấp số nhân lùi vô hạn; Giới hạn vô cực của dãy số. Hình \(1/n\) dùng SVG canonical đã có; hình tổng riêng cấp số nhân là SVG bổ sung của AUTHORING, cả hai dùng chung giữa hai tab. Chưa kiểm trực quan đầy đủ các trang SGK in và chưa có verdict NotebookLM cho snapshot này.</p>
~~~~

---

## B16 — Giới hạn của hàm số
CANONICAL_PATH: `docs/thpt-preview/sgk/lop-11/chuong-v/bai-16.md`
SOURCE_HEAD: `f8bb7b9f35d05d2674b40047a1fd73b002d6debd`
SOURCE_BLOB: `df4d5536c079d4825222c4320e8d3e443aa88ae5`

~~~~markdown
# Bài 16. Giới hạn của hàm số

<style>
/* B16-only semantic Golden 3+1; không thay CSS/JS hoặc Golden toàn site. */
.md-typeset:has([data-g11-b16-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border-color:#a9dccc;border-left-color:#087d69;color:#174137}
.md-typeset:has([data-g11-b16-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border-color:#a5bee5;border-left-color:#4879c2;color:#193d66}
.md-typeset:has([data-g11-b16-knowledge-only]) .thpt-r4-key-formula {background:transparent;color:inherit;border:1px solid #8c9ab0;border-left:4px solid #64748b;border-radius:10px;padding:.75rem 1rem;margin:.65rem 0 1rem}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b16-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b16-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b16-knowledge-only]) .thpt-r4-key-formula {background:transparent;color:inherit;border-color:#8c9ab0;border-left-color:#bdc8d8}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b16-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG V · SGK KẾT NỐI TRI THỨC</p>
<p class="thpt-r4-lead">Không cần biết giá trị ngay tại điểm vẫn có thể xét giới hạn; phải phân biệt tiến từ trái/phải, tiến tới vô cực và tiến đến giá trị vô cực.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương V</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Ở Bài 15, ta đã học một dãy số \(u_n\) tiến gần một số khi chỉ số \(n\) tăng mãi. Bây giờ em sẽ cho **biến thực \(x\)** tiến gần một vị trí hoặc tiến mãi về hai phía trục số, rồi quan sát **giá trị hàm \(f(x)\)**. Có ba câu hỏi khác nhau theo SGK: khi \(x\) gần một điểm thì \(f(x)\) có thể gần một số hữu hạn không; khi \(x\) rất lớn hoặc rất âm thì sao; và khi \(x\) gần một điểm mà \(f(x)\) lớn không bị chặn thì phải phát biểu thế nào?

    ### 1.1. Giới hạn hữu hạn của hàm số tại một điểm

    Thử tính \(f(x)=\frac{x^2-4}{x-2}\) tại \(x=2\): phép chia **không xác định**. Nhưng với \(x\ne2\), ta phân tích tử và rút gọn \(f(x)=x+2\). Lấy các giá trị gần 2, chẳng hạn \(x=1{,}9;1{,}99;2{,}01;2{,}1\), giá trị tương ứng là \(3{,}9;3{,}99;4{,}01;4{,}1\), tiến gần **4** từ cả hai phía.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B16-01_R01.svg" alt="Đồ thị y bằng x cộng 2 có lỗ tại điểm hai bốn"><figcaption><strong>Hướng dẫn đọc:</strong> chấm tròn rỗng ở \((2,4)\) nói rằng **hàm gốc không xác định tại \(x=2\)**; hai nhánh xanh tiến gần cao độ 4 khi \(x\to2\). Giới hạn bằng 4 không có nghĩa \(f(2)=4\).</figcaption></figure>

    Đây là điểm cốt lõi: **giới hạn xét ở gần \(x_0\)** chứ không bắt buộc biết hàm số **ngay tại \(x_0\)**. SGK định nghĩa qua dãy: nếu mọi dãy \((x_n)\) trong miền xác định, \(x_n\ne x_0\), \(x_n\to x_0\) đều cho \(f(x_n)\to L\) thì \(f(x)\to L\) khi \(x\to x_0\). Không thể chỉ thử **một** dãy rồi coi đã chứng minh toàn bộ, vì dãy khác có thể cho kết quả khác.

    **Hai phía có thể không giống nhau.** Hãy xét một quy tắc tính phí: \(g(x)=1\) khi \(x<0\), \(g(x)=3\) khi \(x\ge0\). Khi tiến về 0 từ bên trái, mọi giá trị hàm bằng 1; từ bên phải bằng 3. Vậy giới hạn trái là 1, giới hạn phải là 3; **không có giới hạn hai phía** ở 0, dù \(g(0)=3\) hoàn toàn được định nghĩa.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B16_ONE_SIDED_JUMP_AUTHORING_20261123.svg" alt="Hàm số bằng một bên trái của 0 và bằng ba bên phải của 0 nên giới hạn hai phía khác nhau"><figcaption><strong>Hướng dẫn đọc:</strong> vòng tròn **rỗng** ở \((0,1)\) là phía trái không lấy giá trị tại 0; chấm **đặc** ở \((0,3)\) cho giá trị \(g(0)=3\). Hai nhánh tiến về hai độ cao khác nhau, nên không thể có một giới hạn hữu hạn hai phía.</figcaption></figure>

    Khi miền xác định cho phép tiến lại gần từ **cả hai phía**, điều kiện \(\lim_{x\to x_0^-}f(x)=\lim_{x\to x_0^+}f(x)=L\) là **cần và đủ** để giới hạn hai phía bằng \(L\). Nếu hàm chỉ xác định về một phía gần đầu mút, ta dùng khái niệm giới hạn **một phía**, không tự phát biểu giới hạn hai phía theo giả thiết thiếu miền xác định.

    **Vận dụng.** Với \(h(x)=\frac{x^2-9}{x-3}\) khi \(x\ne3\), tính \(\lim_{x\to3}h(x)\). Hàm có giá trị tại \(x=3\) không?

    ??? question "Đối chiếu"

        **Lời giải:** Với \(x\ne3\), \(h(x)=\frac{(x-3)(x+3)}{x-3}=x+3\), do đó \(\lim_{x\to3}h(x)=6\). Theo biểu thức ban đầu, \(h(3)\) **không xác định**. Giới hạn tồn tại vì chỉ xét các \(x\) khác 3 nhưng gần 3.

    ??? tip "Kiểm lỗi"

        Không thể viết \(h(3)=6\) chỉ vì giới hạn bằng 6. Dấu rút gọn \(x-3\) hợp lệ khi \(x\ne3\); chính điều kiện loại điểm đó cho phép tính giới hạn mà không thay đổi giá trị hàm ngay tại điểm.

    ### 1.2. Giới hạn hữu hạn của hàm số tại vô cực

    Tại điểm \(x_0\), ta thu nhỏ khoảng cách \(|x-x_0|\). Nhưng khi \(x\to+\infty\), ta không tới gần một số thực nào cả: \(x\) lớn hơn mọi mốc cho trước. Tương tự \(x\to-\infty\), \(x\) nhỏ hơn mọi mốc âm. Câu hỏi về **giới hạn hữu hạn** vẫn có nghĩa: chẳng hạn \(f(x)=2+\frac1x\) tiến gần 2 cả khi \(x\) rất lớn dương lẫn rất lớn âm.

    Với phân thức \(f(x)=\frac{3x^2+1}{x^2+2}\), cả tử và mẫu đều bậc hai. Chia cả hai cho \(x^2\) (với \(x\ne0\)) để được
    \[
    f(x)=\frac{3+1/x^2}{1+2/x^2}\longrightarrow3
    \]
    khi \(x\to+\infty\) **hoặc** \(x\to-\infty\). Mẫu chuẩn hóa tiến đến 1 khác 0; đây là lí do dùng được phép chia giới hạn hữu hạn.

    **Dấu của căn là điểm khó nhất khi \(x\to-\infty\).** Với \(\sqrt{x^2+1}/x\), ta phải viết \(\sqrt{x^2+1}=|x|\sqrt{1+1/x^2}\). Khi \(x\to+\infty\), \(|x|=x\) nên thương tiến đến \(1\). Khi \(x\to-\infty\), \(|x|=-x\) nên thương tiến đến \(-1\). Hai giới hạn **khác nhau**, dù biểu thức có cùng \(x^2\) trong căn.

    **Vận dụng.** Tính hai giới hạn \(\lim_{x\to+\infty}\frac{\sqrt{x^2+4}}x\) và \(\lim_{x\to-\infty}\frac{\sqrt{x^2+4}}x\). Vì sao không thể viết \(\sqrt{x^2}=x\) cho cả hai?

    ??? question "Đối chiếu"

        **Lời giải:** \(\frac{\sqrt{x^2+4}}x=\frac{|x|}{x}\sqrt{1+\frac4{x^2}}\). Với \(x\to+\infty\), \(|x|/x=1\), giới hạn là \(1\). Với \(x\to-\infty\), \(|x|/x=-1\), giới hạn là \(-1\). Vì \(\sqrt{x^2}=|x|\), không phải luôn bằng \(x\).

    ??? tip "Kiểm lỗi"

        Nếu cả hai kết quả đều là \(1\), hãy kiểm lại dấu của \(x\) ở phía âm. Không thể đem \(|x|\) ra khỏi căn như \(x\) khi \(x<0\).

    ### 1.3. Giới hạn vô cực của hàm số tại một điểm

    Đừng nhầm hai câu: **“\(x\to+\infty\)”** nói về vị trí đầu vào, còn **“\(f(x)\to+\infty\)”** nói về giá trị đầu ra tăng không bị chặn. Chẳng hạn khi \(x\to1\), các giá trị \(x\) vẫn gần 1, nhưng \(f(x)=\frac1{(x-1)^2}\) có mẫu dương rất nhỏ, nên **\(f(x)\to+\infty\)** từ cả hai phía.

    Với \(g(x)=1/(x-1)\), mẫu tiến đến 0 nhưng **dấu khác nhau**. Khi \(x\to1^+\), \(x-1>0\) và nhỏ, nên \(g(x)\to+\infty\); khi \(x\to1^-\), \(x-1<0\), nên \(g(x)\to-\infty\). Chỉ đọc “mẫu bằng 0” chưa cho biết là \(+\infty\) hay \(-\infty\). Trong trường hợp này không thể nói giới hạn hai phía là \(+\infty\) hay \(-\infty\).

    Khi \(f(x)\to L\) hữu hạn khác 0 và \(g(x)\to0\), giới hạn thương \(f(x)/g(x)\) phụ thuộc **dấu của tử và mẫu ở gần điểm đang xét**. Nếu tử dương và mẫu tiến về \(0^+\), thương có thể tiến \(+\infty\); nếu mẫu tiến về \(0^-\), thương tiến \(-\infty\). Nếu cả tử và mẫu đều về 0, đó là dạng \(0/0\) chưa kết luận: hãy phân tích nhân tử, nhân liên hợp hoặc biến đổi hợp lệ trước.

    **Một tình huống thực tiễn từ SGK:** Theo mô hình thuyết tương đối, khối lượng phụ thuộc vận tốc \(v\) của vật theo \(m(v)=\frac{m_0}{\sqrt{1-v^2/c^2}}\) với \(m_0>0\), \(c>0\), \(0\le v<c\). Khi \(v\to c^-\), mẫu dương và tiến về \(0^+\); vì vậy \(m(v)\to+\infty\) **trong mô hình này**. Không xét \(v>c\) vì không thuộc miền xác định thực của công thức.

    **Vận dụng.** Tìm \(\lim_{x\to2^+}\frac1{x-2}\) và \(\lim_{x\to2^-}\frac1{x-2}\). Có giới hạn hai phía bằng \(+\infty\) không?

    ??? question "Đối chiếu"

        **Lời giải:** Khi \(x\to2^+\), mẫu \(x-2\to0^+\), thương \(\to+\infty\). Khi \(x\to2^-\), mẫu \(\to0^-\), thương \(\to-\infty\). Hai phía không cùng tiến tới \(+\infty\) nên **không** có giới hạn hai phía bằng \(+\infty\) (cũng không bằng một số hữu hạn).

    ??? tip "Kiểm lỗi"

        Muốn dùng bảng dấu, hãy xác nhận rõ miền \(x<2\) hay \(x>2\). Không viết “\(1/0=\infty\)”; phân số không được tính tại điểm mẫu bằng 0, còn **giới hạn** xét các điểm ở gần.

=== "Kiến thức SGK"

    ### 2.1. Giới hạn hữu hạn của hàm số tại một điểm

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Giới hạn hữu hạn tại \(x_0\)</strong><p>Giả sử hàm \(f\) xác định trên khoảng chứa \(x_0\), có thể trừ chính \(x_0\). Ta nói \(\lim_{x\to x_0}f(x)=L\) với \(L\in\mathbb R\) nếu với <strong>mọi</strong> dãy \((x_n)\) thuộc miền xét, \(x_n\ne x_0\), \(x_n\to x_0\), ta có \(f(x_n)\to L\). Giới hạn chỉ phụ thuộc giá trị hàm <strong>gần</strong> \(x_0\), không đòi \(f(x_0)\) tồn tại.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Định lí — Phép toán trên các giới hạn hữu hạn</strong><p>Nếu \(\lim_{x\to x_0}f(x)=L\) và \(\lim_{x\to x_0}g(x)=M\) đều hữu hạn, giới hạn của \(f\pm g\), \(fg\) lần lượt là \(L\pm M\), \(LM\). Giới hạn của \(f/g\) bằng \(L/M\) khi <strong>\(M\ne0\)</strong> và thương được xác định gần \(x_0\). Nếu \(f(x)\ge0\) gần \(x_0\) và \(L\ge0\), giới hạn \(\sqrt{f(x)}=\sqrt L\).</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Giới hạn hữu hạn một phía</strong><p>\(\lim_{x\to x_0^-}f(x)=L_-\) là giới hạn khi \(x<x_0\) tiến tới \(x_0\); \(\lim_{x\to x_0^+}f(x)=L_+\) là giới hạn khi \(x>x_0\) tiến tới \(x_0\), đều xét các giá trị trong miền xác định. Nếu có miền xét đủ gần từ cả hai phía, <strong>giới hạn hữu hạn hai phía bằng \(L\)</strong> khi và chỉ khi <strong>\(L_-=L_+=L\)</strong>.</p></div>

    **Ghi nhớ cách giải:** Thay trực tiếp nếu các phép toán hợp lệ; khi được \(0/0\), tìm nhân tử chung hoặc nhân liên hợp **với \(x\ne x_0\)** rồi mới lấy giới hạn. Phép rút gọn không cho phép tự gán giá trị cho hàm ở đúng điểm bị loại khỏi miền xác định.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B16-01_R01.svg" alt="Đồ thị của hàm có giới hạn tại một điểm bị khuyết"><figcaption><strong>Tra hình:</strong> \(f(x)=\frac{x^2-4}{x-2}\) với \(x\ne2\) có giới hạn \(4\) khi \(x\to2\); vòng rỗng tại \((2,4)\) nhắc \(f(2)\) không xác định.</figcaption></figure>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B16_ONE_SIDED_JUMP_AUTHORING_20261123.svg" alt="Đồ thị bước nhảy có giới hạn trái một và giới hạn phải ba tại không"><figcaption><strong>Tra hình:</strong> giới hạn trái tại 0 bằng 1, phải bằng 3, nên **không có giới hạn hữu hạn hai phía**. Hàm tại \(0\) bằng 3 không thay kết luận đó.</figcaption></figure>

    ### 2.2. Giới hạn hữu hạn của hàm số tại vô cực

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Giới hạn hữu hạn tại \(+\infty\) và \(-\infty\)</strong><p>Ta nói \(\lim_{x\to+\infty}f(x)=L\) khi với <strong>mọi</strong> dãy \(x_n\to+\infty\) thuộc miền xác định đủ xa, đều có \(f(x_n)\to L\). Tương tự, \(\lim_{x\to-\infty}f(x)=L\) khi điều ấy đúng với mọi dãy \(x_n\to-\infty\) thuộc miền xác định đủ xa về phía âm. \(L\) là số thực, còn \(x\) đang tiến ra vô hạn.</p></div>

    **Giới hạn cơ bản:** \(1/x^k\to0\) khi \(x\to+\infty\) hoặc \(-\infty\) với \(k\) nguyên dương. Dùng các phép toán giới hạn hữu hạn khi giới hạn mẫu khác 0. Với căn bậc hai cần nhớ \(\sqrt{x^2}=|x|\): \(|x|=x\) khi \(x>0\), và \(|x|=-x\) khi \(x<0\).

    **Ví dụ:** \(\lim_{x\to\pm\infty}\frac{3x^2+1}{x^2+2}=3\); nhưng \(\lim_{x\to+\infty}\frac{\sqrt{x^2+1}}x=1\) và \(\lim_{x\to-\infty}\frac{\sqrt{x^2+1}}x=-1\).

    ### 2.3. Giới hạn vô cực của hàm số tại một điểm

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Giới hạn vô cực tại \(x_0\)</strong><p>\(\lim_{x\to x_0}f(x)=+\infty\) nếu với mọi dãy \(x_n\to x_0\), \(x_n\ne x_0\), trong miền xác định, ta có \(f(x_n)\to+\infty\). Giới hạn \(-\infty\) được định nghĩa tương tự khi mọi dãy giá trị hàm tiến tới \(-\infty\). <strong>Không phải</strong> giới hạn hữu hạn là một số thực.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Giới hạn vô cực một phía</strong><p>Kí hiệu \(\lim_{x\to x_0^+}f(x)=\pm\infty\) khi \(x\) chỉ tiến tới \(x_0\) từ <strong>phía lớn hơn</strong> và giá trị hàm tiến vô cực có dấu tương ứng. Tương tự, \(\lim_{x\to x_0^-}f(x)=\pm\infty\) xét <strong>phía nhỏ hơn</strong>. Cần kiểm hai phía riêng; nếu hai giới hạn một phía không cùng chiều vô cực, không kết luận có giới hạn vô cực hai phía.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Tích và thương khi có giới hạn vô cực</strong><p>Nếu \(f(x)\to L\ne0\) hữu hạn, \(g(x)\to+\infty\) hay \(-\infty\), thì \(f(x)g(x)\) tiến đến vô cực với dấu bằng tích dấu của \(L\) và \(g(x)\). Nếu \(f(x)\to L\ne0\), \(g(x)\to0\) với <strong>dấu xác định ở phía đang xét</strong>, thì \(f(x)/g(x)\) có giới hạn vô cực với dấu theo tử và mẫu. Nếu \(f(x)\to L\) hữu hạn, \(g(x)\to\pm\infty\), thì \(f(x)/g(x)\to0\) khi thương xác định. Không dùng trực tiếp các quy tắc này cho dạng \(0/0\), \(0\cdot\infty\) hoặc \(\infty/\infty\).</p></div>

    **Tìm dấu và xác định phía:** \(1/(x-1)^2\to+\infty\) khi \(x\to1\) do mẫu dương ở cả hai bên. Ngược lại, \(1/(x-1)\to-\infty\) khi \(x\to1^-\), \(+\infty\) khi \(x\to1^+\). Trước khi kết luận hãy xét **miền xác định, phía tiếp cận và dấu**.

    **Chú ý về giới hạn vô cực tại vô cực:** Những kí hiệu như \(\lim_{x\to+\infty}x^2=+\infty\) được hiểu tương tự bằng quy tắc mọi dãy \(x_n\to+\infty\), giá trị hàm tiến \(+\infty\). Không đánh đồng “đầu vào ra vô hạn” với “đầu ra cũng phải ra vô hạn”; ví dụ \(1/x\to0\) khi \(x\to+\infty\).

=== "Ví dụ"

    ### 3.1. Giới hạn tại một lỗ của đồ thị

    **Đề bài.** Tính \(\lim_{x\to2}\frac{x^2-4}{x-2}\), đồng thời cho biết biểu thức có xác định tại \(x=2\) không.

    **Phân tích:** Thế trực tiếp cho \(0/0\), chưa phải giới hạn. Khi \(x\ne2\), phân tích hiệu hai bình phương, rút gọn trước khi lấy giới hạn.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> Với \(x\ne2\): \(\dfrac{x^2-4}{x-2}=\dfrac{(x-2)(x+2)}{x-2}=x+2\). Do đó \(\lim_{x\to2}\frac{x^2-4}{x-2}=4\). Tuy nhiên biểu thức gốc không xác định tại \(x=2\).</p></div>

    **Kiểm lại:** Thử \(x=1{,}99\) được \(3{,}99\); \(x=2{,}01\) được \(4{,}01\). Hai phía đều tiến gần 4; không viết \(f(2)=4\).

    ### 3.2. Nhân liên hợp khi gặp dạng 0/0 chứa căn

    **Đề bài.** Tính \(\lim_{x\to0}\frac{\sqrt{4+x}-2}{x}\).

    **Phân tích:** Tại \(x=0\) tử và mẫu đều 0. Nhân với biểu thức liên hợp \(\sqrt{4+x}+2\) giúp dùng hiệu hai bình phương, hợp lệ khi \(x\ne0\) và \(4+x\ge0\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> Với \(x\ne0\), \(x\) đủ gần 0 và \(4+x\ge0\): \(\dfrac{\sqrt{4+x}-2}{x}=\dfrac{(\sqrt{4+x}-2)(\sqrt{4+x}+2)}{x(\sqrt{4+x}+2)}=\dfrac1{\sqrt{4+x}+2}\). Vì mẫu mới tiến đến \(2+2=4\ne0\), giới hạn bằng \(1/4\).</p></div>

    **Kiểm lại:** Mẫu liên hợp dương ở gần \(x=0\); rút gọn chỉ dùng cho \(x\ne0\). Giới hạn không có nghĩa phân thức gốc xác định tại 0.

    ### 3.3. Giới hạn trái và phải không bằng nhau

    **Đề bài.** Cho \(g(x)=1\) nếu \(x<0\), \(g(x)=3\) nếu \(x\ge0\). Tính hai giới hạn một phía tại 0 và xét giới hạn hữu hạn hai phía.

    **Phân tích:** Mỗi phía gần 0 nằm trong một nhánh có giá trị không đổi, không phụ thuộc cách gán \(g(0)\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> Khi \(x\to0^-\), \(g(x)=1\) nên giới hạn trái bằng 1. Khi \(x\to0^+\), \(g(x)=3\) nên giới hạn phải bằng 3. Vì \(1\ne3\), không tồn tại giới hạn hữu hạn hai phía tại 0, mặc dù \(g(0)=3\).</p></div>

    **Kiểm lại:** Không lấy trung bình \((1+3)/2=2\), không kết luận giới hạn bằng giá trị \(g(0)\).

    ### 3.4. Giới hạn hữu hạn tại vô cực của phân thức

    **Đề bài.** Tính \(\lim_{x\to+\infty}\frac{3x^2+1}{x^2+2}\) và \(\lim_{x\to-\infty}\frac{3x^2+1}{x^2+2}\).

    **Phân tích:** Tử và mẫu cùng bậc hai nên chia cả hai cho \(x^2\) (với \(x\ne0\)). Khi \(x\) tiến vô cực cả hai phía, \(1/x^2\to0\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> \(\dfrac{3x^2+1}{x^2+2}=\dfrac{3+1/x^2}{1+2/x^2}\). Cả khi \(x\to+\infty\) và \(x\to-\infty\), tử tiến đến 3, mẫu đến 1 khác 0; do đó cả hai giới hạn đều bằng 3.</p></div>

    **Kiểm lại:** Hai giới hạn này bằng nhau vì các phần biến đổi còn lại phụ thuộc \(x^2\). Không suy điều đó cho mọi hàm số.

    ### 3.5. Lấy nhân tử khỏi căn khi \(x\to-\infty\)

    **Đề bài.** Tính hai giới hạn của \(h(x)=\sqrt{x^2+1}/x\) khi \(x\to+\infty\) và \(x\to-\infty\).

    **Phân tích:** Vì \(\sqrt{x^2}=|x|\), chỉ ở phía \(x>0\) mới được thay \(|x|/x\) bằng 1; phía \(x<0\) bằng \(-1\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> Với \(x\ne0\), \(h(x)=\dfrac{|x|}{x}\sqrt{1+1/x^2}\). Khi \(x\to+\infty\), \(|x|/x=1\) nên giới hạn là 1. Khi \(x\to-\infty\), \(|x|/x=-1\) nên giới hạn là \(-1\).</p></div>

    **Kiểm lại:** \(h(x)\) âm khi \(x<0\) và dương khi \(x>0\); giá trị giới hạn phù hợp dấu. Không ghi cả hai giới hạn là 1.

    ### 3.6. Hai phía đều đi tới dương vô cực

    **Đề bài.** Tính \(\lim_{x\to1}\frac1{(x-1)^2}\). Vì sao trường hợp này khác \(1/(x-1)\)?

    **Phân tích:** Mẫu tiến về 0 và **dương ở cả hai phía**. Với mọi ngưỡng \(M>0\), muốn thương vượt \(M\) chỉ cần \(0<|x-1|<1/\sqrt M\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> Với \(x\ne1\), \((x-1)^2>0\). Khi \(x\to1\), \((x-1)^2\to0^+\) từ hai phía, nên \(\dfrac1{(x-1)^2}\to+\infty\). Điều này đúng theo định nghĩa vì giá trị thương cuối cùng vượt bất kì ngưỡng dương nào.</p></div>

    **Kiểm lại:** Tại \(x=0{,}9\) và \(x=1{,}1\), giá trị đều là 100. Nếu bỏ bình phương, dấu ở hai phía sẽ khác.

    ### 3.7. Hai phía đi tới hai vô cực trái dấu

    **Đề bài.** Tính \(\lim_{x\to1^-}\frac1{x-1}\) và \(\lim_{x\to1^+}\frac1{x-1}\). Có giới hạn vô cực hai phía tại 1 không?

    **Phân tích:** Cùng có mẫu tiến về 0, nhưng phải tách dấu **âm ở trái** và **dương ở phải**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> Khi \(x\to1^-\), \(x-1\to0^-\), nên \(1/(x-1)\to-\infty\). Khi \(x\to1^+\), \(x-1\to0^+\), nên \(1/(x-1)\to+\infty\). Vì hai phía có chiều vô cực khác nhau, không có giới hạn hai phía bằng \(+\infty\), \(-\infty\) hay một số thực.</p></div>

    **Kiểm lại:** Với \(x=0{,}99\), kết quả \(-100\); với \(x=1{,}01\), kết quả \(100\). Không viết \(\frac10\) như một phép chia hợp lệ.

    ### 3.8. Mô hình khối lượng và giới hạn một phía

    **Đề bài.** Trong mô hình ở SGK, \(m(v)=\frac{m_0}{\sqrt{1-v^2/c^2}}\), với \(m_0>0,c>0,0\le v<c\). Tìm giới hạn \(m(v)\) khi \(v\to c^-\) và giải thích vì sao phải xét từ phía nhỏ hơn \(c\).

    **Phân tích:** Cần kiểm miền xác định và dấu của mẫu. Khi \(v<c\), \(1-v^2/c^2>0\); khi \(v\to c^-\), biểu thức trong căn dương nhưng tiến về 0.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> Với \(0\le v<c\), \(\sqrt{1-v^2/c^2}>0\). Khi \(v\to c^-\), \(v^2/c^2\to1\), nên mẫu \(\to0^+\) trong khi tử \(m_0>0\) không đổi. Theo quy tắc giới hạn của thương, \(m(v)\to+\infty\). Không xét \(v>c\) trong miền thực của mô hình này.</p></div>

    **Kiểm lại:** \(v=c\) không thuộc miền vì mẫu 0. Kết luận mô tả xu hướng **trong mô hình**, không phải phép tính \(m(c)\).

=== "Lỗi thường gặp"

    ### 4.1. Nhầm giới hạn với giá trị hàm tại điểm

    **Dấu hiệu:** Từ \(\lim_{x\to2}\frac{x^2-4}{x-2}=4\), nói \(f(2)=4\).

    **Vì sao sai:** Hàm gốc không xác định tại 2; giới hạn chỉ xét x khác 2 và tiến gần 2.

    **Cách sửa:** Ghi miền xác định trước, rút gọn khi \(x\ne2\), rồi mới lấy giới hạn.

    ### 4.2. Kết luận từ dạng 0/0 mà không biến đổi

    **Dấu hiệu:** Thế \(x=x_0\) được \(0/0\) rồi coi giới hạn bằng 0 hoặc không tồn tại.

    **Vì sao sai:** \(0/0\) chưa cho biết giới hạn; các nhân tử có thể triệt tiêu trên miền đã loại điểm.

    **Cách sửa:** Phân tích nhân tử, quy đồng hoặc nhân liên hợp **ở những điểm biểu thức xác định**, sau đó kiểm giới hạn của biểu thức tương đương.

    ### 4.3. Bỏ giới hạn một phía

    **Dấu hiệu:** Chỉ tính từ bên phải hoặc lấy \(f(x_0)\) để đoán giới hạn hai phía.

    **Vì sao sai:** Hàm bước nhảy có giới hạn trái và phải khác nhau, nên không có giới hạn hữu hạn hai phía.

    **Cách sửa:** Khi miền xác định cho phép tiến từ cả hai phía, tính cả \(\lim_{x\to x_0^-}\) và \(\lim_{x\to x_0^+}\), kiểm chúng bằng nhau rồi mới kết luận.

    ### 4.4. Thay \(\sqrt{x^2}\) bằng \(x\) ở phía âm vô cực

    **Dấu hiệu:** Tính \(\lim_{x\to-\infty}\sqrt{x^2+1}/x=1\).

    **Vì sao sai:** \(\sqrt{x^2}=|x|=-x\) khi \(x<0\).

    **Cách sửa:** Viết \(\sqrt{x^2+1}=|x|\sqrt{1+1/x^2}\) và xét dấu \(|x|/x\) ở từng phía.

    ### 4.5. Bỏ dấu của mẫu khi nó tiến về 0

    **Dấu hiệu:** Từ \(x-1\to0\) kết luận \(1/(x-1)\to+\infty\) ở cả hai phía.

    **Vì sao sai:** Mẫu âm bên trái và dương bên phải; giới hạn vô cực vì thế trái dấu.

    **Cách sửa:** Lập bảng dấu tối thiểu theo \(x<x_0\) và \(x>x_0\); chỉ kết luận \(+\infty\), \(-\infty\) sau khi đã xác nhận dấu.

    ### 4.6. Dùng quy tắc giới hạn hữu hạn cho dạng vô cực

    **Dấu hiệu:** Viết \(\infty/\infty=1\), \(1/0=+\infty\) mà không phân tích miền/dấu, hoặc tưởng \(x\to\infty\) luôn kéo \(f(x)\to\infty\).

    **Vì sao sai:** Vô cực không phải số thực, và giới hạn thương còn phụ thuộc bậc, dấu, cách tiến gần. Ví dụ \(1/x\to0\) khi \(x\to+\infty\).

    **Cách sửa:** Xác định rõ **đầu vào** tiến về đâu, **giá trị hàm** đang được hỏi, kiểm dấu và biến đổi tương đương trước khi dùng quy tắc thích hợp.

    **Học tiếp:** [Core và Luyện tập Bài 16](luyen-tap.md) · [Tự luận Chương V](../../../thu-vien/tu-luan-g11-chuong-v.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn văn bản SGK Toán 11 Kết nối tri thức với cuộc sống, tập một, Bài 16 “Giới hạn của hàm số”, trang in 111–118, đối chiếu bản đọc số hóa SGKVN và phát biểu bài học. Ba mục gốc: Giới hạn hữu hạn của hàm số tại một điểm; Giới hạn hữu hạn của hàm số tại vô cực; Giới hạn vô cực của hàm số tại một điểm. Hình lỗ tại \((2,4)\) là SVG canonical đã có, hình bước nhảy một phía là SVG AUTHORING mới; hai nguồn hình được sử dụng ở cả hai tab. Chưa kiểm trực quan đủ trang SGK in, chưa nhận NotebookLM review cho snapshot này. Chỉ nâng cấp trang Kiến thức, không thay Core/Tự kiểm tra.</p>
~~~~

---

## B17 — Hàm số liên tục
CANONICAL_PATH: `docs/thpt-preview/sgk/lop-11/chuong-v/bai-17.md`
SOURCE_HEAD: `da585f0e68a9f63538dc69ef71e0aee4fe2efc75`
SOURCE_BLOB: `22e4e8c777a989ad00e72af94ea3e2eae0690ec9`

~~~~markdown
# Bài 17. Hàm số liên tục

<style>
/* Scoped B17 Golden 3+1; không thay theme, app, CSS hoặc JS chung. */
.md-typeset:has([data-g11-b17-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border-color:#a9dccc;border-left-color:#087d69;color:#174137}
.md-typeset:has([data-g11-b17-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border-color:#a5bee5;border-left-color:#4879c2;color:#193d66}
.md-typeset:has([data-g11-b17-knowledge-only]) .thpt-r4-key-formula {background:transparent;color:inherit;border:1px solid #8c9ab0;border-left:4px solid #64748b;border-radius:10px;padding:.75rem 1rem;margin:.65rem 0 1rem}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b17-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b17-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b17-knowledge-only]) .thpt-r4-key-formula {background:transparent;color:inherit;border-color:#8c9ab0;border-left-color:#bdc8d8}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b17-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG V · SGK KẾT NỐI TRI THỨC</p>
<p class="thpt-r4-lead">Liên tục nghĩa là xu hướng gần điểm khớp với giá trị tại điểm; mở rộng tới khoảng và đoạn, rồi dùng tính chất phép toán và đổi dấu để chứng minh có nghiệm.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương V</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Bài 16 cho thấy một hàm có thể có giới hạn khi tiến gần điểm \(a\) nhưng **không có giá trị tại \(a\)**. Nếu ta điền giá trị thích hợp vào “lỗ”, đồ thị trở nên nối liền; còn điền giá trị khác, một chấm đứng riêng sẽ vẫn lệch khỏi xu hướng. Đó là lí do học **tính liên tục**. Bài này từ tiêu chuẩn tại một điểm, sang cả khoảng/đoạn, rồi tới tính chất giúp tính giới hạn và chứng minh tồn tại nghiệm.

    ### 1.1. Hàm số liên tục tại một điểm

    Xét \(f(x)=x+1\) với \(x\ne1\). Các giá trị ở gần 1 tiến về 2. Nếu quy định thêm **\(f(1)=2\)**, giá trị tại điểm khớp đúng giới hạn: hàm liên tục tại 1. Nếu lại quy định **\(f(1)=0\)**, các giá trị gần 1 vẫn tiến về 2, nhưng ngay tại 1 hàm bằng 0, nên hàm **gián đoạn** tại điểm đó.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B17-01_R01.svg" alt="Hàm bằng x cộng một ngoài điểm 1 nhưng nhận giá trị 0 ở 1, trong khi giới hạn bằng 2"><figcaption><strong>Hướng dẫn đọc:</strong> vòng rỗng tại \((1,2)\) thể hiện giá trị mà đồ thị tiến tới; chấm đặc tại \((1,0)\) là giá trị **thực** \(f(1)\). Hai điểm không trùng nên \(\lim_{x\to1}f(x)\ne f(1)\).</figcaption></figure>

    Vì vậy, để kiểm liên tục tại \(a\) cần đủ **ba việc**: (1) \(f(a)\) xác định; (2) \(\lim_{x\to a}f(x)\) tồn tại và hữu hạn; (3) giới hạn đó bằng \(f(a)\). Đây không phải ba định nghĩa khác nhau mà là cách **kiểm tra đủ điều kiện của cùng một định nghĩa**. Hình vẽ “nét bút liền” chỉ là trực giác, không được thay cho kiểm toán học.

    Với hàm cho bằng nhiều công thức, ở điểm nối phải kiểm hai giới hạn một phía. Ví dụ \(g(x)=x+1\) khi \(x<1\), \(g(x)=m\) khi \(x\ge1\). Bên trái tiến về 2; bên phải tiến về \(m\); giá trị ngay tại 1 cũng là \(m\). Hàm liên tục tại 1 **nếu và chỉ nếu \(m=2\)**, vì khi đó giới hạn trái/phải đều bằng 2 và bằng \(g(1)\).

    **Vận dụng.** Cho \(h(x)=\frac{x^2-1}{x-1}\) nếu \(x\ne1\), còn \(h(1)=m\). Tìm \(m\) để \(h\) liên tục tại \(x=1\).

    ??? question "Đối chiếu"

        **Lời giải:** Với \(x\ne1\), \(h(x)=x+1\), nên \(\lim_{x\to1}h(x)=2\). Giá trị \(h(1)=m\) có nghĩa theo định nghĩa từng phần; liên tục khi \(m=2\).

    ??? tip "Kiểm lỗi"

        Nếu chỉ rút gọn và nói “liên tục với mọi \(m\)” là đã bỏ điều kiện **giới hạn phải bằng đúng giá trị tại điểm**. Ngược lại, nếu quên miền \(x\ne1\) khi rút gọn sẽ tự gán sai cho biểu thức gốc.

    ### 1.2. Hàm số liên tục trên một khoảng

    Một điểm liên tục mới là một thông tin **cục bộ**. Để nói \(f\) liên tục trên \((a,b)\), ta phải biết điều đó đúng tại **mọi điểm** trong khoảng. Nhưng trên đoạn \([a,b]\), hai đầu mút có cách tiến gần đặc biệt: tại \(a\) chỉ xét **từ bên phải trong đoạn**, tại \(b\) chỉ xét **từ bên trái**. Không bắt buộc xét giá trị ở phía ngoài đoạn mà hàm có thể không xác định.

    Hãy xem \(f(x)=\sqrt{x}\). Hàm xác định với \(x\ge0\), liên tục ở mọi \(x>0\) nhờ tính chất giới hạn căn, và tại 0 ta có \(\lim_{x\to0^+}\sqrt{x}=0=f(0)\). Vậy nó liên tục trên \([0,9]\) (và trên \([0,+\infty)\)). Đòi tính \(\sqrt{x}\) khi \(x\to0^-\) trong số thực là yêu cầu **ngoài miền xác định**, không được dùng để phủ nhận tính liên tục trên đoạn.

    Khi xét hàm phân thức, miền xác định quan trọng không kém công thức. \(g(x)=\frac{x+1}{x-2}\) liên tục trên \((-\infty,2)\) và \((2,+\infty)\) vì tử, mẫu là đa thức và mẫu khác 0 ở hai khoảng. Nhưng tại \(x=2\) thì \(g\) **không xác định**, nên không gọi liên tục tại 2. Tại **đầu mút** của một khoảng cần đọc đúng dạng ngoặc tròn/vuông trước khi áp điều kiện một phía.

    **Vận dụng.** Chứng minh \(f(x)=\sqrt{x}\) liên tục trên đoạn \([0,4]\). Vì sao không cần giới hạn trái tại \(x=0\)?

    ??? question "Đối chiếu"

        **Lời giải:** Với mọi \(x\in(0,4)\), hàm căn liên tục. Tại \(0\), giới hạn phải \(\lim_{x\to0^+}\sqrt{x}=0=f(0)\); tại \(4\), giới hạn trái \(\lim_{x\to4^-}\sqrt{x}=2=f(4)\). Do đó liên tục trên \([0,4]\). Vì \(\sqrt{x}\) không xác định khi \(x<0\), ta không xét giới hạn trái tại 0 theo miền thực.

    ??? tip "Kiểm lỗi"

        “Liên tục trên đoạn” **không chỉ** là liên tục ở các điểm giữa đoạn; vẫn phải kiểm hai đầu mút đúng phía. Không bắt buộc xét phía hàm chưa được xác định.

    ### 1.3. Một số tính chất cơ bản

    Khi \(f,g\) liên tục tại \(a\), ta đã biết \(\lim f=f(a)\) và \(\lim g=g(a)\). Định lí phép toán giới hạn từ Bài 16 cho phép cộng, trừ, nhân: các hàm \(f+g,f-g,fg\) đều liên tục tại \(a\). Thương \(f/g\) cũng liên tục tại \(a\) khi **\(g(a)\ne0\)**. Đó là lí do các đa thức liên tục trên \(\mathbb R\), còn các phân thức hữu tỉ liên tục **trên tập xác định của chúng**, không phải ở nghiệm của mẫu.

    SGK còn nhắc: \(\sin x\), \(\cos x\) liên tục trên \(\mathbb R\); \(\tan x,\cot x\) liên tục trên những điểm mà chúng xác định. Không nên thuộc lòng câu “mọi hàm quen thuộc liên tục ở mọi nơi” vì hàm có mẫu, căn hoặc điểm rẽ nhánh có thể mất điều kiện xác định.

    **Biết có nghiệm mà chưa giải được công thức nghiệm.** Nếu \(f\) liên tục trên **cả đoạn \([a,b]\)** và \(f(a)f(b)<0\), thì \(f\) phải nhận giá trị 0 ở **ít nhất một điểm** giữa \(a,b\). Hình dung một đường liền nối một điểm dưới trục hoành với một điểm trên trục: nó phải gặp trục hoành ở đâu đó. Tuy vậy, chỉ từ hai đầu trái dấu **không thể nói có đúng một giao điểm**; muốn duy nhất phải có chứng minh bổ sung.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B17_IVT_SIGN_CHANGE_AUTHORING_20261123.svg" alt="Đồ thị liên tục của hàm x mũ ba cộng x trừ một đi từ giá trị âm tại x bằng 0 sang dương tại x bằng 1"><figcaption><strong>Hướng dẫn đọc:</strong> với \(p(x)=x^3+x-1\), \(p(0)=-1<0\), \(p(1)=1>0\). Đường liên tục cắt trục hoành tại một vị trí \(c\in(0,1)\). Từ điều kiện này ta kết luận **ít nhất một nghiệm**, không được tự khẳng định “duy nhất”.</figcaption></figure>

    Điều kiện liên tục rất quan trọng. Một hàm **nhảy** từ \(-1\) lên \(+1\) ngay tại một điểm có thể đổi dấu ở hai đầu mà **không bao giờ nhận 0**. Vì vậy nếu quên chứng minh liên tục trên đoạn, lập luận đổi dấu mất cơ sở.

    **Vận dụng.** Chứng minh phương trình \(x^3+x-1=0\) có **ít nhất một nghiệm** trong \((0,1)\). Có được kết luận nghiệm duy nhất chỉ từ dấu của hai đầu không?

    ??? question "Đối chiếu"

        **Lời giải:** Đặt \(p(x)=x^3+x-1\), là đa thức nên liên tục trên \([0,1]\). \(p(0)=-1<0\), \(p(1)=1>0\), do đó tồn tại \(c\in(0,1)\) sao cho \(p(c)=0\). Dữ kiện đổi dấu và liên tục **chỉ đủ** kết luận ít nhất một nghiệm, không tự chứng minh duy nhất.

    ??? tip "Kiểm lỗi"

        Nếu viết “có một nghiệm duy nhất” ngay sau khi thấy đổi dấu là vượt kết luận SGK. Hãy giữ chữ **“ít nhất một”**; nếu cần duy nhất, phải chứng minh thêm điều kiện như tính đơn điệu.

=== "Kiến thức SGK"

    ### 2.1. Hàm số liên tục tại một điểm

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Liên tục tại một điểm</strong><p>Hàm \(y=f(x)\) xác định trên một khoảng chứa \(a\) gọi là <strong>liên tục tại \(a\)</strong> nếu \(\lim_{x\to a}f(x)=f(a)\). Nếu điều kiện này không thỏa, hàm được gọi là <strong>gián đoạn tại \(a\)</strong>. Để kiểm, cần \(f(a)\) xác định, giới hạn hữu hạn hai phía tồn tại, và hai giá trị ấy bằng nhau.</p></div>

    **Dạng kiểm với hàm từng phần:** Xác định \(f(a)\); tính \(\lim_{x\to a^-}f(x)\), \(\lim_{x\to a^+}f(x)\) nếu miền có cả hai phía; chỉ khi cả hai bằng \(f(a)\) mới liên tục tại \(a\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B17-01_R01.svg" alt="Giới hạn bằng hai nhưng giá trị hàm tại một bằng không nên gián đoạn"><figcaption><strong>Tra hình:</strong> \(\lim_{x\to1}f(x)=2\ne f(1)=0\), nên hàm gián đoạn tại 1 dù giới hạn hữu hạn hai phía tồn tại.</figcaption></figure>

    ### 2.2. Hàm số liên tục trên một khoảng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Liên tục trên khoảng và trên đoạn</strong><p>\(f\) <strong>liên tục trên khoảng \((a,b)\)</strong> nếu liên tục tại <strong>mọi điểm</strong> của khoảng. \(f\) <strong>liên tục trên đoạn \([a,b]\)</strong> nếu liên tục trên \((a,b)\), đồng thời \(\lim_{x\to a^+}f(x)=f(a)\) và \(\lim_{x\to b^-}f(x)=f(b)\). Nửa khoảng được hiểu tương tự: tại đầu mút thuộc miền xét chỉ yêu cầu giới hạn một phía phù hợp.</p></div>

    **Các hàm cơ bản SGK:** Đa thức, \(\sin x,\cos x\) liên tục trên \(\mathbb R\). Hàm \(\tan x,\cot x\), hàm phân thức hữu tỉ liên tục ở **những điểm thuộc tập xác định**; hàm căn \(\sqrt{x}\) liên tục trên \([0,+\infty)\) theo điều kiện phải ở 0. Không suy rộng qua điểm mà hàm không xác định.

    **Ví dụ kiểm:** \(f(x)=\sqrt{x}\) liên tục trên \([0,9]\) vì nội đoạn liên tục, \(\lim_{x\to0^+}\sqrt{x}=0\), \(\lim_{x\to9^-}\sqrt{x}=3=f(9)\).

    ### 2.3. Một số tính chất cơ bản

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Phép toán đối với các hàm liên tục</strong><p>Nếu \(f,g\) <strong>liên tục tại \(a\)</strong>, thì \(f+g\), \(f-g\), \(fg\) cũng liên tục tại \(a\). Thương \(f/g\) liên tục tại \(a\) khi thêm điều kiện <strong>\(g(a)\ne0\)</strong>. Dùng cùng điều kiện miền xác định để áp dụng tính chất cho các hàm đa thức, lượng giác, phân thức.</p></div>

    **Nhận xét SGK — Đổi dấu trên đoạn liên tục:** Nếu \(f\) liên tục trên \([a,b]\) và \(f(a)f(b)<0\), thì **tồn tại ít nhất một** \(c\in(a,b)\) sao cho \(f(c)=0\). Đây là kết quả về **sự tồn tại**, không tự bảo đảm nghiệm duy nhất. Dùng đúng điều kiện cả đoạn và hai giá trị đầu **trái dấu**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B17_IVT_SIGN_CHANGE_AUTHORING_20261123.svg" alt="Đa thức liên tục đổi dấu trên đoạn từ không đến một và có ít nhất một nghiệm"><figcaption><strong>Tra hình:</strong> \(p(x)=x^3+x-1\), \(p(0)=-1\), \(p(1)=1\), nên phải có \(c\in(0,1)\) với \(p(c)=0\). Hình minh họa một nghiệm trong trường hợp cụ thể, không thay bằng chứng tổng quát.</figcaption></figure>

    **Quy trình chứng minh tồn tại nghiệm:** (1) Đặt hàm \(f\) với phương trình \(f(x)=0\); (2) chứng minh liên tục trên toàn \([a,b]\); (3) tính chính xác \(f(a),f(b)\) và kiểm tích âm; (4) kết luận **có ít nhất một nghiệm** trong \((a,b)\).

    **Lưu ý vận dụng thực tế:** Một đại lượng liên tục đi từ dưới ngưỡng lên trên ngưỡng thì phải đạt ngưỡng ở một thời điểm trung gian. Khi mô hình thời gian, nhiệt độ hoặc vận tốc, phải có căn cứ **đại lượng biến đổi liên tục**; không lấy hình vẽ hay số liệu trung bình thay chứng cứ liên tục.

=== "Ví dụ"

    ### 3.1. Liên tục tại một điểm có mẫu khác 0

    **Đề bài.** Xét tính liên tục của \(f(x)=\frac{x+1}{x-1}\) tại \(a=2\).

    **Phân tích:** Trước hết kiểm **\(a\) thuộc tập xác định**, rồi tính giới hạn của thương khi mẫu tiến về giá trị khác 0.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> Vì \(2-1\ne0\), \(f(2)=(2+1)/(2-1)=3\). Do tử/mẫu đều liên tục tại 2, mẫu khác 0, \(\lim_{x\to2}f(x)=3=f(2)\). Vậy \(f\) liên tục tại \(x=2\).</p></div>

    **Kiểm lại:** Cần ghi cả \(f(2)\) và giới hạn, không chỉ thay x vào biểu thức rồi gọi là chứng minh.

    ### 3.2. Chọn giá trị tại điểm thủng để liên tục

    **Đề bài.** Cho \(f(x)=\frac{x^2-1}{x-1}\) khi \(x\ne1\) và \(f(1)=m\). Tìm \(m\) để \(f\) liên tục tại 1.

    **Phân tích:** Với \(x\ne1\), phân tích tử \(x^2-1=(x-1)(x+1)\). Liên tục yêu cầu giới hạn ở gần 1 bằng **giá trị được gán tại 1**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> \(\lim_{x\to1}f(x)=\lim_{x\to1}(x+1)=2\), còn \(f(1)=m\). Hàm liên tục tại 1 khi và chỉ khi \(m=2\).</p></div>

    **Kiểm lại:** Rút gọn chỉ đúng \(x\ne1\); khi \(m=2\), đồ thị được lấp đúng “lỗ”, không phải vì phân thức gốc bỗng có nghĩa tại 1.

    ### 3.3. Không có giá trị tại điểm nào sửa được bước nhảy

    **Đề bài.** Cho \(g(x)=x\) với \(x<0\), \(g(0)=m\), và \(g(x)=x+1\) với \(x>0\). Có chọn được \(m\) để hàm liên tục tại 0 không?

    **Phân tích:** Nếu hai giới hạn một phía **khác nhau**, thay một điểm \(g(0)\) không thể làm giới hạn hai phía xuất hiện.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> \(\lim_{x\to0^-}g(x)=\lim_{x\to0^-}x=0\), còn \(\lim_{x\to0^+}g(x)=\lim_{x\to0^+}(x+1)=1\). Hai giới hạn khác nhau nên không có giới hạn hữu hạn hai phía. Vì vậy **không có giá trị \(m\)** nào làm \(g\) liên tục tại 0.</p></div>

    **Kiểm lại:** Đây là gián đoạn kiểu bước nhảy, khác với ví dụ 3.2 (chỉ thủng một điểm). Không tự chọn \(m=(0+1)/2\).

    ### 3.4. Liên tục trên đoạn có hai đầu mút

    **Đề bài.** Chứng minh \(f(x)=\sqrt{x}\) liên tục trên \([0,9]\).

    **Phân tích:** Trên \((0,9)\), căn là hàm liên tục; hai đầu mút cần giới hạn **đúng phía**, không kiểm phía ngoài miền xác định.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> Với \(x\in(0,9)\), hàm căn liên tục. Tại 0, \(\lim_{x\to0^+}\sqrt{x}=0=f(0)\). Tại 9, \(\lim_{x\to9^-}\sqrt{x}=3=f(9)\). Vì vậy \(f\) liên tục trên \([0,9]\).</p></div>

    **Kiểm lại:** Không có \(\sqrt{x}\) thực khi \(x<0\), nên không cần/không được đòi giới hạn trái tại 0 để xét liên tục trên đoạn này.

    ### 3.5. Khoảng liên tục của phân thức

    **Đề bài.** Tìm các khoảng liên tục của \(f(x)=\frac{x+1}{x-2}\).

    **Phân tích:** Hàm phân thức hữu tỉ liên tục trên miền xác định; giải **điều kiện mẫu khác 0** rồi ghi thành các khoảng.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> \(x-2\ne0\) khi \(x\ne2\), nên miền xác định là \((-\infty,2)\cup(2,+\infty)\). Tử và mẫu là đa thức liên tục, mẫu không bằng 0 trên từng khoảng; do đó \(f\) liên tục trên từng khoảng \((-\infty,2)\) và \((2,+\infty)\).</p></div>

    **Kiểm lại:** Tại \(x=2\), hàm không xác định nên không gọi liên tục tại đó. Không tự ghi “liên tục trên \(\mathbb R\)”.

    ### 3.6. Quy tắc tổng, thương của các hàm liên tục

    **Đề bài.** Cho \(h(x)=\frac{x^2+1}{x+1}\). Chứng minh liên tục tại \(x=1\) và giải thích vì sao không áp dụng ngay quy tắc thương tại \(x=-1\).

    **Phân tích:** Tử và mẫu là đa thức liên tục. Quy tắc thương yêu cầu **mẫu tại điểm xét khác 0**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> Tại 1, mẫu \(1+1=2\ne0\), nên \(h\) liên tục tại 1, và \(h(1)=(1^2+1)/(1+1)=1\). Tại \(-1\), mẫu bằng 0 nên hàm gốc không xác định; không thể áp quy tắc thương để kết luận liên tục tại \(-1\).</p></div>

    **Kiểm lại:** Việc tử vẫn hữu hạn không khắc phục được mẫu bằng 0; điều kiện tồn tại hàm tại điểm là bắt buộc.

    ### 3.7. Chứng minh tồn tại nghiệm bằng tính đổi dấu

    **Đề bài.** Chứng minh phương trình \(x^3+x-1=0\) có ít nhất một nghiệm trong \((0,1)\).

    **Phân tích:** Chọn \(p(x)=x^3+x-1\), xác nhận là đa thức liên tục trên **toàn đoạn** rồi tính dấu hai đầu.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> \(p\) là đa thức nên liên tục trên \([0,1]\). \(p(0)=-1<0\) và \(p(1)=1>0\), nên \(p(0)p(1)<0\). Theo nhận xét về đổi dấu của hàm liên tục trên đoạn, tồn tại \(c\in(0,1)\) sao cho \(p(c)=0\).</p></div>

    **Kiểm lại:** Điều kiện kết luận chỉ là **ít nhất một nghiệm**. Muốn kết luận nghiệm duy nhất cần một lập luận khác (chẳng hạn đơn điệu), không tự thêm vào định lí đổi dấu.

    ### 3.8. Ứng dụng thực tế: nhiệt độ đi qua một ngưỡng

    **Đề bài.** Giả sử nhiệt độ một phòng \(T(t)\) thay đổi **liên tục** từ \(18^\circ\mathrm C\) lúc 8 giờ đến \(24^\circ\mathrm C\) lúc 10 giờ. Chứng minh có ít nhất một thời điểm trong khoảng đó nhiệt độ bằng \(20^\circ\mathrm C\).

    **Phân tích:** Xét \(f(t)=T(t)-20\). Nếu \(T\) liên tục, \(f\) liên tục; hai đầu khoảng có dấu trái nhau. Đây là mô hình ứng dụng đúng phạm vi định lí, không dựa chỉ vào một đồ thị phỏng đoán.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> \(f(8)=18-20=-2<0\); \(f(10)=24-20=4>0\). Vì \(T\) liên tục trên \([8,10]\), nên \(f\) cũng liên tục trên đoạn ấy. Theo nhận xét đổi dấu, tồn tại \(t_*\in(8,10)\) sao cho \(f(t_*)=0\), tức \(T(t_*)=20^\circ\mathrm C\).</p></div>

    **Kiểm lại:** Ta chỉ biết có **ít nhất một** thời điểm, không xác định giờ phút chính xác và không suy chỉ một lần đi qua 20 độ. Nếu dữ liệu có bước nhảy, cần kiểm giả thiết liên tục.

=== "Lỗi thường gặp"

    ### 4.1. Giới hạn tồn tại nên kết luận hàm liên tục

    **Dấu hiệu:** \(\lim_{x\to a}f(x)=L\) tồn tại nhưng \(f(a)\ne L\), vẫn gọi liên tục.

    **Vì sao sai:** Liên tục tại a cần \(f(a)\) xác định và bằng giới hạn hữu hạn.

    **Cách sửa:** Viết ba dòng kiểm: \(f(a)\); giới hạn hai phía; so sánh dấu bằng. Nếu thiếu một điều kiện thì giữ trạng thái gián đoạn.

    ### 4.2. Không so hai phía ở điểm rẽ nhánh

    **Dấu hiệu:** Chỉ tính giới hạn trái, đặt một giá trị ở điểm nối rồi coi đã khép bước nhảy.

    **Vì sao sai:** Hai phía khác nhau thì không có giới hạn hai phía; thay riêng \(f(a)\) không đổi được các giá trị ở gần.

    **Cách sửa:** Tính \(\lim_{x\to a^-}f(x)\) và \(\lim_{x\to a^+}f(x)\); khi bằng nhau mới so tiếp với \(f(a)\).

    ### 4.3. Bỏ điều kiện một phía tại đầu mút đoạn

    **Dấu hiệu:** Đòi tính \(\lim_{x\to0^-}\sqrt{x}\) để chứng minh liên tục trên \([0,9]\), hoặc chỉ kiểm mọi điểm trong \((0,9)\) rồi bỏ hai đầu mút.

    **Vì sao sai:** Tại đầu mút trong đoạn chỉ cần giới hạn **từ phía nằm trong đoạn** và bằng giá trị tại đầu mút.

    **Cách sửa:** Tại \(a\) kiểm từ phải; tại \(b\) kiểm từ trái. Kiểm đủ cả hai đầu mút của đoạn đóng.

    ### 4.4. Gọi hàm phân thức liên tục cả ở nghiệm mẫu

    **Dấu hiệu:** Hàm \((x+1)/(x-2)\) được gọi liên tục trên \(\mathbb R\).

    **Vì sao sai:** Tại \(x=2\), biểu thức không xác định. Tính liên tục chỉ xét tại điểm thuộc miền xác định của hàm.

    **Cách sửa:** Giải điều kiện mẫu khác 0, tách các khoảng thuộc miền xác định rồi mới áp dụng tính liên tục của đa thức/phân thức.

    ### 4.5. Áp dụng tính chất thương dù \(g(a)=0\)

    **Dấu hiệu:** \(f,g\) liên tục tại \(a\), vội cho \(f/g\) liên tục mà không xem mẫu.

    **Vì sao sai:** Tính chất thương đòi **\(g(a)\ne0\)**; bỏ điều kiện dẫn đến phép chia không xác định.

    **Cách sửa:** Ghi \(g(a)\) và kiểm khác 0 trước; nếu bằng 0, phải phân tích miền và biểu thức theo bài, không suy từ định lí thương.

    ### 4.6. Đổi dấu mà không kiểm liên tục, hoặc suy ra nghiệm duy nhất

    **Dấu hiệu:** Chỉ thấy \(f(a)<0<f(b)\) liền kết luận nghiệm tồn tại, thậm chí duy nhất, dù chưa biết f liên tục trên đoạn.

    **Vì sao sai:** Kết quả SGK yêu cầu **liên tục trên \([a,b]\)**. Kết luận là **ít nhất một nghiệm**, không phải duy nhất; hàm có bước nhảy có thể đổi dấu mà không có nghiệm.

    **Cách sửa:** Kiểm liên tục trên trọn đoạn, tính đúng dấu hai đầu, kết luận “có ít nhất một nghiệm”; muốn duy nhất cần chứng cứ khác.

    **Học tiếp:** [Core và Luyện tập Bài 17](luyen-tap.md) · [Tự luận Chương V](../../../thu-vien/tu-luan-g11-chuong-v.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn đối chiếu văn bản: SGK Toán 11 Kết nối tri thức với cuộc sống, tập một, Bài 17 “Hàm số liên tục”, trang in 119–122, theo bản SGK số hóa SGKVN. Ba mục gốc: Hàm số liên tục tại một điểm; Hàm số liên tục trên một khoảng; Một số tính chất cơ bản. Hình điểm gián đoạn B17 trên main và SVG mới minh họa đổi dấu đều được dùng chung ở hai tab. Chưa kiểm trực quan đầy đủ từng trang bản in và chưa có NotebookLM review theo snapshot này. Chỉ nâng cấp trang Kiến thức; Core/Tự kiểm tra giữ nguyên.</p>
~~~~

---

# SVG SOURCE REFS — SEMANTIC REVIEW ONLY (NOT PIXEL QA)

## NEW SVG B15 — G11_B15_GEOMETRIC_PARTIAL_SUMS_AUTHORING_20261123.svg
SHA: `fa7db1642d772acaef27c1b1f4654df867cc2aba`
PATH: `docs/assets/images/thpt/G11_B15_GEOMETRIC_PARTIAL_SUMS_AUTHORING_20261123.svg`

~~~~svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 400" width="860" height="400" role="img" aria-labelledby="t d">
<title id="t">Tổng riêng của cấp số nhân 1 + 1/2 + 1/4 + ... tiến gần 2</title>
<desc id="d">Các điểm S1=1, S2=1.5, S3=1.75, S4=1.875, S5=1.9375 tăng dần tiến đến đường ngang S=2, nhưng tất cả đều nhỏ hơn 2.</desc>
<rect width="860" height="400" rx="18" fill="#fff"/>
<text x="430" y="34" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" font-weight="700" fill="#193d57">Tổng riêng ngày càng tiến gần 2</text>
<g font-family="Arial,sans-serif" font-size="17" fill="#24475f">
<line x1="89" y1="321" x2="792" y2="321" stroke="#556677" stroke-width="2.2"/>
<line x1="89" y1="321" x2="89" y2="65" stroke="#556677" stroke-width="2.2"/>
<text x="797" y="331">n</text><text x="49" y="75">Sₙ</text>
<line x1="96" y1="110" x2="785" y2="110" stroke="#a34331" stroke-width="2.4" stroke-dasharray="9 7"/>
<text x="772" y="97" text-anchor="end" fill="#a34331" font-weight="700">Giới hạn S = 2</text>
<polyline fill="none" stroke="#246da2" stroke-width="3.5" points="130,210 267,160 404,135 541,122.5 678,116.25"/>
<circle cx="130" cy="210" r="7" fill="#246da2" stroke="#fff" stroke-width="2"/><text x="130" y="345" text-anchor="middle">1</text><text x="130" y="193" text-anchor="middle" font-size="16">1</text>
<circle cx="267" cy="160" r="7" fill="#246da2" stroke="#fff" stroke-width="2"/><text x="267" y="345" text-anchor="middle">2</text><text x="267" y="143" text-anchor="middle" font-size="16">1.5</text>
<circle cx="404" cy="135" r="7" fill="#246da2" stroke="#fff" stroke-width="2"/><text x="404" y="345" text-anchor="middle">3</text><text x="404" y="118" text-anchor="middle" font-size="16">1.75</text>
<circle cx="541" cy="122.5" r="7" fill="#246da2" stroke="#fff" stroke-width="2"/><text x="541" y="345" text-anchor="middle">4</text><text x="541" y="105.5" text-anchor="middle" font-size="16">1.875</text>
<circle cx="678" cy="116.25" r="7" fill="#246da2" stroke="#fff" stroke-width="2"/><text x="678" y="345" text-anchor="middle">5</text><text x="678" y="99.25" text-anchor="middle" font-size="16">1.938</text>
<text x="430" y="378" text-anchor="middle" font-size="16">Sₙ = 2(1 − 2⁻ⁿ); mọi tổng riêng đều nhỏ hơn 2</text>
</g></svg>
~~~~

---

## EXISTING SVG B15 — FIG-G11-B15-01_R01.svg
SHA: `632bef51196757f9c71f54c53bb3c7639ce158e0`
PATH: `docs/assets/images/thpt/FIG-G11-B15-01_R01.svg`

~~~~svg
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440" role="img" aria-labelledby="title desc">
<title id="title">FIG-G11-B15-01: Dãy u_n = 1/n tiến gần 0</title>
<desc id="desc">Đồ thị các điểm có hoành độ n bằng 1 đến 8 và tung độ 1/n. Tất cả nằm phía trên trục ngang u_n=0, giảm dần tiến gần đường 0 nhưng không chạm 0; thể hiện ý nghĩa tiến gần chứ không phải số hạng cuối.</desc>
<rect width="800" height="440" rx="20" fill="#f8fafc"/>
<text x="400" y="42" fill="#172554" text-anchor="middle" font-size="23" font-family="Arial" font-weight="700">Dãy u_n = 1/n tiến gần 0</text>
<line x1="90" y1="350" x2="690" y2="350" stroke="#0f172a" stroke-width="2.5"/>
<path d="M690 350 l-12 -6 v12 z" fill="#0f172a"/>
<line x1="120" y1="365" x2="120" y2="70" stroke="#0f172a" stroke-width="2.5"/>
<path d="M120 70 l-6 12 h12 z" fill="#0f172a"/>
<text x="703" y="356" font-size="17" fill="#0f172a">n</text>
<text x="100" y="67" font-size="17" fill="#0f172a">u_n</text>
<text x="102" y="370" font-size="15" fill="#334155">0</text><circle cx="140" cy="120.00" r="6" fill="#2563eb"/><text x="140" y="370" text-anchor="middle" font-size="15" fill="#334155">1</text><circle cx="205" cy="235.00" r="6" fill="#2563eb"/><text x="205" y="370" text-anchor="middle" font-size="15" fill="#334155">2</text><circle cx="270" cy="273.33" r="6" fill="#2563eb"/><text x="270" y="370" text-anchor="middle" font-size="15" fill="#334155">3</text><circle cx="335" cy="292.50" r="6" fill="#2563eb"/><text x="335" y="370" text-anchor="middle" font-size="15" fill="#334155">4</text><circle cx="400" cy="304.00" r="6" fill="#2563eb"/><text x="400" y="370" text-anchor="middle" font-size="15" fill="#334155">5</text><circle cx="465" cy="311.67" r="6" fill="#2563eb"/><text x="465" y="370" text-anchor="middle" font-size="15" fill="#334155">6</text><circle cx="530" cy="317.14" r="6" fill="#2563eb"/><text x="530" y="370" text-anchor="middle" font-size="15" fill="#334155">7</text><circle cx="595" cy="321.25" r="6" fill="#2563eb"/><text x="595" y="370" text-anchor="middle" font-size="15" fill="#334155">8</text><line x1="120" y1="350" x2="670" y2="350" stroke="#059669" stroke-width="3" stroke-dasharray="8 8"/>
<text x="493" y="385" font-size="14" fill="#047857">Đường tham chiếu u_n = 0</text>
<text x="190" y="110" font-size="15" fill="#1d4ed8">Càng về sau, 1/n càng nhỏ</text>
<text x="400" y="420" text-anchor="middle" font-family="Arial" font-size="13" fill="#334155">Minh họa theo tọa độ và điều kiện đã ghi; không đo độ dài trực tiếp từ ảnh.</text>
</svg>
~~~~

---

## NEW SVG B16 — G11_B16_ONE_SIDED_JUMP_AUTHORING_20261123.svg
SHA: `62c7f1a3c9d5b7455b3223c347ba7aa48adb5526`
PATH: `docs/assets/images/thpt/G11_B16_ONE_SIDED_JUMP_AUTHORING_20261123.svg`

~~~~svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 400" width="860" height="400" role="img" aria-labelledby="t d">
<title id="t">Giới hạn bên trái và bên phải khác nhau tại điểm 0</title>
<desc id="d">Đồ thị hàm từng phần bằng 1 khi x nhỏ hơn 0 và bằng 3 khi x lớn hơn hoặc bằng 0; có chấm tròn rỗng tại (0,1), chấm tròn đặc tại (0,3). Giới hạn trái là 1 và phải là 3, vì vậy không có giới hạn hai phía.</desc>
<rect width="860" height="400" rx="18" fill="#fff"/>
<text x="430" y="36" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" font-weight="700" fill="#193954">Hai phía tiến gần x = 0 cho hai giá trị khác nhau</text>
<g font-family="Arial,sans-serif" font-size="19" fill="#243c5b">
<line x1="95" y1="327" x2="787" y2="327" stroke="#536779" stroke-width="2.4"/>
<line x1="430" y1="347" x2="430" y2="73" stroke="#536779" stroke-width="2.4"/>
<text x="793" y="336">x</text><text x="407" y="82">f(x)</text><text x="413" y="346">0</text>
<line x1="99" y1="243" x2="430" y2="243" stroke="#2473a5" stroke-width="4"/>
<circle cx="430" cy="243" r="10" fill="#fff" stroke="#2473a5" stroke-width="3.5"/>
<line x1="430" y1="122" x2="759" y2="122" stroke="#b34c38" stroke-width="4"/>
<circle cx="430" cy="122" r="9" fill="#b34c38" stroke="#fff" stroke-width="2"/>
<text x="408" y="247" text-anchor="end" font-weight="700" fill="#2473a5">1</text>
<text x="408" y="126" text-anchor="end" font-weight="700" fill="#b34c38">3</text>
<text x="130" y="226" fill="#2473a5">f(x) = 1 khi x &lt; 0</text>
<text x="552" y="101" fill="#b34c38">f(x) = 3 khi x ≥ 0</text>
<text x="430" y="376" text-anchor="middle" font-size="17">Giới hạn trái = 1 · Giới hạn phải = 3 · Không có giới hạn hai phía tại 0</text>
</g></svg>
~~~~

---

## EXISTING SVG B16 — FIG-G11-B16-01_R01.svg
SHA: `d623e8a96c6d5f9723aafb9c62bffe57bdc9aa73`
PATH: `docs/assets/images/thpt/FIG-G11-B16-01_R01.svg`

~~~~svg
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440" role="img" aria-labelledby="title desc">
<title id="title">FIG-G11-B16-01: Giới hạn có thể tồn tại tại một lỗ trống</title>
<desc id="desc">Đồ thị y=x+2 trên miền x khác 2, có một vòng tròn rỗng tại (2,4), không có điểm đặc trên x=2. Khi x tiến đến 2 từ cả hai phía, y tiến đến 4 dù f(2) không xác định.</desc>
<rect width="800" height="440" rx="20" fill="#f8fafc"/>
<text x="400" y="42" fill="#172554" text-anchor="middle" font-size="23" font-family="Arial" font-weight="700">Giới hạn có thể tồn tại tại một lỗ trống</text>
<line x1="80" y1="350" x2="690" y2="350" stroke="#0f172a" stroke-width="2.5"/>
<path d="M690 350 l-12 -6 v12 z" fill="#0f172a"/>
<line x1="220" y1="370" x2="220" y2="70" stroke="#0f172a" stroke-width="2.5"/>
<path d="M220 70 l-6 12 h12 z" fill="#0f172a"/>
<text x="702" y="357" font-size="17" fill="#0f172a">x</text><text x="202" y="63" font-size="17" fill="#0f172a">y</text><text x="205" y="370" font-size="15">0</text><line x1="120" y1="310" x2="620" y2="110" stroke="#2563eb" stroke-width="4"/>
<line x1="420" y1="350" x2="420" y2="190" stroke="#64748b" stroke-dasharray="6 7" stroke-width="1.5"/>
<line x1="220" y1="190" x2="420" y2="190" stroke="#64748b" stroke-dasharray="6 7" stroke-width="1.5"/>
<circle cx="420" cy="190" r="10" fill="#f8fafc" stroke="#2563eb" stroke-width="4"/>
<text x="416" y="372" font-size="15" fill="#0f172a">2</text>
<text x="197" y="194" font-size="15" fill="#0f172a">4</text>
<text x="440" y="166" font-size="16" fill="#1d4ed8">Lỗ tại (2,4)</text>
<text x="445" y="104" font-size="15" fill="#1d4ed8">y=x+2 (x khác 2)</text>
<text x="400" y="420" text-anchor="middle" font-family="Arial" font-size="13" fill="#334155">Minh họa theo tọa độ và điều kiện đã ghi; không đo độ dài trực tiếp từ ảnh.</text>
</svg>
~~~~

---

## NEW SVG B17 — G11_B17_IVT_SIGN_CHANGE_AUTHORING_20261123.svg
SHA: `612883b518746c9d535fbcd151e226da562cfa1c`
PATH: `docs/assets/images/thpt/G11_B17_IVT_SIGN_CHANGE_AUTHORING_20261123.svg`

~~~~svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 420" width="850" height="420" role="img" aria-labelledby="t d">
<title id="t">Hàm số liên tục đổi dấu ở hai đầu đoạn phải có ít nhất một nghiệm</title>
<desc id="d">Đồ thị f(x)=x mũ 3 cộng x trừ 1 trên đoạn từ 0 đến 1; f(0)=-1 và f(1)=1, đường liền cắt trục ngang tại một điểm c giữa 0 và 1. Kết luận được ít nhất một nghiệm, không suy ra duy nhất chỉ từ tính đổi dấu.</desc>
<rect width="850" height="420" rx="18" fill="#fff"/>
<text x="425" y="34" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" font-weight="700" fill="#193954">Liên tục và đổi dấu ⇒ có ít nhất một nghiệm</text>
<g font-family="Arial,sans-serif" font-size="18" fill="#243e59">
<line x1="92" y1="243" x2="765" y2="243" stroke="#56697b" stroke-width="2.3"/>
<line x1="130" y1="371" x2="130" y2="74" stroke="#56697b" stroke-width="2.3"/>
<text x="773" y="249">x</text><text x="110" y="73">y</text>
<line x1="700" y1="235" x2="700" y2="250" stroke="#56697b" stroke-width="2"/>
<text x="125" y="264">0</text><text x="698" y="264">1</text>
<polyline points="130.00,333.00 137.13,331.87 144.25,330.75 151.38,329.62 158.50,328.49 165.63,327.35 172.75,326.21 179.88,325.06 187.00,323.91 194.13,322.75 201.25,321.57 208.38,320.39 215.50,319.20 222.63,317.99 229.75,316.77 236.88,315.53 244.00,314.28 251.13,313.01 258.25,311.72 265.38,310.42 272.50,309.09 279.63,307.75 286.75,306.38 293.88,304.99 301.00,303.57 308.13,302.13 315.25,300.66 322.38,299.17 329.50,297.64 336.63,296.09 343.75,294.50 350.88,292.89 358.00,291.24 365.13,289.56 372.25,287.84 379.38,286.09 386.50,284.30 393.63,282.47 400.75,280.60 407.88,278.70 415.00,276.75 422.13,274.76 429.25,272.73 436.38,270.65 443.50,268.53 450.63,266.36 457.75,264.14 464.88,261.87 472.00,259.56 479.13,257.19 486.25,254.78 493.38,252.31 500.50,249.78 507.63,247.21 514.75,244.57 521.88,241.88 529.00,239.13 536.13,236.32 543.25,233.45 550.38,230.52 557.50,227.53 564.63,224.48 571.75,221.36 578.88,218.17 586.00,214.92 593.13,211.60 600.25,208.21 607.38,204.76 614.50,201.23 621.63,197.63 628.75,193.96 635.88,190.21 643.00,186.39 650.13,182.49 657.25,178.52 664.38,174.47 671.50,170.34 678.63,166.13 685.75,161.83 692.88,157.46 700.00,153.00" fill="none" stroke="#236ca6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="130" cy="333" r="6.5" fill="#b34a36"/>
<circle cx="700" cy="153" r="6.5" fill="#b34a36"/>
<text x="147" y="349" fill="#a04430">f(0) = −1</text>
<text x="701" y="141" fill="#a04430">f(1) = 1</text>
<circle cx="518.93" cy="243" r="8" fill="#287c64" stroke="#fff" stroke-width="2"/>
<text x="537" y="228" fill="#247a60">f(c) = 0</text>
<text x="425" y="387" text-anchor="middle">f(x) = x³ + x − 1, liên tục trên [0;1]</text>
</g></svg>
~~~~

---

## EXISTING SVG B17 — FIG-G11-B17-01_R01.svg
SHA: `0cc06960b371bca72ee78da414a04aa56f5e5fbe`
PATH: `docs/assets/images/thpt/FIG-G11-B17-01_R01.svg`

~~~~svg
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440" role="img" aria-labelledby="title desc">
<title id="title">FIG-G11-B17-01: Giới hạn khác giá trị tại điểm: gián đoạn</title>
<desc id="desc">Đồ thị y=x+1 khi x khác 1, có vòng tròn rỗng ở (1,2) và chấm đặc ở (1,0). Vì giới hạn tại x=1 bằng 2 nhưng giá trị f(1)=0, hàm không liên tục tại điểm đó.</desc>
<rect width="800" height="440" rx="20" fill="#f8fafc"/>
<text x="400" y="42" fill="#172554" text-anchor="middle" font-size="23" font-family="Arial" font-weight="700">Giới hạn khác giá trị tại điểm: gián đoạn</text>
<line x1="80" y1="350" x2="690" y2="350" stroke="#0f172a" stroke-width="2.5"/>
<path d="M690 350 l-12 -6 v12 z" fill="#0f172a"/>
<line x1="220" y1="370" x2="220" y2="70" stroke="#0f172a" stroke-width="2.5"/>
<path d="M220 70 l-6 12 h12 z" fill="#0f172a"/>
<text x="702" y="357" font-size="17" fill="#0f172a">x</text><text x="202" y="63" font-size="17" fill="#0f172a">y</text><text x="205" y="370" font-size="15">0</text><line x1="120" y1="340.83" x2="650" y2="97.92" stroke="#2563eb" stroke-width="4"/>
<line x1="340" y1="350" x2="340" y2="240" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6 7"/>
<circle cx="340" cy="240" r="10" fill="#f8fafc" stroke="#2563eb" stroke-width="4"/>
<circle cx="340" cy="350" r="7" fill="#dc2626" stroke="#fff" stroke-width="2"/>
<text x="328" y="370" font-size="16" fill="#0f172a">1</text>
<text x="197" y="245" font-size="15" fill="#0f172a">2</text>
<text x="367" y="236" font-size="16" fill="#1d4ed8">Giới hạn = 2 (điểm rỗng)</text>
<text x="370" y="336" font-size="16" fill="#b91c1c">f(1)=0 (chấm đặc)</text>
<text x="400" y="420" text-anchor="middle" font-family="Arial" font-size="13" fill="#334155">Minh họa theo tọa độ và điều kiện đã ghi; không đo độ dài trực tiếp từ ảnh.</text>
</svg>
~~~~

---

END_OF_SNAPSHOT_PACK
