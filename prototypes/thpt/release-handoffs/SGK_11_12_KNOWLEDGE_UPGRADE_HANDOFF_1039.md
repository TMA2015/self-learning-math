# Biên bản bàn giao chung — Nâng cấp Kiến thức SGK Toán 11–12

**Nhiệm vụ duy nhất:** [#1039](https://github.com/TMA2015/self-learning-math/issues/1039) · **Checklist duy nhất:** `prototypes/thpt/SGK_11_12_AUTHORING_CHECKLIST_OWNER_RESET_20261122.md` (tham chiếu phiên bản do owner chốt trong #1039). **Chuẩn:** SLM-THPT-QUALITY-ONE hiện hành, Q18. **Cập nhật:** 24/11/2026.

**Quyết định owner 24/11/2026:** Đây là **biên bản bàn giao sống duy nhất của cả đợt**, đặt ở đường dẫn cố định này, cập nhật từng dòng khi từng bài hoàn thành; không tạo receipt/handoff/manifest/ledger riêng cho từng bài hoặc từng chương, không tạo bản learner song song. Biên nhận Q18/Delta cần thiết tích hợp trực tiếp trong chính tài liệu chung này, dùng Git history giữ phiên bản; không mở lại hồ sơ lịch sử đã nghiệm thu. Chỉ chốt CONTENT_READY khi đã thực sự tự kiểm đúng/đủ SGK, toán, điều kiện, lời giải, hình và khả năng tự học, sửa hết lỗi thực chất. NotebookLM chỉ dùng khi cần hoặc owner yêu cầu; kết quả cũ giữ theo snapshot, không lặp lại mặc định. Bàn giao ngay đúng source commit/blob và asset delta cho RELEASE; không chờ QA giao diện để hoàn tất AUTHORING. Không tự merge/deploy.

## Tiến độ và danh mục nguồn

- Phạm vi reset: 32 bài Toán 11 B02–B33 và 19 bài Toán 12 B01–B19, tổng 51. B01 lớp 11 không thuộc đợt.
- **Toán 11 B02–B33: 32/32 CONTENT_READY, đã bàn giao đủ 32 nguồn canonical cho RELEASE.** B10–B27 kế thừa review đúng snapshot; B02–B09 và B28–B33 chốt Q18 AUTHOR_SELF_VERIFIED sau tự kiểm và sửa delta thực chất. Tổng đợt: 32/51 bài đã bàn giao; 19 bài lớp 12 tiếp theo. RELEASE_INTAKE=PENDING_RELEASE; biên bản này là điểm tiếp nhận nguồn, không phải chứng nhận website đã cập nhật.
- B10–B17: bằng chứng review nằm trong PR liên quan; B18–B21: [kết luận đối chiếu](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7098583928); B22–B27: [kết luận đối chiếu và B27 delta](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7106569995). Giữ nguyên phạm vi/snapshot, không gán independent PASS cho nội dung mới.
- Toán 12 B01–B19: chưa xác nhận hoàn thành đợt reset hiện hành; không dùng PR đợt đã hủy #987 để tính hoàn thành.

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

## Cách cập nhật

Với mỗi bài tiếp theo: cập nhật dòng bảng + bằng chứng ngắn gọn trong tài liệu này (SGK/outcome và kết quả kiểm thật, baseline/candidate source blob, source commit, PR, asset delta nếu có, kết luận Q18 và lỗi còn tồn tại nếu có). Nếu có bằng chứng reviewer/hồ sơ lịch sử, dẫn link và giữ snapshot; không nhân bản. RELEASE tiếp nhận các dòng CONTENT_READY và phản hồi vào cùng nhiệm vụ #1039. Không bắt buộc đồng thời hoàn tất cả 51 bài mới bàn giao từng bài. Core/Luyện tập, Tự kiểm tra, ngân hàng, RD1, Mastery, Firebase/Auth, Golden runtime đều ngoài scope.


## RELEASE — W1 delta hậu kiểm G11 B02–B04 · 24/11/2026

Owner yêu cầu tiếp tục cập nhật và phát hành B01–B04. B01 đã nghiệm thu, ngoài reset, không có delta được bàn giao; giữ nguyên blob `0603fbb2b61374fcd49eff3c119197cff3fa77e4`. Nguồn bàn giao AUTHORING: [biên bản chung commit 120b226](https://github.com/TMA2015/self-learning-math/blob/120b22640fd2de12cdbe074a4067e92c004bcc27/prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md), blob `0f5d497250a9b97be0f7d829bc0098af9729d36f`; [finding W1](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7125565971), [closeout](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7126396677). Không nhập W2 hoặc các nguồn chưa phát hành. Baseline main `a8f2d63e52335c1c686a567334b4f26d43bac0d3`, gh-pages `21fd3a4d2e8d8746ff3bd2b8fed17cca4006db21` đã OWNER PASS hotfix accordion #1089.

**DELTA_C_ACADEMIC_MATERIAL · scoped source verification (RELEASE implementation of AUTHORING findings).** Đã đối chiếu exact source các vị trí bàn giao, tự kiểm lại phép biến đổi/điều kiện và kết quả bài tự thử thay đổi. Không nhận independent NotebookLM PASS mới; giữ verdict lịch sử đúng snapshot. Không dùng CI cấp Academic/PED PASS.

| Bài | Blob published baseline | Blob candidate | Delta đã kiểm |
|---|---|---|---|
| B02 | `d628a3af98495c5e7ade5d4fa19d7ad4107b7ff6` | `573e2d8fc84e89112c6b061b39e6a53465659472` | Góc không định hướng giữa vectơ; cos bất biến khi đổi dấu/cộng bội 2π; suy sin cộng từ cos hiệu, tan từ thương với cos a cos b và mẫu khác 0; cộng/trừ các công thức cho tích/tổng/hiệu, đúng dấu. |
| B03 | `9177a10ade8788712c6b9fbf39789822df2a417a` | `6a88cfa1fc03f8ed6f642fc448bea286dfd9f55c` | Miền đối xứng bắt buộc (x² trên [0,+∞) không chẵn/lẻ); sin(3x) chu kì nhỏ nhất 2π/3 vì nếu T nhỏ hơn thì 3T trái chu kì cơ bản sin; q(t)=A sin(πt/2) có chu kì 4 s; 4 đồ thị có mốc/đối xứng/tiệm cận và tịnh tiến; tại −π/2: sin −1, cos/cot 0, tan không xác định; π/4: sin/cos √2/2, tan/cot 1. |
| B04 | `0714c5b72389d29dbc8993c2ce9828fc98cf7a92` | `515ad705f86b2448b262026f2f2fb8d3ec2e5bdc` | sin m=±1 hai họ trùng, cos đối góc; cot 0 tại π/2, cot m≠0 dùng arctan(1/m) và cộng π nếu âm; RAD/DEG đúng, asin(0.58)=0.6187286907 rad=35.45054264°; 0.6187 và 35.45° làm tròn đúng, nghiệm tổng quát vẫn hai họ. |

Bảo toàn byte-identical phần trước Khám phá và từ Ví dụ trở đi, headings, asset references, data attributes, danh sách Đối chiếu/Kiểm lỗi và tab 4; không chỉnh Core/Luyện tập/Tự kiểm tra/RD1/Mastery/Firebase, CSS/JS/hook. B01 giữ nguyên. Candidate chờ exact-head scoped QA, build, Golden computed CSS/MathJax/accordion/light-slate/390-820-1440 và deploy verification. Không nhận đã publish. W2 vẫn HOLD.


## RELEASE — W2 G11 B05–B09 · 24/11/2026

Owner đã kiểm tra B01–B04 và cho phép W2. [#1039](https://github.com/TMA2015/self-learning-math/issues/1039#issuecomment-7127520607). W1 #1092 merged main `745e9c0843c984d23cdaa2ccba0eae9661cf1e81`, 7/7 workflow PASS. W2 staging từ đúng main này; yêu cầu xác minh production W1 trước khi merge/deploy W2. Nguồn AUTHORING hiện hành [biên bản chung](https://github.com/TMA2015/self-learning-math/blob/120b22640fd2de12cdbe074a4067e92c004bcc27/prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md), blob `0f5d497250a9b97be0f7d829bc0098af9729d36f`. Đối chiếu 5 PR exact HEAD, 5/5 learner blob baseline và candidate; 6 SVG dùng sẵn, không đổi asset. Không thay nội dung ký khóa hoặc nhận independent Academic/PED PASS.

| Bài | PR AUTHORING | Commit | Baseline blob | Exact candidate blob |
|---|---|---|---|---|
| B05 | [#1027](https://github.com/TMA2015/self-learning-math/pull/1027) | `47873721c89760e2c5b9b6c14c68122d318457a9` | `8634196e27b5bac8cb3089f433779b592809d955` | `6adf77092611788f301eb3e3dd0b52a4ddbd8a66` |
| B06 | [#1028](https://github.com/TMA2015/self-learning-math/pull/1028) | `7104a657751fe4c11f91656ca8f05847f99cee9a` | `43b285b679941e0748ad78f377ab9bbdd73ec3d3` | `15832bd010a1a965be901c1ed13bc9702366644e` |
| B07 | [#1029](https://github.com/TMA2015/self-learning-math/pull/1029) | `15e7cd43e13ecc021d840223cec5c36fa8831cc5` | `3d0886889e383cd76963e1fa3a5eef175a389080` | `28dbd57c0c08d5887ff829c1f706cfcc25d0fa9b` |
| B08 | [#1030](https://github.com/TMA2015/self-learning-math/pull/1030) | `cebdf9a1590afbadc4f80c365e2263d54ed48ce7` | `4f3d1af635dd548700ad3514aff283ebe29aa9a2` | `b3c9f4973bec363ddfd1cc8ea9a156c030dd5bc2` |
| B09 | [#1031](https://github.com/TMA2015/self-learning-math/pull/1031) | `0e0ade82eac40b046c3bf12d6601da231159c177` | `46aa17f758783330c2b396f9ed36a25ab77a4094` | `c8869d0413370af29b0e069036d8aab7e4b7b5f6` |

DELTA_A_UI adapter chỉ 5 route G11 chII B05–07/chIII B08–09; tab4 5+6+6+6+6 accordion, giữ heading inline math, ID, nội dung 3 đoạn, liên kết Học tiếp (B06–09) và footnote. Hook ngoài W2 giữ nguyên. QA scoped First Paint JS/no-JS, Golden 3+1/typography, accordion/Đối chiếu, MathJax/SVG, 390/820/1440 default/slate, source/Q15/Q16. Không đổi W1, Core, Luyện tập, Tự kiểm tra, RD1, Final Submit, Mastery, Firebase, shared runtime/theme. Chưa nhận RELEASE PASS hay PUBLISHED. Không mở W3.


## RELEASE — W3 G11 B10–B14 · 24/11/2026

Owner xác nhận B05–09 PASS và chỉ đạo tiếp tục W3. W2 #1093 merged main `46e63ae54855350503db84a068fdcc74f80b69b9`, published gh-pages `9443bf2da7fe78b09ede5aad479daf296f280c3b`, exact 5 HTML routes + search index, 29/29 tab4 titles match source, 4 headings per page, Học tiếp retained. W3 from this main only. Authoring handoff live blob `0f5d497250a9b97be0f7d829bc0098af9729d36f`; exact locked rows B10–14 #1034–1038 below verified against HEAD and baseline. Integrate five signed learner sources, six signed new SVG, five existing SVG unchanged. Preserve previous review verdicts at signed snapshot; no new independent Academic/PED verdict. Scope route-specific W3 Golden adapter, 30 native accordion items, Học tiếp and source note preserved; exact source/Q15/Q16, computed Golden CSS/3+1, SVG/MathJax/Đối chiếu, 390/820/1440 default/slate, First Paint JS/no-JS, no shared runtime or protected systems changes. W1/W2 unchanged. QA pending; publish only after exact-head gates and deployed parity. No W4.

### W3 — các dòng khóa tiếp nhận nguyên văn từ AUTHORING hiện hành

| Bài / PR | HEAD AUTHORING | Baseline blob | Candidate blob | Phạm vi nội dung | SVG mới |
|---|---|---|---|---|---|
| B10 [#1034](https://github.com/TMA2015/self-learning-math/pull/1034) | `069ab557e43aa7003cb6234b7d66c369513410c9` | `b55bf3c5122dd967b3b56fe9085eff19e58d509e` | `0ac17c3c50a00f886a07dcbde58e6644d698b999` | Khái niệm, tính chất thừa nhận, xác định mặt phẳng, chóp/tứ diện; P2 ngắt nhãn không tái hiện ở nguồn. | `G11_B10_PLANE_MEMBERSHIP_AUTHORING_20261123.svg`; `G11_B10_QUADRILATERAL_PYRAMID_AUTHORING_20261123.svg` |
| B11 [#1035](https://github.com/TMA2015/self-learning-math/pull/1035) | `9157b8f11f96f6924141c5749d86c958aefa7b89` | `7dccb87d44c1734cf7b5f3c77df209b75db6e63b` | `cc68e2f3089a5c79ee181aadc3d73e1f95ad2708` | Vị trí hai đường, phân biệt chéo/song song, định lí ba giao tuyến; P2 ngắt nhãn không tái hiện. | `G11_B11_TWO_PLANES_PARALLEL_LINES_AUTHORING_20261123.svg` |
| B12 [#1036](https://github.com/TMA2015/self-learning-math/pull/1036) | `d2baaa4bfdbf8eae370bd481359d3d5a12bc6f6b` | `6dc44484c9e12d7dcbf49c40157645ddae577390` | `cd22cea2d2b016f7c62c5734179eceef24b25f6b` | Đường–mặt song song, điều kiện đường không thuộc mặt, dựng giao tuyến, kiểm tọa độ độc lập. | `G11_B12_THREE_LINE_PLANE_POSITIONS_AUTHORING_20261123.svg` |
| B13 [#1037](https://github.com/TMA2015/self-learning-math/pull/1037) | `a0d18605f8a273c7c473204257676a4e02530281` | `619162cbe9854188c5873e03a69c3fb5afc95b43` | `8d662b7d8d8677eb3c8d210f8acacce2cc00824d` | Hai mặt song song, hai đường cắt nhau, Thalès ba mặt đôi một song song, lăng trụ/hộp; delta nhãn HTML. | `G11_B13_THALES_THREE_PLANES_AUTHORING_20261123.svg` |
| B14 [#1038](https://github.com/TMA2015/self-learning-math/pull/1038) | `a0366b3f1eb421d397543559ccf853415b7234ae` | `121b165f6bd95cdfa4c33d4a4def678d9121e81c` | `2c44172b68321d0b9e9b515840ca548c90c00df0` | Phép chiếu song song và tính chất, hình biểu diễn, điều kiện suy biến; P2 nhãn không tái hiện. | `G11_B14_PROJECTION_DEGENERACY_AUTHORING_20261123.svg` |


## RELEASE — W4 G11 B15–B17 · 24/11/2026

Owner xác nhận B01–14 PASS và chỉ đạo tiếp tục W4. W3 #1094 main `c6882ee3cfec3304841505e600187b1d7fe83d31`, published gh-pages `6384690664f82337f0ea24fb9bee44e1fb4f29a1`, 5/5 route, 30/30 recovery titles, 6/6 new SVG exact. W4 starts from this main only. AUTHORING handoff live blob `0f5d497250a9b97be0f7d829bc0098af9729d36f`; three lock rows copied verbatim below. Three signed learner files, three signed new SVG, three existing SVG unchanged. Route-scoped Golden adapter, 18 closed accordions, Học tiếp preserved; exact source/Q15/Q16, Golden computed 390/820/1440 light/slate, First Paint JS/no-JS. No changes W1–3 or protected paths. QA pending. No W5.

| Bài / PR | HEAD AUTHORING | Baseline blob | Candidate blob | Phạm vi nội dung | SVG mới |
|---|---|---|---|---|---|
| B15 [#1041](https://github.com/TMA2015/self-learning-math/pull/1041) | `31a8b86e7ef7baecb3e07c68964b3b876c1def65` | `95bbe5ecdd73b92f88176ae0245e11b1098d8e6e` | `5c1a81633b877074aa64a21e2cfd128de2f7db2a` | Giới hạn hữu hạn/vô cực, quy tắc giới hạn, CSN lùi vô hạn; kiểm tổng riêng và chu kì. | `G11_B15_GEOMETRIC_PARTIAL_SUMS_AUTHORING_20261123.svg` |
| B16 [#1042](https://github.com/TMA2015/self-learning-math/pull/1042) | `4ba996bd1eae5757ffc01151e3a3b4225ae8afc6` | `a2242eeb50ae0f02643182bf10c315c41ce05c3b` | `7d58a11f2ad82c11d277287c81f8b5c085f31cf2` | Giới hạn tại điểm/vô cực, giới hạn vô cực, một phía; liên hợp, dấu và hình bước nhảy. | `G11_B16_ONE_SIDED_JUMP_AUTHORING_20261123.svg` |
| B17 [#1043](https://github.com/TMA2015/self-learning-math/pull/1043) | `af55a08c8aefc53628ea5ec781fddacc47bf7a23` | `36a7c21f3ae2474318c1e857acbcb640680e1326` | `989f397ebb88ed7a49ba9895c949bd85a3059585` | Liên tục tại điểm/trên khoảng/tính chất; lỗ, bước nhảy, kiểm đổi dấu tồn tại nghiệm. | `G11_B17_IVT_SIGN_CHANGE_AUTHORING_20261123.svg` |


## RELEASE — W5 G11 B18–B21 · 24/11/2026

Owner xác nhận B14–17 PASS và chỉ đạo tiếp tục phát hành. W4 #1095 main `25fef0d91201601ad55c8b4ce5d9e69be6f09887`, published gh-pages `06fd1301f9e46c685f64a5e0c2106829cb059ca6`, 3/3 route, 18/18 recovery titles, 3/3 new SVG exact. W5 starts from this main only. AUTHORING handoff live blob `0f5d497250a9b97be0f7d829bc0098af9729d36f`; four lock rows copied verbatim below. Four signed learner files, two signed new SVG, four existing SVG unchanged. Route-scoped Golden adapter, 24 closed accordions, Học tiếp preserved; exact source/Q15/Q16, Golden computed 390/820/1440 light/slate, First Paint JS/no-JS. No changes W1–4 or protected paths. QA pending. No W6.

| Bài / PR | HEAD AUTHORING | Baseline blob | Candidate blob | Phạm vi nội dung | SVG mới |
|---|---|---|---|---|---|
| B18 [#1044](https://github.com/TMA2015/self-learning-math/pull/1044) | `645b82cf2d1cfcaf363b6c6119c155bcc7dd73e6` | `fd7d7a33ec276c4e03c95185c5ea49b53643b584` | `91397166b56f95c8118d0134f7f8cb14916a963c` | Lũy thừa nguyên/hữu tỉ/thực; miền, căn bậc ba x³, so sánh lũy thừa, lãi kép. | Không; dùng asset hiện có |
| B19 [#1045](https://github.com/TMA2015/self-learning-math/pull/1045) | `0f0fb9bced2e986d4bb9c0eea0d70e27bc1ce58e` | `f872e9f19e28467e1b6ea11a943e04a2edf3b266` | `ddc2ae13711cd29fbe096b303db042a37b547686` | Khái niệm/tính chất log, log thập phân/tự nhiên, đổi cơ số, điều kiện đối số, pH. | Không; dùng asset hiện có |
| B20 [#1046](https://github.com/TMA2015/self-learning-math/pull/1046) | `5b037eb1abc601a3fd05de8354e5056e40da0bf0` | `1587f399e7ea9557a9fc490768c589991f25dcb0` | `486af83a35ac295bf22bcd8e9b1ce3a428848550` | Hàm mũ/log; miền, chiều biến thiên theo cơ số, đồ thị hàm ngược. | `G11_B20_DECREASING_EXP_LOG_AUTHORING_20261123.svg` |
| B21 [#1047](https://github.com/TMA2015/self-learning-math/pull/1047) | `ed01d318f9028687b254ab96a8370df252b74503` | `b7fb59866ce1b250e446cb957d975e7c58d037bb` | `c13fea0e82a408692ba43fe0e8fa6fdbdeaa83f9` | PT/BPT mũ/log; cả hai đối số dương, đổi chiều với cơ số dưới 1, kiểm nghiệm. | `G11_B21_EXP_LOG_THRESHOLD_AUTHORING_20261123.svg` |


## RELEASE — W6 G11 B22–B27 · 24/11/2026

Owner xác nhận B18–21 PASS và chỉ đạo phát hành W6. W5 #1096 main `7c9161abdbe5a51ecc11db343cd660a70d8f2657`, published gh-pages `1bf898a5d40b0bb7fbe899f6c99709bea8298d86`. W6 starts from this main only. AUTHORING handoff live blob `0f5d497250a9b97be0f7d829bc0098af9729d36f`; six lock rows copied verbatim below. Six signed learner files, 25 signed new SVG, seven existing SVG unchanged (including reused G10 B20 distance figure). Route-scoped Golden adapter, 42 closed accordions (6+6+6+8+8+8), Học tiếp preserved; exact source/Q15/Q16, Golden computed 390/820/1440 light/slate, First Paint JS/no-JS. No changes W1–5 or protected paths. QA pending. No W7.

| Bài / PR | HEAD AUTHORING | Baseline blob | Candidate blob | Phạm vi nội dung | SVG mới |
|---|---|---|---|---|---|
| B22 [#1048](https://github.com/TMA2015/self-learning-math/pull/1048) | `fb20f73be88a240542f7c87f7e2ec3be5bfebc4b` | `d8a679897dde1d2fa25e12df56772eb54be29ff4` | `fdcee166ee96617e3889cd9c05d2b5549be0705c` | Góc hai đường thẳng, vuông góc; véc-tơ kiểm góc 60°, Kheops, hình chỉ phương. | `G11_B22_KHEOPS_ANGLE_AUTHORING_20261123.svg`; `G11_B22_SKEW_PERP_RECTANGULAR_BOX_AUTHORING_20261123.svg` |
| B23 [#1049](https://github.com/TMA2015/self-learning-math/pull/1049) | `0aeb62c59dbbf1a23b19a1fda385bb1faf6c33f7` | `ad1ce1335b2c4dcef36edff8f8ad5378b8f63cad` | `03cccc3ae3b48856589611ee4d3ffea05cdc89b4` | Đường vuông góc mặt phẳng; hai đường cắt nhau, trung trực, song song–vuông góc. | `G11_B23_PARALLEL_PLANES_NORMAL_AUTHORING_20261123.svg`; `G11_B23_PERPENDICULAR_BISECTOR_PLANE_AUTHORING_20261123.svg` |
| B24 [#1050](https://github.com/TMA2015/self-learning-math/pull/1050) | `3abc6732033ed92d003b7a818f33540d693c0605` | `0bd7550087f455264e2b5e5d3214078e063ccb1c` | `8eab4af3ecff4958feffaf2bf092a1ec01a506c4` | Chiếu vuông góc, góc đường–mặt, định lí ba đường vuông góc, trường hợp vuông góc mặt. | `G11_B24_SABC_PROJECTION_EXAMPLE_AUTHORING_20261123.svg`; `G11_B24_THREE_PERPENDICULAR_LINES_AUTHORING_20261123.svg` |
| B25 [#1052](https://github.com/TMA2015/self-learning-math/pull/1052) | `9f45224c81a8bc189188b3832eee15d30aec79d7` | `c6ba455035041fbe16ee66f346cb78477ceaaa73` | `81d59089a9169c20a920735eb87dc8008b958afe` | Góc hai mặt, dấu hiệu/tính chất vuông góc, nhị diện, lăng trụ, chóp/chóp cụt; phân loại đúng. | `G11_B25_CUBE_EQUILATERAL_DIAGONALS_AUTHORING_20261123.svg`; `G11_B25_DIHEDRAL_CHAIR_AUTHORING_20261123.svg`; `G11_B25_PERPENDICULAR_PLANES_AUTHORING_20261123.svg`; `G11_B25_REGULAR_PYRAMID_FRUSTUM_AUTHORING_20261123.svg`; `G11_B25_RHOMBUS_PYRAMID_DIHEDRAL_AUTHORING_20261123.svg`; `G11_B25_SPECIAL_PRISMS_AUTHORING_20261123.svg` |
| B26 [#1054](https://github.com/TMA2015/self-learning-math/pull/1054) | `0942d59cb695a5b42db70d26e863668055be62cf` | `417ce70fc81b8a656e803855d0594dfa9db945b2` | `3babd4c575e2dc5b9974b3abfe686ac4d5a3a5bc` | Khoảng cách điểm–đường/mặt, song song và chéo nhau; chân và đoạn vuông góc chung. | `G11_B26_PARALLEL_DISTANCES_AUTHORING_20261123.svg`; `G11_B26_PYRAMID_HEIGHT_AUTHORING_20261123.svg`; `G11_B26_RHOMBUS_PRISM_DISTANCES_AUTHORING_20261123.svg`; `G11_B26_RIGHT_TRIANGULAR_PRISM_AUTHORING_20261123.svg`; `G11_B26_SABC_COMMON_PERPENDICULAR_AUTHORING_20261123.svg`; `G11_B26_SKEW_COMMON_PERPENDICULAR_AUTHORING_20261123.svg`; `G11_B26_SLOPE_CLEARANCE_AUTHORING_20261123.svg`; `G11_B26_SQUARE_PYRAMID_SKEW_DISTANCE_AUTHORING_20261123.svg` |
| B27 [#1056](https://github.com/TMA2015/self-learning-math/pull/1056) | `ba87d2a056f26f8dba6b4942cc22d5640b255eee` | `abd417ddb6d89528eaa8da28c132a126a26738e0` | `d1f4a6cd17321278cb8c6bc65ab397f8b15feb0b` | Thể tích chóp, chóp cụt, lăng trụ/hộp, chiều cao vuông góc; delta hai câu dẫn đã kiểm. | `G11_B27_FRUSTUM_BASKET_AUTHORING_20261123.svg`; `G11_B27_FRUSTUM_SIMILARITY_AUTHORING_20261123.svg`; `G11_B27_PARALLELEPIPED_OBLIQUE_AUTHORING_20261123.svg`; `G11_B27_PRISM_INCLINED_HEIGHT_AUTHORING_20261123.svg`; `G11_B27_TETRAHEDRON_ORTHOGONAL_AUTHORING_20261123.svg` |


## RELEASE — W7 G11 B28–B33 · 24/11/2026

Owner xác nhận W6 PASS và chỉ đạo đợt tiếp theo. Base main `a80996173f65298c78db1521edca6739f7339855`, published gh-pages `56b38d51175daa903d2d5790312d4719c4832ccb`. AUTHORING live handoff `0f5d497250a9b97be0f7d829bc0098af9729d36f` at commit `120b22640fd2de12cdbe074a4067e92c004bcc27`; six exact current source locks verified. No new assets; eight reused SVG unchanged. 45 native recovery accordions (6+6+7+8+10+8), original Sai ở đâu/Vì sao sai/Cách sửa retained; W7 signed source has no Học tiếp paragraph in tab4, no invented content. Scope only Knowledge and route-specific Golden/QA. W1–W6 and assessment/runtime unchanged. QA pending; no W8.

| Bài / PR | HEAD AUTHORING | Baseline blob | Candidate blob | Phạm vi nội dung | SVG mới |
|---|---|---|---|---|---|
| B28 [#1062](https://github.com/TMA2015/self-learning-math/pull/1062) | `13d5e9e482a8cdc195395780c05d930b44db66a9` | `86018a916315d313249f958ff2c66acdb52612be` | `ede75c644c6da8305090bf1210e17873144d9367` | SGK 66–71; hợp, giao, độc lập; kiểm liệt kê kết quả, không đếm trùng, có/không hoàn lại và xung khắc khác độc lập. | Không; dùng asset hiện có |
| B29 [#1064](https://github.com/TMA2015/self-learning-math/pull/1064) | `8990fa7a269b6a62c5a81e04bdf79a8b422f5157` | `51b686118c52605d8c8ab64b2e05d3fea419c1f8` | `8466e2640ad5b8f271c59e02fd9bdaec723802b0` | SGK 72–75, đối chiếu nguồn tham chiếu từng mục như PR; cộng xung khắc và tổng quát, giao, bù; kiểm 26/40, 2/3, 49%, 31%, dữ kiện giao bất khả thi. | Không; dùng asset hiện có |
| B30 [#1065](https://github.com/TMA2015/self-learning-math/pull/1065) | `e3e3807e19cdbf0ed996a6340eaa73acabf2b767` | `7ef2e8be4bca6c64f7ab190ed5d1cde921998373` | `134423d47faeed1a00ab5f9b0ed704119de67c64` | SGK 76–78; nhân độc lập và vận dụng; kiểm 21/40, cây xác suất, bảng 5000 người, phân biệt phụ thuộc thống kê và nhân quả. | Không; dùng asset hiện có |
| B31 [#1066](https://github.com/TMA2015/self-learning-math/pull/1066) | `60628794b578c800a14309a10c28b51f41050987` | `20f6b47a4f56a1531ee695fde11953edfb9661bb` | `8f3d2b6e144a5d5bee5635b7f5058291cc89c9ac` | SGK 81–86; dẫn tới đạo hàm, tại điểm/trên khoảng, tiếp tuyến; kiểm sai phân, 9 A, 95,1 m/s, cầu 17,6 m. Delta phân biệt tọa độ có dấu và quãng đường tích lũy; tại t=0,1 vận tốc −1 m/s. | Không; dùng asset hiện có |
| B32 [#1067](https://github.com/TMA2015/self-learning-math/pull/1067) | `66e5f405ea88320e8bdd6d245115eff3a1cc22d8` | `078a5d9aca09954fd2b451508152147f6a655015` | `82cfd851c3629e67793d91355d970011d8d1134e` | SGK 87–94; đủ 5 nhóm quy tắc, điều kiện miền, 16 đối chứng sai phân; delta giải thích quy tắc thương qua wv=u và tách (x)'=1 để tránh 0^0 tại x=0; kiểm thương −3 tại x=2. | Không; dùng asset hiện có |
| B33 [#1068](https://github.com/TMA2015/self-learning-math/pull/1068) | `b7fe2b10957d574cb96cb6ade5493e25db33db41` | `920752c92ab12a97d8e034780907fd2bcaac1308` | `1102e28f47fb8946fdafca2f86194abd60637b47` | Đạo hàm cấp hai; source delta theo dòng AUTHORING nguyên văn bên dưới. | Không; dùng asset hiện có |

| B33 | `fa0aa257b5bbcfd3611b46362951098e627c2c01` / `d32215716790846bf910a20e334fdbf4253880b2` | `b7fe2b10957d574cb96cb6ade5493e25db33db41` / `1102e28f47fb8946fdafca2f86194abd60637b47` | Phân biệt hàm đạo hàm và giá trị tại điểm; giải phản ví dụ và điều kiện nhanh/chậm dần. Đầu nhánh trước sửa 5e942dea3191047a68a39899a0c77c250fa432a1 có learner blob trùng exact nguồn khóa. |


## RELEASE — W8 G12 B01–B05 · 24/11/2026

Owner W7 PASS, G12 GO. Base main `11acdb75e861442744c207537935e01ad7747a07`; published W7 `2f188910f87546a3e894a2a0b46760986c17e2c3`. Source lock from live AUTHORING `120b22640fd2de12cdbe074a4067e92c004bcc27` / `0f5d497250a9b97be0f7d829bc0098af9729d36f`. 5 signed learner files; 14 added SVG, 1 updated SVG, 5 reused SVG unchanged. 36 exact native accordion items, Học tiếp two links each and footnote preserved. Route-only Golden first paint and G12 navigation, source/Q15/Q16, computed CSS, responsive. Freeze G11 B01–33 and all outside W8. QA pending, no W9.

| PR | Nguồn canonical | Commit khóa | Blob nền main | Blob ứng viên | Asset delta nếu cùng dòng |
|---|---|---|---|---|---|
| [#1069](https://github.com/TMA2015/self-learning-math/pull/1069) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-1.md` | `a7a34538d94fa789a22ff1ab369b02131cfb3397` | `64f6a142a88e8c4dd63dff3f7d2220787fcdec5c` | `28f6b83ab28731f51667164fe5f239cb868b948c` | Thêm `docs/assets/images/thpt/G12_B01_FIG02_READ_DERIVATIVE_AUTHORING_20261124.svg`, blob `4720ec1c26e8ecc6ff5707281b9aba3465d31df5`; hình cũ `e2696224533994826104e6c505d9dab26fc0a2e2` giữ nguyên. |
| [#1070](https://github.com/TMA2015/self-learning-math/pull/1070) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-2.md` | `9cb7612bb99a0ae615e76288b366bfbec3b2499b` | `d6e517a980ec9259345285964f4c42767faa6122` | `b40ce4dad554e94a6cb88c5b5d20274f91e8c336` | `docs/assets/images/thpt/G12_B02_FIG01_GLOBAL_MIN_MAX_CLOSED_INTERVAL_R00.svg` từ `057991020c0f9349f160047cd87ae35ce03a87ef` sang `cd8c5bea9b17bb89aa0edcd40f49dd317d834c86`. |
| [#1071](https://github.com/TMA2015/self-learning-math/pull/1071) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-3.md` | `4a41d97b09bae29d44ceb8ca7f35a873131fe0c8` | `02f4b8a446e89d824b7b08c833fc306ca9db02c6` | `be100bd245a9caaa511c98f88b5d76280d9f503f` | Thêm `docs/assets/images/thpt/G12_B03_FIG02_OBLIQUE_AUTHORING_20261124.svg`, blob `62d2cf3e7604d331ea26ac7b49f863ae8793d97a`; SVG ngang/đứng giữ blob `802f01f5b8dce392e3a064a54efe33ae1aea44fc`. |
| [#1073](https://github.com/TMA2015/self-learning-math/pull/1073) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-4.md` | `d4740d45f44459acd95d3f92c6816274374c9695` | `a9a9a8f823ee85fe53014150b5cda31201867a4d` | `d3949a0120e7fd19a690a2ac6f7eddd25cc922f4` |
| [#1074](https://github.com/TMA2015/self-learning-math/pull/1074) | `docs/thpt-preview/sgk/lop-12/chuong-i/bai-5.md` | `4122185df4d4a730e8a38828cf493f0ffe960bcf` | `54c9c90323f7b1d9077270d90627864f5a468c03` | `6f9a867a541530c2c44ca03f016eb59348977306` |

Asset delta tại `docs/assets/images/thpt/`: `G12_B04_FIG03_QUADRATIC_AUTHORING_20261124.svg` (`432f122215bf6ea897f5d13b3eab7327cf14e9b9`); `G12_B04_FIG04_CUBIC_MONOTONE_AUTHORING_20261124.svg` (`a338c274f85e030033a524810639510e099989bf`); `G12_B04_FIG05_OBLIQUE_EXTREMA_AUTHORING_20261124.svg` (`9f800741b8d016e3039e6cff35721b22a6dc0a81`); `G12_B04_FIG06_OBLIQUE_MONOTONE_AUTHORING_20261124.svg` (`1f34ef45faeeaeaa38f5c1d6823ba713e7cc3b4c`); `G12_B04_FIG07_CHECK_QUADRATIC_20261124.svg` (`585b277a399a8961ea6617ec0851e2235ed06faa`); `G12_B04_FIG08_CHECK_CUBIC_20261124.svg` (`878b6f0ed35799daeef7f1db33781129277776cd`); `G12_B04_FIG09_CHECK_RATIONAL_20261124.svg` (`e846dbbc0cb8374a825179f8e4a43e6149f1efdb`); `G12_B04_FIG10_CHECK_OBLIQUE_20261124.svg` (`64ba475d59101e1dc0311f5fab8b9922162c019b`). Giữ nguyên FIG01 rational (`529b05d33fb0347dab70587c84c8ec08789c5c98`) và FIG02 cubic (`8e4cf830e5aa1cac3fe37b9b3c3d93d9b34c006b`).

Asset delta tại `docs/assets/images/thpt/`: `G12_B05_FIG02_BOX_NET_AUTHORING_20261124.svg` (`abc066d14e33a6e1fcec829aae34e47d4f0a273e`); `G12_B05_FIG03_TRAVEL_AUTHORING_20261124.svg` (`8303761922a9fa53e41b5dad2482ac9bb9b6950a`); `G12_B05_FIG04_POLLUTION_COST_AUTHORING_20261124.svg` (`fa76ba8469c7fb27e2fe3f83f8b8b3b8bf04a497`); `G12_B05_FIG05_PROFIT_AUTHORING_20261124.svg` (`340dc2bea3ce34ca1cc06c608c50c16deb19f1d4`). Giữ nguyên `G12_B05_FIG01_BOX_VOLUME_R00.svg` (`eacd5ba60f25d87c102917a55d314fb16d6f8341`).

### W8 RELEASE_UI_DEFECT — SGK-REL-008 · B05 SVG XML serialization

Browser QA run 45400844722 job 138468903114 failed on B05 image load after B01–B04 passed all 12 lesson/viewport and 24 palette suites. Root cause: `docs/assets/images/thpt/G12_B05_FIG04_POLLUTION_COST_AUTHORING_20261124.svg` contains raw `<` inside `<desc>` (`0≤x<100`), invalid XML. RELEASE technical serialization only: replace once with `0≤x&lt;100`; parsed description text, coordinates, labels, layout, mathematical content, source path and learner Markdown are unchanged. Signed AUTHORING SVG blob `fa76ba8469c7fb27e2fe3f83f8b8b3b8bf04a497` → RELEASE XML-safe blob `92d73b38bb81df8b34c3d34041ceb8e9f7e4dac1`. This is a documented technical delta to the existing asset, not a new academic snapshot. Source gate verifies reverse transformation hashes back to the signed original and parses all 20 W8 SVGs as XML. Browser gate remains mandatory, no assertion bypass. Preserve five exact learner blobs, 19 other SVGs, hook and prior published snapshots. Rerun exact-head QA; no merge before all gates PASS.

### W8 second RELEASE_UI_DEFECT — B05 Golden caption typography

Exact QA HEAD `c7df93344fe1b64fb9ba590ed6cad266e4a87a35`, source job 138478067220 PASS: reversible XML repair and 20/20 valid SVGs. Browser run 45403537470 job 138478222100: B01–B04 pass 12/12 lesson/viewports and 24/24 palette suites; B05 image load passes, then B05 @390 default fails caption tuple: 16.2px/26.73px vs reference 15.4px/23.1px; color and family already identical. Source B05 has two `thpt-r4-concept-figure` and three `thpt-r4-calculus-figure` figures. Existing hybrid concept caption rule `.81rem/1.65` overrides Golden plot `.77rem/1.5`. Route-only first-paint style for B05 normalizes the two concept captions to existing Golden `.77rem/1.5`; no change to color, figure frames, sizes, image, content, shared CSS, assessment, B01–B04, or W1–W7. Hook `462147b1936a9f16fb4a6031915be516445874f2` → `9e731c94180134ac252be4c8e5b1f949c058fb2e`. Exact existing browser caption tuple checks remain mandatory, no tolerance/skip changes. Rerun exact-head release gates.

## W9 RELEASE — G12 ChII B06–B08
W8 Owner PASS 7133792070. Published W8 main 9dfb840e8967abcd0b5e6788d435447899524bbd, gh-pages 6a8433106983eb7d0dceb04d2cbcf875da737399. AUTHORING lock commit 120b22640fd2de12cdbe074a4067e92c004bcc27 blob 0f5d497250a9b97be0f7d829bc0098af9729d36f; PR heads #1075 7dc84b13841d815051e5f721633891813a8b14aa, #1076 b06689d3cc7fef0732ad897e255c5e2d60c3139c, #1077 72c56071d36f466a68e295111f23798c641733d9.
Source rows: [[6,"8991c8a30487fdf1db65cf31a19b0ed68ef52518","e3091a022ce73d2a355aaf8dd1acc292e7bafce3",8,"docs/thpt-preview/sgk/lop-12/chuong-ii/bai-6.md"],[7,"4bfbed222d552f3ccb9c965616245015930ab1cd","c87cefbfe3dfe2bdcce4976a40aa1596f8fca31c",7,"docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md"],[8,"c85922428c85ddeb48cec5e2bd5953faa44207c8","757b85da3ebdc143be51b7816b142dbde13b11da",8,"docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md"]]
New assets: [["docs/assets/images/thpt/G12_B06_FIG02_TETRA_CENTROID_AUTHORING_20261124.svg","ec871f9e8285f1f6ad203214b975a76783c7174b"],["docs/assets/images/thpt/G12_B06_FIG03_VECTOR_ANGLE_AUTHORING_20261124.svg","a3133220a16675ca3c719deea35b9d7e6476dc85"],["docs/assets/images/thpt/G12_B07_FIG02_DISPLACEMENT_AUTHORING_20261124.svg","498a7f687a493dc3cf4b03d4423eba5025559d8b"],["docs/assets/images/thpt/G12_B08_FIG02_PYRAMID_AUTHORING_20261124.svg","0d8e4b4fd4bbdc1c896143a74307b3ea5ff25367"],["docs/assets/images/thpt/G12_B08_FIG03_ROOF_AUTHORING_20261124.svg","7a9920c100572366b38937eda4ee22d769441aa5"]]
Updated assets (old/new): [["docs/assets/images/thpt/FIG-G12-CHII-B07-R00.svg","979ca912e99fdadfc4e91ae0edad5db34fc13928","053c483242c92f11097b5d577aeb4ad5f832497a"]]
Reused assets: [["docs/assets/images/thpt/FIG-G12-CHII-B06-R00.svg","26e388d873521aa5b0bae945343e69357490ec16"],["docs/assets/images/thpt/FIG-G12-CHII-B08-R00.svg","13445da079245a556a08e7a57069d9987097a0be"]]
Preflight: eight asset blobs read back; no raw comparison or malformed ampersand found; figures all standard plot class. XML parser gate required. B08 lacks rule palette, route-only existing B06/B07 Golden rule color mapping. 23 native recovery disclosures, two Học tiếp links each, B06 previous B05 and B08 next B09. No learner content changes; frozen W1–W8, shared CSS/JS, assessment.
