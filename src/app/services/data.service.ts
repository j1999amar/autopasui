import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private sharedDataSubject = new BehaviorSubject<any>('');
  sharedData$ = this.sharedDataSubject.asObservable();

  updateSharedData(tableName: any) {
    this.sharedDataSubject.next(tableName);
  }
  addTableForm(column:string[]){
    this.sharedDataSubject.next(column);
  }

}
