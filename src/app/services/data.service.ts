import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
   shareTableName:string = ''
   addTableFormFields:string[]=[]

  shareTable(tableName: any) {
    this.shareTableName=tableName
  }
  addTableForm(column:string[]){
    this.addTableFormFields=column
  }




}
