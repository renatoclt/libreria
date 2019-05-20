import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMensajeDetalle } from '../../dto/imensaje-detalle';

@Component({
  selector: 'ngx-utilitario-chat-lista',
  templateUrl: './chat-lista.component.html',
  styleUrls: ['./chat-lista.component.scss']
})
export class ChatListaComponent implements OnInit {

  
  @Input() lista:IMensajeDetalle[] = [];
  @Output() clickLista:EventEmitter<any> =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  click(detalle:IMensajeDetalle){
    this.clickLista.emit(detalle);
  }

}
