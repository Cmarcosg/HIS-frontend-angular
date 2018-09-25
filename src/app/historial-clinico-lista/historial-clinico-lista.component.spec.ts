import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialClinicoListaComponent } from './historial-clinico-lista.component';

describe('HistorialClinicoListaComponent', () => {
  let component: HistorialClinicoListaComponent;
  let fixture: ComponentFixture<HistorialClinicoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialClinicoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialClinicoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
