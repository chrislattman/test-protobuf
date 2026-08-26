plugins {
    java
    application
}

dependencyLocking {
    lockAllConfigurations()
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.google.protobuf:protobuf-java:4.36.0")
}

application {
    mainClass.set("TestProtobuf")
}
