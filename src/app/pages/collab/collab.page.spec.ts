import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CollabPage } from './collab.page';

describe('CollabPage', () => {
  let component: CollabPage;
  let fixture: ComponentFixture<CollabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CollabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
