import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/components/layouts/main.component';
import { HomeComponent } from 'src/app/components/user/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:'inicio2',component:HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
