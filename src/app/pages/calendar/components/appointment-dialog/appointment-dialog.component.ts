import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Appointment } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { CalendarEventService, EventType } from 'src/app/services/calendar-event.service';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { appointment: Appointment },
    private datePipe: DatePipe,
    private appointmentService: AppointmentService,
    private calendarEventService: CalendarEventService,
    ) {}

  cancel():void {
    this.dialogRef.close();
  }

  delete(appointment: Appointment) {
    this.appointmentService.deleteAppointment(appointment);
    this.calendarEventService.fogo({ type: EventType.UPDATE_STATES });
    this.cancel();
  }
}
