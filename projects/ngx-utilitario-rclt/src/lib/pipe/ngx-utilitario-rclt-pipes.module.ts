import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './highlight.pipe';
import { NumberToArrayPipe } from './number-to-array.pipe';

@NgModule({
  declarations: [HighlightPipe, NumberToArrayPipe],
  imports: [
    CommonModule
  ],
  exports:[
    HighlightPipe,
    NumberToArrayPipe
  ]
})
export class NgxUtilitarioPipesModule { }
