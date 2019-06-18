import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IChatListDetail } from '../../dto/ichat-list-detail';
import { IChatDetailMessage } from '../../dto/ichat-detail-message';
import { Fecha } from '../../../utilitario/fecha';
import { EChatLock } from '../../dto/echat-lock';
import { EChatState } from '../../dto/echat-state';

/**
 * Componente que muestra la lista de conversaciones
 */
@Component({
  selector: 'ngx-utilitario-chat-detalle',
  templateUrl: './chat-detalle.component.html',
  styleUrls: ['./chat-detalle.component.scss']
})
export class ChatDetalleComponent implements OnInit {

  /**
   * Caracteristicas de una conversacion
   */
  @Input() detalle: IChatListDetail = {
    lock: EChatLock.unlocked,
    state: EChatState.online,
    id: '',
    img: '',
    message: [],
    name: '',
    notification: 0
  };
  /**
   * Retorna un evento cuando cuando cuando hace click en una conversacion
   */
  @Output() clickDetalle: EventEmitter<any> = new EventEmitter();
  /**
   * Variable con la cual podremos trabajar de una forma mas sencilla los datos de tipo date
   */
  fecha: Fecha;
  /**
   * @ignore
   */
  constructor() {
    this.fecha = new Fecha();
  }
  /**
   * @ignore
   */
  ngOnInit() {
  }
  /**
   * Si realiza un click en una conversacion 
   */
  click() {
    this.clickDetalle.emit(this.detalle);
  }
  /**
   * De la lista de mensajes obtememos el ultimo mensaje y lo mostramos en caso de imagen mostramos la palabra foto
   * @param mensajes recibe todos los mensajes de la conversacion
   */
  ultimoMensaje(mensajes: IChatDetailMessage[]) {
    if(mensajes !== undefined ){
      if (mensajes.length > 0) {
        if (mensajes[mensajes.length - 1].img === null) {
          return mensajes[mensajes.length - 1].message;
        } else {
          return 'Foto';
        }
      }
    }
    return '';
  }
  /**
   * De la lista de mensajes obtememos el ultimo mensaje y lo mostramos en caso de imagen mostramos la palabra foto
   * @param mensajes recibe todos los mensajes de la conversacion
   */
  ultimaFecha(mensajes: IChatDetailMessage[]) {
    if (mensajes.length > 0) {
      if (this.fecha.differenceDays(new Date(mensajes[mensajes.length - 1].date))) {
        return mensajes[mensajes.length - 1].hour;
      } else {
        return mensajes[mensajes.length - 1].date;
      }
    }
    return '';
  }
  /**
   * Funcion para verficar el estado actual del usuario con el que se esta conversando 
   * @param mensajes propiedades de la conversacion conectado, desconectado
   */
  estadoChat(mensajeDetalle: IChatListDetail) {
    if (mensajeDetalle !== undefined) {
      return mensajeDetalle.state;
    } else {
      return false;
    }
  }

}


