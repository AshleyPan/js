# js发展现状#

### 目录 ###

1. [如日中天的es6](#es6)
2. [es6与babel](#babel)
3. [面试题](#questions)

<span id="es6"></span>

#### es6 ####

　　js发展转折点分别是es3，es5，es6。随着js执行引擎更新迭代，es5可能就是未来前端兼容的最高要求了吧，越来越多的框架不再兼容低版本的js执行引擎。与es5相比，es6对于js的核心内容本质上并没有什么翻天覆地的变化，只不过是多了很多语法糖，但是这些语法糖的极大提高的了es5的可读性和开发效率。目前几乎所有的框架和js库都会使用es6语法！

　　截止目前es5的兼容性都达不到100%，更别说es6了。对于前端来说最烦的莫过于渐进增强，优雅降级，es6再完美在js引擎跑步起来那也是白搭，babel的出现让es6真正有了用武之地，es6通过babel转义就可以让所有支持es5的js引擎把代码执行起来。

　　以上就是关于js发展现状的全部描述，反正es6就是当下的王！

<span id="babel"></span>

#### es6与babel ####

　　 概括一下，es6通过babel转义成es5，从而使得代码可以被js引擎执行。这里主要是记录babel的简单使用，关于babel需要通过专门的篇幅去学习（**标记个todo，一要深度学习babel**），参考官网来使用babel困难的事情，搞清楚babel的转义原理才是核心！！
关于babel的简单使用[demo1](https://github.com/wowZin/js-core-learning/chapter1/demo1)


<span id="questions"></span>

#### 面试题 ####

1. 简单描述es5、es6、es7、es8...之间的关系

下一篇： [javascript未来](./future.md)