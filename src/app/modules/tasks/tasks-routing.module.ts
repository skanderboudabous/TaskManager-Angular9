import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks.component';
import {AddTaskComponent} from "./add-task/add-task.component";
import {ViewTaskComponent} from "./view-task/view-task.component";

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'add', component: AddTaskComponent },
  { path: 'view/:id', component: ViewTaskComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
