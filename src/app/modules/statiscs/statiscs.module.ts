import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatiscsRoutingModule } from './statiscs-routing.module';
import { StatiscsComponent } from './statiscs.component';


@NgModule({
  declarations: [StatiscsComponent],
  imports: [
    CommonModule,
    StatiscsRoutingModule
  ]
})
export class StatiscsModule { }
