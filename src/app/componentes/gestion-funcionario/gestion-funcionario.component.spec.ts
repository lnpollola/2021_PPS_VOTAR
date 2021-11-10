import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFuncionarioComponent } from './gestion-funcionario.component';

describe('GestionFuncionarioComponent', () => {
  let component: GestionFuncionarioComponent;
  let fixture: ComponentFixture<GestionFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
