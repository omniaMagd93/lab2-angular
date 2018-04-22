import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { MyserviceService } from './myservice.service';

const itiRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'students', component: StudentsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      itiRoutes,
      // {enableTracing: true }
    ),
    HttpClientModule,
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})

export class AppModule {}
