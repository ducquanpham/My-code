// addEventListener
const button = document.querySelector(".button");
// const span = document.querySelector(".button span");
// function handleClick() {
//   console.log("click button");
// }
// button.addEventListener("click", handleClick, {
//   capture: true,
// });
// // event: e
// span.addEventListener("click", function (e) {
//   e.stopPropagation(); //  ngăn chặn nổi bọt
//   e.stopImmediatePropagation(); // ngăn chặn hết all
//   console.log("click span");
// });
// span.addEventListener("click", function () {
//   console.log("click span 2");
// });
// document.body.addEventListener("click", function () {
//   console.log("click body");
// });
// yes: handleClick  }{  no: handleClick()
// bubbling: nổi bọt: sự kiện click chay từ trong ra ngoài
// target vs curentTarget
button.addEventListener("click", function (event) {
  // event.target: chọn chính xác element mà mình click tới
  console.log(`even.target: ${event.target}`);
  // currentTarget:  chọn phần tử mà mình click
  console.log(`even.currentTarget: ${event.currentTarget}`);
});
// event.preventDefault()
const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault(); // không load sang trang khác
  event.target;
  // console.log("click me");
  // selector.style.property = value
  // event.target.style.property = value
});
