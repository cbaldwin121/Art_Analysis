import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogoutModalPage } from './logout-modal.page';

describe('LogoutModalPage', () => {
  let component: LogoutModalPage;
  let fixture: ComponentFixture<LogoutModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoutModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
