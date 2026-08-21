cmake_minimum_required(VERSION 3.20)
project(test-protobuf)

find_package(Protobuf REQUIRED)

add_executable(test-protobuf testprotobuf.cpp contacts.pb.cc)
target_link_libraries(test-protobuf PRIVATE protobuf::libprotobuf)

add_custom_target(run-test-protobuf
    COMMAND test-protobuf
    DEPENDS test-protobuf
    WORKING_DIRECTORY "${PROJECT_SOURCE_DIR}"
)
