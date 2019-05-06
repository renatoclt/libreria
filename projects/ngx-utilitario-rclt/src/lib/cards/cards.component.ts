import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-utilitario-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  @Input() titulo:string;
  @Input() subtitulo:string;
  /**
   * recibe el icono a usar
   */
  @Input() icono:string = "fa fa-user";
  @Input() classTexto:string = "w-80 float-left";
  /**
   * Enviar el tamaño de columnas y el tamaño del icono
   */
  @Input() classImagen:string = "w-20 fontSize40";
  @Input() color:string = "#000";

  constructor() { }
  
  ngOnInit() {
  }
  
}
