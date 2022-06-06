// document.title -> thẻ title của trang

// document.head ->
// <meta name="viewport" content="width=device-width, initial-scale=1.e" >
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width-Ddevice-width, initial-scale-1.0");
// document.head.appendChild(meta);
const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
// console.log(head);
// insertBefore
// parent.insertBefore( newnode, existingnode)
const ul = document.querySelector("ul");
// document.body.insertBefore(ul, document.querySelector("h3"));
// replaceChild
// node.replaceChild ( newnode, oldnode);
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));
// convert HTML collection, Nodelist to Array
const li = document.getElementsByTagName("li");
// li.forEach((item) => item);
// Array.from(HTML collection or Nodelist)
// [....HTML collection], [..Nodelist]
[...li].filter((item) => item);
// console.log(li);
// html body head title
// html: document.documentElement
// body: documnet.body
// head: documnet.head
// title:document.title
