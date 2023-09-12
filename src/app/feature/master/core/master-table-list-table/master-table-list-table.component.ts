import { Component, OnInit } from '@angular/core';
import { BodytypeService } from 'src/app/services/bodytype.service';

@Component({
  selector: 'app-master-table-list-table',
  templateUrl: './master-table-list-table.component.html',
  styleUrls: ['./master-table-list-table.component.css']
})
export class BodyTypeComponent implements OnInit  {
  constructor( private bodyTypeService:BodytypeService  ){ }
  bodyTypeList:any[]=[]
  keys:string[]=[]
  
  ngOnInit(): void {

    this.getAllBodyType();
  }

  getAllBodyType(){
    this.bodyTypeService.getBodyTypeTable()
    .subscribe({
      next: (response) => {
        this.bodyTypeList=response
        this.keys=this.extractColumnNames(this.bodyTypeList)
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
