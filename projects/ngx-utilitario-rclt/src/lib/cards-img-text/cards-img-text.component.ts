import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-utilitario-cards-img-text',
  templateUrl: './cards-img-text.component.html',
  styleUrls: ['./cards-img-text.component.scss']
})
export class CardsImgTextComponent implements OnInit {

  @Input() titulo: string;
  @Input() descripcion = 'afdasdf';
  @Input() etiqueta = 'etiqueta';
  @Input() imagen = './assets/test.jpg';
  /**
   * recibe el icono a usar
   */
  @Input() icono = 'fa fa-user';
  @Input() classTexto = 'w-80 float-left';
  /**
   * Enviar el tamaño de columnas y el tamaño del icono
   */
  @Input() classIcono = 'col-1 align-middle cardIcono';
  @Input() color = '#000';
  @Input() height = '6.5rem';
  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  clickCard($event) {
    this.click.emit($event);
  }
}
