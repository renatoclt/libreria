import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { IMensajeDetalle } from '../dto/imensaje-detalle';
import { IChatConversacion } from '../dto/ichat-conversacion';

@Component({
  selector: 'ngx-utilitario-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,OnChanges {
  

  @Input() lista:IMensajeDetalle[] = [];
  @Input() conversacion: IChatConversacion;
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
