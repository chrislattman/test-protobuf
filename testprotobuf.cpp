#include <iostream>
#include <string>

#include "contacts.pb.h"

int main() {
    contacts::Contact contact;

    contact.set_index(42);
    contact.set_first_name("John");
    contact.set_last_name("Smith");

    auto* home = contact.add_phone_numbers();
    home->set_phone_type("home");
    home->set_number("123-456-7890");
    auto* work = contact.add_phone_numbers();
    work->set_phone_type("work");
    work->set_number("012-345-6789");

    std::cout << contact.DebugString() << std::endl;
    std::string data;
    contact.SerializeToString(&data);
    std::cout << std::boolalpha << (data.length() == 59) << std::endl;
    contacts::Contact recovered;
    if (!recovered.ParseFromString(data)) {
        std::abort();
    }
    std::cout << recovered.DebugString() << std::endl;

    return 0;
}
