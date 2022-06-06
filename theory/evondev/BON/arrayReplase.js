// 1. arrayReplace
// [1, 2, 3, 1, 1] => [5, 2, 3, 5, 5]
function arrayReplace(array, elementToReplace, newElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToReplace) {
      array[i] = newElement;
    }
  }
  return array;
}
console.log(arrayReplace([1, 2, 3, 1, 1], 1, 5));
// 2. Palindrome
// aaBAA => AABaa => Palindrome
// aaBAc -> cABaa -> is not Palindrome
function isPalindrome(str) {
  // change string to lowercase
  const newStr = str.toLowerCase();
  // const reverseStr = newStr.split("").reverse().join("");
  // aaBAA
  let reverseStr = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    reverseStr += newStr[i];
  }
  return newStr === reverseStr;
}
console.log(isPalindrome("aaBAA"));
//3. Array chunking
// [1, 2, 3,4,5,6,7,8], 3
// [[1,2,3],[4,5,6],[7,8]]
function chuck(array, size) {
  let result = [];
  for (let index = 0; index < array.length - 1; index += size) {
    result.push(array.slice(index, index + size));
  }
  return result;
}
const result = chuck([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result);

// 4. array reverse
function reverseArray(array) {
  let result = [];
  for (let index = array.length - 1; index >= 0; index--) {
    result.push(array[index]);
  }
  return result;
}
function _reverseArray(array) {
  for (let index = 0; index < array.length / 2; index++) {
    // array[index]
    // array[array.length - 1- index]
    [array[index], array[array.length - 1 - index]] = [
      array[array.length - 1 - index],
      array[index],
    ];
  }
  return array;
}
console.log(_reverseArray([1, 2, 3, 4, 5]));
//
