import {AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {LoginResponse} from "../../interfaces/LoginResponse";
import {OffersCounterService} from "../../service/offers-counter.service";
import {OffersStatusCount} from "../../interfaces/OffersStatusCount";
import {dashboardInfos} from "./rc-dashboard-interface";
import {LoginDataObsService} from "../../service/login-data-obs.service";

@Component({
  selector: 'app-rc-dashboard',
  templateUrl: './rc-dashboard.component.html',
  styleUrls: ['./rc-dashboard.component.css']
})
export class RcDashboardComponent implements OnInit {
  //
  sideNavStatus: boolean = false;
  bars = faBars;

  title = "Dashboard";

  constructor(private router: Router, private service: OffersCounterService) {
  }
  offerCounts: OffersStatusCount = {
    publishedOffers: 0,
    unpublishedOffers: 0,
    acceptedOffers: 0,
    TotalUsersAppliedJob: 0
  };


  ngOnInit(): void {
    this.service.getOffersCount().subscribe((data: OffersStatusCount) => {
      this.offerCounts.publishedOffers = data.publishedOffers;
      this.offerCounts.unpublishedOffers = data.unpublishedOffers;
      this.offerCounts.acceptedOffers = data.acceptedOffers;
      this.offerCounts.TotalUsersAppliedJob = data.TotalUsersAppliedJob;
    });

  }


}
