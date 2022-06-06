// By value vs By references
// By value  -> giá trị thực sự đc lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); // true
// by references ->  nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // false
// JSON: Javascript Object Notation
/*
{
    "key": value,
    "key": value,
}
*/
// JSON.stringify(value) -> convert gia tri sang duoi dang JSON string
// ==> toString()
// [1,2,3].toString() -> "1,2,3"
// JSON.stringify([1,2,3]) -> "[1,2,3] "
// [1,2,3]
// JSON.parse("[1,2,3])  -> [1,2,3]
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse("[1,2,3]"));
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str);

// clone
// sao chép các mảng
const students = ["a", "b", "c", "d", "e"];
// students.pop();  xoa phan tu cuoi cung

// su dung phuong thuc slice()
const sliceStudents = students.slice();
sliceStudents.pop();
console.log(sliceStudents);
// 2. spread operator [...array]
const spreadStudents = [...students];
console.log(spreadStudents);
// [1,2] [3,4] [5,6] -> [1,2,3,4,5,6]
// concat
// array1.concat(array2, array3, arrayN);
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);
// 2. spread operator
const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray2);
// destructuring array
const toys = ["ball", "sword", "arrow", "magic", "water", "fire"];
const a = toys[0]; // ball
const b = toys[1]; // sword
const c = toys[2]; // arrow
console.log(a, b, c);
// const [ indexName, indexName] = toys;
const [x, y, z] = toys;
console.log(x, y, z);
// rest parameter ...
const [ball, ...rest] = toys;
console.log(rest);
function demo(a, ...rest) {
  console.log(a, rest);
}
demo;
