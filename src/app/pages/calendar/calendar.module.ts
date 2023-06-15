import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PaginatorComponent } from './components/paginator/paginator.component';

const routes = [ { path: '', component: CalendarComponent }];

@NgModule({
  declarations: [
    CalendarComponent,
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
  ]
})
export class CalendarModule { }
