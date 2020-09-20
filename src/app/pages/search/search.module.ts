
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { ComponentsModule } from 'app/components/components.module';
import { AddProfilePageModule } from '../add-profile/add-profile.module';

@NgModule({
  entryComponents: [
    AddProfilePageModule
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    AddProfilePageModule,
    RouterModule.forChild([{path: '', component: SearchPage}])
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
