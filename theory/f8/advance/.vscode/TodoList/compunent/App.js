import html from "../core.js";
import Header from "./Header.js";
import ToduList from "./TodoList.js";
import Footer from "./Footer.js";

function App() {
  return html`
    <section class="todoapp">${Header()} ${ToduList()} ${Footer()}</section>
  `;
}
export default App;
