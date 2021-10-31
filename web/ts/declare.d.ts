
// global.d.ts / global-plugin.d.ts / global-modifying-module.d.ts
// A global library is one that can be accessed from the global scope (i.e. without using any form of import).

// module.d.ts / module-class.d.ts / module-function.d.ts

// 在module模块中修改了plugin插件，讲plugin声明与module声明进行合并
// module-plugin.d.ts

// 其他方式
/// <reference types="someLib" />
import * as moment from 'moment'

// 对于UMD 类库不能使用 reference形式

// 不要把一般的重载放在精确的重载前面

/* 错误 */
declare function fn(x: any): any;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;