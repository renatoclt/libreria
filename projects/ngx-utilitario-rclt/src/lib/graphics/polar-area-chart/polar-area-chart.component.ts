import { Component, OnInit, Input } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'ngx-utilitario-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.scss']
})
export class PolarAreaChartComponent {
  /**
   * Label a mostrar en el grafico
   */
  @Input() polarAreaChartLabels: Label[];
  /**
   * Data a mostrar en el polar area
   */
  @Input() polarAreaChartData: SingleDataSet;
  /**
   * Leyenda a mostrar
   */
  @Input() polarAreaLegend = true;
  /**
   * Tipo de grafica a mostrar
   */
  polarAreaChartType: ChartType = 'polarArea';
  /**
   * @ignore
   */
  constructor() { }
}
