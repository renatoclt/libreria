import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-utilitario-cards-img-text-ndiv',
  templateUrl: './cards-img-text-ndiv.component.html',
  styleUrls: ['./cards-img-text-ndiv.component.scss']
})
export class CardsImgTextNdivComponent implements OnInit {
  
  @Input() titulo:string;
  @Input() descripcion:string ="afdasdf";
  @Input() etiqueta:string ="etiqueta";
  @Input() imagen:string = './assets/test.jpg';
  @Input() classTexto:string = "float-left";
  @Input() color:string = "#000";
  @Input() height:string = "6.5rem";
  @Input() contenido:any[] = [];
  @Output() click:EventEmitter<any> = new EventEmitter();

  constructor() { }
  
  ngOnInit() {
  }
  clickCard($event){
    this.click.emit($event);
  }
}
