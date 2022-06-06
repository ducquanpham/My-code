// 1 dao nguoc 1 chuoi vd: Pham Duc Quan
function reverseString(str) {
  if (!str) return null;
  // split("")
  const arrStr = str.split(" ");
  const reverseStr = arrStr.reverse().join(" ");
  // chaining methods
  return reverseStr;
  // or return str.split(" ").reverse().join(" ");
}
console.log(reverseString("Pham Duc Quan"));
// [1,2,3,4,5].reverse() => [5,4,3,2,1]

// in hoa ra chữ cái đầu tiên chuoi  trong chữ ví dụ:   " my name is quan" => "My Name Is Quân"
function capitalizeWord(word = "") {
  if (word.length === 0) return null;
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}
function capitalizeStr(str) {
  if (!str) return null;
  // str.split(" ").map(item => capitalizeWord(item)).join("")
  const result = str
    .split(" ")
    .map((item) => capitalizeWord(item))
    .join(" ");
  // console.log(result);
}
capitalizeStr("my name is quan");
