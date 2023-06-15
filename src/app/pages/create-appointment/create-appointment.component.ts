import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,
    private router: Router,
  ) {
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      date: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('submit: ', this.form.value);
      this.appointmentService.saveAppointment(this.form);
      this.router.navigateByUrl('/');
    }
  }

  validateField(field: string) {
    return this.form.get(field)?.valid && this.form.get(field)?.touched;
  }
}
