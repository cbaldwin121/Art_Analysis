import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCareGiverPage } from './add-care-giver.page';

describe('AddCareGiverPage', () => {
  let component: AddCareGiverPage;
  let fixture: ComponentFixture<AddCareGiverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCareGiverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCareGiverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
