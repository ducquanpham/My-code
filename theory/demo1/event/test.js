window.addEventListener("load", function () {
  const button = document.querySelector(".button");
  const input = document.querySelector(".input");
  input.addEventListener("keyup", handleHighlight);
  function handleHighlight(e) {
    console.log(e);
  }
});
