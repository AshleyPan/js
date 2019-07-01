# string #

简介: string是js的基本数据类型,一个string类型由0或者多个16位无符号整形(内存大小)值构成,string以UTF-16格式展示,当展示字符超出UTF-16的时候，string内部以两个字符长度组合解析。string类型没有属性和方法，当操作string类型的时候，js引擎会自动生成一个String对象，string操作结束后这个对象会自动被销毁。

### 目录 ###

- [初始化](#initial)
- [fromCharCode](#fromCharCode)
- [fromCodePoint](#fromCodePoint)
- [charAt](#charAt)
- [charCodeAt](#charCodeAt)
- [codePointAt](#codePointAt)
- [raw](#raw)
- [concat](#concat)
- [endsWith](#endsWith)
- [includes](#includes)
- [indexOf](#indexOf)
- [lastIndexOf](#lastIndexOf)
- [localeCompare](#localeCompare)
- [面试题](#questions)

<span id="initial"></span>
#### 初始化 ####

初始化string的基本方式如下:

    // 直接赋值,string存放在常量池中（属于当前作用域的栈内存）
    let string1 = 'simple';  

    // 调用String构造器,返回一个string,string存放在常量池中
    let string2 = String(""simple"");

    // 初始化String实例, 返回一个String实例， 实例存放在堆内存中
    let string3 = new String("simple");  

    console.log(string1, typeof string1);      // simple string
    console.log(string2, typeof string2);      // simple string
    console.log(string3, typeof string3);      // String {simple} object

<span id="fromCharCode"></span>
#### fromCharCode ####

fromCharCode是String对象的方法(静态方法),用于UTF-16与unidcode解析
###
	/*
     * @desc 输出unicode字符串,最大解析0xFFFF个字符
     * @param 16进制, 接收多个参数
     * @return string
     */
     let a = String.fromCharCode(0x20BB7);
     let b = String.fromCharCode(0x0BB7);
     let c = String.fromCharCode(0x0BB7, 0x96);
     
     console.log(a === b);   // true
     console.log(c);         // markdown 不能解析，在chrome上可以运行出结果

<span id="fromCodePoint"></span>
#### fromCodePoint ####

fromCodePoint用来解析unicode,是fromCharCode的增强版,最大可以解析0x10FFFF;

###
	/*
     * @desc 解析unicode,最大解析0x10FFFF个字符
     * @param 16进制, 接收多个参数
     * @return string
     */
	let a = String.fromCodePoint(0x20BB7);

    console.log(a);    // markdown 不能解析，在chrome上可以运行出结果
###

<span id="charAt"></span>
### charAt ###

实例方法,获取字符串中的单个字符

###
	/* 
     * @desc 获取单个UTF-16字符
     * @param number 获取字符串中的第pos位上的字符
     * @return string
     */
	let a = "hello";
	let b = "\u{20bb7}";   // unicode 字符
	let posChar1 = a.charAt(0);
	let posChar2 = a.charAt(5);
	let posChar3 = b.charAt(0);

	console.log(posChar1);    // h
	console.log(posChar2);    // ''; pos大于a.length 返回''
    console.log(posChar3);    // 返回乱码; 由于unicode是4字节存储,charAt无法正确解析
###

<span id="charCodeAt"></span>
### charCodeAt ###

实例方法,获取指定字符(utf-16)的十进制数值

###
	/* 
     * @desc 返回字符的十进制数值
     * @param number 解析字符串中的第pos位上的字符
     * @return number 十进制数值
     */
	let a = "A";
	let b = "\u{20bb7}";   // unicode 字符
	let charValue1 = a.charCodeAt(0);
	let charValue2 = a.charCodeAt(1);
	let charValue3 = b.charCodeAt(0);   // b.length === 2

	console.log(charValue1);    // 65
	console.log(charValue2);    // NAN; pos大于a.length 返回NAN
    console.log(charValue3);    // 55362; charCodeAt会把unicode当成两个2符,这里只会返回第一个字符的十进制数值
###

<span id="codePointAt"></span>
### codePointAt ###

实例方法，charCodeAt的增强版，用于解析unicode字符的十进制数值

###
	/*
     * @desc 返回指定字符的十进制数值
	 * @param number 解析字符串中的第pos位上的字符
	 * @return number 十进制数值
	 */
	let a = "\u{20bb7}";
	let charValue1 = a.codePointAt(0)
	let charValue2 = a.codePointAt(0)
	let charValue3 = a.codePointAt(2)

	console.log(charValue1);    // 134071, 正确的解析值
	console.log(charValue2);    // 57271, 本质上调用了charCodeAt，只不过这里一次性解析了(pos, pos+2)
	console.log(charValue3);    // undefined
###

<span id="raw"></span>
### raw ###

raw方法用来构造新的字符串，raw方法有两个: template和substitutions,前者原始字符串,后者是等待插入的内容

### 
	/*
     * @desc 根据模板生成字符串
     * @param template/object 
     * @param string ...rest形式参数
     */
	let a = String.raw({raw: 'hlo'}, 'e', 'l');  // 必须含有raw属性，raw的值是原始字符串
    let b = String.raw`\n`;   // es6 -> String.raw({raw: '\n'}, '\');
    console.log(a);    // hello
	console.log(b);    // es5下: \n; es6下: \\n
###

<span id="concat"></span>
### concat ###

实例方法,用来拼接字符串

### 
	/*
	 * @desc 将参数拼接成字符串
	 * @param 带拼接的字符串, rest参数
	 * @return string
	 */
	let a = "1";
	let b = a.concat(2, 3);
	
	console.log(b);    // 123, 通过concat拼接多个字符串的效率比操作符+更高！，原因是，+每次拼接都会先生产一个新的string对象
###

<span id="endsWith"></span>
### endsWith ###

实例方法, 用以判断字符串是否以预期结束

###
	/*
	 * @desc 判断字符串结尾
	 * @param string 预期字符串
	 * @param number 结束pos， 默认是原字符串长度
	 * @return boolean
	 */
	let a = "hello world";
	let isEnd1 = a.endsWith(ld);
    let isEnd2 = a.endsWith(wo, 8);    //判断是否包含预期字符串, 可以用includes代替

	console.log(isEnd1);       // true
    console.log(isEnd2);       // true;  a.length = 11
###

<span id="includes"></span>
### includes ###

实例方法, 用于判断字符串中是否有指定字符

###
	/*
     * @desc 查找指定字符串是否存在
	 * @param string 查找字符串
	 * @param number 查找起点, 默认从源字符串第一位开始搜索
	 * @return boolean
	 */
	let a = "hello";
    console.log(a.includes('ll'));  // true
	console.log(a.includes('e', 2));  // false
###

<span id="indexOf"></span>
### indexOf ###

实例方法, 用于返回目标字符串在源字符串的起始位置

### 
	/*
	 * @desc 返回目标字符串在源字符串的起始位置，未找到返回-1
	 * @param string 目标字符串
	 * @param number 查找起点, 默认是0
	 * @return number 目标字符串在源字符串的起点
	 */
	let a = "hello";
	let pos = a.indexOf('ll');
	let posErr = a.indexOf('lr');

	console.log(pos);    // 2
    console.log(posErr);   // -1, 未查找到则返回-1
###

<span id="lastIndexOf"></span>
### lastIndexOf ###

实例方法, 用于返回目标字符串在源字符串的终点位置

### 
	/*
	 * @desc 返回目标字符串在源字符串的终点位置，未找到返回-1
	 *       lastIndexOf与indexOf的区别是，前者返回的是终点位置
	 * @param string 目标字符串
	 * @param number 查找起点，默认是源字符串的长度
	 * @return number 目标字符串在源字符串的终点位置
	 */

	let a = "hello";
	let pos = a.indexOf("ll")
	let posOfLast = a.lastIndexOf("ll");
	let posErr = a.lastInfdexOf("ly");

	console.log(pos);              // 2
	console.log(posOfLast);        // 3
	console.log(posErr);           // -1
###

<span id="localeCompare"></span>
### localeCompare ###

实例方法，用于对字符串进行排序

###
	/*
	 * @desc 用于对指定字符串与源字符串依据unicode格式进行排序
	 * @param string 目标字符串
	 * @param ?string|?array locales，指定语言类型
	 * @param ?object 其他辅助配置
	 * @return number 相等返回0，目标字符串首字母unicode值小于源字符串返回负数，否则返回正数
	 */

	let a = "hello";
	let equal = a.localeCompare("hello");
    let equalLocales = a.localeCompare("HELLO", "co", {sensitivity: "base"}); // "co" 不可缺省
	let bigger = a.localeCompare("HELLO");
	let smaller = a.localeCompare("ello");

	console.log(equal);            // 0
	console.log(equalLocales);     // 0
	console.log(bigger);           // 1 ecma-262只规定了相等返回0，大于返回负数，小于返回正数
	console.log(smaller);          // -1 ecma-262只规定了相等返回0，大于返回负数，小于返回正数
###

<span id="questions"></span>
#### 面试题 ####

1. 执行以下代码，输入是什么?（考察点： 基本类型和封装类型初始化的区别）

###
    var a = "hello"; 
    var b = String("hello");
    var c = new String("hello");
    
    console.log(a === b);
    console.log(a === c);
    console.log(b === c);
###

2. 执行以下代码，输出是什么? (考察点: 基本类型赋值，操作的是变量值还是内存地址)

###
    var a = "1";
	var b = a;
	var b = "2";

    console.log(a, b);
###