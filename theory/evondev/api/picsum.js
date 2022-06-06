// ? page=2limit=100
const imageList = document.querySelector(".images");
const loadMore = document.querySelector(".load-more");
const loader = document.querySelector(".image-loader");
loadMore.style.display = "none";
let page = 1;
const limit = 8;
const endpoint = `https://picsum.photos/v2/list?limit=${limit}`;
function imageTemplate(url) {
  const Template = `<div class="images-item">
  <img src="${url}" alt=""></div>
  </div>`;
  imageList.insertAdjacentHTML("beforeend", Template);
}
async function fetchImages(page = 1) {
  loader.style.display = "block";
  loadMore.style.display = "none";

  const response = await fetch(`${endpoint}&page=${page}`);
  const images = await response.json();
  if (images.length > 0 && Array.isArray(images)) {
    loader.style.display = "none";
    loadMore.style.display = "block";
    images.forEach((item) => {
      imageTemplate(item.download_url);
    });
  }
}
async function handleLoadMore() {
  page++;
  await fetchImages(page);
}
loadMore.addEventListener("click", handleLoadMore);
fetchImages();
