import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'acerca-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor() {}

  ngOnInit() {
    console.log(this.sidenav.opened);
    this.sidenav.open();
    console.log(this.sidenav.opened);
  }

  public aVer(algo: any) {
    console.log(algo);
    algo.toggle();
  }
}
