import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonservirComponent } from './botonservir.component';

describe('BotonservirComponent', () => {
  let component: BotonservirComponent;
  let fixture: ComponentFixture<BotonservirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonservirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonservirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
