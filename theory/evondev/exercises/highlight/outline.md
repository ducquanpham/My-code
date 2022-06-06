    <div class="dropdown">
      <input type="text" class="input-search" />
      <div class="dropdown-list">
        <div class="dropdown-item">how to about 1</div>
        <div class="dropdown-item">five ways to study Css</div>
        <div class="dropdown-item">The best way to learn E</div>
      </div>
    </div>
    window.addEventListener("load", function () {

const input = document.querySelector(".input-search");
const items = document.querySelectorAll(".dropdown-item");
input.addEventListener("input", handleHighlight);
// input nos sẽ lấy value khi chúng ta gõ
function handleHighlight(e) {
let filter = e.target.value;
filter = filter.toLowerCase();
console.log(filter);
[...items].forEach((item) => {
const text = item.textContent;
const index = text.toLowerCase().indexOf(filter);
if (index >= 0) {
item.innerHTML = `${text.substring( 0, index )}<span class="primary">${text.substring( index, index + filter.length )}</span>${text.substring(index + filter.length)}`;
}
});
}
});
