import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { NavsService } from '../../services/navs.service';

@Component({
  selector: 'acerca-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  private subscription: Subscription = null;

  constructor(private navsService: NavsService) {}

  ngOnInit() {
    this.navsService.setStatusSidenav(this.sidenav.opened);
    console.log(
      `Ahora a la subscription, valor inicial de Sidenav: ${
        this.sidenav.opened
      }`
    );
    this.makeSubscription();
  }

  private makeSubscription() {
    console.log('Estoy en makeSubscription');
    this.subscription = this.navsService
    .getStatusSidenav$()
    .subscribe(this.toggleSidenav);
  }

  private toggleSidenav = status => {
    console.log('Ya recibí status');
    this.sidenav.opened = status;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public miPrueba() {
    this.sidenav.opened = !this.sidenav.opened;
  }
}
