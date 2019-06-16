import { Input, Component, SimpleChanges, OnInit, OnChanges, SimpleChange, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'ngx-utilitario-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() titulo: string;
  @Input() subtitulo: string;
  /**
   * recibe el icono a usar
   */
  @Input() icono = 'fa fa-user';
  @Input() classTexto = 'w-80 float-left';
  /**
   * Enviar el tamaño de columnas y el tamaño del icono
   */
  @Input() classIcono = 'w-20 fontSize2-5';
  @Input() color = '#000';
  @Output() click: EventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clickCard($event) {
    this.click.emit($event);
  }
}
