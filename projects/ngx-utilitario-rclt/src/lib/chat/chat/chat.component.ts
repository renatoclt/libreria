import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { IChatListDetail } from '../dto/ichat-list-detail';
import { EChatState } from '../dto/echat-state';
import { EMessageState } from '../dto/emessage-state';
import { EMessageType } from '../dto/emensaje-type';
import { IChatDetailMessage } from '../dto/ichat-detail-message';
import { IChatDetail } from '../dto/ichat-detail';
import { EChatLock } from '../dto/echat-lock';
import { EScrollPosition } from 'src/app/perfect-scroll/dto/escroll-position';
/**
 * Chat component por el cual mostramos una lista de chat y una conversacion
 */
@Component({
  selector: 'ngx-utilitario-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnChanges {
  /**
   * Variable a eliminar
   */
  conversacion1: IChatDetailMessage = {
    messageState: EMessageState.sent,
    date: 'may. 18, 19',
    hour: '13:30',
    img: '',
    message: 'prua',
    messageType: EMessageType.sent
  };
  /**
   * Variable a eliminar
   */
  conversacion2: IChatDetailMessage = {
    messageState: EMessageState.sent,
    date: 'may. 18, 19',
    hour: '13:30',
// tslint:disable-next-line: max-line-length
    img: 'https://firebasestorage.googleapis.com/v0/b/tbusca-57c7e.appspot.com/o/Resources%2Fdefault-img.jpg?alt=media&token=978ddd8c-17fb-4691-aed1-5e8e15605f4d',
    message: 'fas',
    messageType: EMessageType.sent
  };

  /**
   * Variable a eliminar
   */
  detalle: IChatListDetail = {
    state: EChatState.online,
    id: '1',
    img: '',
    message: [this.conversacion2],
    name: 're1',
    notification: 2,
    lock: EChatLock.unlocked
  };

  /**
   * Variable a eliminar
   */
  detalle2: IChatListDetail = {
    state: EChatState.online,
    id: '2',
    img: '',
    message: [this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion2,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1,
    this.conversacion1],
    name: 'r2',
    notification: 2,
    lock: EChatLock.unlocked
  };
  /**
   * Lista de conversaciones a mostrar
   */
  @Input() list: IChatListDetail[] = [this.detalle, this.detalle2, this.detalle, this.detalle2, this.detalle, this.detalle2, this.detalle,
  this.detalle2, this.detalle, this.detalle2, this.detalle, this.detalle2, this.detalle, this.detalle2, this.detalle, this.detalle2];

  /**
   * Conversacion actual a mostrar puede no estar en la lista
   */
  @Input() chatDetail: IChatDetail = undefined;
  /**
   * Se envia un evento si se escribio un nuevo mensaje
   */
  @Output() messageNew: EventEmitter<any> = new EventEmitter();
  /**
   * Si hace click en una conversacion de la lista
   */
  @Output() listClick: EventEmitter<any> = new EventEmitter();
  /**
   * Si elimina la conversacion
   */
  @Output() chatDelete: EventEmitter<any> = new EventEmitter();
  /**
   * Si bloquea una conversacion
   */
  @Output() chatLock: EventEmitter<any> = new EventEmitter();

  /**
   * Variable en la cual se guardara la lista ingresada o la de busqueda
   */
  finalList: IChatListDetail[] = [];
  /**
   * Variable en la cual se guardara la lista de busqueda
   */
  searchList: IChatListDetail[] = [];
  /**
   * Flag que nos dira si hay una busqueda o no
   */
  searchFlag = false;
  /**
   * Texto a buscar
   */
  searchText = '';
  /**
   * Variable en la cual tenemos la posicion del mensaje y se envia chat detail
   */
  moveToMessageIndex: number;
  /**
   * Variable en la cual tenemos la posicion del mensaje encontrado
   * mientras no se cambie de chat no se actualizara la principal
   */
  moveToMessageIndexTem: number;
  /**
   * @ignore
   */
  constructor() { }
  /**
   * @ignore
   */
  ngOnInit() {
    this.searchValidate();
  }

  /**
   * 1.- si el chat que se esta mostrando a cambiado sus mensajes
   * 2.- si existe una lista de busqued
   * @param changes Si cambia algun item de la lista se actualizara
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.lista) {
      this.list.forEach(chat => {
        if (chat.id === this.chatDetail.id) {
          this.chatDetail.messages = chat.message;
          this.chatDetail.lock = chat.lock;
        }
      });
      this.searchValidate();
    }
  }

  /**
   * Si hay una busqueda activa no se actualiza la lista
   */
  searchValidate() {
    if (!this.searchFlag) {
      this.finalList = this.list;
    } else {
      this.finalList = this.searchList;
    }
  }
  /**
   * Si realiza un click en un item de la lista del chat cambiamos la conversacion
   * y emitimos un evento
   * @param detalle propiedades de la conversacion
   */
  listDetailClick(detalle: IChatListDetail) {
    this.listClick.emit(detalle);
    this.changeDetail(detalle);
  }

  /**
   * Cambiamos conversacion actual y muestra la conversacion que tiene la lista por el usuario
   * @param detalle  propiedades de la conversacion
   */
  changeDetail(detail: IChatListDetail) {
    const listTem = this.list.filter(list => list.id === detail.id)[0];
    this.chatDetail = {
      state: listTem.state,
      name: listTem.name,
      id: listTem.id,
      messages: listTem.message,
      img: listTem.img,
      lock: listTem.lock
    };
    this.moveToMessageIndex = this.moveToMessageIndexTem;
  }

  /**
   * Cuando el usuario envie un mensaje añadimos propiedad a la lista y realizamos un push
   * @param mensaje propiedades del mensaje enviado
   */
  messageSend(mensaje) {
    this.moveToMessageIndex = undefined;
    this.chatDetail.messages.push(mensaje);
    this.messageNew.emit(this.chatDetail);
  }

  /**
   * Al eliminar mensajes emitiremos un evento y limpiaremos elementos
   */
  messageDelete() {
    this.chatDetail.messages = [];
    this.chatDelete.emit(this.chatDetail);
  }

  /**
   * Accion de bloquear chat
   * @param estadoBloqueo los estados pueden ser desbloqueado, bloqueado, bloqueo
   */
  chatLocking(estadoBloqueo) {
    this.chatDetail.lock = estadoBloqueo;
    this.chatLock.emit(this.chatDetail);
  }
  /**
   * Comprobar si debe realizar una busqueda o no
   */
  searchChange(text: string) {
    this.moveToMessageIndexTem = undefined;
    this.searchText = text;
    this.searchListClean();
    if (text.length > 0) {
      this.searchFlag = true;
      this.searchChatName(text);
      this.searchChatMessage(text);
    } else {
      this.searchFlag = false;
    }
    this.searchValidate();
  }

  /**
   * Buscamos en la lista actual en los nombres del chat
   * @param text palabra a buscar
   */
  searchChatName(text: string) {
    this.list.forEach(chat => {
      if (chat.name.includes(text)) {
        this.searchList.push(chat);
      }
    });
  }

  /**
   * Buscamos en la lista actual los mensajes del chat y cambiamos el ultimo chat por el chat encontrado
   * @param text palabra a buscar
   */
  searchChatMessage(text: string) {
    this.list.forEach(chat => {
      // ya que necesitamos el index
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < chat.message.length; i++) {
        if (chat.message[i].message.includes(text)) {
          this.moveToMessageIndexTem = i;
          this.searchList.push({
            id: chat.id,
            img: chat.img,
            lock: chat.lock,
            message: [chat.message[i]],
            name: chat.name,
            notification: chat.notification,
            state: chat.state
          });
          break;
        }
      }
    });
  }

  /**
   * Limpiamos la lista de busqueda
   */
  searchListClean() {
    this.searchList = [];
  }
}
