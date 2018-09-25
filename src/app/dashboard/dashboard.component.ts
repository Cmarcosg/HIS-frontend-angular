import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../state-manager.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Logged: 'String';
  state: 'String';
  uid: 'String';
  constructor(private stateManager: StateManagerService, private router: Router) {
    this.state = stateManager.getState();
   }

  ngOnInit() {
    this.Logged = this.stateManager.getRole();
    this.uid = this.stateManager.getUid();
  }

  logout() {
    this.stateManager.logout();
    this.router.navigate(['login']);
  }
}
