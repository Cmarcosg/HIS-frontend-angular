import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-historial-clinico-lista',
  templateUrl: './historial-clinico-lista.component.html',
  styleUrls: ['./historial-clinico-lista.component.css']
})
export class HistorialClinicoListaComponent implements OnInit {
  arr: Array<any>;
  constructor(private apirest: ApirestService) { }

  ngOnInit() {
    this.arr = this.apirest.listhist();
  }
}
