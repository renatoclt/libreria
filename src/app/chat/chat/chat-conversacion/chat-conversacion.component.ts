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


  @Input() conversacion: IChatConversacion = {
    id: '',
    img: '',
    nombre: '',
    estado: null,
    mensajes: []
  };
  fecha: Fecha;
  fechaAnterior: string;
  constructor() {
    this.fecha = new Fecha();
  }

  ngOnInit() {
  }
  lineaDia(fecha) {
    let tem = this.fechaAnterior;
    this.fechaAnterior = fecha;
    console.log('envio', fecha, tem)
    return !this.fecha.compararFechas(fecha, tem);
  }
  diferenciaDias(fecha) {
    return this.fecha.textoDiferenciaDias(fecha);
  }
  escogerEstilo(tipoMensaje) {
    if(tipoMensaje === ETipoMensaje.enviado){
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
