# Biên bản bàn giao chung — Nâng cấp Kiến thức SGK Toán 11–12

**Nhiệm vụ duy nhất:** [#1039](https://github.com/TMA2015/self-learning-math/issues/1039) · **Checklist duy nhất:** `prototypes/thpt/SGK_11_12_AUTHORING_CHECKLIST_OWNER_RESET_20261122.md` (tham chiếu phiên bản do owner chốt trong #1039). **Chuẩn:** SLM-THPT-QUALITY-ONE hiện hành, Q18. **Cập nhật:** 24/11/2026.

**Quyết định owner 24/11/2026:** Đây là **biên bản bàn giao sống duy nhất của cả đợt**, đặt ở đường dẫn cố định này, cập nhật từng dòng khi từng bài hoàn thành; không tạo receipt/handoff/manifest/ledger riêng cho từng bài hoặc từng chương, không tạo bản learner song song. Biên nhận Q18/Delta cần thiết tích hợp trực tiếp trong chính tài liệu chung này, dùng Git history giữ phiên bản; không mở lại hồ sơ lịch sử đã nghiệm thu. Chỉ chốt CONTENT_READY khi đã thực sự tự kiểm đúng/đủ SGK, toán, điều kiện, lời giải, hình và khả năng tự học, sửa hết lỗi thực chất. NotebookLM chỉ dùng khi cần hoặc owner yêu cầu; kết quả cũ giữ theo snapshot, không lặp lại mặc định. Bàn giao ngay đúng source commit/blob và asset delta cho RELEASE; không chờ QA giao diện để hoàn tất AUTHORING. Không tự merge/deploy.

## Tiến độ và danh mục nguồn

- Phạm vi reset: 32 bài Toán 11 B02–B33 và 19 bài Toán 12 B01–B19, tổng 51. B01 lớp 11 không thuộc đợt.
- Đã xác nhận có PR nâng cấp riêng đúng 32/32 bài lớp 11; trạng thái **bản thảo có thật** không phải tự động hoàn thành. B33 đã có biên nhận hoàn chỉnh và bàn giao. Các bài khác: dùng lại chứng cứ có sẵn, chốt source/asset đúng snapshot và xử lý phần thực sự còn thiếu, rồi cập nhật dòng dưới đây. Không đánh dấu PASS chỉ bằng số lượng PR.
- B10–B17: bằng chứng review nằm trong PR liên quan; B18–B21: [kết luận đối chiếu](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7098583928); B22–B27: [kết luận đối chiếu và B27 delta](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7106569995). Giữ nguyên phạm vi/snapshot, không gán independent PASS cho nội dung mới.
- Toán 12 B01–B19: chưa xác nhận hoàn thành đợt reset hiện hành; không dùng PR đợt đã hủy #987 để tính hoàn thành.

| Lớp | Bài | PR nguồn canonical | Trạng thái AUTHORING / bàn giao |
|---|---|---|---|
| 11 | B02 | [#1021](https://github.com/TMA2015/self-learning-math/pull/1021) | Đã biên soạn, có tự kiểm; còn chốt chất lượng/bàn giao |
| 11 | B03 | [#1023](https://github.com/TMA2015/self-learning-math/pull/1023) | Đã biên soạn, có tự kiểm; còn chốt chất lượng/bàn giao |
| 11 | B04 | [#1025](https://github.com/TMA2015/self-learning-math/pull/1025) | Đã biên soạn, có tự kiểm; còn chốt chất lượng/bàn giao |
| 11 | B05 | [#1027](https://github.com/TMA2015/self-learning-math/pull/1027) | Đã biên soạn, có tự kiểm; còn chốt chất lượng/bàn giao |
| 11 | B06 | [#1028](https://github.com/TMA2015/self-learning-math/pull/1028) | Đã biên soạn, có tự kiểm; còn chốt chất lượng/bàn giao |
| 11 | B07 | [#1029](https://github.com/TMA2015/self-learning-math/pull/1029) | Đã biên soạn, có tự kiểm; còn chốt chất lượng/bàn giao |
| 11 | B08 | [#1030](https://github.com/TMA2015/self-learning-math/pull/1030) | Đã biên soạn, có tự kiểm; còn chốt chất lượng/bàn giao |
| 11 | B09 | [#1031](https://github.com/TMA2015/self-learning-math/pull/1031) | Đã biên soạn, có tự kiểm; còn chốt chất lượng/bàn giao |
| 11 | B10 | [#1034](https://github.com/TMA2015/self-learning-math/pull/1034) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B11 | [#1035](https://github.com/TMA2015/self-learning-math/pull/1035) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B12 | [#1036](https://github.com/TMA2015/self-learning-math/pull/1036) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B13 | [#1037](https://github.com/TMA2015/self-learning-math/pull/1037) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B14 | [#1038](https://github.com/TMA2015/self-learning-math/pull/1038) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B15 | [#1041](https://github.com/TMA2015/self-learning-math/pull/1041) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B16 | [#1042](https://github.com/TMA2015/self-learning-math/pull/1042) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B17 | [#1043](https://github.com/TMA2015/self-learning-math/pull/1043) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B18 | [#1044](https://github.com/TMA2015/self-learning-math/pull/1044) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B19 | [#1045](https://github.com/TMA2015/self-learning-math/pull/1045) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B20 | [#1046](https://github.com/TMA2015/self-learning-math/pull/1046) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B21 | [#1047](https://github.com/TMA2015/self-learning-math/pull/1047) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B22 | [#1048](https://github.com/TMA2015/self-learning-math/pull/1048) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B23 | [#1049](https://github.com/TMA2015/self-learning-math/pull/1049) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B24 | [#1050](https://github.com/TMA2015/self-learning-math/pull/1050) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B25 | [#1052](https://github.com/TMA2015/self-learning-math/pull/1052) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B26 | [#1054](https://github.com/TMA2015/self-learning-math/pull/1054) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B27 | [#1056](https://github.com/TMA2015/self-learning-math/pull/1056) | Đã có kết quả Academic/PED PASS theo snapshot đã review; còn chốt bàn giao và đối chiếu delta |
| 11 | B28 | [#1062](https://github.com/TMA2015/self-learning-math/pull/1062) | Đã biên soạn, có tự kiểm; còn chốt chất lượng/bàn giao |
| 11 | B29 | [#1064](https://github.com/TMA2015/self-learning-math/pull/1064) | Đã biên soạn, có tự kiểm; còn chốt chất lượng/bàn giao |
| 11 | B30 | [#1065](https://github.com/TMA2015/self-learning-math/pull/1065) | Đã biên soạn, có tự kiểm; còn chốt chất lượng/bàn giao |
| 11 | B31 | [#1066](https://github.com/TMA2015/self-learning-math/pull/1066) | Đã biên soạn, có tự kiểm; còn chốt chất lượng/bàn giao |
| 11 | B32 | [#1067](https://github.com/TMA2015/self-learning-math/pull/1067) | Đã biên soạn, có tự kiểm; còn chốt chất lượng/bàn giao |
| 11 | B33 | [#1068](https://github.com/TMA2015/self-learning-math/pull/1068) | CONTENT_READY — đã bàn giao |
| 12 | B01–B19 | Bổ sung PR canonical vào bảng này khi thực hiện | Chưa xác nhận hoàn thành |

## Bằng chứng bàn giao các bài đã chốt

### B33 — hoàn thành, source-locked

Dữ liệu dưới đây được hợp nhất nguyên văn từ biên nhận B33 đã lập trước quyết định gom hồ sơ (Git blob lịch sử `58e65949b8b984b1c1cd8c7bce5b152ab65a3973` tại commit `9076b4c8665fae5075140afa2d639f0c6f9dc51c`). Từ nay **chỉ cập nhật tài liệu chung này**. Không tạo biên nhận mới theo bài. RELEASE dùng đúng commit/blob learner và asset ở đây, không phải bản sao học liệu trong tài liệu.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
RELEASE_SCOPE: SGK_KNOWLEDGE_ENRICHMENT_ONLY
LESSON_ID: G11-B33
SOURCE_PATH: docs/thpt-preview/sgk/lop-11/chuong-ix/bai-33.md
BASELINE_SOURCE_BLOB: 920752c92ab12a97d8e034780907fd2bcaac1308
CANDIDATE_SOURCE_BLOB: d32215716790846bf910a20e334fdbf4253880b2
ACADEMIC_SOURCE_BLOB: d32215716790846bf910a20e334fdbf4253880b2
SOURCE_COMMIT: fa0aa257b5bbcfd3611b46362951098e627c2c01
BASELINE_PUBLISHED_HTML_BLOB: 5e7f0bfa4442903ae4bc271a53e6296320710722
FIG_ASSET_BLOB: 58fcb5ce261fe35d93d8eacd2af584c7b93dc1a9 (existing unchanged)
AUTHORING_PR: #1068
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY (unchanged)
OFFICIAL_READINESS: NOT_CLAIMED
MASTERY_ACTIVATION: NO
BLOCKERS: NONE (authoring Knowledge scope)
AUTHORING_PASS: CONTENT_READY (Knowledge enrichment only)
RELEASE_INTAKE: PENDING_RELEASE

## S1 and scope

Read the actual digitized KNTT Toán 11 tập 2 SGK B33, printed pages 95–96 ([PDF](https://thuvienhoclieu.com/wp-content/uploads/2026/05/thuvienhoclieu.com-SGK-Toan-11-tu-nam-2026-Tap-2.pdf), text pp.95–96: definition, HĐ1–2, examples, applications, exercises 9.13–9.17). Both sections and all essential results are covered. PDF text was read directly; source screenshot cache miss does not alter the verified textual mathematics. Baseline original chapter's independent receipt and source lock remain unchanged; not claimed for new prose. Main learner baseline and gh-pages HTML checked against matching old section headings.

## Actual self-QA by affected outcome

| OUTCOME_ID | DELTA_ID | Mathematical verification and teaching evidence |
|---|---|---|
| G11-B33-SECOND_DEF | B33-KNOW-01 | §1.1/2.1: definition `f''=(f')'`, existence of f' and differentiability of f' at point; x³−3x²+2x gives f'(1)=−1, f''(1)=0; new counterexample x|x| has f'=2|x| and left/right derivatives −2/+2 at 0, so f''(0) does not exist. Distinguish square from repeated differentiation. |
| G11-B33-POLYNOMIAL | B33-KNOW-02 | §3.1: 2x⁴−3x²+6 → 8x³−6x → 24x²−6; §3.8 parameter a=−1,b=2, independently substitute both conditions. |
| G11-B33-TRIG_EXP | B33-KNOW-03 | §1.1/2.1/3.2–3.5/3.9: two chain applications; x²+e^(2x−1) → 2+4e^(2x−1); xe^(2x) → (4+4x)e^(2x); different self-attempt xe^(3x) → (6+9x)e^(3x); ln(2x+3) → −4/(2x+3)² only for x>−3/2; sin(2x+π/4) → −4sin(2x+π/4); 2sin²(x+π/4) → 4cos(2x+π/2), bound 4 attained. |
| G11-B33-ACCELERATION | B33-KNOW-04 | §1.2/2.2/3.6–3.7: s→v→a from average acceleration limit; SGK spring a(5)=−8π²≈−79 cm/s²; s=2t²+½t⁴ gives v(4)=144 m/s, a(4)=100 m/s². Distinct discovery/recap functions: s=3t²+t³ gives a(2)=18, s=5t²+2t gives a=10. |
| G11-B33-SIGN_INTERPRET | B33-KNOW-05 | §1.2/2.2: same/opposite signs of v,a when v≠0; no inference at v=0. Cubic s example v(0.5)=v(1.5)=−0.25, a=−3/+3; separate SVG velocity/acceleration axes and units; oscillator x=3cos(2πt) gives v(1)=0 and a(1)=−12π². |

All nine original worked-example derivative computations independently checked with centered finite differences and analytical calculations; final edits checked by separate numerical tests and symbolic one-sided limits. All examples/conditions and signs reread. Self-attempt differs from solved product example. Discovery motivation, explanation before formalization, two SGK sections, worked examples and local remediation retained. Existing SVG math corresponds to v=3t²−6t+2, a=6t−6; caption explains separate units/axes. No new learner asset or parallel learner source.

## Scope, safety and handoff

Five original outcome IDs remain unchanged. Existing public Core/Practice C01–C05 and P01–P05 and Written/Anchor remain frozen; original public source register consulted, no item introduced, moved or modified; no private RD1 data accessed or copied. Two Vận dụng self-checks on Knowledge only, no independent assessment claim or Mastery writes. Four-tab source, two aligned sections, inline MathJax pairs balanced, existing SVG path verified. Scope-only author signoff: Q01–Q18 relevant to changed Knowledge satisfied, historical independent review applies only to old snapshot; P0=0; P1=0. This is a self-verification, not a claim of external reviewer PASS.

**AUTHOR_SIGNOFF:** ChatGPT AUTHORING — author confirms complete, correct and teachable within the assigned Knowledge-page scope; source locked at the commit/blob above. The existing §X-C enrichment-delta route applies to an already published SGK page: this receipt serves as the handoff for the one-lesson release batch, not a new whole-chapter V2 manifest/REGISTER or second academic approval. RELEASE may import the exact canonical learner bytes and unchanged asset from PR #1068, compare baseline and candidate blobs, and perform its scoped integration/render/assessment-safety checks. No release permission or deploy claimed.

## Cách cập nhật

Với mỗi bài tiếp theo: cập nhật dòng bảng + bằng chứng ngắn gọn trong tài liệu này (SGK/outcome và kết quả kiểm thật, baseline/candidate source blob, source commit, PR, asset delta nếu có, kết luận Q18 và lỗi còn tồn tại nếu có). Nếu có bằng chứng reviewer/hồ sơ lịch sử, dẫn link và giữ snapshot; không nhân bản. RELEASE tiếp nhận các dòng CONTENT_READY và phản hồi vào cùng nhiệm vụ #1039. Không bắt buộc đồng thời hoàn tất cả 51 bài mới bàn giao từng bài. Core/Luyện tập, Tự kiểm tra, ngân hàng, RD1, Mastery, Firebase/Auth, Golden runtime đều ngoài scope.
