# STANDARD_CHANGE_REQUEST — hợp nhất cách diễn giải và trình bày trong MỘT chuẩn Q01–Q18

**STATUS:** `PROPOSED_NOT_NORMATIVE` · **Source of authority:** current `SLM-THPT-QUALITY-ONE v1.1.0` at `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md` (blob `070353956727ba05b28e527d7d4f1bb75d03c237`). **This file is NOT a separate standard.** It is the owner-facing change request and candidate amendment text for the **same original standard file**.

**Governance guard:** official `scripts/test-thpt-unified-content-standard.cjs` currently only accepts versions `1.0.0` / `1.1.0` with official owner approval receipt; simply labelling an unapproved branch `1.2.0-rc1` fails `VERSION_NOT_LOCKED`. Preserve the guard and the original normative byte SHA. After measured pilot evidence, owner approves exact amendment and governance contract update, then submit separate guarded amendment PR to original canonical path. Until then this note is a research proposal only.

**Decision gate:** `OWNER_APPROVAL_OF_EXACT_NORMATIVE_DIFF=PENDING`; `NO_NEW_QUALITY_STANDARD`; `NO_MAIN_STANDARD_CHANGE`; preserve historical Academic/PED PASS and published snapshots.

---

## Đề xuất sửa chung Q01–Q18 [STANDARD_CHANGE_REQUEST — PROPOSED, NOT EFFECTIVE] Áp dụng thống nhất khả năng tự học theo Q03/Q07/Q09–Q14 và AP1–AP5

> **DRAFT ONLY** · Bằng chứng/đề xuất từ [Issue #742](https://github.com/TMA2015/self-learning-math/issues/742), ảnh nghiệm thu G12 B01, [Issue #655](https://github.com/TMA2015/self-learning-math/issues/655) “gọn nhưng không nén”, [Issue #691](https://github.com/TMA2015/self-learning-math/issues/691) “dạy từ bản chất”, nghiên cứu thẩm định ngoài SGK. **Không bổ sung Q19, không đặt thêm tiêu chuẩn UX/PED, không thay hiệu lực v1.1.0 trên main khi chưa owner duyệt và governance QA PASS.** Cụm hướng dẫn này diễn giải bằng chứng triển khai các Q sẵn có — không tự buộc rà soát hồi tố tất cả snapshot PASS.

### VIII.1 Một hành trình hiểu bài có thể kiểm chứng

Đơn vị kiểm **vẫn là bài/outcome** (không kiểm bằng số đoạn, số thẻ, số công thức). Khi áp dụng Q09–Q11/Q03, kiểm ở **bản trình bày học sinh nhìn thấy**:

- **Q09 / PED1 — Cầu nối từ trải nghiệm đến vấn đề:** ở phần mở, người học phải nhận biết tình huống cần giải và câu hỏi kiến thức giúp trả lời **trước** khi phải tự giải mã chuỗi ký hiệu mới. Có thể dùng một tình huống toán học/thực tế hoặc quan sát hình phù hợp, **không bắt buộc kể chuyện, không khẳng định mọi bài đều cần ví dụ đời thường**. Nếu dùng phép tương tự, chú thích rõ giới hạn khi có thể gây hiểu sai (như vị trí có dấu ≠ tổng quãng đường; vận tốc có hướng ≠ tốc độ).
- **Q10 / PED2 — Tiền đề đúng lúc:** thuật ngữ và ký hiệu chưa chắc học được giải thích sát nơi sử dụng hoặc có nhắc lại ngắn; liên kết bài lớp trước chỉ **hỗ trợ**, không trở thành điều kiện bắt buộc để hiểu bài hiện tại.
- **Q11 / PED3 — Nhịp hình thành bản chất:** học sinh nhận ra *điều gì thay đổi, quan hệ nào dẫn đến khái niệm, khái niệm giải quyết việc gì và giới hạn đến đâu* trước quy tắc tính. Không chuyển thẳng sang áp dụng công thức chỉ vì đã có một đoạn nhãn “Hiểu bản chất”.
- **Q03 / D1 — Chính xác không bị đánh đổi:** câu dẫn thân thiện vẫn giữ đầy đủ giả thiết, miền xác định, chiều suy luận, điều kiện đủ/cần, phản ví dụ và ngữ cảnh S1. Ngôn ngữ hội thoại **không phải** lý do hạ độ sâu hoặc thay đổi phát biểu toán.

### VIII.2 Cách người học nhìn và theo dõi một mạch suy luận

Dùng **các cổng AP1–AP5 đang có** để kiểm phần thể hiện của Q03, Q07, Q12–Q14:

- **AP1 — “Gọn nhưng không nén”:** một nhóm thị giác chứa một ý toán học tương đối trọn vẹn (quan sát, kết luận, điều kiện và ví dụ liên quan); khi chuyển vấn đề phải tách rõ. Không có quota số dòng, số card hay áp một layout cho mọi bài.
- **AP2 — Ký hiệu có trọng tâm:** công thức/định lý chính, chuỗi suy luận có cấp bậc thị giác và MathJax/TeX đúng; mệnh đề, điều kiện, dấu đạo hàm và miền xác định không chìm trong một dòng văn xuôi hoặc mất nghĩa khi đổi font/thiết bị.
- **AP3 + Q07/Q12/PED4 — Hình để suy luận:** hướng dẫn đọc trục, dấu, đơn vị, các điểm/quan hệ và giới hạn hình đặt **gần** hình; cho thấy *nhìn gì → nhận ra gì → suy luận gì*. Mã FIG_ID, tên file, hash/PR/QA vẫn được giữ trong canonical/audit nhưng không ép học sinh đọc metadata kỹ thuật như lời giảng.
- **AP4 + Q04/Q13/PED5 — Lý do trước thao tác:** trong ví dụ, học sinh phân biệt được *bài yêu cầu gì → tại sao phương pháp phù hợp → dùng điều kiện nào → kết luận/kiểm lại ra sao*. Nhấn các lỗi nhầm dấu/miền và điều kiện phản ví dụ ngay cạnh khái niệm liên quan.
- **AP4 + Q14/PED6 — Điểm dừng tự suy nghĩ:** “Tự thử” phải dễ nhận ra, đủ nhẹ để học sinh có thể tự làm trước Core, được tự mở đối chiếu khi có thiết kế thích hợp, có đường D6 chữa lỗ hổng; **không tiết lộ đáp án/hint/AI của bài đánh giá được bảo vệ trước Final Submit**, không ghi Mastery từ thực hành hoặc demo.
- **AP5 — Đọc được trên thiết bị thật:** kiểm cả desktop/iPhone/iPad, hướng chữ và MathJax/SVG, reflow, kích cỡ hiển thị và điều hướng; tránh khối lời dài hoặc metadata gây nhiễu. Độ dài được quyết định bằng nội dung cần dạy, **không ép rút số từ**.
- **Q17 — Tự học không phụ thuộc AI Tutor:** ở cả hành trình SGK/Chuyên đề, người học đọc source đã phát hành cũng có đường hoàn chỉnh đến Core/Practice/Written/D6/kiểm tra theo scope, không buộc hỏi AI để hiểu ý bắt buộc.

### VIII.3 Chứng cứ thực nghiệm và quy trình không phát sinh chuẩn thứ hai

1. Khi thẩm định một bố cục mới, ghi rõ `LESSON_ID`, `OUTCOME_ID` có thật (không tự gán), source Git blob + receipt SHA, màn hình/đoạn, điều khoản `Qxx` và cổng `APx` bị ảnh hưởng. Tách **quan sát đã thấy** khỏi **giả thuyết về khó học**.
2. Có thể dùng một bài mẫu để so sánh A/B *cùng nội dung nguyên văn* và đo năng lực diễn đạt/áp dụng với bài tình huống chưa xem; ghi cỡ mẫu, điểm chưa kiểm, số liệu thực và giới hạn. **“Dễ đọc/dễ thích” không tự thành `PED_PASS` hay bằng chứng hiểu bài.**
3. `DELTA_A_UI`: tái cấu trúc bố cục/khối hình/nhãn hiển thị **không đổi ngữ nghĩa**, QA AP/R và source parity. `DELTA_B`: đổi nguồn tương đương có đối chiếu. **Viết lại lời dẫn có ý nghĩa sư phạm, thêm phép tương tự hoặc sửa lập luận** → `DELTA_C`, AUTHORING/NotebookLM chỉ review phạm vi chịu ảnh hưởng; `DELTA_D` khi lỗi đáng kể. Không sửa canonical source đã PASS qua “tầng hiển thị” nếu thực chất thay ý học.
4. Nếu RELEASE phát hiện vấn đề không thể giải bằng trình bày, gửi `AUTHORING_DEFECT: Qxx + LESSON_ID/OUTCOME_ID + bằng chứng + minimal delta`; không sửa thay nhánh tác giả.
5. Giữ đúng **hai hành trình độc lập**, Q15 một thư viện item, Q16 Final Submit/RD1 bảo mật, khóa tiến độ/Firebase/Gemini, Golden THCS/THPT; chỉ merge/deploy khi owner duyệt cổng R5. Snapshot học thuật đã nghiệm thu không bị mở lại toàn chương chỉ vì nghiên cứu UX.

**Ví dụ kiểm chứng, không phải điều kiện tốt nghiệp mới:** pilot B01 Toán 12 tại `prototypes/thpt/ux-ped/G12_B01_RESEARCH_AUDIT_20261104.md` và bản A/B cô lập `G12_B01_PRESENTATION_AB_20261104.html`. Các nguyên tắc dựa trên nghiên cứu cognitive load / worked examples (NSW CESE), CAST UDL hỗ trợ tiền đề và transfer, WCAG 2.2 reflow/spacing; chỉ dùng làm **tham khảo thiết kế**, SGK KNTT vẫn quyết định nội dung Core.

**Quản trị thay đổi:** đây là `STANDARD_CHANGE_REQUEST` do owner nêu ngày 04/11/2026. Chỉ sau owner duyệt **chính xác diff này hoặc bản sửa** + governance CI exact-head PASS + merge có quyền thì `VERSION 1.2.0` mới có hiệu lực. Nếu nội dung chỉ là diễn giải cách làm không tạo nghĩa vụ mới, owner có thể quyết định giữ nguyên v1.1.0 và chuyển thành ghi chú triển khai không đánh số phiên bản. Quyết định/handoff này thuộc **một chuẩn duy nhất**.

