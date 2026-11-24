# Biên bản bàn giao chung — Nâng cấp Kiến thức SGK Toán 11–12

**Nhiệm vụ duy nhất:** [#1039](https://github.com/TMA2015/self-learning-math/issues/1039) · **Checklist duy nhất:** `prototypes/thpt/SGK_11_12_AUTHORING_CHECKLIST_OWNER_RESET_20261122.md` (tham chiếu phiên bản do owner chốt trong #1039). **Chuẩn:** SLM-THPT-QUALITY-ONE hiện hành, Q18. **Cập nhật:** 24/11/2026.

**Quyết định owner 24/11/2026:** Đây là **biên bản bàn giao sống duy nhất của cả đợt**, đặt ở đường dẫn cố định này, cập nhật từng dòng khi từng bài hoàn thành; không tạo receipt/handoff/manifest/ledger riêng cho từng bài hoặc từng chương, không tạo bản learner song song. Biên nhận Q18/Delta cần thiết tích hợp trực tiếp trong chính tài liệu chung này, dùng Git history giữ phiên bản; không mở lại hồ sơ lịch sử đã nghiệm thu. Chỉ chốt CONTENT_READY khi đã thực sự tự kiểm đúng/đủ SGK, toán, điều kiện, lời giải, hình và khả năng tự học, sửa hết lỗi thực chất. NotebookLM chỉ dùng khi cần hoặc owner yêu cầu; kết quả cũ giữ theo snapshot, không lặp lại mặc định. Bàn giao ngay đúng source commit/blob và asset delta cho RELEASE; không chờ QA giao diện để hoàn tất AUTHORING. Không tự merge/deploy.

## Tiến độ và danh mục nguồn

- Phạm vi reset: 32 bài Toán 11 B02–B33 và 19 bài Toán 12 B01–B19, tổng 51. B01 lớp 11 không thuộc đợt.
- **Toán 11 B02–B33: 32/32 CONTENT_READY, đã bàn giao đủ 32 nguồn canonical cho RELEASE.** B10–B27 kế thừa review đúng snapshot; B02–B09 và B28–B33 chốt Q18 AUTHOR_SELF_VERIFIED sau tự kiểm và sửa delta thực chất. Tổng đợt: **51/51 bài đã bàn giao (100% phạm vi AUTHORING)**; Toán 12 B01–B19 hoàn thành 19/19. RELEASE_INTAKE=PENDING_RELEASE; biên bản này là điểm tiếp nhận nguồn, không phải chứng nhận website đã cập nhật.
- B10–B17: bằng chứng review nằm trong PR liên quan; B18–B21: [kết luận đối chiếu](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7098583928); B22–B27: [kết luận đối chiếu và B27 delta](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7106569995). Giữ nguyên phạm vi/snapshot, không gán independent PASS cho nội dung mới.
- **Toán 12 B01–B19: 19/19 CONTENT_READY, đã bàn giao đủ 19 nguồn canonical cho RELEASE.** Đã hoàn tất lượt hiệu chỉnh cuối theo rà soát owner 24/11; các commit/blob ở bảng nguồn từng bài là phiên bản sau hiệu chỉnh, thay thế snapshot trước lượt sửa. Không còn bài nào trong phạm vi nâng cấp trang Kiến thức chưa bàn giao. Không dùng PR đợt đã hủy #987 để tính hoàn thành.

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
| 12 | B15 | [#1084](https://github.com/TMA2015/self-learning-math/pull/1084) | CONTENT_READY — đã bàn giao |
| 12 | B16 | [#1085](https://github.com/TMA2015/self-learning-math/pull/1085) | CONTENT_READY — đã bàn giao |
| 12 | B17 | [#1086](https://github.com/TMA2015/self-learning-math/pull/1086) | CONTENT_READY — đã bàn giao |
| 12 | B18 | [#1087](https://github.com/TMA2015/self-learning-math/pull/1087) | CONTENT_READY — đã bàn giao |
| 12 | B19 | [#1088](https://github.com/TMA2015/self-learning-math/pull/1088) | CONTENT_READY — đã bàn giao |

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
| B18 [#1044](https://github.com/TMA2015/self-learning-math/pull/1044) | `645b82cf2d1cfcaf363b6c6119c155bcc7dd73e6` | `fd7d7a33ec276c4e03c95185c5ea49b53643b584` | `91397166b56f95c8118d0134f7f8cb14916a963c` | Lũy thừa nguyên/hữu tỉ/thực; miền, căn bậc ba x³, so sánh lũy thừa, lãi kép. | Không; dùng asset hiện có |
| B19 [#1045](https://github.com/TMA2015/self-learning-math/pull/1045) | `4a288c5121c42bddf94ce8d04602bb779aaa84ff` | `f872e9f19e28467e1b6ea11a943e04a2edf3b266` | `b4a8ee2f8231467ed9d676f6ecc525d94c4634e1` | Khái niệm/tính chất log, log thập phân/tự nhiên, đổi cơ số, điều kiện đối số, pH. | Không; dùng asset hiện có |
| B20 [#1046](https://github.com/TMA2015/self-learning-math/pull/1046) | `74344e822cd5db58eeea1f88ff559a9eae6c8c36` | `1587f399e7ea9557a9fc490768c589991f25dcb0` | `4833132b85a1ccae082e85b637552566eec02ed1` | Hàm mũ/log; miền, chiều biến thiên theo cơ số, đồ thị hàm ngược. | `G11_B20_DECREASING_EXP_LOG_AUTHORING_20261123.svg` |
| B21 [#1047](https://github.com/TMA2015/self-learning-math/pull/1047) | `2f29ae531ca601f50fd7fe855fe38c9ca50a5eac` | `b7fb59866ce1b250e446cb957d975e7c58d037bb` | `e2d4213054d572f856ed4f1d551fbe7c275b8521` | PT/BPT mũ/log; cả hai đối số dương, đổi chiều với cơ số dưới 1, kiểm nghiệm. | `G11_B21_EXP_LOG_THRESHOLD_AUTHORING_20261123.svg` |
| B22 [#1048](https://github.com/TMA2015/self-learning-math/pull/1048) | `5b40c5c8d03ad4e6fe02fbca2df4729bec51be9a` | `d8a679897dde1d2fa25e12df56772eb54be29ff4` | `7e175e84c93e61ac554ef0c037a9e006b6852e69` | Góc hai đường thẳng, vuông góc; véc-tơ kiểm góc 60°, Kheops, hình chỉ phương. | `G11_B22_KHEOPS_ANGLE_AUTHORING_20261123.svg`; `G11_B22_SKEW_PERP_RECTANGULAR_BOX_AUTHORING_20261123.svg` |
| B23 [#1049](https://github.com/TMA2015/self-learning-math/pull/1049) | `fa5b96f9ae0eab840065033d4c0ce9e5d0059994` | `ad1ce1335b2c4dcef36edff8f8ad5378b8f63cad` | `42446d25328308ed23e6c4e3b3444012e1662a38` | Đường vuông góc mặt phẳng; hai đường cắt nhau, trung trực, song song–vuông góc. | `G11_B23_PARALLEL_PLANES_NORMAL_AUTHORING_20261123.svg`; `G11_B23_PERPENDICULAR_BISECTOR_PLANE_AUTHORING_20261123.svg` |
| B24 [#1050](https://github.com/TMA2015/self-learning-math/pull/1050) | `f2a35940864abd6a8e76da5d5b6bfded89f44b6f` | `0bd7550087f455264e2b5e5d3214078e063ccb1c` | `720079470b25e79ec122a52e1ec051beda01dba8` | Chiếu vuông góc, góc đường–mặt, định lí ba đường vuông góc, trường hợp vuông góc mặt. | `G11_B24_SABC_PROJECTION_EXAMPLE_AUTHORING_20261123.svg`; `G11_B24_THREE_PERPENDICULAR_LINES_AUTHORING_20261123.svg` |
| B25 [#1052](https://github.com/TMA2015/self-learning-math/pull/1052) | `e08715c9628ee255e177b09493cffcefb2cb7699` | `c6ba455035041fbe16ee66f346cb78477ceaaa73` | `c8304cae779ad3852077eecc90788d085670c59b` | Góc hai mặt, dấu hiệu/tính chất vuông góc, nhị diện, lăng trụ, chóp/chóp cụt; phân loại đúng. | `G11_B25_CUBE_EQUILATERAL_DIAGONALS_AUTHORING_20261123.svg`; `G11_B25_DIHEDRAL_CHAIR_AUTHORING_20261123.svg`; `G11_B25_PERPENDICULAR_PLANES_AUTHORING_20261123.svg`; `G11_B25_REGULAR_PYRAMID_FRUSTUM_AUTHORING_20261123.svg`; `G11_B25_RHOMBUS_PYRAMID_DIHEDRAL_AUTHORING_20261123.svg`; `G11_B25_SPECIAL_PRISMS_AUTHORING_20261123.svg` |
| B26 [#1054](https://github.com/TMA2015/self-learning-math/pull/1054) | `ed3be1f4c5dd3d40c8a19cef6df2ee34cad9054e` | `417ce70fc81b8a656e803855d0594dfa9db945b2` | `cdb3d7ed0c342f239c297ad7668f086a3d48eaf3` | Khoảng cách điểm–đường/mặt, song song và chéo nhau; chân và đoạn vuông góc chung. | `G11_B26_PARALLEL_DISTANCES_AUTHORING_20261123.svg`; `G11_B26_PYRAMID_HEIGHT_AUTHORING_20261123.svg`; `G11_B26_RHOMBUS_PRISM_DISTANCES_AUTHORING_20261123.svg`; `G11_B26_RIGHT_TRIANGULAR_PRISM_AUTHORING_20261123.svg`; `G11_B26_SABC_COMMON_PERPENDICULAR_AUTHORING_20261123.svg`; `G11_B26_SKEW_COMMON_PERPENDICULAR_AUTHORING_20261123.svg`; `G11_B26_SLOPE_CLEARANCE_AUTHORING_20261123.svg`; `G11_B26_SQUARE_PYRAMID_SKEW_DISTANCE_AUTHORING_20261123.svg` |
| B27 [#1056](https://github.com/TMA2015/self-learning-math/pull/1056) | `ba87d2a056f26f8dba6b4942cc22d5640b255eee` | `abd417ddb6d89528eaa8da28c132a126a26738e0` | `d1f4a6cd17321278cb8c6bc65ab397f8b15feb0b` | Thể tích chóp, chóp cụt, lăng trụ/hộp, chiều cao vuông góc; delta hai câu dẫn đã kiểm. | `G11_B27_FRUSTUM_BASKET_AUTHORING_20261123.svg`; `G11_B27_FRUSTUM_SIMILARITY_AUTHORING_20261123.svg`; `G11_B27_PARALLELEPIPED_OBLIQUE_AUTHORING_20261123.svg`; `G11_B27_PRISM_INCLINED_HEIGHT_AUTHORING_20261123.svg`; `G11_B27_TETRAHEDRON_ORTHOGONAL_AUTHORING_20261123.svg` |

### B10–B17 — bàn giao trên snapshot đã kiểm (24/11/2026)

Kế thừa Academic/PED PASS của nhóm B10–B14 theo checkpoint review tại [PR #1034](https://github.com/TMA2015/self-learning-math/pull/1034), [#1035](https://github.com/TMA2015/self-learning-math/pull/1035), [#1038](https://github.com/TMA2015/self-learning-math/pull/1038) xác nhận cả năm blob; nhóm B15–B17 theo mục NotebookLM independent scoped verdict trong PR #1041–1043. Tất cả 8 HEAD hiện tại đã đối chiếu, exact candidate blob khớp, 4 tabs đúng nguồn; phần delta nhãn HTML đã self-check và không có P2 ngắt nhãn tái hiện ở source. Không yêu cầu review mới chỉ vì báo cáo trước ghi thiếu Q18/handoff. Kế thừa kiểm toán SGK/toán/PED/hình và các điều kiện trong PR nguồn, P0/P1 nội dung không còn theo bằng chứng; QA browser/P2 kỹ thuật thuộc RELEASE. Diff chỉ trang Kiến thức và SVG riêng bài, không đổi assessment. **AUTHOR_SIGNOFF=CONTENT_READY; RELEASE_INTAKE=PENDING_RELEASE**.

| Bài / PR | Commit khóa | Blob nền main lúc đối chiếu | Blob ứng viên | Phạm vi kiến thức/kiểm đã có | SVG thay đổi (lấy theo commit khóa, thư mục docs/assets/images/thpt) |
|---|---|---|---|---|---|
| B10 [#1034](https://github.com/TMA2015/self-learning-math/pull/1034) | `91c4437d1967cc873462199307251529ba9afe09` | `b55bf3c5122dd967b3b56fe9085eff19e58d509e` | `acd275e1b755cdca8e50bd82361f9941990e571c` | Khái niệm, tính chất thừa nhận, xác định mặt phẳng, chóp/tứ diện; P2 ngắt nhãn không tái hiện ở nguồn. | `G11_B10_PLANE_MEMBERSHIP_AUTHORING_20261123.svg`; `G11_B10_QUADRILATERAL_PYRAMID_AUTHORING_20261123.svg` |
| B11 [#1035](https://github.com/TMA2015/self-learning-math/pull/1035) | `a5508bbdae50d8c5a845741b82c963941c9563e0` | `7dccb87d44c1734cf7b5f3c77df209b75db6e63b` | `1499b13b0a0f07849bde558223ef2d03e6142bfe` | Vị trí hai đường, phân biệt chéo/song song, định lí ba giao tuyến; P2 ngắt nhãn không tái hiện. | `G11_B11_TWO_PLANES_PARALLEL_LINES_AUTHORING_20261123.svg` |
| B12 [#1036](https://github.com/TMA2015/self-learning-math/pull/1036) | `cf06012f1489add2e7d948883f1664b633cac2c8` | `6dc44484c9e12d7dcbf49c40157645ddae577390` | `a022abc6764f00461f327257082d432f01bc8897` | Đường–mặt song song, điều kiện đường không thuộc mặt, dựng giao tuyến, kiểm tọa độ độc lập. | `G11_B12_THREE_LINE_PLANE_POSITIONS_AUTHORING_20261123.svg` |
| B13 [#1037](https://github.com/TMA2015/self-learning-math/pull/1037) | `a0d18605f8a273c7c473204257676a4e02530281` | `619162cbe9854188c5873e03a69c3fb5afc95b43` | `8d662b7d8d8677eb3c8d210f8acacce2cc00824d` | Hai mặt song song, hai đường cắt nhau, Thalès ba mặt đôi một song song, lăng trụ/hộp; delta nhãn HTML. | `G11_B13_THALES_THREE_PLANES_AUTHORING_20261123.svg` |
| B14 [#1038](https://github.com/TMA2015/self-learning-math/pull/1038) | `a0366b3f1eb421d397543559ccf853415b7234ae` | `121b165f6bd95cdfa4c33d4a4def678d9121e81c` | `2c44172b68321d0b9e9b515840ca548c90c00df0` | Phép chiếu song song và tính chất, hình biểu diễn, điều kiện suy biến; P2 nhãn không tái hiện. | `G11_B14_PROJECTION_DEGENERACY_AUTHORING_20261123.svg` |
| B15 [#1041](https://github.com/TMA2015/self-learning-math/pull/1041) | `31a8b86e7ef7baecb3e07c68964b3b876c1def65` | `95bbe5ecdd73b92f88176ae0245e11b1098d8e6e` | `5c1a81633b877074aa64a21e2cfd128de2f7db2a` | Giới hạn hữu hạn/vô cực, quy tắc giới hạn, CSN lùi vô hạn; kiểm tổng riêng và chu kì. | `G11_B15_GEOMETRIC_PARTIAL_SUMS_AUTHORING_20261123.svg` |
| B16 [#1042](https://github.com/TMA2015/self-learning-math/pull/1042) | `4ba996bd1eae5757ffc01151e3a3b4225ae8afc6` | `a2242eeb50ae0f02643182bf10c315c41ce05c3b` | `7d58a11f2ad82c11d277287c81f8b5c085f31cf2` | Giới hạn tại điểm/vô cực, giới hạn vô cực, một phía; liên hợp, dấu và hình bước nhảy. | `G11_B16_ONE_SIDED_JUMP_AUTHORING_20261123.svg` |
| B17 [#1043](https://github.com/TMA2015/self-learning-math/pull/1043) | `da585f0e68a9f63538dc69ef71e0aee4fe2efc75` | `36a7c21f3ae2474318c1e857acbcb640680e1326` | `22e4e8c777a989ad00e72af94ea3e2eae0690ec9` | Liên tục tại điểm/trên khoảng/tính chất; lỗ, bước nhảy, kiểm đổi dấu tồn tại nghiệm. | `G11_B17_IVT_SIGN_CHANGE_AUTHORING_20261123.svg` |

### B02–B09 và B28–B32 — chốt tự kiểm và bàn giao (24/11/2026)

**Q18_VERIFICATION_MODE=AUTHOR_SELF_VERIFIED; AUTHOR_SIGNOFF=CONTENT_READY; RELEASE_SCOPE=SGK_KNOWLEDGE_ENRICHMENT_ONLY; RELEASE_INTAKE=PENDING_RELEASE.** Dùng chứng cứ tự kiểm SGK, học thuật, diễn giải, ví dụ và hình đã ghi trong từng PR; kiểm lại exact nguồn và phạm vi diff, không nhận thay NotebookLM independent PASS. Các hạn chế ảnh chụp trang SGK đã ghi trong PR được giữ nguyên; B29 đối chiếu nguồn tham chiếu theo từng mục, không nhận đã đọc trực tiếp ảnh gốc. B03/B04/B06–B09 sửa các ví dụ trùng bài tự thử; B31/B32 sửa diễn giải toán học. Các thay đổi thực chất được tự giải lại và xác minh số, miền, dấu; 8/8 nguồn sửa đúng blob sau ghi, MathJax/HTML cân bằng, bài tự thử có Đối chiếu. 5 nguồn B02/B05/B28–B30 giữ nguyên snapshot tự kiểm, không sửa để tạo hình thức. Tất cả 13 nguồn có đúng 4 tab, đối ứng các mục SGK, MathJax cân bằng, số Vận dụng khớp Đối chiếu; diff chỉ file Kiến thức và SVG riêng bài nếu có. Không còn lỗi học liệu thực chất đã phát hiện chưa xử lý. Core, Luyện tập, Tự kiểm tra, ngân hàng, RD1, Mastery và runtime ngoài phạm vi.

| Bài / PR | Commit khóa | Blob nền main lúc đối chiếu | Blob ứng viên | Bằng chứng kiểm tra/Delta | SVG thay đổi (lấy theo commit khóa, thư mục docs/assets/images/thpt) |
|---|---|---|---|---|---|
| B02 [#1021](https://github.com/TMA2015/self-learning-math/pull/1021) | `b6b88d8fdd67a902dc55d9d46b4c0baab551dd95` | `15c4de731bfbaf5b8a141a54d9b5493e7895c752` | `d628a3af98495c5e7ade5d4fa19d7ad4107b7ff6` | SGK 17–21; cộng, nhân đôi, tích–tổng, tổng–tích; kiểm đủ dấu/điều kiện, góc đặc biệt và tín hiệu âm thanh. | `G11_B02_UNIT_CIRCLE_AUTHORING_RESET_20261122.svg` |
| B03 [#1023](https://github.com/TMA2015/self-learning-math/pull/1023) | `a7288efd8e2287085fb77210bc0a5e4d8521d4f0` | `a8a3592c661b06fae94aad386b991f23a6718957` | `9177a10ade8788712c6b9fbf39789822df2a417a` | SGK 22–30; định nghĩa, chẵn/lẻ/tuần hoàn, 4 đồ thị. Delta 3.2 và 3.6: x cos x lẻ; tan âm trên (−π/2;0), cot dương trên (0;π/2); bài tự thử không trùng. | Không; dùng asset hiện có |
| B04 [#1025](https://github.com/TMA2015/self-learning-math/pull/1025) | `a505489e888d61850ef20a426447b981a4d3e869` | `71271b2035bfe289ac3ccf6f384d8f41ec55aefb` | `0714c5b72389d29dbc8993c2ce9828fc98cf7a92` | SGK 31–39; tương đương, 4 họ nghiệm, máy tính RAD/DEG. Delta 3.1: (x−2)/(x+2)=0 có tập nghiệm {2}, x²−4=0 có {−2,2}; kiểm miền. | `G11_B04_COS_MINUS_HALF_AUTHORING_RESET_20261123.svg`; `G11_B04_SIN_HALF_AUTHORING_RESET_20261123.svg` |
| B05 [#1027](https://github.com/TMA2015/self-learning-math/pull/1027) | `47873721c89760e2c5b9b6c14c68122d318457a9` | `8634196e27b5bac8cb3089f433779b592809d955` | `6adf77092611788f301eb3e3dd0b52a4ddbd8a66` | SGK 42–47; định nghĩa, cách cho, tăng/giảm/bị chặn; truy hồi 1→5→17→53, hiệu 1/[n(n+1)]>0 và dãy luân phiên. | Không; dùng asset hiện có |
| B06 [#1028](https://github.com/TMA2015/self-learning-math/pull/1028) | `7104a657751fe4c11f91656ca8f05847f99cee9a` | `43b285b679941e0748ad78f377ab9bbdd73ec3d3` | `15832bd010a1a965be901c1ed13bc9702366644e` | SGK 48–51; định nghĩa, số hạng tổng quát, tổng. Delta 3.1, 3.6: 4+3n có u1=7,d=3; lương 8 năm tổng 1380 triệu; đối chứng công thức tổng. | Không; dùng asset hiện có |
| B07 [#1029](https://github.com/TMA2015/self-learning-math/pull/1029) | `15e7cd43e13ecc021d840223cec5c36fa8831cc5` | `3d0886889e383cd76963e1fa3a5eef175a389080` | `28dbd57c0c08d5887ff829c1f706cfcc25d0fa9b` | SGK 52–55; định nghĩa, số hạng tổng quát, tổng; q=0,1. Delta 3.7: 3+6+12+24+48=93, n=5; tự thử cũ giữ nguyên. | Không; dùng asset hiện có |
| B08 [#1030](https://github.com/TMA2015/self-learning-math/pull/1030) | `cebdf9a1590afbadc4f80c365e2263d54ed48ce7` | `4f3d1af635dd548700ad3514aff283ebe29aa9a2` | `b3c9f4973bec363ddfd1cc8ea9a156c030dd5bc2` | SGK 58–61; mẫu ghép nhóm, cách ghép, đầu mút. Delta 3.1–3.3: cỡ mẫu 24, 9/24=37,5%; đếm lại 12 quan sát cho [1,3,3,3,2]. | Không; dùng asset hiện có |
| B09 [#1031](https://github.com/TMA2015/self-learning-math/pull/1031) | `0e0ade82eac40b046c3bf12d6601da231159c177` | `46aa17f758783330c2b396f9ed36a25ab77a4094` | `c8869d0413370af29b0e069036d8aab7e4b7b5f6` | SGK 62–67; trung bình, trung vị, tứ phân vị, mốt. Delta 3.1–3.4: bảng tần số 4,10,5,1 cho 16,5; 16; 11,22; mốt 10+60/11≈15,45. | Không; dùng asset hiện có |
| B28 [#1062](https://github.com/TMA2015/self-learning-math/pull/1062) | `7ae741d314cffcde2624ffb218828a63d99644c1` | `86018a916315d313249f958ff2c66acdb52612be` | `eeebaf5a8b564ddc04f89ec70b87ebdab98c55fc` | SGK 66–71; hợp, giao, độc lập; kiểm liệt kê kết quả, không đếm trùng, có/không hoàn lại và xung khắc khác độc lập. | Không; dùng asset hiện có |
| B29 [#1064](https://github.com/TMA2015/self-learning-math/pull/1064) | `981a24d68efee702a5f01a74054759370ed9c94c` | `51b686118c52605d8c8ab64b2e05d3fea419c1f8` | `00aac19435a7133b5dd957882539c53afe717b30` | SGK 72–75, đối chiếu nguồn tham chiếu từng mục như PR; cộng xung khắc và tổng quát, giao, bù; kiểm 26/40, 2/3, 49%, 31%, dữ kiện giao bất khả thi. | Không; dùng asset hiện có |
| B30 [#1065](https://github.com/TMA2015/self-learning-math/pull/1065) | `178d5d468489c943202ea8ec107d1489c70db91f` | `7ef2e8be4bca6c64f7ab190ed5d1cde921998373` | `bac2f0a7f289abcdeb80a1524ded15fb43777415` | SGK 76–78; nhân độc lập và vận dụng; kiểm 21/40, cây xác suất, bảng 5000 người, phân biệt phụ thuộc thống kê và nhân quả. | Không; dùng asset hiện có |
| B31 [#1066](https://github.com/TMA2015/self-learning-math/pull/1066) | `6fe6cd336607941d964b8fe10acfc04f5087f83c` | `20f6b47a4f56a1531ee695fde11953edfb9661bb` | `a0c25691f38ff40955b6316ed8be29880b0ca4a0` | SGK 81–86; dẫn tới đạo hàm, tại điểm/trên khoảng, tiếp tuyến; kiểm sai phân, 9 A, 95,1 m/s, cầu 17,6 m. Delta phân biệt tọa độ có dấu và quãng đường tích lũy; tại t=0,1 vận tốc −1 m/s. | Không; dùng asset hiện có |
| B32 [#1067](https://github.com/TMA2015/self-learning-math/pull/1067) | `66e5f405ea88320e8bdd6d245115eff3a1cc22d8` | `078a5d9aca09954fd2b451508152147f6a655015` | `82cfd851c3629e67793d91355d970011d8d1134e` | SGK 87–94; đủ 5 nhóm quy tắc, điều kiện miền, 16 đối chứng sai phân; delta giải thích quy tắc thương qua wv=u và tách (x)'=1 để tránh 0^0 tại x=0; kiểm thương −3 tại x=2. | Không; dùng asset hiện có |

**Kết luận G11:** 32/32 nguồn canonical B02–B33 đã khóa và bàn giao theo các dòng CONTENT_READY trong chính tài liệu này. Kết luận và commit hiện tại thay thế các trạng thái chờ bàn giao / NotebookLM pending của các snapshot lịch sử trong PR; không thay đổi kết quả review cũ. RELEASE có thể tiếp nhận toàn bộ 32 dòng bằng exact commit/blob, kiểm tích hợp theo vai trò của mình; không yêu cầu một hồ sơ riêng cho từng bài.

### Toán 12 B01 — Tính đơn điệu và cực trị (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** S1: [SGK KNTT Toán 12 tập 1 trang in 5–14](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf), đọc trực tiếp text hai mục Tính đơn điệu/Cực trị, định nghĩa, dấu đạo hàm, bảng biến thiên, cực trị và bài tập. Screenshot PDF cache miss; không nhận visual-source PASS. Đọc mẫu G10 B19. Canonical bốn tab, hai mục đối ứng; giải thích (f') hữu hạn nghiệm bằng 0, hàm không đổi, điểm loại miền, không khả vi, giá trị/điểm cực trị, đọc đồ thị (f'); 10 ví dụ tự giải, 2 Vận dụng độc lập có Đối chiếu/Kiểm lỗi. Kiểm lại đa thức (cực trị 2/−2, ±16, −13/3), phân thức tách miền, căn/đầu mút, trị tuyệt đối, chuyển động, độ cao t=2,5, logistic t=ln4 và 250 sản phẩm/năm; 19 nhóm kiểm toán/source đạt, đồ thị dấu mới kiểm nghiệm ba nghiệm và dấu hai phía. Hình cũ giữ nguyên. Diff 2 file đúng phạm vi. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên | Asset delta |
|---|---|---|---|---|---|
| [#1069](https://github.com/TMA2015/self-learning-math/pull/1069) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-1.md` | `a7a34538d94fa789a22ff1ab369b02131cfb3397` | `64f6a142a88e8c4dd63dff3f7d2220787fcdec5c` | `28f6b83ab28731f51667164fe5f239cb868b948c` | Thêm `docs/assets/images/thpt/G12_B01_FIG02_READ_DERIVATIVE_AUTHORING_20261124.svg`, blob `4720ec1c26e8ecc6ff5707281b9aba3465d31df5`; hình cũ `e2696224533994826104e6c505d9dab26fc0a2e2` giữ nguyên. |

### Toán 12 B02 — Giá trị lớn nhất và giá trị nhỏ nhất của hàm số (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đã đọc text S1 [SGK KNTT Toán 12 tập 1 trang in 15–19](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf), hai mục Định nghĩa/Cách tìm GTLN GTNN trên một đoạn; screenshot cache miss, không nhận đã kiểm ảnh gốc. Mẫu Golden G10 B19. Đủ bốn tab, hai mục đối ứng; định nghĩa gồm cận và đạt được, phân biệt cực trị cục bộ, khoảng mở/miền vô hạn, liên tục trên đoạn và hữu hạn điểm tới hạn gồm điểm không khả vi, so đầu mút. 10 ví dụ, 2 Vận dụng độc lập có Đối chiếu/Kiểm lỗi, 7 ngộ nhận. Tự giải kiểm 22 nhóm: parabol và miền mở, căn, phân thức, đa thức có nhiều điểm cùng đạt, lượng giác, điểm không khả vi, mũ/log, hộp gấp Vmax=16000, hộp không nắp x=6,h=3, bình trụ r≈4,63,h≈14,83, mô hình N tối đa tại 8 và tốc độ tăng tối đa tại 4. Đồ thị cũ chỉnh trục, chấm đặc, nhãn; tọa độ ba mốc đúng phương trình. Diff chỉ trang Kiến thức và SVG riêng B02. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên | Asset delta |
|---|---|---|---|---|---|
| [#1070](https://github.com/TMA2015/self-learning-math/pull/1070) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-2.md` | `9cb7612bb99a0ae615e76288b366bfbec3b2499b` | `d6e517a980ec9259345285964f4c42767faa6122` | `b40ce4dad554e94a6cb88c5b5d20274f91e8c336` | `docs/assets/images/thpt/G12_B02_FIG01_GLOBAL_MIN_MAX_CLOSED_INTERVAL_R00.svg` từ `057991020c0f9349f160047cd87ae35ce03a87ef` sang `cd8c5bea9b17bb89aa0edcd40f49dd317d834c86`. |

### Toán 12 B03 — Đường tiệm cận của đồ thị hàm số (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đã đọc S1 văn bản [SGK KNTT Toán 12 tập 1 trang in 20–25](https://intracomuni.edu.vn/wp-content/uploads/2026/11/sach-giao-khoa-toan-12-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf), 3 mục ngang/đứng/xiên, HĐ1–3, chú ý hệ số a,b, ví dụ và bài tập 1.16–1.20. Screenshot nguồn cache miss, không nhận đã kiểm ảnh gốc. Đối chiếu mẫu G10 B22. Bốn tab Golden, ba mục đối ứng, ba Vận dụng khác ví dụ, Đối chiếu/Kiểm lỗi, 10 ví dụ và 7 lỗi thực chất. Lời giảng giải thích khoảng cách đến đường thẳng, ý nghĩa từng giới hạn, điểm khuyết khác tiệm cận đứng, hai phía có thể khác nhau, hệ số a,b cùng đầu vô cực, đồ thị có thể cắt tiệm cận. 25 nhóm kiểm toán/structure đạt: hai phép chia xiên, dấu giới hạn một phía, căn và trị tuyệt đối, mô hình chi phí/chu vi, giao điểm; SVG cũ đối chiếu tọa độ với hàm, SVG xiên mới kiểm cả hai nhánh và chênh tung độ tại 1,5. Diff 2 file đúng phạm vi. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên | Asset delta |
|---|---|---|---|---|---|
| [#1071](https://github.com/TMA2015/self-learning-math/pull/1071) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-3.md` | `4a41d97b09bae29d44ceb8ca7f35a873131fe0c8` | `02f4b8a446e89d824b7b08c833fc306ca9db02c6` | `be100bd245a9caaa511c98f88b5d76280d9f503f` | Thêm `docs/assets/images/thpt/G12_B03_FIG02_OBLIQUE_AUTHORING_20261124.svg`, blob `62d2cf3e7604d331ea26ac7b49f863ae8793d97a`; SVG ngang/đứng giữ blob `802f01f5b8dce392e3a064a54efe33ae1aea44fc`. |

### Toán 12 B04 — Khảo sát sự biến thiên và vẽ đồ thị của hàm số (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đã đọc S1 văn bản [SGK KNTT Toán 12 tập 1 trang in 26–32](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf), sơ đồ khảo sát, ví dụ 1–5, hai dạng phân thức, chú ý tâm/trục đối xứng, vận dụng nồng độ/chi phí và bài tập 1.21–1.25. Screenshot nguồn cache miss, không nhận đã kiểm ảnh gốc. Đối chiếu mẫu G10 B19. Bốn tab, ba mục đối ứng; khảo sát đủ miền, đạo hàm, dấu, cực trị, giới hạn, tiệm cận, bảng biến thiên, giao điểm, đối xứng; phân biệt bậc ba có/không cực trị, phân thức bậc nhất và bậc hai trên bậc nhất, hai nhánh có/không cực trị. 8 ví dụ, 4 Vận dụng độc lập có Đối chiếu hình, 7 lỗi thường gặp. 25 nhóm kiểm toán/structure đạt: các mốc, đạo hàm, dấu, giá trị cực trị, giao trục, tịnh tiến/tâm, tiệm cận, nồng độ, điện trở; 10 SVG tham chiếu tồn tại, có polyline hữu hạn, không nối nhánh qua điểm loại. Các SVG mới sinh tọa độ từ hàm số, kiểm điểm đánh dấu; 2 SVG cũ giữ nguyên. Diff chỉ canonical và 8 hình riêng B04. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1073](https://github.com/TMA2015/self-learning-math/pull/1073) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-4.md` | `d4740d45f44459acd95d3f92c6816274374c9695` | `a9a9a8f823ee85fe53014150b5cda31201867a4d` | `d3949a0120e7fd19a690a2ac6f7eddd25cc922f4` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B04_FIG03_QUADRATIC_AUTHORING_20261124.svg` (`432f122215bf6ea897f5d13b3eab7327cf14e9b9`); `G12_B04_FIG04_CUBIC_MONOTONE_AUTHORING_20261124.svg` (`a338c274f85e030033a524810639510e099989bf`); `G12_B04_FIG05_OBLIQUE_EXTREMA_AUTHORING_20261124.svg` (`9f800741b8d016e3039e6cff35721b22a6dc0a81`); `G12_B04_FIG06_OBLIQUE_MONOTONE_AUTHORING_20261124.svg` (`1f34ef45faeeaeaa38f5c1d6823ba713e7cc3b4c`); `G12_B04_FIG07_CHECK_QUADRATIC_20261124.svg` (`585b277a399a8961ea6617ec0851e2235ed06faa`); `G12_B04_FIG08_CHECK_CUBIC_20261124.svg` (`878b6f0ed35799daeef7f1db33781129277776cd`); `G12_B04_FIG09_CHECK_RATIONAL_20261124.svg` (`e846dbbc0cb8374a825179f8e4a43e6149f1efdb`); `G12_B04_FIG10_CHECK_OBLIQUE_20261124.svg` (`64ba475d59101e1dc0311f5fab8b9922162c019b`). Giữ nguyên FIG01 rational (`529b05d33fb0347dab70587c84c8ec08789c5c98`) và FIG02 cubic (`8e4cf830e5aa1cac3fe37b9b3c3d93d9b34c006b`).

### Toán 12 B05 — Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đã đọc trực tiếp [SGK KNTT Toán 12 tập 1 trực tuyến, trang 33–41](https://sachgiaokhoa.online/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-i-ung-dung-dao-ham-de-khao-sat-va-ve-do-thi-ham-so-3501/bai-5-ung-dung-dao-ham-de-giai-quyet-mot-so-van-de-lien-quan-den-thuc-tien-12883.html). Hai mục: tốc độ thay đổi của một đại lượng và một vài bài toán tối ưu hoá đơn giản. PDF fetch/screenshot không khả dụng; không nhận đã kiểm pixel nguồn PDF. Bốn tab Golden, hai mục đối ứng, giải thích giới hạn tỉ số biến thiên, vận tốc/gia tốc/quãng đường, hoá học/sinh học, chi phí biên và sai phân, ba bước mô hình hoá tối ưu, hàm cầu/giá, doanh thu/chi phí/lợi nhuận biên, hình trụ kín với h=2r, miền hợp lệ và số lượng nguyên. 11 ví dụ, 4 Vận dụng độc lập có Đối chiếu/Kiểm lỗi và 8 lỗi thực chất. 28 nhóm kiểm toán và structure đều đạt, gồm hộp Vmax≈1056,3 cm³, bình trụ r≈5,42 h≈10,84, thời gian qua sông 1+√7/8 giờ, giá vé 95 nghìn với giới hạn sức chứa, hoà vốn và lợi nhuận tối đa, 5 SVG tham chiếu tồn tại đúng. Hình thể tích cũ giữ nguyên; 4 hình bổ sung phục vụ lập mô hình và đọc đồ thị. Diff chỉ canonical và bốn asset riêng B05. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1074](https://github.com/TMA2015/self-learning-math/pull/1074) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-5.md` | `4122185df4d4a730e8a38828cf493f0ffe960bcf` | `54c9c90323f7b1d9077270d90627864f5a468c03` | `6f9a867a541530c2c44ca03f016eb59348977306` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B05_FIG02_BOX_NET_AUTHORING_20261124.svg` (`abc066d14e33a6e1fcec829aae34e47d4f0a273e`); `G12_B05_FIG03_TRAVEL_AUTHORING_20261124.svg` (`8303761922a9fa53e41b5dad2482ac9bb9b6950a`); `G12_B05_FIG04_POLLUTION_COST_AUTHORING_20261124.svg` (`fa76ba8469c7fb27e2fe3f83f8b8b3b8bf04a497`); `G12_B05_FIG05_PROFIT_AUTHORING_20261124.svg` (`340dc2bea3ce34ca1cc06c608c50c16deb19f1d4`). Giữ nguyên `G12_B05_FIG01_BOX_VOLUME_R00.svg` (`eacd5ba60f25d87c102917a55d314fb16d6f8341`).

### Toán 12 B06 — Vectơ trong không gian (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đối chiếu [SGK KNTT Toán 12 tập 1 trang in 45–59](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf) và [bản SGK trực tuyến](https://sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-ii-vecto-va-he-truc-toa-do-trong-khong-gian-3522/bai-6-vecto-trong-khong-gian-12889.html). Screenshot PDF cache miss; không tuyên bố đã kiểm hình ảnh gốc. Đọc toàn văn mẫu Golden Toán 10 B07. Bốn tab, bốn mục chính đối ứng, sửa quy ước vectơ-không theo SGK; bổ sung giá, đặt vectơ duy nhất, tính chất phép cộng/nhân, quy tắc hiệu đúng chiều, trung điểm và trọng tâm tam giác/tứ diện (3:1), tính chất tích vô hướng, góc tù/công âm, cân bằng lực. 10 ví dụ, 4 Vận dụng độc lập có Đối chiếu/Kiểm lỗi, 8 ngộ nhận. 28 nhóm tự kiểm đạt: kiểm các hệ thức trên hình hộp xiên và tứ diện không suy biến, độ dài 5 và 13, tỉ số lực 25/16, hai tích khai triển và độ dài √7, công −100 J, tâm/hình minh họa, quy ước và cấu trúc. Giữ hình hộp cũ, thêm hai hình trọng tâm tứ diện và đưa hai vectơ về chung gốc. Diff chỉ canonical và hai SVG riêng B06. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1075](https://github.com/TMA2015/self-learning-math/pull/1075) | `docs/thpt-preview/sgk/lop-12/chuong-ii/bai-6.md` | `7dc84b13841d815051e5f721633891813a8b14aa` | `8991c8a30487fdf1db65cf31a19b0ed68ef52518` | `e3091a022ce73d2a355aaf8dd1acc292e7bafce3` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B06_FIG02_TETRA_CENTROID_AUTHORING_20261124.svg` (`ec871f9e8285f1f6ad203214b975a76783c7174b`); `G12_B06_FIG03_VECTOR_ANGLE_AUTHORING_20261124.svg` (`a3133220a16675ca3c719deea35b9d7e6476dc85`). Giữ nguyên `FIG-G12-CHII-B06-R00.svg` (`26e388d873521aa5b0bae945343e69357490ec16`).

### Toán 12 B07 — Hệ trục tọa độ trong không gian (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đã đọc văn bản [SGK KNTT Toán 12 tập 1, trang in 60–66](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf), HĐ1–4, Ví dụ 1–5, nhận xét hình chiếu, Vận dụng 1–2, bài tập 2.13–2.19, phần đọc thêm tọa độ cầu; screenshot PDF cache miss, không tuyên bố đã kiểm ảnh gốc. Đọc toàn văn mẫu Golden G10 B10. Bốn tab, hai mục chính đối ứng: hệ trục tọa độ; tọa độ điểm và vectơ. Giải thích ba vectơ đơn vị, tính duy nhất, sáu hình chiếu, thuộc trục/mặt phẳng, dấu, bằng nhau, cuối trừ đầu; tìm đỉnh lăng trụ/hình hộp, vị trí và độ dời, gốc tại trần; đọc thêm tọa độ cầu có điều kiện góc phần tư và điểm trên trục. Không chuyển phép toán tổng quát B08 sang B07. 10 ví dụ, 3 Vận dụng độc lập có Đối chiếu/Kiểm lỗi và 7 lỗi thực chất. 27 nhóm tự kiểm đạt, gồm chuẩn hóa trục, chiếu, hiệu có dấu, kiểm điểm trùng, lăng trụ/hình hộp không suy biến, đơn vị km/m, chuyển đổi tọa độ cầu và kiểm tọa độ các điểm/đường trong SVG. Sửa hình cũ theo phép chiếu nhất quán, thêm hình độ dời. Diff chỉ canonical và hai SVG riêng B07. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1076](https://github.com/TMA2015/self-learning-math/pull/1076) | `docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md` | `b06689d3cc7fef0732ad897e255c5e2d60c3139c` | `4bfbed222d552f3ccb9c965616245015930ab1cd` | `c87cefbfe3dfe2bdcce4976a40aa1596f8fca31c` |

Asset delta tại `docs/assets/images/thpt/`: sửa `FIG-G12-CHII-B07-R00.svg` từ blob `979ca912e99fdadfc4e91ae0edad5db34fc13928` sang `053c483242c92f11097b5d577aeb4ad5f832497a`; thêm `G12_B07_FIG02_DISPLACEMENT_AUTHORING_20261124.svg` (`498a7f687a493dc3cf4b03d4423eba5025559d8b`).

### Toán 12 B08 — Biểu thức tọa độ của các phép toán vectơ (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đã đọc trực tiếp văn bản [SGK KNTT Toán 12 tập 1 trang in 67–72](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf), tình huống mở đầu, HĐ1–3, Ví dụ 1–7, các nhận xét, Luyện tập 1–7 và bài tập 2.20–2.24. Screenshot PDF cache miss; không tuyên bố đã kiểm ảnh nguồn. Đọc toàn văn mẫu Golden G10 B10. Bốn tab, ba mục đối ứng: cộng/trừ/nhân số và cùng phương, trung điểm/trọng tâm; tích vô hướng và các công thức độ dài, khoảng cách, góc; ứng dụng thực tiễn. Giải thích nguồn gốc công thức từ phân tích vectơ đơn vị, tính độc lập các thành phần, tích chéo bằng 0, hệ thức trung điểm/trọng tâm; nêu điều kiện khác không và không chia tọa độ 0. Thêm hình bình hành, tính góc hình chóp/hình hộp, mái nhà, đèn trần, chuyển động vận tốc không đổi, khoảng cách vật bay, radar; phân biệt góc vectơ/đường thẳng và tốc độ/vận tốc trung bình. 10 ví dụ, 4 Vận dụng độc lập có Đối chiếu/Kiểm lỗi, 8 lỗi thường gặp. 32 nhóm tự kiểm đạt: phép toán, cùng phương, điểm/độ dài/góc, mái 60√13 cm và 56,3°, hình hộp 7 và 78,6°, vị trí dự đoán, khoảng cách 5,02 km, radar đúng biên 13 km; kiểm phép chiếu các cạnh được đánh dấu và cấu trúc. Giữ hình cũ, thêm hai SVG riêng B08. Diff đúng canonical và hai hình. Không còn lỗi thực chất đã phát hiện.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1077](https://github.com/TMA2015/self-learning-math/pull/1077) | `docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md` | `72c56071d36f466a68e295111f23798c641733d9` | `c85922428c85ddeb48cec5e2bd5953faa44207c8` | `757b85da3ebdc143be51b7816b142dbde13b11da` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B08_FIG02_PYRAMID_AUTHORING_20261124.svg` (`0d8e4b4fd4bbdc1c896143a74307b3ea5ff25367`); `G12_B08_FIG03_ROOF_AUTHORING_20261124.svg` (`7a9920c100572366b38937eda4ee22d769441aa5`). Giữ nguyên `FIG-G12-CHII-B08-R00.svg` (`13445da079245a556a08e7a57069d9987097a0be`).

### Toán 12 B09 — Khoảng biến thiên và khoảng tứ phân vị (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đọc văn bản [SGK KNTT Toán 12 tập 1 trang in 75–79](https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-12-Tap-1-Chuong-trinh-moi.pdf), HĐ1–2, Ví dụ 1–2, Luyện tập 1–2, Vận dụng và bài tập 3.1–3.3; screenshot PDF cache miss, không tuyên bố đã kiểm hình gốc. Đọc toàn văn mẫu Golden G10 B14. Bốn tab, hai mục đối ứng: khoảng biến thiên và khoảng tứ phân vị. Từ bảng có nhóm rỗng, giải thích vì sao R ghép nhóm lớn hơn R gốc với nhóm nửa kín; dẫn dắt nội suy từ tần số tích lũy, giữ mốc không nguyên và độ rộng từng nhóm; làm rõ biên chung, nhóm rỗng, sự khác nhau của R và IQR, giới hạn khi sàng lọc ngoại lệ. 6 ví dụ, 3 Vận dụng độc lập có Đối chiếu/Kiểm lỗi, 7 lỗi thực chất. Hai SVG cũ chỉnh thang đo và gắn cùng bảng n=40, Q1=115/7, Q3=145/6, IQR=325/42. 27 nhóm tự kiểm đạt: 15 bảng ghép nhóm, mẫu gốc, ngưỡng ngoại lệ, tọa độ SVG, cấu trúc; tập mã OUTCOME_ID/EX_ID/FIRST_TRY_ID/FIG_ROLE bảo toàn. Diff chỉ canonical và hai SVG riêng B09.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1078](https://github.com/TMA2015/self-learning-math/pull/1078) | `docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md` | `795e8bc946180242e1e4a2b30e350ba27bed5bd4` | `4571bac678c36c4fb06d6a7fde45b86703f8ebce` | `0ae1063568ddf02dec12f61ecc7733b643d1245a` |

Asset delta tại `docs/assets/images/thpt/`: `FIG-G12-CHIII-B09-QUARTILES-R00.svg` từ `51fd46bc69ee7c4279e5024aa29dc0e83651a1a7` sang `e847496c567b7121d2121134401e36ead2040e1a`; `FIG-G12-CHIII-B09-RANGE-IQR-R00.svg` từ `b0cdf1b1f00c5d70525dc8c889da48211aeb8cac` sang `1a3cb6397d8ed8ca634724e2084c909747dee836`.

### Toán 12 B10 — Phương sai và độ lệch chuẩn (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đọc văn bản [SGK KNTT Toán 12 tập 1 trang in 80–84](https://sqhx-hanoi.mediacdn.vn/91579363132710912/2025/11/18/1-toan-12-tap-1-kntt-17634587393041073129419.pdf), HĐ1, Ví dụ 1–3, Luyện tập 1, Vận dụng, chú ý mẫu số n−1, Em có biết CV và bài tập 3.4–3.8. Screenshot PDF cache miss, không tuyên bố đã kiểm ảnh gốc. Đọc mẫu Golden G10 B14. Bốn tab, hai mục đối ứng: phương sai và độ lệch chuẩn; sử dụng chúng đo độ rủi ro. Giải thích trung điểm đại diện, trung bình có trọng số, triệt tiêu độ lệch có dấu, bình phương và căn, chứng minh công thức rút gọn; mẫu số n và n−1, đơn vị, trường hợp s=0, so sánh mẫu gốc/ghép nhóm theo hai chiều sai lệch; so độ ổn định và rủi ro với cùng quy mô hoặc quy mô chênh lệch; CV đọc thêm đúng điều kiện. 6 ví dụ, 3 Vận dụng độc lập có Đối chiếu/Kiểm lỗi, 7 lỗi thường gặp. Sửa hình cũ theo thang tần số chung, giá trị đại diện và độ lệch chuẩn đúng bảng (A≈9,26; B≈16,04). 31 nhóm tự kiểm đạt, gồm 19 trường hợp tính độc lập bằng hai công thức, điều kiện, làm tròn, CV, mẫu số có dấu mũ, tọa độ SVG, cấu trúc; bảo toàn tập mã OUTCOME_ID/EX_ID/FIRST_TRY_ID/FIG_ROLE. Diff đúng canonical và một SVG riêng B10.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1079](https://github.com/TMA2015/self-learning-math/pull/1079) | `docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md` | `d98974cdacd84c118a5387275b8ad5da088ed126` | `32f4eda1cfd151592eef5a35921ad872c1f644c4` | `adfe3511b1335aed52047f00c11ecb3ad830d287` |

Asset delta: `docs/assets/images/thpt/FIG-G12-CHIII-B10-SPREAD-R00.svg` từ `ddff354dca86b0cfa1a223a8245b87044a6e93b1` sang `120a1a0e7b360c8cde1742459174d747bca87de0`.

### Toán 12 B11 — Nguyên hàm (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đọc trực tiếp văn bản [SGK KNTT Toán 12 tập 2, trang in 4–11](https://thuvienhoclieu.com/wp-content/uploads/2023/11/thuvienhoclieu.com-SGK-Toan-lop-12-KNTT-Tap-2.pdf) và [SGKVN](https://sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iv-nguyen-ham-va-tich-phan-3521/bai-11-nguyen-ham-12886.html). HĐ1–7, Ví dụ 1–8, Luyện tập, Vận dụng, bảng nguyên hàm, bài tập 4.1–4.7. Screenshot PDF cache miss, không tuyên bố kiểm ảnh gốc. Đọc toàn văn Golden G10 B19. Bốn tab, ba mục đối ứng: nguyên hàm của một hàm số, tính chất cơ bản, nguyên hàm các hàm số thường gặp. Giải thích họ F+C từ đạo hàm hiệu bằng 0, điều kiện đầu mút một phía, vi phân, tính liên tục, tính tuyến tính k khác 0, hằng số độc lập trên các khoảng tách rời, lũy thừa/logarit/lượng giác/mũ và đầy đủ bảng 10 công thức; bài toán doanh thu, hệ số góc, vận tốc/gia tốc và độ cao cực đại. 11 ví dụ, 5 Vận dụng có Đối chiếu/Kiểm lỗi, 7 lỗi thường gặp. 34 nhóm tự kiểm đạt: đối chiếu đạo hàm và giá trị đầu bằng giải tích và kiểm số tại nhiều điểm, kiểm hình và cấu trúc; bảo toàn tập mã OUTCOME_ID/FIRST_TRY_ID. SVG mới biểu diễn ba parabol tịnh tiến và tiếp tuyến tại x=1 cùng hệ số góc 2; tọa độ sinh từ hàm số; PNG cũ giữ nguyên trong kho nhưng bài dùng SVG mới. Diff chỉ canonical và một hình riêng B11.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1080](https://github.com/TMA2015/self-learning-math/pull/1080) | `docs/thpt-preview/sgk/lop-12/chuong-iv/bai-11.md` | `045ca4ab52a4d307e7842ad9a4d5f130eef115db` | `f3fc0f654a21af7ec72de657643ef97488413dcb` | `88dda34ee093c97e0cc3b844b6857168ee630506` |

Asset delta: thêm `docs/assets/images/thpt/G12_B11_FIG01_FAMILY_AUTHORING_20261124.svg` (blob `cb98c0d7e33eab90f1b1fd4e09e6dba925539e25`). Không chỉnh sửa PNG cũ.

### Toán 12 B12 — Tích phân (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đọc văn bản [SGK KNTT Toán 12 tập 2, trang in 12–18](https://sqhx-hanoi.mediacdn.vn/91579363132710912/2025/11/18/2-toan-12-tap-2-kntt-17634587393353827478.pdf), HĐ1–4, Ví dụ 1–6, Luyện tập 1–4, Vận dụng 1–2, bài tập 4.8–4.13; screenshot PDF cache miss, không tuyên bố đã kiểm ảnh nguồn. Đối chiếu mẫu Golden G10 B16 và B19. Bốn tab, hai mục đối ứng: Khái niệm tích phân; Tính chất của tích phân. Dẫn dắt từ diện tích hình thang và hàm diện tích dưới parabol, kẹp bằng hai hình chữ nhật với h dương/âm; định nghĩa hiệu nguyên hàm không phụ thuộc C, biến giả, điều kiện liên tục, quy ước cận và ý nghĩa hình học; tuyến tính, ghép đoạn, trị tuyệt đối, độ dịch chuyển/quãng đường, lợi nhuận biên, lưu lượng thực, giá trị trung bình (phân biệt trung bình theo bán kính và theo mặt cắt). 10 ví dụ, 6 Vận dụng có Đối chiếu/Kiểm lỗi, 7 lỗi thực chất. 37 nhóm tự kiểm đạt, gồm tính lại nguyên hàm và kiểm độc lập tích phân số Simpson, các giới hạn kẹp, kết quả, cấu trúc, tọa độ hình và bảo toàn tập OUTCOME_ID/FIRST_TRY_ID. Hai SVG mới minh họa đạo hàm hàm diện tích và tích phân có dấu; PNG cũ giữ nguyên trong kho. Diff chỉ canonical và hai SVG riêng B12.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1081](https://github.com/TMA2015/self-learning-math/pull/1081) | `docs/thpt-preview/sgk/lop-12/chuong-iv/bai-12.md` | `795812459a8f9c638b108a8ba1546c263d19df77` | `2ea14427518e58acb03e85d64dcc6b18d55f8798` | `e0ffd6f8389218585baa7e47b2558b3c83248034` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B12_FIG01_AREA_DERIVATIVE_AUTHORING_20261124.svg` (`299037dee91e0c91db3e5c911982bbebbb514ae0`); `G12_B12_FIG02_SIGNED_AREA_AUTHORING_20261124.svg` (`b04dafd5b4ff5f56be0893d3a52bba5121b64808`).

### Toán 12 B13 — Ứng dụng hình học của tích phân (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đối chiếu [SGK KNTT Toán 12 tập 2 trang in 19–26](https://intracomuni.edu.vn/wp-content/uploads/2026/11/sach-giao-khoa-toan-12-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf) và [SGKVN](https://sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iv-nguyen-ham-va-tich-phan-3521/bai-13-ung-dung-hinh-hoc-cua-tich-phan-13002.html). Screenshot PDF cache miss; không tuyên bố kiểm ảnh gốc. Đọc toàn văn mẫu Golden G10 B19. Bốn tab, hai mục đúng SGK: diện tích hình phẳng; thể tích vật thể. Giải thích lát đứng và chiều cao không âm, giao điểm, đổi dấu, miền kín, thặng dư tiêu dùng/sản xuất, Lorenz; diện tích mặt cắt, đồng dạng, suy ra công thức lăng trụ/chóp/chóp cụt, trụ/nón/nón cụt/cầu/chỏm cầu; phân biệt đĩa/vành khăn (mở rộng), bán kính/đường kính và đơn vị. 10 ví dụ, 4 Vận dụng có Đối chiếu/Kiểm lỗi, 7 lỗi thực chất. Ba SVG riêng về hai đồ thị, thiết diện chóp, quay thành nón; PNG cũ giữ trong kho. 41 nhóm tự kiểm: 40 đạt ở snapshot đầu, phát hiện cộng sai hai phần diện tích, sửa thành 1/6+5/6=1 và kiểm lại bằng tích phân số Simpson (0,1666667+0,8333333=1), readback xác nhận delta duy nhất. Các kết quả trước được bảo toàn. Kiểm tọa độ hình, tính liên tục/điều kiện, cấu trúc bốn tab, tập OUTCOME_ID/FIRST_TRY_ID không đổi. Diff chỉ canonical và ba SVG B13.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1082](https://github.com/TMA2015/self-learning-math/pull/1082) | `docs/thpt-preview/sgk/lop-12/chuong-iv/bai-13.md` | `144e9d386b27208ae73ae745169680b474b4208f` | `51b5cf8243b4793e159db862379a21df60ff75bd` | `8007752c3027a88281aa3192ef30ba557d0df648` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B13_FIG01_TWO_CURVES_AUTHORING_20261124.svg` (`af5e42bcb3b150c706d472a92be96399b480e02c`); `G12_B13_FIG02_PYRAMID_SECTION_AUTHORING_20261124.svg` (`9fb3c7377877eaea2b5de466659c85437e95a7b7`); `G12_B13_FIG03_REVOLUTION_AUTHORING_20261124.svg` (`01143627de4f6c90e3a74f6945c284c76f256c4a`).

### Toán 12 B14 — Phương trình mặt phẳng (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đọc văn bản [SGK KNTT Toán 12 tập 2 trang in 29–40](https://thuvienhoclieu.com/wp-content/uploads/2023/11/thuvienhoclieu.com-SGK-Toan-lop-12-KNTT-Tap-2.pdf), HĐ1–10, Ví dụ 1–12, Vận dụng 1–5, bài tập 5.1–5.10, phần đọc thêm; screenshot PDF cache miss, không tuyên bố kiểm ảnh nguồn. Đối chiếu mẫu Golden G10 B19 và checklist owner. Bốn tab, sáu mục đúng SGK: pháp tuyến/cặp chỉ phương, phương trình tổng quát, lập phương trình, vuông góc, song song, khoảng cách. Dẫn dắt tích có hướng từ hai tích vô hướng bằng 0; phương trình từ hiệu tọa độ; đoạn chắn, dữ kiện suy biến, phân biệt hướng và vị trí, kiểm trùng/song song bằng bốn hệ số; chứng minh khoảng cách và tìm hình chiếu, chuẩn hóa khoảng cách giữa hai mặt phẳng song song. Mômen lực, quỹ đạo phẳng, tường phòng, tổng điểm và mô hình camera. 10 ví dụ, 6 Vận dụng có Đối chiếu/Kiểm lỗi, 7 lỗi thực chất. Hai SVG riêng B14 sinh từ tọa độ, PNG cũ giữ nguyên. 39 nhóm tự kiểm đạt (tích có hướng, điểm thuộc, quan hệ mặt phẳng, suy biến, khoảng cách/hình chiếu, tọa độ hình, cấu trúc); sau kiểm làm rõ một câu diễn đạt, readback xác nhận chỉ thay câu đó, bảo toàn kết quả. Tập OUTCOME_ID/FIRST_TRY_ID không đổi. Diff chỉ canonical và hai SVG riêng.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1083](https://github.com/TMA2015/self-learning-math/pull/1083) | `docs/thpt-preview/sgk/lop-12/chuong-v/bai-14.md` | `6fb2f0f08209ca72602aca4cefdbb11909d9a623` | `265381a3bcef201aefff38185753a35f706237c1` | `b5ef9b4cf9678077fcd60e27578a9b9845945bba` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B14_FIG01_NORMAL_AUTHORING_20261124.svg` (`7a847024e9a36e7c483365b2f42965493743e2d6`); `G12_B14_FIG02_DISTANCE_AUTHORING_20261124.svg` (`c144223eac2eb53227f0e734354e8dd3023f2eb0`).

### Toán 12 B15 — Phương trình đường thẳng trong không gian (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đọc văn bản [SGK KNTT Toán 12 tập 2 trang in 41–49](https://intracomuni.edu.vn/wp-content/uploads/2026/11/sach-giao-khoa-toan-12-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf) và [SGKVN](https://www.sgkvn.com/lop-12-15/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-v-phuong-phap-toa-do-trong-khong-gian-3561/bai-15-phuong-trinh-duong-thang-trong-khong-gian-13035.html); HĐ1–6, Ví dụ 1–9, Luyện tập, Vận dụng và bài tập 5.11–5.19. Screenshot PDF cache miss; không tuyên bố kiểm ảnh gốc. Đọc Golden G10 B19 và checklist owner. Bốn tab, ba mục đúng SGK: phương trình đường thẳng (chỉ phương, tham số, chính tắc, qua hai điểm); hai đường thẳng vuông góc; vị trí tương đối. Sửa lỗi học thuật bản nền ở O05: theo SGK hai đường chéo nhau có thể vuông góc, không cần giao điểm. Giải thích một tham số chung, trường hợp thành phần hướng bằng 0, lập đường vuông góc mặt phẳng, giao điểm và miền tham số; chứng minh tiêu chuẩn vị trí bằng tích có hướng/tích hỗn hợp và kiểm hệ ba tọa độ. Phân biệt quỹ đạo với va chạm thực, mô hình vật cản và bóng cột. 8 ví dụ, 5 Vận dụng có Đối chiếu/Kiểm lỗi, 7 lỗi thường gặp. Hai SVG riêng B15 phục vụ tham số và chéo-vuông góc; giữ hai PNG cũ trong kho, connector lỗi giải mã PNG nên không tuyên bố đã quan sát nội dung hình cũ. 35 nhóm tự kiểm đạt: phương trình, điểm thuộc, vị trí, tích vô hướng/tích hỗn hợp, giao điểm, miền thời gian, tọa độ hình, cấu trúc, tập OUTCOME_ID/FIRST_TRY_ID. Sau kiểm đưa hai recap vào class canonical đúng SGK/X-F.3; readback xác nhận bảo toàn toán và mã. Diff chỉ canonical và hai SVG.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1084](https://github.com/TMA2015/self-learning-math/pull/1084) | `docs/thpt-preview/sgk/lop-12/chuong-v/bai-15.md` | `a0663d0a29f79f1215bcd0d8fd557aceccc7d864` | `05a81b707824146d6829ef385091dd4046bbe8fe` | `380a410321b1e299fda1dfcb448f2e3314aeb0dc` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B15_FIG01_PARAMETER_AUTHORING_20261124.svg` (`2d785967971d3412c23a4e4b408cb942bf4129aa`); `G12_B15_FIG02_SKEW_PERP_AUTHORING_20261124.svg` (`a9ef2806c8a28050570ed78bd3c8eb87d8944335`).

### Toán 12 B16 — Công thức tính góc trong không gian (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đọc văn bản [SGK KNTT Toán 12 tập 2 trang in 50–53](https://sqhx-hanoi.mediacdn.vn/91579363132710912/2025/11/18/2-toan-12-tap-2-kntt-17634587393353827478.pdf), HĐ1–3, Ví dụ 1–4, Luyện tập 1–3, Vận dụng và bài tập 5.20–5.24. Screenshot PDF cache miss; không tuyên bố kiểm ảnh gốc. Đối chiếu Golden G10 B19. Bốn tab, ba mục đúng SGK: công thức tính góc giữa hai đường thẳng, giữa đường và mặt phẳng, giữa hai mặt phẳng. Giải thích trị tuyệt đối khi đảo chiều vectơ; hình chiếu và góc phụ để hiểu sin; thiết diện vuông góc giao tuyến để hiểu cos pháp tuyến; điều kiện vectơ khác không, góc 0/90 độ, phân biệt góc và vị trí, độ dốc phần trăm, tham số hai nghiệm, mái và tấm nghiêng. Quy ước DEG và làm tròn đến một chữ số thập phân. 7 ví dụ, 3 Vận dụng có Đối chiếu/Kiểm lỗi, 7 lỗi thường gặp. Ba công thức khung KEY_FORMULA trung tính, một recap canonical. Ba SVG riêng B16 dựng từ góc/tọa độ chính xác; hai PNG cũ giữ nguyên, connector không giải mã được nên không tuyên bố đã quan sát nội dung. 34 nhóm tự kiểm đạt: kết quả góc, tích vô hướng/tích có hướng, trường hợp biên, đổi chiều/nhân vectơ, nghiệm tham số, hình học SVG, mã và cấu trúc. Bảo toàn OUTCOME_ID/FIRST_TRY_ID. Diff chỉ canonical và ba SVG của B16.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1085](https://github.com/TMA2015/self-learning-math/pull/1085) | `docs/thpt-preview/sgk/lop-12/chuong-v/bai-16.md` | `9cb6a80c46f21ef29a46eaa1318ec2b1ae79ec6a` | `b226f2e5e38b0e4eb7d1e12c6dca4a3bae2e629d` | `e200b5b332f8d6e82a2a6983d46c0d7a18db92dd` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B16_FIG01_LINE_ANGLE_AUTHORING_20261124.svg` (`27b811c2e6d4293178539f91821354e011be4636`); `G12_B16_FIG02_LINE_PLANE_AUTHORING_20261124.svg` (`621bba914692f6b0787b11ac57934c8df7eabb27`); `G12_B16_FIG03_PLANE_ANGLE_AUTHORING_20261124.svg` (`6b0674ed7c66f9822d162dcf04f0f9671b8039b1`).

### Toán 12 B17 — Phương trình mặt cầu (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đối chiếu văn bản [SGK KNTT Toán 12 tập 2, trang in 54–60](https://intracomuni.edu.vn/wp-content/uploads/2026/11/sach-giao-khoa-toan-12-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf); ảnh PDF không truy xuất được (cache miss), không xác nhận kiểm ảnh gốc. Bốn tab Golden. Đối ứng hai mục phương trình mặt cầu và ứng dụng thực tiễn. Từ khoảng cách đến phương trình, hoàn thành bình phương, R² dương, trong/trên/ngoài, đường kính và thiết diện; bổ sung tọa độ địa cầu từ vĩ/kinh độ, cung tròn lớn khác dây cung, góc ở tâm giữ dấu tích vô hướng; mô hình GPS/định vị từ khoảng cách và kiểm nghiệm. 6 ví dụ, 4 Vận dụng có Đối chiếu/Kiểm lỗi, 6 lỗi thực chất, 2 SVG. Đối chiếu Golden G10 B21. 26 nhóm tự kiểm: 25 đạt trước delta, kiểm cú pháp báo mẫu ngắt dòng trùng token mở MathJax; đã tách hàng hệ phương trình, readback xác nhận delta chỉ định dạng và kiểm cú pháp đạt. Bảo toàn OUTCOME_ID/FIRST_TRY_ID. Giữ nguyên PNG cũ trong kho; nhãn và khung công thức theo 3+1. Diff chỉ canonical và SVG riêng bài.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1086](https://github.com/TMA2015/self-learning-math/pull/1086) | `docs/thpt-preview/sgk/lop-12/chuong-v/bai-17.md` | `4cc54d27d686ea70b7d04bec1094ab0bfe5e1a23` | `29b609be3195efcd341aea39cb604a930dba8468` | `0c4c1790a11631fd6cbcd0894acbcaeac7f52871` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B17_SECTION_AUTHORING_20261124.svg` (`0c641f4ccf95d9e93b9693999984e64bea08c52d`); `G12_B17_GREAT_CIRCLE_AUTHORING_20261124.svg` (`d684c8c4670945d89c5f7a96e485c9b96df880da`).

### Toán 12 B18 — Xác suất có điều kiện (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đối chiếu văn bản [SGK KNTT Toán 12 tập 2, trang in 64–71](https://intracomuni.edu.vn/wp-content/uploads/2026/11/sach-giao-khoa-toan-12-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf); ảnh PDF không truy xuất được (cache miss), không xác nhận kiểm ảnh gốc. Bốn tab Golden. Đối ứng hai mục xác suất có điều kiện và công thức nhân xác suất. Thu hẹp không gian mẫu, mô hình không đồng khả năng, mẫu số dương, xác suất giao bằng 0 khi điều kiện xác suất 0, biến cố đối/độc lập, bảng 2×2, sơ đồ cây và phép thử không hoàn lại, trò chơi ba cửa với quy tắc người dẫn rõ. 6 ví dụ, 3 Vận dụng có Đối chiếu/Kiểm lỗi, 6 lỗi thực chất, 1 SVG. Đối chiếu Golden G10 B26. 26 nhóm tự kiểm đạt trên source cuối, gồm xác suất, tổng bảng và lá cây, cấu trúc và bảo toàn đủ 7 mã EX-G12-B18-O01–O07. Giữ nguyên PNG cũ trong kho; nhãn và khung công thức theo 3+1. Diff chỉ canonical và SVG riêng bài.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1087](https://github.com/TMA2015/self-learning-math/pull/1087) | `docs/thpt-preview/sgk/lop-12/chuong-vi/bai-18.md` | `e96cc74d0bcaa06fbf811157e06ddb6814be9753` | `c5e96be714ed2b3d440c37c5507ddc79314bf087` | `4af5c2737acfdfd6027f360a68fc3eaa586a3f4c` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B18_TREE_AUTHORING_20261124.svg` (`45568ffd5307a1f8292a0c84ddba4e045fd27d6e`).

### Toán 12 B19 — Công thức xác suất toàn phần và công thức Bayes (24/11/2026)

**Q18 AUTHOR_SELF_VERIFIED · CONTENT_READY · RELEASE_INTAKE=PENDING_RELEASE.** Đối chiếu văn bản [SGK KNTT Toán 12 tập 2, trang in 72–78](https://intracomuni.edu.vn/wp-content/uploads/2026/11/sach-giao-khoa-toan-12-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf); ảnh PDF không truy xuất được (cache miss), không xác nhận kiểm ảnh gốc. Bốn tab Golden. Đối ứng hai mục công thức xác suất toàn phần và Bayes. Suy ra từ phân hoạch và nhân xác suất; cùng bảng/cây cho toàn phần rồi Bayes, mẫu số dương và nhóm xác suất 0, tỉ lệ nền, tín hiệu dương/âm, mở rộng nhiều nhóm và mô hình di truyền độc lập. 6 ví dụ, 3 Vận dụng có Đối chiếu/Kiểm lỗi, 6 lỗi thực chất, 1 SVG. Đối chiếu Golden G10 B26. 25 nhóm tự kiểm đạt trên source cuối, gồm tần số, xác suất lá, Bayes, tỉ lệ nền, làm tròn, cấu trúc và bảo toàn đủ 7 mã EX-G12-B19-O01–O07. Giữ nguyên PNG cũ trong kho; nhãn và khung công thức theo 3+1. Diff chỉ canonical và SVG riêng bài.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên |
|---|---|---|---|---|
| [#1088](https://github.com/TMA2015/self-learning-math/pull/1088) | `docs/thpt-preview/sgk/lop-12/chuong-vi/bai-19.md` | `9b4a07e1ed5be43d72ca8f6a36792ba8834bc99f` | `e9588ca5fcdb107aa62990dc2e36635ef01085c0` | `0d0b8bb1ea0f9bb57e9c91f532591163dad9c22d` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B19_TREE_AUTHORING_20261124.svg` (`a9fcde9ea6c6e23062fb973e708d98a553ea6ebe`).

## Hiệu chỉnh cuối Toán 12 — 24/11/2026

Owner duyệt sửa nhanh theo [rà soát 19 bài](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7124899417). Giữ nguyên 19 PR và 32 nguồn Toán 11. Snapshot trước hiệu chỉnh: [biên bản đã khóa trước lượt sửa](https://github.com/TMA2015/self-learning-math/blob/ae8bc6b0329852a660ad703aad1fa51610703717/prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md) (blob `a2cf7490c9456a11ec4e43b9fc0f6e1dd1ebb604`); các kết quả kiểm trước đây gắn snapshot đó, chỉ kiểm lại delta thực tế.

| Bài | Delta đã sửa và đọc kiểm lại |
|---|---|
| B01 | Xét đơn điệu từng khoảng; chuẩn hóa dấu bất đẳng thức. |
| B02 | Điều kiện đạo hàm tại điểm trong miền đạt GTLN/GTNN. |
| B03 | Chỉ rõ hướng hai giới hạn xác định tiệm cận xiên. |
| B04 | Giải thích trục đối xứng, sửa hàng phân cách bảng biến thiên. |
| B05 | Giá theo lượng bán; tối ưu hình trụ đúng nhãn ứng dụng và giả thiết. |
| B06 | Cạnh bên, dời vectơ và cùng gốc; ý nghĩa công âm. |
| B07 | Ví dụ camera có tọa độ cụ thể; điều kiện thuộc trục/mặt phẳng. |
| B08 | Giải thích tích vô hướng và hai đường vuông góc giao tuyến mái. |
| B09 | Nội suy từ cộng dồn tuyến tính; tách lưu ý nhóm rỗng. |
| B10 | Giải thích thông tin bảng nhóm và mốc 0 trong hệ số biến thiên. |
| B11 | Điều kiện nguyên hàm tại mọi điểm; sửa bảng logarit trị tuyệt đối. |
| B12 | Giới hạn tổng diện tích, câu hỏi lượng nước, bảng quãng đường. |
| B13 | Phạm vi chóp cụt, dấu của hiệu, liên hệ ví dụ chỏm cầu. |
| B14 | Điều kiện tích có hướng khác không; hình chiếu bằng vectơ vị trí. |
| B15 | Diễn giải dịch chuyển theo tham số, đường thẳng cùng phương. |
| B16 | Làm rõ pháp tuyến và thiết diện dùng tính góc. |
| B17 | Mô tả trục địa cầu độc lập; tính ngược vĩ độ/kinh độ, hai cực. |
| B18 | Giải thích nhóm điều kiện; tách bài ba cửa thành ba bước. |
| B19 | Điều kiện xác suất dương và xử lý nhóm xác suất 0. |

**Tự kiểm delta — Q18 AUTHOR_SELF_VERIFIED:** đối chiếu 19/19 commit HEAD và candidate blob, PR vẫn draft/open; nội dung trước tab Khám phá và từ tab Ví dụ trở đi byte-identical 19/19; thứ tự và tên mục chính/phụ, comment metadata, đường dẫn hình giữ nguyên 19/19 (50 mục chính mỗi tab); cả ba bảng lỗi cột B04/B11/B12 đã sửa, kiểm cấu trúc cột trên toàn bộ hai tab không còn lỗi phát hiện; không còn entity `&lt;`/`&gt;` trong hai tab kiểm. Chỉ cập nhật các file canonical, không tạo PR hoặc asset mới, không thay dữ liệu ngoài scope. Kiểm ngữ nghĩa delta bằng định nghĩa, phép tính và điều kiện đã nêu; không tuyên bố browser/render PASS hoặc independent review mới. Giữ CONTENT_READY 51/51; RELEASE_INTAKE=PENDING_RELEASE, tiếp nhận đúng commit/blob mới trong các bảng từng bài. Kết thúc đợt AUTHORING, không merge/deploy.

## Hiệu chỉnh nhanh Toán 11 — 24/11/2026 (đang thực hiện)

Owner đã duyệt sửa nhanh sau [lượt đọc 32/32](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7125565971). Giữ snapshot trước sửa (blob `cd18e6fdcfbce6ca17035b7a20744cbd42ee459b`). Chỉ sửa hai tab Knowledge trên PR draft chưa phát hành; B02–B04 xử lý theo delta phát hành riêng. Các dòng nguồn cập nhật ở bảng nguồn G11 khi đã đọc lại. Các bản chưa sửa giữ nguồn cũ, kết quả cũ gắn snapshot cũ; không mặc định chuyển independent PASS sang nội dung thay đổi.

| Bài | Commit và blob trước sửa | Commit và blob sau sửa | Delta tự kiểm |
|---|---|---|---|
| B13 | `735b44d1d0e2d95027c0b6a1af8d158f15b1b617` / `d688233ca1fc78bed537b91e898e05e1d12dec78` | `a0d18605f8a273c7c473204257676a4e02530281` / `8d662b7d8d8677eb3c8d210f8acacce2cc00824d` | Bổ sung đường trong mặt song song, chọn mặt đối diện làm đáy, chứng minh bốn đường chéo có trung điểm chung bằng ba hình bình hành; đủ điều kiện cát tuyến, đổi dữ kiện tự thử. |
| B15 | `871c5b20143254f5a282d6a89b8ac918050a5a8b` / `110d26c475df0f00dda7fa53bdc1afdfd6cb915a` | `31a8b86e7ef7baecb3e07c68964b3b876c1def65` / `5c1a81633b877074aa64a21e2cfd128de2f7db2a` | Thêm hai quy tắc thương vô cực SGK tr.109, dấu, tích hai dãy +∞; nối tình huống Achilles 2 giây, ví dụ 0,(27)=3/11; mốc sai số và tổng riêng. |
| B16 | `f8bb7b9f35d05d2674b40047a1fd73b002d6debd` / `df4d5536c079d4825222c4320e8d3e443aa88ae5` | `4ba996bd1eae5757ffc01151e3a3b4225ae8afc6` / `7d58a11f2ad82c11d277287c81f8b5c085f31cf2` | Đủ khoảng xác định tại ±∞, giới hạn x^k chẵn/lẻ, bảng dấu tích/thương, sửa câu định nghĩa và giải thích phép toán hữu hạn. |

| B18 | `9933fdbaca1c9958c3790b838c8b9d8974fa81ae` / `e4a0c64cd075b300657f8f0df93fc54b0ab01caa` | `645b82cf2d1cfcaf363b6c6119c155bcc7dd73e6` / `91397166b56f95c8118d0134f7f8cb14916a963c` | Thêm hai tính chất căn bậc n, điều kiện xác định, ví dụ căn bậc sáu; thay tự thử so sánh/tính gần đúng, ghi lãi suất dạng thập phân. |
| B25 | `4b0e5f754e62d5a1178500f0ad53fa592cca9370` / `79f444209a0c88a4538ddb495adbac3e7726452c` | `e08715c9628ee255e177b09493cffcefb2cb7699` / `c8304cae779ad3852077eecc90788d085670c59b` | Giải thích kí hiệu nhị diện qua điểm ngoài cạnh, tiết diện, chứng minh giao tuyến và chọn góc phẳng đúng; làm rõ mặt bên lăng trụ đứng. |
| B32 | `db471893cbb43bd5ab06f9755da9e65691d9bfab` / `fedb5d316838fbce9704ac5ba5d1543d60bf0685` | `66e5f405ea88320e8bdd6d245115eff3a1cc22d8` / `82cfd851c3629e67793d91355d970011d8d1134e` | Chứng minh quy tắc thương từ định nghĩa; giải thích giới hạn phần tích sai phân; tách trường hợp n=1 ở hàm hợp; làm rõ giới hạn lượng giác và log. |

| B05 | `bb5730eae8db4fbcd01e486891fd1c1a2090589a` / `8f23807a3d75fdefde567993e1dc95c6027fccd1` | `47873721c89760e2c5b9b6c14c68122d318457a9` / `6adf77092611788f301eb3e3dd0b52a4ddbd8a66` | Chỉ số dân số; phân biệt liệt kê và xác định dãy. |
| B06 | `652e68410ed85a61326273531d41b982f7238582` / `ce7c346193e5311712fd98e8714f02167af1718e` | `7104a657751fe4c11f91656ca8f05847f99cee9a` / `15832bd010a1a965be901c1ed13bc9702366644e` | Trung bình cộng đúng khi d âm; chỉ số dãy hữu hạn. |
| B07 | `c5fa6e7c33e1365089e1dadfe34462c289d0c498` / `9f76ca1b6ba598ed89724c2a1ebd36b7e45b7759` | `15e7cd43e13ecc021d840223cec5c36fa8831cc5` / `28dbd57c0c08d5887ff829c1f706cfcc25d0fa9b` | Điều kiện n≥2, dấu công bội. |
| B08 | `449ee91989631f4571ee2a2dd3ad4ed646ec974f` / `8d650b041cb7bd33dde4a7923f61cd29cbe1bfeb` | `cebdf9a1590afbadc4f80c365e2263d54ed48ce7` / `b3c9f4973bec363ddfd1cc8ea9a156c030dd5bc2` | Lời dẫn và tự thử mới, tần số 2,3,3,3,1; giữ asset. |
| B09 | `e697303f359d3cf4a2ba2ea82d4f0d43e0306554` / `8a6f4467d445a1527fa79b4f30b73495c8105772` | `0e0ade82eac40b046c3bf12d6601da231159c177` / `c8869d0413370af29b0e069036d8aab7e4b7b5f6` | Bảng tự đủ ở SGK, trung vị gốc/nội suy, biên, tự thử Q1=15,Q3=28,75,Mo≈23,33. |

| B14 | `405545b5d18b54b71f252f71291f941f5ede7b6e` / `5b829b3dd533852d7c88358c1a430d716a941d93` | `a0366b3f1eb421d397543559ccf853415b7234ae` / `2c44172b68321d0b9e9b515840ca548c90c00df0` | Phép chiếu suy biến, điều kiện giữ thứ tự, hình biểu diễn chóp. |
| B26 | `771e01b2896d400b14ecdfaff44e8f76f54d4e13` / `25d0234f560c186b89286366e73ce80ce2ce603c` | `ed3be1f4c5dd3d40c8a19cef6df2ee34cad9054e` / `cdb3d7ed0c342f239c297ad7668f086a3d48eaf3` | Xử lý chân trùng điểm; chứng minh tồn tại, duy nhất và nhỏ nhất của đoạn vuông góc chung; gọi đúng mặt chéo. |
| B27 | `47ad4a5ecca0aae1f3a8d07857ee64a159703555` / `c703c28a4f85722845ae00be10bd3ac16206127a` | `ba87d2a056f26f8dba6b4942cc22d5640b255eee` / `d1f4a6cd17321278cb8c6bc65ab397f8b15feb0b` | Lập luận đường trung bình chóp cụt/lăng trụ, không suy hệ số 1/3 chỉ từ tiết diện nhỏ dần, diễn đạt chiều cao. |

Đối chiếu 14/14 readback exact, giữ byte-identical trước Khám phá và từ Ví dụ trở đi; headings, figure, metadata comment không đổi, delimiters MathJax/HTML cân bằng. Q18 tự kiểm delta theo toán/điều kiện ở trên; không xác nhận browser PASS. Asset không đổi. RELEASE tiếp nhận đúng khóa mới, không merge/deploy bởi AUTHORING.


## Cách cập nhật

Với mỗi bài tiếp theo: cập nhật dòng bảng + bằng chứng ngắn gọn trong tài liệu này (SGK/outcome và kết quả kiểm thật, baseline/candidate source blob, source commit, PR, asset delta nếu có, kết luận Q18 và lỗi còn tồn tại nếu có). Nếu có bằng chứng reviewer/hồ sơ lịch sử, dẫn link và giữ snapshot; không nhân bản. RELEASE tiếp nhận các dòng CONTENT_READY và phản hồi vào cùng nhiệm vụ #1039. Không bắt buộc đồng thời hoàn tất cả 51 bài mới bàn giao từng bài. Core/Luyện tập, Tự kiểm tra, ngân hàng, RD1, Mastery, Firebase/Auth, Golden runtime đều ngoài scope.
