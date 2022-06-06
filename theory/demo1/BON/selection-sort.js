function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i; // 0
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // 1 , 3 => 3
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
console.log(selectionSort([5, 3, 4, 1, 2]));
// sắp xếp chèn : Selection sort
// [5,3,4,1,2]
// min 5: 5,3,4,2,1
//  sorted array : 1 | unsorted array :  3,4,5,2
//  sorted array : 1 , 2 | unsorted array :  4,5,3
//  sorted array : 1,2,3 | unsorted array :  5,4
//  sorted array : 1,2,3,4 | unsorted array :  5
//  sorted array : 1,2,3,4,5 | unsorted array :  []
// [1,2,3,4,5]
