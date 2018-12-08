import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClasesComponent } from './lista-clases.component';

describe('ListaClasesComponent', () => {
  let component: ListaClasesComponent;
  let fixture: ComponentFixture<ListaClasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaClasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
