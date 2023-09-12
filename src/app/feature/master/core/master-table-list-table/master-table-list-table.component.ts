import { Component, OnInit } from '@angular/core';
import { MasterTableListTable } from 'src/app/services/master-table-list-table.service';

@Component({
  selector: 'app-master-table-list-table',
  templateUrl: './master-table-list-table.component.html',
  styleUrls: ['./master-table-list-table.component.css']
})
export class MasterTableListTableComponent implements OnInit  {
  constructor( private masterTableList:MasterTableListTable  ){ }
  tableTypeList:any[]=[]
  keys:string[]=[]
  
  ngOnInit(): void {

    this.getAllBodyType();
  }

  getAllBodyType(){
    this.masterTableList.getBodyTypeTable()
    .subscribe({
      next: (response) => {
        this.tableTypeList=response
        this.keys=this.extractColumnNames(this.tableTypeList)
        this.keys.push('action')
        console.log(this.keys)

      },
      error: (e) => {
        alert("Error Fetching Body Type Table")
      }
    });
   
  }

  extractColumnNames(data: any[]): string[] {
    if (Array.isArray(data) && data.length > 0) {
      return Object.keys(data[0]);
    }
    return [];
  }



}
