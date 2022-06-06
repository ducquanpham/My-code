function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // i= 1 => phần tử 2 để so sánh
    const current = arr[i]; // 4
    let j; //  undefined
    // j: 2 - 1 = 1
    // arr[j] = 3
    // 3 > 5
    // arr[j] = 5 > current: 4
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
      // arr[2] = 5
    }
    arr[j + 1] = current; // 5
  }
}
let arr = [3, 5, 4]; // => [3, 4, 5]
/**
 * [3, 5, 4]
 * [3, 5, 5]
 * [3, 4, 5]
 */
