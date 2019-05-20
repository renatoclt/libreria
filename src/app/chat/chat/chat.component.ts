import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMensajeDetalle } from '../dto/imensaje-detalle';
import { IChatConversacion } from 'ngx-utilitario-rclt/lib/chat/dto/ichat-conversacion';

@Component({
  selector: 'ngx-utilitario-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() lista:IMensajeDetalle[] = [];
  @Input() conversacion: IChatConversacion
  @Output() clickLista:EventEmitter<any> =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickListaDetalle(detalle:any){
    this.clickLista.emit(detalle);
  }

}
