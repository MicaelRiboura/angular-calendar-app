import { Component, Input } from '@angular/core';
import { CalendarEventService, EventType } from 'src/app/services/calendar-event.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Input()
  label: string;
  @Input()
  value: number;
  @Input()
  nextFlag: EventType;
  @Input()
  previousFlag: EventType;

  constructor(private calendarEventService: CalendarEventService) {
    this.label = "";
    this.value = 0;
    this.nextFlag = EventType.NEXT_MONTH;
    this.previousFlag = EventType.PREVIOUS_MONTH;
  }

  nextFunction() {
     this.calendarEventService.fogo({ type: this.nextFlag });
  }

  previousFunction() {
    this.calendarEventService.fogo({ type: this.previousFlag });
  }

}
