import { Component, OnInit } from '@angular/core';
import { Master } from 'src/app/models/master';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-master-table',
  templateUrl: './master-table.component.html',
  styleUrls: ['./master-table.component.css']
})
export class MasterTableComponent implements OnInit {
constructor(private masterService:MasterService){
  this.masterService.getMasterTable()
  .subscribe({
    next: (response) => {
      console.log(response)
      this.masterTableList=response

    },
    error: (e) => {
      alert("Error Fetching Master Table")
    }
  });
 }
masterTableList:any

  ngOnInit(): void {
    this.getMasterTableList();
  }

getMasterTableList(){
 
} 
}
