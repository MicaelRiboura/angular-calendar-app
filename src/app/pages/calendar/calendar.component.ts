import { Component, OnInit } from '@angular/core';
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

  constructor(private calendarService: CalendarService) { }

  ngOnInit () {
    this.days = this.calendarService.getDaysInMonth(this.year, this.month);
  }

  
}
