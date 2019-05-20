import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMensajeDetalle } from '../dto/imensaje-detalle';
import { IChatConversacion } from '../dto/ichat-conversacion';

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
    this.cambiarConversacion(detalle);
    console.log(detalle)
  }

  cambiarConversacion(detalle:IMensajeDetalle){
    this.conversacion.estado = detalle.estado;
    this.conversacion.nombre = detalle.nombre;
    this.conversacion.id = detalle.id;
    this.conversacion.mensajes = [];
    this.conversacion.img = detalle.img;
  }

}
