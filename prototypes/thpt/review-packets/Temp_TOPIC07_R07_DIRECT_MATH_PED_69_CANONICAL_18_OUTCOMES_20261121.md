# CĐ07 — Kiểm toán AUTHORING trực tiếp 69 câu canonical và 18 tuyến tự học

Ngày kiểm: 21/11/2026. Đây là **AUTHOR self-QA có chứng cứ theo đúng snapshot**, không phải một lượt độc lập NotebookLM Academic/PED PASS mới và không làm thay đổi nguồn học sinh đã nghiệm thu.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_SOURCE: prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md
PACKET_ID: THPT-TOPIC07-SEQUENCES-AP-GP-FULL-R01
LEARNING_PATH: TOPIC
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic07-sequences/Temp_TOPIC07_R07_NUMBERING_CONSISTENT_20261116.md
ACADEMIC_SOURCE_BLOB: b6074c8641963a296e3f990397eba685c968c6ea
REVIEW_MODE: AUTHOR_DIRECT_ITEM_Q15_AND_OUTCOME_Q09_Q14_MATH_PED_AUDIT
ORIGINAL_G11_CHII_SOURCE_BLOB: 2101e2a248e0cf53ee11847b913b937cebcd0806
ORIGINAL_G11_CHV_SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0
TOPIC_NEW22_ORIGINAL_SOURCE_BLOB: f70e2c961dfcf31825d135b61e301cbb4c322767
CONTENT_DELTA: NONE
AUTHOR_MATH_QA_CHECKED_SCOPE: PASS
AUTHOR_PED_QA_CHECKED_SCOPE: PASS
P0_OBSERVED: 0
P1_OBSERVED: 0
NEW_INDEPENDENT_NOTEBOOKLM_VERDICT: NOT_REQUESTED_NO_NEW_DELTA_C
RELEASE_AUTHORIZATION: NO

## 1. Q15 — 69 câu đối chiếu trực tiếp với nguồn canonical

- Mở đúng **69/69** comment `DISPLAY_ONLY_CANONICAL` của learner R07; **69 ID duy nhất** và **69 heading nguồn gốc** tìm thấy. Nguồn: **42** bản chiếu SGK G11 ChII B05–B07, **5** G11 ChV/B15, **22** Topic-authored (18 Practice + 4 Written). Mỗi item có một heading nguồn, không tạo item riêng cho nhãn Anchor.
- Trích và so **142/142** dòng trường canonical có thể đối chiếu (đáp án, lời giải, rubric trong nguồn) theo chuỗi thô với vùng học sinh, không xóa dấu `<` của bất đẳng thức hoặc dùng OCR. Tất cả 142 trường khớp. Điều này xác nhận độ trung thành nguồn, không tự thay thế việc độc lập đọc SGK bản in/sư phạm.
- Nội dung học sinh có 18 `slm-topic-first-try`, 18 Vận dụng tự làm trước khi mở Đối chiếu, 69 Practice/11 Written kể trong 69 (không cộng lặp), **87 thẻ details mở/87 đóng**. Trang Tự kiểm tra ghi đúng 18 `PUBLIC_REPLAY_ONLY` / `NO_MASTERY`/`NOT_RD1`, không được gọi là kiểm tra độc lập hoặc cấp Mastery.

## 2. Các kiểm tra toán theo bài và outcome

1. **O01–O05: định nghĩa dãy / chỉ số / truy hồi / đơn điệu / bị chặn.** Dãy hữu hạn `a_n=(−1)^n(2n+1),n∈{0,1,2,3}` nhận 1,−3,5,−7, **không có a4** dù công thức tại n4 tính ra 9. Với `u_n=(n+1)/(2n+1)` ta có u4=5/9, không số hạng nào bằng 1/2. `u1=4,u(n+1)=2u_n−1` cho 4,7,13,25, công thức 3·2^(n−1)+1. W01 `u1=2,u(n+1)=3u_n−2` cho u2=4,u3=10,u4=28, tăng vì u(n+1)−u_n=2·3^(n−1)>0. Phân biệt cận đạt (u1=1) và cận không đạt 2 của `(2n+1)/(n+2)`.
2. **O06–O10: CSC và tổng.** Ba số 2x−1, x+5,3x+1 là CSC khi 2(x+5)=5x => x=10/3. Nếu u5=14,u11=32 thì d=(32−14)/6=3,u1=2. W02 u4=13,u10=31 cho d3,u1=4,u20=61,S20=650 bằng hai phương pháp. Khán đài 10 hàng đầu12 tăng3 có u10=39, tổng255; khán đài 18 hàng đầu12 tăng3 có tổng675, năm hàng cuối (14–18) tổng285. Điểm sai thường gặp: dùng n thay n−1 lần tăng, hoặc lấy hàng cuối thay tổng.
3. **O11–O15: CSN, q âm/q0/q1, tổng hữu hạn/vô hạn.** Dãy 3,0,0,… là CSN q=0 do u(n+1)=q u_n; không chia 0/0. u2=6,u4=54 có cả hai khả năng (u1,q)=(2,3), (−2,−3). u1=5,q=−2 cho u6=−160 và S6=−105. Với q=1,u1=8 thì S9=72, không chia cho (1−q). Tổng vô hạn 8−4+2−1+… bằng16/3 vì |q|=1/2<1; phần dư q âm có dấu. P15 a1=9,q=−1/3 cho S∞=27/4,S4=20/3,R4=1/12. W03 a1=12,q=−1/2: Sn=8[1−(−1/2)^n], S∞=8; |R_n|=8/2^n<1/4 tương đương 2^n>32, **n nhỏ nhất 6**, vì n5 chỉ bằng1/4.
4. **O16–O18: mô hình thay đổi & tài chính đúng mốc.** A_k=50+5k và B_k=50·1,1^k cho k0,1,2,3 có B−A lần lượt0,0,0,5,1,55 nên k đầu tiên chênh ít nhất1 là3. 8 triệu tăng lãi kép5% trong hai kỳ được8,82 triệu, không cộng 0,05 triệu cố định. Gửi 40 **cuối kỳ** 1–3 thì FV3=40(1+1,05+1,05²)=126,1; gửi **đầu kỳ** thì 132,405, chênh6,305. W04 vay42 tại t0, lãi10%, cuối kỳ trả A: B1=46,2−A,B2=50,82−2,1A=0 => A=24,2,B1=22; lãi0% trả21. Bài mô hình chỉ có giá trị theo giả thiết, không là báo giá tài chính hay đo thực tế.

## 3. PED1–PED6/D1–D6 theo tuyến

- Đã đọc 18 tuyến Kiến thức, ví dụ có lý do, Vận dụng–Đối chiếu và hướng chữa sai: miền chỉ số hữu hạn; suy ra dạng tường minh từ truy hồi; chứng minh dấu hiệu mọi n chứ không thử vài số; cận dưới đạt và cận trên không đạt; công sai từ *chênh chỉ số*; công bội âm và công bội0; điều kiện tổng lùi vô hạn |q|<1; phân biệt tăng cộng đều với nhân theo %, số kỳ gửi cuối kỳ khác đầu kỳ.
- Hướng khắc phục chỉ rõ phép kiểm thử tương ứng: thử n=1,2 trước khi suy công thức, vẽ số kỳ 0→1→2→3, nêu đoạn chặn và bất đẳng thức nghiêm ngặt, không tự nối mô hình rời rạc thành đường liên tục. Trong Topic chỉ có **Kiến thức / Luyện tập / Tự kiểm tra**, không tạo Core độc lập.
- Các bài Written có đề, lời giải suy luận, rubric theo nguồn, chỉ tự đối chiếu. Tự kiểm tra 18 câu là **replay công khai đã gặp**, không được dùng cho `TOPIC_READINESS` hay Skill Mastery. RD1 private không thuộc gói này.

## 4. Phạm vi verdict và checkpoint

AUTHOR_MATH_CHECKED_SCOPE: no P0/P1 detected across the read 69 items, demonstrated above on representative high-risk computations; Q15 source integrity 69/69 items and 142/142 canonical fields PASS. AUTHOR_PED_CHECKED_SCOPE: 18/18 instructional journeys and opt-in D6 inspected. Đây **không** phải chứng nhận mới Academic/PED độc lập từ NotebookLM, không là browser/AP responsive, không phải chấm độc lập RD1 và không đối chiếu lại ảnh SGK bản in.
AUTHORING_STATUS: existing signed R07 learner CONTENT_READY preserved at exact blob `b6074c8641963a296e3f990397eba685c968c6ea`. No learner/source/answer/rubric/ID changes, no Delta C, no need for NotebookLM full-review repeat. Historical Q18/A1/V2/manifest/REGISTER remain untouched.
RELEASE: PR #828 remains Draft; no merge/deploy, Firebase, Final Submit or Mastery changes.