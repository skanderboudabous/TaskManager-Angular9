import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import {SharedModule} from '../../shared/shared.module';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [UsersComponent, AddUserComponent, ListUsersComponent, ViewUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule
  ],

  exports: [
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
