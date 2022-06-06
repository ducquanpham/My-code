// MVC: Model View Controller
// model:
class model {
  constructor() {
    this.todos = ["DQP", "AAA"];
  }
  addTodo(todosText) {
    if (todosText.length > 0) {
      this.todos.push(todosText);
    }
  }
  removeTodo(todoText) {
    const index = this.todos.findIndex((item) => item === todoText);
    this.todos.splice(index, 1);
  }
}
class View {
  constructor() {
    this.app = this.getElement("body");
    this.todoWrapper = this.createElement("div", "todo");
    this.form = this.createElement("form", "todo-form");
    this.form.autocomplete = "off";

    this.input = this.createElement("input", "todo-input");
    this.input.type = "text";
    this.input.placeholder = "Enter your task";
    this.input.name = "todo";

    this.button.createElement("button", "todo-submit");
    this.button.type = "submit";
    this.button.textContent = "Add";

    this.form.append(this.input, this.submit);

    this.todoList.createElement("div", "todoList");
    this.todoWrapper.append(this.form, this.todoList);
    this.app.append(this.todoWrapper);
  }

  // createElement
  createElement(tag, className) {
    const elm = document.createElement(tag);
    if (className) elm.classList.add(className);
    return elm;
  }
  getElement;
  getElement(selector) {
    const elm = document.querySelector(selector);
    return elm;
  }
  get _todoValue() {
    return this.input.value;
  }
  _resetValue() {
    this.input.value = "";
  }
  displayTodos(todos) {
    if (todos.length > 0) {
      todos.forEach((todosText) => {
        const todoItem = this.createElement("div", "todo-item");
        const span = this.createElement("span", "todo-text");
        span.textContent = todosText;
        const icon = this.createElement("i");
        icon.className("fa fa-trash todo-remove");
        icon.setAttribute("'data-value", todoText);

        todoItem.append(span, icon);

        this.todoList.append(todoItem);
      });
    }
  }
  viewAddTodo(handler) {
    this.form.addListener("submit", (e) => {
      e.preventDefault();
      if (e.this._todoValue) {
        handler(this._todoValue);
        this._resetValue;
      }
    });
  }
  viewRemoveTodo(handler) {
    this.todoList.addListener("click", (e) => {
      this.todoList.addEventListener("click", (e) => {
        if (e.target.matches(".todo-remove")) {
          const value = e.target.dataset.value;
          handler(value);
        }
      });
    });
  }
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.displayTodos(this.model.todos);
  }
}
const app = new Controller(new Model(), new view());
