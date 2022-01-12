import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RestPasswordComponent } from './rest-password/rest-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

export const AuthLayoutRoutes: Routes = [
    { path:'login',          component: LoginComponent },
    { path:'register',       component: RegisterComponent },
    { path :'verify-email',     component:VerifyEmailComponent},
    { path:'forget-password', component:ForgetPasswordComponent},
    { path :'reset-password', component:RestPasswordComponent},
    
  
    
];
