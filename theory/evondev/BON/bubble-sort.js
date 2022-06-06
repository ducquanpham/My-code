function bubbleSort(array) {
  const arr = [...array];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      let num = arr[j];
      let next = arr[j + 1];
      if (num > next) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
const arr = [1, 5, 4, 8, 43, 32, 123, 0, 88, 55, 999];
// => [0, 1, 4, 5, 8, 32, 43, 55, 88, 123, 999]
console.log(bubbleSort(arr));
console.log("arr", arr);
// bubble-sort: sấp xếp nổi bọt
/**
 *[1, 5, 4, 8, 43, 32, 123, 0, 88, 55, 999];
 * [1, 4, 5, 8,32,,,,]
 *[1, 4, 5, 8, 32, 43, ....]
 *[1, 4, 5, 8, 32, 43,0,123 ....]
 */
