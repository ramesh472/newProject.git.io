import { Component, OnInit } from '@angular/core';
import {  EChartsOption } from 'echarts';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bankList:any=[];
  banksCount:number=0;
  chartOption:EChartsOption ={};
  constructor(private appService:AppService) {
    let options={
      login:true
    }
    this.appService.setHeader(options)
   }

  ngOnInit(): void {
    this.appService.getBankList().subscribe((res:any)=>{
this.bankList = res;
console.log(this.bankList.length);
this.banksCount = this.bankList.length;
this.chartDetails();
    })
  }
chartDetails(){
  this.chartOption  = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'total banks',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [ { value: this.bankList.length, name: 'total banks' }]
      }
    ]
  };

}
}
