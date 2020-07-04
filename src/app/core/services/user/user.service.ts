import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor(private httpClient: HttpClient) { }
  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<any>(`${environment.urlBackend}users/`)
      .pipe(map(result => result._embedded.users));
  }
  public addUser(user: User): Observable<User> {

    return this.httpClient.post<User>(`${environment.urlBackend}users`, user);
  }
  public findById(id: string): Observable<User> {

    return this.httpClient.get<User>(`${environment.urlBackend}users/${id}`);
  }
  public editById(id: string, user: User): Observable<User> {

    return this.httpClient.patch<User>(`${environment.urlBackend}users/${id}`, user);
  }
  public delete(id: string): Observable<any> {

    return this.httpClient.delete(`${environment.urlBackend}users/${id}`);
  }
  filter(tab, property) {
    return tab.filter(
      (user) => {
        return user.role === property;
      }
    )
  }
}
