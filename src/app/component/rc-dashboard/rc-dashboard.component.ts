import {AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {LoginResponse} from "../../interfaces/LoginResponse";
import {OffersCounterService} from "../../service/offers-counter.service";
import {OffersStatusCount} from "../../interfaces/OffersStatusCount";
import {dashboardInfos} from "./rc-dashboard-interface";

@Component({
  selector: 'app-rc-dashboard',
  templateUrl: './rc-dashboard.component.html',
  styleUrls: ['./rc-dashboard.component.css']
})
export class RcDashboardComponent implements OnInit{
  //
  sideNavStatus: boolean = false;
  bars = faBars;

  title = "Dashboard";

  offersCount = {status: "UNPUBLISHED"};

  unPublishedCount: number = 0;

  constructor(private router: Router ,private service : OffersCounterService){
  }

  ngOnInit(): void {
    this.service.getOffersCount(this.offersCount).subscribe((data: number) => {
     this.unPublishedCount =  data;
    });
  }


}
