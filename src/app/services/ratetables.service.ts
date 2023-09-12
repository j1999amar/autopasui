import { Injectable } from '@angular/core';
import { RateTable } from '../models/ratetables.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatetablesService {
  private baseUrl = environment.baseUrl;
  /* public ncbdata:any = {
     ID : RT_Ncb.ID,
     no_claim_year : RT_Ncb.no_claim_year,
     factor : RT_Ncb.factor
   }*/
  constructor(private http: HttpClient) {

  }

  addRateTables() {

  }
  deleteRateTables() {

  }
  editRateTablesNCB(item: any) {
    const data = {
      "id": item.id,
      "no_claim_year": item.no_claim_year,
      "factor": item.factor
    }
    return this.http.put(this.baseUrl + "RT_NCB/UpdateRT_NCBById", data);
  }
  editRateTablesODP(item: any) {
    const data = {
      "id": item.id,
      "ins_type": item.ins_type,
      "part_type": item.part_type,
      "year": item.year,
      "depreciation": item.depreciation,
      "factor": item.factor
    }
    return this.http.put(this.baseUrl + "RT_ODP/UpdateRT_ODPById", data);

  }
  editRateTablesTPC(item: any) {
    const data = {
      "id": item.id,
      "vehicle_status": item.vehicle_status,
      "claim_year": item.claim_year,
      "factor": item.factor
    }
    return this.http.put(this.baseUrl + "RT_TPC/UpdateRT_TPCById", data);

  }
  editRateTablesLLP(item: any) {
    const data = {
      "id": item.id,
      "factor": item.factor
    }
    return this.http.put(this.baseUrl + "RT_LLP/UpdateRT_LLPById", data);
  }
  editRateTablesGST(item: any) {
    const data = {
      "id": item.id,
      "factor": item.factor
    }
    return this.http.put(this.baseUrl + "RT_GST/UpdateRT_GSTById", data);
  }
  editRateTablesTHEFT(item: any) {
    const data = {
      "id": item.id,
      "factor": item.factor
    }
    return this.http.put(this.baseUrl + "RT_THEFT/UpdateRT_THEFTById", data);
  }
  addNewEntryGST(item: any) {
    const data = {
      "id": item.id,
      "factor": item.factor
    }
    return this.http.post(this.baseUrl + "RT_GST/AddRT_GSTEntry", data);
  }
  addNewEntryNCB(item: any) {
    const data = {
      "id": item.id,
      "factor": item.factor,
      "no_claim_year":item.no_claim_year
    }
    return this.http.post(this.baseUrl + "RT_NCB/AddRT_NCBEntry", data);
  }
  addNewEntryODP(item: any) {
    const data = {
      "id": item.id,
      "ins_type": item.ins_type,
      "part_type": item.part_type,
      "year": item.year,
      "depreciation": item.depreciation,
      "factor": item.factor
    }
    return this.http.post(this.baseUrl + "RT_ODP/AddRT_ODPEntry", data);
  }
  addNewEntryTPC(item: any) {
    const data = {
      "id": item.id,
      "vehicle_status": item.vehicle_status,
      "claim_year": item.claim_year,
      "factor": item.factor
    }
    return this.http.post(this.baseUrl + "RT_TPC/AddRT_TPCEntry", data);
  }
  addNewEntryLLP(item: any) {
    const data = {
      "id": item.id,
      "factor": item.factor
    }
    return this.http.post(this.baseUrl + "RT_LLP/AddRT_LLPEntry", data);
  }
  addNewEntryTHEFT(item: any) {
    const data = {
      "id": item.id,
      "factor": item.factor
    }
    return this.http.post(this.baseUrl + "RT_THEFT/AddRT_THEFTEntry", data);
  }
  deleteEntryGST(id:number) {
    return this.http.delete(this.baseUrl + "RT_GST/DeleteRT_GSTEntry/"+id);
  }
  deleteEntryNCB(id:number) {
    return this.http.delete(this.baseUrl + "RT_NCB/DeleteRT_NCBEntry/"+id);
  }
  deleteEntryLLP(id:number) {
    return this.http.delete(this.baseUrl + "RT_LLP/DeleteRT_LLPEntry/"+id);
  }
  deleteEntryTPC(id:number) {
    return this.http.delete(this.baseUrl + "RT_TPC/DeleteRT_TPCEntry/"+id);
  }
  deleteEntryODP(id:number) {
    return this.http.delete(this.baseUrl + "RT_ODP/DeleteRT_ODPEntry/"+id);
  }
  deleteEntryTHEFT(id:number) {
    return this.http.delete(this.baseUrl + "RT_THEFT/DeleteRT_THEFTEntry/"+id);
  }
  getRT_NCB() {
    return this.http.get<any[]>(this.baseUrl + "RT_NCB/GetRT_NCB");
  }
  getRT_GST() {
    return this.http.get(this.baseUrl + "RT_GST/GetRT_GST");
  }
  getRT_LLP() {
    return this.http.get(this.baseUrl + "RT_LLP/GetRT_LLP");
  }
  getRT_ODP() {
    return this.http.get(this.baseUrl + "RT_ODP/GetRT_ODP");
  }
  getRT_TPC() {
    return this.http.get(this.baseUrl + "RT_TPC/GetRT_TPC");
  }
  getRT_THEFT() {
    return this.http.get(this.baseUrl + "RT_THEFT/GetRT_THEFT");
  }
  getRateTablesById(Id: string) {
    return this.http.get<RateTable[]>(this.baseUrl + "Rating/GetRateTableById/" + Id)
  }
  getRateTablesData() {
    return this.http.get<RateTable[]>(this.baseUrl + "Upload/GetTableList")
  }
  getTableDataByName(Tablename: string){
    return this.http.get(this.baseUrl + "Rating/GetTableByName/"+Tablename);
  }
  getTableDataByNameAndId(Tablename: string,id:number){
    return this.http.get(this.baseUrl + "Rating/GetTableByNameAndId/"+Tablename+"/"+id);
  }
  updateTableEntryByName(Tablename: string,item:any){
    return this.http.put(this.baseUrl + "Rating/UpdateTableEntryByName/"+Tablename,item)
  }
  addTableEntryByName(Tablename: string,item:any){
    return this.http.post(this.baseUrl + "Rating/AddTableEntryByName/"+Tablename,item)
  }
  deleteTableEntryByNameAndId(Tablename: string,id:number){
    return this.http.delete(this.baseUrl +"Rating/DeleteTableEntry/"+Tablename+"/"+id)
  }
  updateRateTablesById(Id: string, obj: RateTable) {
    return this.http.put<RateTable>(this.baseUrl + "Upload/UpdateTableListById/" + Id, obj)
  }
  onFileUpload(data:any,fileName:string){
    const formData = new FormData();
    formData.append("files", data.fileSource);
    return this.http.post(this.baseUrl +"Upload/AddTables/"+fileName, formData);
  }
}
