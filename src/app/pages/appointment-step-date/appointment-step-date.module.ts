import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentStepDatePageRoutingModule } from './appointment-step-date-routing.module';

import { AppointmentStepDatePage } from './appointment-step-date.page';
import { ComponentsModule } from 'app/components/components.module';
import { DirectivesModule } from 'app/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentStepDatePageRoutingModule,
    ComponentsModule,
    DirectivesModule
  ],
  declarations: [AppointmentStepDatePage]
})
export class AppointmentStepDatePageModule {}
