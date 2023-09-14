import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-master-table-list-table-form',
  templateUrl: './master-table-list-table-form.component.html',
  styleUrls: ['./master-table-list-table-form.component.css']
})
export class MasterTableListTableFormComponent implements OnInit {
  passfields:Array<string>=[]
  constructor(private dataservice:DataService){
    this.dataservice.sharedData$.subscribe(
      response=>{
        this.passfields=response
      }
      )
  }
  ngOnInit(): void {
    
  }
}
