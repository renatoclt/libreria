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
  selector: 'ngx-utilitario-chat-list-detail',
  templateUrl: './chat-list-detail.component.html',
  styleUrls: ['./chat-list-detail.component.scss']
})
export class ChatListDetailComponent implements OnInit {

  /**
   * Caracteristicas de una conversacion
   */
  @Input() listDetail: IChatListDetail = {
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
  @Output() clickDetail: EventEmitter<any> = new EventEmitter();
  /**
   * Variable con la cual podremos trabajar de una forma mas sencilla los datos de tipo date
   */
  date: Fecha;
  /**
   * @ignore
   */
  constructor() {
    this.date = new Fecha();
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
    this.clickDetail.emit(this.listDetail);
  }
  /**
   * De la lista de mensajes obtememos el ultimo mensaje y lo mostramos en caso de imagen mostramos la palabra foto
   * @param messages recibe todos los mensajes de la conversacion
   */
  messageLast(messages: IChatDetailMessage[]) {
    if (messages !== undefined ) {
      if (messages.length > 0) {
        if (messages[messages.length - 1].img === null) {
          return messages[messages.length - 1].message;
        } else {
          return 'Foto';
        }
      }
    }
    return '';
  }
  /**
   * De la lista de mensajes obtememos el ultimo mensaje y lo mostramos en caso de imagen mostramos la palabra foto
   * @param messages recibe todos los mensajes de la conversacion
   */
  DateLast(messages: IChatDetailMessage[]) {
    if (messages.length > 0) {
      if (this.date.differenceDays(new Date(messages[messages.length - 1].date))) {
        return messages[messages.length - 1].hour;
      } else {
        return messages[messages.length - 1].date;
      }
    }
    return '';
  }
  /**
   * Funcion para verficar el estado actual del usuario con el que se esta conversando 
   * @param listDetail propiedades de la conversacion conectado, desconectado
   */
  estadoChat(listDetail: IChatListDetail) {
    if (listDetail !== undefined) {
      return listDetail.state;
    } else {
      return false;
    }
  }

}


