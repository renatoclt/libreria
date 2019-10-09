import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisComponent } from './ellipsis/ellipsis.component';
import { LoadingComponent } from './loading/loading.component';
import { OverlayComponent } from './overlay/overlay.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [EllipsisComponent, LoadingComponent, OverlayComponent, SpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [

  ]
})
export class NgxUtilitarioLoadingModule { }
