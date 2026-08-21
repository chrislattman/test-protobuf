import com.google.protobuf.InvalidProtocolBufferException;

import contacts.Contact;
import contacts.PhoneNumber;

public class TestProtobuf {
    public static void main(String[] args) throws InvalidProtocolBufferException {
        Contact.Builder builder = Contact.newBuilder();
        builder.setIndex(1);
        builder.setFirstName("John");
        builder.setLastName("Smith");
        
        builder.addPhoneNumbers(
            PhoneNumber.newBuilder()
                .setPhoneType("home")
                .setNumber("123-456-7890")
        );
        builder.addPhoneNumbers(
            PhoneNumber.newBuilder()
                .setPhoneType("work")
                .setNumber("012-345-6789")
        );
        Contact contact = builder.build();

        System.out.println(contact);
        byte[] data = contact.toByteArray();
        System.out.println(data.length == 59);
        Contact recovered = Contact.parseFrom(data);
        System.out.println(recovered);
    }
}
