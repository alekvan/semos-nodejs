console.log("Synchronous 1");

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("Synchronous 4");

return new Promise((resolve, reject) => {
  resolve().then(() => {
    console.log("Success!");
  });
});
