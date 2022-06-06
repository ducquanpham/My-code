// 1. xác định điểm dừng
// 2. Logic handle => tạo ra điểm dừng
function loop(start, end, cb) {
  if (start < end) {
    cb(start);
    return loop(start + 1, end, cb);
  }
}
var array = ["javascript", "PHP", "RUBY"];
loop(0, array.length, function (index) {
  console.log(array[index]);
});
// 3* 2* 1
function giaithua(number) {
  var output = 1;
  for (var i = number; i > 0; i--) {
    output = output * i;
  }
  return output;
}
console.log(giaithua(6));
// dung de quy
// function _giaithua(number) {
//   if (number > 0) {
//     return number * giaithua(number - 1);
//   }
//   return 1;
// }
// console.log(_giaithua(6));
