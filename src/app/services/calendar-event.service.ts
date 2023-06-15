import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum EventType {
  NEXT_YEAR = 'NEXT_YEAR',
  PREVIOUS_YEAR = 'PREVIOUS_YEAR',
  NEXT_MONTH = 'NEXT_MONTH',
  PREVIOUS_MONTH = 'PREVIOUS_MONTH',
  UPDATE_STATES = 'UPDATE_STATES',
}

export interface ICalendarEventData {
  type: EventType;
}

@Injectable({
  providedIn: 'root'
})
export class CalendarEventService {
  private dataSource = new Subject<ICalendarEventData>();
  public bus$ = this.dataSource.asObservable();

  fogo(data: ICalendarEventData) {
    this.dataSource.next(data);
  }
  
}


