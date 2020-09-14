import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentStepDatePage } from './appointment-step-date.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentStepDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentStepDatePageRoutingModule {}
