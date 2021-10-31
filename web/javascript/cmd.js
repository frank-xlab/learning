
//在 CMD 规范中，一个模块就是一个文件。代码的书写格式如下：
define(factory);

//define 接受 factory 参数，factory 可以是一个函数，也可以是一个对象或字符串。
//factory 为对象、字符串时，表示模块的接口就是该对象、字符串。比如可以如下定义一个 JSON 数据模块：
define({ "foo": "bar" });

//也可以通过字符串定义模板模块：
define('I am a template. My name is {{name}}.');

//factory 为函数时，表示是模块的构造方法。执行该构造方法，可以得到模块向外提供的接口。factory方法在执行时，默认会传入三个参数：require、exports 和 module：
define(function(require, exports, module) {

  // 模块代码

});


//define 也可以接受两个以上参数。字符串 id 表示模块标识，数组 deps 是模块依赖
define('hello', ['jquery'], function(require, exports, module) {

  // 模块代码

});//id 和 deps 参数可以省略。省略时，可以通过构建工具自动生成。(带 id 和 deps 参数的 define 用法不属于 CMD 规范，而属于 Modules/Transport 规范。)


//可用来判定当前页面是否有 CMD 模块加载器
if (typeof define === "function" && define.cmd) {
  // 有 Sea.js 等 CMD 模块加载器存在
}




//require 是一个方法，接受 模块标识 作为唯一参数，用来获取其他模块提供的接口
define(function(require, exports) {

  // 获取模块 a 的接口
  var a = require('./a');

  // 调用模块 a 的方法
  a.doSomething();

});


//require.async 方法用来在模块内部异步加载模块，并在加载完成后执行指定回调
define(function(require, exports, module) {

  // 异步加载一个模块，在加载完成时，执行回调
  require.async('./b', function(b) {
    b.doSomething();
  });

  // 异步加载多个模块，在加载完成时，执行回调.
  require.async(['./c', './d'], function(c, d) {
    c.doSomething();
    d.doSomething();
  });

});//(require 是同步往下执行，require.async 则是异步回调执行)

//使用模块系统内部的路径解析机制来解析并返回模块路径require.resolve(id)
define(function(require, exports) {

  console.log(require.resolve('./b'));
  // ==> http://example.com/path/to/b.js

});//这可以用来获取模块路径，一般用在插件环境或需动态拼接模块路径的场景下




//exports 是一个对象，用来向外提供模块接口。
define(function(require, exports) {

  // 对外提供 foo 属性
  exports.foo = 'bar';

  // 对外提供 doSomething 方法
  exports.doSomething = function() {};

});

//除了给 exports 对象增加成员，还可以使用 return 直接向外提供接口。
define(function(require) {

  // 通过 return 直接提供接口
  return {
    foo: 'bar',
    doSomething: function() {}
  };
});


//module 是一个对象，上面存储了与当前模块相关联的一些属性和方法。
//module.id String 模块的唯一标识
define('id', [], function(require, exports, module) {

  // 模块代码

});
//module.uri String    根据模块系统的路径解析规则得到的模块绝对路径
define(function(require, exports, module) {

  console.log(module.uri); 
  // ==> http://example.com/path/to/this/file.js

});//一般情况下（没有在 define 中手写 id 参数时），module.id 的值就是 module.uri，两者完全相同


//module.exports Object     当前模块对外提供的接口。
define(function(require, exports, module) {

  // exports 是 module.exports 的一个引用
  console.log(module.exports === exports); // true

  // 重新给 module.exports 赋值
  module.exports = new SomeClass();//类的实例

  // exports 不再等于 module.exports
  console.log(module.exports === exports); // false

});






