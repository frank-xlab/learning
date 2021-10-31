
// How to create threads to run multiple pieces of code at the same time
//
// Problem1: Race conditions, where threads are accessing data or resources in an inconsistent order
// Problem2: Deadlocks, where two threads are waiting for each other to finish using a resource the other thread has, preventing both threads from continuing
// Problem3: Bugs that happen only in certain situations and are hard to reproduce and fix reliably

// Programming language-provided threads are known as green threads. the green-threaded model is called the M:N model: there are M green threads per N operating system threads
// Rust standard library only provides an implementation of 1:1 threading.
// Rust needs to have nearly no runtime and cannot compromise on being able to call into C to maintain performance.

use std::thread;
use std::time::Duration;

fn main() {
    thread::spawn(||{
        thread::sleep(Duration::from_millis(1));
    })
}

// The return type of thread::spawn is JoinHandle. A JoinHandle is an owned value that, when we call the join method on it, will wait for its thread to finish.
let handle = thread::spawn(|| {
        for i in 1..10 {
            println!("hi number {} from the spawned thread!", i);
            thread::sleep(Duration::from_millis(1));
        }
});
// Calling join on the handle blocks the thread currently running until the thread represented by the handle terminates. Blocking a thread means that thread is prevented from performing work or exiting.
handle.join().unwrap();

// The move closure is often used alongside thread::spawn because it allows you to use data from one thread in another thread.
let v = vec![1, 2, 3];
let handle = thread::spawn(move || {
    println!("Here's a vector: {:?}", v);
});


// Message-passing concurrency, where channels send messages between threads

// ensuring safe concurrency is message passing, where threads or actors communicate by sending each other messages containing data.
//
// One major tool Rust has for accomplishing message-sending concurrency is the channel
// A channel in programming has two halves: a transmitter and a receiver. A channel is said to be closed if either the transmitter or receiver half is dropped.
use std::sync::mpsc; // mpsc stands for multiple producer, single consumer.
fn main() {
    let (tx, rx) = mpsc::channel();
}

// Send data
thread::spawn(move || {
   let val = String::from("hi");
   //
   tx.send(val).unwrap();
});

// Result<T,E>
//  block the main thread’s execution and wait until a value is sent down the channel.
let received = rx.recv().unwrap();
println!("Got: {}", received);

// The try_recv method doesn’t block, but will instead return a Result<T, E> immediately: an Ok value holding a message if one is available and an Err value if there aren’t any messages this time.
let received = rx.try_recv().unwrap();
// Shared-state concurrency, where multiple threads have access to some piece of data
// The Sync and Send traits, which extend Rust’s concurrency guarantees to user-defined types as well as types provided by the standard library

