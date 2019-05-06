import { NgModule } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { CommonModule } from '@angular/common';
import { CardsImgTextComponent } from './cards-img-text/cards-img-text.component';

@NgModule({
  declarations: [CardsComponent, CardsImgTextComponent],
  imports: [
    CommonModule
  ],
  exports: [CardsComponent, CardsImgTextComponent]
})
export class NgxUtilitarioRcltModule { }
