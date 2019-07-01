import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './highlight/highlight.pipe';
import { NumberToArrayPipe } from './number-to-array/number-to-array.pipe';

@NgModule({
  declarations: [HighlightPipe, NumberToArrayPipe],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightPipe,
    NumberToArrayPipe
  ]
})
export class NgxUtilitarioPipesModule { }
