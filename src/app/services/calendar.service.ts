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

  nextMonth(year: number, month: number) {
      if ((month + 1) > 12) {
        return { year: year + 1, month: 1 };
      } else {
        return { year, month: month + 1 };
      }
  }

  previousMonth(year: number, month: number) {
    if ((month - 1) < 1) {
      return { year: year - 1, month: 12 };
    } else {
      return { year, month: month - 1 };
    }
  }


  nextYear(year: number, month: number) {
    return { year: year + 1, month };
  }

  previousYear(year: number, month: number) {
    if ((year - 1) < 1920) {
      return { year, month };
    } else {
      return { year: year - 1, month };
    }
  }
}
