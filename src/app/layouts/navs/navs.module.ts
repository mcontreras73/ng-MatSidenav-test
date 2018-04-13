import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavsService } from './services/navs.service';
import { NavsComponent } from './navs/navs.component';
import { NavbarComponent } from './navs-components/navbar/navbar.component';
import { SidenavComponent } from './navs-components/sidenav/sidenav.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [NavsComponent, NavbarComponent, SidenavComponent],
  exports: [NavsComponent],
  providers: [NavsService]
})
export class NavsModule {}
