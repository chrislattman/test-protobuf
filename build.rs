fn main() {
    prost_build::compile_protos(
        &["contacts.proto"],
        &["."],
    )
    .unwrap();
}
