import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginInfos} from "../component/rc-login/rc-login-Interface";
import {LoginResponse} from "../interfaces/LoginResponse";
import {offerRequest} from "../component/create-offer/offer";
import {OfferResponse} from "../interfaces/OfferResponse";

@Injectable({
  providedIn: 'root'
})
export class CreateOfferService {

  private url = 'http://localhost:8091/api/v1/offers/create';
  options = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    })
  };
  constructor(private http : HttpClient) { }

  create(offer: offerRequest){

    return this.http.post<OfferResponse>(this.url, offer, this.options);
  }

  getCurrentRecruiter(email: string){
    return this.http.post<LoginResponse>(this.url, email, this.options);

  }
}
