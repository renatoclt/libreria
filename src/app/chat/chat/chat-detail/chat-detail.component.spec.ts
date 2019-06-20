import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetailComponent } from './chat-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatDetailAddComponent } from '../chat-detail-add/chat-detail-add.component';
import { EChatLock } from '../../dto/echat-lock';
import { EChatState } from '../../dto/echat-state';
import { IChatDetailMessage } from '../../dto/ichat-detail-message';
import { EMessageState } from '../../dto/emessage-state';
import { EMessageType } from '../../dto/emensaje-type';

describe('ChatDetailComponent', () => {
  let component: ChatDetailComponent;
  let fixture: ComponentFixture<ChatDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatDetailComponent,
        ChatDetailAddComponent,
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.chatDetail = {
      id: 'prueba-01',
      img: '',
      lock: EChatLock.lock,
      messages: [],
      name: 'Test chat',
      state: EChatState.offline
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('pruebas a la funcion dayLine', () => {
    let mensaje1: IChatDetailMessage;
    let mensaje2: IChatDetailMessage;
    beforeEach(() =>{
      mensaje1 = {
        messageState: EMessageState.sent,
        date: '05-05-2019',
        hour: '11:20',
        img: '',
        message: 'prueba',
        messageType:  EMessageType.sent
      };
      mensaje2 = {
        messageState: EMessageState.sent,
        date: '05-13-2019',
        hour: '11:20',
        img: '',
        message: 'prueba',
        messageType:  EMessageType.sent
      };
      component.chatDetail.messages = [mensaje1, mensaje2]
    });
    it('Debe retornar true ya que el indice es 0', () => {
      expect(component.dayLine(new Date(), 0)).toBeTruthy();
    });
    it('Debe retornar true ya que son fechas diferente', () => {
      expect(component.dayLine(new Date(), 1)).toBeTruthy();
    });
    it('Debe retornar false ya que son fechas igulaes', () => {
      expect(component.dayLine(new Date('05-05-2019'), 1)).toBeFalsy();
    });
    it('Debe retornar false ya que el formato de la fecha es incorrecto', () => {
      expect(component.dayLine(new Date('13-05-2019'), 2)).toBeFalsy();
    });
    it('Debe retornar false ya que se envia undefined', () => {
      expect(component.dayLine(undefined, 2)).toBeFalsy();
    });
  });
  describe('probando la funcion dayDifference', () => {
    it('Debe retornar Hoy', () => {
      expect(component.dayDifference(new Date())).toBe('Hoy');
    });
    it('Debe retornar la fecha enviada', () => {
      expect(component.dayDifference(new Date('05-05-2019'))).toBe('05/05/2019');
    });
    it('Debe retornar vacio si se envia undefined ', () => {
      expect(component.dayDifference(undefined)).toBe('');
    });
    it('Debe retornar vacio si el formato es incorrecto', () => {
      expect(component.dayDifference(new Date('13-05-2019'))).toBe('');
    });
  });
});
