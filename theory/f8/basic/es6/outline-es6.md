1. Let, const
2. Template Literals
3. Multi-line String
4. Arrow Function
5. Classes
6. Default parameter values
7. Destructuring
8. Rest parameters
9. Spread
10. Enhanced object literals
    11.Tagged template literal
11. Modules
    +) Babel
    /////

1 .
+) Var , let / Const : Scope, Hosting
+) Const / Var, Let: Assignment
eg: Code Block : if else, loop, {}, ...
//
+) giống: cả 3 đều khai báo ra biến
+) khác: Spoce
// 3. Arrow Func ( => ) 4. Classes - constructor

class Courses {
constructor ( name , price) {
this.name = name;
this.price = price; }
getName() {
this.name = name; }
getPrice() {
this.price = price; }
run() {
const isSusses = false;
if(...) {
isSusses = true;
}
}
}
const phpCourses = new Courses("php", 1000);
const jsCourses = new Courses("js", 1200);
console.log(phpCourses);
console.log(jsCourses);
// 6. Default parameter values
/ 7. Enhanced object literals
7.1) Định nghĩa key: value cho obj
7.2) Định nghĩa method cho obj
7.3) Định nghĩa key cho obj dưới dạng biến
/
var name = "js";
var price = 1000;
var courses = {
// name: name,
// price: price
7.1
name,
price,
7.2
getName() {return name; }}
// 8. Destructuring ( phân rã)
8.1 Array
var array = ["js", "php", "ruby"];
var [a, b, c] = array;
console.log(a, b, c); => js, php, ruby
8.2 Obj
var Couses = {
name = "js",
price = 1000,
image: image-address
}
var { name, price, image} = courses;
var { name, ...rest} = courses;
// đổi tên không bị trùng ( dùng dấu :) => var { name: newName, price} = courses;
console.log(name, price, image);
console.log(rest);
//
9.Rest parameters khi kết hợp với destructuring
var array = ["js", "php", "ruby"];
var [a,. ... rest] = array;
console.log(a, b, c); => js
console.log(rest); => php, ruby
// 10. Spread (....)
( toán tử dải)
var array = ["js", "php", "ruby"];
var array2 = ["reactJs", "dart"];
var array3 = [...array2, ...array]
//
11.Tagged template literal
=>
function highlight( [first, ...strings], ...value) {
console.log("first:", first);
console.log("strings:", strings);
console.log( "value:", value);
///
=> return values.reduce(
(acc, curr) => [...acc, `<span> ${curr}</span>` , strings.shift() ],
[first]
);
}
var brand : "f8";
var courses: " Javascript";
const html = hightLight ` học lập trình tại ${brand} với khoá học ${courses} !`;
console.log(html);
// 12. Modules
+) Import / Export
import name from "./file.js";
// 13. Optional chaining (?.)
+) obj.val?.prop
+) obj.val?.[expr]
+) obj.arr?.[index]
+) obj.func?.(args)
//
//
CALLBACK
+) là 1 hàm
+) được truyền qua đối số
function myFunction(param) {
param("hello world)
}
function myCallBack(value) {
console.log("value: , value)
}
myFunction(myCallBack);
=> sử dụng trong các trường hợp như:
+) tạo event => đưa callback fun => hover,click => hiện hàm đó
+) hành động bất đồng bộ , chưa hoàn thành ngay xong => truyền callback => nhận kq =>
