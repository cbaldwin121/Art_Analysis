import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorProfilePageRoutingModule } from './doctor-profile-routing.module';

import { DoctorProfilePage } from './doctor-profile.page';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { ComponentsModule } from 'src/app/components/components.module';

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
