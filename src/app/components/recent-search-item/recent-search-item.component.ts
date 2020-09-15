import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recent-search-item",
  templateUrl: "./recent-search-item.component.html",
  styleUrls: ["./recent-search-item.component.scss"]
})
export class RecentSearchItemComponent implements OnInit {
  @Input() photo: string;
  @Input() name: string;
  @Input() speciality: string;

  constructor() {}

  ngOnInit() {}
}
