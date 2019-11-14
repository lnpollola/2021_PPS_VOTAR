import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMesasComponent } from './listado-mesas.component';

describe('ListadoMesasComponent', () => {
  let component: ListadoMesasComponent;
  let fixture: ComponentFixture<ListadoMesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
