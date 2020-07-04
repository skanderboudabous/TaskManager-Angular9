import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewProjectComponent} from "./view-project/view-project.component";
import {AddProjectComponent} from "./add-project/add-project.component";
import {ListProjectsComponent} from "./list-projects/list-projects.component";
import {ProjectsComponent} from "./projects.component";

const routes: Routes = [
  {path: '', component: ProjectsComponent },
  {path: 'list', component: ListProjectsComponent },
  {path: 'add', component: AddProjectComponent },
  {path: 'view/:id', component: ViewProjectComponent },
  { path: 'edit/:id', component: AddProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
