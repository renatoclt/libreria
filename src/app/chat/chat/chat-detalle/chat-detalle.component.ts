import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMensajeDetalle } from '../../dto/imensaje-detalle';

@Component({
  selector: 'ngx-utilitario-chat-detalle',
  templateUrl: './chat-detalle.component.html',
  styleUrls: ['./chat-detalle.component.scss']
})
export class ChatDetalleComponent implements OnInit {

  @Input() detalle:IMensajeDetalle;
  @Output() clickDetalle:EventEmitter<any> =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  click(){
    this.clickDetalle.emit(this.detalle);
  }

}
