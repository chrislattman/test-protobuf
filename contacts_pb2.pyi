from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Contact(_message.Message):
    __slots__ = ["first_name", "index", "last_name", "phone_numbers"]
    FIRST_NAME_FIELD_NUMBER: _ClassVar[int]
    INDEX_FIELD_NUMBER: _ClassVar[int]
    LAST_NAME_FIELD_NUMBER: _ClassVar[int]
    PHONE_NUMBERS_FIELD_NUMBER: _ClassVar[int]
    first_name: str
    index: int
    last_name: str
    phone_numbers: _containers.RepeatedCompositeFieldContainer[PhoneNumber]
    def __init__(self, index: _Optional[int] = ..., first_name: _Optional[str] = ..., last_name: _Optional[str] = ..., phone_numbers: _Optional[_Iterable[_Union[PhoneNumber, _Mapping]]] = ...) -> None: ...

class PhoneNumber(_message.Message):
    __slots__ = ["number", "phone_type"]
    NUMBER_FIELD_NUMBER: _ClassVar[int]
    PHONE_TYPE_FIELD_NUMBER: _ClassVar[int]
    number: str
    phone_type: str
    def __init__(self, phone_type: _Optional[str] = ..., number: _Optional[str] = ...) -> None: ...
