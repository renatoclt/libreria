import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/**
 * Card con titulo, descripcion, etiqueta, icono y contenido
 */
@Component({
  selector: 'ngx-utilitario-cards-img-text-ndiv',
  templateUrl: './cards-img-text-ndiv.component.html',
  styleUrls: ['./cards-img-text-ndiv.component.css']
})
export class CardsImgTextNdivComponent implements OnInit {

  /**
   * Titulo a mostrar en el card
   */
  @Input() titulo: string;
  /**
   * Descripciòn a mostrar en el card
   */
  @Input() descripcion = 'afdasdf';
  /**
   * Etiqueta a mostrar en el card
   */
  @Input() etiqueta = 'etiqueta';
  /**
   * Imagen a mostrar en el card
   */
  @Input() imagen = './assets/test.jpg';
  /**
   * Enviar el tamaño de columnas y el tamaño del icono
   */
  @Input() classTexto = 'float-left';
  /**
   * Color del icono
   */
  @Input() color = '#000';
  /**
   * Altura del icono
   */
  @Input() height = '6.5rem';
  /**
   * Contenido a mostrar dinamicamente
   */
  @Input() contenido: any[] = [];
  /**
   * Acccion click en el card
   */
  @Output() click: EventEmitter<any> = new EventEmitter();

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
   * Envia un evento si hace click en el card
   * @param $event Caracteristicas del evento click en el card
   */
  clickCard($event) {
    this.click.emit($event);
  }
}
