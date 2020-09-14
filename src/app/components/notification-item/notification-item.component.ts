import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnInit {

  @Input() photo: string;
  @Input() color: string;
  @Input() title: string;
  @Input() date: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {}

}
