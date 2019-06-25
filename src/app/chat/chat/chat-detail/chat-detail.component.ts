import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IChatDetail } from '../../dto/ichat-detail';
import { EMessageType } from '../../dto/emensaje-type';
import { IChatDetailMessage } from '../../dto/ichat-detail-message';
import { EMessageState } from '../../dto/emessage-state';
import { EChatLock } from '../../dto/echat-lock';
import { Fecha } from '../../../utilitario/fecha';
import { EChatState } from '../../dto/echat-state';
import { environment } from 'src/environments/environment';

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
   * Si se envia null en lock no podra bloquear ni desbloquear un chat
   */
  @Input() chatDetail: IChatDetail = undefined;
  // TODO Eliminar al probarlo
  // @Input() chatDetail: IChatDetail = {
  //   id: '',
  //   img: '',
  //   name: 'renato',
  //   state: null,
  //   messages: [],
  //   lock: EChatLock.unlocked
  // };
  /**
   * Al enviar un nuevo mensaje
   */
  @Output() newMessage: EventEmitter<IChatDetailMessage> = new EventEmitter();
  /**
   * Al eliminar la conversacion
   */
  @Output() deleteMessages: EventEmitter<any> = new EventEmitter();
  /**
   * Al bloquear una conversacion
   */
  @Output() lockChat: EventEmitter<EChatLock> = new EventEmitter();
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
   * Alt en icono de trash
   */
  @Input() messageTrashIcon = 'eliminar conversacion';
  /**
   * Alt en icono de trash
   */
  @Input() messageLockIcon = 'bloquear conversacion';
  /**
   * Alt en icono de trash
   */
  @Input() messageUnlockIcon = 'desbloquear conversacion';
  /**
   * Imagen a mostrar en el chat cuando chatDetail esta vacio 
   */
  @Input() imageChat = environment.chatWifi;
  /**
   * Variable para usar enume en html EChatLock
   */
  EChatLock = EChatLock;
  /**
   * Variable para usar enume en html EMessageState
   */
  EMessageState = EMessageState;
  /**
   * @ignore
   */
  ngOnInit() {
  }
  /**
   * Si el index es 0 a la fecha enviada se le restara un dia para que retorne true y genere una linea
   * Si el index es mayor a 0 tomara la fecha del mensaje anterior y la comparara
   * si se envia un undefined un null o una fecha invalidad no imprimira linea
   * @param date recibe la fecha del mensaje
   * @param index index del elemento en el arreglo
   * @returns si debe mostrar una linea o no
   */
  dayLine(dateString: string, index: number): boolean {
    let date: Date;
    if (dateString !== null && dateString !== undefined && dateString !== '') {
      date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        let tDate: Date;
        if (index === 0) {
          tDate = new Date(date);
          tDate.setDate(tDate.getDate() - 1);
        } else {
          tDate = new Date(this.chatDetail.messages[index - 1].date);
        }
        return !this.date.compareDates(new Date(date), tDate);
      }
    }
    return false;
  }
  /**
   * Compara los dias entre la fecha actual y la enviada para insertar el texto en el chat 
   * @param date fecha del mensaje
   */
  dayDifference(date: Date) {
    const temDate = this.date.differenceDaysText(new Date(date));
    return temDate !== undefined ? temDate : '';
  }
  /**
   * Insertamos el estilo al mensaje dependiendo el tipo del mensaje
   * @param messageType si es recibido o enviado
   */
  chooseStyle(messageType: EMessageType): string {
    if (messageType === EMessageType.sent) {
      return 'ngx-util-chat-right float-right arrow_box';
    }
    return 'ngx-util-chat-left float-left';
  }
  /**
   * Validamos si el tipo de mensaje es enviado
   * @param state estado actual del mensaje
   * @param messageType enviado o recibido
   * @param stateSearch tipo que se consulta
   */
  messageState(state: EMessageState, messageType: EMessageType, stateSearch: EMessageState): boolean {
    if (state === stateSearch && messageType === EMessageType.sent) {
      return true;
    }
    return false;
  }
  /**
   * Emitimos un nuevo mensaje y añadimos el mensaje
   * @param message mensaje enviado
   */
  messageSend(message: string) {
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
  chatDelete() {
    this.deleteMessages.emit();
  }
  /**
   * Se bloqueara la conversacion
   */
  lock() {
    this.chatDetail.lock = EChatLock.lock;
    this.lockChat.emit(EChatLock.lock);
  }
  /**
   * Se desbloqueara la conversacion
   */
  unlock() {
    this.chatDetail.lock = EChatLock.unlocked;
    this.lockChat.emit(EChatLock.unlocked);
  }
  /**
   * Valida si el estado es el esperado
   * @param state bloqueo, bloqueado o desbloqueado
   */
  lookStateValidate(state: EChatLock, expetedState: EChatLock): boolean {
    if (state === expetedState) {
      return true;
    }
    return false;
  }
  /**
   * Si la imagen es null, undefined o vacia utilizar una por defecto
   * @param image url o ubicacion de la imagen
   * @returns la imagen o una por va
   */
  imageValidate(image: string): string {
    if (image === null || image === undefined || image === '') {
      return environment.imgUsuario;
    } else {
      return image;
    }
  }

  /**
   * Validaremos la variable chat detail
   */
  validateChatDetail(): boolean {
    if (this.chatDetail === undefined || this.chatDetail === null) {
      return false;
    }
    return true;
  }

  /**
   * Cambiar el estado de 1 o 0 a letras
   */
  nameState(state: number): string{
    if(state === 1 ){
      return 'Online';
    }
    return 'Offline';
  }
}
