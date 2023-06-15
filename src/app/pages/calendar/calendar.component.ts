import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  days: number[] = [];

  constructor(private calendarService: CalendarService) { }

  ngOnInit () {
    this.days = this.calendarService.getDaysInMonth(2023, 6);
  }

  
}
