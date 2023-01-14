import {AfterViewInit, Input, Component, EventEmitter, HostListener, Output} from '@angular/core';
import {faHome, faSignOut, faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  @Input() sideNavStatus: boolean = false;
  home = faHome;
  logout = faSignOut;


}
