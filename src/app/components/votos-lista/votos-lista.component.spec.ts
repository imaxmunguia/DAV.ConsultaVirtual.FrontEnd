import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotosListaComponent } from './votos-lista.component';

describe('VotosListaComponent', () => {
  let component: VotosListaComponent;
  let fixture: ComponentFixture<VotosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
