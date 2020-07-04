import { Injectable } from '@angular/core';
import {User} from "../../models/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {Project} from "../../models/project";
import { Task } from '../../models/task';
const api = environment.urlBackend + 'projects';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];
  public projectId:string;

  constructor(private httpClient: HttpClient) { }
  public getAllProject(): Observable<Project[]> {
    return this.httpClient.get<any>(`${api}`)
      .pipe(map(result => result._embedded.projects));
  }
  public addProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(`${api}`, project);
  }
  public findById(id: string): Observable<Project> {
    return this.httpClient.get<Project>(`${api}/${id}`);
  }
  public editById(id: string, project: Project): Observable<Project> {
    return this.httpClient.patch<Project>(`${api}/${id}`, project);
  }
  public delete(id: string): Observable<any> {
    return this.httpClient.delete(`${api}/${id}`);
  }
  public findManager(id:string):Observable<User>{
    return this.httpClient.get<any>(`${api}/${id}/manager`);
  }

  public findDevelopers(id: string): Observable<User[]> {
    return this.httpClient.get<any>(`${api}/${id}/developers`).pipe(map((developers) => developers._embedded.users));
  }
  public findTasks(id: string): Observable<Task[]> {
    return this.httpClient.get<any>(`${api}/${id}/tasks`).pipe(map((tasks) => tasks._embedded.tasks));
  }
  public updateProject(project):Observable<Project>{
    return this.httpClient.patch<any>(`${api}/${project.id}`,project);
  }
}
