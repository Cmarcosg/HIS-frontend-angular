import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateManagerService } from './state-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private stateManager: StateManagerService, private router: Router) {
  }
  canActivate() {
      const Logged = this.stateManager.Logged();
      if (!Logged) {
          this.router.navigate(['login']);
      }
      return !!Logged;
  }
}
