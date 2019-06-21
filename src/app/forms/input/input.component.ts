import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Validacion de propiedades hint
   */
  validationHint() {
    if (this.hint !== undefined && this.hint !== null && this.hint !== '') {
      return true;
    }
    return false;
  }
  /**
   * Validacion de label
   */
  validationLabel() {
    if (this.label !== undefined && this.label !== null && this.label !== '') {
      return true;
    }
    return false;
  }
}
