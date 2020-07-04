import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [ProjectsComponent, AddProjectComponent, ListProjectsComponent, ViewProjectComponent, ProjectCardComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
  ]
})
export class ProjectsModule { }
