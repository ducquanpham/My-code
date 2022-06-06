function Car(name, color) {
  this.name = name;
  this.color = color;
}
Car.prototype.run = function () {
  // Context
  const test = () => {
    console.log(this);
  };
  test();
};
const porsche = new Car("Porsche", "red");
const mercedess680 = new Car("mercedes S680", "black");
console.log(porsche.run());
console.log(mercedess680.run());
