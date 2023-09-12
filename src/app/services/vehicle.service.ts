import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment'
import { Vehicle, VehicleType, RTOState, RTOCity, RTO, Brand, Model, TransmissionType, BodyType, Variant, FuelType } from '../models/vehicle.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseUrl= environment.baseUrl;
  constructor(private http: HttpClient) { }
  postVehicle(Vehicle: Vehicle) {
    const IDV= Vehicle.ExShowroomPrice-(20/100*Vehicle.ExShowroomPrice)
    const sentdata = {
      rtoId: Vehicle.RTOId,
      vehicleTypeid: Vehicle.VehicleTypeid,
      brandId: Vehicle.BrandId,
      modelId: Vehicle.ModelId,
      variantId: Vehicle.VariantId,
      bodyTypeId: Vehicle.BodyTypeId,
      transmissionTypeId: Vehicle.TransmissionTypeId,
      fuelTypeId: Vehicle.FuelTypeId,
      registrationNumber: Vehicle.RegistrationNumber,
      dateOfPurchase: Vehicle.DateOfPurchase,
      color: Vehicle.Color,
      chasisNumber: Vehicle.ChasisNumber,
      engineNumber: Vehicle.EngineNumber,
      cubicCapacity: Vehicle.CubicCapacity,
      seatingCapacity: Vehicle.SeatingCapacity,
      yearOfManufacture: Vehicle.YearOfManufacture,
      idv: IDV,
      exShowroomPrice: Vehicle.ExShowroomPrice
    }
    return this.http.post<Vehicle>(this.baseUrl + "Vehicle/AddVehicle", sentdata);

  }
  getVehicleById(id:string):Observable<Vehicle[]>{
    return this.http.get<Vehicle[]>(this.baseUrl+"Vehicle/GetVehicleById/"+id)
  }
  getAllBodyType(): Observable<BodyType[]> {
    return this.http.get<BodyType[]>(this.baseUrl + "BodyType/GetAllBodyType")
  }
  getAllVehicleType(): Observable<VehicleType[]> {
    return this.http.get<VehicleType[]>(this.baseUrl + "VehicleType/GetAllVehicleType")
  }

  getVariant(modelid: number, fuelid: number, transmissionid: number): Observable<Variant[]> {
    return this.http.get<Variant[]>(this.baseUrl + "Variant/GetVariant/" + modelid + "/" + fuelid + "/" + transmissionid)
  }
  getAllVariant(): Observable<Variant[]> {
    return this.http.get<Variant[]>(this.baseUrl + "Variant/GetAllVariant")
  }
  getBrand(vehicletypeid: number): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.baseUrl + "Brands/GetBrandByVehicleType" + vehicletypeid)
  }
  getAllBrand(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.baseUrl + "Brands/GetAllBrand")
  }
  getAllRTOState(): Observable<RTOState[]> {
    return this.http.get<RTOState[]>(this.baseUrl + "RTO/GetAllRTOState")
  }
  getRTOCityByState(state: String): Observable<RTOCity[]> {
    return this.http.get<RTOCity[]>(this.baseUrl + "RTO/GetRTOCityByState" + state)
  }
  getRTONameByCity(city: String): Observable<RTO[]> {
    return this.http.get<RTO[]>(this.baseUrl + "RTO/GetRTONameByCity" + city)
  }
  getTransmissionType(modelid: number, fuelid: number): Observable<TransmissionType[]> {
    return this.http.get<TransmissionType[]>(this.baseUrl + "TransmissionType/GetTransmission/" + modelid + "/" + fuelid)
  }
  getAllTransmissionType(): Observable<TransmissionType[]> {
    return this.http.get<TransmissionType[]>(this.baseUrl + "TransmissionType/GetAllTransmission" )
  }
  getFuelType(modelid: number): Observable<FuelType[]> {
    return this.http.get<FuelType[]>(this.baseUrl + "FuelType/GetFuelTypes" + modelid)
  }
  getAllFuelType(): Observable<FuelType[]> {
    return this.http.get<FuelType[]>(this.baseUrl + "FuelType/GetAllFuelTypes" )
  }
  getModel(brandid: number): Observable<Model[]> {
    return this.http.get<Model[]>(this.baseUrl + "Model/GetModelByBrand" + brandid)
  }
  getAllModel(): Observable<Model[]> {
    return this.http.get<Model[]>(this.baseUrl + "Model/GetAllModel")
  }
  getAllRTOs(id:string): Observable<RTO[]> {
    
    return this.http.get<RTO[]>(this.baseUrl + "RTO/GetAllRTO/"+id)
  }
  getCity(id:string): Observable<RTO[]> {
  
    return this.http.get<RTO[]>(this.baseUrl + "RTO/GetCity/"+id)
  }
  UpdateVehicleById(id:string,Vehicle: Vehicle){
    const IDV= Vehicle.ExShowroomPrice-(20/100*Vehicle.ExShowroomPrice)
    const sentdata = {
      rtoId: Vehicle.RTOId,
      vehicleTypeid: Vehicle.VehicleTypeid,
      brandId: Vehicle.BrandId,
      modelId: Vehicle.ModelId,
      variantId: Vehicle.VariantId,
      bodyTypeId: Vehicle.BodyTypeId,
      transmissionTypeId: Vehicle.TransmissionTypeId,
      fuelTypeId: Vehicle.FuelTypeId,
      registrationNumber: Vehicle.RegistrationNumber,
      dateOfPurchase: Vehicle.DateOfPurchase,
      color: Vehicle.Color,
      chasisNumber: Vehicle.ChasisNumber,
      engineNumber: Vehicle.EngineNumber,
      cubicCapacity: Vehicle.CubicCapacity,
      seatingCapacity: Vehicle.SeatingCapacity,
      yearOfManufacture: Vehicle.YearOfManufacture,
      idv: IDV,
      exShowroomPrice: Vehicle.ExShowroomPrice
    }
    return this.http.put<Vehicle>(this.baseUrl + "Vehicle/UpdateVehicleById/"+id, sentdata);
  }
}