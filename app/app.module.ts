
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AppComponent } from './app.component';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: '', component: RegisterComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent }
    ]),
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    UserModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
