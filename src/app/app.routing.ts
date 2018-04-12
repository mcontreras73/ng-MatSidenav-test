import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './views/mainpage/mainpage.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent
  },
  {
    path: 'sign-in',
    loadChildren: './views/sign-in/sign-in.module#SignInModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
