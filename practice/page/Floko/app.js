window.addEventListener("load", function () {
  const button = document.querySelector(".header__register-btn");
  button.addEventListener("click", function () {
    const template = ` <div class="modal">
    <div class="modal-content">
      <h1 class="modal__title">Sign Up</h1>
      <form class="modal-form">
        <div class="input__box">
          <input
            type="text"
            name=""
            class="input__signup-name input-signup"
            placeholder="Họ Và Tên"
          />
          <span class="input__signup-span"> </span>
        </div>
        <div class="input__box">
          <input
            type="number"
            name=""
            class="input__signup-number input-signup"
            placeholder="Số Điện  Thoại"
          />
          <span class="input__signup-span"> </span>
        </div>
        <div class="input__box">
          <input
            type="email"
            name=""
            class="input__signup-email input-signup"
            placeholder="Nhập Địa Chỉ Email"
          />
          <span class="input__signup-span"> </span>
        </div>
        <button type="submit" class="button__signup-sub">Send</button>
      </form>
      <i class="fa fa-times modal-close"></i>
    </div>
  </div>`;
button.addEventListener("click", function () {
  document.body.insertAdjacentHTML("beforeend", template);
});
  });
    document.body.addEventListener("click", function (event) {
      console.log(event.target);
      if (event.target.matches(".modal-close")) {
        const modal = event.target.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
      } else if (event.target.matches(".modal")) {
        event.target.parentNode.removeChild(event.target);
      }
      if (event.target.matches(".button__signup-sub")) {
        const modal2 = event.target.parentNode.parentNode.parentNode;
        modal2.parentNode.removeChild(modal2);
      }
  });
});
