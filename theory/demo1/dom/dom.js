// 1. DOM là gì ?
// => Document Object Model
//      Dom attribute
//      DOM node

// 2. Selecting nodes(selector)
// 2.1 document.querySector -> trả về  1 node nếu tồn tại selector đó,  và ngược lại trả về null
//  => hayh đưỢc dùng nhiều nhất
// selector: .header, p ,div, body
// 2.2 document.querySelectorAll("selector") → trả về một NodeList chứa danh sách các node, nếu không có thì trả về empty
// nó có thể loop và sử dụng forEach
// nó giống Arr  là có  thể loop nhưng không dùng được các phương thức như push, pop, shift
const mutilNodes = document.querySelector(".item");
// console.log(mutilNodes);
// 2.3 document.getElementByClassName("className") -> HTMLCollection chứa danh sách node,nếu không thì trả về empty [ ]
// 2.4 document.getElementByTagName("tagName");
//2.5 document.getElementById("id"); -> trả về 1 node
