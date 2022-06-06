// Callback ?
//  là hàm ( fun) được truyền qua đối số khi gọi hàm khác
// 1. là hàm
// 2/ được truyền qua đối số
// .3 được gọi lại trong cái hàm nhận đối số
Array.prototype.map2 = function (Callback) {
  var arrayLength = this.length;
  for (let i = 0; i < arrayLength; i++) {
    Callback(this[i], i);
  }
};
var courses = ["js", "ruby", "php"];
courses.map(function (courses) {
  return `<h2>`;
});
courses.map2(function (course, index) {
  console.log(index, course);
});
//
//
Array.prototype.map2 = function (callback) {
  var output = [],
    arrayLength = this.length;
  for (var i = 0; i < arrayLength; ++i) {
    var rs = callback(this[i], i, this);
    output.push(rs);
  }
  return output;
};

Array.prototype.forEach2 = function (callback) {
  var output = [],
    arrayLength = this.length;
  for (var i = 0; i < arrayLength; ++i) {
    var result = callback(this[i], i, this);
    output.push(result);
  }
  return output;
};

Array.prototype.find2 = function (callback) {
  var output = [],
    arrayLength = this.length;
  for (var i = 0; i < arrayLength; ++i) {
    var rs = callback(this[i], i, this);
    if (rs === true) {
      output.push(this[i]);
      break;
    }
  }
  return output;
};

Array.prototype.filter2 = function (callback) {
  var output = [],
    arrayLength = this.length;
  for (var i = 0; i < arrayLength; ++i) {
    var rs = callback(this[i], i, this);
    if (rs === true) {
      output.push(this[i]);
    }
  }
  return output;
};

Array.prototype.reduce2 = function (callback, result) {
  var arrayLength = this.length,
    i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < arrayLength; ++i) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

Array.prototype.every2 = function (callback) {
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; ++i) {
    var rs = callback(this[i], i, this);
    if (rs === false) {
      return false;
    }
  }
  return true;
};
//
Array.prototype.every2 = function (callback) {
  var output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index] in this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};
Array.prototype.some2 = function (callback) {
  var arrayLength = this.length;
  for (var i = 0; i < arrayLength; ++i) {
    var rs = callback(this[i], i, this);
    if (rs === true) {
      return true;
    }
  }
  return false;
};
// forEach, find , filter, some ,  every, reduce
// forEach
Array.prototype.forEach2(function (callback) {
  for (var index in this) {
    console.log("index:", index);
  }
});
var courses = ["js", "php", "ruby"];
courses.forEach2(function (course, index, array) {
  console.log(course, index, array);
});
