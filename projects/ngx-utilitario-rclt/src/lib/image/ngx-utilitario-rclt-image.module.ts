import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { OwlModule } from 'ngx-owl-carousel';
import { OwlcarouselDirective } from './carousel/directive/owlcarousel.directive';


@NgModule({
  declarations: [CarouselComponent, OwlcarouselDirective],
  imports: [
    CommonModule,
    OwlModule
  ],
  exports: [CarouselComponent]
})
export class NgxUtilitarioImageModule { }
