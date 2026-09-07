using Google.Protobuf;
using Contacts;

Contact contact = new()
{
    Index = 1,
    FirstName = "John",
    LastName = "Smith"
};

contact.PhoneNumbers.Add(new PhoneNumber
{
    PhoneType = "home",
    Number = "123-456-7890"
});
contact.PhoneNumbers.Add(new PhoneNumber
{
    PhoneType = "work",
    Number = "012-345-6789"
});

Console.WriteLine(contact);
byte[] data = contact.ToByteArray();
Console.WriteLine(data.Length == 59);
Contact recovered = Contact.Parser.ParseFrom(data);
Console.WriteLine(recovered);
