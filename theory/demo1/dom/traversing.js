// 1.parentNode, parentElement, removeChild
// parentNode vs parentElement => lấy ra phần tử cha cấP gần nhất
const span = document.querySelector("span");
console.log(span.parentElement);
// selector.parentNode or selector.parentElement.removeChile(selector);
// span.parentNode.removeChild(span);
// span.remove();

// 3. nextElementSibling vs previousElementSibling  => tìm tới  element sau và trước nó
const nextSpan = span.nextElementSibling; // or span.previousElementSibling
console.log(nextSpan);
// 2. childNodes: trả về 1 mảng các  node bên trong bao gồm cả TextNode vs children: trả về các Node không bao gồm TextNodes;
console.log(span.childNodes); // text <strong> text
console.log(span.children);
// 4. firstChild vs firstElementChild
console.log(span.firstChild); // text
console.log(span.firstElementChild); // <strong>
// 5. lastChild vs lastElementChild
console.log(span.lastChild); // text
console.log(span.lastElementChild); // <strong>
