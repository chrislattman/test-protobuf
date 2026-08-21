from contacts_pb2 import Contact, PhoneNumber

contact = Contact(
    index=1,
    first_name="John",
    last_name="Smith",
)

contact.phone_numbers.append(
    PhoneNumber(
        phone_type="home",
        number="123-456-7890",
    )
)
contact.phone_numbers.append(
    PhoneNumber(
        phone_type="work",
        number="012-345-6789",
    )
)

print(contact)
data = contact.SerializeToString() # serializes to bytes object
# TODO: check that data equals some byte string
recovered = Contact()
recovered.ParseFromString(data)
print(recovered)
