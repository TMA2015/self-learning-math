# Biên bản bàn giao chung — Nâng cấp Kiến thức SGK Toán 11–12

**Nhiệm vụ duy nhất:** [#1039](https://github.com/TMA2015/self-learning-math/issues/1039) · **Checklist duy nhất:** `prototypes/thpt/SGK_11_12_AUTHORING_CHECKLIST_OWNER_RESET_20261122.md` (tham chiếu phiên bản do owner chốt trong #1039). **Chuẩn:** SLM-THPT-QUALITY-ONE hiện hành, Q18. **Cập nhật:** 24/11/2026.

**Quyết định owner 24/11/2026:** Đây là **biên bản bàn giao sống duy nhất của cả đợt**, đặt ở đường dẫn cố định này, cập nhật từng dòng khi từng bài hoàn thành; không tạo receipt/handoff/manifest/ledger riêng cho từng bài hoặc từng chương, không tạo bản learner song song. Biên nhận Q18/Delta cần thiết tích hợp trực tiếp trong chính tài liệu chung này, dùng Git history giữ phiên bản; không mở lại hồ sơ lịch sử đã nghiệm thu. Chỉ chốt CONTENT_READY khi đã thực sự tự kiểm đúng/đủ SGK, toán, điều kiện, lời giải, hình và khả năng tự học, sửa hết lỗi thực chất. NotebookLM chỉ dùng khi cần hoặc owner yêu cầu; kết quả cũ giữ theo snapshot, không lặp lại mặc định. Bàn giao ngay đúng source commit/blob và asset delta cho RELEASE; không chờ QA giao diện để hoàn tất AUTHORING. Không tự merge/deploy.

## Tiến độ và danh mục nguồn

- Phạm vi reset: 32 bài Toán 11 B02–B33 và 19 bài Toán 12 B01–B19, tổng 51. B01 lớp 11 không thuộc đợt.
- **Toán 11 B02–B33: 32/32 CONTENT_READY, đã bàn giao đủ 32 nguồn canonical cho RELEASE.** B10–B27 kế thừa review đúng snapshot; B02–B09 và B28–B33 chốt Q18 AUTHOR_SELF_VERIFIED sau tự kiểm và sửa delta thực chất. Tổng đợt: 46/51 bài đã bàn giao; Toán 12 đã hoàn thành B01–B14, còn B15–B19. RELEASE_INTAKE=PENDING_RELEASE; biên bản này là điểm tiếp nhận nguồn, không phải chứng nhận website đã cập nhật.
- B10–B17: bằng chứng review nằm trong PR liên quan; B18–B21: [kết luận đối chiếu](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7098583928); B22–B27: [kết luận đối chiếu và B27 delta](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7106569995). Giữ nguyên phạm vi/snapshot, không gán independent PASS cho nội dung mới.
- Toán 12: B01–B14 CONTENT_READY; B15–B19 chưa hoàn thành. Không dùng PR đợt đã hủy #987 để tính hoàn thành.

| Lớp | Bài | PR nguồn canonical | Trạng thái AUTHORING / bàn giao |
|---|---|---|---|
| 11 | B02 | [#1021](https://github.com/TMA2015/self-learning-math/pull/1021) | CONTENT_READY — đã bàn giao |
| 11 | B03 | [#1023](https://github.com/TMA2015/self-learning-math/pull/1023) | CONTENT_READY — đã bàn giao |
| 11 | B04 | [#1025](https://github.com/TMA2015/self-learning-math/pull/1025) | CONTENT_READY — đã bàn giao |
| 11 | B05 | [#1027](https://github.com/TMA2015/self-learning-math/pull/1027) | CONTENT_READY — đã bàn giao |
| 11 | B06 | [#1028](https://github.com/TMA2015/self-learning-math/pull/1028) | CONTENT_READY — đã bàn giao |
| 11 | B07 | [#1029](https://github.com/TMA2015/self-learning-math/pull/1029) | CONTENT_READY — đã bàn giao |
| 11 | B08 | [#1030](https://github.com/TMA2015/self-learning-math/pull/1030) | CONTENT_READY — đã bàn giao |
| 11 | B09 | [#1031](https://github.com/TMA2015/self-learning-math/pull/1031) | CONTENT_READY — đã bàn giao |
| 11 | B10 | [#1034](https://github.com/TMA2015/self-learning-math/pull/1034) | CONTENT_READY — đã bàn giao |
| 11 | B11 | [#1035](https://github.com/TMA2015/self-learning-math/pull/1035) | CONTENT_READY — đã bàn giao |
| 11 | B12 | [#1036](https://github.com/TMA2015/self-learning-math/pull/1036) | CONTENT_READY — đã bàn giao |
| 11 | B13 | [#1037](https://github.com/TMA2015/self-learning-math/pull/1037) | CONTENT_READY — đã bàn giao |
| 11 | B14 | [#1038](https://github.com/TMA2015/self-learning-math/pull/1038) | CONTENT_READY — đã bàn giao |
| 11 | B15 | [#1041](https://github.com/TMA2015/self-learning-math/pull/1041) | CONTENT_READY — đã bàn giao |
| 11 | B16 | [#1042](https://github.com/TMA2015/self-learning-math/pull/1042) | CONTENT_READY — đã bàn giao |
| 11 | B17 | [#1043](https://github.com/TMA2015/self-learning-math/pull/1043) | CONTENT_READY — đã bàn giao |
| 11 | B18 | [#1044](https://github.com/TMA2015/self-learning-math/pull/1044) | CONTENT_READY — đã bàn giao |
| 11 | B19 | [#1045](https://github.com/TMA2015/self-learning-math/pull/1045) | CONTENT_READY — đã bàn giao |
| 11 | B20 | [#1046](https://github.com/TMA2015/self-learning-math/pull/1046) | CONTENT_READY — đã bàn giao |
| 11 | B21 | [#1047](https://github.com/TMA2015/self-learning-math/pull/1047) | CONTENT_READY — đã bàn giao |
| 11 | B22 | [#1048](https://github.com/TMA2015/self-learning-math/pull/1048) | CONTENT_READY — đã bàn giao |
| 11 | B23 | [#1049](https://github.com/TMA2015/self-learning-math/pull/1049) | CONTENT_READY — đã bàn giao |
| 11 | B24 | [#1050](https://github.com/TMA2015/self-learning-math/pull/1050) | CONTENT_READY — đã bàn giao |
| 11 | B25 | [#1052](https://github.com/TMA2015/self-learning-math/pull/1052) | CONTENT_READY — đã bàn giao |
| 11 | B26 | [#1054](https://github.com/TMA2015/self-learning-math/pull/1054) | CONTENT_READY — đã bàn giao |
| 11 | B27 | [#1056](https://github.com/TMA2015/self-learning-math/pull/1056) | CONTENT_READY — đã bàn giao |
| 11 | B28 | [#1062](https://github.com/TMA2015/self-learning-math/pull/1062) | CONTENT_READY — đã bàn giao |
| 11 | B29 | [#1064](https://github.com/TMA2015/self-learning-math/pull/1064) | CONTENT_READY — đã bàn giao |
| 11 | B30 | [#1065](https://github.com/TMA2015/self-learning-math/pull/1065) | CONTENT_READY — đã bàn giao |
| 11 | B31 | [#1066](https://github.com/TMA2015/self-learning-math/pull/1066) | CONTENT_READY — đã bàn giao |
| 11 | B32 | [#1067](https://github.com/TMA2015/self-learning-math/pull/1067) | CONTENT_READY — đã bàn giao |
| 11 | B33 | [#1068](https://github.com/TMA2015/self-learning-math/pull/1068) | CONTENT_READY — đã bàn giao |
| 12 | B01 | [#1069](https://github.com/TMA2015/self-learning-math/pull/1069) | CONTENT_READY — đã bàn giao |
| 12 | B02 | [#1070](https://github.com/TMA2015/self-learning-math/pull/1070) | CONTENT_READY — đã bàn giao |
| 12 | B03 | [#1071](https://github.com/TMA2015/self-learning-math/pull/1071) | CONTENT_READY — đã bàn giao |
| 12 | B04 | [#1073](https://github.com/TMA2015/self-learning-math/pull/1073) | CONTENT_READY — đã bàn giao |
| 12 | B05 | [#1074](https://github.com/TMA2015/self-learning-math/pull/1074) | CONTENT_READY — đã bàn giao |
| 12 | B06 | [#1075](https://github.com/TMA2015/self-learning-math/pull/1075) | CONTENT_READY — đã bàn giao |
| 12 | B07 | [#1076](https://github.com/TMA2015/self-learning-math/pull/1076) | CONTENT_READY — đã bàn giao |
| 12 | B08 | [#1077](https://github.com/TMA2015/self-learning-math/pull/1077) | CONTENT_READY — đã bàn giao |
| 12 | B09 | [#1078](https://github.com/TMA2015/self-learning-math/pull/1078) | CONTENT_READY — đã bàn giao |
| 12 | B10 | [#1079](https://github.com/TMA2015/self-learning-math/pull/1079) | CONTENT_READY — đã bàn giao |
| 12 | B11 | [#1080](https://github.com/TMA2015/self-learning-math/pull/1080) | CONTENT_READY — đã bàn giao |
| 12 | B12 | [#1081](https://github.com/TMA2015/self-learning-math/pull/1081) | CONTENT_READY — đã bàn giao |
| 12 | B13 | [#1082](https://github.com/TMA2015/self-learning-math/pull/1082) | CONTENT_READY — đã bàn giao |
| 12 | B14 | [#1083](https://github.com/TMA2015/self-learning-math/pull/1083) | CONTENT_READY — đã bàn giao |
| 12 | B15–B19 | Bổ sung PR canonical vào bảng này khi thực hiện | Chưa xác nhận hoàn thành |

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

### B18–B27 — bàn giao trên snapshot đã kiểm (24/11/2026)

Q18 independent review giữ nguyên: B18–B21 theo [#1039 kết luận Chương VI](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7098583928); B22–B27 theo [kết luận Chương VII và delta B27](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7106569995). Các nguồn được đọc lại theo exact commit; 10/10 learner blob trùng snapshot đã xác minh (B27 là delta biên tập hai câu, không tuyên bố reviewer mới). 4 tabs readback; không yêu cầu NotebookLM lặp. Biên nhận toán, PED, S1, figure, ví dụ tự giải và outcome nằm trong PR nguồn và kết luận review dẫn trên, được kế thừa đúng snapshot. P0/P1 học liệu = 0 theo bằng chứng đã đối chiếu; QA hiển thị thuộc RELEASE. Diff thực kiểm chỉ Knowledge và SVG riêng bài; không sửa phần khóa. **AUTHOR_SIGNOFF=CONTENT_READY; RELEASE_INTAKE=PENDING_RELEASE** cho các dòng dưới đây.

| Bài / PR | Commit khóa | Blob nền main lúc đối chiếu | Blob ứng viên | Phạm vi kiến thức/kiểm đã có | SVG thay đổi (lấy theo commit khóa, thư mục docs/assets/images/thpt) |
|---|---|---|---|---|---|
| B18 [#1044](https://github.com/TMA2015/self-learning-math/pull/1044) | `9933fdbaca1c9958c3790b838c8b9d8974fa81ae` | `fd7d7a33ec276c4e03c95185c5ea49b53643b584` | `e4a0c64cd075b300657f8f0df93fc54b0ab01caa` | Lũy thừa nguyên/hữu tỉ/thực; miền, căn bậc ba x³, so sánh lũy thừa, lãi kép. | Không; dùng asset hiện có |
| B19 [#1045](https://github.com/TMA2015/self-learning-math/pull/1045) | `4a288c5121c42bddf94ce8d04602bb779aaa84ff` | `f872e9f19e28467e1b6ea11a943e04a2edf3b266` | `b4a8ee2f8231467ed9d676f6ecc525d94c4634e1` | Khái niệm/tính chất log, log thập phân/tự nhiên, đổi cơ số, điều kiện đối số, pH. | Không; dùng asset hiện có |
| B20 [#1046](https://github.com/TMA2015/self-learning-math/pull/1046) | `74344e822cd5db58eeea1f88ff559a9eae6c8c36` | `1587f399e7ea9557a9fc490768c589991f25dcb0` | `4833132b85a1ccae082e85b637552566eec02ed1` | Hàm mũ/log; miền, chiều biến thiên theo cơ số, đồ thị hàm ngược. | `G11_B20_DECREASING_EXP_LOG_AUTHORING_20261123.svg` |
| B21 [#1047](https://github.com/TMA2015/self-learning-math/pull/1047) | `2f29ae531ca601f50fd7fe855fe38c9ca50a5eac` | `b7fb59866ce1b250e446cb957d975e7c58d037bb` | `e2d4213054d572f856ed4f1d551fbe7c275b8521` | PT/BPT mũ/log; cả hai đối số dương, đổi chiều với cơ số dưới 1, kiểm nghiệm. | `G11_B21_EXP_LOG_THRESHOLD_AUTHORING_20261123.svg` |
| B22 [#1048](https://github.com/TMA2015/self-learning-math/pull/1048) | `5b40c5c8d03ad4e6fe02fbca2df4729bec51be9a` | `d8a679897dde1d2fa25e12df56772eb54be29ff4` | `7e175e84c93e61ac554ef0c037a9e006b6852e69` | Góc hai đường thẳng, vuông góc; véc-tơ kiểm góc 60°, Kheops, hình chỉ phương. | `G11_B22_KHEOPS_ANGLE_AUTHORING_20261123.svg`; `G11_B22_SKEW_PERP_RECTANGULAR_BOX_AUTHORING_20261123.svg` |
| B23 [#1049](https://github.com/TMA2015/self-learning-math/pull/1049) | `fa5b96f9ae0eab840065033d4c0ce9e5d0059994` | `ad1ce1335b2c4dcef36edff8f8ad5378b8f63cad` | `42446d25328308ed23e6c4e3b3444012e1662a38` | Đường vuông góc mặt phẳng; hai đường cắt nhau, trung trực, song song–vuông góc. | `G11_B23_PARALLEL_PLANES_NORMAL_AUTHORING_20261123.svg`; `G11_B23_PERPENDICULAR_BISECTOR_PLANE_AUTHORING_20261123.svg` |
| B24 [#1050](https://github.com/TMA2015/self-learning-math/pull/1050) | `f2a35940864abd6a8e76da5d5b6bfded89f44b6f` | `0bd7550087f455264e2b5e5d3214078e063ccb1c` | `720079470b25e79ec122a52e1ec051beda01dba8` | Chiếu vuông góc, góc đường–mặt, định lí ba đường vuông góc, trường hợp vuông góc mặt. | `G11_B24_SABC_PROJECTION_EXAMPLE_AUTHORING_20261123.svg`; `G11_B24_THREE_PERPENDICULAR_LINES_AUTHORING_20261123.svg` |
| B25 [#1052](https://github.com/TMA2015/self-learning-math/pull/1052) | `4b0e5f754e62d5a1178500f0ad53fa592cca9370` | `c6ba455035041fbe16ee66f346cb78477ceaaa73` | `79f444209a0c88a4538ddb495adbac3e7726452c` | Góc hai mặt, dấu hiệu/tính chất vuông góc, nhị diện, lăng trụ, chóp/chóp cụt; phân loại đúng. | `G11_B25_CUBE_EQUILATERAL_DIAGONALS_AUTHORING_20261123.svg`; `G11_B25_DIHEDRAL_CHAIR_AUTHORING_20261123.svg`; `G11_B25_PERPENDICULAR_PLANES_AUTHORING_20261123.svg`; `G11_B25_REGULAR_PYRAMID_FRUSTUM_AUTHORING_20261123.svg`; `G11_B25_RHOMBUS_PYRAMID_DIHEDRAL_AUTHORING_20261123.svg`; `G11_B25_SPECIAL_PRISMS_AUTHORING_20261123.svg` |
| B26 [#1054](https://github.com/TMA2015/self-learning-math/pull/1054) | `771e01b2896d400b14ecdfaff44e8f76f54d4e13` | `417ce70fc81b8a656e803855d0594dfa9db945b2` | `25d0234f560c186b89286366e73ce80ce2ce603c` | Khoảng cách điểm–đường/mặt, song song và chéo nhau; chân và đoạn vuông góc chung. | `G11_B26_PARALLEL_DISTANCES_AUTHORING_20261123.svg`; `G11_B26_PYRAMID_HEIGHT_AUTHORING_20261123.svg`; `G11_B26_RHOMBUS_PRISM_DISTANCES_AUTHORING_20261123.svg`; `G11_B26_RIGHT_TRIANGULAR_PRISM_AUTHORING_20261123.svg`; `G11_B26_SABC_COMMON_PERPENDICULAR_AUTHORING_20261123.svg`; `G11_B26_SKEW_COMMON_PERPENDICULAR_AUTHORING_20261123.svg`; `G11_B26_SLOPE_CLEARANCE_AUTHORING_20261123.svg`; `G11_B26_SQUARE_PYRAMID_SKEW_DISTANCE_AUTHORING_20261123.svg` |
| B27 [#1056](https://github.com/TMA2015/self-learning-math/pull/1056) | `47ad4a5ecca0aae1f3a8d07857ee64a159703555` | `abd417ddb6d89528eaa8da28c132a126a26738e0` | `c703c28a4f85722845ae00be10bd3ac16206127a` | Thể tích chóp, chóp cụt, lăng trụ/hộp, chiều cao vuông góc; delta hai câu dẫn đã kiểm. | `G11_B27_FRUSTUM_BASKET_AUTHORING_20261123.svg`; `G11_B27_FRUSTUM_SIMILARITY_AUTHORING_20261123.svg`; `G11_B27_PARALLELEPIPED_OBLIQUE_AUTHORING_20261123.svg`; `G11_B27_PRISM_INCLINED_HEIGHT_AUTHORING_20261123.svg`; `G11_B27_TETRAHEDRON_ORTHOGONAL_AUTHORING_20261123.svg` |

### B10–B17 — bàn giao trên snapshot đã kiểm (24/11/2026)

Kế thừa Academic/PED PASS của nhóm B10–B14 theo checkpoint review tại [PR #1034](https://github.com/TMA2015/self-learning-math/pull/1034), [#1035](https://github.com/TMA2015/self-learning-math/pull/1035), [#1038](https://github.com/TMA2015/self-learning-math/pull/1038) xác nhận cả năm blob; nhóm B15–B17 theo mục NotebookLM independent scoped verdict trong PR #1041–1043. Tất cả 8 HEAD hiện tại đã đối chiếu, exact candidate blob khớp, 4 tabs đúng nguồn; phần delta nhãn HTML đã self-check và không có P2 ngắt nhãn tái hiện ở source. Không yêu cầu review mới chỉ vì báo cáo trước ghi thiếu Q18/handoff. Kế thừa kiểm toán SGK/toán/PED/hình và các điều kiện trong PR nguồn, P0/P1 nội dung không còn theo bằng chứng; QA browser/P2 kỹ thuật thuộc RELEASE. Diff chỉ trang Kiến thức và SVG riêng bài, không đổi assessment. **AUTHOR_SIGNOFF=CONTENT_READY; RELEASE_INTAKE=PENDING_RELEASE**.

| Bài / PR | Commit khóa | Blob nền main lúc đối chiếu | Blob ứng viên | Phạm vi kiến thức/kiểm đã có | SVG thay đổi (lấy theo commit khóa, thư mục docs/assets/images/thpt) |
|---|---|---|---|---|---|
| B10 [#1034](https://github.com/TMA2015/self-learning-math/pull/1034) | `91c4437d1967cc873462199307251529ba9afe09` | `b55bf3c5122dd967b3b56fe9085eff19e58d509e` | `acd275e1b755cdca8e50bd82361f9941990e571c` | Khái niệm, tính chất thừa nhận, xác định mặt phẳng, chóp/tứ diện; P2 ngắt nhãn không tái hiện ở nguồn. | `G11_B10_PLANE_MEMBERSHIP_AUTHORING_20261123.svg`; `G11_B10_QUADRILATERAL_PYRAMID_AUTHORING_20261123.svg` |
| B11 [#1035](https://github.com/TMA2015/self-learning-math/pull/1035) | `a5508bbdae50d8c5a845741b82c963941c9563e0` | `7dccb87d44c1734cf7b5f3c77df209b75db6e63b` | `1499b13b0a0f07849bde558223ef2d03e6142bfe` | Vị trí hai đường, phân biệt chéo/song song, định lí ba giao tuyến; P2 ngắt nhãn không tái hiện. | `G11_B11_TWO_PLANES_PARALLEL_LINES_AUTHORING_20261123.svg` |
| B12 [#1036](https://github.com/TMA2015/self-learning-math/pull/1036) | `cf06012f1489add2e7d948883f1664b633cac2c8` | `6dc44484c9e12d7dcbf49c40157645ddae577390` | `a022abc6764f00461f327257082d432f01bc8897` | Đường–mặt song song, điều kiện đường không thuộc mặt, dựng giao tuyến, kiểm tọa độ độc lập. | `G11_B12_THREE_LINE_PLANE_POSITIONS_AUTHORING_20261123.svg` |
| B13 [#1037](https://github.com/TMA2015/self-learning-math/pull/1037) | `735b44d1d0e2d95027c0b6a1af8d158f15b1b617` | `619162cbe9854188c5873e03a69c3fb5afc95b43` | `d688233ca1fc78bed537b91e898e05e1d12dec78` | Hai mặt song song, hai đường cắt nhau, Thalès ba mặt đôi một song song, lăng trụ/hộp; delta nhãn HTML. | `G11_B13_THALES_THREE_PLANES_AUTHORING_20261123.svg` |
| B14 [#1038](https://github.com/TMA2015/self-learning-math/pull/1038) | `405545b5d18b54b71f252f71291f941f5ede7b6e` | `121b165f6bd95cdfa4c33d4a4def678d9121e81c` | `5b829b3dd533852d7c88358c1a430d716a941d93` | Phép chiếu song song và tính chất, hình biểu diễn, điều kiện suy biến; P2 nhãn không tái hiện. | `G11_B14_PROJECTION_DEGENERACY_AUTHORING_20261123.svg` |
| B15 [#1041](https://github.com/TMA2015/self-learning-math/pull/1041) | `871c5b20143254f5a282d6a89b8ac918050a5a8b` | `95bbe5ecdd73b92f88176ae0245e11b1098d8e6e` | `110d26c475df0f00dda7fa53bdc1afdfd6cb915a` | Giới hạn hữu hạn/vô cực, quy tắc giới hạn, CSN lùi vô hạn; kiểm tổng riêng và chu kì. | `G11_B15_GEOMETRIC_PARTIAL_SUMS_AUTHORING_20261123.svg` |
| B16 [#1042](https://github.com/TMA2015/self-learning-math/pull/1042) | `f8bb7b9f35d05d2674b40047a1fd73b002d6debd` | `a2242eeb50ae0f02643182bf10c315c41ce05c3b` | `df4d5536c079d4825222c4320e8d3e443aa88ae5` | Giới hạn tại điểm/vô cực, giới hạn vô cực, một phía; liên hợp, dấu và hình bước nhảy. | `G11_B16_ONE_SIDED_JUMP_AUTHORING_20261123.svg` |
| B17 [#1043](https://github.com/TMA2015/self-learning-math/pull/1043) | `da585f0e68a9f63538dc69ef71e0aee4fe2efc75` | `36a7c21f3ae2474318c1e857acbcb640680e1326` | `22e4e8c777a989ad00e72af94ea3e2eae0690ec9` | Liên tục tại điểm/trên khoảng/tính chất; lỗ, bước nhảy, kiểm đổi dấu tồn tại nghiệm. | `G11_B17_IVT_SIGN_CHANGE_AUTHORING_20261123.svg` |

### B02–B09 và B28–B32 — chốt tự kiểm và bàn giao (24/11/2026)

**Q18_VERIFICATION_MODE=AUTHOR_SELF_VERIFIED; AUTHOR_SIGNOFF=CONTENT_READY; RELEASE_SCOPE=SGK_KNOWLEDGE_ENRICHMENT_ONLY; RELEASE_INTAKE=PENDING_RELEASE.** Dùng chứng cứ tự kiểm SGK, học thuật, diễn giải, ví dụ và hình đã ghi trong từng PR; kiểm lại exact nguồn và phạm vi diff, không nhận thay NotebookLM independent PASS. Các hạn chế ảnh chụp trang SGK đã ghi trong PR được giữ nguyên; B29 đối chiếu nguồn tham chiếu theo từng mục, không nhận đã đọc trực tiếp ảnh gốc. B03/B04/B06–B09 sửa các ví dụ trùng bài tự thử; B31/B32 sửa diễn giải toán học. Các thay đổi thực chất được tự giải lại và xác minh số, miền, dấu; 8/8 nguồn sửa đúng blob sau ghi, MathJax/HTML cân bằng, bài tự thử có Đối chiếu. 5 nguồn B02/B05/B28–B30 giữ nguyên snapshot tự kiểm, không sửa để tạo hình thức. Tất cả 13 nguồn có đúng 4 tab, đối ứng các mục SGK, MathJax cân bằng, số Vận dụng khớp Đối chiếu; diff chỉ file Kiến thức và SVG riêng bài nếu có. Không còn lỗi học liệu thực chất đã phát hiện chưa xử lý. Core, Luyện tập, Tự kiểm tra, ngân hàng, RD1, Mastery và runtime ngoài phạm vi.

| Bài / PR | Commit khóa | Blob nền main lúc đối chiếu | Blob ứng viên | Bằng chứng kiểm tra/Delta | SVG thay đổi (lấy theo commit khóa, thư mục docs/assets/images/thpt) |
|---|---|---|---|---|---|
| B02 [#1021](https://github.com/TMA2015/self-learning-math/pull/1021) | `b6b88d8fdd67a902dc55d9d46b4c0baab551dd95` | `15c4de731bfbaf5b8a141a54d9b5493e7895c752` | `d628a3af98495c5e7ade5d4fa19d7ad4107b7ff6` | SGK 17–21; cộng, nhân đôi, tích–tổng, tổng–tích; kiểm đủ dấu/điều kiện, góc đặc biệt và tín hiệu âm thanh. | `G11_B02_UNIT_CIRCLE_AUTHORING_RESET_20261122.svg` |
| B03 [#1023](https://github.com/TMA2015/self-learning-math/pull/1023) | `a7288efd8e2287085fb77210bc0a5e4d8521d4f0` | `a8a3592c661b06fae94aad386b991f23a6718957` | `9177a10ade8788712c6b9fbf39789822df2a417a` | SGK 22–30; định nghĩa, chẵn/lẻ/tuần hoàn, 4 đồ thị. Delta 3.2 và 3.6: x cos x lẻ; tan âm trên (−π/2;0), cot dương trên (0;π/2); bài tự thử không trùng. | Không; dùng asset hiện có |
| B04 [#1025](https://github.com/TMA2015/self-learning-math/pull/1025) | `a505489e888d61850ef20a426447b981a4d3e869` | `71271b2035bfe289ac3ccf6f384d8f41ec55aefb` | `0714c5b72389d29dbc8993c2ce9828fc98cf7a92` | SGK 31–39; tương đương, 4 họ nghiệm, máy tính RAD/DEG. Delta 3.1: (x−2)/(x+2)=0 có tập nghiệm {2}, x²−4=0 có {−2,2}; kiểm miền. | `G11_B04_COS_MINUS_HALF_AUTHORING_RESET_20261123.svg`; `G11_B04_SIN_HALF_AUTHORING_RESET_20261123.svg` |
| B05 [#1027](https://github.com/TMA2015/self-learning-math/pull/1027) | `bb5730eae8db4fbcd01e486891fd1c1a2090589a` | `8634196e27b5bac8cb3089f433779b592809d955` | `8f23807a3d75fdefde567993e1dc95c6027fccd1` | SGK 42–47; định nghĩa, cách cho, tăng/giảm/bị chặn; truy hồi 1→5→17→53, hiệu 1/[n(n+1)]>0 và dãy luân phiên. | Không; dùng asset hiện có |
| B06 [#1028](https://github.com/TMA2015/self-learning-math/pull/1028) | `652e68410ed85a61326273531d41b982f7238582` | `43b285b679941e0748ad78f377ab9bbdd73ec3d3` | `ce7c346193e5311712fd98e8714f02167af1718e` | SGK 48–51; định nghĩa, số hạng tổng quát, tổng. Delta 3.1, 3.6: 4+3n có u1=7,d=3; lương 8 năm tổng 1380 triệu; đối chứng công thức tổng. | Không; dùng asset hiện có |
| B07 [#1029](https://github.com/TMA2015/self-learning-math/pull/1029) | `c5fa6e7c33e1365089e1dadfe34462c289d0c498` | `3d0886889e383cd76963e1fa3a5eef175a389080` | `9f76ca1b6ba598ed89724c2a1ebd36b7e45b7759` | SGK 52–55; định nghĩa, số hạng tổng quát, tổng; q=0,1. Delta 3.7: 3+6+12+24+48=93, n=5; tự thử cũ giữ nguyên. | Không; dùng asset hiện có |
| B08 [#1030](https://github.com/TMA2015/self-learning-math/pull/1030) | `449ee91989631f4571ee2a2dd3ad4ed646ec974f` | `4f3d1af635dd548700ad3514aff283ebe29aa9a2` | `8d650b041cb7bd33dde4a7923f61cd29cbe1bfeb` | SGK 58–61; mẫu ghép nhóm, cách ghép, đầu mút. Delta 3.1–3.3: cỡ mẫu 24, 9/24=37,5%; đếm lại 12 quan sát cho [1,3,3,3,2]. | Không; dùng asset hiện có |
| B09 [#1031](https://github.com/TMA2015/self-learning-math/pull/1031) | `e697303f359d3cf4a2ba2ea82d4f0d43e0306554` | `46aa17f758783330c2b396f9ed36a25ab77a4094` | `8a6f4467d445a1527fa79b4f30b73495c8105772` | SGK 62–67; trung bình, trung vị, tứ phân vị, mốt. Delta 3.1–3.4: bảng tần số 4,10,5,1 cho 16,5; 16; 11,22; mốt 10+60/11≈15,45. | Không; dùng asset hiện có |
| B28 [#1062](https://github.com/TMA2015/self-learning-math/pull/1062) | `7ae741d314cffcde2624ffb218828a63d99644c1` | `86018a916315d313249f958ff2c66acdb52612be` | `eeebaf5a8b564ddc04f89ec70b87ebdab98c55fc` | SGK 66–71; hợp, giao, độc lập; kiểm liệt kê kết quả, không đếm trùng, có/không hoàn lại và xung khắc khác độc lập. | Không; dùng asset hiện có |
| B29 [#1064](https://github.com/TMA2015/self-learning-math/pull/1064) | `981a24d68efee702a5f01a74054759370ed9c94c` | `51b686118c52605d8c8ab64b2e05d3fea419c1f8` | `00aac19435a7133b5dd957882539c53afe717b30` | SGK 72–75, đối chiếu nguồn tham chiếu từng mục như PR; cộng xung khắc và tổng quát, giao, bù; kiểm 26/40, 2/3, 49%, 31%, dữ kiện giao bất khả thi. | Không; dùng asset hiện có |
| B30 [#1065](https://github.com/TMA2015/self-learning-math/pull/1065) | `178d5d468489c943202ea8ec107d1489c70db91f` | `7ef2e8be4bca6c64f7ab190ed5d1cde921998373` | `bac2f0a7f289abcdeb80a1524ded15fb43777415` | SGK 76–78; nhân độc lập và vận dụng; kiểm 21/40, cây xác suất, bảng 5000 người, phân biệt phụ thuộc thống kê và nhân quả. | Không; dùng asset hiện có |
| B31 [#1066](https://github.com/TMA2015/self-learning-math/pull/1066) | `6fe6cd336607941d964b8fe10acfc04f5087f83c` | `20f6b47a4f56a1531ee695fde11953edfb9661bb` | `a0c25691f38ff40955b6316ed8be29880b0ca4a0` | SGK 81–86; dẫn tới đạo hàm, tại điểm/trên khoảng, tiếp tuyến; kiểm sai phân, 9 A, 95,1 m/s, cầu 17,6 m. Delta phân biệt tọa độ có dấu và quãng đường tích lũy; tại t=0,1 vận tốc −1 m/s. | Không; dùng asset hiện có |
| B32 [#1067](https://github.com/TMA2015/self-learning-math/pull/1067) | `db471893cbb43bd5ab06f9755da9e65691d9bfab` | `078a5d9aca09954fd2b451508152147f6a655015` | `fedb5d316838fbce9704ac5ba5d1543d60bf0685` | SGK 87–94; đủ 5 nhóm quy tắc, điều kiện miền, 16 đối chứng sai phân; delta giải thích quy tắc thương qua wv=u và tách (x)'=1 để tránh 0^0 tại x=0; kiểm thương −3 tại x=2. | Không; dùng asset hiện có |

**Kết luận G11:** 32/32 nguồn canonical B02–B33 đã khóa và bàn giao theo các dòng CONTENT_READY trong chính tài liệu này. Kết luận và commit hiện tại thay thế các trạng thái chờ bàn giao / NotebookLM pending của các snapshot lịch sử trong PR; không thay đổi kết quả review cũ. RELEASE có thể tiếp nhận toàn bộ 32 dòng bằng exact commit/blob, kiểm tích hợp theo vai trò của mình; không yêu cầu một hồ sơ riêng cho từng bài.

### Toán 12 B01 — Tính đơn điệu và cực trị (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** S1: [SGK KNTT Toán 12 tập 1 trang in 5–14](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf), đọc trực tiếp text hai mục Tính đơn điệu/Cực trị, định nghĩa, dấu đạo hàm, bảng biến thiên, cực trị và bài tập. Screenshot PDF cache miss; không nhận visual-source PASS. Đọc mẫu G10 B19. Canonical bốn tab, hai mục đối ứng; giải thích (f') hữu hạn nghiệm bằng 0, hàm không đổi, điểm loại miền, không khả vi, giá trị/điểm cực trị, đọc đồ thị (f'); 10 ví dụ tự giải, 2 Vận dụng độc lập có Đối chiếu/Kiểm lỗi. Kiểm lại đa thức (cực trị 2/−2, ±16, −13/3), phân thức tách miền, căn/đầu mút, trị tuyệt đối, chuyển động, độ cao t=2,5, logistic t=ln4 và 250 sản phẩm/năm; 19 nhóm kiểm toán/source đạt, đồ thị dấu mới kiểm nghiệm ba nghiệm và dấu hai phía. Hình cũ giữ nguyên. Diff 2 file đúng phạm vi. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên | Asset delta |
|---|---|---|---|---|---|
| [#1069](https://github.com/TMA2015/self-learning-math/pull/1069) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-1.md` | `05bf9eb5596654216972ef140d551ab4131fc121` | `64f6a142a88e8c4dd63dff3f7d2220787fcdec5c` | `bed6da8643ee1def36fd72e8ae20308a39ea0c1a` | Thêm `docs/assets/images/thpt/G12_B01_FIG02_READ_DERIVATIVE_AUTHORING_20261124.svg`, blob `4720ec1c26e8ecc6ff5707281b9aba3465d31df5`; hình cũ `e2696224533994826104e6c505d9dab26fc0a2e2` giữ nguyên. |

### Toán 12 B02 — Giá trị lớn nhất và giá trị nhỏ nhất của hàm số (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đã đọc text S1 [SGK KNTT Toán 12 tập 1 trang in 15–19](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf), hai mục Định nghĩa/Cách tìm GTLN GTNN trên một đoạn; screenshot cache miss, không nhận đã kiểm ảnh gốc. Mẫu Golden G10 B19. Đủ bốn tab, hai mục đối ứng; định nghĩa gồm cận và đạt được, phân biệt cực trị cục bộ, khoảng mở/miền vô hạn, liên tục trên đoạn và hữu hạn điểm tới hạn gồm điểm không khả vi, so đầu mút. 10 ví dụ, 2 Vận dụng độc lập có Đối chiếu/Kiểm lỗi, 7 ngộ nhận. Tự giải kiểm 22 nhóm: parabol và miền mở, căn, phân thức, đa thức có nhiều điểm cùng đạt, lượng giác, điểm không khả vi, mũ/log, hộp gấp Vmax=16000, hộp không nắp x=6,h=3, bình trụ r≈4,63,h≈14,83, mô hình N tối đa tại 8 và tốc độ tăng tối đa tại 4. Đồ thị cũ chỉnh trục, chấm đặc, nhãn; tọa độ ba mốc đúng phương trình. Diff chỉ trang Kiến thức và SVG riêng B02. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên | Asset delta |
|---|---|---|---|---|---|
| [#1070](https://github.com/TMA2015/self-learning-math/pull/1070) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-2.md` | `52fc9557ea52d85afef734a43889e5ae1e21cc68` | `d6e517a980ec9259345285964f4c42767faa6122` | `fc8dd27dc1eddb605edfd62fc62a8a5c8ba84d54` | `docs/assets/images/thpt/G12_B02_FIG01_GLOBAL_MIN_MAX_CLOSED_INTERVAL_R00.svg` từ `057991020c0f9349f160047cd87ae35ce03a87ef` sang `cd8c5bea9b17bb89aa0edcd40f49dd317d834c86`. |

### Toán 12 B03 — Đường tiệm cận của đồ thị hàm số (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đã đọc S1 văn bản [SGK KNTT Toán 12 tập 1 trang in 20–25](https://intracomuni.edu.vn/wp-content/uploads/2026/11/sach-giao-khoa-toan-12-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf), 3 mục ngang/đứng/xiên, HĐ1–3, chú ý hệ số a,b, ví dụ và bài tập 1.16–1.20. Screenshot nguồn cache miss, không nhận đã kiểm ảnh gốc. Đối chiếu mẫu G10 B22. Bốn tab Golden, ba mục đối ứng, ba Vận dụng khác ví dụ, Đối chiếu/Kiểm lỗi, 10 ví dụ và 7 lỗi thực chất. Lời giảng giải thích khoảng cách đến đường thẳng, ý nghĩa từng giới hạn, điểm khuyết khác tiệm cận đứng, hai phía có thể khác nhau, hệ số a,b cùng đầu vô cực, đồ thị có thể cắt tiệm cận. 25 nhóm kiểm toán/structure đạt: hai phép chia xiên, dấu giới hạn một phía, căn và trị tuyệt đối, mô hình chi phí/chu vi, giao điểm; SVG cũ đối chiếu tọa độ với hàm, SVG xiên mới kiểm cả hai nhánh và chênh tung độ tại 1,5. Diff 2 file đúng phạm vi. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên | Asset delta |
|---|---|---|---|---|---|
| [#1071](https://github.com/TMA2015/self-learning-math/pull/1071) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-3.md` | `11ecbc31551892186edde669bb3092d1843ea754` | `02f4b8a446e89d824b7b08c833fc306ca9db02c6` | `e05c5c287381f018d5262f17ad23b890d1b40e6e` | Thêm `docs/assets/images/thpt/G12_B03_FIG02_OBLIQUE_AUTHORING_20261124.svg`, blob `62d2cf3e7604d331ea26ac7b49f863ae8793d97a`; SVG ngang/đứng giữ blob `802f01f5b8dce392e3a064a54efe33ae1aea44fc`. |

### Toán 12 B04 — Khảo sát sự biến thiên và vẽ đồ thị của hàm số (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đã đọc S1 văn bản [SGK KNTT Toán 12 tập 1 trang in 26–32](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf), sơ đồ khảo sát, ví dụ 1–5, hai dạng phân thức, chú ý tâm/trục đối xứng, vận dụng nồng độ/chi phí và bài tập 1.21–1.25. Screenshot nguồn cache miss, không nhận đã kiểm ảnh gốc. Đối chiếu mẫu G10 B19. Bốn tab, ba mục đối ứng; khảo sát đủ miền, đạo hàm, dấu, cực trị, giới hạn, tiệm cận, bảng biến thiên, giao điểm, đối xứng; phân biệt bậc ba có/không cực trị, phân thức bậc nhất và bậc hai trên bậc nhất, hai nhánh có/không cực trị. 8 ví dụ, 4 Vận dụng độc lập có Đối chiếu hình, 7 lỗi thường gặp. 25 nhóm kiểm toán/structure đạt: các mốc, đạo hàm, dấu, giá trị cực trị, giao trục, tịnh tiến/tâm, tiệm cận, nồng độ, điện trở; 10 SVG tham chiếu tồn tại, có polyline hữu hạn, không nối nhánh qua điểm loại. Các SVG mới sinh tọa độ từ hàm số, kiểm điểm đánh dấu; 2 SVG cũ giữ nguyên. Diff chỉ canonical và 8 hình riêng B04. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1073](https://github.com/TMA2015/self-learning-math/pull/1073) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-4.md` | `a44a9de86926411a21623e2ea10dc8dba1c02a7d` | `a9a9a8f823ee85fe53014150b5cda31201867a4d` | `bc7c1c97780e221a6ee4856f244f2d0548cc9a90` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B04_FIG03_QUADRATIC_AUTHORING_20261124.svg` (`432f122215bf6ea897f5d13b3eab7327cf14e9b9`); `G12_B04_FIG04_CUBIC_MONOTONE_AUTHORING_20261124.svg` (`a338c274f85e030033a524810639510e099989bf`); `G12_B04_FIG05_OBLIQUE_EXTREMA_AUTHORING_20261124.svg` (`9f800741b8d016e3039e6cff35721b22a6dc0a81`); `G12_B04_FIG06_OBLIQUE_MONOTONE_AUTHORING_20261124.svg` (`1f34ef45faeeaeaa38f5c1d6823ba713e7cc3b4c`); `G12_B04_FIG07_CHECK_QUADRATIC_20261124.svg` (`585b277a399a8961ea6617ec0851e2235ed06faa`); `G12_B04_FIG08_CHECK_CUBIC_20261124.svg` (`878b6f0ed35799daeef7f1db33781129277776cd`); `G12_B04_FIG09_CHECK_RATIONAL_20261124.svg` (`e846dbbc0cb8374a825179f8e4a43e6149f1efdb`); `G12_B04_FIG10_CHECK_OBLIQUE_20261124.svg` (`64ba475d59101e1dc0311f5fab8b9922162c019b`). Giữ nguyên FIG01 rational (`529b05d33fb0347dab70587c84c8ec08789c5c98`) và FIG02 cubic (`8e4cf830e5aa1cac3fe37b9b3c3d93d9b34c006b`).

### Toán 12 B05 — Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đã đọc trực tiếp [SGK KNTT Toán 12 tập 1 trực tuyến, trang 33–41](https://sachgiaokhoa.online/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-i-ung-dung-dao-ham-de-khao-sat-va-ve-do-thi-ham-so-3501/bai-5-ung-dung-dao-ham-de-giai-quyet-mot-so-van-de-lien-quan-den-thuc-tien-12883.html). Hai mục: tốc độ thay đổi của một đại lượng và một vài bài toán tối ưu hoá đơn giản. PDF fetch/screenshot không khả dụng; không nhận đã kiểm pixel nguồn PDF. Bốn tab Golden, hai mục đối ứng, giải thích giới hạn tỉ số biến thiên, vận tốc/gia tốc/quãng đường, hoá học/sinh học, chi phí biên và sai phân, ba bước mô hình hoá tối ưu, hàm cầu/giá, doanh thu/chi phí/lợi nhuận biên, hình trụ kín với h=2r, miền hợp lệ và số lượng nguyên. 11 ví dụ, 4 Vận dụng độc lập có Đối chiếu/Kiểm lỗi và 8 lỗi thực chất. 28 nhóm kiểm toán và structure đều đạt, gồm hộp Vmax≈1056,3 cm³, bình trụ r≈5,42 h≈10,84, thời gian qua sông 1+√7/8 giờ, giá vé 95 nghìn với giới hạn sức chứa, hoà vốn và lợi nhuận tối đa, 5 SVG tham chiếu tồn tại đúng. Hình thể tích cũ giữ nguyên; 4 hình bổ sung phục vụ lập mô hình và đọc đồ thị. Diff chỉ canonical và bốn asset riêng B05. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1074](https://github.com/TMA2015/self-learning-math/pull/1074) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-5.md` | `77b1efcec397b2cc412cbb3b9969ccbbb2f5b3de` | `54c9c90323f7b1d9077270d90627864f5a468c03` | `7019a282f97e0eca987a596a188030bd9d1e7076` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B05_FIG02_BOX_NET_AUTHORING_20261124.svg` (`abc066d14e33a6e1fcec829aae34e47d4f0a273e`); `G12_B05_FIG03_TRAVEL_AUTHORING_20261124.svg` (`8303761922a9fa53e41b5dad2482ac9bb9b6950a`); `G12_B05_FIG04_POLLUTION_COST_AUTHORING_20261124.svg` (`fa76ba8469c7fb27e2fe3f83f8b8b3b8bf04a497`); `G12_B05_FIG05_PROFIT_AUTHORING_20261124.svg` (`340dc2bea3ce34ca1cc06c608c50c16deb19f1d4`). Giữ nguyên `G12_B05_FIG01_BOX_VOLUME_R00.svg` (`eacd5ba60f25d87c102917a55d314fb16d6f8341`).

### Toán 12 B06 — Vectơ trong không gian (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đối chiếu [SGK KNTT Toán 12 tập 1 trang in 45–59](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf) và [bản SGK trực tuyến](https://sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-ii-vecto-va-he-truc-toa-do-trong-khong-gian-3522/bai-6-vecto-trong-khong-gian-12889.html). Screenshot PDF cache miss; không tuyên bố đã kiểm hình ảnh gốc. Đọc toàn văn mẫu Golden Toán 10 B07. Bốn tab, bốn mục chính đối ứng, sửa quy ước vectơ-không theo SGK; bổ sung giá, đặt vectơ duy nhất, tính chất phép cộng/nhân, quy tắc hiệu đúng chiều, trung điểm và trọng tâm tam giác/tứ diện (3:1), tính chất tích vô hướng, góc tù/công âm, cân bằng lực. 10 ví dụ, 4 Vận dụng độc lập có Đối chiếu/Kiểm lỗi, 8 ngộ nhận. 28 nhóm tự kiểm đạt: kiểm các hệ thức trên hình hộp xiên và tứ diện không suy biến, độ dài 5 và 13, tỉ số lực 25/16, hai tích khai triển và độ dài √7, công −100 J, tâm/hình minh họa, quy ước và cấu trúc. Giữ hình hộp cũ, thêm hai hình trọng tâm tứ diện và đưa hai vectơ về chung gốc. Diff chỉ canonical và hai SVG riêng B06. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1075](https://github.com/TMA2015/self-learning-math/pull/1075) | `docs/thpt-preview/sgk/lop-12/chuong-ii/bai-6.md` | `0aac0cec595611aa68c7817c0af78095338d83d4` | `8991c8a30487fdf1db65cf31a19b0ed68ef52518` | `b7eb1d0d5120de61065ba002760f1e56f6337063` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B06_FIG02_TETRA_CENTROID_AUTHORING_20261124.svg` (`ec871f9e8285f1f6ad203214b975a76783c7174b`); `G12_B06_FIG03_VECTOR_ANGLE_AUTHORING_20261124.svg` (`a3133220a16675ca3c719deea35b9d7e6476dc85`). Giữ nguyên `FIG-G12-CHII-B06-R00.svg` (`26e388d873521aa5b0bae945343e69357490ec16`).

### Toán 12 B07 — Hệ trục tọa độ trong không gian (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đã đọc văn bản [SGK KNTT Toán 12 tập 1, trang in 60–66](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf), HĐ1–4, Ví dụ 1–5, nhận xét hình chiếu, Vận dụng 1–2, bài tập 2.13–2.19, phần đọc thêm tọa độ cầu; screenshot PDF cache miss, không tuyên bố đã kiểm ảnh gốc. Đọc toàn văn mẫu Golden G10 B10. Bốn tab, hai mục chính đối ứng: hệ trục tọa độ; tọa độ điểm và vectơ. Giải thích ba vectơ đơn vị, tính duy nhất, sáu hình chiếu, thuộc trục/mặt phẳng, dấu, bằng nhau, cuối trừ đầu; tìm đỉnh lăng trụ/hình hộp, vị trí và độ dời, gốc tại trần; đọc thêm tọa độ cầu có điều kiện góc phần tư và điểm trên trục. Không chuyển phép toán tổng quát B08 sang B07. 10 ví dụ, 3 Vận dụng độc lập có Đối chiếu/Kiểm lỗi và 7 lỗi thực chất. 27 nhóm tự kiểm đạt, gồm chuẩn hóa trục, chiếu, hiệu có dấu, kiểm điểm trùng, lăng trụ/hình hộp không suy biến, đơn vị km/m, chuyển đổi tọa độ cầu và kiểm tọa độ các điểm/đường trong SVG. Sửa hình cũ theo phép chiếu nhất quán, thêm hình độ dời. Diff chỉ canonical và hai SVG riêng B07. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1076](https://github.com/TMA2015/self-learning-math/pull/1076) | `docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md` | `51f6eb713b27ecae933d9e46496c11b2c26fc74f` | `4bfbed222d552f3ccb9c965616245015930ab1cd` | `97f27ec66f7a7582b2dabe5fd2915d634dd9bfe8` |

Asset delta tại `docs/assets/images/thpt/`: sửa `FIG-G12-CHII-B07-R00.svg` từ blob `979ca912e99fdadfc4e91ae0edad5db34fc13928` sang `053c483242c92f11097b5d577aeb4ad5f832497a`; thêm `G12_B07_FIG02_DISPLACEMENT_AUTHORING_20261124.svg` (`498a7f687a493dc3cf4b03d4423eba5025559d8b`).

### Toán 12 B08 — Biểu thức tọa độ của các phép toán vectơ (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đã đọc trực tiếp văn bản [SGK KNTT Toán 12 tập 1 trang in 67–72](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf), tình huống mở đầu, HĐ1–3, Ví dụ 1–7, các nhận xét, Luyện tập 1–7 và bài tập 2.20–2.24. Screenshot PDF cache miss; không tuyên bố đã kiểm ảnh nguồn. Đọc toàn văn mẫu Golden G10 B10. Bốn tab, ba mục đối ứng: cộng/trừ/nhân số và cùng phương, trung điểm/trọng tâm; tích vô hướng và các công thức độ dài, khoảng cách, góc; ứng dụng thực tiễn. Giải thích nguồn gốc công thức từ phân tích vectơ đơn vị, tính độc lập các thành phần, tích chéo bằng 0, hệ thức trung điểm/trọng tâm; nêu điều kiện khác không và không chia tọa độ 0. Thêm hình bình hành, tính góc hình chóp/hình hộp, mái nhà, đèn trần, chuyển động vận tốc không đổi, khoảng cách vật bay, radar; phân biệt góc vectơ/đường thẳng và tốc độ/vận tốc trung bình. 10 ví dụ, 4 Vận dụng độc lập có Đối chiếu/Kiểm lỗi, 8 lỗi thường gặp. 32 nhóm tự kiểm đạt: phép toán, cùng phương, điểm/độ dài/góc, mái 60√13 cm và 56,3°, hình hộp 7 và 78,6°, vị trí dự đoán, khoảng cách 5,02 km, radar đúng biên 13 km; kiểm phép chiếu các cạnh được đánh dấu và cấu trúc. Giữ hình cũ, thêm hai SVG riêng B08. Diff đúng canonical và hai hình. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1077](https://github.com/TMA2015/self-learning-math/pull/1077) | `docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md` | `8bf074d3c0f0e52887b6938d9c051f5a32b2ffd0` | `c85922428c85ddeb48cec5e2bd5953faa44207c8` | `0fac910828d7dbc8e2122eb85b04fa14e1ab49c6` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B08_FIG02_PYRAMID_AUTHORING_20261124.svg` (`0d8e4b4fd4bbdc1c896143a74307b3ea5ff25367`); `G12_B08_FIG03_ROOF_AUTHORING_20261124.svg` (`7a9920c100572366b38937eda4ee22d769441aa5`). Giữ nguyên `FIG-G12-CHII-B08-R00.svg` (`13445da079245a556a08e7a57069d9987097a0be`).

### Toán 12 B09 — Khoảng biến thiên và khoảng tứ phân vị (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đọc văn bản [SGK KNTT Toán 12 tập 1 trang in 75–79](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf), HĐ1–2, Ví dụ 1–2, Luyện tập 1–2, Vận dụng và bài tập 3.1–3.3; screenshot PDF cache miss, không tuyên bố đã kiểm hình gốc. Đọc toàn văn mẫu Golden G10 B14. Bốn tab, hai mục đối ứng: khoảng biến thiên và khoảng tứ phân vị. Từ bảng có nhóm rỗng, giải thích vì sao R ghép nhóm lớn hơn R gốc với nhóm nửa kín; dẫn dắt nội suy từ tần số tích lũy, giữ mốc không nguyên và độ rộng từng nhóm; làm rõ biên chung, nhóm rỗng, sự khác nhau của R và IQR, giới hạn khi sàng lọc ngoại lệ. 6 ví dụ, 3 Vận dụng độc lập có Đối chiếu/Kiểm lỗi, 7 lỗi thực chất. Hai SVG cũ chỉnh thang đo và gắn cùng bảng n=40, Q1=115/7, Q3=145/6, IQR=325/42. 27 nhóm tự kiểm đạt: 15 bảng ghép nhóm, mẫu gốc, ngưỡng ngoại lệ, tọa độ SVG, cấu trúc; tập mã OUTCOME_ID/EX_ID/FIRST_TRY_ID/FIG_ROLE bảo toàn. Diff chỉ canonical và hai SVG riêng B09.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1078](https://github.com/TMA2015/self-learning-math/pull/1078) | `docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md` | `d42c02b13312fd3e3ec179388b36c4688842ef8e` | `4571bac678c36c4fb06d6a7fde45b86703f8ebce` | `56836232f4656c0cd3418cee0677280f150d3a69` |

Asset delta tại `docs/assets/images/thpt/`: `FIG-G12-CHIII-B09-QUARTILES-R00.svg` từ `51fd46bc69ee7c4279e5024aa29dc0e83651a1a7` sang `e847496c567b7121d2121134401e36ead2040e1a`; `FIG-G12-CHIII-B09-RANGE-IQR-R00.svg` từ `b0cdf1b1f00c5d70525dc8c889da48211aeb8cac` sang `1a3cb6397d8ed8ca634724e2084c909747dee836`.

### Toán 12 B10 — Phương sai và độ lệch chuẩn (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đọc văn bản [SGK KNTT Toán 12 tập 1 trang in 80–84](https://sqhx-hanoi.mediacdn.vn/91579363132710912/2025/11/18/1-toan-12-tap-1-kntt-17634587393041073129419.pdf), HĐ1, Ví dụ 1–3, Luyện tập 1, Vận dụng, chú ý mẫu số n−1, Em có biết CV và bài tập 3.4–3.8. Screenshot PDF cache miss, không tuyên bố đã kiểm ảnh gốc. Đọc mẫu Golden G10 B14. Bốn tab, hai mục đối ứng: phương sai và độ lệch chuẩn; sử dụng chúng đo độ rủi ro. Giải thích trung điểm đại diện, trung bình có trọng số, triệt tiêu độ lệch có dấu, bình phương và căn, chứng minh công thức rút gọn; mẫu số n và n−1, đơn vị, trường hợp s=0, so sánh mẫu gốc/ghép nhóm theo hai chiều sai lệch; so độ ổn định và rủi ro với cùng quy mô hoặc quy mô chênh lệch; CV đọc thêm đúng điều kiện. 6 ví dụ, 3 Vận dụng độc lập có Đối chiếu/Kiểm lỗi, 7 lỗi thường gặp. Sửa hình cũ theo thang tần số chung, giá trị đại diện và độ lệch chuẩn đúng bảng (A≈9,26; B≈16,04). 31 nhóm tự kiểm đạt, gồm 19 trường hợp tính độc lập bằng hai công thức, điều kiện, làm tròn, CV, mẫu số có dấu mũ, tọa độ SVG, cấu trúc; bảo toàn tập mã OUTCOME_ID/EX_ID/FIRST_TRY_ID/FIG_ROLE. Diff đúng canonical và một SVG riêng B10.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1079](https://github.com/TMA2015/self-learning-math/pull/1079) | `docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md` | `4ddf957c7fd1ebe3531c00b64074baecced0acb9` | `32f4eda1cfd151592eef5a35921ad872c1f644c4` | `12371f18f44610853ddca68a40908dee690a91ec` |

Asset delta: `docs/assets/images/thpt/FIG-G12-CHIII-B10-SPREAD-R00.svg` từ `ddff354dca86b0cfa1a223a8245b87044a6e93b1` sang `120a1a0e7b360c8cde1742459174d747bca87de0`.

### Toán 12 B11 — Nguyên hàm (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đọc trực tiếp văn bản [SGK KNTT Toán 12 tập 2, trang in 4–11](https://thuvienhoclieu.com/wp-content/uploads/2023/11/thuvienhoclieu.com-SGK-Toan-lop-12-KNTT-Tap-2.pdf) và [SGKVN](https://sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iv-nguyen-ham-va-tich-phan-3521/bai-11-nguyen-ham-12886.html). HĐ1–7, Ví dụ 1–8, Luyện tập, Vận dụng, bảng nguyên hàm, bài tập 4.1–4.7. Screenshot PDF cache miss, không tuyên bố kiểm ảnh gốc. Đọc toàn văn Golden G10 B19. Bốn tab, ba mục đối ứng: nguyên hàm của một hàm số, tính chất cơ bản, nguyên hàm các hàm số thường gặp. Giải thích họ F+C từ đạo hàm hiệu bằng 0, điều kiện đầu mút một phía, vi phân, tính liên tục, tính tuyến tính k khác 0, hằng số độc lập trên các khoảng tách rời, lũy thừa/logarit/lượng giác/mũ và đầy đủ bảng 10 công thức; bài toán doanh thu, hệ số góc, vận tốc/gia tốc và độ cao cực đại. 11 ví dụ, 5 Vận dụng có Đối chiếu/Kiểm lỗi, 7 lỗi thường gặp. 34 nhóm tự kiểm đạt: đối chiếu đạo hàm và giá trị đầu bằng giải tích và kiểm số tại nhiều điểm, kiểm hình và cấu trúc; bảo toàn tập mã OUTCOME_ID/FIRST_TRY_ID. SVG mới biểu diễn ba parabol tịnh tiến và tiếp tuyến tại x=1 cùng hệ số góc 2; tọa độ sinh từ hàm số; PNG cũ giữ nguyên trong kho nhưng bài dùng SVG mới. Diff chỉ canonical và một hình riêng B11.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1080](https://github.com/TMA2015/self-learning-math/pull/1080) | `docs/thpt-preview/sgk/lop-12/chuong-iv/bai-11.md` | `8a8236025b63b633261c482210f017d12ab04cee` | `f3fc0f654a21af7ec72de657643ef97488413dcb` | `136e34f376b8281eb1023d1583d18efaf0baa96f` |

Asset delta: thêm `docs/assets/images/thpt/G12_B11_FIG01_FAMILY_AUTHORING_20261124.svg` (blob `cb98c0d7e33eab90f1b1fd4e09e6dba925539e25`). Không chỉnh sửa PNG cũ.

### Toán 12 B12 — Tích phân (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đọc văn bản [SGK KNTT Toán 12 tập 2, trang in 12–18](https://sqhx-hanoi.mediacdn.vn/91579363132710912/2025/11/18/2-toan-12-tap-2-kntt-17634587393353827478.pdf), HĐ1–4, Ví dụ 1–6, Luyện tập 1–4, Vận dụng 1–2, bài tập 4.8–4.13; screenshot PDF cache miss, không tuyên bố đã kiểm ảnh nguồn. Đối chiếu mẫu Golden G10 B16 và B19. Bốn tab, hai mục đối ứng: Khái niệm tích phân; Tính chất của tích phân. Dẫn dắt từ diện tích hình thang và hàm diện tích dưới parabol, kẹp bằng hai hình chữ nhật với h dương/âm; định nghĩa hiệu nguyên hàm không phụ thuộc C, biến giả, điều kiện liên tục, quy ước cận và ý nghĩa hình học; tuyến tính, ghép đoạn, trị tuyệt đối, độ dịch chuyển/quãng đường, lợi nhuận biên, lưu lượng thực, giá trị trung bình (phân biệt trung bình theo bán kính và theo mặt cắt). 10 ví dụ, 6 Vận dụng có Đối chiếu/Kiểm lỗi, 7 lỗi thực chất. 37 nhóm tự kiểm đạt, gồm tính lại nguyên hàm và kiểm độc lập tích phân số Simpson, các giới hạn kẹp, kết quả, cấu trúc, tọa độ hình và bảo toàn tập OUTCOME_ID/FIRST_TRY_ID. Hai SVG mới minh họa đạo hàm hàm diện tích và tích phân có dấu; PNG cũ giữ nguyên trong kho. Diff chỉ canonical và hai SVG riêng B12.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1081](https://github.com/TMA2015/self-learning-math/pull/1081) | `docs/thpt-preview/sgk/lop-12/chuong-iv/bai-12.md` | `7faaacd5b9e7379ed273053e87fffc0705c80a6f` | `2ea14427518e58acb03e85d64dcc6b18d55f8798` | `3203313ad151cb44fb6264dcbe896e01b6f30fe0` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B12_FIG01_AREA_DERIVATIVE_AUTHORING_20261124.svg` (`299037dee91e0c91db3e5c911982bbebbb514ae0`); `G12_B12_FIG02_SIGNED_AREA_AUTHORING_20261124.svg` (`b04dafd5b4ff5f56be0893d3a52bba5121b64808`).

### Toán 12 B13 — Ứng dụng hình học của tích phân (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đối chiếu [SGK KNTT Toán 12 tập 2 trang in 19–26](https://intracomuni.edu.vn/wp-content/uploads/2026/11/sach-giao-khoa-toan-12-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf) và [SGKVN](https://sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iv-nguyen-ham-va-tich-phan-3521/bai-13-ung-dung-hinh-hoc-cua-tich-phan-13002.html). Screenshot PDF cache miss; không tuyên bố kiểm ảnh gốc. Đọc toàn văn mẫu Golden G10 B19. Bốn tab, hai mục đúng SGK: diện tích hình phẳng; thể tích vật thể. Giải thích lát đứng và chiều cao không âm, giao điểm, đổi dấu, miền kín, thặng dư tiêu dùng/sản xuất, Lorenz; diện tích mặt cắt, đồng dạng, suy ra công thức lăng trụ/chóp/chóp cụt, trụ/nón/nón cụt/cầu/chỏm cầu; phân biệt đĩa/vành khăn (mở rộng), bán kính/đường kính và đơn vị. 10 ví dụ, 4 Vận dụng có Đối chiếu/Kiểm lỗi, 7 lỗi thực chất. Ba SVG riêng về hai đồ thị, thiết diện chóp, quay thành nón; PNG cũ giữ trong kho. 41 nhóm tự kiểm: 40 đạt ở snapshot đầu, phát hiện cộng sai hai phần diện tích, sửa thành 1/6+5/6=1 và kiểm lại bằng tích phân số Simpson (0,1666667+0,8333333=1), readback xác nhận delta duy nhất. Các kết quả trước được bảo toàn. Kiểm tọa độ hình, tính liên tục/điều kiện, cấu trúc bốn tab, tập OUTCOME_ID/FIRST_TRY_ID không đổi. Diff chỉ canonical và ba SVG B13.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1082](https://github.com/TMA2015/self-learning-math/pull/1082) | `docs/thpt-preview/sgk/lop-12/chuong-iv/bai-13.md` | `546fdbeaa1080b169876592d9ee945b9434a51be` | `51b5cf8243b4793e159db862379a21df60ff75bd` | `6b782fbfdba8fed2eed5ce8423b6f9d1da451246` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B13_FIG01_TWO_CURVES_AUTHORING_20261124.svg` (`af5e42bcb3b150c706d472a92be96399b480e02c`); `G12_B13_FIG02_PYRAMID_SECTION_AUTHORING_20261124.svg` (`9fb3c7377877eaea2b5de466659c85437e95a7b7`); `G12_B13_FIG03_REVOLUTION_AUTHORING_20261124.svg` (`01143627de4f6c90e3a74f6945c284c76f256c4a`).

### Toán 12 B14 — Phương trình mặt phẳng (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đọc văn bản [SGK KNTT Toán 12 tập 2 trang in 29–40](https://thuvienhoclieu.com/wp-content/uploads/2023/11/thuvienhoclieu.com-SGK-Toan-lop-12-KNTT-Tap-2.pdf), HĐ1–10, Ví dụ 1–12, Vận dụng 1–5, bài tập 5.1–5.10, phần đọc thêm; screenshot PDF cache miss, không tuyên bố kiểm ảnh nguồn. Đối chiếu mẫu Golden G10 B19 và checklist owner. Bốn tab, sáu mục đúng SGK: pháp tuyến/cặp chỉ phương, phương trình tổng quát, lập phương trình, vuông góc, song song, khoảng cách. Dẫn dắt tích có hướng từ hai tích vô hướng bằng 0; phương trình từ hiệu tọa độ; đoạn chắn, dữ kiện suy biến, phân biệt hướng và vị trí, kiểm trùng/song song bằng bốn hệ số; chứng minh khoảng cách và tìm hình chiếu, chuẩn hóa khoảng cách giữa hai mặt phẳng song song. Mômen lực, quỹ đạo phẳng, tường phòng, tổng điểm và mô hình camera. 10 ví dụ, 6 Vận dụng có Đối chiếu/Kiểm lỗi, 7 lỗi thực chất. Hai SVG riêng B14 sinh từ tọa độ, PNG cũ giữ nguyên. 39 nhóm tự kiểm đạt (tích có hướng, điểm thuộc, quan hệ mặt phẳng, suy biến, khoảng cách/hình chiếu, tọa độ hình, cấu trúc); sau kiểm làm rõ một câu diễn đạt, readback xác nhận chỉ thay câu đó, bảo toàn kết quả. Tập OUTCOME_ID/FIRST_TRY_ID không đổi. Diff chỉ canonical và hai SVG riêng.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1083](https://github.com/TMA2015/self-learning-math/pull/1083) | `docs/thpt-preview/sgk/lop-12/chuong-v/bai-14.md` | `b0604cb989182eaf8bea58c5787e9032bfb83b94` | `265381a3bcef201aefff38185753a35f706237c1` | `953ea63b73f6d2abb1cdb46230f2bebbe5d767d2` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B14_FIG01_NORMAL_AUTHORING_20261124.svg` (`7a847024e9a36e7c483365b2f42965493743e2d6`); `G12_B14_FIG02_DISTANCE_AUTHORING_20261124.svg` (`c144223eac2eb53227f0e734354e8dd3023f2eb0`).

## Cách cập nhật

Với mỗi bài tiếp theo: cập nhật dòng bảng + bằng chứng ngắn gọn trong tài liệu này (SGK/outcome và kết quả kiểm thật, baseline/candidate source blob, source commit, PR, asset delta nếu có, kết luận Q18 và lỗi còn tồn tại nếu có). Nếu có bằng chứng reviewer/hồ sơ lịch sử, dẫn link và giữ snapshot; không nhân bản. RELEASE tiếp nhận các dòng CONTENT_READY và phản hồi vào cùng nhiệm vụ #1039. Không bắt buộc đồng thời hoàn tất cả 51 bài mới bàn giao từng bài. Core/Luyện tập, Tự kiểm tra, ngân hàng, RD1, Mastery, Firebase/Auth, Golden runtime đều ngoài scope.
