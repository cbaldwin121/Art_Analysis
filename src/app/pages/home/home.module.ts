import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { DoctorProfileModalPage } from '../doctor-profile-modal/doctor-profile-modal.page';
import { DoctorProfileModalPageModule } from '../doctor-profile-modal/doctor-profile-modal.module';
import { NotificationsPage } from '../notifications/notifications.page';
import { NotificationsPageModule } from '../notifications/notifications.module';

@NgModule({
  entryComponents: [
    DoctorProfileModalPage,
    NotificationsPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    DirectivesModule,
    DoctorProfileModalPageModule,
    NotificationsPageModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
