import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasCerradasComponent } from './encuestas-cerradas.component';

describe('EncuestasCerradasComponent', () => {
  let component: EncuestasCerradasComponent;
  let fixture: ComponentFixture<EncuestasCerradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestasCerradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasCerradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
