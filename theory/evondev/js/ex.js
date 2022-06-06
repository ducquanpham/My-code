// ex1: tạo 1 mảng có 50 phần tử nhưng mỗi phần tử là số random từ 1 đến 1000 và các phần tử k dc lặp lại
// var numbers = [];
// var min, max, r, n, p;s
// min = 1;
// max = 1000;
// for (let i = 0; i < 50; i++) {
//   do {
//     n = Math.floor(Math.random() * (max - min + 1)) + min;
//     p = numbers.includes(n);
//     if (!p) {
//       numbers.push(n);
//     }
//   } while (p);
// }
// console.log(numbers);

// Điều kiện lặp là số i phải khác 0
// i được gán lại bằng một số ngẫu nhiên từ 0 tới 99
// const arr = [];
// for (let i = 1; i <= 100; i++) {
//   arr.push(i);
// }
// console.log(arr);
// for (let j = 1; j <= arr.length; j++) {
//   if (arr[j] % 3 == 0) {
//     console.log(arr[j]);
//   }
// }

//ex2: cho 1 mảng gồm 100 phần tử . tìm các số chia hết cho 2. từ mảng đó tìm các số không chia hết 4
// const arr = [];
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   if (i % 2 == 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);
// const arr2 = [];
// for (let j = 0; j < arr.length; j++) {
//   if (arr[j] % 4 !== 0) {
//     arr2.push(arr[j]);
//   }
// }
// console.log(arr2);
// ex3: cho 1 mảng gồm 2 phần tử 8 và 12 . tìm UCLN  và BCNN của 2 số đó
// const arr = [(x = 8), (y = 12)];
// const all = [];
// const arr8 = [];
// for (let i = 1; i <= x; i++) {
//   if (i % 2 == 0) {
//     arr8.push(i);
//   }
// }
// console.log(arr8);
// const arr12 = [];
// for (let j = 1; j <= y; j++) {
//   // console.log(j);
//   if (j % 2 == 0) {
//     arr12.push(j);
//   }
// }

// console.log(arr12);
// console.log(` uớc chung lớn nhất của 8 và 12 là ${8}`);
// console.log(` bội chung nhỏ nhất của 8 và 12 là ${2}`);

//ex4: cho 1 String yêu cầu in ra các kí tự lặp lại bao nhiêu lần;

const counts = {};
const sampleArray = ["phamducquan"];
console.log(sampleArray.join(""));
sampleArray.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);
