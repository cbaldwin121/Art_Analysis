import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { ModalController } from '@ionic/angular';
import { AddProfilePage } from '../add-profile/add-profile.page';
import { ProfilePage } from '../profile/profile.page';
import { DoctorProfileModalPage } from '../doctor-profile-modal/doctor-profile-modal.page';
import { NotificationsPage } from '../notifications/notifications.page';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit {
  data = [];
  categories = [];
  reviews = [];

  constructor(private dataService: DataService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.getDoctors();
    this.getCategories();
  }

  getDoctors() {
    this.data = this.dataService.getData();
  }

  getCategories() {
    this.categories = this.dataService.getCategories();
  }

  getReviews() {
    this.reviews = this.dataService.getReviews();
  }


  async goToNotifications() {
    const modal = await this.modalCtrl.create({
        component: NotificationsPage
    });

    return await modal.present();
}
  async openAddProfile() {
    const modal = await this.modalCtrl.create({
      component: AddProfilePage,
      
    });
    return await modal.present();
  }

  async Profile() {
    const modal = await this.modalCtrl.create({
      component: ProfilePage,
      
    });
    return await modal.present();
  }

}
