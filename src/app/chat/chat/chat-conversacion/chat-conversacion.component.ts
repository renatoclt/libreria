import { Component, OnInit, Input } from '@angular/core';
import { IChatConversacion } from '../../dto/ichat-conversacion';
import { EEstadoChat } from '../../dto/eestado-chat';
import { ETipoMensaje } from '../../dto/etipo-mensaje';
import { IChatConversacionDetalle } from '../../dto/ichat-conversacion-detalle';
import { Fecha } from 'src/app/utilitario/fecha';
import { EEstadoMensaje } from '../../dto/eestado-mensaje';

@Component({
  selector: 'ngx-utilitario-chat-conversacion',
  templateUrl: './chat-conversacion.component.html',
  styleUrls: ['./chat-conversacion.component.scss']
})
export class ChatConversacionComponent implements OnInit {

  mensaje: IChatConversacionDetalle = {
    img: null,
    mensaje: 'mensaje',
    fecha: 'may. 15, 19',
    hora: '13:15',
    tipoMensaje: ETipoMensaje.enviado,
    estadoMensaje: EEstadoMensaje.enviado
  }
  mensaje2: IChatConversacionDetalle = {
    img: null,
    mensaje: 'mensaje',
    fecha: 'may. 16, 19',
    hora: '13:15',
    tipoMensaje: ETipoMensaje.recibido,
    estadoMensaje: EEstadoMensaje.enviado
  }
  mensaje3: IChatConversacionDetalle = {
    img: null,
    mensaje: 'mensaje',
    fecha: 'may. 19, 19',
    hora: '13:15',
    tipoMensaje: ETipoMensaje.recibido,
    estadoMensaje: EEstadoMensaje.enviado
  }
  @Input() conversacion: IChatConversacion = {
    id: '',
    img: '',
    nombre: '',
    estado: null,
    mensajes: [this.mensaje, this.mensaje2, this.mensaje3]
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
