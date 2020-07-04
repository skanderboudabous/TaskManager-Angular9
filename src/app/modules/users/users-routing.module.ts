import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import {ListUsersComponent} from './list-users/list-users.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ViewUserComponent} from './view-user/view-user.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'list', component: ListUsersComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'view/:id', component: ViewUserComponent },
  { path: 'edit/:id', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
