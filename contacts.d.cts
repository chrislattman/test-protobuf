import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace contacts. */
export namespace contacts {

    /** Properties of a PhoneNumber. */
    interface IPhoneNumber {

        /** PhoneNumber phoneType */
        phoneType?: (string|null);

        /** PhoneNumber number */
        number?: (string|null);
    }

    /** Represents a PhoneNumber. */
    class PhoneNumber implements IPhoneNumber {

        /**
         * Constructs a new PhoneNumber.
         * @param [properties] Properties to set
         */
        constructor(properties?: contacts.IPhoneNumber);

        /** PhoneNumber phoneType. */
        public phoneType: string;

        /** PhoneNumber number. */
        public number: string;

        /**
         * Creates a new PhoneNumber instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PhoneNumber instance
         */
        public static create(properties?: contacts.IPhoneNumber): contacts.PhoneNumber;

        /**
         * Encodes the specified PhoneNumber message. Does not implicitly {@link contacts.PhoneNumber.verify|verify} messages.
         * @param message PhoneNumber message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contacts.IPhoneNumber, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PhoneNumber message, length delimited. Does not implicitly {@link contacts.PhoneNumber.verify|verify} messages.
         * @param message PhoneNumber message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contacts.IPhoneNumber, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PhoneNumber message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PhoneNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contacts.PhoneNumber;

        /**
         * Decodes a PhoneNumber message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PhoneNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contacts.PhoneNumber;

        /**
         * Verifies a PhoneNumber message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PhoneNumber message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PhoneNumber
         */
        public static fromObject(object: { [k: string]: any }): contacts.PhoneNumber;

        /**
         * Creates a plain object from a PhoneNumber message. Also converts values to other types if specified.
         * @param message PhoneNumber
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contacts.PhoneNumber, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PhoneNumber to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PhoneNumber
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Contact. */
    interface IContact {

        /** Contact index */
        index?: (number|null);

        /** Contact firstName */
        firstName?: (string|null);

        /** Contact lastName */
        lastName?: (string|null);

        /** Contact phoneNumbers */
        phoneNumbers?: (contacts.IPhoneNumber[]|null);
    }

    /** Represents a Contact. */
    class Contact implements IContact {

        /**
         * Constructs a new Contact.
         * @param [properties] Properties to set
         */
        constructor(properties?: contacts.IContact);

        /** Contact index. */
        public index: number;

        /** Contact firstName. */
        public firstName: string;

        /** Contact lastName. */
        public lastName: string;

        /** Contact phoneNumbers. */
        public phoneNumbers: contacts.IPhoneNumber[];

        /**
         * Creates a new Contact instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Contact instance
         */
        public static create(properties?: contacts.IContact): contacts.Contact;

        /**
         * Encodes the specified Contact message. Does not implicitly {@link contacts.Contact.verify|verify} messages.
         * @param message Contact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contacts.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Contact message, length delimited. Does not implicitly {@link contacts.Contact.verify|verify} messages.
         * @param message Contact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contacts.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Contact message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contacts.Contact;

        /**
         * Decodes a Contact message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contacts.Contact;

        /**
         * Verifies a Contact message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Contact message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Contact
         */
        public static fromObject(object: { [k: string]: any }): contacts.Contact;

        /**
         * Creates a plain object from a Contact message. Also converts values to other types if specified.
         * @param message Contact
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contacts.Contact, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Contact to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Contact
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

export interface IRoot {
    contacts: typeof contacts;
}
declare const $root: IRoot;
export default $root;
