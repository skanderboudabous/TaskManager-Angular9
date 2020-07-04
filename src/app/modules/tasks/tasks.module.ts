import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [TasksComponent, AddTaskComponent, ViewTaskComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ]
})
export class TasksModule { }
