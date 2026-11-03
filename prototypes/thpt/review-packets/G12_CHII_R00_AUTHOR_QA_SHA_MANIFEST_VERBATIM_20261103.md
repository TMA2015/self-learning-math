# R00 QA/checksum manifest · G12 SGK ChII · AUTHORING only

DATE: 2026-11-03  
STANDARD: `SLM-THPT-QUALITY-ONE v1.0.0`  
STATUS: `CANDIDATE_FOR_INDEPENDENT_NOTEBOOKLM_REVIEW`  
ACADEMIC/PED: `NOT_REVIEWED` · `CONTENT_READY=NO` · `PUBLIC_DEPLOY=NO`  

## QA máy đã thực hiện (không thay phản biện độc lập)

- **SGK/SBT:** đối chiếu trực tiếp ảnh mục lục/trang học, bản PDF quét; SGK ChII in 45–74↔PDF 47–76, SBT in 38–58↔PDF 36–56.
- **Coverage:** 3 lessons, 16 RD0 outcomes; 16 examples D2, 3 first-tries trước Core, 3 original SVG; 16 same-outcome D6 routes với HELP_ID.
- **Canonical public:** **64/64 distinct IDs** (16 CORE, 32 PRACTICE, 16 WRITTEN), mỗi outcome 4 câu với item→outcome→role metadata. **16/16 END placements** chỉ tham chiếu Practice, không nhân bản item.
- **Private RD1 candidates:** 20/20 distinct private IDs, 16/16 outcome coverage + 4 câu liên-outcome; KHÔNG được đăng public.
- **Checks:** regex đối chiếu ID và role, parse 3 SVG XML (render thử PNG), kiểm bản nguồn không còn marker tự điền, đối chiếu một số phép tính hình học/tọa độ/tích vô hướng bằng SymPy. Không thể suy Academic/PED PASS từ QA này.
- **SBT:** đã kiểm trực tiếp phạm vi từng bài và bài cuối chương; reviewer còn phải so sâu câu và lời giải SBT theo từng outcome. Chưa có independent verdict / human math signoff.
- **Handoff/release:** chưa tạo PR GitHub, READY manifest/REGISTER, review receipt hay website integration; không yêu cầu RELEASE làm phần AUTHORING.

## Lock dự kiến (file digest cục bộ chưa thay thế GitHub blob SHA/receipt)

SHA-256 và `git hash-object` dưới đây dựa trên **exact byte files đóng ZIP**. `Git-object SHA` có thể dùng so khớp sau khi lưu GitHub, nhưng **chưa phải bằng chứng blob đã tồn tại trong repository**.

| Tệp review | Bytes | SHA-256 | Git-object SHA (chỉ cục bộ) |
|---|---:|---|---|
| `Temp_G12_CHII_B06_LEARNING_R00_20261103.md` | 25981 | `58848452a89858e2daeb73e275368dbeef5d87d157a42ca6f2c349ee2d8c61ee` | `039ba7e48e0d3dd25471193da6c9ecba7cae36fb` |
| `Temp_G12_CHII_B07_LEARNING_R00_20261103.md` | 17407 | `f2b4834c202088fe0e0139ddada7f307fdac96481c3c514e6672ee3d78fe2050` | `dfd67428d3379ac5e2995916372dadeee1d120fa` |
| `Temp_G12_CHII_B08_LEARNING_R00_20261103.md` | 22160 | `834199f674bebf924defe6a7707cd9a726044af437f83d8426d05827446f78f1` | `f5e1c811b6361ebcc15520adb202705fcf40e2e4` |
| `Temp_G12_CHII_S1_AUDIT_OUTCOME_MATRIX_20261103.md` | 8048 | `8bcd846654fcacc65af6935e361f359a3de2c034012d66566a5e1865db2a06c5` | `52658c002073dfb56fdd31faa101465635909784` |
| `Temp_G12_CHII_END_CANONICAL_Q01_Q18_R00_20261103.md` | 12304 | `f1711b66b4d5ff792f3fca25e5bb61e0e7a83ed9c0735ba5ba326eac1ecc37eb` | `04dc67e3ae8ff707c522dbd9b140a6e2e210e2e0` |
| `Temp_G12_CHII_RD1_PRIVATE_REVIEW_ONLY_20261103.md` | 11732 | `2b25189f74db37a8c79106efc6ebae5e8943a38707d9962eb6f64edffe239dc1` | `9c7c4fc9b4294828cb68677158ee7e2d7e1e1488` |
| `Temp_FIG-G12-CHII-B06-R00.svg` | 2246 | `391d1a9dbe7a70cbf2c941303edcdf44aaf757fba730a3d345f65d71a97afcf5` | `26e388d873521aa5b0bae945343e69357490ec16` |
| `Temp_FIG-G12-CHII-B07-R00.svg` | 2030 | `c3470b8bc38f37af1d837617eb4488241b8c93907710a2a350171296003cee72` | `979ca912e99fdadfc4e91ae0edad5db34fc13928` |
| `Temp_FIG-G12-CHII-B08-R00.svg` | 1878 | `df3edb70ad9444247c7f49a6da07a78600192ff28eb94c092b44fd95a3259cd3` | `13445da079245a556a08e7a57069d9987097a0be` |
| `Temp_G12_CHII_NOTEBOOKLM_REVIEW_PROMPT_20261103.txt` | 1456 | `f6829e55edfffa1a22a19ea9ada6b8013edccc252dc6fc8f9ad0543a3d52d64a` | `296e31295e8543d27da28dda7166fef2d0f96a99` |

## Những điều không được suy từ checkpoint này

1. Chưa có NotebookLM Academic/PED PASS, không tự cấp `CONTENT_READY` chỉ vì mã câu/định dạng đủ.
2. Bộ PRIVATE phải ở kho riêng sau review. Nếu sau này commit GitHub, chỉ được ghi metadata/hashes, không đẩy raw stem/keys/solutions/rubrics.
3. Một câu = một canonical ID; `Anchor` chỉ là role nếu cần; không copy nguồn ở các placement khác nhau.
4. Website Final Submit, AP1–AP5, R1–R5, P1/P2 là của RELEASE sau khi AUTHORING handoff V2 được duyệt.
