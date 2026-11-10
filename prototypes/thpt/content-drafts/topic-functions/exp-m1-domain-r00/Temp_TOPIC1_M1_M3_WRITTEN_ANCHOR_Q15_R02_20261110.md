# Q15 AUTHORING R02 — Đối chiếu 4 ứng viên Written M1–M3 với hai Written/Anchor B15 đã review

**Ngày:** 10/11/2026 · **Branch:** \`authoring/topic-functions-m1-domain-depth-d5-20261110\` · **Lane:** AUTHORING. Văn bản này là hồ sơ **so trùng có chứng cứ**, không cấp mới item canonical và không thay ngân hàng gốc.

## Nguồn gốc đã xác minh trực tiếp

| Source | Bằng chứng |
|---|---|
| \`docs/thpt-preview/thu-vien/tu-luan.md\` trên \`main\` | Blob \`4da918f36d30c9b7110099e81fc88943e5b7705b\`, có đúng hai Written B15 và rubric gốc |
| \`prototypes/thpt/shared-items/thpt-g10-chvi-reviewed-public-placement-v1.cjs\` | Blob \`1634608678b54c2bdf0598e8520a4cad15d5b1ae\`, chứa ID gốc B15 |
| R19 provenance được lưu ở nhánh #782 | Blob \`89851c0ae78ab53b4d89d50391579806bc4f0dd6\` |
| R18 public canonical source | Blob \`2340ea4975b37a457363eea59dd617070934983c\`, giữ nguyên |
| Source G10 Topic R01 | Blob \`57eaf0141a5db9bfba91f0e6c863fc7dcc638068\`, sáu câu công khai gốc khác với hai Written dưới đây |

**Hai item Written gốc không được tạo lại:**
- \`HPT-G10-CHVI-WRI-15-01\`: (a) tập xác định/tập giá trị của **bảng bốn đầu vào**; (b) điểm thuộc đồ thị; (c) giải thích cùng đầu ra không vi phạm tính hàm. **Rubric 5 điểm.** Được REUSE với placement ở Topic M1/M2, không đặt ID mới.
- \`HPT-G10-CHVI-WRI-15-02\`: mô hình **cước dịch vụ xe từng đoạn**: lập công thức, tính cước ở hai mốc, giải bài toán ngân sách; **rubric 6 điểm**, \`ANCHOR\` chỉ là nhãn. Được REUSE với placement ở Topic M2, không nhân bản đề/đáp án.

## So sánh 4 Written candidates \`DELTA_C\`

| DRAFT ID | So với nguồn gốc | Đóng góp kiến thức cụ thể | Quyết định AUTHORING |
|---|---|---|---|
| \`DRAFT-T1-M1-WR01\` | Không giống hai bài gốc: không chỉ lập D từ bảng | Phản biện nhầm \(\sqrt{x-1}\) và \(1/\sqrt{x-1}\); chứng minh phải loại \(x=1\), rubric giải thích lí do | **RETAIN_DISTINCT_CANDIDATE**, review toán + sư phạm trước ID chính thức |
| \`DRAFT-T1-M1-WR02\` (sửa 10/11) | Bản cũ yêu cầu D/T của bảng miền rời rạc, **gần** WRI-15-01 nên đã bỏ | Bản mới giải thích **rút gọn phân thức có căn không thể phục hồi điểm bị loại**; chứng minh đồ thị khuyết điểm \((1,\sqrt2)\) và **mất đúng một giá trị** trong tập giá trị | **RETAIN_DISTINCT_CANDIDATE**, tích hợp O02 (miền) + O03 (đồ thị), cần review độ phù hợp SGK và không chép APP02 |
| \`DRAFT-T1-M2-WR01\` | Bài WRI-15-01 cho bảng xác định giá trị, không yêu cầu nhận ra điểm chưa đo | Phân biệt **số liệu thực đo** với **nội suy có giả định**; dự báo vận tốc phút thứ 5 cần giải thích giới hạn | **RETAIN_DISTINCT_CANDIDATE**, review sự phù hợp outcome O03 |
| \`DRAFT-T1-M3-WR02\` | Hai Written B15 không chứa biến đổi \(|f(x)|/f(|x|)\) | Giải thích hình phản chiếu, so giá trị/đếm nghiệm, chỉ ra **khác đầu vào và đầu ra** | **ENRICHMENT_REVIEW_HOLD**, reviewer quyết định có phù hợp chặng M3 hay nên chuyển sang mục mở rộng |

**Giới hạn kiểm chứng Q15:** 4 ứng viên trên được đối chiếu **trực tiếp với hai Written B15** và các câu công khai G10/Topic R01 đã truy xuất, không có nghĩa đã so hết Written/Anchor của toàn bộ THPT và ngân hàng nội dung phiên bản mới nhất. Một thay số khác cũng không tự làm thành câu mới. Bản mới M1 WR02 kiểm sâu hơn APP02: APP02 mới xét miền khi rút gọn phân thức hữu tỉ, trong khi WR02 buộc chứng minh điểm khuyết và sự thay đổi **tập giá trị**; reviewer vẫn có quyền yêu cầu chỉ gắn role/placement thay vì mint item.

## Q15 + Q16 áp dụng

1. **Mọi câu gốc REUSE** giữ nguyên \`item_id\`, stem/answer/solution/rubric và \`content_version\` thực của nguồn; không sao chép lại ở bank Topic. \`ANCHOR\` chỉ là nhãn, không có ID khác.
2. **DRAFT** chưa có \`item_id\` canonical hay \`content_version\`; chỉ duy trì mã theo dõi R00 trong hồ sơ. Sau review nếu câu thật sự mới mới được đăng ký **một** nguồn canonical.
3. Hai Written gốc và 4 ứng viên trên đều là **PUBLIC SELF-CHECK**; người học có thể tự mở "Đối chiếu". **Không được tái sử dụng** những câu đã lộ này cho \`TOPIC_READINESS\` chính thức và không ghi Skill Mastery từ tự luận tự đối chiếu.
4. Bảo vệ \`PRIVATE_RD1\`: không đưa đề, đáp án, rubric hoặc chi tiết đánh giá kín lên Git công khai.

**STATE:** \`G10_WRITTEN_SOURCE_2_OF_2_VERIFIED\`; \`G10_WRITTEN_DUPLICATION_CORRECTED\`; \`4_NEW_WRITTEN_CANDIDATES_RETAINED_UNREVIEWED\`; \`Q15_FULL_BANK_NOT_CLOSED\`; \`NO_CONTENT_READY\`.
