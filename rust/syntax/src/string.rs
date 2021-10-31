// A String is a wrapper over a Vec<u8>.
// Each Unicode scalar value in that string takes 2 bytes of storage. 
// strings are UTF-8 encoded,
// the string slice str that is usually seen in its borrowed form &str. 
let mut s = String::new();

let data = "Initial contents";
let mut s = data.to_string();
let s1 = "Hello world".to_string();
let s2 = String::from("Nihao");
s.push_str(s2);
// The push method takes a single character as a parameter and adds it to the String.
s.push('!')

// The + operator uses the add method: fn add(self, s: &str) -> String
// The reason we’re able to use &s2 in the call to add is that the compiler can coerce the &String argument into a &str.
// When we call the add method, Rust uses a deref coercion, which here turns &s2 into &s2[..]
// This means s1 in Listing 8-18 will be moved into the add call and no longer be valid after that. 
let s3 = s1 + &s2; 
// The format! macro works in the same way as println!,
let s4 = format!("{}-{}", s3, s2)

let origin = "hello world";
// s5 will be a &str
let s5 = &hello[0..4];

for c in "oh ha".chars() {
    println!("{}", c)
}
for b in "oh ha".bytes() {
    println!("{}", b)
}
