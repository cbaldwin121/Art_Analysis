import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hour-button',
  templateUrl: './hour-button.component.html',
  styleUrls: ['./hour-button.component.scss'],
})
export class HourButtonComponent implements OnInit {

  @Input() hour: string;
  @Output() updateState: EventEmitter<boolean>;

  active = false;

  constructor() {
    this.updateState = new EventEmitter();
   }

  ngOnInit() {}

  setActive($event) {
    this.active = !this.active;
    this.updateState.emit(this.active);
  }

}
