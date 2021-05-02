import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcctionPageRoutingModule } from './acction-routing.module';

import { AcctionPage } from './acction.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcctionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AcctionPage]
})
export class AcctionPageModule {}
