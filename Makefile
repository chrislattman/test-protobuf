# You can combine protoc invocations into one: protoc --python_out=. --go_out=go/contacts ...

java:
	protoc --java_out=src/main/java contacts.proto
	./gradlew run -q

python:
	protoc --pyi_out=. --python_out=. contacts.proto
	python3 testprotobuf.py

nodejs:
	npm run build:proto
	npx tsx testprotobuf.ts

go:
	mkdir -p go/contacts
	protoc --go_out=go/contacts --go_opt=paths=source_relative contacts.proto
	cd go; go run testprotobuf.go

cpp:
	protoc --cpp_out=. contacts.proto
	cmake --build build && cmake --build build --target run-test-protobuf
# 	g++ -o testprotobuf testprotobuf.cpp contacts.pb.cc -lprotobuf && ./testprotobuf

rust:
	cargo run -q

clean:
	cmake --build build --target clean && cargo clean # && ./gradlew clean # Commenting out because CMake and Gradle both use the build folder
	rm -rf classes generated reports tmp

.PHONY: java python nodejs go cpp rust clean
