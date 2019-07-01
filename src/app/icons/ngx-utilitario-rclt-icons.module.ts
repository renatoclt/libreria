import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatIconComponent } from './repeat-icon/repeat-icon.component';
import { NgxUtilitarioPipesModule } from '../pipe/ngx-utilitario-rclt-pipes.module';
/**
 * Modulo en el cual se trabajara sobre iconos
 */
@NgModule({
  declarations: [RepeatIconComponent],
  imports: [
    CommonModule,
    NgxUtilitarioPipesModule
  ],
  exports: [RepeatIconComponent]
})
export class NgxUtilitarioIconsModule { }
