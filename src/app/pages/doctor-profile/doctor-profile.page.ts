import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.page.html',
  styleUrls: ['./doctor-profile.page.scss'],
})
export class DoctorProfilePage implements OnInit {

  reviews: any;

  constructor(private service: DataService, private route: Router) { }

  ngOnInit() {
    this.reviews = this.service.getReviews();
  }

  onClick() {
    this.route.navigate(['/appointment-date']);
  }
}
