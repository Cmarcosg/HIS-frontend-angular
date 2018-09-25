import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PacientesListaComponent } from './pacientes-lista/pacientes-lista.component';
import { PacientesDetallesComponent } from './pacientes-detalles/pacientes-detalles.component';
import { HistorialClinicoListaComponent } from './historial-clinico-lista/historial-clinico-lista.component';
import { HistorialClinicoDetallesComponent } from './historial-clinico-detalles/historial-clinico-detalles.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { FormsModule } from '@angular/forms';
import {AuthGuard} from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PacientesListaComponent,
    PacientesDetallesComponent,
    HistorialClinicoListaComponent,
    HistorialClinicoDetallesComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
