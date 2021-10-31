#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}

// Define a module by starting with the mod keyword, Inside modules, we can have other modules
mod fire {
    mod fuel {
        fn add() {

        }
    }

    mod flame {
        fn start() {
            
        }
    }

    pub mod ohayo() {

    }
}

// The way privacy works in Rust is that all items are private by default.
pub fn open() {
    // Absolute path
    crate::fire::fuel::add();
    // Relative path
    fire::fuel::add();
}

mod back {
    fn say() {
        // using super at the start of the path. This is like starting a filesystem path with the .. syntax.
        super::open();
    }
}

// Re-exporting Names with pub use
pub use crate::front_of_house::hosting;
// 
use std::fmt::Result;
// re-name
use std::io::Result as IoResult;
// We can use nested paths to bring the same items into scope in one line
use std::{cmp::Ordering, io};
// Use self in the nested path,
use std::io::{self, Write};
// bring all public items defined in a path into scope
use std::collections::*;

// Rust to load the contents of the module from another file with the same name as the module.
pub mod hello_world;
