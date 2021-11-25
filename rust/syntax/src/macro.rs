
// macros are a way of writing code that writes other code, which is known as metaprogramming. 
// function can take a variable number of parameters
// macros are expanded before the compiler interprets the meaning of the code
// you’re writing Rust code that writes Rust code
// You must define macros or bring them into scope before you call them in a file
// macro_rules!将来会被废弃

// declarative marcos
// example
  println!("declarative")
// Macros also compare a value to patterns that are associated with particular code: in this situation, the value is the literal Rust source code passed to the macro; the patterns are compared with the structure of that source code; and the code associated with each pattern, when matched, replaces the code passed to the macro. This all happens during compilation.
// 宏也将一个值和包含相关代码的模式进行比较；此种情况下，该值是传递给宏的 Rust 源代码字面值，模式用于和传递给宏的源代码进行比较，同时每个模式的相关代码则用于替换传递给宏的代码。所有这一切都发生于编译时。
#[macro_export] // The #[macro_export] annotation indicates that this macro should be made available
macro_rules! vec {
    // 一对括号包含了整个模式。接下来是美元符号（ $ ），后跟一对括号，捕获了符合括号内模式的值以用于替换后的代码。$() 内则是 $x:expr ，其匹配 Rust 的任意表达式，并将该表达式记作 $x。$() 之后的逗号说明一个可有可无的逗号分隔符可以出现在 $() 所匹配的代码之后。紧随逗号之后的 * 说明该模式匹配零个或更多个 * 之前的任何模式。
    ($($x:expr), *) => {
        {
            let mut temp_vec = Vec::new();
            $(
                temp_vec.push($x);
            )*
            temp_vec
        }
    }
}
// 当以 vec![1, 2, 3]; 调用宏时，$x 模式与三个表达式 1、2 和 3 进行了三次匹配。
// 对于每个（在 => 前面）匹配模式中的 $() 的部分，生成零个或更多个（在 => 后面）位于 $()* 内的 temp_vec.push() ，生成的个数取决于该模式被匹配的次数。
// Used in a pattern.
macro_rules! pat {
    ($i:ident) => (Some($i))
}
if let pat!(x) = Some(1) {
    assert_eq!(x, 1);
}
// Used in a type.
macro_rules! Tuple {
    { $A:ty, $B:ty } => { ($A, $B) };
}
type N2 = Tuple!(i32, i32);



// procedural macros
// Procedural macros accept some code as an input, operate on that code, and produce some code as an output rather than matching against patterns and replacing the code with other code as declarative macros do.
//  Custome #[derive] macros: added with the derive attribute used on structs and enums
#[some_attribute]
pub fn some_name(input: TokenStream) -> TokenStream {
}

pub trait HelloMacro {
    fn hello_macro();
}

use hello_macro::HelloMacro;
use hello_macro_derive::HelloMacro;

#[derive(HelloMacro)]
struct Pancakes;

fn main() {
    Pancakes::hello_macro();
}

extern crate proc_macro;

// defined macro
use crate::proc_macro::TokenStream;
use quote::quote;
use syn;

#[proc_macro_derive(HelloMacro)]
pub fn hello_macro_derive(input: TokenStream) -> TokenStream {
    // 将 Rust 代码解析为语法树以便进行操作
    let ast = syn::parse(input).unwrap();

    // 构建 trait 实现
    impl_hello_macro(&ast)
}

fn impl_hello_macro(ast: &syn::DeriveInput) -> TokenStream {
    let name = &ast.ident;
    let gen = quote! {
        impl HelloMacro for #name {
            fn hello_macro() {
                println!("Hello, Macro! My name is {}", stringify!(#name));
            }
        }
    };
    gen.into()
}


// Attribute-like: define custom attributes usable on any item
//
// Function-like: look like function calls but operate on the tokens specified as their argument
