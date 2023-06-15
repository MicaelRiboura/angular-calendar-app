import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { RouterModule } from '@angular/router';

const routes = [ { path: '', component: CalendarComponent }];

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CalendarModule { }
