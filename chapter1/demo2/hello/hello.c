#include <stdio.h>

int main(int argc, char ** argv) {
	printf("hello my first web assembly\n");
}


// 编译webassembly的步骤 
// 前置条件 1.安装python2.7.x  2.安装cmake 3. 安装emscripten 细节：http://webassembly.org.cn/getting-started/developers-guide/
// step1： 编写c/c++ 程序
// step2： 生成链接库的html模板 （也可以生成js文件，在html中通过script标签引入）
// step3： 启动emscripten自带的v8，运行html  （直接运行html会有跨域问题---file方式引入的文本不支持跨域）