import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rclt-repeat-icon',
  templateUrl: './repeat-icon.component.html',
  styleUrls: ['./repeat-icon.component.css']
})
export class RepeatIconComponent implements OnInit {

  @Input() repetir = 5;
  @Input() activo = 0;
  @Input() icono = 'fa fa-user';
  @Input() color = '#000';
  @Input() colorActivo = '#000';
  constructor() { }
  ngOnInit() {
  }
}
