import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './module/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './module/auth-layout/auth-layout.component';
import { AuthGuard } from './helpers/auth.guard';



const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
         loadChildren: () => import('src/app/module/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule) ,canActivate: [AuthGuard],
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/module/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule) 
      }
    ]
  }, {
    path: '**',
    redirectTo: 'login'
  }
  
  
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
