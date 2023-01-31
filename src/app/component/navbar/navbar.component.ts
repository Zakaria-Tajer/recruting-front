import {Component, EventEmitter, Output} from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {LoginDataObsService} from "../../service/login-data-obs.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  imagePic: String =  "";
  username: String =  "";
  constructor(private loginData: LoginDataObsService) {
    loginData.loginDataShare.subscribe((data) => {
      this.imagePic = data.loginInfo.imagePic
      this.username = data.loginInfo.username
    })


    console.log(this.imagePic, this.username)
  }


  user = this.username.substring(0, 1) ? this.username.substring(0, 1) : sessionStorage.getItem('username')?.substring(0, 1);
  image = this.imagePic ? this.imagePic : sessionStorage.getItem('imagePic');





  menuStatus: boolean = true;
  SideNavToggled( ) {

    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);

    console.log(this.menuStatus);

  }
  bars = faBars;
}
