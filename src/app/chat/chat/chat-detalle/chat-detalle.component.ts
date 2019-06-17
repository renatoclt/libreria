import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMensajeDetalle } from '../../dto/imensaje-detalle';
import { IChatConversacionDetalle } from '../../dto/ichat-conversacion-detalle';
import { Fecha } from '../../../utilitario/fecha';
import { EBloqueoChat } from '../../dto/ebloqueo-chat';
import { EEstadoChat } from '../../dto/eestado-chat';

@Component({
  selector: 'ngx-utilitario-chat-detalle',
  templateUrl: './chat-detalle.component.html',
  styleUrls: ['./chat-detalle.component.scss']
})
export class ChatDetalleComponent implements OnInit {

  @Input() detalle: IMensajeDetalle = {
    bloqueo: EBloqueoChat.bloqueado,
    estado : EEstadoChat.conectado,
    id: '',
    img: '',
    mensaje: [],
    nombre: '',
    notificacion: 0
  };
  @Output() clickDetalle: EventEmitter<any> = new EventEmitter();
  fecha: Fecha;
  constructor() {
    this.fecha = new Fecha();
  }
  ngOnInit() {
  }
  click() {
    this.clickDetalle.emit(this.detalle);
  }
  ultimoMensaje(mensajes: IChatConversacionDetalle[]) {
    if (mensajes.length > 0) {
      if (mensajes[mensajes.length - 1].img === null) {
        return mensajes[mensajes.length - 1].mensaje;
      } else {
        return 'Foto';
      }
    }
    return '';
  }
  ultimaFecha(mensajes: IChatConversacionDetalle[]) {
    if (mensajes.length > 0) {
      if (this.fecha.differenceDays(new Date(mensajes[mensajes.length - 1].fecha))) {
        return mensajes[mensajes.length - 1].hora;
      } else {
        return mensajes[mensajes.length - 1].fecha;

      }
    }
    return '';
  }
  estadoChat(mensajeDetalle: IMensajeDetalle) {
    if (mensajeDetalle !== undefined) {
      return mensajeDetalle.estado;
    } else {
      return false;
    }
  }

}


