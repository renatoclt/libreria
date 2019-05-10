import { NgModule } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { CommonModule } from '@angular/common';
import { CardsImgTextComponent } from './cards-img-text/cards-img-text.component';
import { RepeatIconComponent } from './repeat-icon/repeat-icon.component';
import { NumberToArrayPipe } from './pipe/number-to-array.pipe';
import { CardsImgTextNdivComponent } from './cards-img-text-ndiv/cards-img-text-ndiv.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [CardsComponent, CardsImgTextComponent, RepeatIconComponent, NumberToArrayPipe, CardsImgTextNdivComponent, ModalComponent],
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
            CardsImgTextNdivComponent,
            ModalComponent,
            /**
             * pipes
             *  */ 
            NumberToArrayPipe]
})
export class NgxUtilitarioRcltModule { }
