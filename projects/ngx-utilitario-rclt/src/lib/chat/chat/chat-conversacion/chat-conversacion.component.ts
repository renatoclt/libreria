import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IChatDetail } from '../../dto/ichat-conversacion';
import { EEstadoChat } from '../../dto/eestado-chat';
import { ETipoMensaje } from '../../dto/etipo-mensaje';
import { IChatDetailMessage } from '../../dto/ichat-conversacion-detalle';
import { EMessageState } from '../../dto/eestado-mensaje';
import { EChatLook } from '../../dto/ebloqueo-chat';
import { Fecha } from '../../../utilitario/fecha';

@Component({
  selector: 'ngx-utilitario-chat-conversacion',
  templateUrl: './chat-conversacion.component.html',
  styleUrls: ['./chat-conversacion.component.scss']
})
export class ChatConversacionComponent implements OnInit {

  @Input() conversacion: IChatDetail = {
    id: '',
    img: '',
    nombre: '',
    estado: null,
    mensajes: [],
    bloqueo: EChatLook.bloqueado
  };
  @Output() nuevoMensaje: EventEmitter<any> = new EventEmitter();
  @Output() eliminarMensajes: EventEmitter<any> = new EventEmitter();
  @Output() bloquearConversacion: EventEmitter<any> = new EventEmitter();

  fecha: Fecha = undefined;
  constructor() {
    this.fecha = new Fecha();
  }

  ngOnInit() {
  }
  lineaDia(fecha, index) {
    let tDate: Date;
    if (index === 0) {
      tDate = new Date(fecha);
      tDate.setDate(tDate.getDate() - 1);
    } else {
      tDate = new Date(this.conversacion.mensajes[index - 1].fecha);
    }
    return !this.fecha.compareDates(new Date(fecha), tDate);
  }
  diferenciaDias(fecha) {
    return this.fecha.differenceDaysText(fecha);
  }
  escogerEstilo(tipoMensaje) {
    if (tipoMensaje === ETipoMensaje.enviado) {
      return 'ngx-utilitario-chat-right float-right arrow_box';
    }
    return 'ngx-utilitario-chat-left float-left';
  }

  estadoMensajeEnviado(estado, tipoMensaje) {
    if (estado === EMessageState.enviado && tipoMensaje === ETipoMensaje.enviado) {
      return true;
    }
    return false;
  }
  estadoMensajeRecibido(estado, tipoMensaje) {
    if (estado === EMessageState.recibido && tipoMensaje === ETipoMensaje.enviado) {
      return true;
    }
    return false;
  }
  estadoMensajeLeido(estado, tipoMensaje) {
    if (estado === EMessageState.leido && tipoMensaje === ETipoMensaje.enviado) {
      return true;
    }
    return false;
  }
  enviarMensaje(mensaje: any) {
    const nuevoMensaje: IChatDetailMessage = {
      estadoMensaje: EMessageState.enviado,
      fecha: new Fecha().format(new Date(), 'LL'),
      hora: new Fecha().format(new Date(), 'HH:mm'),
      img: null,
      mensaje,
      tipoMensaje: ETipoMensaje.enviado
    };
    this.nuevoMensaje.emit(nuevoMensaje);
  }
  eliminarConversacion() {
    this.eliminarMensajes.emit();
  }
  bloquear() {
    this.conversacion.bloqueo = EChatLook.bloqueado;
    this.bloquearConversacion.emit(EChatLook.bloqueado);
  }

  desbloquear() {
    this.conversacion.bloqueo = EChatLook.desbloqueado;
    this.bloquearConversacion.emit(EChatLook.desbloqueado);
  }
  validarEstadoBLoqueado(estado) {
    if (estado === EChatLook.bloqueo) {
      return true;
    }
    return false;
  }
}
