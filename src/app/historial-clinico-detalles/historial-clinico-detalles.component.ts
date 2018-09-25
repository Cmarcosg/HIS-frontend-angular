import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-historial-clinico-detalles',
  templateUrl: './historial-clinico-detalles.component.html',
  styleUrls: ['./historial-clinico-detalles.component.css']
})
export class HistorialClinicoDetallesComponent implements OnInit {
    datos = [];
      constructor(private apirest: ApirestService) { }

  ngOnInit() {
      this.datos = this.apirest.detailhistory();
  }
}
