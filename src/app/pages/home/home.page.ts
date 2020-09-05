import { Component } from '@angular/core';
import { TestDbService } from 'src/app/services/test-db.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  result$: Observable<any>;

  constructor(
    private _testdbservice: TestDbService
  ) {
    this.result$ = _testdbservice.resolveItems();
  }

}
