// json-server --watch db.json
const course = {
  image: "",
  title: "",
  author: "",
  rating: "",
  price: "",
  bestSeller: false,
  buyAmount: "",
};
const endpoint = "http://localhost:3000/courses";
async function addPost(
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmount
) {
  await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmount,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", function (e) {
  e.preventDefault();
  const image = this.elements["image"].value;
  const title = this.elements["title"].value;
  const author = this.elements["author"].value;
  const rating = this.elements["rating"].value;
  const price = this.elements["price"].value;
  const bestSeller = this.elements["bestSeller"].checked;
  const buyAmount = this.elements["buyAmount"].value;
  addPost(image, title, author, rating, price, bestSeller, buyAmount);
  console.log();
});
/**
 * Courses
 * image
 * title
 * author
 * rating
 * price
 * bestSeller
 * buyAmount
 */
