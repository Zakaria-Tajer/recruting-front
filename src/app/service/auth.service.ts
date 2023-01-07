import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInfos } from '../component/rc-login/rc-login-Interface';
import { LoginResponse } from '../interfaces/LoginResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = 'http://localhost:8091/api/v1/recruiter/login';

  constructor(private http : HttpClient) { }

  login(loginInfo: LoginInfos, headers: {headers: HttpHeaders}){
        
    return this.http.post<LoginResponse>(this.url, loginInfo, headers);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }


}
