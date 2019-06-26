import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IChatListDetail } from '../../dto/ichat-list-detail';

/**
 * Componente que muestra todas las conversaciones que tienes
 */
@Component({
  selector: 'ngx-utilitario-chat-list',
  templateUrl: './chat-list.component.html',
})
export class ChatListComponent implements OnInit {
  /**
   * Lista de chats que tienes
   */
  @Input() list: IChatListDetail[] = [];
  /**
   * Si se desea resaltar un texto en la lista de un chat
   */
  @Input() search = '';
  /**
   * Si hace click en una conversacion retornara un evento
   */
  @Output() clickList: EventEmitter<any> =  new EventEmitter();
  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit() {
  }
  /**
   * retorna el chat que realiza click
   * @param detail las propiedades del chat
   */
  click(detail: IChatListDetail) {
    this.clickList.emit(detail);
  }

}
