import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  notifications = [
    {
      id: 1,
      title: 'Your appointment has been approved',
      date: 'Wed, Dec 29, 2020',
      photo: 'assets/icon/001-medicine.svg',
      color: 'blue',
      text: 'In many cases, when it comes to ecommerce lead generation, you only have one visit to snag the sale.'
    },
    {
      id: 2,
      title: 'Your appointment has been canceled',
      date: 'Wed, Dec 20, 2020',
      photo: 'assets/icon/006-medical-history.svg',
      color: 'red',
      text: 'In many cases, when it comes to ecommerce, you only have one visit to snag the sale.'
    }
  ];

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
