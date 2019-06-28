import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControlName, FormBuilder } from '@angular/forms';
/**
 * Input con material
 */
@Component({
  selector: 'ngx-utilitario-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
 /**
  * Apariencia de material del input
  */
  @Input() appearance = 'outline';
  /**
   * padre del input
   */
  @Input() parent: FormGroup = new FormGroup({});
  /**
   * padre del input
   */
  @Input() name = 'default';
  /**
   * tooltip a mostrar
   */
  @Input() tooltip = '';
  /**
   * position del tooltip
   */
  @Input() position = 'above';
  /**
   * texto abajo del input
   */
  @Input() hint = '';
  /**
   * label en el input
   */
  @Input() label = '';
  /**
   * Icono  en la parte final del textbox
   */
  @Input() iconMatSuffix = '';
  /**
   * texto en la parte final del textbox
   */
  @Input() spanMatSuffix = '';
  /**
   * Icono  en la parte inicial del textbox
   */
  @Input() iconMatPrefix = '';
  /**
   * texto en la parte inicial del textbox
   */
  @Input() spanMatPrefix = '';
  /**
   * evento keydown emita un evnto
   */
  @Output() keydown: EventEmitter<any> = new EventEmitter();
  /**
   * evento que retorna el valor del input
   */
  @Output() value: EventEmitter<any> = new EventEmitter();

  /**
   * Crearemos un formGroup por defecto en caso no se envie
   */
  constructor(private formBuilder: FormBuilder) {
    this.parent = this.formBuilder.group({
      default: ''
    });
  }

  /**
   * @ignore
   */
  ngOnInit() {
  }
  /**
   * Validacion de que los elementos no sean null undefined o vacios
   */
  validationValue(element: any) {
    if (element !== undefined && element !== null && element !== '') {
      return true;
    }
    return false;
  }
  /**
   * Retornamos un nuevo evento y llamamos a la funcion emitValue
   * @param event Evento al presionar una tecla
   */
  keydownFun(event) {
    this.keydown.emit(event);
    this.emitValue();
  }
  /**
   * Emitimos un evento retornando el valor actual del input
   */
  emitValue() {
    this.value.emit(this.parent.controls[this.name].value);
  }
}
