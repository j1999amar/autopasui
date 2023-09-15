import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private shareTableName = new BehaviorSubject<any>('');
  shareTableName$ = this.shareTableName.asObservable();

  private addTableFormFields = new BehaviorSubject<any>('');
  addTableFormFields$ = this.addTableFormFields.asObservable();

  shareTable(tableName: any) {
    this.shareTableName.next(tableName);
  }
  addTableForm(column:string[]){
    this.addTableFormFields.next(column);
  }

}
