import { NgModule } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { CommonModule } from '@angular/common';
import { CardsImgTextComponent } from './cards-img-text/cards-img-text.component';
import { CardsImgTextTresDivComponent } from './cards-img-text-tres-div/cards-img-text-tres-div.component';

@NgModule({
  declarations: [CardsComponent, CardsImgTextComponent, CardsImgTextTresDivComponent],
  imports: [
    CommonModule
  ],
  exports: [CardsComponent, CardsImgTextComponent]
})
export class NgxUtilitarioRcltModule { }
