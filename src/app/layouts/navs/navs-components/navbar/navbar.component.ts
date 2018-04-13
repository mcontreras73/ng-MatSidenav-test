import { Component, OnInit } from '@angular/core';

import { NavsService } from '../../services/navs.service';

@Component({
  selector: 'acerca-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private navsService: NavsService) {}

  ngOnInit() {}

  public clickMenu() {
    this.navsService.sidenavToggle$();
  }
}
