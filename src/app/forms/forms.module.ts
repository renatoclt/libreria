import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule,MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [InputComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
  exports:[
    InputComponent
  ]
})
export class FormsModule { }
