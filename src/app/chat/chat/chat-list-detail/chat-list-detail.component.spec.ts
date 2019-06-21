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
    let div: any;
    beforeEach(async(() => {
      fixture.detectChanges();
      div = fixture.debugElement.query(By.css('div'));
    }));
    it('validamos si se muestra el div correctamente', () => {
      expect(div).toBeTruthy();
    });
    it('realizo click en conversacion debe emitir un evento' , () => {
      spyOn(component.clickDetail, 'emit');
      div.nativeElement.click();
      fixture.detectChanges();
      expect(component.clickDetail.emit).toHaveBeenCalledTimes(1);
    });
  })
});
