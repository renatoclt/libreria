import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'rclt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
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
