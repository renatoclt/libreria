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
  @Input() conversacion: IChatDetail = {
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
  @Output() nuevoMensaje: EventEmitter<any> = new EventEmitter();
  /**
   * Al eliminar la conversacion
   */
  @Output() eliminarMensajes: EventEmitter<any> = new EventEmitter();
  /**
   * Al bloquear una conversacion 
   */
  @Output() bloquearConversacion: EventEmitter<any> = new EventEmitter();
  /**
   * Variable en la cual trabajaremos las fechas
   */
  fecha: Fecha = undefined;
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
   * Inserta una linea para separar mensajes de diferentes dias el primier elemento no tendra una divicion 
   * @param fecha recibe la fecha del mensaje
   * @param index index del elemento en el arreglo
   */
  lineaDia(fecha, index) {
    let tDate: Date;
    if (index === 0) {
      tDate = new Date(fecha);
      tDate.setDate(tDate.getDate() - 1);
    } else {
      tDate = new Date(this.conversacion.messages[index - 1].date);
    }
    return !this.fecha.differenceDays(new Date(fecha), tDate);
  }
  /**
   * Compara los dias entre la fecha actual y la enviada para insertar el texto en el chat 
   * @param fecha fecha del mensaje
   */
  diferenciaDias(fecha) {
    return this.fecha.differenceDaysText(fecha);
  }
  /**
   * Insertamos el estilo al mensaje dependiendo el tipo del mensaje
   * @param tipoMensaje si es recibido o enviado
   */
  escogerEstilo(tipoMensaje) {
    if (tipoMensaje === EMessageType.sent) {
      return 'ngx-utilitario-chat-right float-right arrow_box';
    }
    return 'ngx-utilitario-chat-left float-left';
  }
  /**
   * Validamos si el tipo de mensaje es enviado
   * @param estado estado actual del mensaje
   * @param tipoMensaje enviado o recibido
   * @param estadoConsultado tipo que se consulta
   */
  estadoMensaje(estado, tipoMensaje, estadoConsultado) {
    if (estado === estadoConsultado && tipoMensaje === EMessageType.sent) {
      return true;
    }
    return false;
  }
  /**
   * Emitimos un nuevo mensaje y añadimos el mensaje
   * @param mensaje mensaje enviado
   */
  enviarMensaje(mensaje: any) {
    const nuevoMensaje: IChatDetailMessage = {
      messageState: EMessageState.sent,
      date: new Fecha().format(new Date(), 'LL'),
      hour: new Fecha().format(new Date(), 'HH:mm'),
      img: null,
      message: mensaje,
      messageType: EMessageType.sent
    };
    this.nuevoMensaje.emit(nuevoMensaje);
  }
  /**
   * Se eliminaran los mensajes en esta conversacion
   */
  eliminarConversacion() {
    this.eliminarMensajes.emit();
  }
  /**
   * Se bloqueara la conversacion
   */
  bloquear() {
    this.conversacion.lock = EChatLock.locked;
    this.bloquearConversacion.emit(EChatLock.locked);
  }
  /**
   * Se desbloqueara la conversacion
   */
  desbloquear() {
    this.conversacion.lock = EChatLock.unlocked;
    this.bloquearConversacion.emit(EChatLock.unlocked);
  }
  /**
   * se validara el estado actual de la conversacion
   * @param estado bloqueo, bloqueado o desbloqueado
   */
  validarEstadoBLoqueado(estado) {
    if (estado === EChatLock.lock) {
      return true;
    }
    return false;
  }
}
