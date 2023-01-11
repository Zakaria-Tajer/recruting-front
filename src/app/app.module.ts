import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RcLoginComponent } from './component/rc-login/rc-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RcDashboardComponent } from './component/rc-dashboard/rc-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './component/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    RcLoginComponent,
    RcDashboardComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
