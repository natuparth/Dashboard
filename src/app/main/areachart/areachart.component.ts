import { Component, Input, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexGrid,
   ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  grid: ApexGrid,
  fill: ApexFill
};
@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.css']
})
export class AreachartComponent implements OnInit {
  chartOptions : Partial<ChartOptions>;
  dataSet = [];
  @Input('color') color: string;
  constructor() {
     console.log(this.color);
     setTimeout(()=>{
       this.updateChartData() 
       
     },2000) 

   }

  ngOnInit(): void {
    console.log(this.color)
    this.chartOptions =  {
       
      grid:{
        show: false,
        xaxis: {
         lines: {
             show: false
         }
     },   
     yaxis: {
         lines: {
             show: false
         }
     },
      },
     series: [
       {
         data: this.dataSet
       }
     ],
     chart: {
       type: "area",
       height: 100,
       zoom: {
         enabled: false
       },
       toolbar:{
         show: false
       },
       animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 2000
        }
      }
     },
     dataLabels: {
       enabled: false
     },
     stroke: {
       curve: "smooth",
       width: 1,
       colors: [this.color]
     },
     fill:{
     colors: [this.color]
     },
   
     
     xaxis: {
       labels:{
         show: false
       },
       axisTicks:{
         show: false
       }
     },
     yaxis: {
       show: false,
       floating: true,
 axisTicks: {
   show: false
 },
 axisBorder: {
   show: false
 },
 labels: {
   show: false
 },
     },
     legend: {
       horizontalAlign: "left"
     }
   };
  }

updateChartData(){
  this.chartOptions.series =[{ 
    name: 'Visitors',
    data: Array(5).fill(0).map(()=>{return Math.floor(Math.random()*10)})

}]
}

}
