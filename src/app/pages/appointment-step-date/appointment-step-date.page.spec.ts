import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppointmentStepDatePage } from './appointment-step-date.page';

describe('AppointmentStepDatePage', () => {
  let component: AppointmentStepDatePage;
  let fixture: ComponentFixture<AppointmentStepDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentStepDatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentStepDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
