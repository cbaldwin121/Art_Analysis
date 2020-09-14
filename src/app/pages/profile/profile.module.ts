import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { LogoutModalPage } from '../logout-modal/logout-modal.page';
import { LogoutModalPageModule } from '../logout-modal/logout-modal.module';

@NgModule({
  entryComponents: [
    LogoutModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    LogoutModalPageModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
