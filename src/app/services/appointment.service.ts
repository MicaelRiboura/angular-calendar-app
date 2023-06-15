import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  listAppointments() {
    const storagedAppointments = localStorage.getItem('appointments');
    const appointments = storagedAppointments ? JSON.parse(storagedAppointments) : [];
   return appointments;
  }
}