// 泛型 generic
function identity<T>(arg: T): T {
  return arg
}

let myIdentity: <U>(arg: U) => U = identity

class GenericNumber<T> {
  value: T
  add: (x: T, y: T) => T
}

interface LenghWise {
  length: number
}
function loggingIdentity<T extends LenghWise>(arg: T): T {
  return arg
}

// You can declare a type parameter that is constrained by another type parameter.
function getProperty<T, K extends keyof T>(obj: T, key: K) {}
let person = { name: 1, b: 2 }
getProperty(person, 'name')

function create<T>(c: { new (): T }): T {
  return new c()
}
