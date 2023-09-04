import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-areachart',
    templateUrl: './areachart.component.html',
    styleUrls: ['./areachart.component.css']
})
export class AreachartComponent {


    Highcharts = Highcharts
    chartOptions = {}

    constructor() {
        this.chartOptions = {

            chart: {
                type: 'column'
            },
            title: {
                text: 'Performance Analysis'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'performance in weeks'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y} days</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            credits:{
      
                enabled:false},
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Design',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
                    194.1, 95.6, 54.4]
        
            }, {
                name: 'Coding',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
                    106.6, 92.3]
        
            }, {
                name: 'Deployment',
                data: [48.9, 88.8, 39.3, 41.4, 47.0, 88.3, 59.0, 59.6, 52.4, 65.2, 59.3,
                    51.2]
        
            }, {
                name: 'Production',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8,
                    51.1]
        
            }]
        }
    }
}