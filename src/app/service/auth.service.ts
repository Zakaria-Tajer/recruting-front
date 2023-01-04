import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginInfos } from '../component/rc-login/rc-login-Interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = 'http://localhost:8099/login';

  constructor(private http : HttpClient) { }

  login(loginInfo: string, headers: {headers: HttpHeaders}){
    
    console.log('ye');
    
    return this.http.post(this.url, loginInfo, headers);
  }


}
