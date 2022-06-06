// single thread
function task(message) {
  let Number = 1000000;
  while (Number > 0) {
    Number--;
  }
  console.log(message);
}
// console.log("start");
// task("loading");
// console.log("end");
// main
// call stack
/**
 * start ->
 * task ->
 * end ->
 */
// callbacks
console.log("start");
setTimeout(() => {
  task("loading");
}, 2000);
// rời khỏi callstack và chạy qua Web APIs -> CallBack queue -> Khi callstack empty ->  chạy xong  sau đó rời khỏi callstack
console.log("end"); // chạy xong và rời khỏi call stack
// web APIs: setTimeout, DOM Event, fetch request
