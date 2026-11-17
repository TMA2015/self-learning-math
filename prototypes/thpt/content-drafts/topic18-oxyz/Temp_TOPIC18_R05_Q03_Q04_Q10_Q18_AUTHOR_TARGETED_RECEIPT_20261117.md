# CĐ18 · OXYZ R05 · Q03/Q04/Q10 + Q15/Q18 targeted AUTHORING receipt · 17/11/2026

PACKET_ID: TOP18-OXYZ-R05-GEOMETRIC_PARAMETER-20261117
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
STANDARD_BLOB: 5a80b20ce99be3179d03d56a73fa57b6f4882fd8
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
REVIEW_SCOPE: Q03_Q04_Q10_AFFECTED_DELTA_C
SOURCE_PATH: prototypes/thpt/content-drafts/topic18-oxyz/Temp_TOPIC18_OXYZ_R05_PARAMETER_CONTEXT_CANDIDATE_20261117.md
SOURCE_BLOB: af8a3529398e5f876d5c979b0d5d26df3519d6ac
BASELINE_R04_SOURCE_BLOB: 41daf40a3b639a3ef35e129099525137a05b1848
BASELINE_R04_AUTHOR_Q18_RECEIPT_BLOB: 5262fd454346801b050b5eb4f3dc407bc99d3530
AFFECTED_P0: 0
AFFECTED_P1: 0
AFFECTED_Q03_Q04_Q10_VERDICT: AUTHOR_SELF_QA_PASS
Q15_ITEM_IDS_VERSION_SOLUTION_PARITY: AUTHOR_SELF_QA_PASS
Q18_TARGETED_VERDICT: AUTHOR_SELF_QA_PASS
HISTORICAL_P2: SBT_REFERENCE_GAP_DOCUMENTED_G12_CHV_B14_PRINTED_P25
ACTIVE_V2_READY_REGISTER: HOLD
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO

## 1. Exact delta at one introductory paragraph

Both old and new sources were retrieved directly from GitHub and compared line-by-line after excluding one R05 author-only HTML metadata comment. **Exactly one original source line changed: L702**, opening Section 5, “Đường thẳng và giao điểm.” The original text incorrectly declared t=1 “giây” without a speed/time model and referred to an earlier flight that the section did not establish. The R05 learner source now states the point A=(1,1,2), nonzero direction v=(1,0,1), M(t)=A+t v, and makes t∈R a purely geometric line parameter. It explicitly says no unit of seconds can be assigned unless time and speed are given. The intersection plane P:x+y+z=6 and calculated answer are preserved.

## 2. Independently recomputed geometric correctness

- v=(1,0,1) is nonzero, so it is a valid direction vector.
- M(t)=(1+t,1,2+t) has the same t in all three coordinates.
- Substitution into P gives (1+t)+1+(2+t)=4+2t=6; hence t=1.
- M(1)=(2,1,3), and 2+1+3=6, so the point belongs to both line and plane.
- The line is not parallel to the plane: plane normal n=(1,1,1) has n·v=2≠0. Therefore the intersection is unique, not just a candidate.
- The line is geometric, not automatically a measured physical trajectory with seconds. If later adding a speed/time model, its units and allowed t range must be specified separately.

The nearby original SVG source at docs/assets/images/thpt/FIG-TOP18-B15-LINE-WHITE-R00.svg, blob d99c0dd13170111f1b72aededc843d64c3ada4d8, was fetched and its title/description correctly describe a common parameter t, without requiring seconds. Actual website rendering and full SVG visual QA are not claimed.

## 3. Q01/S1, Q15, Q16, Q18 custody

Baseline R04 author self-verification receipt provides the original G12 KNTT Tập Hai ChV B14–B17 source scope and historical S1 provenance; B15 printed pages 41–49 belong to this line-plane entry. No new SGK/SBT PDF page-by-page scan is claimed; original historical SBT B14 printed page 25 gap remains P2 and is not silently closed. The R05 correction adds no new mandatory Core or newly invented S1 exercise: it removes an unsupported physics unit while retaining the geometry.

All learner Practice and public Tự kiểm tra are **byte-identical** against R04, and all item IDs/role placements are preserved. No item content_version bump is required for a standalone narrative paragraph with no change to item stem/key/solution/rubric. The previous R04 author receipt stays valid for its own signed blob; the new R05 limited correction is separately source-locked here, not given an independent reviewer status.

Public replay remains CLIENT_SELF_CHECK_NO_MASTERY, not official TOPIC_READINESS or an active Final Submit engine; private assessment content was not touched. Before CONTENT_READY, update the one active source owner with the R05 SHA, finalize matching V2 handoff/ready/REGISTER and verify the remaining unchanged gates according to owner policy. No merge/deploy/website or Firebase change is authorized.

AUTHOR_SIGNOFF: CHATGPT_AUTHORING_TOP18_R05_ONE_LINE_MATH_PARAMETER_UNIT_Q15_SOURCE_EQUIVALENCE_20261117
VERDICT: AFFECTED_DELTA_AUTHOR_SELF_QA_PASS; ACTIVE_V2_READY_REGISTER_HOLD; CONTENT_READY_NO.

Review prompt (four sentences): Open the exact R05 source SHA and compare its Section 5 introductory line with original R04 L702, not just the file title. Verify the line-plane intersection independently and confirm the absence of an unjustified time unit. Check Practice, Selfcheck and canonical IDs remain untouched, and report any material mathematical conflict with an outcome and minimal delta. Do not equate this limited author signoff with a fresh S1 PDF scan, global CONTENT_READY or website QA.