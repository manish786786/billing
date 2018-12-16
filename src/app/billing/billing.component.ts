import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  currentDate: Date;
 

  constructor() { }

  ngOnInit() {
    this.currentDate = new Date();
  }


}
