import { Component, OnInit, Input } from '@angular/core';
import { IMensajeDetalle } from '../../dto/imensaje-detalle';

@Component({
  selector: 'ngx-utilitario-chat-lista',
  templateUrl: './chat-lista.component.html',
  styleUrls: ['./chat-lista.component.scss']
})
export class ChatListaComponent implements OnInit {

  @Input() lista:IMensajeDetalle[] = [];
  constructor() { }

  ngOnInit() {
  }

}
