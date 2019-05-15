import { Component, OnInit, Input } from '@angular/core';
import { IMensajeDetalle } from '../../dto/imensaje-detalle';

@Component({
  selector: 'ngx-utilitario-chat-detalle',
  templateUrl: './chat-detalle.component.html',
  styleUrls: ['./chat-detalle.component.scss']
})
export class ChatDetalleComponent implements OnInit {

  @Input() detalle:IMensajeDetalle;
  constructor() { }

  ngOnInit() {
  }

}
