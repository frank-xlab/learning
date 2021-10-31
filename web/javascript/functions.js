function name(params) {
   return params; 
}
var obj=new Object();
name.bind(obj); // 将name方法绑定到obj方法上