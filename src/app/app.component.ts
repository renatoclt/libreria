import { Component, OnInit } from '@angular/core';
import { IChatDetail } from './chat/dto/ichat-detail';
import { EChatLock } from './chat/dto/echat-lock';
import { EChatState } from './chat/dto/echat-state';
import { EMessageType, IChatDetailMessage } from 'projects/ngx-utilitario-rclt/src/public-api';
import { EMessageState } from './chat/dto/emessage-state';
/**
 * Principal componente de la aplicacion
 */
@Component({
  selector: 'ngx-utilitario-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages: IChatDetailMessage[] = [{
    img: null,
    imgUrl: undefined,
    message: 'hola',
    date: '01/01/2019',
    hour: '01/01',
    messageType: EMessageType.recived,
    messageState: EMessageState.read
  },
  {
    img: null,
    imgUrl: undefined,
    message: 'hola este es un mensaje largo de una linea en el cual vamos a probar la longitud de LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem',
    date: '01/01/2019',
    hour: '01/01',
    messageType: EMessageType.recived,
    messageState: EMessageState.received
  }, {
    img: null,
    imgUrl: undefined,
    message: 'hola 0',
    date: '01/01/2019',
    hour: '01/01',
    messageType: EMessageType.sent,
    messageState: EMessageState.sent
  }, {
    img: null,
    imgUrl: undefined,
    message: 'hola 1',
    date: '01/01/2019',
    hour: '01/01',
    messageType: EMessageType.sent,
    messageState: EMessageState.received
  }, {
    img: 'https://firebasestorage.googleapis.com/v0/b/tbusca-57c7e.appspot.com/o/Establecimientos%2F-LpnThHdGJalM6zyHj4R%2FimagenPrincipal?alt=media&amp;token=32c88031-6c3f-4c2c-a4c8-216b58a714c0',
    imgUrl: '',
    message: '',
    date: '01/01/2019',
    hour: '01/01',
    messageType: EMessageType.sent,
    messageState: EMessageState.read
  },
  {
    img: null,
    imgUrl: undefined,
    message: 'hola este es un mensaje largo de una linea en el cual vamos a probar la longitud de LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem',
    date: '01/01/2019',
    hour: '01/01',
    messageType: EMessageType.sent,
    messageState: EMessageState.read
  }];
  chatDetail: IChatDetail = {
    id: '1',
    img: undefined,
    lock: EChatLock.unlocked,
    messages: this.messages,
    name: 'Renato - Establecimiento, se mira mejor evitar las dos lineas',
    state: EChatState.offline
  };
  ngOnInit(): void {
  }
  add() {
    this.messages.push({
      img: null,
      imgUrl: undefined,
      message: 'hola este es un mensaje largo de una linea en el cual vamos a probar la longitud de LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLorem',
      date: '01/01/2019',
      hour: '01/01',
      messageType: EMessageType.recived,
      messageState: EMessageState.read
    });
  }
}
