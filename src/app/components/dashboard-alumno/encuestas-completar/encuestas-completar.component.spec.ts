import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasCompletarComponent } from './encuestas-completar.component';

describe('EncuestasCompletarComponent', () => {
  let component: EncuestasCompletarComponent;
  let fixture: ComponentFixture<EncuestasCompletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestasCompletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasCompletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
