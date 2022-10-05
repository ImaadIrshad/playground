fn main() {
    println!("Hello World Rust!");
    practice();
}

fn practice() {
    let mut value = 0;
    loop {
        println!("The current value of the variable is {:?}", value);
        value += 1;
        if value == 5 {
            break;
        }
    }
}