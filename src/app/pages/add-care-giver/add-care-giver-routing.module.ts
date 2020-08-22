import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCareGiverPage } from './add-care-giver.page';

const routes: Routes = [
  {
    path: '',
    component: AddCareGiverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCareGiverPageRoutingModule {}
