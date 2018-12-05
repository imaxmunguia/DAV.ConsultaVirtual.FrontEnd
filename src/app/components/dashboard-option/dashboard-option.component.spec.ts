import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOptionComponent } from './dashboard-option.component';

describe('DashboardOptionComponent', () => {
  let component: DashboardOptionComponent;
  let fixture: ComponentFixture<DashboardOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
