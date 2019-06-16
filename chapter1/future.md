# js未来 #

### 目录 ###

1. [Typescript](#Typescript)
2. [WebAssembly](#WebAssembly)
3. [面试题](#questions)

<span id="Typescript"></span>

#### Typescript简介 ####

　　js强大是因为它的松散特性,所有的变量只是一个名字（指针），变量类型随时可变。可是也是由于它的松散特性，在当下越来越庞大和复杂的系统中造成了许多潜在的bug，比如，函数参数类型不指定的话，代码运行的时候接受参数可以是任何类型的值，此时函数中不得不写很多if/else来试错。Typescript本质上是JavaScript的超集，它主要是用来识别变量类型。
　　
　　Typescript加入静态语言所具有的一切，类型申明、接口、抽象、注解等等。从写法来说，ts就是强类型语言的写法！当前已经有很多优秀的框架都原生支持了ts，所以ts一定会是未来大型js项目的主要变成语言！[进入Typescript学习](http://todo "Typescript")，ts有一定的学习成本，如果单纯为了变量类型校验也可以用**flow**插件来代替。

<span id="WebAssembly"></span>

#### WebAssembly简介 ####

　　WebAssembly是一个可移植、体积小、加载快并且兼容 Web 的二进制格式，生成的.wasm是使用c/c++编写出来的js动态链接库，它也具备自己的语义，它可以调用js api，它可以直接被操作系统识别，而不需要再次进行编译，因此它的运行速度极快。wasm被设计出来不是为了取代js而是作为js的补充，增强js程序的执行速率。WebAssembly的出现使得web应拥有无限的可能，例如做3d游戏，高性能的可视化，大数据计算等等，但是它的难度实在太大了，需要掌握c/c++还要求熟练使用js操作二进制文件，最基本的使用方式[demo2](https://github.com/wowZin/js-core-learning/chapter1/demo2)。

<span id="questions"></span>

#### 面试题 ####


下一篇： [js数据类型](../chapter/overview.md)