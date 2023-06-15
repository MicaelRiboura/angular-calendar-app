import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Appointment } from '../models/appointment.model';
import { Day } from '../models/day.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private _loadStoragedAppointments(): Appointment[] {
    const storagedAppointments = localStorage.getItem('appointments');
    const appointments = storagedAppointments ? JSON.parse(storagedAppointments) : [];
    return appointments;
  }

  saveAppointment(form: FormGroup) {
    const appointments = this._loadStoragedAppointments();
    appointments.push(form.value);

    const jsonAppointments = JSON.stringify(appointments);

    localStorage.setItem('appointments', jsonAppointments);
  }

  listAppointments(days: number[], month: number, year: number): Day[] {
    const appointments = this._loadStoragedAppointments();

    return days
      .map(day => {
        const filteredAppointments = appointments
          .map((m: object) => new Appointment().deserialize(m))
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

  deleteAppointment(appointment: Appointment) {
    const appointments = this._loadStoragedAppointments();

    const updatedList = appointments.filter(a => a.title !== appointment.title && a.title);
    localStorage.setItem('appointments', JSON.stringify(updatedList));
  } 
}
