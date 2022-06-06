// //  1.localStorage.setItem("key", value)
// localStorage.setItem("name", "DQP");
// //  1.localStorage.getItem("key")
// console.log(localStorage.getItem("name"));
// //  3.localStorage.remove("key")
// //  4.localStorage.clear();
// let arr = [1, 2, 3, 4, 5];
// localStorage.setItem("list", JSON.stringify(arr));
// const newArr = JSON.parse(localStorage.getItem("list"));
// console.log(newArr);
window.addEventListener("load", function () {
  // variables declaration
  const form = document.querySelector(".todo-form");
  const totoList = document.querySelector(".todo-list");
  let todos = localStorage ? JSON.parse(localStorage.getItem("todoList")) : [];
  if (Array.isArray(todos) && todos.length > 0) {
    [...todos].forEach((item) => createTodoItem(item));
  }
  function createTodoItem(title) {
    const template = ` <div class="todo-item">
    <span class="todo-text">${title}</span>
    <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
  </div> `;
    totoList.insertAdjacentHTML("beforeend", template);
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoValue = this.elements["todo"].value;
    // console.log(todoValue);
    // Main code
    createTodoItem(todoValue);
    todos.push(todoValue);
    console.log(todos);
    localStorage && localStorage.setItem("totoList", JSON.stringify(todos));
    // save localStorage
    this.elements["todo"].value = "";
  });
});
