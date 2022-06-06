const student = {};
Object.defineProperty(student, "fullName", {
  value: "nguen van a",
  writable: false,
});
student.fullName = "nguyen van b";
console.log(student);
//
//
