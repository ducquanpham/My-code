// arr  = [1, 2, 3, 4, 5, 6, 7, 8, 9]'
// index = 5
// value = 6
function linearSearch(arr, value) {
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) index = i;
  }
  return index;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
