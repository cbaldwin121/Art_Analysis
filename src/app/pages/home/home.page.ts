import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ModalController } from '@ionic/angular';
import { DoctorProfileModalPage } from '../doctor-profile-modal/doctor-profile-modal.page';
import { NotificationsPage } from '../notifications/notifications.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  data = [];
  categories = [];
  reviews = [];

  catConfig = {
    // tslint:disable-next-line: indent
    spaceBetween: 2,
    slidesPerView: 4
  };

  cardConfig = {
    // tslint:disable-next-line: indent
    spaceBetween: 2,
    slidesPerView: 3
  };

  constructor(
    private dataService: DataService,
    private modalCtrl: ModalController
  ) {}

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
}
