import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {UsersRoutingModule} from '../modules/users/users-routing.module';
import {MatTableModule} from '@angular/material/table';
import { AreYouSureComponent } from './Component/are-you-sure/are-you-sure.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MaterialModule} from "./material.module";



@NgModule({
  declarations: [AreYouSureComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [
    AreYouSureComponent
  ]
})
export class SharedModule { }
