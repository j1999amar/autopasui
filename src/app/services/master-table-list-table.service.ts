import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BodyType, Brand, FuelType, Model, RTO, TransmissionType, Variant, VehicleType } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class MasterTableListTable {

  constructor(private http: HttpClient) {


  }
  private baseUrl = environment.baseUrl;

  apiGetCall(Name: string): Observable<any> {
    //Case name should be in correct format
    switch (Name) {
      case 'BodyType':
        return this.getBodyType();
      case 'FuelType':
        return this.getFuelType();
      case 'RTO':
        return this.getRTO();
      case 'VehicleType':
        return this.getAllVehicleType();
      case 'Brand':
        return this.getAllBrand();
      case 'Model':
        return this.getAllModel();
      case 'TransmissionType':
        return this.getAllTransmissionType();
      case 'Variant':
        return this.getAllVariant();
      default:
        // Handle the default case or return undefined
        return throwError('Invalid Name'); // or return of(null);
    }
  }



  private getBodyType(): Observable<BodyType[]> {
    try {
      console.log('api called')
      return this.http.get<BodyType[]>(this.baseUrl + 'BodyType/GetAllBodyType');
    } catch (error) {
      throw (error)
    }
  }
  private getFuelType(): Observable<FuelType[]> {
    try {
      return this.http.get<FuelType[]>(this.baseUrl + 'FuelType/GetAllFuelTypes');
    } catch (error) {
      throw (error)
    }
  }
  private getRTO(): Observable<RTO[]> {
    try {
      return this.http.get<RTO[]>(this.baseUrl + 'RTO/GetAllRTOState');
    } catch (error) {
      throw (error)
    }
  }
  private getAllVehicleType(): Observable<VehicleType[]> {
    try {
      return this.http.get<VehicleType[]>(this.baseUrl + 'VehicleType/GetAllVehicleType');
    } catch (error) {
      throw (error)
    }
  }
  private getAllBrand(): Observable<Brand[]> {
    try {
      return this.http.get<Brand[]>(this.baseUrl + 'Brands/GetAllBrand');
    } catch (error) {
      throw (error)
    }
  }
  private getAllModel(): Observable<Model[]> {
    try {
      return this.http.get<Model[]>(this.baseUrl + 'Model/GetAllModel');
    } catch (error) {
      throw (error)
    }
  }
  private getAllTransmissionType(): Observable<TransmissionType[]> {
    try {
      return this.http.get<TransmissionType[]>(this.baseUrl + 'TransmissionType/GetAllTransmission');
    } catch (error) {
      throw (error)
    }
  }
  private getAllVariant(): Observable<Variant[]> {
    try {
      return this.http.get<Variant[]>(this.baseUrl + 'Variant/GetAllVariant');
    } catch (error) {
      throw (error)
    }
  }
}
