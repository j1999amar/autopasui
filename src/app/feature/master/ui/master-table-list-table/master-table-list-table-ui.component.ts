import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-master-table-list-table-ui',
  templateUrl: './master-table-list-table-ui.component.html',
  styleUrls: ['./master-table-list-table-ui.component.css'],

})
export class MasterTableListTableUI implements AfterViewInit {
  constructor(private changeDetectorRef: ChangeDetectorRef, private dataservice:DataService){}
  @Input() data:any[]=[]
  @Input() columnName: string[] = [];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort ; 

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.data); // Create a new MatTableDataSource.
    this.dataSource.paginator = this.paginator; // Assign the paginator to the dataSource.
    this.dataSource.sort=this.sort
    this.changeDetectorRef.detectChanges();//  It's because you are executing some code in the ngAfterViewInit, which modifies the data that is displayed.
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addTable(columnName:string[]){
    this.dataservice.addTableForm(columnName)
  }


  
  
}











function compare(name: any, name1: any, isAsc: boolean) {
  throw new Error('Function not implemented.');
}

