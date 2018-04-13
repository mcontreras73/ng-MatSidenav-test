import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { NavsService } from '../../services/navs.service';

@Component({
  selector: 'acerca-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(private navsService: NavsService) {}

  ngOnInit() {
    this.navsService.setOpened$(this.sidenav.opened).subscribe(null);
  }

  public miPrueba() {
    this.sidenav.opened = !this.sidenav.opened;
  }
}
