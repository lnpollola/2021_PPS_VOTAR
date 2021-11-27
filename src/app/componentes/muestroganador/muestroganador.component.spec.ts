import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestroganadorComponent } from './muestroganador.component';

describe('MuestroganadorComponent', () => {
  let component: MuestroganadorComponent;
  let fixture: ComponentFixture<MuestroganadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestroganadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestroganadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
