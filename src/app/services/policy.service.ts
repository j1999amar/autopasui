import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Policy, PolicyDetails } from '../models/policy.model';
import { GLOBAL_VAR } from '../app.global';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private baseUrl=environment.baseUrl;

  constructor(private http: HttpClient) { }

  postPolicy(Policy: PolicyDetails):Observable<Policy[]>  {
    const min = 100000000; 
    const max = 999999999; 
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    const sentdata = {
      appUserId: 1,
      policyNumber: random,
      quoteNumber: random,
      PolicyEffectiveDt: Policy.PolicyEffectiveDt,
      PolicyExpirationDt: Policy.PolicyExpirationDt,
      Status: 'In Progress',
      Term: Policy.Term,
      rateDt: null,
      totalPremium: 0,
      sgst: 0,
      cgst: 0,
      igst: 0,
      totalFees: 0,
      paymentType: null,
      receiptNumber: null,
      eligibleForNCB: 0
    };

    return this.http.post<Policy[]>(this.baseUrl + 'Policy/AddPolicy', sentdata);
  }

  UpdateNCB(ncb: number) {
    try {
      return this.http.put(this.baseUrl + "Policy/UpdatePolicy/" + ncb, null);
    }
    catch (error) {
      throw error;
    }
  }
  getNCBById(policyid:string):Observable<number>{
    return this.http.get<number>(this.baseUrl+'Policy/GetNCBById/'+policyid)
  }
  getPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.baseUrl+'Policy/GetAllPolicies')
  }
  getPoliciesByIndex(startIndex:number,count:number): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.baseUrl+'Policy/GetPoliciesInRange/'+startIndex+'/'+count)
  }
  getPolicyById(id:string): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.baseUrl+'Policy/GetPolicyById/'+id)
  }
  getPolicyCount(): Observable<number>{
    return this.http.get<number>(this.baseUrl+'Policy/GetPolicyCount')
  }

  UpdatePolicyById(id:string,Policy: PolicyDetails){
    const random=Math.floor(Math.random() * (1 - 1000)) + 1;
    const sentdata = {
      appUserId: 1,
      policyNumber: random,
      quoteNumber: random,
      PolicyEffectiveDt: Policy.PolicyEffectiveDt,
      PolicyExpirationDt: Policy.PolicyExpirationDt,
      Status: 'In Progress',
      Term: Policy.Term,
      rateDt: null,
      totalPremium: 0,
      sgst: 0,
      cgst: 0,
      igst: 0,
      totalFees: 0,
      paymentType: null,
      receiptNumber: null,
      eligibleForNCB: 0
    };
    return this.http.put(this.baseUrl + 'Policy/UpdatePolicyById/'+id, sentdata);
  }

}
