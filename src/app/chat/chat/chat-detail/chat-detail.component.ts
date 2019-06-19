import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IChatDetail } from '../../dto/ichat-detail';
import { EMessageType } from '../../dto/emensaje-type';
import { IChatDetailMessage } from '../../dto/ichat-detail-message';
import { EMessageState } from '../../dto/emessage-state';
import { EChatLock} from '../../dto/echat-lock';
import { Fecha } from '../../../utilitario/fecha';

/**
 * Componente donde mostramos los mensajes de la conversacion
 */
@Component({
  selector: 'ngx-utilitario-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.scss']
})
export class ChatDetailComponent implements OnInit {
  /**
   * Las caracteristicas de la conversacion 
   */
  @Input() chatDetail: IChatDetail = {
    id: '',
    img: '',
    name: '',
    state: null,
    messages: [],
    lock: EChatLock.locked
  };
  /**
   * Al enviar un nuevo mensaje
   */
  @Output() newMessage: EventEmitter<any> = new EventEmitter();
  /**
   * Al eliminar la conversacion
   */
  @Output() deleteMessages: EventEmitter<any> = new EventEmitter();
  /**
   * Al bloquear una conversacion
   */
  @Output() lockChat: EventEmitter<any> = new EventEmitter();
  /**
   * Variable en la cual trabajaremos las fechas
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
   * Inserta una linea para separar mensajes de diferentes dias el primier elemento no tendra una divicion 
   * @param date recibe la fecha del mensaje
   * @param index index del elemento en el arreglo
   */
  dayLine(date, index) {
    let tDate: Date;
    if (index === 0) {
      tDate = new Date(date);
      tDate.setDate(tDate.getDate() - 1);
    } else {
      tDate = new Date(this.chatDetail.messages[index - 1].date);
    }
    return !this.date.differenceDays(new Date(date), tDate);
  }
  /**
   * Compara los dias entre la fecha actual y la enviada para insertar el texto en el chat 
   * @param date fecha del mensaje
   */
  dayDifference(date) {
    return this.date.differenceDaysText(date);
  }
  /**
   * Insertamos el estilo al mensaje dependiendo el tipo del mensaje
   * @param messageType si es recibido o enviado
   */
  escogerEstilo(messageType) {
    if (messageType === EMessageType.sent) {
      return 'ngx-utilitario-chat-right float-right arrow_box';
    }
    return 'ngx-utilitario-chat-left float-left';
  }
  /**
   * Validamos si el tipo de mensaje es enviado
   * @param state estado actual del mensaje
   * @param messageType enviado o recibido
   * @param stateSearch tipo que se consulta
   */
  estadoMensaje(state, messageType, stateSearch) {
    if (state === stateSearch && messageType === EMessageType.sent) {
      return true;
    }
    return false;
  }
  /**
   * Emitimos un nuevo mensaje y añadimos el mensaje
   * @param message mensaje enviado
   */
  enviarMensaje(message: any) {
    const newMessage: IChatDetailMessage = {
      messageState: EMessageState.sent,
      date: new Fecha().format(new Date(), 'LL'),
      hour: new Fecha().format(new Date(), 'HH:mm'),
      img: null,
      message,
      messageType: EMessageType.sent
    };
    this.newMessage.emit(newMessage);
  }
  /**
   * Se eliminaran los mensajes en esta conversacion
   */
  eliminarConversacion() {
    this.deleteMessages.emit();
  }
  /**
   * Se bloqueara la conversacion
   */
  bloquear() {
    this.chatDetail.lock = EChatLock.locked;
    this.lockChat.emit(EChatLock.locked);
  }
  /**
   * Se desbloqueara la conversacion
   */
  desbloquear() {
    this.chatDetail.lock = EChatLock.unlocked;
    this.lockChat.emit(EChatLock.unlocked);
  }
  /**
   * se validara el estado actual de la conversacion
   * @param state bloqueo, bloqueado o desbloqueado
   */
  validarEstadoBLoqueado(state) {
    if (state === EChatLock.lock) {
      return true;
    }
    return false;
  }
}
