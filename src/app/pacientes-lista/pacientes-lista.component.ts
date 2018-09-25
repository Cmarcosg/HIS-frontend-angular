import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-pacientes-lista',
  templateUrl: './pacientes-lista.component.html',
  styleUrls: ['./pacientes-lista.component.css']
})
export class PacientesListaComponent implements OnInit {
  arr: Array<any>;
  constructor(private apirest: ApirestService ) { }

  ngOnInit() {
    this.arr = this.apirest.listuser();
  }
}
