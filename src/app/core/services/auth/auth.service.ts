import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
const api = environment.urlBackend + 'users';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {
  }

  public login(email: string, password: string) {
    return this.http.get<User>(`${api}/search/login?email=${email}&password=${password}`).subscribe((user) => {
      console.log(user);
      if (user != null) {
        sessionStorage.setItem("userID",user.id);
        this.user.next(user);
        this.router.navigate(['/']);
      }
    });
  }
}
