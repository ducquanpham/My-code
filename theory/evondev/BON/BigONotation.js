// 1.Big O Notation
// =>  đo lường sự phức tạp của 1 thuật toán nào đó
/**
 * O(1) => [].push(item)
 * O(n)  => 1 vòng lặp: for
 * O(n^2) =>nested loop for(for)
 * O(logn) => for([].push.item)
 * O(n!) =>  eg:3! = 3*2*1 Terrible
 */
function factory(n) {
  let num = n;
  for (let index = 0; index < n; index++) {
    num = factory(n - 1);
  }
  return;
}
// 2. Sort anh search
