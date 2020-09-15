import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.scss']
})
export class AppointmentItemComponent implements OnInit {
  @Input() photo: string;
  @Input() name: string;
  @Input() date: string;
  @Input() status: string;
  @Input() place: string;

  isOpen = false;

  constructor() {}

  ngOnInit() {}
}
