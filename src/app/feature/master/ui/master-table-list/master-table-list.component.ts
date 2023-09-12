import { Component, Input, OnInit } from '@angular/core';
import { Master } from 'src/app/models/master';

@Component({
  selector: 'app-master-table-list',
  templateUrl: './master-table-list.component.html',
  styleUrls: ['./master-table-list.component.css']
})
export class MasterTableListComponent implements OnInit {
  @Input() data:Master[]=[]


 columnsToDisplay:string[]=['Name','Description','Maintain']
  ngOnInit(): void {

  }
 


  
}
