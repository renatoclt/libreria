import { Input, Component, SimpleChanges, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'rclt-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnChanges {
  
  @Input() titulo:string;
  @Input() subtitulo:string;
  @Input() classTexto:string = "col-8";
  @Input() classImagen:string = "col-4";
  constructor() { }
  
  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    const name: SimpleChange = changes.name;
    console.log(name)
  }
}
