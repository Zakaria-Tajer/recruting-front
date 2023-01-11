import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RcLoginComponent } from './component/rc-login/rc-login.component';
import { RcDashboardComponent } from './component/rc-dashboard/rc-dashboard.component';
import { AuthGuard } from './auth.guard';
import {SidebarComponent} from "./component/sidebar/sidebar.component";

const routes: Routes = [
  {path: 'login', component: RcLoginComponent},
  {path: "rcDashboard", component: RcDashboardComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'sideBar', component: SidebarComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
