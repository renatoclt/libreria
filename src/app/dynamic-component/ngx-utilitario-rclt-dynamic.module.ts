import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicComponentService } from './dynamic-component/dynamic-component.service';

/**
 * Modulo dynamic el cual contiene el servicio para añadir un componente en tiempo de ejecucion
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DynamicComponentService
  ]
})
export class NgxUtilitarioDynamicModule { }
