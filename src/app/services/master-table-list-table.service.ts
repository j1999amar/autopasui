import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BodyType, Brand, FuelType, Model, RTO, TransmissionType, Variant, VehicleType } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class MasterTableListTable {

  constructor(private http:HttpClient) { }
  private baseUrl=environment.baseUrl;
  getBodyTypeTable():Observable<BodyType[]>{
    return this.http.get<BodyType[]>(this.baseUrl + 'BodyType/GetAllBodyType');  
  }
  getFuelTypeTable():Observable<FuelType[]>{
    return this.http.get<FuelType[]>(this.baseUrl + 'FuelType/GetAllFuelTypes');  
  }
  getRTOTable():Observable<RTO[]>{
    return this.http.get<RTO[]>(this.baseUrl + 'RTO/GetAllRTOState');  
  }
  getAllVehicleTypeTable():Observable<VehicleType[]>{
    return this.http.get<VehicleType[]>(this.baseUrl + 'VehicleType/GetAllVehicleType');  
  }
  getAllBrandTable():Observable<Brand[]>{
    return this.http.get<Brand[]>(this.baseUrl + 'Brands/GetAllBrand');  
  }
  getAllModelTable():Observable<Model[]>{
    return this.http.get<Model[]>(this.baseUrl + 'Model/GetAllModel');  
  }
  getAllTransmissionTypeTable():Observable<TransmissionType[]>{
    return this.http.get<TransmissionType[]>(this.baseUrl + 'TransmissionType/GetAllTransmission');  
  }
  getAllVariantTable():Observable<Variant[]>{
    return this.http.get<Variant[]>(this.baseUrl + 'Variant/GetAllVariant');  
  }
}
