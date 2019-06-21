import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListDetailComponent } from './chat-list-detail.component';
import { ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ChatDetalleComponent', () => {
  let component: ChatListDetailComponent;
  let fixture: ComponentFixture<ChatListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListDetailComponent);
    component = fixture.componentInstance;
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
    beforeEach(async(() => {
    }));
    it('Obtener ultimo mensaje' , () => {
      spyOn(component.clickDetail, 'emit');
      fixture.detectChanges();
      expect(component.clickDetail.emit).toHaveBeenCalledTimes(1);
    });
  });

  describe('probando funcion dateLast', () => {
    beforeEach(async(() => {
    }));
    it('Obtener ultima fecha' , () => {
      spyOn(component.clickDetail, 'emit');
      fixture.detectChanges();
      expect(component.clickDetail.emit).toHaveBeenCalledTimes(1);
    });
  });
});
