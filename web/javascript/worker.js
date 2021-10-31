//在通过Worker()构建一个Worker的时候，该代码会运行的一个全新的JavaScript运行环境中，完全和创建Worker的线程隔离开
// WorkerGlobalScope全局对象表示了该新的运行环境
// 全局对象是WorkerGlobalScope，例如WorkerGlobalScope.postMessage()
importScripts("./closure.js");//使用该方法来加载需要的库代码例如 importScripts("js1","js2"/*...*/)

onmessage=function (e) {
    var data = JSON.parse(e.data);
    switch (data.command) {
        case "postMessage": {
            //可以将消息传递致外部,触发外部的onmessage事件
            postMessage("hello");
        } break;
        case "close": {
            postMessage("will close");
            close();
        } break;
        default:
            break;
    }
}