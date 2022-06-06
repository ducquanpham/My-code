const progress = document.querySelector(".progress");
window.addEventListener("scroll", function () {
  // console.log(scrollTop);
  const scrollTop = window.pageYOffset;
  //  tính  ra chiều cao của documnet bao gồm scrollBar document.documentElement.scrollHeight
  // chiều cao  của document không bao gồm scrollbar document.documentElement.clientHeight
  // tính ra chiều cao của scrollbar

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}%`;
});
