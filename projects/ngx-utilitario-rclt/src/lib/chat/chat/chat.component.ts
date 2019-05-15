import { Component, OnInit, Input } from '@angular/core';
import { IMensajeDetalle } from 'src/app/chat/iMensajeDetalle';

@Component({
  selector: 'ngx-utilitario-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() listaMensajes:IMensajeDetalle[];
  constructor() { }

  ngOnInit() {
  }

}
