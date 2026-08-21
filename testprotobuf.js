const protobuf = require("protobufjs");

async function main() {
    const root = await protobuf.load("contacts.proto");
    const Contact = root.lookupType("contacts.Contact");
    const PhoneNumber = root.lookupType("contacts.PhoneNumber");

    const home = PhoneNumber.create({
        phoneType: "home",
        number: "123-456-7890"
    });
    const work = PhoneNumber.create({
        phoneType: "work",
        number: "012-345-6789"
    });

    const contact = Contact.create({
        index: 1,
        firstName: "John",
        lastName: "Smith",
        phoneNumbers: [home, work]
    });

    console.log(contact);
    const data = Contact.encode(contact).finish(); // serializes to Uint8Array
    console.log(data.length === 59);
    const recovered = Contact.decode(data);
    console.log(recovered);
}

main();
