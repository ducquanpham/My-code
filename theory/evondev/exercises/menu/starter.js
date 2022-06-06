const buttonMinus = document.querySelector(".counter-descrease");
const buttonPlus = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counterNumber");
// let counterValue = parseInt(counterNumber.textContent);

buttonPlus.addEventListener("click", function () {
  counterValue++;
  // console.log(counterValue);
  counterNumber.textContent = counterValue;
  // counterValue = counterValue + 1;
  // counterValue += 1;
});
buttonMinus.addEventListener("click", function () {
  if (counterValue <= 0) return 0;

  counterValue--;
  // console.log(counterValue);
  counterNumber.textContent = counterValue;
  // counterValue = counterValue + 1;
  // counterValue += 1;
});
const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault(); // không load sang trang khác
  const name = event.target.dataset.name;
  console.log(name);
});
