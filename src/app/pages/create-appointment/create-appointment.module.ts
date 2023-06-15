import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAppointmentComponent } from './create-appointment.component';
import { RouterModule } from '@angular/router';

const routes = [ { path: '', component: CreateAppointmentComponent }];

@NgModule({
  declarations: [
    CreateAppointmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CreateAppointmentModule { }
