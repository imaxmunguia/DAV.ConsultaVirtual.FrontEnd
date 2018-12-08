import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarusuarioscoordinadoresComponent } from './listarusuarioscoordinadores.component';

describe('ListarusuarioscoordinadoresComponent', () => {
  let component: ListarusuarioscoordinadoresComponent;
  let fixture: ComponentFixture<ListarusuarioscoordinadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarusuarioscoordinadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarusuarioscoordinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
