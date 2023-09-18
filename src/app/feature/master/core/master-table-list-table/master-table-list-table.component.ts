import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MasterTableListTable } from 'src/app/services/master-table-list-table.service';

@Component({
  selector: 'app-master-table-list-table',
  templateUrl: './master-table-list-table.component.html',
  styleUrls: ['./master-table-list-table.component.css'],

})
export class MasterTableListTableComponent {
  constructor(private masterTableList: MasterTableListTable, private dataService: DataService) { 
   
    this.tableName=this.dataService.shareTableName
    this.apicall(this.tableName);

  }
  tableTypeList: any[] = [];
  keys: string[] = []
  tableName: any = ''


  apicall(tableName:string){
    this.masterTableList.apiGetCall(this.tableName).subscribe({
      next: (response) => {
        this.tableTypeList = response
        this.keys = this.extractColumnNames(this.tableTypeList)
        this.keys.push('action')
      },
      error: (e) => {
        alert(`Error Fetching ${this.tableName} Table`)
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
