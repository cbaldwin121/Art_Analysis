import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-small-card',
  templateUrl: './doctor-small-card.component.html',
  styleUrls: ['./doctor-small-card.component.scss'],
})
export class DoctorSmallCardComponent implements OnInit {

  @Input() photo: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
