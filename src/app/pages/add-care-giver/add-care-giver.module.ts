import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCareGiverPageRoutingModule } from './add-care-giver-routing.module';

import { AddCareGiverPage } from './add-care-giver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCareGiverPageRoutingModule
  ],
  declarations: [AddCareGiverPage]
})
export class AddCareGiverPageModule {}
