import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-step-date',
  templateUrl: './appointment-step-date.page.html',
  styleUrls: ['./appointment-step-date.page.scss'],
})
export class AppointmentStepDatePage implements OnInit {

  
  doctor = {
    id: 4,
    name: 'MsC John Carter',
    speciality: 'Internal medicine',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=124&q=80',
    reviews: 582,
    stars: 4.8,
    bio:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    member_since: 'Mar, 2005',
    appointments: 1200,
    services: [
      {
        id: 1,
        service: 'Dental Consultant',
        description:
          'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        price: 20,
        isChecked: false
      },
      {
        id: 2,
        service: 'Hair Loss Treatment',
        description:
          'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        price: 25,
        isChecked: false
      },
      {
        id: 3,
        service: 'Acne/Pimples Treatment',
        description:
          'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        price: 90,
        isChecked: false
      },
      {
        id: 4,
        service: 'Wart removal',
        description:
          'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        price: 80,
        isChecked: false
      }
    ]
  };

  constructor(private route: Router) { }

  ngOnInit() {

  }

  goBack() {
    this.route.navigate(['/doctor']);
  }

  onNext() {
    this.route.navigate(['/appointment-confirmation']);
  }

  onClick($event) {
    console.log($event);
  }
}
