
// Enum
// We can enumerate all possible variants, which is where enumeration gets its name.
enum IpVersion {
    V4,
    V6
}
let four = IpVersion::V4;
// You can put any kind of data inside an enum variant: strings, numeric types, or structs,
enum IpVersion2 {
    V4(String),
    V6(String)
}
let loopback = IpVersion2::V6(String::from("::1"));

impl IpVersion {
    fn call(&self) {

    }
}

let m = IpVersion::V4;
m.call();

// An enum that can encode the concept of a value being present or absent.
// This was a deliberate design decision for Rust to limit null’s pervasiveness and increase the safety of Rust code.
// Defined by the standard library 
enum Option<T> {
    Some(T),
    None,
}

let some_number = Some(5);
let absent_number: Option<i32> = None;

enum UsState {
    Alabama,
    Alaska
}
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!("State quarter from {:?}!", state);
            25
        },
    }
}

// The _ pattern will match any value.
let some_value = 0u8;
match some_value {
    1 => println("one"),
    _ => (), // 相当于switch中的default
}
// We want to do something with the Some(3) match but do nothing with any other Some<u8> value or the None value. 
if let 1 = some_value {
    println!("Three")
} else {
    println!("haha")
}

