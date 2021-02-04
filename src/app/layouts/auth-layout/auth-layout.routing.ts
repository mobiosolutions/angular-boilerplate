import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ForgetPasswordComponent } from 'src/app/pages/forget-password/forget-password.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'forget-password',       component:ForgetPasswordComponent},
    // { path: 'dashboard',      component: DashboardComponent},
    // { path: 'user-profile',   component: UserProfileComponent },
];
