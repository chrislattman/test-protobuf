pub mod contacts {
    include!(concat!(env!("OUT_DIR"), "/contacts.rs"));
}

use contacts::{Contact, PhoneNumber};
use prost::Message;

fn main() {
    let contact = Contact {
        index: 1,
        first_name: "John".to_string(),
        last_name: "Smith".to_string(),
        phone_numbers: vec![
            PhoneNumber {
                phone_type: "home".to_string(),
                number: "123-456-7890".to_string(),
            },
            PhoneNumber {
                phone_type: "work".to_string(),
                number: "012-345-6789".to_string(),
            },
        ],
    };

    println!("{contact:?}");
    let data = contact.encode_to_vec(); // serialized to Vec<u8>
    // TODO: check that data equals some byte string
    let recovered = Contact::decode(data.as_slice()).unwrap();
    println!("{recovered:?}");
}
