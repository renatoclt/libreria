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
    img: null,
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
    img: null,
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
  @Input() list: IChatListDetail[] = [this.detalle, this.detalle2];

  /**
   * Conversacion actual a mostrar puede no estar en la lista
   */
  @Input() chatDetail: IChatDetail = undefined;
  /**
   * Se envia un evento si se escribio un nuevo mensaje
   */
  @Output() nuevoMensaje: EventEmitter<any> = new EventEmitter();
  /**
   * Si hace click en una conversacion de la lista
   */
  @Output() clickLista: EventEmitter<any> = new EventEmitter();
  /**
   * Si elimina la conversacion
   */
  @Output() eliminarConversacion: EventEmitter<any> = new EventEmitter();
  /**
   * Si bloquea una conversacion
   */
  @Output() bloquearConversacion: EventEmitter<any> = new EventEmitter();

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
    this.clickLista.emit(detalle);
    this.cambiarConversacion(detalle);
  }

  /**
   * Cambiamos conversacion actual y muestra la conversacion que tiene la lista por el usuario
   * @param detalle  propiedades de la conversacion
   */
  cambiarConversacion(detail: IChatListDetail) {
    const listTem = this.list.filter(list => list.id === detail.id)[0];
    console.log(listTem.message.length);
    this.chatDetail = {
      state: listTem.state,
      name: listTem.name,
      id: listTem.id,
      messages: listTem.message,
      img: listTem.img,
      lock: listTem.lock
    };
  }

  /**
   * Cuando el usuario envie un mensaje añadimos propiedad a la lista y realizamos un push
   * @param mensaje propiedades del mensaje enviado
   */
  enviarMensaje(mensaje) {
    this.chatDetail.messages.push(mensaje);
    this.nuevoMensaje.emit(this.chatDetail);
  }

  /**
   * Al eliminar mensajes emitiremos un evento y limpiaremos elementos
   */
  eliminarMensajes() {
    this.chatDetail.messages = [];
    this.eliminarConversacion.emit(this.chatDetail);
  }

  /**
   * Accion de bloquear chat
   * @param estadoBloqueo los estados pueden ser desbloqueado, bloqueado, bloqueo
   */
  bloquearChat(estadoBloqueo) {
    this.chatDetail.lock = estadoBloqueo;
    this.bloquearConversacion.emit(this.chatDetail);
  }
  /**
   * Comprobar si debe realizar una busqueda o no
   */
  searchChange(text: string) {
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
      for (const message of chat.message) {
        if (message.message.includes(text)) {
          this.searchList.push({
            id : chat.id,
            img: chat.img,
            lock: chat.lock,
            message: [message] ,
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
