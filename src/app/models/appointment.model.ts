import { Deserializable } from "./deserializable.interface";

export class Appointment implements Deserializable<Appointment> {
    title: string;
    description: string;
    date: Date;

    constructor() {
        this.title = '';
        this.description = '';
        this.date = new Date();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deserialize(input: any): Appointment {
        Object.assign(this, input);
        return this;
    }
}
