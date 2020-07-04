import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Task } from '../../models/task';
import {map} from "rxjs/operators";
const api = environment.urlBackend + 'tasks';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<Task[]>{
    return this.httpClient.get<any>(`${api}`).pipe(map((tasks)=>tasks._embedded.tasks));
  }
  public updateTask(task:Task){
    return this.httpClient.patch<any>(`${api}/${task.id}`,task);
  }
  public add(task:Task):Observable<Task>{
    return this.httpClient.post<Task>(`${api}`,task);
  }
}
