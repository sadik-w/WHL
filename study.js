let p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("errrrrrr");
  }, 2000);
}
).then(function (data) {
  console.log(data); // 输出finished
}, function (err) {
  console.log("oh no, ", err);
});