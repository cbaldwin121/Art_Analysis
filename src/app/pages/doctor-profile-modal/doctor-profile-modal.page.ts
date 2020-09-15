import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-profile-modal',
  templateUrl: './doctor-profile-modal.page.html',
  styleUrls: ['./doctor-profile-modal.page.scss']
})
export class DoctorProfileModalPage {
  @Input() doctor;
  @Input() reviews;

  constructor() {}
}
