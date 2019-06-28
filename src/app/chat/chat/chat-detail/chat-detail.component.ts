import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
import { IChatDetail } from '../../dto/ichat-detail';
import { EMessageType } from '../../dto/emensaje-type';
import { IChatDetailMessage } from '../../dto/ichat-detail-message';
import { EMessageState } from '../../dto/emessage-state';
import { EChatLock } from '../../dto/echat-lock';
import { Fecha } from '../../../utilitario/fecha';
import { environment } from 'src/environments/environment';
import { EScrollPosition } from 'src/app/perfect-scroll/dto/escroll-position';

/**
 * Componente donde mostramos los mensajes de la conversacion
 */
@Component({
  selector: 'ngx-utilitario-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.scss']
})
export class ChatDetailComponent implements OnChanges {
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
   * Id del mensaje al que desea moverse
   */
  @Input() moveToMessage: number;
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
   * Variable para usar un enum en html
   */
  EChatLock = EChatLock;
  /**
   * posicion del scroll
   */
  position: [number, number] = [EScrollPosition.start, EScrollPosition.end];
  /**
   * Nombre del mensaje al que queremos movernos
   */
  elementName: string;
  /**
   * Variable en la cual se guarda las imagenes recibidas
   */
  filesPreview: FileList;
  /**
   * @ignore
   */
  constructor() { }

  /**
   * Se validara si el cambio es de movetomessage
   * Validara si se cambio de chat y eliminar previsualizacion
   * @param changes index del mensaje a mostrar
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.moveToMessage) {
      this.messageMove(changes.moveToMessage.currentValue);
    }
    if (changes.chatDetail) {
      this.filesPreview = undefined;
    }
  }
  /**
   * Emitimos un nuevo mensaje y añadimos el mensaje
   * si no tiene mensajes ni imagenes no realizara ningua accion
   * @param message mensaje enviado
   */
  messageSend(message: string) {
    console.log('prueba', this.filesPreview, message);
    if ((message === '' || message === null) && this.filesPreview === undefined) {
      return;
    }
    let newMessage: IChatDetailMessage;
    if (this.filesPreview  === undefined) {
      newMessage = {
        messageState: EMessageState.sent,
        date: new Fecha().format(new Date(), 'LL'),
        hour: new Fecha().format(new Date(), 'HH:mm'),
        img: undefined,
        message,
        messageType: EMessageType.sent
      };
      this.newMessage.emit(newMessage);
    } else {
      Array.from(this.filesPreview).forEach((file: File) => {
        newMessage = {
          messageState: EMessageState.sent,
          date: new Fecha().format(new Date(), 'LL'),
          hour: new Fecha().format(new Date(), 'HH:mm'),
          img:  file,
          message,
          messageType: EMessageType.sent
        };
        this.newMessage.emit(newMessage);
      });
      this.filesPreview = undefined;
    }
  }
  /**
   * imagePreview
   * @param fileList imagenes Seleccionadas
   */
  imagePreview(fileList: FileList) {
    this.filesPreview = fileList;
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
   * @param state Enum del estado actual
   */
  nameState(state: number): string {
    if (state === 1) {
      return 'Online';
    }
    return 'Offline';
  }

  /**
   * Vamos a mover al mensaje indicado
   * @param id id del mensaje a moverse
   */
  messageMove(id: number) {
    if (id !== undefined) {
      this.elementName = 'message_' + id;
    } else {
      this.elementName = undefined;
    }
  }
  /**
   * Cerrar la ventanta preview
   */
  closePreview() {
    this.filesPreview = undefined;
  }
}
