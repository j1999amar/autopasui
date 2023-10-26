import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { MasterTableListTableComponent } from '../../core/master-table-list-table/master-table-list-table.component';


@Component({
  selector: 'app-master-table-list-table-ui',
  templateUrl: './master-table-list-table-ui.component.html',
  styleUrls: ['./master-table-list-table-ui.component.css'],

})
export class MasterTableListTableUI implements AfterViewInit {
  constructor(private changeDetectorRef: ChangeDetectorRef, private dataservice: DataService, public dialog: MatDialog) { }
  @Input() data: any[] = []
  @Input() columnName: string[] = [];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Output() deleteRecord = new EventEmitter<any>();

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.data); // Create a new MatTableDataSource.
    this.dataSource.paginator = this.paginator; // Assign the paginator to the dataSource.
    this.dataSource.sort = this.sort
    this.changeDetectorRef.detectChanges();//  It's because you are executing some code in the ngAfterViewInit, which modifies the data that is displayed.
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: data
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addTable(columnName: string[]) {
    this.dataservice.addTableForm(columnName)
  }
  editTable(columnName: string[]) {
    this.dataservice.addTableForm(columnName)
  }
  updateRouteUrl(data: any) {
    const queryParams = { obj: JSON.stringify(data) };
    return ['/tableTypeListForm', queryParams];
  }
  deleterow(data:any){
    console.log(data)
    this.deleteRecord.emit(data)
  }
}

@Component({
  selector: 'dialog-animations',
  template: `<div> 
    <h1 mat-dialog-title>Delete Record</h1>
<div mat-dialog-content>
  Would you like to delete the record ?
</div>
<div mat-dialog-actions>
  <button  class="btn btn-primary mx-3 px-3" mat-dialog-close>No</button>
  <button  class="btn btn-danger mx-3 px-3" mat-dialog-close cdkFocusInitial (click)='deleteRow(data)'  >Ok</button>
</div>

  </div>`,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  providers: [
    MasterTableListTableComponent, // Add this line if it's a service or provider
  ],

})


export class DialogAnimationsExampleDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private sendDeleteData:MasterTableListTableComponent ) {
  }
  deleteRow(data:any){
    this.sendDeleteData.deleteRecord(data)
  }
}















