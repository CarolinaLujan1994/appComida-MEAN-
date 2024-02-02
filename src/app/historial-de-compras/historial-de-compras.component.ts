import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { HistorialDeComprasModel } from '../models/historialDeCompras.models';

@Component({
  selector: 'app-historial-de-compras',
  standalone: true,
  imports: [],
  templateUrl: './historial-de-compras.component.html',
  styleUrl: './historial-de-compras.component.css'
})
export class HistorialDeComprasComponent {

  public historialDeCompras: HistorialDeComprasModel[] = []

  constructor(
    private menuService: ServicesService
  ) {

  }

  ngOnInit(): void {
    this.obtenerHistorialDeCompras()
  }

  obtenerHistorialDeCompras() {
/*     this.menuService.obtenerHistorialDeCompras().subscribe({resp: any}) => {
        this.historialDeCompras = resp
      })   */
  }

}
