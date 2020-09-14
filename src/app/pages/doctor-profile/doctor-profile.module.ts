import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorProfilePageRoutingModule } from './doctor-profile-routing.module';

import { DoctorProfilePage } from './doctor-profile.page';
import { DirectivesModule } from 'app/directives/directives.module';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectivesModule,
    DoctorProfilePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DoctorProfilePage]
})
export class DoctorProfilePageModule {}
