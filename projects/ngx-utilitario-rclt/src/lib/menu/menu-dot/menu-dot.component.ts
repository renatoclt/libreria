import { Component, OnInit } from '@angular/core';
import { IMenuDot } from '../dto/Imenu-dto';

@Component({
  selector: 'ngx-utilitario-menu-dot',
  templateUrl: './menu-dot.component.html',
  styleUrls: ['./menu-dot.component.scss']
})
export class MenuDotComponent implements OnInit {

  menu1:IMenuDot={
    icon: 'block',
    nombre: 'bloqueo',
    text: 'Ver Chats Bloqueados'
  }
  menu2:IMenuDot={
    icon: 'block',
    nombre: 'bloqueo',
    text: 'block 2'
  }
  menus:IMenuDot[] = [this.menu1, this.menu2];
  constructor() { }

  ngOnInit() {
  }

  menuClick(item:IMenuDot){
    console.log(item);
  }
}
