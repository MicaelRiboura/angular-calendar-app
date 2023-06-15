import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Day } from 'src/app/models/day.model';
import { AppointmentService } from 'src/app/services/appointment.service';
import { CalendarEventService, EventType } from 'src/app/services/calendar-event.service';
import { CalendarService } from 'src/app/services/calendar.service';
import { AppointmentDialogComponent } from './components/appointment-dialog/appointment-dialog.component';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  days: number[] = [];
  year = 2023;
  month = 6;
  currentDate: Date = new Date();
  daysWithAppointments: Day[] = [];

  readonly EVENT_TYPE = EventType;

  constructor(
    private calendarService: CalendarService,
    private calendarEventService: CalendarEventService,
    private appointmentService: AppointmentService,
    private dialog: MatDialog,
  ) { }

  ngOnInit () {
    this.updateStates(this.year, this.month);

    this.calendarEventService.bus$.subscribe(({ type }) => {
      if (type === EventType.PREVIOUS_MONTH) {
        this.previousMonth();
      }

      if (type === EventType.NEXT_MONTH) {
        this.nextMonth();
      }

      if (type === EventType.PREVIOUS_YEAR) {
        this.previousYear();
      }

      if (type === EventType.NEXT_YEAR) {
        this.nextYear();
      }

      if (type === EventType.UPDATE_STATES) {
        this.updateStates(this.year, this.month);
      }
    });
  }

  updateStates(year: number, month: number) {
    this.month = month;
    this.year = year;
    this.days = this.calendarService.getDaysInMonth(year, month);
    this.daysWithAppointments = this.appointmentService.listAppointments(this.days, this.month, this.year);
  }

  nextMonth() {
    const { year, month } = this.calendarService.nextMonth(this.year, this.month);
    this.updateStates(year, month);
  }

  previousMonth() {
    const { year, month } = this.calendarService.previousMonth(this.year, this.month);
    this.updateStates(year, month);
  }

  nextYear() {
    const { year, month } = this.calendarService.nextYear(this.year, this.month);
    this.updateStates(year, month);
  }

  previousYear() {
    const { year, month } = this.calendarService.previousYear(this.year, this.month);
    this.updateStates(year, month);
  }

  openAppointment(appointment: Appointment): void {
    this.dialog.open(AppointmentDialogComponent, {
      height: '400px',
      width: '400px',
      data: {
        appointment,
      },
    });
  }
}
