import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes'
import { RouterModule } from '@angular/router';
import { MenusComponent } from './menus/menus.component';
import { HistorialDeComprasComponent } from './historial-de-compras/historial-de-compras.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    MenusComponent,
    HistorialDeComprasComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }
