import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorProfilePage } from './doctor-profile.page';
import { ComponentsModule } from 'app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: DoctorProfilePage
  }
];

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class DoctorProfilePageRoutingModule {}
