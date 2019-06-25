import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IChatListDetail } from '../../dto/ichat-list-detail';
import { IChatDetailMessage } from '../../dto/ichat-detail-message';
import { Fecha } from '../../../utilitario/fecha';
import { environment } from 'src/environments/environment';

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
  @Input() listDetail: IChatListDetail = undefined;
  /**
   * El mensaje a mostrar cuando se envie una imagen
   */
  @Input() imageName = 'Foto';
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
   * debe estar ordenado los mensajes
   * @param messages recibe todos los mensajes de la conversacion
   */
  messageLast(messages: IChatDetailMessage[]) {
    if (messages !== undefined && messages !== null) {
      if (messages.length > 0) {
        if (messages[messages.length - 1].img === null ||
          messages[messages.length - 1].img === undefined ||
          messages[messages.length - 1].img === '') {
          return messages[messages.length - 1].message;
        } else {
          return this.imageName;
        }
      }
    }
    return '';
  }
  /**
   * De la lista de mensajes obtememos el ultimo mensaje y lo mostramos en caso de imagen mostramos la palabra foto
   * debe estar ordenado los mensajes
   * @param messages recibe todos los mensajes de la conversacion
   */
  dateLast(messages: IChatDetailMessage[]) {
    if (messages !== undefined && messages !== null) {
      if (messages.length > 0) {
        if (!isNaN(new Date(messages[messages.length - 1].date).getTime())) {
          if (this.date.differenceDays(new Date(messages[messages.length - 1].date))) {
            return messages[messages.length - 1].date;
          } else {
            return messages[messages.length - 1].hour;
          }
        }
      }
    }
    return '';
  }
  /**
   * Funcion para verficar el estado actual del usuario con el que se esta conversando 
   * @param listDetail propiedades de la conversacion conectado, desconectado
   */
  chatState(listDetail: IChatListDetail) {
    if (listDetail !== undefined) {
      return listDetail.state;
    } else {
      return false;
    }
  }

  /**
   * Si la imagen es null, undefined o vacia utilizar una por defecto
   * @param image url o ubicacion de la imagen
   * @returns la imagen o una por va
   */
  imageValidate(listDetail: IChatListDetail): string {
    if (listDetail !== null && listDetail !== undefined) {
      if (listDetail.img !== '' && listDetail.img !== undefined && listDetail.img !== null) {
        return listDetail.img;
      }
    }
    return environment.imgUsuario;
  }
  /**
   * Validamos si mostramos una validacion o no
   */
  notificationValidate(notification: number) {
    if (notification !== undefined && notification !== null) {
      if (notification > 0) {
        return true;
      }
    }
    return false;
  }
  /**
   * Obtener nombre
   */
  validateListDetail(listDetail: IChatListDetail) {
    if (listDetail !== undefined && listDetail !== null) {
      return true;
    }
    return false;
  }
}


