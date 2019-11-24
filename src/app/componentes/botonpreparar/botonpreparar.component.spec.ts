import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonprepararComponent } from './botonpreparar.component';

describe('BotonprepararComponent', () => {
  let component: BotonprepararComponent;
  let fixture: ComponentFixture<BotonprepararComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonprepararComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonprepararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
