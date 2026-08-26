/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.contacts = (function() {

    /**
     * Namespace contacts.
     * @exports contacts
     * @namespace
     */
    var contacts = {};

    contacts.PhoneNumber = (function() {

        /**
         * Properties of a PhoneNumber.
         * @memberof contacts
         * @interface IPhoneNumber
         * @property {string|null} [phoneType] PhoneNumber phoneType
         * @property {string|null} [number] PhoneNumber number
         */

        /**
         * Constructs a new PhoneNumber.
         * @memberof contacts
         * @classdesc Represents a PhoneNumber.
         * @implements IPhoneNumber
         * @constructor
         * @param {contacts.IPhoneNumber=} [properties] Properties to set
         */
        function PhoneNumber(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PhoneNumber phoneType.
         * @member {string} phoneType
         * @memberof contacts.PhoneNumber
         * @instance
         */
        PhoneNumber.prototype.phoneType = "";

        /**
         * PhoneNumber number.
         * @member {string} number
         * @memberof contacts.PhoneNumber
         * @instance
         */
        PhoneNumber.prototype.number = "";

        /**
         * Creates a new PhoneNumber instance using the specified properties.
         * @function create
         * @memberof contacts.PhoneNumber
         * @static
         * @param {contacts.IPhoneNumber=} [properties] Properties to set
         * @returns {contacts.PhoneNumber} PhoneNumber instance
         */
        PhoneNumber.create = function create(properties) {
            return new PhoneNumber(properties);
        };

        /**
         * Encodes the specified PhoneNumber message. Does not implicitly {@link contacts.PhoneNumber.verify|verify} messages.
         * @function encode
         * @memberof contacts.PhoneNumber
         * @static
         * @param {contacts.IPhoneNumber} message PhoneNumber message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhoneNumber.encode = function encode(message, writer, q) {
            if (!writer)
                writer = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.phoneType != null && Object.hasOwnProperty.call(message, "phoneType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.phoneType);
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.number);
            return writer;
        };

        /**
         * Encodes the specified PhoneNumber message, length delimited. Does not implicitly {@link contacts.PhoneNumber.verify|verify} messages.
         * @function encodeDelimited
         * @memberof contacts.PhoneNumber
         * @static
         * @param {contacts.IPhoneNumber} message PhoneNumber message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhoneNumber.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PhoneNumber message from the specified reader or buffer.
         * @function decode
         * @memberof contacts.PhoneNumber
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {contacts.PhoneNumber} PhoneNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhoneNumber.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contacts.PhoneNumber();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.phoneType = reader.string();
                        break;
                    }
                case 2: {
                        message.number = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PhoneNumber message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof contacts.PhoneNumber
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {contacts.PhoneNumber} PhoneNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhoneNumber.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PhoneNumber message.
         * @function verify
         * @memberof contacts.PhoneNumber
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PhoneNumber.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.phoneType != null && Object.hasOwnProperty.call(message, "phoneType"))
                if (!$util.isString(message.phoneType))
                    return "phoneType: string expected";
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                if (!$util.isString(message.number))
                    return "number: string expected";
            return null;
        };

        /**
         * Creates a PhoneNumber message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof contacts.PhoneNumber
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {contacts.PhoneNumber} PhoneNumber
         */
        PhoneNumber.fromObject = function fromObject(object, long) {
            if (object instanceof $root.contacts.PhoneNumber)
                return object;
            if (!$util.isObject(object))
                throw TypeError(".contacts.PhoneNumber: object expected");
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var message = new $root.contacts.PhoneNumber();
            if (object.phoneType != null)
                message.phoneType = String(object.phoneType);
            if (object.number != null)
                message.number = String(object.number);
            return message;
        };

        /**
         * Creates a plain object from a PhoneNumber message. Also converts values to other types if specified.
         * @function toObject
         * @memberof contacts.PhoneNumber
         * @static
         * @param {contacts.PhoneNumber} message PhoneNumber
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PhoneNumber.toObject = function toObject(message, options, q) {
            if (!options)
                options = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                object.phoneType = "";
                object.number = "";
            }
            if (message.phoneType != null && Object.hasOwnProperty.call(message, "phoneType"))
                object.phoneType = message.phoneType;
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                object.number = message.number;
            return object;
        };

        /**
         * Converts this PhoneNumber to JSON.
         * @function toJSON
         * @memberof contacts.PhoneNumber
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PhoneNumber.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PhoneNumber
         * @function getTypeUrl
         * @memberof contacts.PhoneNumber
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PhoneNumber.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/contacts.PhoneNumber";
        };

        return PhoneNumber;
    })();

    contacts.Contact = (function() {

        /**
         * Properties of a Contact.
         * @memberof contacts
         * @interface IContact
         * @property {number|null} [index] Contact index
         * @property {string|null} [firstName] Contact firstName
         * @property {string|null} [lastName] Contact lastName
         * @property {Array.<contacts.IPhoneNumber>|null} [phoneNumbers] Contact phoneNumbers
         */

        /**
         * Constructs a new Contact.
         * @memberof contacts
         * @classdesc Represents a Contact.
         * @implements IContact
         * @constructor
         * @param {contacts.IContact=} [properties] Properties to set
         */
        function Contact(properties) {
            this.phoneNumbers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Contact index.
         * @member {number} index
         * @memberof contacts.Contact
         * @instance
         */
        Contact.prototype.index = 0;

        /**
         * Contact firstName.
         * @member {string} firstName
         * @memberof contacts.Contact
         * @instance
         */
        Contact.prototype.firstName = "";

        /**
         * Contact lastName.
         * @member {string} lastName
         * @memberof contacts.Contact
         * @instance
         */
        Contact.prototype.lastName = "";

        /**
         * Contact phoneNumbers.
         * @member {Array.<contacts.IPhoneNumber>} phoneNumbers
         * @memberof contacts.Contact
         * @instance
         */
        Contact.prototype.phoneNumbers = $util.emptyArray;

        /**
         * Creates a new Contact instance using the specified properties.
         * @function create
         * @memberof contacts.Contact
         * @static
         * @param {contacts.IContact=} [properties] Properties to set
         * @returns {contacts.Contact} Contact instance
         */
        Contact.create = function create(properties) {
            return new Contact(properties);
        };

        /**
         * Encodes the specified Contact message. Does not implicitly {@link contacts.Contact.verify|verify} messages.
         * @function encode
         * @memberof contacts.Contact
         * @static
         * @param {contacts.IContact} message Contact message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Contact.encode = function encode(message, writer, q) {
            if (!writer)
                writer = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.firstName);
            if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastName);
            if (message.phoneNumbers != null && message.phoneNumbers.length)
                for (var i = 0; i < message.phoneNumbers.length; ++i)
                    $root.contacts.PhoneNumber.encode(message.phoneNumbers[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), q + 1).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Contact message, length delimited. Does not implicitly {@link contacts.Contact.verify|verify} messages.
         * @function encodeDelimited
         * @memberof contacts.Contact
         * @static
         * @param {contacts.IContact} message Contact message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Contact.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Contact message from the specified reader or buffer.
         * @function decode
         * @memberof contacts.Contact
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {contacts.Contact} Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Contact.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contacts.Contact();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.index = reader.int32();
                        break;
                    }
                case 2: {
                        message.firstName = reader.string();
                        break;
                    }
                case 3: {
                        message.lastName = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.phoneNumbers && message.phoneNumbers.length))
                            message.phoneNumbers = [];
                        message.phoneNumbers.push($root.contacts.PhoneNumber.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Contact message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof contacts.Contact
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {contacts.Contact} Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Contact.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Contact message.
         * @function verify
         * @memberof contacts.Contact
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Contact.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
                if (!$util.isString(message.firstName))
                    return "firstName: string expected";
            if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.phoneNumbers != null && Object.hasOwnProperty.call(message, "phoneNumbers")) {
                if (!Array.isArray(message.phoneNumbers))
                    return "phoneNumbers: array expected";
                for (var i = 0; i < message.phoneNumbers.length; ++i) {
                    var error = $root.contacts.PhoneNumber.verify(message.phoneNumbers[i], long + 1);
                    if (error)
                        return "phoneNumbers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Contact message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof contacts.Contact
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {contacts.Contact} Contact
         */
        Contact.fromObject = function fromObject(object, long) {
            if (object instanceof $root.contacts.Contact)
                return object;
            if (!$util.isObject(object))
                throw TypeError(".contacts.Contact: object expected");
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var message = new $root.contacts.Contact();
            if (object.index != null)
                message.index = object.index | 0;
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.phoneNumbers) {
                if (!Array.isArray(object.phoneNumbers))
                    throw TypeError(".contacts.Contact.phoneNumbers: array expected");
                message.phoneNumbers = [];
                for (var i = 0; i < object.phoneNumbers.length; ++i) {
                    if (!$util.isObject(object.phoneNumbers[i]))
                        throw TypeError(".contacts.Contact.phoneNumbers: object expected");
                    message.phoneNumbers[i] = $root.contacts.PhoneNumber.fromObject(object.phoneNumbers[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Contact message. Also converts values to other types if specified.
         * @function toObject
         * @memberof contacts.Contact
         * @static
         * @param {contacts.Contact} message Contact
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Contact.toObject = function toObject(message, options, q) {
            if (!options)
                options = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.phoneNumbers = [];
            if (options.defaults) {
                object.index = 0;
                object.firstName = "";
                object.lastName = "";
            }
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                object.index = message.index;
            if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
                object.firstName = message.firstName;
            if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                object.lastName = message.lastName;
            if (message.phoneNumbers && message.phoneNumbers.length) {
                object.phoneNumbers = [];
                for (var j = 0; j < message.phoneNumbers.length; ++j)
                    object.phoneNumbers[j] = $root.contacts.PhoneNumber.toObject(message.phoneNumbers[j], options, q + 1);
            }
            return object;
        };

        /**
         * Converts this Contact to JSON.
         * @function toJSON
         * @memberof contacts.Contact
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Contact.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Contact
         * @function getTypeUrl
         * @memberof contacts.Contact
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Contact.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/contacts.Contact";
        };

        return Contact;
    })();

    return contacts;
})();

module.exports = $root;
