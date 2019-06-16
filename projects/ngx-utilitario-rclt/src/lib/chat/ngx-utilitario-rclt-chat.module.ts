import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ChatBusquedaComponent } from './chat/chat-busqueda/chat-busqueda.component';
import { ChatListaComponent } from './chat/chat-lista/chat-lista.component';
import { ChatDetalleComponent } from './chat/chat-detalle/chat-detalle.component';
import { ChatConversacionComponent } from './chat/chat-conversacion/chat-conversacion.component';
import { ChatDetalleAgregarComponent } from './chat/chat-detalle-agregar/chat-detalle-agregar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatComponent, ChatBusquedaComponent, ChatListaComponent, ChatDetalleComponent, ChatConversacionComponent, ChatDetalleAgregarComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ChatComponent
  ]
})
export class NgxUtilitarioChatModule { }
