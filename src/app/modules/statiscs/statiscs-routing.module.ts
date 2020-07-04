import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatiscsComponent } from './statiscs.component';

const routes: Routes = [{ path: '', component: StatiscsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatiscsRoutingModule { }
