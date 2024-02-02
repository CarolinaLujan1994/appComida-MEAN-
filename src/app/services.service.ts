import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuModel } from './models/menus.models';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
/*   url = 'http://localhost:4000/' */

  constructor(
    private http: HttpClient
  ) { }

  obtenerMenus(): Observable<MenuModel[]> {
    return this.http.get<MenuModel[]>('http://localhost:4000/api/menus/obtenerMenu')
  }

  obtenerHistorialDeCompras() {
    return this.http.get('http://localhost:4000/api/menus/obtenerHistorialDeCompras')
  }
}
