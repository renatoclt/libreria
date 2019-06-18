import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/**
 * Card con titulo, subtitulo e icono
 */
@Component({
  selector: 'ngx-utilitario-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  /**
   * Titulo a mostrar en el card
   */
  @Input() titulo: string;
  /**
   * Subtitulo a mostrar en el card
   */
  @Input() subtitulo: string;
  /**
   * Icono a mostrar en el card
   */
  @Input() icono = 'fa fa-user'
  /**
   * Clase a aplicar al texto
   */;
  @Input() classTexto = 'w-80 float-left';
  /**
   * Enviar el tamaño de columnas y el tamaño del icono
   */
  @Input() classIcono = 'w-20 fontSize2-5';
  /**
   * Color del icono a mostrar
   */
  @Input() color = '#000';
  /**
   * Enviar accion de click en el card
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
