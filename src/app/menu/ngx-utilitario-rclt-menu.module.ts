import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatIconModule } from '@angular/material';
import { MenuDotComponent } from './menu-dot/menu-dot.component';

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
