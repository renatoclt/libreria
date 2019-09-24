import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartPluginsOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'ngx-utilitario-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  /**
   * Data En el grafico
   * example
   * [
   * { data: [], label: '' , stack}
   * ]
   * stack opcional
   */
  @Input() lineChartData: ChartDataSets[];
  /**
   * Label eje x
   */
  @Input() lineChartLabels: Label[];

  /**
   * Propiedades en el eje x preconfigurado
   */
  @Input() lineChartOptions: ChartOptions  = {
    responsive: true,
    scales: {
      yAxes: [
        {
          stacked: false,
        }
      ]
    }
  };
  /**
   * Color de las lineas en ese orden
   * si deseas las lines sin color define el color
   * example
   * [
   * {
   *   borderColor: 'black',
   *   backgroundColor: 'rgba(255,0,0,0.3)',
   * },
   * ];
   */
  @Input() lineChartColors: Color[] = [];
  public lineChartLegend = true;
  public lineChartType: ChartType  = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
