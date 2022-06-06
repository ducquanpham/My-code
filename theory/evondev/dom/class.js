// 1. selector.classList.add("abc")
const container = document.querySelector(".container");
container.classList.add("is-active");
// 2. selector.classList.remove("abc")
container.classList.remove("container");
// 3. selector.classList.contains("container") => kiểm tra có class hay không. có => true và ngược lại  --  <!>
// console.log(container.classList.contains("container"));
// console.log(container.classList.contains("is-active"));

// 4. selector.classList.toggle("class");

// 5. selector.className -> trả ra chuỗi các class của selector
const title = document.querySelector(".title");
console.log(title.className);
className = "title";

// menu toggle
const menu = document.querySelector(".menu");
menu.classList.add("is-show");
