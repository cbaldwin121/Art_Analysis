import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollabPageRoutingModule } from './collab-routing.module';

import { CollabPage } from './collab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollabPageRoutingModule
  ],
  declarations: [CollabPage]
})
export class CollabPageModule {}
