import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { NavComponent } from './shared/nav/nav.component';
import { LoginScreenComponent } from './modules/login-page/login-screen/login-screen.component';
import { CreateAccountScreenComponent } from './modules/login-page/create-account-screen/create-account-screen.component';
import { ForgotComponent } from './modules/login-page/login-screen/forgot/forgot.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CupsComponent } from './modules/dashboard/cups/cups.component';
import { EnterCupComponent } from './modules/dashboard/enter-cup/enter-cup.component';
import { CreateCupComponent } from './modules/dashboard/create-cup/create-cup.component';
import { CreateSchoolComponent } from './modules/dashboard/create-school/create-school.component';
import { EnrollCupComponent } from './modules/dashboard/cups/enroll-cup/enroll-cup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OngoingCupComponent } from './modules/dashboard/cups/ongoing-cup/ongoing-cup.component';
import { FinishedCupComponent } from './modules/dashboard/cups/finished-cup/finished-cup.component';
import { SchoolsComponent } from './modules/dashboard/schools/schools.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavComponent,
    LoginScreenComponent,
    CreateAccountScreenComponent,
    ForgotComponent,
    DashboardComponent,
    CupsComponent,
    EnterCupComponent,
    CreateCupComponent,
    CreateSchoolComponent,
    EnrollCupComponent,
    OngoingCupComponent,
    FinishedCupComponent,
    SchoolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
