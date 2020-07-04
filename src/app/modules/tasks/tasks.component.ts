import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import { Task } from 'src/app/core/models/task';
import {TaskService} from "../../core/services/task/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks:Task[];
  public todo:Task[];
  public in_progress:Task[];
  public finished:Task[];
  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.taskService.findAll().subscribe((tasks)=>{
      this.tasks=tasks;
      this.todo=tasks.filter((task)=>task.status=="TODO");
      this.in_progress=tasks.filter((task)=>task.status=="IN_PROGRESS");
      this.finished=tasks.filter((task)=>task.status=="FINISHED");
    });
  }
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let status = event.container.id;
      let task: Task = event.previousContainer.data[event.previousIndex];
      task.status=status;
      this.taskService.updateTask(task).subscribe();
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
