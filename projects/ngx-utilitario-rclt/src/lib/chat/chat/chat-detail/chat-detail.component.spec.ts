import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetailComponent } from './chat-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatDetailAddComponent } from '../chat-detail-add/chat-detail-add.component';
import { EChatLock } from '../../dto/echat-lock';
import { EChatState } from '../../dto/echat-state';
import { IChatDetailMessage } from '../../dto/ichat-detail-message';
import { EMessageState } from '../../dto/emessage-state';
import { EMessageType } from '../../dto/emensaje-type';
import { ElementRef, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ChatDetailMessageComponent } from '../chat-detail-message/chat-detail-message.component';
import { NgxUtilitarioPerfectScrollModule } from 'src/app/perfect-scroll/ngx-utilitario-perfect-scroll.module';
import { ChatDetailPreviewComponent } from 'projects/ngx-utilitario-rclt/src/lib/chat/chat/chat-detail-preview/chat-detail-preview.component';
import { NgxUtilitarioPipesModule } from 'src/app/pipe/ngx-utilitario-rclt-pipes.module';

describe('ChatDetailComponent', () => {
  let component: ChatDetailComponent;
  let fixture: ComponentFixture<ChatDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatDetailComponent,
        ChatDetailAddComponent,
        ChatDetailMessageComponent,
        ChatDetailPreviewComponent
      ],
      imports: [
        ReactiveFormsModule,
        NgxUtilitarioPerfectScrollModule,
        NgxUtilitarioPipesModule
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
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('pruebas a la funcion dayLine', () => {
    let mensaje1: IChatDetailMessage;
    let mensaje2: IChatDetailMessage;
    beforeEach(() => {
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
      component.chatDetail.messages = [mensaje1, mensaje2];
    });
  //   it('Debe retornar true ya que el indice es 0', () => {
  //     expect(component.dayLine(new Date(), 0)).toBeTruthy();
  //   });
  //   it('Debe retornar true ya que son fechas diferente', () => {
  //     expect(component.dayLine(new Date(), 1)).toBeTruthy();
  //   });
  //   it('Debe retornar false ya que son fechas igulaes', () => {
  //     expect(component.dayLine(new Date('05-05-2019'), 1)).toBeFalsy();
  //   });
  //   it('Debe retornar false ya que el formato de la fecha es incorrecto', () => {
  //     expect(component.dayLine(new Date('13-05-2019'), 2)).toBeFalsy();
  //   });
  //   it('Debe retornar false ya que se envia undefined', () => {
  //     expect(component.dayLine(undefined, 2)).toBeFalsy();
  //   });
  });
  // describe('probando la funcion dayDifference', () => {
  //   it('Debe retornar Hoy', () => {
  //     expect(component.dayDifference(new Date())).toBe('Hoy');
  //   });
  //   it('Debe retornar la fecha enviada', () => {
  //     expect(component.dayDifference(new Date('05-05-2019'))).toBe('05/05/2019');
  //   });
  //   it('Debe retornar vacio si se envia undefined ', () => {
  //     expect(component.dayDifference(undefined)).toBe('');
  //   });
  //   it('Debe retornar vacio si el formato es incorrecto', () => {
  //     expect(component.dayDifference(new Date('13-05-2019'))).toBe('');
  //   });
  // });
  describe('messageSend', () => {
    it('debe emitir el mensaje', () => {
      spyOn(component.newMessage , 'emit');
      component.messageSend('nuevo mensaje');
      fixture.detectChanges();
      expect(component.newMessage.emit).toHaveBeenCalledTimes(1);
    });
  });

  describe('chatlock', () => {
    let button: ElementRef;
    beforeEach(() => {
      component.chatDetail.lock = EChatLock.unlocked;
      fixture.detectChanges();
      button = fixture.debugElement.query(By.css('#btn_chatLock'));
    });
    it('si creo correctamente el boton segun la condicion', () => {
      expect(button).toBeTruthy();
    });
    it('debe emitir el mensaje', () => {
      spyOn(component.lockChat , 'emit');
      button.nativeElement.click();
      // component.chatDelete();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.lockChat.emit).toHaveBeenCalledTimes(1);
      });
    });
  });
  describe('chatUnlock', () => {
    let button: ElementRef;
    beforeEach(() => {
      component.chatDetail.lock = EChatLock.lock;
      fixture.detectChanges();
      button = fixture.debugElement.query(By.css('#btn_chatUnlock'));
    });
    it('validamos si se muestra el boton correctamente', () => {
      expect(button).toBeTruthy();
    });
    it('debe emitir el mensaje', () => {
      spyOn(component.lockChat , 'emit');
      button.nativeElement.click();
      // component.chatDelete();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.lockChat.emit).toHaveBeenCalledTimes(1);
      });
    });
  });
  describe('chatDelete', () => {
    let button: ElementRef;
    beforeEach(() => {
      fixture.detectChanges();
      button = fixture.debugElement.query(By.css('#btn_chatDelete'));
    });
    it('si creo correctamente el boton', () => {
      expect(button).toBeTruthy();
    });
    it('debe emitir el mensaje', () => {
      spyOn(component.deleteMessages , 'emit');
      button.nativeElement.click();
      fixture.detectChanges();
      expect(component.deleteMessages.emit).toHaveBeenCalledTimes(1);
    });
  });
  describe('imageValidate', () => {
    it('validamos si retorna imagen ', () => {
      expect(component.imageValidate('urlImg')).toBe('urlImg');
    });
    it('validamos si retorna imagen de un undefined ', () => {
      expect(component.imageValidate(undefined).length).toBeGreaterThanOrEqual(1);
    });
  });
});
