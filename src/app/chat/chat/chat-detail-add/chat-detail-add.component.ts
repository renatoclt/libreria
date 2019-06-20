import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Componente que permite agregar un mensaje y una nueva imagen
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
  @Input() disabled = 0;
  /**
   * Mensaje que aparecera en la caja de texto
   */
  @Input() placeholder = 'Escribir mensaje ...';
  /**
   * Al enviar un mensaje emite un evento
   */
  @Output() newMessage: EventEmitter<string> = new EventEmitter();
  /**
   * Al enviar una imagen emite un evento con todos los archivos cargados
   */
  @Output() newImage: EventEmitter<FileList> = new EventEmitter();
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
   * añadimos el control mensaje e imagen al formulario
   */
  createForm() {
    this.messageForm = this.formBuilder.group({
      message: '',
    });
  }

  /**
   * Emitimos de que hay un nuevo mensaje y limpiamos la caja de texto
   */
  sendMessage() {
    if (this.messageForm.controls.message.value !== '' &&
        this.messageForm.controls.message.value !== undefined &&
        this.messageForm.controls.message.value !== null) {
      this.newMessage.emit(this.messageForm.controls.message.value);
      this.messageForm.reset();
    }
  }
  /**
   * Emitimos de que hay una nueva imagen a enviar
   */
  sendImage(event: Event) {
    const target = event.target as HTMLInputElement;
    const fileList: FileList = target.files;
    if (fileList && fileList.length > 0) {
      this.newImage.emit(fileList);
    }
  }
}
