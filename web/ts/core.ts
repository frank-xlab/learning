// One of TypeScript’s core principles is that type-checking focuses on the shape that values have

// 约束参数
function printLabel(obj: { label: string }) {}

interface LabelValue {
  label: string
}
function printILabel(obj: LabelValue) {}

interface SquareConfig {
  color: string
  // optional properties
  width?: number
  // readonly
  readonly category: string
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: 'red',
    area: 1
  }
}

createSquare({ width: 1 } as SquareConfig)

let p1: ReadonlyArray<number> = [1, 2, 3, 4, 5]

// 约束签名
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc = function(source: string, subString: string) {
  return true
}

// Indexable Types
interface StringArray {
  [index: number]: string
}
let myArray: StringArray = ['bob', 'fred']

// a string index declares that obj.property is also available as obj["property"]
interface NumberDictionary {
  [index: string]: string
  name: string
}

let numDic: NumberDictionary

// 约束通信协议
interface IFilter {
  currentTime: Date
  execute(req): Object
}
class AuthenFilter implements IFilter {
  currentTime: Date
  execute(req) {
    return {}
  }
}

// extending interfaces
interface Shape {
  color: string
}
interface Location {
  longitude: string
  latitude: string
}
interface Square extends Shape, Location {
  width: number
}

// to specify that your code works with only subclasses that have certain properties.
class Control {
  private state: any
}
// When an interface type extends a class type it inherits the members of the class but not their implementations.
// Interfaces inherit even the private and protected members of a base class.
interface Selectable extends Control {
  select(): void
}
// interface type can only be implemented by that class or a subclass of it.
class Button extends Control implements Selectable {
  private _name: string
  get name(): string {
    return this._name
  }
  set name(val) {
    this._name = val
  }
  static props = {}
  select() {
    console.log(this.name)
  }
  private test() {}
  public print() {}
}

// 依赖倒置
interface ClockConstructor {
  new (hour: number, minute: number)
}
function createClock(ctor: ClockConstructor, hour: number, minute: number) {
  return new ctor(hour, minute)
}
class LargeClock {
  constructor(hour: number, minute: number) {}
}
class SmallClock {
  constructor(hour: number, minute: number) {}
}
let clock = createClock(LargeClock, 1, 2)
let clock2 = createClock(SmallClock, 1, 2)

abstract class Animal {
  abstract makeSound(): void
  move(): void {}
}

let myAdd: (baseValue: number, increment: number) => number = function(
  x: number,
  y: number
): number {
  return x + y
}

function buildName(first: string, last?: string) {}
function buildNameTwo(first: string, last = 'world') {}
function collectNames(fist: string, ...restNames: string[]) {}
let buildNameFun: (fname: string, ...rest: string[]) => string = function(
  fname,
  ...rest
) {
  return ''
}

// this: void means that addClickListener expects onclick to be a function that does not require a this type.
function f(this: void) {
  // make sure `this` is unusable in this standalone function
}
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void
}
// onClickBad must be called on an instance of Handler
class Handler {
  onClickBad(this: Handler, e: Event) {
    // oops, used this here. using this callback would crash at runtime
  }
}
