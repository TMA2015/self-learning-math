# Temp · G10 ChI R02 — Q18 proof request after corrected report (04/11/2026)

PACKET_ID: G10-SGK-CHI-PED-BRIDGE-R02-20261104
ONE_OFFICIAL_STANDARD: SLM-THPT-QUALITY-ONE v1.1.0 (Q01–Q18)
CORRECTION_SCOPE: Q18_PROVENANCE_REAL_MOUNTED_DIFF_ONLY
AUTHOR_ORIGINAL_ZIP_SHA256: 196f88bbb9f854f904947c81faddc719b46166606725270e07c778212ff6f05d
AUTHOR_ORIGINAL_SOURCE_BLOBS: 6e35f036329b11465189a2256cfbfd536e95993c / a112973b74768c3177d1a50a09229b214a1ef8b6 / ef7c1b5bec66aca0b4bd427218a4eb653cf9f92e / 3711fbd92e912661424d228c575b0dddf7dc979a
SOURCE_PARITY: REVIEWER_CLAIMED_PASS_NOT_INDEPENDENTLY_REPRODUCED
Q18_VERDICT: HOLD
CONTENT_READY: NO

## Independent reviewer targeted prompt — six sentences

1. Hãy chỉ kiểm tra Q18 provenance cho **đúng bốn Temp_ Markdown R02 gốc trong ZIP SHA256 nêu trên**, bằng đúng năm Permanent Sources THPT v2.1 và chuẩn Q01–Q18 v1.1.0; không review lại R01 hay viết lại toán chỉ vì metadata.
2. Báo cáo đính chính vừa gửi nói chỉ đổi CRLF→LF và xóa khoảng trắng cuối dòng, nhưng thực tế cả bốn file ZIP **đã là LF**, ba file Matrix/S1/Author QA **không có khoảng trắng cuối dòng**, và thử chuẩn hóa không tái tạo được bất kỳ SHA mounted nào; hãy giải thích mâu thuẫn này bằng chứng có thể lặp lại.
3. Cung cấp **toàn bộ bốn file mounted thực tế đã đọc**, hoặc báo cáo chênh lệch dòng/ký tự (unified diff) với ZIP gốc cùng SHA256 và số byte trước/sau, và chứng minh đề/đáp án/lời giải/HELP của cả 11 câu thực sự bất biến; chỉ đếm ITEM_ID/OUTCOME_ID không đủ.
4. Nếu không có quyền truy cập byte mounted, hãy nói rõ giới hạn rồi **review lại đúng bốn source gốc** từ ZIP đã khóa, gắn Git blob + SHA256 đúng trong receipt mới; không tuyên bố đã so sánh byte của nguồn không thể đọc.
5. Trả `SOURCE_RECEIPT`, `SOURCE_PARITY`, `Q18_VERDICT`, `ACADEMIC_VERDICT_NEW`, `PEDAGOGICAL_VERDICT_NEW`, `P0/P1/P2`, `MINIMAL_DELTA`, và chỉ ra outcome/item/điều kiện nếu còn sai lệch.
6. Nếu không chứng minh được nội dung nguồn reviewer chính là nội dung ZIP/Git đã khóa, bắt buộc `SOURCE_PARITY=UNPROVEN` và `Q18=HOLD`, không tự cấp CONTENT_READY, Mastery hay quyền phát hành.

## Author's reproducible actual source evidence

| File | ZIP bytes | LF / CRLF | Trailing whitespace | SHA256 gốc | SHA256 sau LF + trim | SHA256 mounted trong báo cáo | Khớp? |
|---|---:|---:|---:|---|---|---|---|
| `Temp_G10_CHI_PED_R02_LEARNING_20261104.md` | 30927 | 442 / 0 | 88 | `8bf91a21aab6bae0617b8aaf2d3770c487918d4536bbee14fdb93adaec9e6339` | `f0de4f02cbafc5f7836d73046b6b98a5e6ccbb15402bf3e0db46c2ac72ad591e` | `ac04c40e2c65c9876a970d9b7bdeadb639c7e674b9abca1176c17f8ddd058b74` | **NO** |
| `Temp_G10_CHI_PED_R02_OUTCOME_ITEM_MATRIX_20261104.md` | 4681 | 38 / 0 | 0 | `6402c0d367c192bca909fb4cffb605576772ec11cca144c99a7e7c9ecc30c50c` | `6402c0d367c192bca909fb4cffb605576772ec11cca144c99a7e7c9ecc30c50c` | `3ab3f215bc8d39c1def2b957f8363c66e7e6697035f8e85369cfce9f1fd93440` | **NO** |
| `Temp_G10_CHI_PED_R02_S1_SCOPE_AUDIT_20261104.md` | 2948 | 34 / 0 | 0 | `ddfe2b2a4c31baf333d23f9239621b7b0df84a8e7b2c4ac982b61fef791663f2` | `ddfe2b2a4c31baf333d23f9239621b7b0df84a8e7b2c4ac982b61fef791663f2` | `058439a852a2e939223fd28d04180ad9de106c2c4a96dac13ca28b1c96a4c0a2` | **NO** |
| `Temp_G10_CHI_PED_R02_AUTHOR_QA_SHA_20261104.md` | 3317 | 32 / 0 | 0 | `1522eded1b0c586281322e5af018dfa4a3a9c145bd550e2c636b46c3c4afb305` | `1522eded1b0c586281322e5af018dfa4a3a9c145bd550e2c636b46c3c4afb305` | `d67bf969b5f03f7aef966e9eff20ffcf9ef28f3de4c9945ee71a4eac7fad44fd` | **NO** |
