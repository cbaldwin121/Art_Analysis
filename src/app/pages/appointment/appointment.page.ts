import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-appointment',
  templateUrl: 'appointment.page.html',
  styleUrls: ['appointment.page.scss']
})
export class AppointmentPage implements OnInit {


  appointments = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments() {
    this.appointments = this.dataService.getAppointments();
  }
}
