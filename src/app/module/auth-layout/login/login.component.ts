import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router,ActivatedRoute,Params} from '@angular/router';

import { EmailValidator,passValidator } from '../../../shared/validation';
import { first } from 'rxjs/operators';
import { AlertService, AccountService } from '../../../shared/services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private accountService:AccountService) {
     // redirect  if already logged in
      if (this.accountService.accountValue) { 
        // this.router.navigate(['dashboard']);
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      console.log("this.returnUrl",  this.returnUrl);
      
    }
    }
token:any
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      "email": new FormControl(null, [EmailValidator,Validators.required]),
      "password": new FormControl(null,[passValidator,Validators.required]),
    });
    
  }
   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }
  Login()
  {
  this.submitted = true;

  // reset alerts on submit
  this.alertService.clear();

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  this.loading = true;
  this.accountService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe({
          next: () => {
              // get return url from query parameters or default to home page
              const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
              // this.router.navigate(['dashboard']);
               this.router.navigateByUrl(returnUrl);
          },
          error: error => {
              this.alertService.error(error);
              this.loading = false;
          }
      });
}

}
