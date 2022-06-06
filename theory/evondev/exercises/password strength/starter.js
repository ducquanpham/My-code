window.addEventListener("load", function () {
  const passwordInput = document.querySelector(".input");
  passwordInput.addEventListener("input", function (e) {
    const value = e.target.value;
    console.log(value);
    const checkLengthClass = e.target.parentNode.querySelector(".check-length");
    const checkUpperClass = e.target.parentNode.querySelector(".check-upper");
    const checkNumberClass = e.target.parentNode.querySelector(".check-number");
    const checkSpecialClass =
      e.target.parentNode.querySelector(".check-special");
    const checkItems = e.target.parentNode.querySelectorAll(".check-item");
    if (!value) {
      [...checkItems].forEach((item) => {
        item.classList.add("active");
        item.classList.remove("unactive");
      });
      return;
    }
    if (!value) return;
    if (value.length < 8) {
      checkLengthClass.classList.remove("active");
      checkLengthClass.classList.add("unactive");
    } else {
      checkLengthClass.classList.add("active");
      checkLengthClass.classList.remove("unactive");
    }
    adj(checkNumberClass, value, /[0-9]/);
    adj(checkUpperClass, value, /[A-Z]/);
    adj(checkSpecialClass, value, /[$%*([\])^&{}!`~]/);
  });
  function adj(selector, value, regex) {
    if (!regex.test(value)) {
      selector.classList.remove("active");
      selector.classList.add("unactive");
    } else {
      selector.classList.add("active");
      selector.classList.remove("unactive");
    }
  }
});
