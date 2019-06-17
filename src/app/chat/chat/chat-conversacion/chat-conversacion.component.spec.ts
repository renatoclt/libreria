import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatConversacionComponent } from './chat-conversacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatDetalleAgregarComponent } from '../chat-detalle-agregar/chat-detalle-agregar.component';

describe('ChatConversacionComponent', () => {
  let component: ChatConversacionComponent;
  let fixture: ComponentFixture<ChatConversacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatConversacionComponent,
        ChatDetalleAgregarComponent,
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatConversacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
