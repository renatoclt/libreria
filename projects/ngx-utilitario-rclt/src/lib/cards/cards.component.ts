import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-utilitario-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() titulo:string;
  @Input() subtitulo:string;
  @Input() classTexto:string = "col-8";
  @Input() classImagen:string = "col-4";

  constructor() { }

  ngOnInit() {
  }

}
