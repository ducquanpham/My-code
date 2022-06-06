//https://icanhazdadjoke.com/
const jokeHeading = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");
const endpoint = "https://icanhazdadjoke.com/";
const jokeWrapper = document.querySelector(".joke");
async function getJoke() {
  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
}
async function handleClick() {
  jokeWrapper.classList.add("is-loading");
  const data = await getJoke();
  jokeHeading.textContent = data.joke;
  jokeWrapper.classList.remove("is-loading");
}
jokeButton.addEventListener("click", handleClick);
