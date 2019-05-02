import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngxrclt-utilitarios',
  template: `
    <p>
      ngx-rclt-utilitarios works con los componentes creados!
    </p>
    <ngxrclt-cards></ngxrclt-cards>
  `,
  styles: ["./ngx-rclt-utilitarios.component.scss"]
})
export class NgxRcltUtilitariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
