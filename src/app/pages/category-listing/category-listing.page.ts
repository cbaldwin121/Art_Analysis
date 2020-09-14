import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { ModalController } from '@ionic/angular';
import { FilterModalPage } from '../filter-modal/filter-modal.page';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.page.html',
  styleUrls: ['./category-listing.page.scss'],
})
export class CategoryListingPage implements OnInit {
  data = [];

  constructor(private dataService: DataService, private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.getDoctors();
  }

   getDoctors() {
    this.data = this.dataService.getData();
  }

  async openFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterModalPage,
      cssClass: 'modal-transparency',
      id: 'ModalFilter',
    });
    return await modal.present();
  }
}
