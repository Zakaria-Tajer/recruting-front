import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfos } from 'src/app/component/rc-login/rc-login-Interface';
import { LoginResponse } from 'src/app/interfaces/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AgentLoginService {


   private url = 'http://localhost:8091/api/v1/agent/login';
options = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    })
  };
  
   constructor(private http : HttpClient) { }

  login(loginInfo: LoginInfos){
        
    return this.http.post<LoginResponse>(this.url, loginInfo, this.options);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }


}
