import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MasterTableListTable } from 'src/app/services/master-table-list-table.service';

@Component({
  selector: 'app-master-table-list-table',
  templateUrl: './master-table-list-table.component.html',
  styleUrls: ['./master-table-list-table.component.css'],

})
export class MasterTableListTableComponent implements OnInit {
  constructor(private masterTableList: MasterTableListTable, private dataService: DataService) { }
  tableTypeList: any[] = [];
  keys: string[] = []
  tableName: any = ''
 functionName=''
  ngOnInit(): void {
    this.dataService.sharedData$.subscribe(
      data => {
        this.tableName = data;
        this.apicall(this.tableName);
      }
    )
  }

  apicall(tableName:string){
    this.masterTableList.apiGetCall(this.tableName).subscribe({
      next: (response:Response[]) => {
        this.tableTypeList = response
        this.keys = this.extractColumnNames(this.tableTypeList)
        this.keys.push('action')
      },
      error: (e:Error[]) => {
        alert(`Error Fetching ${this.tableName} Table`)
      }
    });
  }
  
  extractColumnNames(data: any[]): string[] {
    if (Array.isArray(data) && data.length > 0) {
      return Object.keys(data[0]);
    }
    return [];
  }}
