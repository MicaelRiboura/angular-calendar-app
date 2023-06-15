import { Appointment } from "./appointment.model";
import { Deserializable } from "./deserializable.interface";

export class Day implements Deserializable<Day> {
    day: number;
    appointments: Appointment[];

    constructor() {
        this.day = 0;
        this.appointments = [];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deserialize(input: any): Day {
        Object.assign(this, input);
        return this;
    }
}
