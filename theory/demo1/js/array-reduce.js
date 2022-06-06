var courses = [
  {
    id: 1,
    name: "html",
    coin: 100,
  },
  {
    id: 2,
    name: "css",
    coin: 200,
  },

  {
    id: 3,
    name: " js",
    coin: 300,
  },
  {
    id: 4,
    name: " python",
    coin: 400,
  },
  {
    id: 5,
    name: "java",
    coin: 500,
  },
];
var i = 0;
var totalCoin = courses.reduce(function (total, courses) {
  i++;
  console.log(i, total, courses);
  return total + courses.coin;
}, 0); // initial value

// ex1: flat- "LÀM PHẲNG " từ Depth ar - " mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);

// ex2: Lấy ra các khoá học đưa vào 1 mảng mới
var topics = [
  {
    topic: " front-end",
    courses: [
      {
        id: 1,
        title: "HTML, CSS",
      },
      {
        id: 2,
        title: "JAVASCRIPT",
      },
    ],
  },
  {
    topic: " back-end",
    courses: [
      {
        id: 1,
        title: "JAVA",
      },
      {
        id: 2,
        title: "MY SQL",
      },
    ],
  },
];
// var newCourses = topics.reduce2(function (courses, topic) {
//   return courses.concat(topic.courses);
// }, []);
// console.log(newCourses);
Array.prototype.reduce2 = function (callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], this);
  }
  return result;
};
const numbers = [1, 2, 3, 4, 5];
var result = numbers.reduce2(function (total, numbers) {
  return total + numbers;
});
console.log(result);
