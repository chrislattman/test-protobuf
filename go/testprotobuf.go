package main

import (
	"fmt"

	"example.com/test-protobuf/contacts"
	"google.golang.org/protobuf/proto"
)

func main() {
	contact := &contacts.Contact{
		Index: 1,
		FirstName: "John",
		LastName: "Smith",
	}
	contact.PhoneNumbers = append(
		contact.PhoneNumbers, 
		&contacts.PhoneNumber{
			PhoneType: "home",
			Number: "123-456-7890",
		},
	)
	contact.PhoneNumbers = append(
		contact.PhoneNumbers,
		&contacts.PhoneNumber{
			PhoneType: "work",
			Number: "012-345-6789",
		},
	)

	fmt.Println(contact)
	data, _ := proto.Marshal(contact) // marshals to []byte
	fmt.Println(len(data) == 59)
	recovered := &contacts.Contact{}
	err := proto.Unmarshal(data, recovered)
	if err != nil {
		panic(err)
	}
	fmt.Println(recovered)
}
