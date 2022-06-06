function Validator(formSelector) {
  var formRules = {};
  /**
   * Quy ước tạo rules
   * - nếu có lỗi thì return `error message`
   *- nếu không có lỗi thì return `undefined`
   */
  var validatorRules = {
    required: function (value) {
      return value ? undefined : " vui long` nhap truong hop nay";
    },
    email: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Trường này phải là email";
    },
    min: function (min) {
      return function (value) {
        return value.length >= min
          ? undefined
          : ` vui long  nhap  it nhat ${min} ki tu `;
      };
    },

    max: function (max) {
      return function (value) {
        return value.length >= min
          ? undefined
          : ` vui long  nhap toi da  ${max} ki tu `;
      };
    },
  };
  // lay ra form element trong dom theo formSelector
  var formElement = document.querySelector(formSelector);
  console.log(formElement);

  // chi xu li element trong dom
  if (formElement) {
    var inputs = formElement.querySelectorAll("[name], [rules]");
    for (var input of inputs) {
      var rules = input.getAttribute("rules").split("");
      for (var rule of rules) {
        console.log(rule);
      }
    }
    formRules[input.name] = input.getAttribute("rules");
  }
}
