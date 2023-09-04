import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {

  Highcharts = Highcharts
    chartOptions = {}

    constructor() {
      this.chartOptions = {
        chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
          }
      },
      title: {
          text: 'Projects - 2023',
          align: 'center'
      },
      
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits:{
      
        enabled:false},
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
          }
      },
      series: [{
          type: 'pie',
          name: 'Share',
          data: [
              ['Angular', 23],
              ['React', 18],
              {
                  name: 'Flutter',
                  y: 12,
                  sliced: true,
                  selected: true
              },
              ['Python', 9],
              ['.Net', 8],
              ['php', 17]
          ]
      }]

      }

    }
}
