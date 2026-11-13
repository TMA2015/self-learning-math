<!-- AUTHORING: R04 candidate on immutable R03 blob 9a7b56db14e65f480f793de2e3aebf1a8f1cb9d6; academic/pedagogic DELTA_C; not RELEASE source and not CONTENT_READY until new source-locked Q18 checks and V2 packaging. -->
<!-- LEARNING_PATH=TOPIC; STANDARD_ID=SLM-THPT-QUALITY-ONE; STANDARD_VERSION=3.1.0; OUTER_PAGES=Kiến thức|Luyện tập|Tự kiểm tra; SOURCE_VERSION=R04_CANDIDATE; AUTHORING_ONLY_METADATA=prototypes/thpt/content-drafts/topic01-logic-sets/Temp_TOPIC01_R04_AUTHORING_ONLY_CUSTODY_METADATA_20261113.md -->
# CĐ01 — Mệnh đề, tập hợp và tư duy logic toán học

Khi học một khái niệm toán, điều quan trọng không chỉ là nhớ ký hiệu mà là biết mình đang khẳng định điều gì, dựa vào đâu để kết luận và có bỏ sót trường hợp nào không. Chuyên đề này đưa em đi từ việc kiểm tra một câu nói đến việc mô tả các nhóm đối tượng bằng tập hợp, rồi dùng chính các tập hợp ấy để giải quyết bài toán đếm.

# Kiến thức

## Từ lời khẳng định đến chứng cứ

Một bạn nói: “Mọi thành viên câu lạc bộ Toán đều biết lập trình”. Nếu tìm được một thành viên không biết lập trình, ta có thể bác bỏ câu ấy ngay; nhưng vài bạn biết lập trình chưa đủ chứng minh lời khẳng định đúng. Hai cách kiểm chứng ấy dẫn đến những ý tưởng nền tảng của logic toán học: mệnh đề, phủ định, phản ví dụ và lượng từ.

Trước khi tiếp tục, chỉ cần nhớ: các số nguyên \(\mathbb Z\) gồm \(\ldots,-2,-1,0,1,2,\ldots\); các số thực \(\mathbb R\) là những số biểu diễn được trên trục số; \(n\) chia hết cho \(k\ne0\) nghĩa là tồn tại số nguyên \(t\) sao cho \(n=kt\). Ký hiệu \(\le\) bao gồm cả trường hợp bằng. Các kiến thức này sẽ được dùng ngay trong những ví dụ dưới đây.

Để lập luận đúng, ta phải hiểu câu nào có thể xét đúng–sai, câu nào còn phụ thuộc vào biến và cách bác bỏ một nhận định. Những ý tưởng về phủ định, kéo theo, tương đương và lượng từ sẽ lần lượt xuất hiện từ chính câu hỏi ấy.

<!-- LESSON_ID: TOP01-M01; OUTCOME_ID: TOP01-O01; source: candidate R04 -->

Khi nghe một câu nói, không phải lúc nào ta cũng có thể kết luận ngay câu đó đúng hay sai. “13 là số nguyên tố” là một khẳng định đúng vì 13 chỉ có hai ước dương là 1 và 13; “13 là số chẵn” là khẳng định sai. Cả hai đều là **mệnh đề**, bởi mỗi câu có một giá trị đúng hoặc sai xác định. Câu hỏi “13 có phải số nguyên tố không?” thì khác: nó yêu cầu trả lời, chứ chưa khẳng định điều gì.

Bây giờ xét câu \(n+1=4\) với \(n\) là số nguyên. Nếu thay \(n=3\), đẳng thức đúng; thay \(n=4\), đẳng thức sai. Ta không thể gán cho phát biểu ban đầu một giá trị đúng–sai độc lập với \(n\). Đây là **mệnh đề chứa biến**. Để kiểm chứng một phát biểu như vậy, phải biết biến thuộc miền nào và đã được gán giá trị hay lượng từ nào chưa. Chính sự phân biệt này giúp việc chứng minh sau này không bị mơ hồ.

<!-- LESSON_ID: TOP01-M02; OUTCOME_ID: TOP01-O02; source: candidate R04 -->

Khi đã phân biệt được khẳng định, ta cần biết thế nào là câu thực sự bác bỏ khẳng định ấy. Một mệnh đề có thể đúng hoặc sai; **phủ định** là phát biểu đổi giá trị đúng–sai ấy. Nếu \(P\) là “7 là số chẵn” thì \(\neg P\) là “7 không phải số chẵn”. Khi \(P\) sai, phủ định đúng, và ngược lại. Với bất đẳng thức, phải đảo đúng cả dấu bằng: phủ định của \(x\ge3\) là \(x<3\), chứ không phải \(x\le3\), bởi tại \(x=3\) hai câu sau không đối lập đúng–sai.

Điều này càng quan trọng khi câu chứa lượng từ. Xét \(P\): “Mọi số thực \(x\) đều thỏa \(x^2\ge0\)”. Để bác bỏ \(P\), ta cần **ít nhất một** số thực làm \(x^2<0\); vì không tồn tại số ấy, phủ định là sai và \(P\) đúng. Như vậy, phủ định của “mọi” không phải “mọi phần tử đều không”, mà là “tồn tại ít nhất một phần tử không”.

<!-- LESSON_ID: TOP01-M03; OUTCOME_ID: TOP01-O03; source: candidate R04 -->

Phủ định giúp nhận ra phát biểu sai; còn để suy ra kết luận mới, ta phải hiểu chiều của lập luận. Giả sử một số nguyên chia hết cho 6. Vì số ấy viết được \(n=6k=3(2k)\), nó chắc chắn cũng chia hết cho 3. Ta diễn đạt: “Nếu \(n\) chia hết cho 6 thì \(n\) chia hết cho 3”, ký hiệu \(P\Rightarrow Q\). Khi đó \(P\) là **điều kiện đủ** để có \(Q\), còn \(Q\) là **điều kiện cần** để có \(P\).

Nhưng một kết luận đúng theo chiều thuận chưa cho phép đọc ngược. Số 3 chia hết cho 3 mà không chia hết cho 6, nên câu đảo \(Q\Rightarrow P\) sai. Một phản ví dụ đủ bác bỏ một mệnh đề kéo theo nếu tiền đề đúng mà kết luận sai. Về logic hình thức, \(P\Rightarrow Q\) chỉ sai khi \(P\) đúng và \(Q\) sai; quy tắc này không có nghĩa mọi câu “nếu...thì...” là một quan hệ nguyên nhân trong đời sống.

![Bội của 6 nằm trong tập bội của 3](../../visuals/THPT_G10_B01_IMPLICATION_DIVISIBILITY_D5_R01.svg)

*Quan sát hình:* Hình giúp đọc chiều suy luận: mọi bội của 6 là bội của 3, nhưng vùng chỉ thuộc bội của 3 không cho phép suy ngược.

<!-- LESSON_ID: TOP01-M04; OUTCOME_ID: TOP01-O04; source: candidate R04 -->

Không phải suy luận nào cũng đảo được. Để được tương đương, cả hai chiều đều cần chứng minh. Ta vừa thấy một mệnh đề kéo theo đúng chưa chắc có chiều đảo đúng. Vậy khi nào hai phát biểu thực sự tương đương? Khi **cả** \(P\Rightarrow Q\) và \(Q\Rightarrow P\) đều đúng, ta viết \(P\Leftrightarrow Q\), đọc là “\(P\) khi và chỉ khi \(Q\)”. Vì thế chứng minh tương đương đòi hỏi hai chiều, hoặc một chuỗi biến đổi mà từng bước đều có thể làm ngược hợp lệ.

Chẳng hạn, với \(n\in\mathbb Z\), “\(n\) chẵn khi và chỉ khi \(n^2\) chẵn” là đúng. Chiều thuận: nếu \(n=2k\) thì \(n^2=4k^2\) chẵn. Chiều ngược: nếu \(n\) lẻ thì \(n=2k+1\), suy ra \(n^2=4k(k+1)+1\) lẻ; do đó \(n^2\) chẵn buộc \(n\) chẵn. Cả hai chiều đều có lập luận, không dựa vào vài phép thử.

<!-- LESSON_ID: TOP01-M05; OUTCOME_ID: TOP01-O05; source: candidate R04 -->

Đọc đúng một mệnh đề còn đòi hỏi biết câu ấy đang nói về một phần tử hay tất cả phần tử. Trong lớp học, câu “Mọi học sinh đều biết bơi” chỉ đúng khi **tất cả** học sinh được xét đều biết bơi. Để bác bỏ, chỉ cần tìm **một** học sinh không biết bơi; còn câu “Có học sinh biết bơi” chỉ cần một trường hợp thỏa. Hai từ “mọi” và “có” vì vậy quy định lượng bằng chứng cần có.

Trong ký hiệu toán, \(\forall x\in D,\ P(x)\) yêu cầu \(P\) đúng với từng phần tử của miền \(D\); \(\exists x\in D,\ P(x)\) chỉ cần có một phần tử thỏa. Phủ định của “với mọi” là “tồn tại một trường hợp không”, và ngược lại. Miền xét phải giữ nguyên: “có số nguyên \(n\) sao cho \(n^2=2\)” sai, nhưng thay số nguyên bằng số thực thì câu đúng nhờ \(n=\sqrt2\). Điều kiện về miền không phải chú thích có thể bỏ qua.

### Vận dụng và tự đối chiếu

<!-- First Try for TOP01-M01; noncanonical knowledge question -->
**1.** “\(2k+1\) là số lẻ”, với \(k\in\mathbb Z\), là mệnh đề hay phát biểu chứa biến? Nếu viết “Với mọi \(k\in\mathbb Z\), \(2k+1\) là số lẻ”, em có thể kết luận gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Câu đầu còn chứa biến \(k\) chưa được lượng hóa. Câu thứ hai là một mệnh đề đúng: mọi số nguyên \(k\) đều cho biểu thức \(2k+1\) có dạng số lẻ. Nếu em vẫn phân vân, thử \(k=0\) và \(k=2\), rồi phân biệt việc kiểm vài giá trị với một lời khẳng định cho **mọi** số nguyên.

</details>

<!-- First Try for TOP01-M02; noncanonical knowledge question -->
**2.** Hãy phủ định hai phát biểu “\(t\ge5\)” và “\(t<-1\)”, với \(t\in\mathbb R\).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Hai phủ định lần lượt là \(t<5\) và \(t\ge-1\). Nếu em viết \(t\le5\), hãy thử ngay \(t=5\): cả phát biểu gốc và câu mới đều đúng, nên đó không thể là phép phủ định.

</details>

<!-- First Try for TOP01-M03; noncanonical knowledge question -->
**3.** Với \(n\in\mathbb Z\), “Nếu \(n\) chia hết cho 8 thì \(n\) chia hết cho 4” đúng không? Chiều đảo có đúng không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Chiều thuận đúng vì \(n=8k=4(2k)\). Chiều đảo sai: \(n=4\) chia hết cho 4 nhưng không chia hết cho 8. Muốn chứng minh hai chiều, phải có hai lập luận riêng hoặc phép biến đổi tương đương hợp lệ.

</details>

<!-- First Try for TOP01-M04; noncanonical knowledge question -->
**4.** Với \(x\in\mathbb R\), bạn An viết: “\(x^2=9\) khi và chỉ khi \(x=3\)”. Em có đồng ý không? Nếu chỉ xét \(x\ge0\), kết luận thay đổi thế nào?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Trên \(\mathbb R\), phát biểu **sai**. Từ \(x=3\) suy ra \(x^2=9\), nhưng chiều ngược sai vì \(x=-3\) cũng có bình phương bằng 9. Nếu biết thêm \(x\ge0\), phương trình \(x^2=9\) chỉ nhận \(x=3\), nên hai chiều đều đúng. Khi kiểm tra “khi và chỉ khi”, em cần đọc cả **miền xét** và chứng minh hai hướng.

</details>

<!-- First Try for TOP01-M05; noncanonical knowledge question -->

**5.** Với mọi số nguyên \(n\), tích \(n(n+1)\) có luôn là số chẵn không? Hãy viết phủ định của phát biểu rồi chứng minh hoặc bác bỏ phủ định.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Phát biểu **đúng**: trong hai số nguyên liên tiếp \(n\) và \(n+1\) luôn có một số chẵn, nên tích chia hết cho 2. Phủ định phải là “**Tồn tại** số nguyên \(n\) sao cho \(n(n+1)\) lẻ”, và phủ định này sai. Chỉ thử vài giá trị \(n\) chưa phải chứng minh cho **mọi** số nguyên; hãy giải thích vì sao hai số liên tiếp không thể cùng lẻ.

</details>

## Từ điều kiện đến tập hợp

Ở phần trước, ta nhận ra một câu chỉ có ý nghĩa rõ ràng khi biết **đang nói về đối tượng nào** và đối tượng ấy **cần thỏa điều kiện gì**. Bây giờ thay vì xét từng đối tượng một, ta gom tất cả đối tượng thỏa cùng điều kiện vào một tập hợp. Khi đó, câu “đồng thời thỏa hai điều kiện” trở thành phép giao, “thỏa ít nhất một điều kiện” trở thành phép hợp, còn “thỏa điều kiện này nhưng không thỏa điều kiện kia” dẫn đến phép hiệu. Nhờ vậy logic và tập hợp là hai cách biểu diễn cùng một việc lựa chọn đối tượng.

<!-- LESSON_ID: TOP01-M06; OUTCOME_ID: TOP01-O06; source: candidate R04 -->

Khi nói một học sinh **thuộc** câu lạc bộ, ta đang xét một cá thể có ở trong nhóm hay không. Khi nói câu lạc bộ Toán là **một nhóm con** của câu lạc bộ học thuật, ta so hai tập hợp với nhau. Toán học phân biệt hai quan hệ ấy bằng ký hiệu \(x\in A\) cho phần tử thuộc tập \(A\), và \(A\subseteq B\) khi **mọi phần tử** của \(A\) đều thuộc \(B\).

Xét \(A=\{1,2\}\) và \(B=\{x\in\mathbb N:1\le x\le2\}\). Hai cách mô tả cho đúng cùng các phần tử nên \(A=B\); để chứng minh hai tập bằng nhau, ta có thể chứng minh mỗi tập là tập con của tập kia. Trong \(A\), số 2 là một **phần tử**, ký hiệu \(2\in A\), còn \(\{2\}\) là một **tập con**, ký hiệu \(\{2\}\subseteq A\). Số 2 không đồng nhất với tập chỉ chứa số 2. Tập rỗng \(\varnothing\) không có phần tử nhưng vẫn là tập con của mọi tập.

<!-- LESSON_ID: TOP01-M07; OUTCOME_ID: TOP01-O07; source: candidate R04 -->

Sau khi phân biệt phần tử với tập con, ta mới có thể ghép các nhóm mà không nhầm lẫn. Giả sử một học sinh có thể tham gia cả câu lạc bộ Toán và câu lạc bộ Anh. Khi hỏi ai tham gia **cả hai**, ta đang lấy **giao** hai tập hợp; khi hỏi ai tham gia **ít nhất một** trong hai, ta đang lấy **hợp**. Chữ “hoặc” trong hợp được hiểu theo nghĩa bao hàm: học sinh tham gia cả hai vẫn được tính, nhưng chỉ tính **một lần**.

Với \(A=\{1,2,3,4\}\) và \(B=\{3,4,5\}\), các phần tử chung là 3,4 nên \(A\cap B=\{3,4\}\). Gom mọi phần tử xuất hiện trong ít nhất một tập và xóa lặp, ta được \(A\cup B=\{1,2,3,4,5\}\). Không có lý do bỏ 3 và 4 khỏi hợp chỉ vì chúng cùng ở hai tập. Trên biểu đồ Ven, vùng chung nằm trong cả hình của giao lẫn hợp.

<!-- LESSON_ID: TOP01-M08; OUTCOME_ID: TOP01-O08; source: candidate R04 -->

Đôi khi bài toán không hỏi ai có mặt trong ít nhất một nhóm, mà hỏi ai chỉ ở một nhóm. Một danh sách có thể lọc những người thuộc nhóm A nhưng **không** thuộc nhóm B. Đó là phép **hiệu** \(A\setminus B\). Nếu đổi lại thành “thuộc B nhưng không thuộc A”, kết quả là \(B\setminus A\), thường khác hẳn. Cách viết định nghĩa là \(A\setminus B=\{x\in A:x\notin B\}\): ta **giữ** tập đứng trước dấu trừ và loại những phần tử cũng có trong tập đứng sau.

Với \(A=\{1,2,3,4\}\), \(B=\{3,4,5\}\), giữ A rồi bỏ phần chung 3,4 cho \(A\setminus B=\{1,2\}\); đổi chiều lại cho \(B\setminus A=\{5\}\). Như vậy hiệu không có tính giao hoán. Trên biểu đồ Ven, \(A\setminus B\) chính là miền chỉ thuộc A, còn miền giao không thuộc hiệu của hai tập theo bất cứ chiều nào.

<!-- LESSON_ID: TOP01-M09; OUTCOME_ID: TOP01-O09; source: candidate R04 -->

Những đối tượng bị loại khỏi A luôn phải được hiểu trong một phạm vi U cụ thể. Câu hỏi “Ai **không** tham gia câu lạc bộ Toán?” chưa đủ rõ nếu ta chưa biết đang hỏi trong **một lớp** hay **toàn trường**. Toán học gọi tập tất cả đối tượng đang xét là **tập vũ trụ** \(U\). Nếu \(A\subseteq U\), phần bù của \(A\) trong \(U\) là \(U\setminus A\). Vì thế thay \(U\) có thể thay kết quả phần bù, dù \(A\) giữ nguyên.

Chẳng hạn, \(U=\{1,2,3,4,5,6\}\) và \(A=\{2,4,6\}\), phần bù là \(\{1,3,5\}\). Nếu mở rộng \(U\) để thêm 0, phần bù cũng có thêm 0. Với các khoảng số thực, xác định vũ trụ cũng giúp ta quyết định đúng đầu mút nào nằm ở phần bù.

### Vận dụng và tự đối chiếu

<!-- First Try for TOP01-M06; noncanonical knowledge question -->
**1.** Với \(A=\{2,4\}\), hãy phân biệt đúng sai cho ba phát biểu: \(2\in A\), \(\{2\}\subseteq A\), \(\{2\}\in A\).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Hai phát biểu đầu đúng, phát biểu cuối sai: các phần tử của \(A\) là **số** 2 và 4, không phải **tập** \(\{2\}\). Nếu em còn lẫn, xác định đối tượng bên trái ký hiệu là một phần tử hay một tập hợp trước khi so.

</details>

<!-- First Try for TOP01-M07; noncanonical knowledge question -->
**2.** Cho \(A=\{-1,0,1,2\}\) và \(B=\{0,2,4\}\). Tìm \(A\cap B\) và \(A\cup B\).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(A\cap B=\{0,2\}\), còn \(A\cup B=\{-1,0,1,2,4\}\). Nếu em muốn đếm vùng Ven, hãy đưa 0 và 2 vào phần chung nhưng khi tính tổng mỗi phần tử chỉ xuất hiện một lần.

</details>

<!-- First Try for TOP01-M08; noncanonical knowledge question -->
**3.** \(A=\{1,3,5\}\), \(B=\{3,4,5\}\). Hãy tính hai hiệu theo hai chiều.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(A\setminus B=\{1\}\), còn \(B\setminus A=\{4\}\). Nếu em đổi nhầm kết quả, hãy đọc lại tên tập **đứng trước dấu \(\setminus\)** và xác định phần tử được giữ.

</details>

<!-- First Try for TOP01-M09; noncanonical knowledge question -->
**4.** Trong \(U=\{1,2,3,4,5,6,7,8\}\), lấy \(A=\{2,3,5,7\}\). Tìm phần bù của A.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(U\setminus A=\{1,4,6,8\}\). Nếu em chỉ viết “phần bù của A” mà không nêu U, hãy tự hỏi đang loại A khỏi **tập nào**.

</details>

## Khi điều kiện trở thành hình vẽ

Một tập số thực có thể được diễn tả bằng bất đẳng thức hoặc tô trên trục số; một tập học sinh có thể biểu diễn bằng vùng của biểu đồ Ven. Hình không thay định nghĩa: nó giúp ta kiểm tra xem một giá trị ở **trong hay ngoài** tập, và phát hiện phần nào đã được tính hai lần. Ta sẽ dùng trục số trước, rồi áp dụng tư duy ấy vào bài đếm học sinh.

<!-- LESSON_ID: TOP01-M10; OUTCOME_ID: TOP01-O10; source: candidate R04 -->

Một điều kiện như “giữa 1 và 3” cần nói rõ **có lấy** 1 hoặc 3 không. Trên trục số, điều này được thể hiện bằng ngoặc: \((a,b)\) nghĩa \(a<x<b\), còn \([a,b]\) nghĩa \(a\le x\le b\). Khoảng \((a,b]\) bỏ a nhưng nhận b. Với vô cực, luôn dùng ngoặc tròn vì \(\pm\infty\) không phải một số thực có thể lấy làm đầu mút.

Xét \(X=(-\infty,3]\) và \(Y=(1,+\infty)\). Muốn thuộc **giao**, số phải vừa lớn hơn 1 vừa không vượt 3, nên \(X\cap Y=(1,3]\). Muốn thuộc **hợp**, số chỉ cần thỏa ít nhất một điều kiện: mọi số thực đều nằm ở X hoặc Y, vậy \(X\cup Y=\mathbb R\). Thử riêng \(x=1\) và \(x=3\) giúp ta kiểm dấu ngoặc ở biên.

<!-- LESSON_ID: TOP01-M11; OUTCOME_ID: TOP01-O11; source: candidate R04 -->

Khi có số lượng của hai nhóm, phần giao cần được tính đúng một lần để đếm không trùng. Một học sinh tham gia hai câu lạc bộ sẽ được tính **hai lần** nếu ta chỉ cộng số học sinh của từng câu lạc bộ. Vì vậy với hai tập hữu hạn, ta phải trừ một lần phần đã đếm trùng: \(|A\cup B|=|A|+|B|-|A\cap B|\). Hình Ven hai nhóm chia vũ trụ thành bốn vùng: chỉ A, cả hai, chỉ B và ngoài cả hai. Ta điền vùng giao trước rồi mới tính các vùng riêng.

Giả sử lớp có 40 bạn: 23 bạn học Anh, 25 bạn học Toán, 12 bạn học cả hai. Vùng chỉ Anh có \(23-12=11\) bạn, chỉ Toán có \(25-12=13\), vùng cả hai 12. Vậy số bạn học ít nhất một môn là \(11+12+13=36\); còn \(40-36=4\) bạn không học môn nào trong hai. Kiểm lại \(11+12+13+4=40\) cho thấy không có vùng nào bị tính thiếu hoặc trùng.

![Bốn vùng trong biểu đồ Ven của lớp 40 học sinh](../../visuals/THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg)

*Quan sát hình:* Đọc lần lượt chỉ Anh 11, cả hai 12, chỉ Toán 13, không tham gia 4; tổng bốn vùng bằng 40 và vùng giao chỉ tính một lần.

### Vận dụng và tự đối chiếu

<!-- First Try for TOP01-M10; noncanonical knowledge question -->
**1.** Cho \(X=[-2,2)\), \(Y=(0,4]\). Tìm hợp và giao, giải thích việc lấy hay bỏ hai đầu 0,2.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(X\cap Y=(0,2)\), còn \(X\cup Y=[-2,4]\). Trong giao, 0 bị Y loại và 2 bị X loại; trong hợp, hai điểm ấy vẫn được nhận bởi ít nhất một tập.

</details>

<!-- First Try for TOP01-M11; noncanonical knowledge question -->

**2.** Lớp có 48 học sinh. Có 26 bạn tham gia CLB Toán, 30 bạn tham gia CLB Tiếng Anh và 40 bạn tham gia **ít nhất một** trong hai CLB. Tìm số bạn tham gia cả hai, chỉ từng CLB và không tham gia CLB nào.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Từ \(40=26+30-|A\cap B|\), suy ra **16** bạn tham gia cả hai. Chỉ Toán: \(26-16=10\); chỉ Tiếng Anh: \(30-16=14\); không tham gia: \(48-40=8\). Kiểm lại \(10+16+14+8=48\). Đây là bài **biết hợp, tìm giao**: biến đổi công thức đếm theo chiều ngược với ví dụ, không cộng thẳng 26 và 30.

</details>


<!-- AUTHORING_ONLY: source-locked figure custody and interaction SPEC_ONLY notes preserved in original R02 blob 1edc9b33f28b7c07ad91a7aac091b1aa8e048540. The learner text already places verified SVG inline. -->


# Luyện tập

**Cách học:** Tự giải từng mục tiêu trước khi mở gợi ý và lời giải trong ngân hàng câu hỏi; mỗi câu giữ nguyên một bản canonical. Các câu trắc nghiệm/tự luận cũ được tham chiếu theo ID chứ không sao chép đề/đáp án; sáu câu mới chỉ có một bản tại thư viện extension. Nếu sai, quay lại M01–M11 đúng với đường sửa lỗi. Không yêu cầu học phần Core SGK như điều kiện bắt buộc.

| Mục tiêu của CĐ01 | Câu luyện tập / tự luận canonical |
|---|---|
| TOP01-O01 — Nhận diện mệnh đề và biến | `THPT-G10-B01-C01`, `THPT-TOP01-ADD01` |
| TOP01-O02 — Phủ định | `THPT-G10-B01-C02`, `THPT-G10-B01-P05` |
| TOP01-O03 — Kéo theo, đảo, đủ–cần | `THPT-G10-B01-P03`, `THPT-G10-B01-P06`, `THPT-G10-CHI-W01` |
| TOP01-O04 — Tương đương hai chiều | `THPT-G10-B01-P04`, `THPT-TOP01-ADD02` |
| TOP01-O05 — Lượng từ ∀/∃ | `THPT-G10-B01-P01`, `THPT-G10-B01-P02` |
| TOP01-O06 — Phần tử, tập con, tập bằng nhau | `THPT-G10-B02-C01`, `THPT-G10-B02-P06` |
| TOP01-O07 — Hợp và giao | `THPT-G10-B02-C02`, `THPT-TOP01-ADD03` |
| TOP01-O08 — Hiệu hai tập | `THPT-G10-B02-P01`, `THPT-TOP01-ADD04` |
| TOP01-O09 — Phần bù trong U | `THPT-G10-B02-P02`, `THPT-TOP01-ADD05` |
| TOP01-O10 — Khoảng/đoạn trên ℝ | `THPT-G10-B02-P03`, `THPT-G10-B02-P04` |
| TOP01-O11 — Đếm tập hợp bằng Venn | `THPT-G10-B02-P05`, `THPT-G10-CHI-W02-ANCHOR`, `THPT-TOP01-ADD06` |

**Tự luận có rubric chuẩn một nguồn:** `THPT-G10-CHI-W01` (chứng minh, mệnh đề đảo và lượng từ, 7 điểm) và `THPT-G10-CHI-W02-ANCHOR` (đếm bốn miền Venn, 7 điểm). Anchor chỉ là nhãn cho Written; không chép một bản riêng. Lời giải và rubric gốc trong source immutable `95a554e31a613b8e215679fe6790738473d598df`. Không tự động ghi điểm năng lực từ học viên tự đối chiếu.

**Khi chọn cách giải**, em hãy đọc câu hỏi rồi xác định cấu trúc nằm phía sau: gặp “mọi” cần kiểm đủ mọi trường hợp hoặc tìm phản ví dụ; gặp “nếu ... thì” phải kiểm chiều suy luận; gặp “khi và chỉ khi” phải xử lý cả hai chiều; gặp “ít nhất một nhóm” cần tính hợp và không đếm hai lần phần giao; gặp tập nghiệm trên trục số phải kiểm từng đầu mút. Viết một câu giải thích **vì sao** em chọn phương pháp trước khi tính toán.

# Tự kiểm tra

**Mục đích:** Tự nhận biết phần kiến thức cần ôn sau khi học trọn CĐ01. Đây là một lượt **công khai, tự đối chiếu** `CLIENT_SELF_CHECK_NO_MASTERY`, **KHÔNG phải** bộ `TOPIC_READINESS` kín/độc lập. Một số câu đã có ở Luyện tập nên không được dùng làm bằng chứng đánh giá chính thức.

**Cách thực hiện:** Làm tất cả câu trước; chọn **Nộp bài cuối cùng / Final Submit** cho toàn lượt rồi mới được đối chiếu. Khi chưa Final Submit: **không gợi ý, không AI Tutor, không đáp án, không phản hồi đúng/sai, không hiện lời giải hay rubric**. Sau khi nộp mới hiện đối chiếu và các liên kết sửa lỗi M01–M11. WEBSITE phải thực thi khóa này bằng cơ chế thật; source Markdown không chứng minh đã an toàn trình duyệt.

| Thứ tự | Outcome kiểm tra | Placement trỏ về item công khai có sẵn | Quay lại |
|---|---|---|---|
| 1 | TOP01-O01 | `THPT-G10-B01-C01` | TOP01-M01 |
| 2 | TOP01-O02 | `THPT-G10-B01-C02` | TOP01-M02 |
| 3 | TOP01-O03 | `THPT-G10-B01-P03` | TOP01-M03 |
| 4 | TOP01-O04 | `THPT-G10-B01-P04` | TOP01-M04 |
| 5 | TOP01-O05 | `THPT-G10-B01-P01` | TOP01-M05 |
| 6 | TOP01-O06 | `THPT-G10-B02-C01` | TOP01-M06 |
| 7 | TOP01-O07 | `THPT-G10-B02-C02` | TOP01-M07 |
| 8 | TOP01-O08 | `THPT-G10-B02-P01` | TOP01-M08 |
| 9 | TOP01-O09 | `THPT-G10-B02-P02` | TOP01-M09 |
| 10 | TOP01-O10 | `THPT-G10-B02-P03` | TOP01-M10 |
| 11 | TOP01-O11 | `THPT-G10-B02-P05` | TOP01-M11 |

**Sau khi nộp:** Tự ghi 1) câu còn chưa hiểu, 2) sai ở mệnh đề hay phép tập hợp, 3) mục tiêu tương ứng, 4) một câu luyện lại **khác** theo ID còn lại trong từng dòng. Không tạo Skill Mastery từ điểm tự đối chiếu. Đề đánh giá năng lực độc lập chính thức chỉ có thể dùng ngân hàng kín chưa lộ và phải được kiểm Q16/RD1 riêng.

