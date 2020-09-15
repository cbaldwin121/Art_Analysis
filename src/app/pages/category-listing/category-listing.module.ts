import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoryListingPage } from './category-listing.page';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { FilterModalPageModule } from '../filter-modal/filter-modal.module';
import { FilterModalPage } from '../filter-modal/filter-modal.page';

@NgModule({
  entryComponents: [
    FilterModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FilterModalPageModule,
    RouterModule.forChild([{ path: '', component: CategoryListingPage }])
  ],
  declarations: [CategoryListingPage]
})
export class CategoryListingPageModule {}
