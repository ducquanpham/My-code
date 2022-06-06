this.firstName = "Minh";
this.lastName = "Thu";
const teacher = {
  firstName: "Minh",
  lastName: "Thảo",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
// Case 1:
console.log(teacher.getFullName()); // "Minh Thảo"

// Case 2:
const getTeacherName = teacher.getFullName;
// const getTeacherName = teacher.getFullName.bind(teacher);

console.log(getTeacherName()); // "Minh Thu
// dù method() được tạo ra trong 1 đối tượng nếu gắn sang 1 biến khác và gọi biến đó không thông qua đối tượng thì từ khoá THIS vẫn trả về phạm vi đối tượng windowwn
// bản thân từ khoá THIS không phải là 1 biến mang giá trị mà là từ khoá tham chiếu đến đối tượng khác. Khi thực thi tuỳ vào trường hợp, ngữ cảnh ầm js tham chiếu đến
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const input = $("#input");
const submit = $("#submit");
const root = $("#root");

const app = (() => {
  const clubs = ["Manchester United"];
  return {
    add(club) {
      clubs.push(club);
    },
    delete(index) {
      clubs.splice(index, 1);
    },
    render() {
      const html = clubs
        .map(
          (club, index) =>
            `<li>${club}<span class="delete" data-index=${index}>&times</span></li>`
        )
        .join("");
      root.innerHTML = html;
    },
    handleDelete(e) {
      const _this = this;
      const deleteBtn = e.target.closest(".delete");
      if (deleteBtn) {
        const index = deleteBtn.dataset.index;
        this.delete(Number(index));
        this.render();
      }
    },
    init() {
      // const _this = this
      // Handle
      submit.onclick = () => {
        const car = input.value;
        if (input.value) {
          this.add(car);
          this.render();
          input.value = null;
          input.focus();
        }
      };
      root.onclick = this.handleDelete.bind(this);
      this.render();
    },
  };
})();
app.init();
