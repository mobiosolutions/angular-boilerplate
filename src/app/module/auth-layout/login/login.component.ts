import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from 'src/app/module/auth-layout/auth.service';
import { EmailValidator,passValidator } from '../../../shared/validation';
import { login } from '../../../shared/models/login.models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private authService:AuthService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      "email": new FormControl(null, [EmailValidator,Validators.required]),
      "password": new FormControl(null,[passValidator,Validators.required])
    });
    
  }
  Login()
  {
   if(!this.loginForm.invalid)
   {
    const loginData: login = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password,
      }
    this.authService.login(loginData).subscribe((res)=>{
      
    })
   }
  }

}
