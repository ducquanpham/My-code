// ES6
// constructor
//prototype way
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  console.log(this.name);
};
const DQP = new Person("DQP");
// DQP.getName();
// class
class Person2 {
  constructor(name) {
    this.name = name;
  }
  // getName() {
  //   return this.name;
  // }
  get name() {
    return this._name;
  }
  // setName(newName) {
  //   this.name = newName;
  // }
  set name(newName) {
    this._name = newName;
  }
}
const quan = new Person2("quan");
// console.log(quan.getName());
// quan.setName("DQP");
// console.log(quan.getName());
// console.log(quan.name);
quan.name = "DQP";
// console.log(quan.name);
/// class expression
let Student = class {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
};
const evon = new Student("DQP");
console.log(evon.name);
function company(aClass) {
  return new aClass();
}
let Hello = company(
  class {
    sayHello() {
      console.log("hello");
    }
  }
);
Hello.sayHello();
// static method
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(a, b) {
    return a.date - b.date;
  }
}
let articles = [
  new Article("HTML", new Date(2022, 1, 1)),
  new Article("CSS", new Date(2022, 0, 1)),
  new Article("JS", new Date(2022, 11, 1)),
];
// articles.sort((a,b) => a.date - b.date)
// className.methodName
articles.sort(Article.compare);
// console.log(articles[0].title);
//  // static method dùng để thực hiện 1 chức năng nào đó từ class null mà không cần thông qua từ khoá "new Object" nào cả
//
// a.compare
// Static properties
class Item {
  constructor(name) {
    this.name = name;
    this.constructor.count++;
  }
  static count = 0;
  static getName() {
    return Item.count;
  }
}
const laptop = new Item("laptop");
const pencil = new Item("pencil");
// console.log(Item.getName());
// super và extends
// Kế thừa
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walking() {
    console.log(`i can walking ${this.legs} legs`);
  }
}
class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
  fly() {
    console.log(" flying");
  }
}
let bird = new Bird(2);
console.log(bird.walking());
