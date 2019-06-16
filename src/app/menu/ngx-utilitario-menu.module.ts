import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDotComponent } from './menu-dot/menu-dot.component';
import { MatMenuModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [MenuDotComponent],
  imports: [
    MatMenuModule,
    MatIconModule,
    CommonModule
  ],
  exports: [
    MenuDotComponent
  ]
})
export class NgxUtilitarioMenuModule { }
