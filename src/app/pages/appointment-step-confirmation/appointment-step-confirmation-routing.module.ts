import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentStepConfirmationPage } from './appointment-step-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentStepConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentStepConfirmationPageRoutingModule {}
