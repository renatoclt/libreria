import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
/**
 * Input con material 
 */
@Component({
  selector: 'ngx-utilitario-input',
  templateUrl: './input.component.html',
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
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

}
