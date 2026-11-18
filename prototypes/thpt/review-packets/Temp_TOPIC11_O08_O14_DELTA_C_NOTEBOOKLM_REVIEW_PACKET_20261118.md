# Temp — CĐ11 / TOP11-O08 + TOP11-O14 · DELTA_C targeted NotebookLM review · 18/11/2026

**Chỉ review phần chịu ảnh hưởng.** Trên NotebookLM sử dụng **đúng 5 Permanent Sources v2.1** đã thay thế (không chọn đồng thời v2.0 hoặc thêm nguồn thứ sáu) và đối chiếu SGK/SBT KNTT S1 đã được chủ dự án cung cấp. Không lấy independent SGK B11–B13 PASS thay cho Chuyên đề CĐ11, không tự mở rộng verdict sang 22 outcome không đổi.

SOURCE_RECEIPT:
- `PACKET_ID: THPT-TOPIC11-ANTIDERIVATIVE-INTEGRAL-GEOMETRY-FULL-R01`
- `SOURCE_PATH: prototypes/thpt/content-drafts/topic11-integrals/Temp_TOPIC11_R06_NUMBERING_CONSISTENT_20261116.md`
- `SOURCE_BLOB: 36c22ff9d441da793181072426d594bfe245a8aa` — current exact Git blob on Draft PR #887
- `PREVIOUS_SIGNED_R06_BLOB: 58b16f7c442d560f3950aafdbaf1f686e1e337e4`
- `BASE_R05_AUTHOR_SELF_Q18: c6df9cdc86b8f3df9d163e8c6e4c16a6e7d48c15` — history only
- `CURRENT_AUTHOR_Q18: prototypes/thpt/review-packets/Temp_TOPIC11_R06_CURRENT_SOURCE_AUTHOR_Q18_AFFECTED_DELTA_20261118.md`
- `ORIGINAL_SGK_SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b`
- `ORIGINAL_SGK_ONLY_REVIEW_BLOB: feabeeeef262e7f6b28c898cdf77e6aa4194da24`
- `PUBLIC_88_ORIGINAL_INDEX_BLOB: 672fdce0c02ebf4f6ae6b37b331ca59e259d9b5c`
- `PUBLIC_28_TOPIC_BANK_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0`
- `DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL`
- `REVIEW_SCOPE: TOP11-O08;TOP11-O14`
- `CURRENT_CONTENT_READY: NO`
- `PRIVATE_RD1_IMPORTED: 0`

## S1 và chứng cứ bất biến

SGK Toán 12 KNTT tập Hai, Chương IV, B11 Nguyên hàm (trang in 4–11), B12 Tích phân (12–18), B13 Ứng dụng hình học của tích phân (19–26), cuối chương (27–28); SBT các bài tương ứng. Đó là số trang đã chứng thực trong receipt S1 trước đây, không tuyên bố quét PDF mới. Các câu Practice gốc 88, câu NEW28, đáp án, lời giải, rubric đều **không đổi** trong delta này. 22/22 module có Ví dụ và Vận dụng; 116/116 Practice canonical và 22/22 Selfcheck question-only reuse, 4 SVG Topic source placements được giữ nguyên; đây là QA nguồn của tác giả, không phải verdict NotebookLM.

## Phần A — TOP11-O08 / Newton–Leibniz

**Trước sửa — từ signed R06:** Trong khung định lý: “nếu f liên tục trên [a,b], a<b và F là một nguyên hàm của f trên đoạn ấy (**khả vi ở phần trong, thỏa điều kiện đầu mút**) thì ∫f=F(b)−F(a”. Cụm điều kiện đầu mút chưa chỉ ra chính xác liên tục của F, dù lời giảng xác định cần áp dụng công thức trên toàn đoạn.

**Sau sửa — current learner dòng 207:**

> **ĐỊNH LÝ — Newton–Leibniz.** Nếu \(f\) liên tục trên đoạn \([a,b]\), \(a<b\), và \(F\) liên tục trên \([a,b]\), khả vi trên \((a,b)\) với \(F'(x)=f(x)\) tại mọi \(x\in(a,b)\), thì \(\displaystyle\int_a^b f(x)\,dx=F(b)-F(a)\). Đây là **một số thực**, không có \(+C\).

**Để reviewer đối chiếu:** Trong cùng outcome, Ví dụ tính `∫₁³4x dx`: f=4x liên tục trên [1,3], F=2x², F(3)−F(1)=16. Vận dụng `∫₀²2x dx` và lời giải tự mở: 4. Kiểm tính đúng của giả thiết tại hai đầu và lý do phải giữ liên tục của F; nếu giả thiết thiếu/sai, chỉ ra ví dụ phản chứng và minimal delta.

## Phần B — TOP11-O14 / ý nghĩa tốc độ, đơn vị và độ dời

**Trước sửa — từ source candidate:** Đề Ví dụ ghi “Lưu lượng có hướng `r(t)=5−2t m/s` trên [0,2]. Tính biến thiên lượng tích lũy.” Nhưng lời giải dùng đơn vị mét, kết luận “độ dời cũng bằng quãng đường”; đây là trộn lưu lượng (ví dụ dùng lít/phút) và vận tốc (m/s).

**Sau sửa — current learner dòng 365–382:**

Phần Kiến thức vẫn giới thiệu đúng mô hình chung: với `Q'(t)=r(t)`, `Q(b)−Q(a)=∫_a^b r(t)dt`. Ví dụ thứ nhất về lưu lượng `r(t)=2t` lít/phút trên 0–2 phút cho tổng lượng `∫₀²2t dt=4` lít.

> **Ví dụ — Đề bài:** Một vật chuyển động thẳng với vận tốc có hướng `v(t)=5−2t` (m/s) trong `0≤t≤2` giây. Tính độ dời của vật.
>
> **Lời giải:** Độ dời `s(2)−s(0)=∫₀²v(t)dt=∫₀²(5−2t)dt=[5t−t²]₀²=10−4=6` m. Không tính bằng `v(2)·2=2` m vì vận tốc không hằng; trên [0,2] có `v(t)≥1` m/s nên quãng đường cũng bằng 6 m.
>
> **Vận dụng:** Một vật có vận tốc có hướng `v(t)=3t²` (m/s) trong `0≤t≤1` giây. Độ dời là bao nhiêu?
>
> **Đối chiếu tự mở:** `∫₀¹3t²dt=1` m. Nếu kết quả còn đơn vị m/s, em chưa tích phân theo thời gian (giây).

**Để reviewer đối chiếu:** Phép tính và điều kiện dấu/đơn vị có đúng không? Việc đổi mô hình từ tên “lưu lượng” sai sang “vận tốc/độ dời” có rõ ràng với học sinh tự học và nhất quán với Kiến thức trước đó không? Đáp án các Practice canonical thuộc O14 và toàn bộ NEW28 bank gốc không thay.

## Reviewer yêu cầu trả kết quả (không tự gán trước)

1. SOURCE_RECEIPT exact source SHA and scope match/mismatch; kiểm S1 Toán 12 tập Hai ChIV và đúng 5 Permanent Sources v2.1.
2. **O08 Academic verdict + PED verdict**: đúng Newton–Leibniz/hypotheses/endpoint, ví dụ và First Try (Q03/Q04/Q13/PED3–PED6).
3. **O14 Academic verdict + PED verdict**: đúng mô hình lưu lượng/vận tốc, phép tính/đơn vị, lời dẫn, Ví dụ và Vận dụng (Q01/Q03/Q07/Q08/Q13/PED3–PED6).
4. P0/P1/P2 gắn theo **TOP11-O08/O14 + dòng nguồn hiện hành**, và `MINIMAL_DELTA` nếu lỗi; `PASS` chỉ với phần thực sự đủ chứng cứ, không mở lại câu/đáp án/rubric 116 item bất biến.
5. Không giả xác nhận website Golden UI, Final Submit, official readiness, Mastery hay RELEASE.

## Prompt review NotebookLM (5 câu)

Hãy phản biện độc lập đúng hai outcome **TOP11-O08 và TOP11-O14** trên learner source Git blob `36c22ff9d441da793181072426d594bfe245a8aa`, theo `SLM-THPT-QUALITY-ONE` Q01–Q18 và SGK/SBT KNTT S1, sử dụng đúng năm Permanent Sources v2.1. Với O08, kiểm định lý Newton–Leibniz có đủ giả thiết của F tại hai đầu mút, kiểm phép tính 16 và Vận dụng 4, đồng thời đánh giá lời giảng có giúp tự học không. Với O14, kiểm sự phân biệt lưu lượng (lít/phút) và vận tốc (m/s), độ dời 6 m, quãng đường 6 m, Vận dụng 1 m và đường tự khắc phục khi sai. Hãy trả Academic/PED verdict **riêng từng outcome**, `SOURCE_RECEIPT`, mức P0/P1/P2 và `MINIMAL_DELTA` có vị trí chính xác; không coi phần 116 canonical/22 replay bất biến là đối tượng phải review lại toàn bộ. Không suy ra FULL_TOPIC_PASS, CONTENT_READY, Final Submit/Mastery hay cho phép website merge/deploy từ kết quả hai outcome.
