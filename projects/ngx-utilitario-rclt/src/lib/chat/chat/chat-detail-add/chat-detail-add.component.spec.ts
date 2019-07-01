import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ChatDetailAddComponent } from './chat-detail-add.component';

describe('ChatDetailAddComponent', () => {
  let component: ChatDetailAddComponent;
  let fixture: ComponentFixture<ChatDetailAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatDetailAddComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });
  describe('Probar estado del textBox ', () => {
    it('deberia poder editar el textbox si no se envia nada', () => {
      const submitEL: DebugElement = fixture.debugElement.query(By.css('#txt_message'));
      fixture.detectChanges();
      expect(submitEL.nativeElement.disabled).toBeFalsy();
    });
    it('deberia deshabilitar el textbox si se envia 1 o 2 ', () => {
      component.disabled = 1;
      const submitEL: DebugElement = fixture.debugElement.query(By.css('#txt_message'));
      fixture.detectChanges();
      expect(submitEL.nativeElement.disabled).toBeTruthy();
    });
    it('deberia disablear el input si se envia 0', () => {
      component.disabled = 0;
      const submitEL: DebugElement = fixture.debugElement.query(By.css('#txt_message'));
      fixture.detectChanges();
      expect(submitEL.nativeElement.disabled).toBeFalsy();
    });
    it('deberia poder editar el textbox si se envia undefined o null', () => {
      component.disabled = null;
      const submitEL: DebugElement = fixture.debugElement.query(By.css('#txt_message'));
      fixture.detectChanges();
      expect(submitEL.nativeElement.disabled).toBeFalsy();
    });
    it('deberia poder editar el textbox si se envia undefined o null', () => {
      component.disabled = null;
      const submitEL: DebugElement = fixture.debugElement.query(By.css('#txt_message'));
      fixture.detectChanges();
      expect(submitEL.nativeElement.disabled).toBeFalsy();
    });
  });
  describe('Probar envio de mensaje', () => {
    let button: ElementRef;
    beforeEach(() => {
      component.createForm();
      button = fixture.debugElement.query(By.css('#btn_sendMessage'));
    });
    it('si creo correctamente el boton', () => {
      expect(button).toBeTruthy();
    });
    it('Al hacer click en el boton enviar emita un mensaje y enviar el texto', () => {
      component.messageForm.controls.message.setValue('mensaje');
      spyOn(component.newMessage, 'emit');
      button.nativeElement.click();
      fixture.detectChanges();
      expect(component.newMessage.emit).toHaveBeenCalledWith('mensaje');
    });
    it('Al hacer click en el boton enviar no enviar evento si la caja de texto esta vacia', () => {
      component.messageForm.controls.message.setValue('');
      spyOn(component.newMessage, 'emit');
      button.nativeElement.click();
      fixture.detectChanges();
      expect(component.newMessage.emit).toHaveBeenCalledTimes(1);
    });
    it('Al hacer click en el boton enviar limpiar el input', () => {
      component.messageForm.controls.message.setValue('asdfsad');
      button.nativeElement.click();
      fixture.detectChanges();
      expect(component.messageForm.controls.message.value).toBeNull();
    });
  });
  describe('Probar envio de imagen', () => {
    it('Que emita una nueva imagen si se envia un archivo', () => {
      const mockFile = new File([''], 'filename', { type: '.png' });
      const mockEvt = { target: { files: [mockFile] } };
      spyOn(component.newImage, 'emit');
      component.sendImage(mockEvt as any);
      fixture.detectChanges();
      expect(component.newImage.emit).toHaveBeenCalledWith(mockEvt.target.files);
    });
    it('Que emita una nueva imagen si se envian mas archivos', () => {
      const mockFile = new File([''], 'filename', { type: '.png' });
      const mockEvt = { target: { files: [mockFile, mockFile] } };
      spyOn(component.newImage, 'emit');
      component.sendImage(mockEvt as any);
      fixture.detectChanges();
      expect(component.newImage.emit).toHaveBeenCalledWith(mockEvt.target.files);
    });
    it('Que no emita ninguna respuesta si no se envian archivos', () => {
      const mockFile = new File([''], 'filename', { type: '.png' });
      const mockEvt = { target: { files: [] } };
      spyOn(component.newImage, 'emit');
      component.sendImage(mockEvt as any);
      fixture.detectChanges();
      expect(component.newImage.emit).toHaveBeenCalledTimes(0);
    });
  });
});
