import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ChatBusquedaComponent } from './chat/chat-search/chat-busqueda.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { ChatListDetailComponent } from './chat/chat-list-detail/chat-list-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatDetailComponent } from './chat/chat-detail/chat-detail.component';
import { ChatDetailAddComponent } from './chat/chat-detail-add/chat-detail-add.component';
/**
 * Modulo Chat el cual contiene las partes necesarias para el correcto funcinamiento de un chat
 */
@NgModule({
  declarations: [ChatComponent,
                 ChatBusquedaComponent,
                 ChatListComponent,
                 ChatListDetailComponent,
                 ChatDetailComponent,
                 ChatDetailAddComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ChatListComponent,
    ChatDetailAddComponent
  ],
  exports: [
    ChatComponent,
    ChatDetailComponent,
    ChatDetailAddComponent,
    ChatListDetailComponent
  ]
})
export class NgxUtilitarioChatModule { }
