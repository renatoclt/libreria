import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Componente que permite agregar un mensaje
 */
@Component({
  selector: 'ngx-utilitario-chat-detail-add',
  templateUrl: './chat-detail-add.component.html',
  styleUrls: ['./chat-detail-add.component.scss']
})
export class ChatDetailAddComponent implements OnInit {
/**
 * Validamos si puede escribir o no un mensaje
 * @example
 * 0 si puede enviar un mensaje
 * 1 no puede enviar mensaje
 * 2 no puede enviar mensaje
 */
  @Input() disabled = 1;
  /**
   * Al enviar un mensaje emite un evento
   */
  @Output() newMessage: EventEmitter<any> = new EventEmitter();
  /**
   * Mensaje que aparecera en la caja de texto
   */
  placeholder = 'Escribir mensaje ...';
  /**
   * Variable de formulario
   */
  messageForm: FormGroup;

  /**
   * @ignore
   * @param formBuilder inicializacion de formulario
   */
  constructor(private formBuilder: FormBuilder) { }

  /**
   * Inicializamos el formulario
   */
  ngOnInit() {
    this.createForm();
  }

  /**
   * añadimos el control mensaje al formulario
   */
  createForm() {
    this.messageForm = this.formBuilder.group({
      message: '',
    });
  }

  /**
   * Emitimos de que hay un nuevo mensaje
   */
  enviarMensaje() {
    this.newMessage.emit(this.messageForm.controls.mensaje.value);
  }
}
