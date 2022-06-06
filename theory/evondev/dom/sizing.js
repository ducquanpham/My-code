// 1. offsetWidth, offsetHieght, offsetLeft, offsetParent, offsetTop
const boxed = document.querySelector(".boxed");
console.log(boxed.offsetWidth); // láy độ rộng của phần tử
console.log(boxed.offsetTop); // chiều cao của phần tử
console.log(boxed.offsetParent); // lấy ra phần tử cha để lấy giá trị của phần tử cha
// 2. clientWidth, ...
console.log(boxed.clientHeight); // độ cao của phần tử trừ đi border
console.log(boxed.clientWidth); // độ dài của phần tử trừ đi border
console.log(boxed.clientLeft); // vị trí cảu nó so với phía trên  border
// 3. window.innerWidth, window.outerWidth,  window.innerHeight, window.outerHeight,
console.log(window.innerHeight);
// 4, selector.getBoundingClientRect() -> lấy ra toạ độ, kích thước của phần tử
console.log(boxed.getBoundingClientRect());
// left, x: vị trí của  khối so với bên trái
// top: vị trí của khối so với phía trên
// botttom: chiều cao của khối + top
// right:  độ rộng của khối + left
// Sự khác nhau giữu Node list bà HTML Collection
const li = document.getElementsByTagName("li"); // HTML Collection
const li2 = document.querySelectorAll("li"); // NodeList
console.log(li);
console.log(li2);
// Điểm giống: có thể truy cập bằng index, có độ dài(length), giống màng nhưng ko hằn là mảng tức là không sử dụng được những phương thức đã học như là pop, shift, push, map, filter
// HTML Collection: ko sử dụng được forEach
// NodeList: Sử dụng được forEach
for (let i = 0; i < li.length; i++) {
  console.log(li[i]);
}
// sự khác nhau giữa ParentNote và parentElement
// parentNote có thể Null
