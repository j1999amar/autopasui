import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coverage } from '../models/coverage';
import { GLOBAL_VAR } from '../app.global';

@Injectable({
  providedIn: 'root'
})
export class CoverageService {
  private baseUrl= environment.baseUrl;
  constructor(private http: HttpClient) { }
  getAllCoverage(): Observable<Coverage[]> {
    return this.http.get<Coverage[]>(this.baseUrl + "Coverages") 
  }
  
    postCoverage(coverageId: number): Observable<any> {
    
      try{
        return this.http.post(this.baseUrl + "PolicyCoverage/Add", coverageId);
      }
      catch (error) {
        throw error;
      }
    }
    updateCoverage(id:string,coverageId: number): Observable<any> {
      try{
        return this.http.post(this.baseUrl + "PolicyCoverage/Edit/"+id, coverageId);
      }
      catch (error) {
        throw error;
      }
    }

    CalculatePremium() : Observable<any> {
      try{
       // Todo: Take policyId from session
     return this.http.get<any>(this.baseUrl+"Coverages/CalculatePremium");
      }
      catch (error) {
        throw error;
      }
    }
    getCoverageById(id:string): Observable<Coverage[]> {
      return this.http.get<Coverage[]>(this.baseUrl + "PolicyCoverage/GetPolicyCoverageById/"+id) 
    }
  }
