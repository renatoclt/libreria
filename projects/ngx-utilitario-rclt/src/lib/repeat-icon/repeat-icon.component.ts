import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-utilitario-repeat-icon',
  templateUrl: './repeat-icon.component.html',
  styleUrls: ['./repeat-icon.component.scss']
})
export class RepeatIconComponent implements OnInit {

  @Input() repetir:number = 5; 
  @Input() activo:number = 0; 
  @Input() icono:string = "fa fa-user"; 
  @Input() color:string = "#000"; 
  @Input() colorActivo:string = "#000"; 
  constructor() { }
  ngOnInit() {
  }
}
