import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesCursadasComponent } from './clases-cursadas.component';

describe('ClasesCursadasComponent', () => {
  let component: ClasesCursadasComponent;
  let fixture: ComponentFixture<ClasesCursadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasesCursadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasesCursadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
