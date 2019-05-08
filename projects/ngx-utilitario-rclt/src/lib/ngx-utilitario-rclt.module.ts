import { NgModule } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { CommonModule } from '@angular/common';
import { CardsImgTextComponent } from './cards-img-text/cards-img-text.component';
import { RepeatIconComponent } from './repeat-icon/repeat-icon.component';

@NgModule({
  declarations: [CardsComponent, CardsImgTextComponent, RepeatIconComponent],
  imports: [
    CommonModule
  ],
  exports: [CardsComponent, CardsImgTextComponent]
})
export class NgxUtilitarioRcltModule { }
