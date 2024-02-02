import { Routes } from '@angular/router';
import { MenusComponent } from './menus/menus.component';
import { HistorialDeComprasComponent } from './historial-de-compras/historial-de-compras.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'menus', component: MenusComponent},
    { path: 'historialDeCompras', component: HistorialDeComprasComponent},
];
