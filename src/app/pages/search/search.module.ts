import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { ComponentsModule } from 'app/components/components.module';
import { FilterModalPage } from '../filter-modal/filter-modal.page';
import { FilterModalPageModule } from '../filter-modal/filter-modal.module';

@NgModule({
  entryComponents: [
    FilterModalPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    FilterModalPageModule,
    RouterModule.forChild([{ path: '', component: SearchPage }])
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
