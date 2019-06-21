import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ChatSearchComponent } from './chat/chat-search/chat-search.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { ChatListDetailComponent } from './chat/chat-list-detail/chat-list-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatDetailComponent } from './chat/chat-detail/chat-detail.component';
import { ChatDetailAddComponent } from './chat/chat-detail-add/chat-detail-add.component';
import { NgxUtilitarioFormstModule } from '../forms/ngx-utilitario-rclt-forms.module';
/**
 * Modulo Chat el cual contiene las partes necesarias para el correcto funcinamiento de un chat
 */
@NgModule({
  declarations: [
    ChatComponent,
    ChatSearchComponent,
    ChatListComponent,
    ChatListDetailComponent,
    ChatDetailComponent,
    ChatDetailAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxUtilitarioFormstModule
  ],
  exports: [
    ChatComponent,
    ChatSearchComponent,
    ChatListComponent,
    ChatListDetailComponent,
    ChatDetailComponent,
    ChatDetailAddComponent
  ]
})
export class NgxUtilitarioChatModule { }
