import { Component, OnInit, Input } from '@angular/core';
import { IMensajeDetalle } from '../iMensajeDetalle';

@Component({
  selector: 'rclt-chat-lista',
  templateUrl: './chat-lista.component.html',
  styleUrls: ['./chat-lista.component.css']
})
export class ChatListaComponent implements OnInit {

  @Input() detalle:IMensajeDetalle;
  
  constructor() { }

  ngOnInit() {
  }

}
