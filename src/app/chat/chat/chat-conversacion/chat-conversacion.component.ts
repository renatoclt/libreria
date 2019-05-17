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

  mensaje:IChatConversacionDetalle = {
    img: null,
    mensaje: 'mensaje',
    fecha: 'may. 16, 19',
    hora: '13:15',
    tipoMensaje: ETipoMensaje.enviado,
    estadoMensaje: EEstadoMensaje.enviado
  }
  @Input() conversacion: IChatConversacion = {
    id: '',
    img: '',
    nombre: '',
    estado: null,
    mensajes: [this.mensaje]
  };
  fecha: Fecha = undefined;
  fechaAnterior: string;
  constructor() {
    this.fecha = new Fecha();
  }

  ngOnInit() {
  }
  lineaDia(fecha) {
    let tem = this.fechaAnterior;
    let tDate:Date;
    this.fechaAnterior = fecha;
    if(tem === undefined){
      tDate = new Date(fecha);
      tDate.setDate(tDate.getDate()-1);
    }
    else{
      tDate = new Date();
    }
    
    console.log('envio', fecha, tem)
    return !this.fecha.compararFechas(new Date(fecha), tDate);
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
