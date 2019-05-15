import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ChatDetalleComponent } from './chat/chat-detalle/chat-detalle.component';
import { ChatListaComponent } from './chat/chat-lista/chat-lista.component';
import { ChatBusquedaComponent } from './chat/chat-busqueda/chat-busqueda.component';

@NgModule({
  declarations: [ChatComponent, ChatDetalleComponent, ChatListaComponent, ChatBusquedaComponent],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
