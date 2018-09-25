import { Injectable } from '@angular/core';
import { StateManagerService } from './state-manager.service';
@Injectable({
  providedIn: 'root'
})
export class ApirestService {
   users = [
    {role: 'admin', uid: '1', name: 'Cristian', surname: 'Marcos', dni: '24430823', username: 'admin', password: 'admin'},
    {role: 'patient', uid: '2', name: 'Juan', surname: 'Perez', dni: '23456788', username: 'patient' , password: 'patient'},
    {role: 'patient', uid: '5', name: 'pepe', surname: 'cascos', dni: '23458934', username: 'patient1' , password: 'patient1'},
    {role: 'doctor', uid: '3', name: 'Nerea', surname: 'Sanchez', dni:  '23324033',  username: 'doctor' , password: 'doctor'},
    {role: 'technical', uid: '4', name: 'Hector', surname: 'Garcia', dni:  '14564775', username: 'technical' , password: 'technical'}
  ];
  history = [
    {userId: '2', doctorId: '3', log: 'Se ha roto el dedo del pie'},
    {userId: '2', doctorId: '3', log: 'Se ha roto el brazo'},
    {userId: '5', doctorId: '3', log: 'analitica'}
  ];
  constructor(private stateManager: StateManagerService) {}
  result = [];
  detail: Object;
  hislist = [];
  detailhis = [];
  login( user , pass) {
     const  loguser = this.users.find( usuario => usuario.username === user &&  usuario.password === pass );
     if (loguser) {
      this.stateManager.login(loguser);
     }
     return !!loguser;
    }
    listuser() {
      this.result = this.users.filter(user => user.role === 'patient');
      return this.result;
    }
    detailpatient() {
    return this.detail = this.stateManager.Logged();
    }
    listhist() {
      this.hislist = this.history;
      return this.hislist;
    }
    detailhistory() {
      return this.history;
      }
    getnamefromuid(uid) {
      return this.users.find( patient => patient.uid === patient.name);
    }
}
