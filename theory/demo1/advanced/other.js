// Đệ quy là gì? (recursive)
function countDown(number) {
  // console.log(number);
  let other = number - 1;
  if (other > 0) {
    countDown(number - 1);
  }
  // if ( condition) stop recursive else run
}
countDown(3);
// ex => [1,2,3,4,5,2,3,5,1,2]
const comlexArr = [
  [1, 2, 3],
  [3, 4, 5],
  [
    [2, 3],
    [2, 3, 5, [9999]],
    [1, 2],
  ],
];
// console.log(comlexArr.flat(Infinity));
function flatArray(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (a, val) =>
            a.concat(Array.isArray(val) ? flatArray(val, deep - 1) : val),
          []
        )
      : arr.slice();
  return result;
}
console.log(flatArray(comlexArr, Infinity));

// 9. Set
const mySet = new Set();
mySet.add(1);
mySet.add("DQP");
console.log(mySet);
mySet.has(1); // true ( co chua (1));
mySet.delete("DQP");
console.log(mySet);
console.log(mySet.clear);
console.log(mySet.size);
//
const arr = [1, 1, 1, 1, 2, 2, 3, 4, 6, 7, 7, 9];
// => 1,2,3,4,6,7,9
// array to set
const mySet2 = new Set(arr);
console.log(mySet2);
const newArr = Array.from(mySet2);
console.log(newArr);
// const newArr = [...mySet2]
// set to array
let result = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (!result.includes(element)) {
    result.push(element);
  }
}
console.log(result);
