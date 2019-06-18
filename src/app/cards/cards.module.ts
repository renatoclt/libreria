import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { CardsImgTextComponent } from './cards-img-text/cards-img-text.component';
import { CardsImgTextNdivComponent } from './cards-img-text-ndiv/cards-img-text-ndiv.component';
/**
 * Modulo el cual contiene componentes de cards
 */
@NgModule({
  declarations: [CardsComponent, CardsImgTextComponent, CardsImgTextNdivComponent],
  imports: [
    CommonModule
  ]
})
export class NgxUtilitarioCardsModule { }
