import { Component, OnInit } from '@angular/core';
import { CalendarEventService, EventType } from 'src/app/services/calendar-event.service';
import { CalendarService } from 'src/app/services/calendar.service';

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

  readonly EVENT_TYPE = EventType;

  constructor(
    private calendarService: CalendarService,
    private calendarEventService: CalendarEventService,
  ) { }

  ngOnInit () {
    this.days = this.calendarService.getDaysInMonth(this.year, this.month);

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
    });
  }

  updateStates(year: number, month: number) {
    this.month = month;
    this.year = year;
    this.days = this.calendarService.getDaysInMonth(year, month);
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
}
