# AUTHORING R03 — Giải quyết hai sai lệch kiểm toán do bộ lọc ID quá hẹp (G11/G12)

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-Q15-COUNT-AUDIT-R03-20261107  
**ONE STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18; Q15 one item ID, multiple placement/role  
**LANE:** AUTHORING; **ACADEMIC/PED:** pending for new vertical Topic; **READY:** NO; **RELEASE:** NO.

## 1. G11 Chương IX: “62 stems” là ĐÚNG, không phải 60

**Original exact source:** \`prototypes/thpt/content-drafts/G11_CHIX_B31_B33_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md\`, Git blob \`3fe3b1a12fac656b543ba3ba2743e3ba855c4fe0\`.

Kiểm toán R01/R02 trước đây chỉ match \`^#### THPT-G11-CHIX-B(31|32|33)-[CP]NN\`, nên nhìn thấy B31 20 + B32 30 + B33 10 = **60** và đặt \`SOURCE_STEM_COUNT_DIFF_HOLD\`. Đọc lại toàn bộ **PART D** cho thấy còn đúng hai item có tiền tố **CHIX** thay vì B31/B32/B33:

| Canonical public item (đã có trong nguồn G11, không tạo mới) | Role | Source skill | Phạm vi |
|---|---|---|---|
| \`THPT-G11-CHIX-CHIX-C01\` | SGK_CORE | \`G11-CHIX-INTEGRATED\` | Kết hợp vận tốc \(v=s'\), gia tốc \(a=s''\) với \(s(t)=t^3-3t^2\) |
| \`THPT-G11-CHIX-CHIX-P01\` | SGK_PRACTICE | \`G11-CHIX-INTEGRATED\` | Kết hợp tiếp tuyến tại x=1 và đạo hàm cấp hai của \(f(x)=x^2+2x\) |

**TOTAL PUBLIC D3 = 20 + 30 + 10 + 2 = 62**, khớp PART D nguồn gốc “62 stems”. Cùng nguồn còn có **9 Written** (B31/B32/B33 mỗi nhóm 3), **11 HELP** và **5 SVG**; Written nằm ở PART E, không tính trong 62 D3. **Không có item “mất” và không cần sinh thêm 2 item**. M6 Topic nên tham chiếu cả hai CHIX integrated items bằng **placement**, dùng đúng một canonical stem/key/solution/rubric.

\`M6_62_VS_60_SOURCE_COUNT_HOLD=CLOSED_BY_ID_REGEX_EXPANSION\`. Trước đó QA chỉ chứng minh 60 ID B31–B33, không được nói 60 là toàn ChIX. Đây là **sửa bằng chứng/metadata của Draft**, không sửa nguồn học thuật cũ.

## 2. G12 Chương I: “36 HELP” cũng ĐÚNG, không phải 32

**Original exact source:** \`prototypes/thpt/content-drafts/G12_SGK_CHI_B01_B05_FULL_CHAPTER_PUBLIC_CANONICAL_R00_SOURCE_CANDIDATE.md\`, Git blob \`f0862dcdab21dec136e43969f45c42638e7c7574\`.

Bộ đếm cũ chỉ match \`^### HELP-G12-B(01..05)-NN\` và thấy B01 6 + B02 6 + B03 6 + B04 7 + B05 7 = **32**; do đó suy nhầm thống kê \`"help":36\` ở đầu source không khớp. Đọc lại **tất cả** HELP headings và ID unique trên source thấy bốn HELP **cấp cuối Chương I**:

| Existing canonical HELP ID | Skill | Canonical return item |
|---|---|---|
| \`HELP-G12-CHI-END-01\` | \`G12-CHI-INTEGRATED_VARIATION_EXTREMA\` | \`THPT-G12-CHI-END-C01\` |
| \`HELP-G12-CHI-END-02\` | \`G12-CHI-INTEGRATED_ASYMPTOTE_GRAPH\` | \`THPT-G12-CHI-END-C02\` |
| \`HELP-G12-CHI-END-03\` | \`G12-CHI-INTEGRATED_ERROR_DIAGNOSIS\` | \`THPT-G12-CHI-END-C03\` |
| \`HELP-G12-CHI-END-04\` | \`G12-CHI-INTEGRATED_MODEL_RATE_OPTIMUM\` | \`THPT-G12-CHI-END-C04\` |

**TOTAL D6 HELP = 32 (B01–B05) + 4 (END) = 36**, khớp source-author summary. **Không thiếu HELP và không cần viết bốn HELP giả**. Bốn HELP cuối chương gắn các **RD0/client self-check public**, không đương nhiên là phần trợ giúp cho **TOPIC_READINESS** độc lập. Q16 vẫn yêu cầu bảo vệ RD1 kín, không hint/key/đúng-sai trước Final Submit.

\`G12_HELP_36_VS_32_SOURCE_COUNT_HOLD=CLOSED_BY_ID_REGEX_EXPANSION\`. Học liệu G12 source vẫn ghi \`ACADEMIC/PED INDEPENDENT_PENDING\`; **đếm đúng không đồng nghĩa academic approval**.

## 3. Tác động Delta và quy tắc QA

- **DELTA_B_SOURCE_EQUIVALENT (metadata/receipt only):** cập nhật bộ đếm/nhóm ID/nguồn và các ledger mới của PR #782. Không sửa toán, đề, key, rubric hay nguồn đã PASS, không review lại toàn chương chỉ vì kiểm toán đã sửa.
- **DELTA_C_ACADEMIC_MATERIAL:** M1–M7 new pedagogy và các ứng viên bài mới vẫn cần NotebookLM Academic/PED độc lập đúng 5 Permanent THPT v2.1 + S1, theo outcome và exact source blob.
- M6 \`TOP-FUNC-M6-O01..O09\` so với nhãn O01..O10 từng xuất hiện trong phác thảo vẫn là **metadata outcome review HOLD khác**, không được nhầm với vấn đề 62/60 item đã đóng.
- Đề xuất placement cho hai item G11 CHIX và bốn HELP G12 END còn ở trạng thái **AUTHORING_DRAFT**; không tự xem là đã được tích hợp, không nâng Mastery.
- Q15 tiếp tục rà **trùng nội dung toán giữa các lớp và giữa ứng viên mới với ngân hàng đã có**; khóa này không được tuyên bố giải quyết chỉ vì đếm đủ ID.

**CHECKPOINT:** \`G11_CHIX_D3_62_EXACT_IDS=VERIFIED\`, \`G12_CHI_HELP_36_EXACT_IDS=VERIFIED\`, \`BOTH_SOURCE_COUNT_METADATA_HOLDS=CLOSED\`, \`G12_INDEPENDENT_ACADEMIC_PED=PENDING\`, \`VERTICAL_TOPIC_CONTENT_READY=NO\`, \`RELEASE=NO\`.
