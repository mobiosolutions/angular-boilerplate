import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './module/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './module/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared/shared.module'



@NgModule({
  declarations: [AppComponent, AuthLayoutComponent,AdminLayoutComponent],
  imports: [BrowserModule, AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
    RouterModule,

    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
