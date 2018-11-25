import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { RecordsComponent } from './records/records.component';
import { IndexComponent } from './index/index.component';
import { RoutingComponent } from './routing/routing.component';
import { RoutingModule } from './routing/routing.component.module';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BillingComponent,
    RecordsComponent,
    IndexComponent,
    RoutingComponent,
    
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
