// // 1. keydown: hoạt động  khi nhấn xuống
// const input = document.querySelector(".input");
// input.addEventListener("keydown", function (e) {
//   // console.log(e.key);
//   // if (e.key === "enter") {
//   //   console.log("you hit enter");
//   // } else {
//   //   console.log(e.key);
//   // }
// });
// // 2.keyup:  sự kiện này xảy ra khi nhấn phím ròi thả ra
// input.addEventListener("keyup", function (e) {
//   // console.log(e.key);
// });
// // 3.keypress: sự kiện  này xảy ra khi bạn nhấn phím
// // keypress không nhận các phím như mũi ten, delete, page up-dơn, home, end,  ctrl, shift, alt, esc
// // key:down -> keypress -> up
// input.addEventListener("keypress", function (e) {
//   // console.log(e.key);
//   // if (e.key === "control") {
//   //   console.log("working");
//   // }
// });
// // 4. change: xảy ra khi gọi xong, nhấn enter hoặc nhấn chuột ra ngoài (1 lần)
// input.addEventListener("change", function (e) {
//   // console.log("working");
// });
// // 5. focus >< blur
// input.addEventListener("focus", function (e) {
//   // console.log("input us focus");
// });
// // 6. blur
// input.addEventListener("blur", function (e) {
//   // console.log("input us blur");
// });
// // 7. submit form
// const form = document.querySelector(".form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const username = this.elements["username"].value;
//   const password = this.elements["password"].value;

//   if (!username) {
//     alert("please enter your username");
//     return;
//   }
//   if (!password) {
//     alert("please enter your password");
//     return;
//   }
//   if (password.length <= 3) {
//     alert("too short");
//     return;
//   }
// });

// if (input.value === "");
// console.log(input.value);
//  this, e.target
// console.log(this.elements);
// console.log(this.elements["username"]);
// console.log(this.elements["username"].value);
//   const username = this.elements["username"].value;
//   const gender = this.elements["gender"].value;
//   const hobby = this.querySelectorAll(`input[name="hobby"]`);
//   // console.log({ username, gender, hobby });
//   let hobbyValues = [];
//   [...hobby].forEach((item) => hobbyValues.push(item.value));
//   console.log(hobbyValues);
//   // console.log(e.target);
// validation
// email: @gmail.com
// regular expression
