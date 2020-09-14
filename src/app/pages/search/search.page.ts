import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { FilterModalPage } from '../filter-modal/filter-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit {
  data = [];

  constructor(private dataService: DataService, private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.getDoctors();
  }

  async openFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterModalPage,
      cssClass: 'modal-transparency',
      id: 'ModalFilter',
     /*  componentProps: {
        doctor: this.dataService.getDataById(id)
      } */
    });
    return await modal.present();
  }

  getDoctors() {
    this.data = this.dataService.getData();
  }
}
