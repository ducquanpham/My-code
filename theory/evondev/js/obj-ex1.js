// 1. Viết 1 function kiểm tra value có phải là object hay không ?
// typeof value "object"
// { } [ ] null
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  }
  return false;
}
// console.log(isObject(null));

// 2. {a:1, b:2 } => [["a" , 1] , ["b" , 2]]
function objectToArray(object) {
  // check nếu kp là obj thì dừng
  if (!isObject(object)) return;
  // nếu là obj thì xửa lí
  // return Object.entries(object);
  // [a, b]
  // object[key]
  // const value = Object.keys(object).map((key) => [key, object[key]]);
  // return value;
  let result = [];
  for (let key in object) {
    // hasOwnProperty(key) → nếu object chứa key trả về true ngược lại trà về false
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
}
// console.log(objectToArray({ a: 1, b: 2 }));
//  3. ({a: 1, b: 2} 'a')  => {a: 1}
// res parametor
function without(object, ...key) {
  // spread operator
  const newObject = { ...object };
  key.forEach((item) => {
    delete newObject[item];
  });
  // console.log(object);
  // delete object[key];
  return newObject;
}
// console.log(without({ a: 1, b: 2 }, "b"));

// 4. truyền vào  2 obj xem có bằng nhau hay không ?
// { a: 1, b: 2 } , { a: 1, b: 2 }  -> true
// { a: 1, b: 2 } , { a: 1, b: 2, c: 3 }  -> false
function isEqualObject(obj1, obj2) {
  // check keys length of two objects
  const objkey1 = Object.keys(obj1);
  const objkey2 = Object.keys(obj2);
  if (objkey1.length !== objkey2.length) return false;
  // check values of two object
  // fa, b] → object[a] || object[b]
  const result = objkey1.every((key) => obj1[key] === obj2[key]);
  return result;
}
console.log(isEqualObject({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }));
