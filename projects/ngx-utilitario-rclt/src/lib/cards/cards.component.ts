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
  @Input() classIcono:string = "w-20 fontSize2-5";
  @Input() color:string = "#7a5449";
  constructor() { }
  
  ngOnInit() {
  }
}
