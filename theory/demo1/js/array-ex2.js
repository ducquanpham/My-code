// 1. cho 1 mảng gồm nhiều giá trị [1,1000, false ,  null , "DQP" , "undefined " , "javascript"], [1,2,3]. viết chương trình loại bỏ các giá trị là falsy ra khỏi vùng và chỉ giữ lại cái giá trị truthy. gợi ý  các giá trị falsy là o undefined false "" NaN
// // 2. Cho 1 mảng phức tạp [[1,2,3, [false, null]], [1,5,6, ["javascript"]], [888,666, [90]]]. Và kết quả mong muốn là [1,2,3, false, null,1,5,6,"javascript",888,666,90]
const array = [
  1,
  1000,
  false,
  null,
  "DQP",
  undefined,
  "javascript",
  [1, 2, 3],
  NaN,
];
// new Boolean
//Boolean
// built-in object
const filterFalsy = array.filter((item) => Boolean(item));
// console.log(filterFalsy);
const complexArray = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90]],
];
// flat(number)
const result = complexArray.flat(2);
// console.log(result);
// 3. đảo ngược số nguyên . vidu 1234 -> 4321

// Math.sign(123) ->  1
// Math.sign(-123) -> -1
function reverseNumber(number) {
  // convert to String  => chuyển đổi thành String/
  // Split("") ->  [vulue]  => dùng  split chuyển  thành 1 mảng//
  // reverse () => đảo  ngược lại
  // join("") => biến lại thành String
  // parseInt => chuyển thành số
  const value =
    parseInt(number.toString().split("").reverse("").join("")) *
    Math.sign(number);
  console.log(value);
}
reverseNumber(1234);
reverseNumber(-4321);

// 4. Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 cho tới số nguyên đó rồi kiểm tra nếu có số chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì in ra chữ "Buzz" , nếu chia hết cho 2 và 3 thì in ra "FizzBuzz"

// + - * / ( % = chia lấy dư)
// 6 % 2 = 3 dư 0
// 6 % 4 = 1 dư 2
// function fizzBuzz(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0 && i % 3 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 2 === 0) {
//       console.log("Fizz");
//     } else if (i % 3 === 0) {
//       console.log("Buzz");
//     }
//   }
// }
// fizzBuzz(15);
// 5. Cho 1 chuỗi bất kỳ, đếm số lượng kí tự `vowels` có trong chuỗi.
// vowels là các kí u e o a i
// Ví dụ "evondev" → 3(e o e)
function countVowels(string) {
  let count = 0;
  const characters = "ueoai";
  for (let c of string) {
    if (characters.includes(c)) count = count + 1;
  }
  return count;
}
// console.log(countVowels("evondev"));
// evondev -> e v o n d e v
// 6. Cho 1 màng các giá trị số [1,2,3,1,1,1,2,212,5,5,5,7,7,6]. Viết một function trả về một mảng với các giá trị unique. Kết quả ở trên sẽ là [1,2,3,5,7,6];
function unique(arr) {
  let result = [];
  if (!Array.isArray(arr)) return result;
  //Boolean
  // Array.isArray(array) -> true ngược lại thì là false
  // [1,2,3,5,7,6]
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(unique([1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6]));
// 7. Viết 1 function xử lý từ 1 mảng lớn thành nhiều màng con dua vào một số nguyên đầu vào. Ví dụ([1,2,3,4,5], 2) → [[1,2, [3,4, [5]]
// ([1,2,3,4,5,6], 3) -> [[1,2,3], [4,5,6]]
function splitArray(array, number) {
  let result = [];
  // slice (start, end)
  // [1,2,3,4,5,6]
  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, number + index));
    index = index + number;
  }
  // console.log(result);
  return result;
}
splitArray([1, 2, 3, 4, 5, 6], 2);
