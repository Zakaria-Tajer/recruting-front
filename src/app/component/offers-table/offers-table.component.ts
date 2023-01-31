import { Component, OnInit } from '@angular/core';
import { GetOffersService } from 'src/app/service/get-offers.service';
import {LoginDataObsService} from "../../service/login-data-obs.service";
import { UserData } from 'src/app/interfaces/UserData';
import { OfferById } from 'src/app/interfaces/OfferById';
import { OfferResponse } from 'src/app/interfaces/OfferResponse';

@Component({
  selector: 'offers-table',
  templateUrl: './offers-table.component.html',
  styleUrls: ['./offers-table.component.css']
})
export class OffersTableComponent implements OnInit {


  constructor(private offersData: GetOffersService, private loginData: LoginDataObsService){}

  public offerArray: OfferResponse [] =[];

  ngOnInit(): void {

      this.loginData.userData.subscribe((data: OfferById) => {        
        console.log(data);
        this.offersData.getOffers(data).subscribe((offer) => {
          console.log(offer);
          this.offerArray.push(offer);
        })  
      });


    //   setTimeout(() => {
    //     console.log(this.offerArray);

    //     for (let offer of this.offerArray) {
    //       console.log(offer.offreName);
          
    //     }

    //   }, 1000);
    }
    
    
    
    
    
    

}
