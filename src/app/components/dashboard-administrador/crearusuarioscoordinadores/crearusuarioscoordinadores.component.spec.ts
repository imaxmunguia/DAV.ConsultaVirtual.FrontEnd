import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearusuarioscoordinadoresComponent } from './crearusuarioscoordinadores.component';

describe('CrearusuarioscoordinadoresComponent', () => {
  let component: CrearusuarioscoordinadoresComponent;
  let fixture: ComponentFixture<CrearusuarioscoordinadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearusuarioscoordinadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearusuarioscoordinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
