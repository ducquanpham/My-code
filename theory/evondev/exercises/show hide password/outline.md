   <form class="form form-login">
      <input
        type="password"
        name="password"
        id=""
        placeholder="Enter your password"
      />
      <i class="fa fa-eye toggle"></i>
      window.addEventListener("load", function () {
  const togglePassword = document.querySelector(".toggle");
  togglePassword.addEventListener("click", function () {
    const input = this.previousElementSibling;
    const inputType = input.getAttribute("type");
    if (inputType === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });
});
