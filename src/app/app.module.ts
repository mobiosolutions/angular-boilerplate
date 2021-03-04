import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './module/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './module/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
// used to create fake backend
import { fakeBackendProvider } from './helpers';
// import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor,appInitializer} from './helpers';
// import { HomeComponent } from './home';
import { AlertComponent } from './component/alert/alert.component';
import { HomeComponent } from './home/home/home.component'
import { AccountService } from '../app/shared/services';





@NgModule({
  declarations: [
    AppComponent,
     AuthLayoutComponent,
     AdminLayoutComponent,
      AlertComponent,
      HomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule

    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true,deps: [AccountService]},
    // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
