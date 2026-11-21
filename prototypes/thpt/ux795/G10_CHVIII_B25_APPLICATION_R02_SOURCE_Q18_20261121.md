# G10 B25 · Q18 R02 · Ứng dụng bậc 5 và phát hành theo gate hiện hữu · 21/11/2026

**RECEIPT_ID:** G10-CHVIII-B25-APPLICATION-R02-SOURCE-Q18-20261121
**LESSON_ID:** G10-SGK-CHVIII-B25
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-viii/bai-25.md`
**R02_PREVIOUS_SOURCE_BLOB:** `4b8d329366e0710cbf5a6546d219e9d75f18abcb`
**R02_CORRECTED_SOURCE_BLOB:** `3fdd065beb95b317d7e213a9ab9d9ed845fc16a2`
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` (chỉ bổ sung một đoạn tính gần đúng bậc 5 đã có trong SGK); R01 nguyên trạng
**G2_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`, independent NotebookLM NOT_CLAIMED
**OWNER_P2:** `OWNER_P2_PENDING`
**MASTER:** #795, B25 S1 applied breadth / G3–G5 exact scope

## G0/G1/G2 affected source

SGK B25 n=4/5, ứng dụng gần đúng 1,05^4 và 1,02^5 cùng sai số tuyệt đối ở trang in 73–75. R01 đã biên soạn đầy đủ cây nhánh/tam giác Pascal/6 ví dụ và bảo toàn 4 FirstTry/4 answers/6 HELP/D6. R02 thêm **duy nhất đoạn bậc 5**: `1,02^5≈1+5×0,02=1,10`; tính đủ `1,1040808032`; sai số tuyệt đối `0,0040808032`, hạng dư dương với t=0,02. Các số tính chính xác bằng khai triển nhị thức bậc 5; không dùng dấu bằng cho giá trị gần đúng.

**Parity G2:** all 4 FirstTry original answer/rationale bodies, IDs, all 6 HELP/D6, 4 Golden tabs, previous MathJax tokens, 6 Golden solution boxes, original tree/Pascal diagrams and CSS/JS unchanged. Phân loại chỉ 2.5 S1 application. Source old/new exact Git blob SHA above; no bank/RD1/Final Submit/Mastery/Firebase/Gemini changes. P0=0/P1=0 affected scope; no independent reviewer verdict claimed.

**G3–G5 caveat:** R01 source PR #970 had PR CI SUCCESS and merged on `main` at `69b8ecba6b7553a0a0219ccf388b940496695ab0` but **first production run #44849897121 FAILED** due historical math-token preservation gate permitting only B10–12 academic repairs, not due mathematical error. R02 adds source material (no previous MathJax deleted) and uses same production proof gate without disabling it. Must get exact HEAD CI and production publish SUCCESS before P1. Owner P2 afterward.
