import { NgModule } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { CommonModule } from '@angular/common';
import { CardsImgTextComponent } from './cards-img-text/cards-img-text.component';
import { RepeatIconComponent } from './repeat-icon/repeat-icon.component';
import { NumberToArrayPipe } from './pipe/number-to-array.pipe';

@NgModule({
  declarations: [CardsComponent, CardsImgTextComponent, RepeatIconComponent, NumberToArrayPipe],
  imports: [
    CommonModule
  ],
  exports: [
            /**
             * component
             *  */ 
            CardsComponent,
            CardsImgTextComponent, 
            RepeatIconComponent,
            /**
             * pipes
             *  */ 
            NumberToArrayPipe]
})
export class NgxUtilitarioRcltModule { }
