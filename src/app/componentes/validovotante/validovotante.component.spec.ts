import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidovotanteComponent } from './validovotante.component';

describe('ValidovotanteComponent', () => {
  let component: ValidovotanteComponent;
  let fixture: ComponentFixture<ValidovotanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidovotanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidovotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
