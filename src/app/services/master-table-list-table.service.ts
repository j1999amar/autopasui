import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BodyType } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class MasterTableListTable {

  constructor(private http:HttpClient) { }
  private baseUrl=environment.baseUrl;
  getBodyTypeTable():Observable<BodyType[]>{
    return this.http.get<BodyType[]>(this.baseUrl + 'BodyType/GetAllBodyType');  
  }
}
