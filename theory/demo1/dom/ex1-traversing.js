const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
const modalClose = document.createElement("i");
modalClose.className = "modal-close";
modalContent.appendChild(modalClose);
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id temporibus expedita dicta quasi iusto, laborum voluptatibus corporis quia necessitatibus nostrum repellat qui architecto perferendis sequi. Vero nemo repudiandae harum ipsa.";
modalContent.appendChild(modalDesc);
const modalAction = document.createElement("div");
modalAction.classList.add("modal-action");
modalContent.appendChild(modalAction);
const modalSubmit = document.createElement("button");
modalSubmit.classList.add("modal-submit");
modalSubmit.textContent = " Submit";
modalAction.appendChild(modalSubmit);
const modalCancel = document.createElement("button");
modalCancel.classList.add("modal-cancel");
modalCancel.textContent = " Cancel";
modalAction.appendChild(modalCancel);
document.body.appendChild(modal);
// const template = `
// <div class="modal">
// <div class="modal-content">
//   <ion-icon name="close-outline" class="modal-close"></ion-icon>
//   <div class="modal-desc">
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id temporibus expedita dicta quasi iusto, laborum voluptatibus corporis quia necessitatibus nostrum repellat qui architecto perferendis sequi. Vero nemo repudiandae harum ipsa.
//   </div>
//   <div class="modal-action">
//     <button class="modal-submit">Submit</button>
//     <button class="modal-cancel">Cancel</button>
//   </div>
// </div>
// </div>`;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);
const modalWrapper = document.querySelector(".modal");
if (modalWrapper) {
  setTimeout(function () {
    modal.classList.add("is-show");
  }, 3000);
}
