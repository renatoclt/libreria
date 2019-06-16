import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-utilitario-chat-detalle-agregar',
  templateUrl: './chat-detalle-agregar.component.html',
  styleUrls: ['./chat-detalle-agregar.component.scss']
})
export class ChatDetalleAgregarComponent implements OnInit {

  @Input() disabled;
  @Output() nuevoMensaje: EventEmitter<any> = new EventEmitter();
  placeholder = 'Escribir mensaje ...';
  mensajeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.mensajeForm = this.formBuilder.group({
      mensaje: '',
    });
  }

  enviarMensaje() {
    this.nuevoMensaje.emit(this.mensajeForm.controls.mensaje.value);
  }
}
