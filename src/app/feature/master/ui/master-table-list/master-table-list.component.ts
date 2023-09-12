import { Component, Input, OnInit } from '@angular/core';
import { Master } from 'src/app/models/master';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-master-table-list',
  templateUrl: './master-table-list.component.html',
  styleUrls: ['./master-table-list.component.css']
})
export class MasterTableListComponent implements OnInit {
  constructor(private dataService:DataService){}
  @Input() data:Master[]=[]


 columnsToDisplay:string[]=['Name','Description','Maintain']
  ngOnInit(): void {

  }
  shareTableName(tableName:string){
    
    this.dataService.updateSharedData(tableName)

  }
 


  
}
