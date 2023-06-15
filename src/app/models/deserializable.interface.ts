export interface Deserializable<T> {
    deserialize(input: object): T;
}
