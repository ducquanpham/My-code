let x = 10;
function timesTen(a) {
  return a * 10;
}
let y = timesTen(x);
console.log(y); // 100
// -Global execution context
// the creation phase( tạo)
/**
 * Global Obj : windown
 * this: windown
 * x: undefined
 * timesTen: function() {}
 *y: undefined
 */
// the execution phase (thực thi)
/**
 * Global Obj : windown
 * this: windown
 * x: 10
 * timesTen: function(){}
 * y: timesTen(x) -> 100
 */
// - Function execution conText
// creation phase
/**
 * Global Obj : Argument(parameter)
 * this: windown
 * a: undefined
 */
// execution phase
/**
 * Global Obj : Argument(parameter)
 * this: windown
 * a: 10
 */
