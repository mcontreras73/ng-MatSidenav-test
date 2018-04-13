import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class NavsService {
  private sidenavOpened: boolean;

  constructor() {}

  public setOpened$(status: boolean): Observable<boolean> {
    this.sidenavOpened = status;
    return of(this.sidenavOpened);
  }

  public sidenavToggle$(): Observable<boolean> {
    console.log(`Estoy en sidenavToggle en el servicio: ${this.sidenavOpened}`);
    this.sidenavOpened = !this.sidenavOpened;
    console.log(`Estoy en sidenavToggle en el servicio: ${this.sidenavOpened}`);
    return of(this.sidenavOpened);
  }
}
