import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';

@NgModule({
  declarations: [BarChartComponent, LineChartComponent, PolarAreaChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    BarChartComponent,
    LineChartComponent,
    PolarAreaChartComponent
  ]
})
export class NgxUtilitarioGraphicsModule {}
