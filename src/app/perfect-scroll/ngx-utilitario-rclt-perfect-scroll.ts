import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollComponent } from './perfect-scroll/perfect-scroll.component';
/**
 * Modulo que contiene un scroll perfecto para usar en nuestros div estilizado
 */
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};

@NgModule({
  declarations: [PerfectScrollComponent],
  imports: [
    CommonModule,
    PerfectScrollbarModule
  ],
  exports: [
    PerfectScrollComponent,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class NgxUtilitarioRcltPerfectScroll { }
