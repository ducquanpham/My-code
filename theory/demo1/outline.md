1.String (một chuỗi gồm một hoặc nhiều ký tự có thể bao gồm các chữ cái, số hoặc ký hiệu. Các chuỗi trong JS là kiểu dữ liệu nguyên thủy và không thay đổi, có nghĩa là chúng không thay đổi.) 2.
--String--
Phương thức Thuộc tính Mô tả chức năng
length Trả về số lượng ký tự của chuỗi
toUpperCase() Chuyển toàn bộ ký tự của chuỗi về dạng chữ in hoa
toLowerCase() Chuyển toàn bộ ký tự của chuỗi về dạng chữ thường
concat() Nối các chuỗi lại với nhau
indexOf() Trả về chỉ số của chuỗi trùng khớp được tìm thấy đầu tiên
lastIndexOf() Trả về chỉ số của chuỗi trùng khớp được tìm thấy sau cùng
charAt() Trích xuất một ký tự trong chuỗi
substring() Trích xuất một chuỗi con trong chuỗi
substr() Trích xuất một chuỗi con trong chuỗi
replace() Thay thế một nội dung nào đó trong chuỗi bằng nội dung mới

-- propeti- method --

1.  selector. getAttritbute ("attribute") -> lấy ra giá trị mà attribute mong muốn
    attribute => thuộc tính như: href, id, class, src, style
2.  selector.setAttribute("attribute", value) -> xét giá trị cho attribute nào đó của selector
3.  selector.removeAttribute("attribute") => xoá attribute của selector
4.  selector.hasAttribute("Selector") -> kiểm tra selector có attribute nào đó hay không, nếu có -> true, và ngược lại

            DOM attributes

1.thêm attribute vào element
.title , .className, .href(a) => seter
2.gán attribute ngẫu nhiên
setArrtibute("name", value)

-- dom--(DOCUMENT OBJECT MODEL : là mô hình các đối tượng trong tài liệu HTML. )
2.1 document.querySector -> trả về 1 node nếu tồn tại selector đó, và ngược lại trả về null
2.1.2 DOM gồm 3 thành phần : Element, Attribute, Text
Element: ID, Class, Tag, CSS Selector, HTML Collection

                     ***

-- DOM 2--

1.  getElementById: Lấy 1 phần tử id
2.  getElementsByClassName: => trả về HTML collection
3.  getElementsByTagName
4.  querySelector
5.  querySelectorAll
6.  HTML Collection
7.  document.write

DOM style

1.  assign : gộp nhiều thuộc tính vào (css)
    Object.assign(element.style, {
    width: "100px",
    height: "200px",
    });

Browser: HTML -> DOM -> WEB API
selector: .header, p ,div, body

2.2 document.querySelectorAll("selector") → trả về một NodeList chứa danh sách các node, nếu không có thì trả về empty
nó có thể loop và sử dụng forEach
nó giống Arr là có thể loop nhưng không dùng được các phương thức như push, pop, shift
2.3 document.getElementByClassName("className") -> HTMLCollection chứa danh sách node,nếu không thì trả về empty [ ]
2.4 document.getElementByTagName("tagName");
2.5 document.getElementById("id"); -> trả về 1 node

                              -- class--

1.  classList => trả về 1 DOMTokenList, class 1 elmt
2.  selector.classList.add("abc")
    2.1
3.  selector.classList.remove("abc")
4.  selector.classList.contains("container") => kiểm tra có class hay không. có => true và ngược lại
5.  selector.classList.toggle("class");
6.  selector.className -> trả ra chuỗi các class của selector

DOM Event

1.  Attribute events
2.  Assign event using the element node
3.  Input / select
4.  key up / down
    -- text--

    1). textContent( thuộc tính của ElementNode)
    => vẫn nhìn thấy nguyên bản, không bị ảnh hưởng , trả lại về các TextNode
    const spinner = document.querySelector("#spinner");
    thay đổi textContent
    spinner.textContent = " hello world";console.log(spinner.textContent);
    2). innerText( thuộc tính của ElementNode)
    => in ra những gì mình nhìn thấy, không trả lại về các TextNode
    => 3. innerHTML -> lấy ra nội dung của selector bao gồm cả HTML
    geter => lấy ra
    seter => đặt lại -> để thay đổi nội dung

5.  innerHTML và outerHTML
    3.1 innerHTML( bên trong) : thêm đc elementNode, textNode, attributeNode vào trong 1 elm khác
    3.2 outerHTML( bên ngoài) :
    4.Node properties

    -- crud--
    thêm xoá sửa trong Js
    tạo ra element trong js :

6.  document.createElement("tag");
7.  selector.appendChild
    document.body -> thẻ body
    const body = document.body;
    body.appendChild(div);
    .
    div.classList.add("container");
    div.className = " container , wrapper";
    div.textContent =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam, ipsum necessitatibus doloremque modi.";
    div.innerHTML = <div class="content><h3 class="title><h3><div>;
8.  element.cloneNode(true)
    ex:
    const card = document.createElement("div");
    card.classList.add("card");
    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", "https:source.unsplash.comrandom");
    cardImage.setAttribute("class", "card-Image");
    card.appendChild(cardImage);
    body.appendChild(card);
9.  element.hasChildNode -> kiểm tra có phần tử con nào hay không? có => true và ngược lại

-- insert --

1. insertAdjacentText
 <body>
 <!-- beforebegin-->
 <h3>
   <!-- afterbegin-->
   <span><span>
   <!-- beforeend-->
 <h3>
 <!-- afterend-->
 h3.insertAdjacentText("position" , "text");
 position: beforebegin, afterbegin, beforeend, afterend
const h3 = document.querySelector("h3");
h3.insertAdjacentText("beforebegin", "beforebegin");

2.insertAdjacentElement("position" , node)
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);
3.insertAdjacentHTML
const template = `<ul class="menu2"><li>1<li><ul>`;
document.body.insertAdjacentHTML("beforeend", template);prasent;

--traversing--
1.parentNode, parentElement, removeChild
parentNode vs parentElement => lấy ra phần tử cha cấp gần nhất
const span = document.querySelector("span");
console.log(span.parentElement); 2. selector.parentNode or selector.parentElement.removeChile(selector);
span.parentNode.removeChild(span); or span.remove(); 3. nextElementSibling vs previousElementSibling => tìm tới element sau vàtrước nó
const nextSpan = span.nextElementSibling; or span.previousElementSibling
console.log(nextSpan); 4. childNodes: trả về 1 mảng các node bên trong bao gồm cả TextNode vs children: trả về các Node không bao gồm TextNodes;
console.log(span.childNodes); text <strong> text
console.log(span.children); 5. firstChild vs firstElementChild
console.log(span.firstChild); or span.firstElementChild 6. lastChild vs lastElementChild
console.log(span.lastChild); or span.lastElementChild

-- sizing--

1. offset
   +). offsetWidth, offsetHeight, offsetLeft, offsetParent, offsetTop
   => lấy độ dài, cao, bên trái, lấy ra phần tử cha để lấy giá trị của phần tử cha (lấy cả border)
2. client
   +). offsetWidth, offsetHieght, offsetLeft, offsetParent, offsetTop
   => lấy độ rộng, cao, bên trái, lấy ra phần tử cha để lấy giá trị của phần tử cha (trừ đi border) ( klấy border)

-- event---

const span = document.querySelector(".button span");
\*\* removeEventListener: viết dưới dạng fun và truyền vào y hệt
const button = document.querySelector(".button");function handleMouseMove(e) {console.log(e.clientX);
document.addEventListener( "mousemove", function (e) {console.log(e.clientX););
button.addEventListener("click", function () {document.removeEventlistener("mousemove", function (e) {console.log(e.clientX);}););
function handleClick() {
console.log("click button");}
button.addEventListener("click", handleClick);
event: e

9
9.1 span.addEventListener("click", function (e) {
9.2 e.stopPropagation(); ngăn chặn nổi bọt
9.3 e.stopImmediatePropagation: ngăn chặn hết all mọi hoạt động clicks
console.log("click span");
});
yes: handleClick }{ no: handleClick()
bubbling: nổi bọt: sự kiện click chay từ trong ra ngoài
9.4 event.target: chọn chính xác element mà mình click tới
9.5 currentTarget: chọn phần tử mà mình click
9.6 event.preventDefault(): không load sang trang khác.

2. mouse
   21..mousemove, mouseover, mouseenter, mouseleave;
   mouseover: chạy khi rê chuột vào phần tử và con của phần tử đó
   mouseenter: nó chạy khi rê chuột vào phần tử con của phần tử đó
   mouseleave: nó chạy khi rê chuột vào phần từ rồi rê ra ngoài
   enter >< leave
   2.2)clientX,Y và pageX,Y
   document.addEventListener("mousemove", function (event) {
   });
   clientY: lấy toạ độ theo viewport
   pageY: lấy toạ độ document, khi có scroll thì nó sẽ thay đổi
   X: chiều width
   Y: chiều height
3. load
   document.addEventListener ("DOMContentLoaded")
   window.addEventListener ("load")
4. scrooll
   4.1. Sự kiện scroll
   window.addEventListener( "scroll",debounceFn(function (e) { console.log("scroll");}, 50));
   4.2 debounce: là kỹ thuật buộc một hàm phải đợi một khoảng thời gian nhất định trước khi thực thi. Trong khoản thời gian đợi, mọi tác động sẽ đều bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra trong thời gian chúng ta định trước.
   function debounceFn(func, wait, immediate) {
   let timeout;
   return function () {
   let context = this,
   args = arguments;
   let later = function () {
   timeout = null;
   if (!immediate) func.apply(context, args);
   };
   let callNow = immediate && !timeout;
   clearTimeout(timeout);
   timeout = setTimeout(later, wait);
   if (callNow) func.apply(context, args);
   };
   }
   4.3 window.pageYOffset: khoảng cách scroll của window theo chiều dọc so với phía trên cùng
   và window.pageXOffset: khoảng cách scroll của window theo chiều ngang so với phía bên trái
   4.4 scrollTop, scrollLeft, scrollTo, scroll, scrollHeight, scrollWidth,
   scrollHeight: trả về chiều cao của element bao gồm padding, nhưng không có border
   scrollWidth: trả về chiều rộng của element bao gồm padding, nhưng không có border
   const boxed = document.querySelector(".boxed");
   boxed.addEventListener("scroll", function () {
   console.log(boxed.scrollTop);
   console.log(boxed.scrollLeft);
   });
   scroll(x, y)
   4.5 scrollWidth vs offsetWidth
   boxed.offsetWidth -> 200
   boxed.scrollWidth -> 200
   4.6 scrollIntoView(): scroll tới phạm vi mà có thể thấy nó.
5. form
   5.1 keydown: hoạt động khi nhấn xuống
   input.addEventListener("keydown", function (e) {
   console.log(e.key);
   });
   5.2)keyup: sự kiện này xảy ra khi nhấn phím ròi thả ra
   5.3) keypress: sự kiện này xảy ra khi bạn nhấn phím
   keypress không nhận các phím:mũi tên, delete, page up-dơn, home, end, ctrl, shift, alt, esc, ...
   key:down -> press -> up
   5.4 change: xảy ra khi gọi xong, nhấn enter hoặc nhấn chuột ra ngoài (1 lần)
   5.5 focus >< blur
   5.6 blur
   5.7 submit form
   validation
   regular expression
   .
   --regex--
   regular expression: biểu thức chính quy
6. - 2 cách khai báo với Regex
     const re1 = hello;
     const re2 = new RegExp("hello");
     hello world
     regex.test(value). -> true or false
     console.log(re1.test("hello world"));
7. Anchor (^ $)
-) ^ String bắt đầu với  từ nào đó
-) $ String kết thúc với từ nào đó
   +) hi.test("hi"); true
   +) ^hi.test("hi hello"); true
   +) ^hi.test("hello hi"); false
   +) hi$.test("welcome hi"); true
   +) $hi.test("hi welcome"); false
   3.ranges [ ]
   +) [a-z]: các kí tự từ a đến z in thường
   +) [A-Z]: các kí tự từ a đến z in HOA
   +) [0-9]: các số từ 0 -9
   +) [a-z0-9A-Z]: các số từ 0-9 or a-z or A-Z
   +) [a-z].test("aadfs"); true
   +) [a-z].test("AADFS"); false
   +) [a-z].test("AADFS"); false
   +) [A-Z].test("AADFS"); true
   +) [A-Z].test("aadfs"); false
   +) [0-9].test("abc7xyz"); true
   +) [0-9].test("abc"); false
   +) [a-z0-9A-Z].test("abc123ABC"); true
   +) [^a-z].test("a"); false
8. Meta characters
   4.1 \d: khớp với số, nó tương đương với [0-9]
   +) \d.test("0123"); true
   4.12 \D: nguọc lại với \d tương đương với [^0-9];
   ) \D.test("0123"); false
   4.2) \w: khớp với các kí tự và dấu gạch dưới và số, nó tương đương [a-zA-Z0-9_]
   +) \w.test("_"); true
   4.23) \W: ngược lại với \w nó sẽ tương đương với [^a-zA-Z0-9_]
   +) \W.test("\_"); false
   4.3 \s: khớp với các kí tự khoảng trắng: spaces, tab, newline
   +) \s.test(" "); true
   4.34 \S: các kí tự không phải khoảng trắng
   +) \S.test(" "); false
   4.4 \n: khớp với newline ( xuống hàng)
   4.5 \t: khớp với lại tab character;
   4.6 .: khớp với all trừ newline(\n)
   4.7 [^] : khớp với all gồm cả newline(\n)

5.Quantifiers: {n} {n.m} + ? _
-) string.match(regex) "abc".match(\m) => []
-) {n}: số lượng nhất định
-) {n,m}: số lượng trong khoảng từ n tới m
-) +: lấy 1 hoặc nhiều kí tự thoả mãn điều kiện
const str1 = "Welcome to 20221234";
console.log(str1.match(\d\d\d\d)[0]);
console.log(str1.match(\d{4})[0]);
console.log(str1.match(\d{4,6})[0]);
console.log(str1.match(\d+)[0]); lấy all
const str2 = "color or colour ?";
?: có thể có or không có kí tự nào đó
console.log(str2.match(colourg));
console.log(str2.match(colou?rg)); ? lay ca 2
console.log(str2.match(colourg)); g
node:)flag
_
g: global
i: case insensitive
m: multipe lines
\_: không có hoặc là nhiều
const str3 = "12345";
console.log(str3.match(\d\*g));

6. group ()
   +) (\d{3})?(\w+).test("123"); true
7. Escaping \ [ ] ( ) { } ? + | . ^ \* $
8. Boundaries \b \B
   \?.test("?");
   +) \b
   "my name is Quan".match(\bQuang); [Quan] đứng độc lập 1 mình
   +) \B
   "my name isQuan".match(\BQuang); [Quan] đứng liền vs 1 đơn vị khác
9. onclick >< addEvenListener
   9.1) event handler
   onclick: chấp nhận 1 event handler
   addEvenLisstener: chấp nhận nhièu event handler cùng lúc
   < once: true>: chỉ chạy 1 lần
   .

-- on lai kien thuc--

1. cách chuyển đổi dữ liệu mới
   const str = "123; -> number
   +) parseInt, parseFloat,Number, (+str) 2. closure in loop
   for ( let i = i ; i < 5; i++) {
   setTimeout ( function() {
   console.log(i);
   },1000);}
   let -> not hosting
   let -> scope cuả nó sẽ thay đổi sau mỗi lần lặp
   var -> hosting
   var -> scope của nó sau mỗi vòng lặp thì nó không thay đổi.
2. những trường hợp không nên dùng Arrow function

-- protype- constructor fun --
1.construcor fun
Declaration, new, this, method, coution
=> +this => covert Str -> Number
constructor function:
-) chữ cái đầu viết hoa
-) bắt đầu bằng " new"
eg:
let student = {
name: "quan", age= 19}
fun Student(name,age) {
=> this = {}
add peoperties to this
this.name = name;
this.age = age;
this.getName = function() { ==> method
return ` your name is ${this.name}`
}}
let student2 = new Student ("John", 40);
console.log(student2.getName)
=> new -> tạo ra 1 cái empty obj , rồi gắn 2 giá trị này vào "this" .

2. prototype ( kế thừa )
   Prototype là cơ chế mà các object trong javascript kế thừa các tính năng từ một object khác. Tất cả các object trong javascript đều có một prototype, và các object này kế thừa các thuộc tính (properties) cũng như phương thức (methods) từ prototype của mình.
   String Boolean, Number
   String.prototype, Number.prototype
   Object.prototype => lớn nhất
3. Bind
   (dùng để xác định 1 time số this của 1 fun)
   const student = { firstName: "pham",lastName: "duc quan",
   fullName: function () {console.log(`${this.firstName} ${this.lastName}`);},};
   const buton = document.querySelector.bind(".button");
   button.addEventListener("click", student.fullName.bind(student));
   ..
   const selector = document.querySelector.bind(document);
   const selectors = document.querySelectorAll.bind(document);
   const button = $(".button");
   +) tạo ra 1 fun mới từ fun cũ và
   function log(level, time, message) {console.log(`${level} ${time} ${message}`)}
   function logErrToday(message) {
   log("Error", "Today", message);}
   partial function
   logErrToday("Server OK!");
   => Bind) const logErrToday = log.bind(null, "Error", "Today");
   logErrToday("Server OK!");
   bind => tạo ra 1 hàm mới r sử dụng gắn
   call, apply => gọi ngay trực tiếp và k thể gắn như vào biến như bind
   apply => truyền vào mảng
   call :sayHello.call(person, "hello", "good morning");
   apply:sayHello.apply(person, ["hi", "good evening"]);

   -- asynchronous--

1.event-loop
function task(message) {
let Number = 1000000;
while (Number > 0) {
Number--;}console.log(message);}
console.log("start");
task("loading");
console.log("end");
main
call stack

- start ->
- task ->
- end ->
  callbacks
  console.log("start");
  setTimeout(() => {
  task("loading");
  }, 2000);
  rời khỏi callstack và chạy qua Web APIs -> CallBack queue -> Khi callstack empty -> chạy xong sau đó rời khỏi callstack
  console.log("end"); chạy xong và rời khỏi call stack
  web APIs: setTimeout, DOM Event, fetch request,

  2.PROMISE
  2.0 Promise sinh ra để xử lí bất đồng bộ, trước khi có promise thì ta sử dụng callback => bị Callback hell => khó nhìn và code rối nên => PROMISE được sinh ra để khắc phục tình trạng callback hell. Giúp ta viết code không bị xâu vào và đọc code dễ hiểu hơn
  //
  2.1) Sync / Asyns => đồng bộ / bất đồng bộ
  +) ngôn ngữ đơn luồng
  +) Aync => setTimeout , setInterval, fetch, XMLHttpRequest, Request animation frame => bất đồng bộ
  +) Callback hell
  2.2) .catch((error)) => bắt lỗi
  2.3) .finally => chạy khi mà thất bại hay thành công vẫn chạy
  Premise.all => trả về all (trả về resolve khi all resolve. 1 cái bị reject => reject )
  Promise.race => trả về cái chạy nhanh nhất. có thể trả về resolve or reject. trả về cái nào chạy nhanh nhất
  Promise.All/Race([...,...,...]).then(data)
  Promise.allSettled => trả về all (resolve và reject)
  2.4 try-catch
  2.5 Callback Hell
  2.6 Pyrmamid of doom
  //
  2.7 PROMISE ( resolve ( thành công), rejected ( thất bại))
  +) .then (fun) =>
  +) .catch (fun) => lỗi
  +) .finally (fun)
  //
  2.8 3 trạng thái của PROMISE
  +) 1 Pendding => chờ
  +) 2 Fulfilled => thành công
  +) 3 Rejected => thất bại

3. Async await
   => ( một tính năng của JS giúp chúng ta làm việc với các hàm bất đồng bộ theo cách thú vị hơn và dễ hiểu hơn. Nó được xây dựng trên Promises và tương thích với tất cả các Promise dựa trên API)
   3.1: 2 cách viết handleError
   +) try-catch
   +) return go().then.catch((err) => .log(err))

-- APIS--
1.API( URL) (Application Programming Interface)
=> Cổng giao tiếp giữa các phần mềm
JSON.parse(data)
=> const endpoint = "https:api.github.com/users/evondev";
//
2 .fetch
+) JSON sever: API Sever
+) fetch data từ endpoint => trả về 1 cái romist => có thể sử dụng "then, catch"
const promise = fetch(endpoint);
promise
.then((response) => {
return response.json();})
.then((data) => {console.log(data);
console.log(data.loginss);})
.catch((err) => {console.log(err);});

4. CORS: Cross Origin Resource Sharing
   => chia sẻ tài nguyên giữa các origin với nhau (origin =>)
   same origin: check có phải cùng đầu main hay không

   4.1)status
   4.1.1
   +) 200 - Success( Mỗi lần get trả về , hoặc trả về khi thành công 1 cái gì đó)
   +) 201 - Create ( tạo dữ liệu thành công)

   4.1.2) Hàng 3 redirect (điều hướng)
   +) 301 - Moved Permanently
   +) 307 - Temporary Redirect

   4.1.3 : Hàng 4 là lỗi
   +) 400 Bad Request =>mạng chậm
   +) 401 Unauthorized =>khi truy cập vàoAPI đó và yêu cầu đăng nhập -> k đăng nhập truy cập =>
   +) 403 Forbidden => không thể truy cập được
   +) 404 not Found => k tìm thấy
   +) 408 Request Timeout quá time lâu quá => k lấy đc data

   4.1.4 Hàng 5 server
   +) 502 Bad Gateway => server die
   +) 504 Gateway Timeout =>

   4.2) Method
   4.2.1) POST GET PUT PATCH DELETE
   +) GET => CALL API lấy dữ liệu về khi muốn truy xuất dữ liệu
   +) POST => lưu dự liệu
   +) PUT => update dữ liệu sửa all rescoure trong data
   +) PATCH => sửa 1 phần dữ liệu
   +) UT,PATCH => update dữ liệu
   +) DELETE => xoá dữ liệu

I. click
1 DOM Event / Event listener
1.1 xử lí nhiều việc khi 1 event xảy ra
1.2 lắng nghe / huỷ bỏ lắng nghe( gắn vào 1 fun để huỷ bỏ)
+) addEventListener("click" , fun(e)){}
+) removeEventListener("click" , fun(e)){}

2 JSON (JavaScript Object Notation)
=> là 1 ĐỊNH DẠNG dữ liệu( chuỗi) >< không phải là kiểu dữ liệu
2.1 JSON: Number, Boolean, Null, Array, Object, String
+) Mã khoá / Giải Mã
Encode / decode
Stringify : Từ Javascript types -> JSON
Parse: TỪ JSON -> JavaScript Types
+) '" "' => thể hiện dạng chuỗi => String
+) Stringify => chuyển thành kiểu dữ liệu String dưới dạng JSON
//
///
XX: Polyfill
