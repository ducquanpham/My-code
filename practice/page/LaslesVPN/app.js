const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(event) {
  event.target.classList.toggle("fa-times");
  event.target.classList.toggle("fa-bars");
  menu.classList.toggle("is-show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
  console.log(event.target);
  if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
    event.target.classList.remove("fa-times");
    menu.classList.remove("is-show");
    event.target.classList.remove("fa-bars");
  }
}
