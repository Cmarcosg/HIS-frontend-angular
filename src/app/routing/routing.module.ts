import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {AuthGuard} from '../auth.guard';
import { PacientesListaComponent } from '../pacientes-lista/pacientes-lista.component';
import { PacientesDetallesComponent } from '../pacientes-detalles/pacientes-detalles.component';
import { HistorialClinicoListaComponent } from '../historial-clinico-lista/historial-clinico-lista.component';
import { HistorialClinicoDetallesComponent } from '../historial-clinico-detalles/historial-clinico-detalles.component';
import { CrearUsuarioComponent } from '../crear-usuario/crear-usuario.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
  path: 'login',
  component: LoginComponent,
}, {
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard],
}, {
  path: 'patients',
  component: PacientesListaComponent,
  canActivate: [AuthGuard],
}, {
  path: 'patient/:uid',
  component: PacientesDetallesComponent,
  canActivate: [AuthGuard],
}, {
  path: 'historys',
  component: HistorialClinicoListaComponent,
  canActivate: [AuthGuard],
}, {
  path: 'history/:uid',
  component: HistorialClinicoDetallesComponent,
  canActivate: [AuthGuard],
}, {
  path: 'createuser',
  component: CrearUsuarioComponent,
  canActivate: [AuthGuard],
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( routes ),
  ],
  exports: [
      RouterModule
  ],
  declarations: []
} )
export class RoutingModule {
}
