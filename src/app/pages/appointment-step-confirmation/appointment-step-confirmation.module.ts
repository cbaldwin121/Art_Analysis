import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppointmentStepConfirmationPageRoutingModule } from './appointment-step-confirmation-routing.module';
import { AppointmentStepConfirmationPage } from './appointment-step-confirmation.page';
import { ComponentsModule } from 'app/components/components.module';
import { DirectivesModule } from 'app/directives/directives.module';
import { ConfirmModalPage } from '../confirm-modal/confirm-modal.page';
import { ConfirmModalPageModule } from '../confirm-modal/confirm-modal.module';

@NgModule({
  entryComponents: [
    ConfirmModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentStepConfirmationPageRoutingModule,
    ComponentsModule,
    DirectivesModule,
    ConfirmModalPageModule
  ],
  declarations: [AppointmentStepConfirmationPage]
})
export class AppointmentStepConfirmationPageModule {}
