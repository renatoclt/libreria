import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatIconComponent } from './repeat-icon/repeat-icon.component';
import { NumberToArrayPipe } from 'projects/ngx-utilitario-rclt/src/lib/pipe/number-to-array.pipe';
/**
 * Modulo en el cual se trabajara sobre iconos
 */
@NgModule({
  declarations: [RepeatIconComponent, NumberToArrayPipe],
  imports: [
    CommonModule
  ]
})
export class NgxUtilitarioIconsModule { }
