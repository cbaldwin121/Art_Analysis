import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day-button',
  templateUrl: './day-button.component.html',
  styleUrls: ['./day-button.component.scss'],
})
export class DayButtonComponent implements OnInit {

  @Input() day: string;
  @Input() number: number;

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
