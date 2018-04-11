import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

import { NavsModule } from './layouts/navs/navs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    LayoutModule,
    NavsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
