import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadervototpComponent } from './headervototp.component';

describe('HeadervototpComponent', () => {
  let component: HeadervototpComponent;
  let fixture: ComponentFixture<HeadervototpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadervototpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadervototpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
