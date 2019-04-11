import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/user/home/home.component';
import { VowelsComponent } from './components/user/vowels/vowels.component';
import { AbecedaryComponent } from './components/user/abecedary/abecedary.component';
import { ActivityComponent } from './components/user/activity/activity.component';
import { RouletteComponent } from './components/user/roulette/roulette.component';
import { AppAdministratorComponent } from  './components/layouts/app-administrator.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { AppApprenticeComponent } from './components/layouts/app-apprentice/app-apprentice.component';
import { NotFoundComponent } from './components/error/not-found.component';
import { DashboardComponent } from './components/administrator/dashboard/dashboard.component';
import { LetterComponent } from './components/administrator/letter/letter.component';


const routes: Routes = [
{ path:"", component:HomeComponent, pathMatch:'full'},
 {
  	path : '',
  	component: AppApprenticeComponent,
  	children: [
  		{ path: 'aprendiz', component: RegisterComponent },
  	]
  },
  {
  	path : '',
  	component: AppAdministratorComponent,
  	children: [
  		{ path: 'administracion/home', component: DashboardComponent},
      { path: 'administracion/letras', component: LetterComponent},
  	]
  },
  { path:"acceso", component:LoginComponent},
  { path:"inicio", component:HomeComponent},
  { path:"vocales", component:VowelsComponent},
  { path:"abecedario", component:AbecedaryComponent},
  { path:"actividades", component:ActivityComponent},
  { path:"actividades/palabra/:nombre", component:ActivityComponent},
  { path:"ruleta", component:RouletteComponent},
  { path: '**', component: NotFoundComponent},
  
];

export const routing = RouterModule.forRoot(routes);



