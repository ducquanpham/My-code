// regular expression:  biểu thức chính quy
// 1. - 2 cách khai báo với Regex
const re1 = /hello/;
const re2 = new RegExp("hello");
// hello world
// regex.test(value). -> true or false
// console.log(re1.test("hello world"));
// 2. Anchor ^ $
// ^ String bắt đầu với  từ nào đó
// $ String kết thúc với từ nào đó
/hi/.test("hi"); //true
/^hi/.test("hi hello"); // true
/^hi/.test("hello hi"); // false
/hi$/.test("welcome hi"); // true
/$hi/.test("hi welcome"); // false
// 3.ranges  [ ]
//  [a-z]:  các kí tự từ a  đến z in thường
//  [A-Z]:  các kí tự từ a  đến z in HOA
// [0-9]: các số  từ 0 -9
// [a-z0-9A-Z]: các số từ 0-9 or a-z or A-Z
/[a-z]/.test("aadfs"); // true
/[a-z]/.test("AADFS"); // false
/[a-z]/.test("AADFS"); // false
/[A-Z]/.test("AADFS"); // true
/[A-Z]/.test("aadfs"); // false
/[0-9]/.test("abc7xyz"); // true
/[0-9]/.test("abc"); // false
/[a-z0-9A-Z]/.test("abc123ABC"); // true
/[^a-z]/.test("a"); // false
// 4. Meta characters
//   \d:  khớp với số, nó tương đương với [0-9]
/\d/.test("0123"); // true
//  \D: nguọc lại với \d tương đương với [^0-9];
/\D/.test("0123"); // false
// \w: khớp với các kí tự và dấu gạch dưới và số, nó tương đương [a-zA-Z0-9_]
/\w/.test("_"); // true
// \W: ngược lại với \w nó sẽ tương đương với [^a-zA-Z0-9_]
/\W/.test("_"); // false
// \s: khớp với các kí tự khoảng trắng: spaces, tab, newline
/\s/.test(" "); // true
//  \S: các kí tự không phải khoảng trắng
/\S/.test(" "); // false
// \n: khớp với newline ( xuống hàng)
// \t: khớp với lại tab character;
//  .: khớp với all trừ newline(\n)
// [^] : khớp với all gồm cả newline(\n)
// .
// 5.Quantifiers: {n} {n.m} + ? *
// string.match(regex) "abc".match(/\m/) => []
// {n}: số lượng nhất định
// {n,m}: số lượng trong khoảng từ n tới m
// +: lấy 1 hoặc nhiều kí tự thoả mãn điều kiện
const str1 = "Welcome to 20221234";
console.log(str1.match(/\d\d\d\d/)[0]);
console.log(str1.match(/\d{4}/)[0]);
console.log(str1.match(/\d{4,6}/)[0]);
console.log(str1.match(/\d+/)[0]); // lấy all
const str2 = "color or colour ?";
// ?: có thể có or không có kí tự nào đó
console.log(str2.match(/colour/g));
// console.log(str2.match(/colou?r/g)); // ? lay ca 2
// console.log(str2.match(/colour/g));  // g
// flag
/*
g: global
i: case insensitive
m: multipe lines
*: không có hoặc là nhiều
*/
const str3 = "12345";
console.log(str3.match(/\d*/g));
// 6. group ()
/(\d{3})?(\w+)/.test("123"); // true
// 7.  Escaping \ / [ ] ( ) { } ? + |  . ^ * $
// 8. Boundaries \b \B
/\?/.test("?");
// \b
"my name is Quan".match(/\bQuan/g); // [Quan] đứng độc  lập 1 mình
// \B
"my name isQuan".match(/\BQuan/g); // [Quan] đứng liền vs 1 đơn vị khác
// 9.
const str4 = "hello welcome hello to my hello";
console.log(str4.replace("hello", "hi")); //  => hi welcome hello to my hello
// string.recipe(regex, value);
str4.replace(/hello/g, "hi"); // =>hi welcome hi to my hi
"welcome 1234567".match(/\d+/g); // => "1234567";
// email validation
