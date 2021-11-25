use ferris_says::say;
use std::io;
use std::io::{stdout, BufWriter};
use rand::Rng;
use std::cmp::Ordering;

fn main() {
    let stdout = stdout();
    let message = String::from("Hello fellow Rustaceans!");
    let width = message.chars().count();

    let mut writer = BufWriter::new(stdout.lock());

    let secret_number = rand::thread_rng().gen_range(1..101);
    println!("Secret the number {}",secret_number);

    println!("Guess the number!");
    println!("Please input your guess.");

    let mut guess = String::new();
    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {}", guess);

    let guess: u32 = guess.trim().parse().expect("Please type a number!");

    match guess.cmp(&secret_number) {
        Odering::Less => println!("Too small"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }

    println!("Hello, world!");

    say(message.as_bytes(), width, &mut writer).unwrap();
}
