
import { Component, Input, OnInit } from '@angular/core';
import { Fecha } from '../../../utilitario/fecha';
import { IChatConversacion } from '../../dto/ichat-conversacion';
import { ETipoMensaje } from '../../dto/etipo-mensaje';
import { EEstadoMensaje } from '../../dto/eestado-mensaje';

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
    mensajes: []
  };
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
}
