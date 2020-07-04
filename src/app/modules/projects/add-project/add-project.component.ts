import { Component, OnInit } from '@angular/core';
import {User} from "../../../core/models/user";
import {UserService} from "../../../core/services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../../../core/models/project";
import {ProjectService} from "../../../core/services/project/project.service";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  manager: User;
  developers: User[] = [];
  project: Project = new Project('','','',[],this.manager,this.developers);
  id: string;

  constructor(private projectService: ProjectService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      if (this.id) {
        this.projectService.findById(this.id).subscribe(project => this.project = project)
      }
    });
    this.userService.getAllUsers().subscribe(
      (users) => {
        this.developers = this.userService.filter(users, 'DEVELOPER');
        this.manager = this.userService.filter(users, 'PROJECT_MANAGER');
      });
  }
  submit() {
    if (this.id) {
      this.projectService.editById(this.id, this.project).subscribe(project => this.router.navigate(['/projects/list']));
    } else {
      this.projectService.addProject(this.project).subscribe(project => this.router.navigate(['/projects/list']));
    }
  }
}
