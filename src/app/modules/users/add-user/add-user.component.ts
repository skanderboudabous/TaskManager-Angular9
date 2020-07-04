import {Component, OnInit} from '@angular/core';
import {User} from '../../../core/models/user';
import {UserService} from '../../../core/services/user/user.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  user: User = new User('', '', '', '', '', '','DEVELOPER');
  id: string;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      if (this.id) {
        this.userService.findById(this.id).subscribe(user => this.user = user)
      }
    });
  }

  submit() {
    if (this.id) {
      delete this.user.password;
      this.userService.editById(this.id, this.user).subscribe(user => this.router.navigate(['/users/list']));

    } else {
      this.userService.addUser(this.user).subscribe(user => this.router.navigate(['/users/list']));
    }
  }
}
