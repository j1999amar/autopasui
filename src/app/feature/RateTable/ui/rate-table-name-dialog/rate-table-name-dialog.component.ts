import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-rate-table-name-dialog',
  templateUrl: './rate-table-name-dialog.component.html',
  styleUrls: ['./rate-table-name-dialog.component.css']
})
export class RateTableNameDialogComponent {
  userInput: string = '';

  constructor(
    public dialogRef: MatDialogRef<RateTableNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
