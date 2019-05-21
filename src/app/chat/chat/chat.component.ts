import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core';
import { IMensajeDetalle } from '../dto/imensaje-detalle';
import { EEstadoChat } from '../dto/eestado-chat';
import { EEstadoMensaje } from '../dto/eestado-mensaje';
import { ETipoMensaje } from '../dto/etipo-mensaje';
import { IChatConversacionDetalle } from '../dto/ichat-conversacion-detalle';
import { IChatConversacion } from '../dto/ichat-conversacion';
import { EBloqueoChat } from '../dto/ebloqueo-chat';

@Component({
  selector: 'ngx-utilitario-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  conversacion1: IChatConversacionDetalle = {
    estadoMensaje: EEstadoMensaje.enviado,
    fecha: 'may. 18, 19',
    hora: '13:30',
    img: null,
    mensaje: 'fas',
    tipoMensaje: ETipoMensaje.enviado
  };

  conversacion2: IChatConversacionDetalle = {
    estadoMensaje: EEstadoMensaje.enviado,
    fecha: 'may. 18, 19',
    hora: '13:30',
    img: null,
    mensaje: 'fas',
    tipoMensaje: ETipoMensaje.enviado
  };

  detalle: IMensajeDetalle = {
    estado: EEstadoChat.conectado,
    id: '1',
    img: 'fd',
    mensaje: [this.conversacion1],
    nombre: 're1',
    notificacion: 2,
    bloqueo: EBloqueoChat.desbloqueado
  }

  detalle2: IMensajeDetalle = {
    estado: EEstadoChat.conectado,
    id: '1',
    img: 'fd',
    mensaje: [],
    nombre: 'r2',
    notificacion: 2,
    bloqueo: EBloqueoChat.desbloqueado
  }
  @Input() lista: IMensajeDetalle[] = [this.detalle, this.detalle2];


  @Input() conversacion: IChatConversacion = {
    id: '',
    img: '',
    nombre: '',
    estado: null,
    mensajes: [],
    bloqueo: EBloqueoChat.desbloqueado
  };
  @Output() nuevoMensaje:EventEmitter<any> = new EventEmitter();
  @Output() clickLista:EventEmitter<any> =  new EventEmitter();
  @Output() eliminarConversacion:EventEmitter<any> = new EventEmitter();
  @Output() bloquearConversacion:EventEmitter<any> = new EventEmitter();

  
  
  constructor() { }
  
  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    const name: SimpleChange = changes.name;
    if(changes.lista){
      this.lista.forEach(chat=>{
        if(chat.id === this.conversacion.id){
          this.conversacion.mensajes = chat.mensaje;
          this.conversacion.bloqueo = chat.bloqueo;
          this.conversacion.bloqueo = chat.bloqueo;
        }
      })
    }
  }
  
  clickListaDetalle(detalle:any){
    this.clickLista.emit(detalle);
    this.cambiarConversacion(detalle);
  }

  cambiarConversacion(detalle:IMensajeDetalle){
    this.conversacion.estado = detalle.estado;
    this.conversacion.nombre = detalle.nombre;
    this.conversacion.id = detalle.id;
    this.conversacion.mensajes = detalle.mensaje;
    this.conversacion.img = detalle.img;
    this.conversacion.bloqueo = detalle.bloqueo;
  }

  enviarMensaje(mensaje){
    this.conversacion.mensajes.push(mensaje);
    this.nuevoMensaje.emit(this.conversacion);
  }

  eliminarMensajes(){
    this.conversacion.mensajes = [];
    this.eliminarConversacion.emit(this.conversacion);
  }

  bloquearChat(estadoBloqueo){
    this.conversacion.bloqueo = estadoBloqueo;
    this.bloquearConversacion.emit(this.conversacion);
  }
}
