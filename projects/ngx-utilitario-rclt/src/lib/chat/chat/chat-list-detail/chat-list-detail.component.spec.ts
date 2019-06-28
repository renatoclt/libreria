import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListDetailComponent } from './chat-list-detail.component';
import { ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EChatLock } from '../../dto/echat-lock';
import { EChatState } from '../../dto/echat-state';
import { IChatDetailMessage } from '../../dto/ichat-detail-message';
import { EMessageState } from '../../dto/emessage-state';
import { EMessageType } from '../../dto/emensaje-type';
import { Fecha } from 'src/app/utilitario/fecha';
import { HighlightPipe } from 'src/app/pipe/highlight.pipe';

describe('ChatListDetail', () => {
  let component: ChatListDetailComponent;
  let fixture: ComponentFixture<ChatListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatListDetailComponent, HighlightPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListDetailComponent);
    component = fixture.componentInstance;
    component.listDetail = {
      lock: EChatLock.unlocked,
      state: EChatState.online,
      id: 'prueba chat',
      img: '',
      message: [],
      name: 'renato prueba',
      notification: 2
    };
    fixture.detectChanges();
  });

  describe('probando funcion click en chat', () => {
    let div: ElementRef;
    beforeEach(async(() => {
      div = fixture.debugElement.query(By.css('#div_detailMessages'));
    }));
    it('realizo click en conversacion debe emitir un evento' , () => {
      spyOn(component.clickDetail, 'emit');
      div.nativeElement.click();
      fixture.detectChanges();
      expect(component.clickDetail.emit).toHaveBeenCalledTimes(1);
    });
  });

  describe('probando funcion messageList', () => {
    let message1: IChatDetailMessage ;
    beforeEach(async(() => {
      message1 = {
        date: '05-05-2018',
        hour: '20:10',
        img: '',
        message: 'mensaje prueba',
        messageState: EMessageState.sent,
        messageType: EMessageType.recived
      };
      component.listDetail.message = [message1];
    }));
    it('Obtener ultimo mensaje' , () => {
      expect(component.messageLast(component.listDetail.message)).toBe('mensaje prueba');
    });
    it('Obtener ultimo mensaje' , () => {
      expect(component.messageLast(undefined)).toBe('');
    });
    it('Al enviar 2 mensajes obtenga el ultimo mensaje' , () => {
      component.listDetail.message.push(message1);
      component.listDetail.message[1].message = '05-21-2019';
      expect(component.messageLast(component.listDetail.message)).toBe('05-21-2019');
    });
  });

  describe('probando funcion dateLast', () => {
    let message1: IChatDetailMessage ;
    beforeEach(async(() => {
      message1 = {
        date: '05-05-2018',
        hour: '20:10',
        img: '',
        message: 'message prueba',
        messageState: EMessageState.sent,
        messageType: EMessageType.recived
      };
      component.listDetail.message = [message1];
    }));
    it('Se espera la fecha enviada' , () => {
      expect(component.dateLast(component.listDetail.message)).toBe('05-05-2018');
    });
    it('Al enviar un undefined se espera un vacio' , () => {
      expect(component.dateLast(undefined)).toBe('');
    });
    it('Al enviar una fecha en formato incorrecto' , () => {
      component.listDetail.message[0].date = '13-05-2019';
      expect(component.dateLast(component.listDetail.message)).toBe('');
    });
    it('Al enviar hoy como fecha se espera la hora' , () => {
      const fecha = new Fecha();
      component.listDetail.message[0].date = fecha.format(new Date(), 'LL');
      expect(component.dateLast(component.listDetail.message)).toBe('20:10');
    });
    it('Al enviar 2 mensajes obtenga el ultimo mensaje' , () => {
      component.listDetail.message.push(message1);
      component.listDetail.message[1].date = '05-21-2019';
      expect(component.dateLast(component.listDetail.message)).toBe('05-21-2019');
    });
  });
});
