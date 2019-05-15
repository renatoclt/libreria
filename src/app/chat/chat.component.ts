import { Component, OnInit, Input } from '@angular/core';
import { IMensajeDetalle } from './iMensajeDetalle';


@Component({
  selector: 'rclt-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensajeListaTem:IMensajeDetalle =  {
    id: '1',
    img: 'https://firebasestorage.googleapis.com/v0/b/tbusca-94bc9.appspot.com/o/Resource%2Fdefault-user.jpg?alt=media&token=495c8070-6c09-4567-9e91-f0722d7f00ee',
    nombre:'nombre',
    mensaje:'mensajes',
    fechaHora:'00:00',
    notificacion:0
  }
  @Input() listaMensajes:IMensajeDetalle[] = [this.mensajeListaTem,this.mensajeListaTem];
  constructor() { }

  ngOnInit() {
  }

}
