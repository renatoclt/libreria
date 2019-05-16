import { Component, OnInit, Input } from '@angular/core';
import { IMensajeDetalle } from '../dto/imensaje-detalle';

@Component({
  selector: 'ngx-utilitario-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() lista:IMensajeDetalle[] = [];
  constructor() { }

  ngOnInit() {
  }

}
