import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListaComponent } from './chat-lista/chat-lista.component';
import { ChatDetalleComponent } from './chat-detalle/chat-detalle.component';
import { ChatComponent } from './chat.component';
import { AppModule } from '../app.module';
import { ChatBusquedaComponent } from './chat-busqueda/chat-busqueda.component';

@NgModule({
  declarations: [ChatComponent, ChatListaComponent, ChatDetalleComponent, ChatBusquedaComponent],
  imports: [
    CommonModule,
  ],
  exports:[ChatComponent]
})
export class ChatModule { }
