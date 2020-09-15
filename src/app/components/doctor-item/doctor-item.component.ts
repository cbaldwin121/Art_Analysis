import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.scss'],
})
export class DoctorItemComponent implements OnInit {

  @Input() photo: string;
  @Input() name: string;
  @Input() speciality: string;
  @Input() stars: number;
  @Input() reviews: number;

  constructor() { }

  ngOnInit() {}

}
