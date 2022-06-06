//  thêm xoá sửa trong Js
// tạo ra element trong js : document.createElement("tag");
const div = document.createElement("div");
// 2. selector.appendChild
// document.body -> thẻ body
const body = document.body;
body.appendChild(div);
div.classList.add("container");
div.className = " container , wrapper";
div.textContent =
  "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam, ipsum  necessitatibus doloremque modi, sunt id perspiciatis architecto provident mollitia odit ea. Tempore perferendis voluptates tempora iure veniammolestias consequuntur.";
div.innerHTML = ` <div class="content><h3 class="title></h3></div>`;
// bài tập tạo ra html như đã minh hoạ ở file
const card = document.createElement("div");
card.classList.add("card");
const cardImage = document.createElement("img");
// cardImage.setAttribute("src", "https://source.unsplash.com/random");
cardImage.setAttribute("class", "card-Image");
card.appendChild(cardImage);
body.appendChild(card);

// 2
const Text = document.createTextNode(" hellow world");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(Text);

// 4.  element.cloneNode(true)
const h1clone = h1.cloneNode(true);
body.appendChild(h1clone);
// 4. element.hasChildNode -> kiểm tra có phần tử con nào hay không?  có => true và ngược lại
console.log(document.querySelector("h3").hasChildNodes());
