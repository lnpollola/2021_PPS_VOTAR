import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEscuelasComponent } from './gestion-escuelas.component';

describe('GestionEscuelasComponent', () => {
  let component: GestionEscuelasComponent;
  let fixture: ComponentFixture<GestionEscuelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEscuelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEscuelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
