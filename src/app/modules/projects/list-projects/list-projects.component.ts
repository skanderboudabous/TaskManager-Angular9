import {Component, OnInit} from '@angular/core';
import {Project} from "../../../core/models/project";
import {ProjectService} from "../../../core/services/project/project.service";


@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {
  public projects: Project[] = [];
  displayedColumns: string[] = ['title','manager','developers', 'description', 'action'];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAllProject().subscribe(projects => {
      this.projects = projects;
      this.projects.map((project) => this.projectService.findManager(project.id)
        .subscribe((manager) => project.manager = manager));
      this.projects.map((project) => this.projectService.findDevelopers(project.id)
        .subscribe((developers) => project.developers = developers));

    });

  }

  delete(id: any) {
    this.projectService.delete(id).subscribe(() => this.loadProjects());
  }
}
