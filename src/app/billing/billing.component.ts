import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  currentDate: Date;
  rawData  = [];
 
  res: number;

  constructor() { }

  ngOnInit() {
    this.currentDate = new Date();
  }

  rowObj = {
    description : '',
    unitPrice : 0,
    quantity : 0,
    amount : 0
  }

  addRow(){
    this.rawData.push(this.rowObj)
  }

  calculate(i){
    console.log(i)
    this.res =  this.rowObj.unitPrice *  this.rowObj.quantity
    console.log(this.res)

  }
}
