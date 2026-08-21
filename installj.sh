#!/bin/bash
curl -LO https://repo.maven.apache.org/maven2/com/google/protobuf/protobuf-java/4.36.0/protobuf-java-4.36.0.jar
mkdir lib
mv ./*.jar lib
