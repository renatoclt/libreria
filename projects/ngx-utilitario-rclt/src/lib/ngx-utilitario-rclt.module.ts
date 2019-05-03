import { NgModule } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule
  ],
  exports: [CardsComponent]
})
export class NgxUtilitarioRcltModule { }
