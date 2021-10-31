// Rust accomplishes this by performing monomorphization of the code that is using generics at compile time. 
// Monomorphization is the process of turning generic code into specific code by filling in the concrete types that are used when compiled.

struct Point<T> {
    x: T,
    y: T,
}

// declare T just after impl so we can use it to specify that we’re implementing methods on the type Point<T>. By declaring T as a generic type after impl, Rust can identify that the type in the angle brackets in Point is a generic type rather than a concrete type.
impl<T> Point<T> {
    // impl的T能让Rust将Point的T识别为generic而不是具体的类型，因为这个T参数可以随便定义
    fn compare(&self) -> T {
        &self.x
    }
}
impl<T, U> Point<T, U> {
    fn mixup<V, W>(self, other: Point<V, W>) -> Point<T, W> {
        Point {
            x: self.x,
            y: other.y,
        }
    }
}

let integer = Some(5);
let float = Some(5.0);
// When Rust compiles this code, it performs monomorphization. 
// During that process, the compiler reads the values that have been used in Option<T> instances and identifies two kinds of Option<T>: one is i32 and the other is f64. 
// As such, it expands the generic definition of Option<T> into Option_i32 and Option_f64, thereby replacing the generic definition with the specific ones.
// Because Rust compiles generic code into code that specifies the type in each instance, we pay no runtime cost for using generics. When the code runs, it performs just as it would if we had duplicated each definition by hand. The process of monomorphization makes Rust’s generics extremely efficient at runtime.
enum Option_i32 {
	Some(i32),
	None,
    }
    
    enum Option_f64 {
	Some(f64),
	None,
    }
    
let integer = Option_i32::Some(5);
let float = Option_f64::Some(5.0);