import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-utilitario-cards-img-text',
  templateUrl: './cards-img-text.component.html',
  styleUrls: ['./cards-img-text.component.scss']
})
export class CardsImgTextComponent implements OnInit {

  @Input() titulo:string;
  @Input() descripcion:string ="afdasdf";
  @Input() etiqueta:string ="etiqueta";
  @Input() imagen:string = './assets/test.jpg';
  /**
   * recibe el icono a usar
   */
  @Input() icono:string = "fa fa-user";
  @Input() classTexto:string = "w-80 float-left";
  /**
   * Enviar el tamaño de columnas y el tamaño del icono
   */
  @Input() classIcono:string = "col-1 align-middle";
  @Input() color:string = "#000";
  @Input() height:string = "6.5rem";
  @Output() click:EventEmitter<any> = new EventEmitter();
  constructor() { }
  
  ngOnInit() {
  }
  clickCard($event){
    this.click.emit($event);
  }
}
