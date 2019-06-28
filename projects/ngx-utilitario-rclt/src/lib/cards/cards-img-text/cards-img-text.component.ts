import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/**
 * Card con titulo, descripcion, etiqueta, icono e imagen
 */
@Component({
  selector: 'ngx-utilitario-cards-img-text',
  templateUrl: './cards-img-text.component.html',
  styleUrls: ['./cards-img-text.component.css']
})
export class CardsImgTextComponent implements OnInit {
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
   * recibe el icono a usar
   */
  @Input() icono = 'fa fa-user';
  /**
   * Enviar el tamaño de columnas y el tamaño del icono
   */
  @Input() classTexto = 'w-80 float-left';
  /**
   * Clase para asignar al icono
   */
  @Input() classIcono = 'col-1 align-middle cardIcono';
  /**
   * Color del icono
   */
  @Input() color = '#000';
  /**
   * Altura del icono
   */
  @Input() height = '6.5rem';
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
