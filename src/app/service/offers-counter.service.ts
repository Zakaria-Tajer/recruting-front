import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {OffersStatusCount} from "../interfaces/OffersStatusCount";
import {dashboardInfos} from "../component/rc-dashboard/rc-dashboard-interface";

@Injectable({
  providedIn: 'root'
})
export class OffersCounterService {

  options = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    })
  };


  private url = 'http://localhost:8091/api/v1/offers/offersByStatus';

  constructor(private http : HttpClient) { }

  getOffersCount(offerStatus: dashboardInfos){

    return this.http.post<number>(this.url, offerStatus, this.options);
  }


}
