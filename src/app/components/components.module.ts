import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorItemComponent } from './doctor-item/doctor-item.component';
import { IonicModule } from '@ionic/angular';
import { DoctorSmallCardComponent } from './doctor-small-card/doctor-small-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { RecentSearchItemComponent } from './recent-search-item/recent-search-item.component';
import { AppointmentItemComponent } from './appointment-item/appointment-item.component';
import { ReviewItemComponent } from './review-item/review-item.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { NotificationItemComponent } from './notification-item/notification-item.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { HourButtonComponent } from './hour-button/hour-button.component';
import { DayButtonComponent } from './day-button/day-button.component';


@NgModule({
  declarations: [
    DoctorItemComponent,
    DoctorSmallCardComponent,
    CategoryCardComponent,
    RecentSearchItemComponent,
    AppointmentItemComponent,
    ReviewItemComponent,
    EmptyStateComponent,
    NotificationItemComponent,
    StarRatingComponent,
    HourButtonComponent,
    DayButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [
    DoctorItemComponent,
    DoctorSmallCardComponent,
    CategoryCardComponent,
    RecentSearchItemComponent,
    AppointmentItemComponent,
    ReviewItemComponent,
    EmptyStateComponent,
    NotificationItemComponent,
    StarRatingComponent,
    HourButtonComponent,
    DayButtonComponent
  ]
})
export class ComponentsModule { }
