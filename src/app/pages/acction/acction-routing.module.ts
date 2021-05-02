import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcctionPage } from './acction.page';

const routes: Routes = [
  {
    path: '',
    component: AcctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcctionPageRoutingModule {}
