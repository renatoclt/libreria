import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMensajeDetalle } from '../dto/imensaje-detalle';
import { EEstadoChat } from '../dto/eestado-chat';
import { EEstadoMensaje } from '../dto/eestado-mensaje';
import { ETipoMensaje } from '../dto/etipo-mensaje';
import { IChatConversacionDetalle } from '../dto/ichat-conversacion-detalle';
import { IChatConversacion } from '../dto/ichat-conversacion';

@Component({
  selector: 'ngx-utilitario-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  conversacion1:IChatConversacionDetalle = {
    estadoMensaje: EEstadoMensaje.enviado,
    fecha: 'may. 18, 19',
    hora:'13:30',
    img:null,
    mensaje: 'fas',
    tipoMensaje: ETipoMensaje.enviado
  };

  conversacion2:IChatConversacionDetalle = {
    estadoMensaje: EEstadoMensaje.enviado,
    fecha: 'may. 18, 19',
    hora:'13:30',
    img:null,
    mensaje: 'fas',
    tipoMensaje: ETipoMensaje.enviado
  };

  detalle:IMensajeDetalle = {
    estado : EEstadoChat.conectado,
    id: '1',
    img: 'fd',
    mensaje: [this.conversacion1],
    nombre: 're1',
    notificacion: 2
  }

  detalle2:IMensajeDetalle = {
    estado : EEstadoChat.conectado,
    id: '1',
    img: 'fd',
    mensaje: [],
    nombre: 'r2',
    notificacion: 2
  }
  @Input() lista:IMensajeDetalle[] = [ this.detalle, this.detalle2 ];
  @Input() conversacion: IChatConversacion = {
    id: '',
    img: '',
    nombre: '',
    estado: null,
    mensajes: []
  };
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
    this.conversacion.mensajes = detalle.mensaje;
    this.conversacion.img = detalle.img;
  }

}
