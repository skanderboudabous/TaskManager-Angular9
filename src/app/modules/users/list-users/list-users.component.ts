import {Component, OnInit} from '@angular/core';
import {User} from "../../../core/models/user";
import {UserService} from "../../../core/services/user/user.service";
import {MatDialog} from "@angular/material/dialog";
import {AreYouSureComponent} from "../../../shared/Component/are-you-sure/are-you-sure.component";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  private users: User[] = [];
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 'role', 'action'];

  constructor(private userService: UserService, private dialog: MatDialog) {
  }
  openDialog(id): void {
    const dialogRef = this.dialog.open(AreYouSureComponent, {
      width: '250px',
      data: 'Delete item ?'
    });

    dialogRef.afterClosed().subscribe(result => {
     if (result)
     {
       this.delete(id);
     }
    });
  }
  ngOnInit() {

    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(users => this.users = users);

  }

  delete(id: any) {
    this.userService.delete(id).subscribe(() => this.loadUsers());
  }
}

