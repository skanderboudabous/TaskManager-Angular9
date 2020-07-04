import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import { User } from 'src/app/core/models/user';
import { ProjectService } from 'src/app/core/services/project/project.service';
import { TaskService } from 'src/app/core/services/task/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public developers: User[];
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private router:Router) {
  }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((developers) => {
      this.developers = developers.filter((developer) => developer.role = "DEVELOPER");
      this.formGroup = this.formBuilder.group({
        assignedTo: [null, Validators.required],
        title: ["", Validators.required],
        description: ["", Validators.required],
        estimation: [12, Validators.required],
      })
    });
  }

  submit() {
    let task = Object.assign({}, this.formGroup.value);
    task.project = "/projects/" + this.projectService.projectId;
    task.files = [];
    task.status = "TODO";
    task.workedIn = 0;
    this.taskService.add(task).subscribe((task) => {
      console.log(task);
      this.addTaskToProject(task);
      this.router.navigate(['/tasks'])
    })
  }

  addTaskToProject(task) {
    this.projectService.findTasks(this.projectService.projectId).subscribe((tasks) => {
      let arrayTasks = [];
      tasks.forEach((task) => {
        arrayTasks.push("/tasks/" + task.id);
      });
      arrayTasks.push("/tasks/" + task.id);
      let project = {
        id: this.projectService.projectId,
        tasks: arrayTasks
      };
      this.projectService.updateProject(project).subscribe((project) => {
        console.log(project);
        this.router.navigate(['/projects/view',this.projectService.projectId])
      })
    })
  }

}
