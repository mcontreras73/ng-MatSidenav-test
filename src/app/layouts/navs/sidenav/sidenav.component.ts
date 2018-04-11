import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acerca-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  opened: number;

  constructor() {}

  ngOnInit() {}

  checkStatus(place: string = ''): void {
    console.log(place + '=' + this.opened);
  }
}
