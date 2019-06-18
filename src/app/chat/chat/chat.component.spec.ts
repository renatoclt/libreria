import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { ChatBusquedaComponent } from 'projects/ngx-utilitario-rclt/src/lib/chat/chat/chat-busqueda/chat-busqueda.component';
import { ChatListaComponent } from 'projects/ngx-utilitario-rclt/src/lib/chat/chat/chat-lista/chat-lista.component';
import { ChatDetalleComponent } from 'projects/ngx-utilitario-rclt/src/lib/chat/chat/chat-detalle/chat-detalle.component';
import { ChatConversacionComponent } from 'projects/ngx-utilitario-rclt/src/lib/chat/chat/chat-conversacion/chat-conversacion.component';
// tslint:disable-next-line: max-line-length
import { ChatDetalleAgregarComponent } from 'projects/ngx-utilitario-rclt/src/lib/chat/chat/chat-detalle-agregar/chat-detalle-agregar.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatComponent,
        ChatBusquedaComponent,
        ChatListaComponent,
        ChatDetalleComponent,
        ChatConversacionComponent,
        ChatDetalleAgregarComponent],
      imports: [
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
