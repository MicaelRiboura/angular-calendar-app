import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  getDaysInMonth(year: number, month: number): number[] {
    const daysInMonth: number[] = [];
    const lastDay = new Date(year, month, 0).getDate();

    for (let day = 1; day <= lastDay; day++) {
      daysInMonth.push(day);
    }

    return daysInMonth;
  }
}
