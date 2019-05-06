import { Input, Component, SimpleChanges, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'rclt-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnChanges {
  
  @Input() titulo:string;
  @Input() subtitulo:string;
  /**
   * recibe el icono a usar
   */
  @Input() icono:string = "fa fa-user";
  @Input() classTexto:string = "w-80 float-left";
  /**
   * Enviar el tamaño de columnas y el tamaño del icono
   */
  @Input() classImagen:string = "w-20 fontSize40";
  constructor() { }
  
  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    const name: SimpleChange = changes.name;
    console.log(name)
  }
}
