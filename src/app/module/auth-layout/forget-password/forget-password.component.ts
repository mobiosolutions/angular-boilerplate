import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { first, finalize } from 'rxjs/operators'
import { EmailValidator} from '../../../shared/validation';
import  {AccountService,AlertService} from '../../../shared/services'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
forgetPasswordForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private accountService :AccountService
  ) { }

  ngOnInit()
    {
      this.forgetPasswordForm= this.formBuilder.group({
          email: ['',[EmailValidator,Validators.required]],
          rememberMe:['']
      });
  }
// convenience getter for easy access to form fields
get f() { return this.forgetPasswordForm.controls; }

onSubmit() {
  // reset alerts on submit
  this.alertService.clear();

  // stop here if form is invalid
  if (this.forgetPasswordForm.invalid) {
      return;
  }
  this.alertService.clear();
  this.accountService.forgotPassword(this.f.email.value)
      .pipe(first())
      // .pipe(finalize(() => this.loading = false))
      .subscribe({
          next: () => this.alertService.success('Please check your email for password reset instructions'),
          error: error => this.alertService.error(error)
      });
}
}
