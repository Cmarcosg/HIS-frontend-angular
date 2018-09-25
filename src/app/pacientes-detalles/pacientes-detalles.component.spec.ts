import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesDetallesComponent } from './pacientes-detalles.component';

describe('PacientesDetallesComponent', () => {
  let component: PacientesDetallesComponent;
  let fixture: ComponentFixture<PacientesDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
