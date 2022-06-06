function add(a, b) {
  return a + b;
}
function average(a, b) {
  return add(a, b) / 2;
}
let result = average(10, 20);
// cách hoạt động
/**
   code chạy =>
 * add
 * average (10, 20)
 * global()
 */
// result
/**
 * average
 * global()
 */

/**
 * global()
 */
