// giúp code clean
/**
 +) await => chỉ sử dụng ở bên trong fun => mà fun đó sử dụng async
 */
// fun expression
function wait(timer = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timer);
  });
}
async function run() {
  console.log("1. starting");
  await wait(3000);
  console.log(" 2. running");
  await wait(1000);
  console.log("3. ending");
}
// run();
// arrow function
const fn = async () => {};
const student = {
  fullName: async function () {},
  async calcAge() {}, //  => method in obj
  yearly: async () => {}, // => err fun
};

// Async await =>
/**
 *
 */
function makeTimer(timer = 1000, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}
async function allTimer() {
  const timer1 = makeTimer(1000, "first time");
  const timer2 = makeTimer(2000, "second time");
  const [timers] = await Promise.all([timer1, timer2]);
  console.log(timers);
  // console.log(timer1);
  // console.log(timer2);
  // const timer3 = await makeTimer(3000, "third time");
  // console.log(timer3)
}
// allTimer();
function isFrontendDev(languages) {
  return new Promise(function (resolve, reject) {
    if (!languages.includes("html")) {
      reject("You are not Frontend developer");
    }
    setTimeout(() => {
      resolve("You are frontend developer");
    }, 1000);
  });
}
async function go() {
  const dev1 = await isFrontendDev(["css"]);
  console.log(dev1);
  return dev1;
}
// console.log(go());
go()
  .then()
  .catch((error) => console.log(error));
/**
  async function go() {
    try {
        const dev1 = await isFrontendDev(["css"]);
      console.log(dev1);
    } catch (err) {
      console.log(err);
    }
}
go();
 */
function handleError(err) {
  // =>  tái sử dụng
  console.log(err);
}
go().catch(handleError);
