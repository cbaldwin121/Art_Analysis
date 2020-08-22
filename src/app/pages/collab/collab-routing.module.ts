import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollabPage } from './collab.page';

const routes: Routes = [
  {
    path: '',
    component: CollabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollabPageRoutingModule {}
