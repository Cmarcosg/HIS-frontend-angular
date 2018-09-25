import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  pass: string;
  error: string;
  constructor(private apirestService: ApirestService, public router: Router ) {
  }
  ngOnInit() {
  }
  acceder() {
    if ( this.apirestService.login(this.user, this.pass)) {
      this.error = '';
      this.user = '';
      this.pass = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Usuario y contraseña incorrectos';
    }
  }
}
