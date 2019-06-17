import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-utilitario-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

  @Input() appearance = 'outline';
  @Input() parent: FormGroup = new FormGroup({});
  @Input() tooltip = '';
  @Input() position = 'above';
  constructor() { }

  ngOnInit() {
  }

}
