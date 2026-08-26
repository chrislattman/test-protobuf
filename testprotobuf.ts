import $root from "./contacts.cjs";
const contacts = $root.contacts;

function main(): void {
    const home = contacts.PhoneNumber.create({
        phoneType: "home",
        number: "123-456-7890"
    });
    const work = contacts.PhoneNumber.create({
        phoneType: "work",
        number: "012-345-6789"
    });

    const contact = contacts.Contact.create({
        index: 1,
        firstName: "John",
        lastName: "Smith",
        phoneNumbers: [home, work]
    });

    console.log(contact);
    const data: Uint8Array = contacts.Contact.encode(contact).finish();
    console.log(data.length === 59);
    const recovered = contacts.Contact.decode(data);
    console.log(recovered);
}

main();
