import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-pacientes-detalles',
  templateUrl: './pacientes-detalles.component.html',
  styleUrls: ['./pacientes-detalles.component.css']
})
export class PacientesDetallesComponent implements OnInit {
  datos: Object;
  constructor(private apirest: ApirestService) { }
  ngOnInit() {
    this.datos = this.apirest.detailpatient();
  }
}
