// 使用es6语法，测试babel转义
let demoMaps = [1, 2, 3, 4, 5];
// 1.箭头函数已经被部分js引擎支持了, 下面代码不一运行时不一定会报错
// 2.虽然不会运行不会报错, 但是 => 仍然不是es5支持的语法格式
demoMaps.map(item => {
	console.log(item);
});

// 目前没有js引擎支持promise，如果不转义，下面代码会在运行时报错
let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if(true) {
			resolve();
		} else {
			reject();
		}
	}, 2000);
});

console.log('2s 后会打印出resolve');

promise.then(res => console.log('resolve'), err => console.log('reject'))

// 使用babel
// step1: 添加configFile（.babelrc/.babelrc.js/config.babel.js/babelRoots）.babelrc
// step2: 配置.babelrc ---> 如果不配置的话无法进行转义
// step3: 运行转义命令 babel transformJs.js -o suitableJs.js