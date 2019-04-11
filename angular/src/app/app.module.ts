import { BrowserModule } from '@angular/platform-browser';
import { NgModule , } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule} from '@angular/common/http';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/user/home/home.component';
import { VowelsComponent } from './components/user/vowels/vowels.component';
import { AbecedaryComponent } from './components/user/abecedary/abecedary.component';
import { ActivityComponent } from './components/user/activity/activity.component';
import { RouletteComponent } from './components/user/roulette/roulette.component';
import { MainLevelHeadingComponent } from './components/user/layouts/main-level-heading/main-level-heading.component';
import { AppAdministratorComponent } from './components/layouts/app-administrator.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppApprenticeComponent } from './components/layouts/app-apprentice/app-apprentice.component';
import { NotFoundComponent } from './components/error/not-found.component';
import { DashboardComponent } from './components/administrator/dashboard/dashboard.component';
import { LetterComponent } from './components/administrator/letter/letter.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VowelsComponent,
    AbecedaryComponent,
    ActivityComponent,
    RouletteComponent,
    MainLevelHeadingComponent,
    AppAdministratorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AppApprenticeComponent,
    NotFoundComponent,
    DashboardComponent,
    LetterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  {provide: LocationStrategy, useClass:HashLocationStrategy},
  AbecedaryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  path:string;

  constructor(){
  }
 }
