import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ChatBusquedaComponent } from './chat/chat-busqueda/chat-busqueda.component';
import { ChatListaComponent } from './chat/chat-lista/chat-lista.component';
import { ChatDetalleComponent } from './chat/chat-detalle/chat-detalle.component';

@NgModule({
  declarations: [ChatComponent, ChatBusquedaComponent, ChatListaComponent, ChatDetalleComponent ],
  imports: [
    CommonModule
  ],
  exports:[
    ChatComponent
  ]
})
export class NgxUtilitarioChatModule { }
