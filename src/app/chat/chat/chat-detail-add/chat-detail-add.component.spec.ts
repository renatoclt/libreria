import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetailAddComponent } from './chat-detail-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ChatDetailAddComponent', () => {
  let component: ChatDetailAddComponent;
  let fixture: ComponentFixture<ChatDetailAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDetailAddComponent ],
      imports: [ ReactiveFormsModule ]
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
  it('Al hacer click en el boton enviar emita un mensaje y enviar el texto', () => {
    component.createForm();
    component.messageForm.controls.message.setValue('mensaje')
    expect( component.messageForm.controls.message.value).toBe('mensaje');
  });
});
