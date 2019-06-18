import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { IChatListDetail } from '../dto/ichat-list-detail';
import { EChatState } from '../dto/echat-state';
import { EMessageState } from '../dto/emessage-state';
import { EMessageType } from '../dto/emensaje-type';
import { IChatDetailMessage } from '../dto/ichat-detail-message';
import { IChatDetail } from '../dto/ichat-detail';
import { EChatLock } from '../dto/echat-lock';
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
    message: 'fas',
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
    img: 'fd',
    message: [this.conversacion1,],
    name: 're1',
    notification: 2,
    lock: EChatLock.unlocked
  };

  /**
   * Variable a eliminar
   */
  detalle2: IChatListDetail = {
    state: EChatState.online,
    id: '1',
    img: 'fd',
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
    this.conversacion1,
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
  @Input() lista: IChatListDetail[] = [this.detalle, this.detalle2];

  /**
   * Conversacion actual a mostrar puede no estar en la lista
   */
  @Input() conversacion: IChatDetail = {
    id: '',
    img: '',
    name: '',
    state: null,
    messages: [],
    lock: EChatLock.unlocked
  };
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
   * @ignore
   */
  constructor() { }
  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * si el input lista cambia actualizamos los valores de la conversacion
   * @param changes Si cambia algun item de la lista se actualizara
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.lista) {
      this.lista.forEach(chat => {
        if (chat.id === this.conversacion.id) {
          this.conversacion.messages = chat.message;
          this.conversacion.lock = chat.lock;
        }
      });
    }
  }

  /**
   * Si realiza un click en un item de la lista del chat cambiamos la conversacion
   * y emitimos un evento
   * @param detalle propiedades de la conversacion
   */
  clickListaDetalle(detalle: IChatListDetail) {
    this.clickLista.emit(detalle);
    this.cambiarConversacion(detalle);
  }

  /**
   * Cambiamos conversacion actual 
   * @param detalle  propiedades de la conversacion
   */
  cambiarConversacion(detalle: IChatListDetail) {
    this.conversacion.state = detalle.state;
    this.conversacion.name = detalle.name;
    this.conversacion.id = detalle.id;
    this.conversacion.messages = detalle.message;
    this.conversacion.img = detalle.img;
    this.conversacion.lock = detalle.lock;
  }

  /**
   * Cuando el usuario envie un mensaje añadimos propiedad a la lista y realizamos un push
   * @param mensaje propiedades del mensaje enviado
   */
  enviarMensaje(mensaje) {
    this.conversacion.messages.push(mensaje);
    this.nuevoMensaje.emit(this.conversacion);
  }

  /**
   * Al eliminar mensajes emitiremos un evento y limpiaremos elementos
   */
  eliminarMensajes() {
    this.conversacion.messages = [];
    this.eliminarConversacion.emit(this.conversacion);
  }

  /**
   * Accion de bloquear chat
   * @param estadoBloqueo los estados pueden ser desbloqueado, bloqueado, bloqueo
   */
  bloquearChat(estadoBloqueo) {
    this.conversacion.lock = estadoBloqueo;
    this.bloquearConversacion.emit(this.conversacion);
  }
}
