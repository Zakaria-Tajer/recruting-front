import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';
import { AgentLoginService } from './service/agent/agent-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router, private authAgentLogin: AgentLoginService){

  }

  canActivate(): boolean {
      if(this.authService.loggedIn() || this.authAgentLogin.loggedIn()){
        return true;
      }else {
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
