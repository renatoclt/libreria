import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

/**
 * Componenente utilizando chart.js para generar un grafico polar area
 * import * as pluginDataLabels from 'chartjs-plugin-datalabels';
 * para añadir label en el grafico
 */
@Component({
  selector: 'ngx-utilitario-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  /**
   * Opciones del pie
   */
  @Input() pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  /**
   * Label del pie
   */
  @Input() pieChartLabels: Label[];
  /**
   * Data dek pie
   */
  @Input() pieChartData: number[];
  /**
   * Tipo de chart
   */
  pieChartType: ChartType = 'pie';
  /**
   * Mostrar legenda
   */
  @Input() pieChartLegend = true;
  /**
   * Añadir plugins
   */
  @Input() pieChartPlugins = [];
  /**
   * color al pie
   */
  @Input() pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
  /**
   * @ignore
   */
  constructor() { }
}
