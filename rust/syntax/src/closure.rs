
// Rust’s closures are anonymous functions you can save in a variable or pass as arguments to other functions.
// start with a pair of vertical pipes (|), inside which we specify the parameters to the closure; this syntax was chosen because of its similarity to closure definitions in Smalltalk and Ruby. these are optional if the closure body is a single expression. 

let expensive_coosure = |num,num2| {
    thread::sleep(Duration::from_secs(2));
    num2
}

let expensive_closure = |num: u32| -> u32 {
    println!("calculating slowly...");
    thread::sleep(Duration::from_secs(2));
    num
};

// memoization or lazy evaluation.
//
// The Fn traits are provided by the standard library. All closures implement at least one of the traits: Fn, FnMut, or FnOnce.
struct Cacher<T>
    where T: Fn(u32) -> u32
{
    calculation: T,
    value: Option<u32>
}
