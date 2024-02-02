import { Component } from '@angular/core';
import { MenuModel } from '../models/menus.models';
import { ServicesService } from '../services.service';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent {
  public menus: MenuModel[] = []
  //public menus: any

  constructor(
    private menuService: ServicesService
  ) {

  }

  ngOnInit(): void {
    this.obtenerMenus()
  }

  obtenerMenus() {
    this.menuService.obtenerMenus().subscribe(resp => {
      console.log(resp)
      this.menus = resp
    }) 
  }
}
