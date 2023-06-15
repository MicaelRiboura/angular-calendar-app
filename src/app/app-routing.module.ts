import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule) },
  { path: 'add', loadChildren: () => import('./pages/create-appointment/create-appointment.module').then(m => m.CreateAppointmentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
