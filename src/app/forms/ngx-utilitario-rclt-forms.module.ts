import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { InputSearchComponent } from './input-search/input-search.component';

@NgModule({
  declarations: [InputComponent, InputSearchComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [
    InputComponent,
    InputSearchComponent
  ]
})
export class NgxUtilitarioFormstModule { }
