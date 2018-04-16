import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavsService {
  private statusSidenav: boolean;

  constructor() {}

  private statusSidenav$ = new Subject<boolean>();

  public getStatusSidenav$(): Observable<boolean> {
    return this.statusSidenav$.asObservable();
  }

  public setStatusSidenav(status: boolean) {
    this.statusSidenav = status;
    this.statusSidenav$.next(this.statusSidenav);
  }

  public toggleStatusSidenav() {
    this.statusSidenav = !this.statusSidenav;
    this.statusSidenav$.next(this.statusSidenav);
  }
}
