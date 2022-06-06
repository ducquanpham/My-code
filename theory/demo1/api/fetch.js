var postApi = " https://jsonplaceholder.typicode.com/posts ";

fetch(postApi)
  .then(function (response) {
    return response.json();
    // JSON.parse: JSON => js types
  })
  .then(function (posts) {
    var htmls = posts.map(function (posts) {
      return `<li>
      <h2> ${posts.title} </h2>
      <p> ${posts.body} </p>
      </li>`;
    });
    var html = htmls.join("");
    document.getElementById("post-block").innerHTML = html;
  });
