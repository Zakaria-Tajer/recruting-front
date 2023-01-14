import {Component, EventEmitter, Output} from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();

  menuStatus: boolean = true;
  SideNavToggled( ) {

    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);

    console.log(this.menuStatus);

  }
  bars = faBars;
}
