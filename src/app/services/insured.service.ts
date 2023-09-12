import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Statement } from "@angular/compiler";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Insured } from '../models/insured.model';
import { GLOBAL_VAR } from "../app.global";
@Injectable({
  providedIn: 'root'
})
export class InsuredService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  postInsured(insured: any) {
    const sentData={
      contact:{
        FirstName: insured.FirstName,
      LastName: insured.LastName,
      AddressLine1: insured.AddressLine1,
      AddressLine2: insured.AddressLine2,
      City: insured.City,
      State: insured.State,
      Pincode: insured.Pincode,
      MobileNo: insured.Mobile,
      Email: insured.Email
      },
      insured:{
        FirstName: insured.FirstName,
        LastName: insured.LastName,
        AadharNumber: insured.AadharNumber,
        LicenseNumber: insured.LicenseNumber,
        PanNumber: insured.PanNumber,
        AccountNumber: insured.AccountNumber,
        IfscCode: insured.IfscCode,
        BankName: insured.BankName,
        BankAddress: insured.BankAddress,
        UserTypeId: 2
      }
    }
  
    return this.http.post(this.baseUrl + 'InsuredContact/AddInsuredContact',sentData);  
  }

  UpdateInsured(insured: any) {
    const sentData={
      contact:{
        FirstName: insured.FirstName,
      LastName: insured.LastName,
      AddressLine1: insured.AddressLine1,
      AddressLine2: insured.AddressLine2,
      City: insured.City,
      State: insured.State,
      Pincode: insured.Pincode,
      MobileNo: insured.Mobile,
      Email: insured.Email
      },
      insured:{
        FirstName: insured.FirstName,
        LastName: insured.LastName,
        AadharNumber: insured.AadharNumber,
        LicenseNumber: insured.LicenseNumber,
        PanNumber: insured.PanNumber,
        AccountNumber: insured.AccountNumber,
        IfscCode: insured.IfscCode,
        BankName: insured.BankName,
        BankAddress: insured.BankAddress,
        UserTypeId: 2
      }
    }
  
    return this.http.post(this.baseUrl + 'InsuredContact/EditInsuredContact/'+ GLOBAL_VAR.policyId, sentData);  
  }

  // Get All Insured
  getInsuredById(id:string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'InsuredContact/GetInsuredById/'+id);
  }
  getContactById(id:string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'InsuredContact/GetContactById/'+id);
  }
  // Create Insured details in Database
  createInsured(): void {

    // return this.http.post<any>(this.baseUrl);
  }

  // Update the Insured Detail
  updateInsured() {

  }

  // Delete an Insured Details by Id
  deleteInsuredById() {

  }
}