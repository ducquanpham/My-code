+). IIFE - Immediately Invoked Function Expression
+). ClosureS
+). Hoisting
+). Strict mode
+). This keyword
+). Bind method
+). Call method
+). Apply method
+). Catching, throwing errors
+). Promise
+). Async function, await.

    //

1. IIFE
   1.1 Immediately Invoked Function Expression => 1 biểu thức tạo ra 1 hàm và được gọi ngay lâp tức
   1.2 IIFE dùng như thế nào ?
   +) ( function () {console.log ("now now)})
   1.3 IIFE là 1 làm private
   1.4 sử dụng IIFE
   1.4.1 : khi muốn 1 đoạn mã chạy ngay và không muốn biến chạy quá phạm vi global ảnh hưởng đến dự án
   1.5 tạo IIFE
   +) func , arrow func
   +) fix lỗi func (+ , -, !)
   //
   const app = (function () {
   // Private
   const cars = [];
   return {
   get(index) {
   return cars[index];},
   add(car) {
   cars.push(car);},
   edit(index, car) {
   cars[index] = car; },
   delete(index) {
   cars.splice(index, 1); }, }; })();
   //
2. Scope
   2.1: 3 loaị phạm vi:

   - Global : Toàn cầu
   - Code Block - kHối mã:[ let, const ]=> chỉ truy cập được bên trong khối mã ( if else, for, while, ...)
   - Local scope: - hàm :[ var, func ]=> sử dụng bên trong hàm khai báo
     2.2
   - Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
   - Các hàm có thế truy cập các biến được khai báo
     trong phạm vi của nó và bên ngoài nó
   - Cách thức một biến được truy cập :
     => lấy giá trị biến gần nhất
   - Khi nào một biến bị xóa khỏi bộ nhớ?
     +)
     +)
   - Biến toàn cầu?
   - Biến trong code block & trong hàm?
   - Biến trong hàm được tham chiếu bởi 1 hàm?
     => biến tạo ra ở trong hàm và tham chiếu ở hàm khác

II Closure
+) Là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó

## Ứng dụng

+) Viết code ngắn gọn hơn
Biểu diễn, ứng dụng tính Private trong 00P

## Tóm tất

## Lưuý

+) Biến được tham chiếu (refer) trong closure sẽ không được xóa khỏi bộ nhớ khi hàm cha thực thi xong
+) Các khái niệm Javascript nâng cao rất dễ gây nhầm lẫn
+) IIFE với closure
//
III: hosting

1. HOSTING với VAR
   +)
   console.log(age) => undefined
   console.log(fullName); // RederenceError: fullName
   var age = 16
   ==> hosting đưa phần khai báo lên trên đầu phạm vi
2. HOSTING với LET CONST
   +) Hoisting lên trên đầu phạm vi nhưng không khởi tạo giá trị và đưa vào "Temporal Dead Zone"
   +) thuộc phạn vi Block
   +) khi khai báo biến với "let" , " const" khi được HOISTING không được tạo giá trị và được đưa vào "Temporal Dead Zone"

   IV: Strict Mode
   cách sử dụng
   1 thêm "use strict" ; vào đầu dile .js
   2 thêm "use strict "; vào ngay sau thẻ mở <script>
   3 thêm "use strict "; vào đầu phạm vi hàm

## đặt trưng

+) không thể khai báo biến mà không sử dụng từ khoá var, let, const

## testFunc ()

•Báo lỗi khi gán lại giá trị cho thuộc tính có writable: false
•Báo lỗi khi hàm có tham số trùng tên
•Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi
code block
•Không đặt tên biến, tên hàm bằng một số từ khóa "nhạy cảm"
của ngôn ngữ

## Công dụng

1. Tránh "quên" từ khóa khai báo biến
2. Tránh trùng tên biến lẫn tới lỗi logic
3. Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global

V: Primitive Types & Reference Types ( kiểu tham trị và tham chiếu)

### 1.Value types (Primitive data types)

      -String
      Number
      Boolean
     -BigInt
      -Symbol
     -undefined
     -null
      gắn thêm , xoá thì chỉ có 1 bộ nhớ

### 2. Reference types (Non-primitive data types)

     -Object
     -Array
      Function
       luôn luôn tạo thêm 1 vùng nhớ mới được tạo ra

## Data types with functions

      -Value types
     -Reference types
     cách sửa dùng JSON.parse(JSON.stringify(obj))
     {...} => kéo 1 cấp

func sum(a,b) {}
c = 1, d = 2
sum(c, d)
+) so sánh 2 obj giống nhau => false ( do khác địa chỉ bộ nhớ)

//
//
VI: THIS
+) từ khoá this trỏ về đối tượng mà nó đang thuộc về
This Keyword
Từ khóa this trong Javascript đề cập đến đối tượng mà nó thuộc về.

## Đặc tính

1.  Trong một phương thức, this tham chiếu tới đối tượng truy cập
    phương thức (đối tượng trước dấu .)
2.  Đứng ngoài phương thức, this tham chiếu tới đối tượng global

## Lưuý

    •this trong hàm tạo là đại diện cho tối tượng sẽ được tạo
    this trong một hàm là undefined khiởstrict mode
    •Các phương thức bind (), call(), apply() có thể tham
    chiếu this tới đối tượng khác

//
//
VII Bind()
=> ràng buộc từ khoá THIS trong hàm, phương thức thành đối tượng khác tuỳ ý
+)
//
//
IX Call

## Call Method

Là phương thức trong prototype của Function constructor, phương thức
này được dùng để gọi hàm và cũng có thể bind this cho hàm.
Ví dụ
Gọi hàm với call method
Giọi hàm và bind this, lưuýtrong strict mode vẫn có this nếu được
bind
Thể hiện tính kế thừa (extends) trong OOP
•Mượn hàm (function borrowing), thêm ví dụ với arguments
//
//
X: apply()
Apply method()
=> phuongw thức này cho phép gọi 1 hàm với một this(bind) và truyền đối số cho hàm gốc dưới dạng mảng
function fn() {}
// bind
fn.bind();
// call
fn.call();
// apply
fn.apply();
// •Là các methods được thừa kế từ Function.prototype
function fn() {}
fn.bind === Function.prototype.bind; // true
fn.call === Function.prototype.call; // true
fn.apply === Function.prototype.apply; // true
==> •Là các methods được thừa kế từ Function.prototype

## So sánh

+) GIỐNG NHAU
function fn() {}
console.log(fn.bind === Function.prototype.bind); // true
console.log(fn.call === Function.prototype.call); // true
console.log(fn.apply === Function.prototype.apply); //
//
+) KHÁC NHAU
các đối số hoạt động
/\*\*
Bind method

- Tra ra hàm mái với this tham chiếu tới thisArg`
- Không thực hiện gọi hàm
- Nếu được bind kèm `argl, arg2, ...` thì các đối số này sẽ được ưu tiên hơn
  eg:
- const newFn=fn.bind(thisArg, arg1, arg2, ...) => ưu tiên hơn
- newFn (arg1, arg2, ...)
  /\*\*
  Call method

- Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
- Nhận các đối số cho hàm gốc từ argl, arg2, ...

/\*\*
fn.call(thisArg, arg1, arg2, ...)

- \*Apply method

* Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
* Nhận các đối số cho hàm gốc bằng đối số thứ2dưới dạng màng `[argl, arg2,
