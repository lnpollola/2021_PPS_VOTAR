import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidomesaComponent } from './validomesa.component';

describe('ValidomesaComponent', () => {
  let component: ValidomesaComponent;
  let fixture: ComponentFixture<ValidomesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidomesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidomesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
