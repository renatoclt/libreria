import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IChatConversacion } from '../../dto/ichat-conversacion';
import { EEstadoChat } from '../../dto/eestado-chat';
import { ETipoMensaje } from '../../dto/etipo-mensaje';
import { IChatConversacionDetalle } from '../../dto/ichat-conversacion-detalle';
import { Fecha } from 'src/app/utilitario/fecha';
import { EEstadoMensaje } from '../../dto/eestado-mensaje';
import { EBloqueoChat } from '../../dto/ebloqueo-chat';

@Component({
  selector: 'ngx-utilitario-chat-conversacion',
  templateUrl: './chat-conversacion.component.html',
  styleUrls: ['./chat-conversacion.component.scss']
})
export class ChatConversacionComponent implements OnInit {

  @Input() conversacion: IChatConversacion = {
    id: '',
    img: '',
    nombre: '',
    estado: null,
    mensajes: [],
    bloqueo: EBloqueoChat.bloqueado
  };
  @Output() nuevoMensaje:EventEmitter<any> = new EventEmitter();
  @Output() eliminarMensajes:EventEmitter<any> = new EventEmitter();
  @Output() bloquearConversacion:EventEmitter<any> = new EventEmitter();

  fecha: Fecha = undefined;
  constructor() {
    this.fecha = new Fecha();
  }

  ngOnInit() {
  }
  lineaDia(fecha,index) {
    let tDate: Date;
    if (index === 0) {
      tDate = new Date(fecha);
      tDate.setDate(tDate.getDate() - 1);
    }
    else {
      tDate = new Date(this.conversacion.mensajes[index -1].fecha);
    }
    return !this.fecha.compararFechas(new Date(fecha), tDate);
  }
  diferenciaDias(fecha) {
    return this.fecha.textoDiferenciaDias(fecha);
  }
  escogerEstilo(tipoMensaje) {
    if (tipoMensaje === ETipoMensaje.enviado) {
      return "float-right";
    }
    return "float-left";
  }

  estadoMensajeEnviado(estado, tipoMensaje) {
    if (estado === EEstadoMensaje.enviado && tipoMensaje === ETipoMensaje.enviado)
      return true;
    return false
  }
  estadoMensajeRecibido(estado, tipoMensaje) {
    if (estado === EEstadoMensaje.recibido && tipoMensaje === ETipoMensaje.enviado)
      return true;
    return false
  }
  estadoMensajeLeido(estado, tipoMensaje) {
    if (estado === EEstadoMensaje.leido && tipoMensaje === ETipoMensaje.enviado)
      return true;
    return false
  }
  enviarMensaje(mensaje:any){
    let nuevoMensaje:IChatConversacionDetalle = {
      estadoMensaje: EEstadoMensaje.enviado,
      fecha: new Fecha().format(new Date(),'LL'),
      hora: new Fecha().format(new Date(),'HH:mm'),
      img: null,
      mensaje: mensaje,
      tipoMensaje: ETipoMensaje.enviado
    };
    this.nuevoMensaje.emit(nuevoMensaje);
  }
  eliminarConversacion(){
    this.eliminarMensajes.emit();
  }
  bloquear(){
    this.conversacion.bloqueo = EBloqueoChat.bloqueado;
    this.bloquearConversacion.emit(EBloqueoChat.bloqueado);
  }
  
  desbloquear(){
    this.conversacion.bloqueo = EBloqueoChat.debloqueado;
    this.bloquearConversacion.emit(EBloqueoChat.debloqueado);
  }
}
