import { Injectable } from '@angular/core';
import { offerRequest } from '../component/create-offer/offer';
import { OfferResponse } from '../interfaces/OfferResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OfferById } from '../interfaces/OfferById';

@Injectable({
  providedIn: 'root'
})
export class GetOffersService {


  private url = 'http://localhost:8091/api/v1/offers/getOffersByRecruiterId';
  options = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    })
  };
  constructor(private http : HttpClient) { }

  getOffers(recruiterId: OfferById){

    return this.http.post<OfferResponse>(this.url, recruiterId, this.options);
  }
}
