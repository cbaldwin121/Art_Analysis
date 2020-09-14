import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { ModalController } from '@ionic/angular';
import { ConfirmModalPage } from '../confirm-modal/confirm-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-step-confirmation',
  templateUrl: './appointment-step-confirmation.page.html',
  styleUrls: ['./appointment-step-confirmation.page.scss'],
})
export class AppointmentStepConfirmationPage implements OnInit {

  appointment: any;

  constructor(private dataService: DataService, private modal: ModalController, private route: Router) { }

  ngOnInit() {
    this.appointment = this.dataService.getAppointmentById(1);
  }

  async confirm(id: number) {
    this.route.navigate(['/tabs/appointment']);
    const modal = await this.modal.create({
      component: ConfirmModalPage,
      cssClass: 'modal-container',
    });
    return await modal.present();
  }
}
