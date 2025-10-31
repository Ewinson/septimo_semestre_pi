import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { DocumentacionComponent } from './components/documentacion/documentacion.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { PreferenciasComponent } from './components/preferencias/preferencias.component';
import { CerrarSesionComponent } from './components/cerrar-sesion/cerrar-sesion.component';

export const routes: Routes = [
  // 👉 Ruta inicial
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 👉 Login (lazy load)
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },

  // 👉 Rutas principales
  { path: 'dashboard', component: DashboardComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'soporte', component: SoporteComponent },
  { path: 'documentacion', component: DocumentacionComponent },
  { path: 'cuenta', component: CuentaComponent },
  { path: 'preferencias', component: PreferenciasComponent },
  { path: 'cerrar-sesion', component: CerrarSesionComponent },

  // 👉 Cualquier otra ruta no existente → login
  { path: '**', redirectTo: 'login' },
];
