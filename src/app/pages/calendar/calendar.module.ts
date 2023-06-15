import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppointmentDialogComponent } from './components/appointment-dialog/appointment-dialog.component';


const routes = [ { path: '', component: CalendarComponent }];

@NgModule({
  declarations: [
    CalendarComponent,
    PaginatorComponent,
    AppointmentDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [
    DatePipe,
  ]
})
export class CalendarModule { }
