import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './app.guard';
import { BanklistComponent } from './banklist/banklist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvalidComponent } from './invalid/invalid.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AppGuard]},
  {path:'banklist', component:BanklistComponent,canActivate:[AppGuard]},
  {path:'**', component:InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
