# CURRENT AUTHORING HEAD — Chuyên đề 1 R05 (10/11/2026)

**LANE:** AUTHORING · **Draft PR:** #801 · **Standard:** SLM-THPT-QUALITY-ONE/1.2.0 Q01–Q18.  
**RELEASE:** NO · **CONTENT_READY:** NO · **NEW DELTA ACADEMIC/PED:** PENDING INDEPENDENT REVIEW.

## 1. Bảo toàn nguồn đã PASS

- R18 M1–M7 public canonical: \`Temp_TOPIC_FUNCTIONS_FULL_PUBLIC_CANONICAL_SOURCE_R18_20261108.md\` blob **\`2340ea4975b37a457363eea59dd617070934983c\`**, immutable.
- M4/M5/M7 và M6 gốc vẫn thuộc bản R18 được duyệt; không mở review toàn bộ vì bổ sung mới. Private RD1 30 item của owner vẫn ở kho kín, không trích vào Git.
- Không đổi website, Topic/SGK paths, Golden UI, Firebase, Gemini, Final Submit, canonical learner item bank, các khóa tiến độ hay Skill Mastery.

## 2. Kết quả làm mới Q15 trong chính nhánh AUTHORING

- R04 trước đó có 14 DRAFT (10 APP + 4 Written); sau so trùng bằng stem, solution, outcome thực đã rút \`DRAFT-T1-M1-APP01\`, \`DRAFT-T1-M1-APP04\`, \`DRAFT-T1-M3-APP08\`. Bằng chứng: bảng nhận diện EX-M1-01, ví dụ chi phí vé của M1, Topic-P02 điều kiện a≠0. Không mint canonical ID cho các bài này.
- **Danh sách còn lại R05: 11 DRAFT = 7 APP + 4 Written.** Hai file Practice đã được đọc lại nguyên văn và ID unique 11/11.
- 11 ứng viên không mặc nhiên là 11 câu toán học mới đủ sâu; APP05–APP06, M2-APP05, M3-APP07 và M3-WR02 cần reviewer xác nhận không trùng ngữ nghĩa/phạm vi. Full cross-bank Q15 vẫn HOLD.
- Audit Q15 có chứng cứ: \`Temp_TOPIC1_Q15_CROSS_BANK_RETIRE_3_AND_11_CANDIDATES_R05_20261110.md\` blob **\`b8d2f49561ac4746b90ec4a50d2271d2823ebd2e\`**. Ma trận role/outcome bổ sung blob \`569eab312ecf505a762a7bc14304d9ea291f4ec9\`.

## 3. Một nguồn NotebookLM hiện hành

- **R05 review transport:** \`Temp_TOPIC1_ALL_NEW_DELTA_M1_M3_M6_NOTEBOOKLM_ONE_SOURCE_R05_20261110.md\`; **Git blob \`ac00738b6db48b01e2c40764bf93176cbd80844e\`**.
- **22/22** thành phần có tên và Git blob trên manifest; đã kiểm trực tiếp 18 nguồn giữ nguyên và 4 nguồn mới; **22/22** source SHA và content length đúng HEAD. R05 chứa nguyên nội dung thật, có 5 câu prompt và 11 ID expected.
- **R04 \`72ed291e65f1a321fcc6150e81319362631a96eb\` SUPERSEDED:** chỉ giữ trong Git history, không dùng cùng R05. QA lịch sử 17/14 là trước Q15 R05, không đếm theo đó.
- Scope reviewer: **M1–M3 + M6 DELTA_C**, 4 SVG + 4 HTML, 11 DRAFT; chỉ đúng 5 Permanent THPT v2.1 và SGK/SBT KNTT S1. Academic và PED verdict riêng theo outcome/item/model; source receipt, P0/P1/P2, minimal delta.
- R18 không đổi. Không tạo nguồn canonical thứ hai, không copy item/answer/rubric; R05 chỉ là bản vận chuyển reviewer.

## 4. QA và blocker chính xác

| Gate | Trạng thái |
|---|---|
| Q15 duplicate removal (nội bộ, 6 retired across R04/R05) | COMPLETED for known overlaps; full bank semantics HOLD |
| Candidate IDs and source SHA R05 | 11/11 unique; 22/22 source SHA and readback VERIFIED |
| Math spot R04 and M6 mocked JS/Canvas | Historical tested cases PASS, **không** là kiểm hết nguồn hoặc Academic PASS |
| Independent NotebookLM Academic/PED Delta C R05 | PENDING, chưa có SOURCE_RECEIPT reviewer |
| Q07/D5 real Chromium/Safari render/touch/keyboard/a11y | PENDING, không ghi AP PASS |
| Canonical item_id/content_version/multiple placement | HOLD until semantic + review evidence |
| V2 TOPIC compatibility intake | Issue #790 OPEN; RELEASE Draft #799 not merged |
| V2 validated ready/REGISTER / CONTENT_READY / website release | NO |

**NEXT:** nhận independent reviewer verdict trên R05; đóng MINIMAL_DELTA theo outcome/item và Q15 canonical mapping, kiểm Q07 browser thật, chỉ sau đó xét V2 handoff và READY. Không merge/deploy hoặc kích hoạt Mastery từ nhánh AUTHORING.
