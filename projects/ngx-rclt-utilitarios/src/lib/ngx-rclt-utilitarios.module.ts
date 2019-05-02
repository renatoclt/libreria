import { NgModule } from '@angular/core';
import { NgxRcltUtilitariosComponent } from './ngx-rclt-utilitarios.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [NgxRcltUtilitariosComponent, CardsComponent],
  imports: [
  ],
  exports: [NgxRcltUtilitariosComponent, CardsComponent]
})
export class NgxRcltUtilitariosModule { }
