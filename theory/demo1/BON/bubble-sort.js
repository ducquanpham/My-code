function bubbleSort(array) {
  const arr = [...array]; // spread operator
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      let num = arr[j];
      let next = arr[j + 1];
      if (num > next) {
        // const temp = arr[j + 1];
        // arr[j + 1] = arr[j];
        // arr[j] = temp;
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]; // =>
      }
    }
  }
  return arr;
}
const arr = [1, 5, 4, 8, 43, 32, 123, 0, 88, 55, 999];
console.log(bubbleSort(arr));
console.log("arr", arr);
// bubblesort: sấp xếp nổi bọt
/**
 *[1, 5, 4, 8, 43, 32, 123, 0, 88, 55, 999];
 * [1, 4, 5, 8,32,,,,]
 *[1, 4, 5, 8, 32, 43, ....]
 *[1, 4, 5, 8, 32, 43,0,123 ....]
 */
