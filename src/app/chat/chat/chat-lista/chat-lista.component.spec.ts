import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListaComponent } from './chat-lista.component';
import { ChatDetalleComponent } from '../chat-detalle/chat-detalle.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ChatListaComponent', () => {
  let component: ChatListaComponent;
  let fixture: ComponentFixture<ChatListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatListaComponent,
        ChatDetalleComponent
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
