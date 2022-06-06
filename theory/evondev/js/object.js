//  là tập hợp các key và value
// Cách khai báo object
// object literal
const objectLiteral = {};
// object constructor
const objectConstructor = new Object();
const student = {
  name: "DQP",
  age: 20,
  male: true,
  "last-name": "Quan",
  hi: function () {
    console.log("Hello World");
  },
};
// method
// properties or key

// 2 cách truy xuất giá trị của obj
// 2.1 Dot notation obj.key
// console.log(student.name);
// 2.2 Bracket notation ["key"]
// console.log(student["age"]);
// console.log(student["last-name"]);

// thay đổi giá trị của Obj
// Obj.key
student.age = 18;
student.isDeveloper = true;
student["is-Developer"] = false;
// console.log(student);

// xoá các gia trị Obj => delete.obj(key)
delete student["last-name"];

// for in
for (let key in student) {
  if (key === "name") {
    // console.log("Duc Quan Pham");
  }
  const value = student[key];
  // console.log(`${key}:${value}`);
}
// Obj.key(obj) -> trả về  1 mảng chứa all keys của obj
const keys = Object.keys(student);
// console.log(keys);
// console.log(keys.length);

// Obj.values(obj) -> trả về 1 mảng chứa all giá trị của obj
const values = Object.values(student);
// console.log(values);
// Obj.entries(obj) -> trả về 1 mảng nested [[1,2,3],[1,2,3]] gồm cả keys và values
const entries = Object.entries(student);
// console.log(entries);
// Obj.assign() => copy values gộp nhiều Obj lại với nhau
const a = {
  firstName: "quan",
};
const b = {
  lastName: "pham",
};
const c = Object.assign(a, b);
// console.log(c);
//
const d = { ...a, ...b };
// console.log(d);
// Object.freeze(object )  -> ngăn chặn chỉnh sửa keys và values
const car = {
  brand: "MEC",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
// console.log(newCar);

// Object.seal(obj) -> cho phép chỉnh sửa keys và values nhưng k đc thêm mới
const user = {
  userName: "DQP",
};
// const newName = Object.seal(user);
// newName.userName = "DuC Quan Pham";
// console.log(newName);

// [...array]  - {...obj} copy

const newUser = { ...user };
newUser.userName = "DUC QUAN PHAM";
// console.log(user);
// console.log(newUser);
//  clone nested Obj
// const newUser3 = JSON.parse(JSON.stringify(user));

//
// const newUser = { ...user };
// Obj {...object}
// newUser.userName = "ducquanpham";
// console.log(user);
// console.log(newUser);
//  this keyword
// this đề cập  tới Obj gần nhất
const student2 = {
  name: "DQP",
  age: 20,
  male: true,
  phone: 1900,
  "last-name": "Quan",
  hi: function () {
    console.log(` my name is ${this.name} i am ${this.age} year old`);
  },
  fullname: {
    name: " duc quan pham",
  },
};
// student2.hi();

// optional chaining Obj ?
// student2.fullname?.name
// console.log(student2.fullname?.name);   ****

// destructuring object => rut' gon
// const name = student2.name;
// const age = student2.age;
// const male = student2.male;
//  ==> const {name, age, made} = student2;

const { name, age, phone } = student2;
// console.log(name, age, phone);
// fun with obj parameter
function whatYourInfo(obj) {
  // console.log(obj.name, obj.age, obj.school);
}
const newObj = {
  school: "CDBK",
  age: 12,
  name: "DQP",
};
whatYourInfo(newObj);
// object destructuring parameter
function whatYourInfo2({ name, age, school }) {
  // console.log(name, age, school);
}
whatYourInfo2({
  school: "CDBK",
  age: 20,
  name: "DQP",
});
