
// Struct
// Define User Struct
struct User {
    name: String,
    email: String
};
// Create the instance
let user = User {
    name: String::from("World"),
    email: String::from("hello@world.com")
};
// Modify field
user.email = String::from("world@hello.com");

let name = String::from("Human")
let user2 = User {
    name,
    email: String::from("human@hello.com")
}

// The remaining fields not explicitly set should have the same value as the fields in the given instance.
let user3 = User {
    name: String::from("Man"),
    ..user2
}

// Tuple Struct
// Define Color Struct
struct Color(u32,u32,u32);
// Destructure them into their individual pieces, you can use a . followed by the index to access an individual value
let black = Color(0,0,0);
// black.0 / black.1 / black.2

// Unit-like structs can be useful in situations in which you need to implement a trait on some type but don’t have any data that you want to store in the type itself.
struct World;

impl User {
    fn say(&self, words: &String ) -> String {
        self.name + words
    }

    fn oh(name: &String) -> User {
        User {
            name,
            email: String::from("oh@hello.com")
        }
    }
}

let words = String::from("Hello world !")
user.say(&words)


