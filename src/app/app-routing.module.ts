import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RcLoginComponent } from './component/rc-login/rc-login.component';
import { RcDashboardComponent } from './component/rc-dashboard/rc-dashboard.component';

const routes: Routes = [
  {path: 'login', component: RcLoginComponent},
  {path: "rcDashboard", component: RcDashboardComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
