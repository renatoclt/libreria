import { Component, OnInit, Input } from '@angular/core';
import { IChatDetailMessage } from '../../dto/ichat-detail-message';
import { Fecha } from 'src/app/utilitario/fecha';
import { EMessageState } from '../../dto/emessage-state';
import { EMessageType } from '../../dto/emensaje-type';

@Component({
  selector: 'ngx-utilitario-chat-detail-message',
  templateUrl: './chat-detail-message.component.html',
  styleUrls: ['./chat-detail-message.component.scss']
})
export class ChatDetailMessageComponent implements OnInit {

  prueba: IChatDetailMessage = {
    date: '12/12/2019',
    hour: '12:12',
    message: '12:12',
    img: '',
    messageState: EMessageState.sent,
    messageType: EMessageType.sent
  };
  @Input() messages: IChatDetailMessage[];
  /**
   * Variable para usar enum en html
   */
  EMessageState = EMessageState;
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
          tDate = new Date(this.messages[index - 1].date);
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
   * Insertamos el estilo al mensaje dependiendo el tipo del mensaje
   * @param messageType si es recibido o enviado
   */
  chooseStyle(messageType: EMessageType): string {
    if (messageType === EMessageType.sent) {
      return 'ngx-util-chat-right float-right arrow_box';
    }
    return 'ngx-util-chat-left float-left';
  }
}
