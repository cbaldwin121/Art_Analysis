import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoutModalPage } from './logout-modal.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [LogoutModalPage]
})
export class LogoutModalPageModule {}
