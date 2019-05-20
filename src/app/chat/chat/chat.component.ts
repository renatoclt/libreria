import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMensajeDetalle } from '../dto/imensaje-detalle';

@Component({
  selector: 'ngx-utilitario-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() lista:IMensajeDetalle[] = [];
  @Output() clickLista:EventEmitter<any> =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickListaDetalle(detalle:IMensajeDetalle){
    this.clickLista.emit(detalle);
  }

}
