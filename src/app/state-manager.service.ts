import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  state: any = {auth: null};
  login(users) {
    this.state.auth = {role: users.role, uid: users.uid, name: users.name , surname: users.surname , dni: users.dni};
  }
    Logged() {
      return this.state.auth;
    }
    getState() {
      return this.state;
    }
    getRole() {
      return  this.state.auth.role;
    }
    logout() {
      this.state.auth = null;
    }
    getUid() {
      return this.state.auth.uid;
    }
  }

