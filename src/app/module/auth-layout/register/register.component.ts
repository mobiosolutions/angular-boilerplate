import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { EmailValidator,passValidator,PhoneValidator,NameValidator} from '../../../shared/validation';
import { register } from '../../../shared/models/register.models';
import { first } from 'rxjs/operators';
import { AlertService, AccountService,} from '../../../shared/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  url:any;
  registraionForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private alertService: AlertService,
    private accountService:AccountService) {
    //    // redirect to home if already logged in
    //    if (this.userService.currentUserValue) { 
    //     this.router.navigate(['/']);
    // }
     }

  ngOnInit() {
    this.registraionForm = this.formBuilder.group({
      firstName:['',[NameValidator,Validators.required]],
      lastName:['',[NameValidator,Validators.required]],
      mobile:['',[PhoneValidator,Validators.required]],
      email:['',[EmailValidator,Validators.required]],
      password: ['',[passValidator,Validators.required]],
      acceptTerms: [false, Validators.requiredTrue]
    });
    
  }
  // onSelectFile(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]); // read file as data url
  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = event.target.result;
  //     }
  //   }
  // }
  // public delete(){
  //   this.url = null;
  // }
  // convenience getter for easy access to form fields
  get f() { return this.registraionForm.controls; }

  createAccount()
  {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.registraionForm.invalid) {
        return;
    }

    this.loading = true;
    this.accountService.register(this.registraionForm.value)
        .pipe(first())
        .subscribe({
            next: () => {
                this.alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
                 this.router.navigate(['/login']);
            },
            error: error => {
                this.alertService.error(error);
                this.loading = false;
            }
        });
}
    }



