window.addEventListener("load", function () {
  const dropdownSelect = document.querySelector(".dropdown__select");
  const dropdownItems = document.querySelectorAll(".dropdown__item");
  const dropdownSelected = document.querySelector(".dropdown__selected");
  const dropdownList = document.querySelector(".dropdown__list");
  const dropdown = document.querySelector(".dropdown");
  const dropdownCaret = document.querySelector(".dropdown__caret");
  // dropdown select
  dropdownSelect.addEventListener("click", function (event) {
    dropdownList.classList.toggle("show");
    dropdownCaret.classList.toggle("fa-caret-up");
  });
  //dropdown item
  dropdownItems.forEach((item) =>
    item.addEventListener("click", function (event) {
      const text = event.target.querySelector(".dropdown__text").textContent;
      dropdownSelected.textContent = text;
      dropdownList.classList.remove("show");
      dropdownCaret.classList.toggle("fa-caret-up");
    })
  );
  // click body
  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      dropdownList.classList.remove("show");
    }
  });
});
