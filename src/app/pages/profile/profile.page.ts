import { Component, OnInit } from '@angular/core';
import { LogoutModalPage } from '../logout-modal/logout-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private modalController: ModalController) { }

  async logoutModal(id: number) {
    const modal = await this.modalController.create({
      component: LogoutModalPage,
      cssClass: 'modal-container',
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
