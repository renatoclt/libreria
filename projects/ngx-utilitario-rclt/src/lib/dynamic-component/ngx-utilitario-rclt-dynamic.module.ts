import { CommonModule } from '@angular/common';
import { DynamicComponentService } from './dynamic-component/dynamic-component.service';
import { NgModule } from '@angular/core';

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
