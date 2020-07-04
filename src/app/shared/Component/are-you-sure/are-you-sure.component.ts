import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.css']
})
export class AreYouSureComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AreYouSureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onYesClick(): void {
    this.dialogRef.close(true);
  }


  ngOnInit() {
  }

}
