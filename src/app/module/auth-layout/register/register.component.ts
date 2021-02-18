import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService } from 'src/app/module/auth-layout/auth.service';
import { EmailValidator,passValidator,PhoneValidator,NameValidator} from '../../../shared/validation';
import { register } from '../../../shared/models/register.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  url:any;
  registraionForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private authService:AuthService) { }

  ngOnInit() {
    this.registraionForm = this.formBuilder.group({
      firstname:['',[NameValidator,Validators.required]],
      lastname:['',[NameValidator,Validators.required]],
      mobile:['',[PhoneValidator,Validators.required]],
      email:['',[EmailValidator,Validators.required]],
      password: ['',[passValidator,Validators.required]],
    });
    
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  public delete(){
    this.url = null;
  }
  createAccount()
  {
if(!this.registraionForm.invalid)
{
  console.log(this.registraionForm.value);
  const registerData: register = {
    firstname: this.registraionForm.value.firstname,
    lastname: this.registraionForm.value.lastname,
    mobile: this.registraionForm.value.mobile,
    files:this.url,
    email: this.registraionForm.value.email,
    password: this.registraionForm.value.password,
    }
  this.authService.register(registerData).subscribe((res)=>{
    
  })
}

  }

}
