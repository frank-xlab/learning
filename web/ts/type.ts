// TypeScript’s structural type system was designed based on how JavaScript code is typically written
// Type Compatibility
// 要赋值的对象必须含有类型的属性,则赋值是被允许的
// The reason for this assignment to be allowed is that ignoring extra function parameters is actually quite common in JavaScript.
// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;
// y = x; // OK 可以多传参数 但不能少传参数, 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型

// When comparing two objects of a class type, only members of the instance are compared.
// Static members and constructors do not affect compatibility.
// Private and protected members in a class affect their compatibility
interface Empty<T> {}
let x: Empty<number>
let y: Empty<string>

x = y // okay, y matches structure of x

interface NotEmpty<T> {
  data: T
}
let x1: NotEmpty<number>
let y2: NotEmpty<string>

x1 = y2 // error, x and y are not compatible

// In TypeScript, there are two kinds of compatibility: subtype and assignment.
// These differ only in that assignment extends subtype compatibility with rules to allow assignment to and from any and to and from enum with corresponding numeric values.
// 它们的不同点在于，赋值扩展了子类型兼容，允许给 any赋值或从any取值和允许数字赋值给枚举类型或枚举类型赋值给数字。
// 类型兼容性是由赋值兼容性来控制的

// A union type describes a value that can be one of several types
function pad(padding: string | number) {}

// Type Guards
;(<NotEmpty>x).func()

// User-Defined Type Guards
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}

// Type Aliases Type aliases create a new name for a type
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

type Tree<T> = {
  value: T
  left: Tree<T>
  right: Tree<T>
}

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class ScientificCalculator extends BasicCalculator {
  public constructor(value = 0) {
    super(value)
  }
  public sin() {
    this.value = Math.sin(this.value)
    return this
  }
  // ... other operations go here ...
}

let v = new ScientificCalculator(2)
  .multiply(5)
  .sin()
  .add(1)
  .currentValue()

// keyof T， 索引类型查询操作符。 对于任何类型 T， keyof T的结果为 T上已知的公共属性名的联合
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n])
}

// TypeScript提供了从旧类型中创建新类型的一种方式 — 映射类型
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
}
type Partial<T> = {
  [P in keyof T]?: T[P];
}