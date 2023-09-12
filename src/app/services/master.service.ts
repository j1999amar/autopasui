import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Master } from '../models/master';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  private baseUrl=environment.baseUrl;
  getMasterTable():Observable<Master[]>{
    return this.http.get<Master[]>(this.baseUrl + 'Master/GetAllMaster');  
  }
}
