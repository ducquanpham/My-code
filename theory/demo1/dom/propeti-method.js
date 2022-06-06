// 1. selector. getAttritbute ("attribute") ->  lấy ra giá trị mà attribute mong muốn
// selector : 1 đơn vị
// attribute => thuộc tính như: href, id, class,  src,  style
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
li.forEach((item) => {
  console.log(item.getAttribute("class"));
});
console.log(li);

// 2. selector.setAttribute("attribute", value)  -> xét giá trị cho attribute nào đó của selector
link.setAttribute("target", "_blank");
const listLink = document.querySelectorAll("a.link");
listLink.forEach((item) => item.setAttribute("target", "_blank"));

// 3. selector.removeAttribute("attribute") => xoá attribute  của selector
const p = document.getElementById(" spinner");
p.removeAttribute("style");

// 4.selector.hasAttribute("Selector") -> kiểm tra selector có attribute nào đó hay không, nếu có -> true, và ngược lại
console.log(p.hasAttribute("class"));
