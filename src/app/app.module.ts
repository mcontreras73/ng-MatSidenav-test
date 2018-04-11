import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { NavsModule } from './layouts/navs/navs.module';
import { AppRoutingModule } from './app-routing.module';
import { MainpageComponent } from './views/mainpage/mainpage.component';

@NgModule({
  declarations: [AppComponent, MainpageComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    NavsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
