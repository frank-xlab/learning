// can make code more readable
// can make code easier to analyse
// can allow for reliable refactoring
// can allow for generally better IDE support
// can catch some (type related) errors early

// Basic Types
let canOpen: boolean = false;
let hex: number = 0xf00d;
let myName: string = 'jack';
let sentence: string = `hello world, my name is ${myName}`;

let list: number[] = [1, 2, 3];
let seqs: Array<number> = [1, 3, 4];

// Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
let x: [string, number];
x = ['hello', 100];

// Enums allow us to define a set of named constants.
enum Color {
  Red, // default number 0
  Blue
}
enum MyColor {
  Red = 1, // customer start at 1
  Blue
}
enum OtherColor {
  Red = 1,
  Blue = 5
}
let c: Color = Color.Red;
let colorName = Color[1];
// 序列化的时候可识别度高
enum SerializeColor {
  Red = 'Red',
  Blue = 'Blue'
}
// 描述已经存在的enum类型,不去真正生成该代码
// 声明已经有这个enum了
declare enum AmbientColor {
  Red,
  Blue
}
// 在编译过程中会完全删除掉,用该enum的地方用对应的常量进行替换
// completely removed during compilation. Const enum members are inlined at use sites
// cannot have computed members
const enum ConstantColor {
  Red,
  Blue
}

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = '123'.length
}

let future: any = 5;
future.customerFunc(); // no error

function printName(): void {}

// Function returning never must have unreachable end point,The never type represents the type of values that never occur
function error(msg: string): never {
  // stop execute and have unreachable end point
  throw new Error('error msg');
}

// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
let strLength: number = (<string>future).length;
let strLength1: number = (future as string).length;

// Optional Chaining
// when foo is defined, foo.bar.baz() will be computed; but when foo is null or undefined, stop what we’re doing and just return undefined.
let value2 = future?.bar.baz();

// nullish coalescing
// when it’s null or undefined, calculate bar() in its place
let value3 = future ?? printName();

// assertion functions
// throw an error if something unexpected happened
assert(value2 === 42)


// Recursive Type Aliases
// At the “top level” of a type alias, TypeScript will defer resolving type arguments to permit these patterns.
type Json =
    | string
    | number
    | boolean
    | null
    | { [property: string]: Json }
    | Json[];
