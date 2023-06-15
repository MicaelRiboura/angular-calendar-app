import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Appointment } from '../models/appointment.model';
import { Day } from '../models/day.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  saveAppointment(form: FormGroup) {
    const storagedAppointments = localStorage.getItem('appointments');

    const appointments = storagedAppointments ? JSON.parse(storagedAppointments) : [];
    appointments.push(form.value);

    const jsonAppointments = JSON.stringify(appointments);

    localStorage.setItem('appointments', jsonAppointments);
  }

  listAppointments(days: number[], month: number, year: number): Day[] {
    const storagedAppointments = localStorage.getItem('appointments');
    const appointments = storagedAppointments ? JSON.parse(storagedAppointments) : [];

    return days
      .map(day => {
        const filteredAppointments = appointments
          .map((m: any) => new Appointment().deserialize(m))
          .filter((appointment: Appointment) => {
            const date = new Date(appointment.date);

            return date.getDate() === day
              && (date.getMonth() + 1) === month
              && date.getFullYear() === year;
          });

      return {
        day,
        appointments: filteredAppointments,
      };
    }).map((m: object) => new Day().deserialize(m));
  }
}
