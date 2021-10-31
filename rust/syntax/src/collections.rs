
// Vectors allow you to store more than one value in a single data structure that puts all the values next to each other in memory.
let v: Vec<i32> = Vec::new();
// It’s more common to create a Vec<T> that has initial values, and Rust provides the vec! macro for convenience.
let v = vec![1,2,3]

let mut v2 = Vec::new();
v2.push(5);
v2.push(6);

// with indexing syntax or the get method.
let third: &i32 = &v[2];
// When the get method is passed an index that is outside the vector, it returns None without panicking. 
match v.get(2) {
    Some(t) => println!("The xxx is {}", t),
    _ => println!("I don't konw");
}

let first = &v[0];
// Adding a new element onto the end of the vector might require allocating new memory and copying the old elements to the new space, if there isn’t enough room to put all the elements next to each other where the vector currently is. 
v.push(6); // TODO: Error

for item in &v {
    println!("{}", item)
}
for i in &mut v {
    // We have to use the dereference operator (*) to get to the value in i before we can use the += operator. 
    *i += 50;
}


use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(String::from("Blue"),10);

let teams = vec![String::from("Blue"), String::from("Yellow")];
let initial_scores = vec![10, 50];

// The collect method gathers data into a number of collection types, including HashMap. 
//  Rust can infer the types that the hash map contains based on the types of the data in the vectors.
let mut scores: HashMap<_,_> = teams.into_iter().zip(initial_scores.into_iter()).collect();

let score = scores.get(String::from("Blue"));

for (key,value) in &scors {
    println!("{}:{}", key, value);
}

// If we insert a key and a value into a hash map and then insert that same key with a different value, the value associated with that key will be replaced.
scores.insert(String::from("Blue Haha"), 10);
// The return value of the entry method is an enum called Entry that represents a value that might or might not exist. 
// The or_insert method on Entry is defined to return a mutable reference to the value for the corresponding Entry key if that key exists, and if not, inserts the parameter as the new value for this key and returns a mutable reference to the new value. 
scores.entry(String::from("Yellow")).or_insert(50);
