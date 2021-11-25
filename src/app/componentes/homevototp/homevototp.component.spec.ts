import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomevototpComponent } from './homevototp.component';

describe('HomevototpComponent', () => {
  let component: HomevototpComponent;
  let fixture: ComponentFixture<HomevototpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomevototpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomevototpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
