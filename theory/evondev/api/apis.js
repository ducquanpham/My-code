// API  la gi` ?
// Application Programming Interface
// JSON.parse(data)
//
const endpoint = "https://api.github.com/users";
const userEL = document.querySelector(".username");
// fetch => fetch data từ endpoint => trả về 1 cái romist => có thể sử dụng then, catch
async function displayUser(username) {
  userEL.textContent = "Loading...";
  const promise = await fetch(`${endpoint}/${username}`);
  const data = await promise.json();
  userEL.textContent = `${data.blog}`;
}
function handleError() {
  console.log("Something wrong with your  api");
  userEL.textContent = "No data found";
}
displayUser("evondev").catch(handleError);
// cors =>
