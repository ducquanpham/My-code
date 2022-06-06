const teacher = {
  firstName: "Minh",
  lastName: " thu",
};
const me = {
  firstName: "QUAN",
  lastName: " pham",
  showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
me.showFullName.call(teacher); // func
//
function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}
function Chicken(name, weight, legs) {
  Animal.call(this, name, weight);
  this.legs = legs;
}
const QuanPham = new Chicken("Sơn Đặng", 66, 2);
console.log(QuanPham);
//
//
//
function logger() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
  const cars = ["BMW", "HONDA"];
}
logger(1, 2, 3, 4, 5);
