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
import { ChatDetailMessageComponent } from './chat/chat-detail-message/chat-detail-message.component';
import { HighlightPipe } from '../pipe/highlight.pipe';
import { NgxUtilitarioRcltPerfectScrollModule } from '../perfect-scroll/ngx-utilitario-rclt-perfect-scroll.module';
import { NgxUtilitarioPipesModule } from '../pipe/ngx-utilitario-rclt-pipes.module';
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
    ChatDetailAddComponent,
    ChatDetailMessageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxUtilitarioFormstModule,
    NgxUtilitarioRcltPerfectScrollModule,
    NgxUtilitarioPipesModule
  ],
  exports: [
    ChatComponent,
    ChatSearchComponent,
    ChatListComponent,
    ChatListDetailComponent,
    ChatDetailComponent,
    ChatDetailAddComponent,
    ChatDetailMessageComponent
  ]
})
export class NgxUtilitarioChatModule { }
