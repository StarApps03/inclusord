import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { VowelsComponent } from './components/user/vowels/vowels.component';
import { AbecedaryComponent } from './components/user/abecedary/abecedary.component';
import { ActivityComponent } from './components/user/activity/activity.component';
import { RouletteComponent } from './components/user/roulette/roulette.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/error/not-found.component';
import { DashboardComponent } from './components/administrator/dashboard/dashboard.component';
import { LetterComponent } from './components/administrator/letter/letter.component';
import { ProfileComponent } from './components/profile/profile.component';
//guards

import { AuthGuard } from './guards/auth.guard';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { MainComponent } from './components/layouts/main.component';
import {HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'',redirectTo:'inicio', pathMatch:'full'},
  {path:"inicio", component:HomeComponent},
  { path:"acceso", component:LoginComponent, canActivate: [IsAuthenticatedGuard]},
  { path:"vocales", component:VowelsComponent},
  { path:"abecedario", component:AbecedaryComponent},
  { path:"actividades", component:ActivityComponent},
  { path:"actividades/palabra/:nombre", component:ActivityComponent},
  { path:"ruleta", component:RouletteComponent},
  { path: '**', component: NotFoundComponent},
  
];

export const routing = RouterModule.forRoot(routes);




