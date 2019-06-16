import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-utilitario-cards-img-text-ndiv',
  templateUrl: './cards-img-text-ndiv.component.html',
  styleUrls: ['./cards-img-text-ndiv.component.scss', '../styles/styles_custom.scss']
})
export class CardsImgTextNdivComponent implements OnInit {

  @Input() titulo: string;
  @Input() descripcion = 'afdasdf';
  @Input() etiqueta = 'etiqueta';
  @Input() imagen = './assets/test.jpg';
  @Input() classTexto = 'float-left';
  @Input() color = '#000';
  @Input() height = '6.5rem';
  @Input() contenido: any[] = [];
  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  clickCard($event) {
    this.click.emit($event);
  }
}
