import { Component, OnInit } from '@angular/core';
import { IMenuDot } from '../dto/Imenu-dto';
/**
 * Mustra un menu dot
 */
@Component({
  selector: 'ngx-utilitario-menu-dot',
  templateUrl: './menu-dot.component.html',
})
export class MenuDotComponent implements OnInit {
 /**
  * Opciones de un menu
  */
 menu1: IMenuDot = {
   icon: 'block',
   nombre: 'bloqueo',
   text: 'Ver Chats Bloqueados'
  };
  /**
   * Opciones de un menu
   */
  menu2: IMenuDot = {
    icon: 'block',
    nombre: 'bloqueo',
    text: 'block 2'
  };
  /**
   * menu a mostrar
   */
  menus: IMenuDot[] = [this.menu1, this.menu2];
  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Al hacer click en un elemento retornara el nombre del menu que realizo click
   */
  menuClick(item: IMenuDot) {
  }
}
