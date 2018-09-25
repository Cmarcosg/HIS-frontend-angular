import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialClinicoDetallesComponent } from './historial-clinico-detalles.component';

describe('HistorialClinicoDetallesComponent', () => {
  let component: HistorialClinicoDetallesComponent;
  let fixture: ComponentFixture<HistorialClinicoDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialClinicoDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialClinicoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
