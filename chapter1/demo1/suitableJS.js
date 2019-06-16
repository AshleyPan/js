"use strict";

// 使用es6语法，测试babel转义
var demoMaps = [1, 2, 3, 4, 5]; // 1.箭头函数已经被部分js引擎支持了, 下面代码不一运行时不一定会报错
// 2.虽然不会运行不会报错, 但是 => 仍然不是es5支持的语法格式

demoMaps.map(function (item) {
  console.log(item);
}); // 目前没有js引擎支持promise，如果不转义，下面代码会在运行时报错

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (true) {
      resolve();
    } else {
      reject();
    }
  }, 2000);
});
console.log('2s 后会打印出resolve');
promise.then(function (res) {
  return console.log('resolve');
}, function (err) {
  return console.log('reject');
});
