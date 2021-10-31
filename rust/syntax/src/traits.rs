
// Each type implementing this trait must provide its own custom behavior for the body of the method.
// The compiler will enforce that any type that has the Summary trait will have the method summarize defined with this signature exactly.
//
pub trait Summary {
    fn summarize(&self) -> String;
}

pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{}, by {} ({})", self.headline, self.author, self.location)
    }
}

// One restriction to note with trait implementations is that we can implement a trait on a type only if either the trait or the type is local to our crate. 
// But we can’t implement external traits on external types.
// 
// Sometimes it’s useful to have default behavior for some or all of the methods in a trait instead of requiring implementations for all methods on every type.
// we can keep or override each method’s default behavior.
pub trait Summary {
    fn summarize(&self) -> String {
        String::from("(Read more...)")
    }
}

// Trait as Parameters
pub fn notify(item: &impl Summary) {
    println!("Breaking news! {}", item.summarize());
}
// The impl Trait syntax works for straightforward cases but is actually syntax sugar for a longer form, which is called a trait bound; 
pub fn notify<T: Summary>(item: &T) {
    println!("Breaking news! {}", item.summarize());
}

// we specify in the notify definition that item must implement both Display and Summary. We can do so using the + syntax
pub fn notify(item: &(impl Summary + Disaplay)) {
}
pub fn notify<T: Summary + Disaplay>(item: &T) {
}

pub fn some_fn<T: Disaplay + Clone, U: Clone + Debug>(t: &T, u:&U) -> i32 {
}
pub fn some_fn<T,U>(t: &T,u:&U) -> i32 
    where T: Disaplay + Clone,
          U: Clone + Debug {
}

fn return_summarizable() -> impl Summary {
}

// blanket implementation
// 我们可以对任何实现了 Display trait 的类型调用由 ToString 定义的 to_string 方法。
impl<T: Display> ToString for T {
    // --snip--
}


