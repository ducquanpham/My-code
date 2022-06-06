// quick-sort: sắp xếp nhanh
// [3, 7, 9, 0, 1, 5, 4, 2]
// pivot  arr [0] = 3
// 0 , 1, 2 pivot  7, 9, 5, 4
//  pivot : 0
//  pivot 1, 2
// 2
// 0, 1, 2
// 7, 9, 5, 4
// pivot = 7
// 5, 4  pivot(7) 9
//pivot : 5
// 4 pivot (5)
// 4, 5, 7, 9
// 0, 1,  2, 3, 4, 5,  7, 9
function quickSort(arr) {
  const List = [...arr];
  if (List.length < 2) return List;
  const pivot = List[0];
  const smaller = List.filter((item) => item < pivot);
  const bigger = List.filter((item) => item > pivot);
  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}
const array = [3, 7, 9, 0, 1, 5, 4, 2];
const sortedArray = [...array].sort((a, b) => a - b);
console.log(sortedArray);
console.log(quickSort(array));
