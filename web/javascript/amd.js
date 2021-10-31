

//创建一个名为"alpha"的模块，使用了require，exports，和名为"beta"的模块:
define("alpha", ["require", "exports", "beta"], function (require, exports, beta) {
       exports.verb = function() {
           return beta.verb();
           //Or:
           return require("beta").verb();
       }
   });
   //一个返回对象的匿名模块：
   define(["alpha"], function (alpha) {
       return {
         verb: function(){
           return alpha.verb() + 2;
         }
       };
   });
   //一个没有依赖性的模块可以直接定义对象：
   define({
     add: function(x, y){
       return x + y;
     }
   });
   
   //一个使用了简单CommonJS转换的模块定义：
   define(function (require, exports, module) {
     var a = require('a'),
         b = require('b');

     exports.action = function () {};
   });