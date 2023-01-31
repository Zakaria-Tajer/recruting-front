import { Injectable } from '@angular/core';
import {LoginResponse} from "../interfaces/LoginResponse";
import {BehaviorSubject} from "rxjs";
import {UserData} from "../interfaces/UserData";

@Injectable({
  providedIn: 'root'
})
export class LoginDataObsService {


  // @ts-ignore
  private info$ = new BehaviorSubject<LoginResponse>({
    loginInfo: {imagePic: "", username: ""},
    message: "",
    statusCode: 0,
    statusMessage: "",
    timestamp: new Date(),
    token: ""
  });

  private user = new BehaviorSubject<UserData>({
    recruiterEmail: "",
    email: "",
    imagePic: "",
    password: "",
    phoneNumber: "",
    role: "",
    recruiterId: 0
  });


  public loginDataShare = this.info$.asObservable();

  public userData = this.user.asObservable();
  updateUser(data: UserData){
    this.user.next(data);
  }

  updateData(infos: LoginResponse) {
    this.info$.next(infos)
  }

}
