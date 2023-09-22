import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BodyType, Brand, FuelType, Model, RTO, TransmissionType, Variant, VehicleType } from '../models/vehicle.model';
import { Coverage } from '../models/coverage';

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
      case 'Coverage':
        return this.getAllCoverage();
      default:
        // Handle the default case or return undefined
        return throwError('Invalid Name'); // or return of(null);
    }
  }

  apiPostCall(data: any, name: string): Observable<any> {
    switch (name) {
      case 'BodyType':
        return this.addBodyType(data);
      case 'FuelType':
        console.log(data)
        return this.addFuelType(data);
      case 'RTO':
        return this.addRTO(data);
      case 'VehicleType':
        return this.addVehicleType(data);
      case 'Brand':
        return this.addBrand(data);
      case 'Model':
        return this.addModel(data);
      case 'TransmissionType':
        return this.addTransmissionType(data);
      case 'Variant':
        return this.addVariant(data);
      case 'Coverage':
        return this.addCoverage(data);
      default:
        // Handle the default case or return undefined
        return throwError('Invalid Name'); // or return of(null);
    }
  }

  apieditCall(data:any,Name: string): Observable<any> {
    //Case name should be in correct format
    switch (Name) {
      case 'BodyType':
        return this.editBodyType(data);
      case 'FuelType':
        return this.editFuelType(data);
      case 'RTO':
        return this.editRTO(data);
      case 'VehicleType':
        return this.editVehicleType(data);
      case 'Brand':
        return this.editBrand(data);
      case 'Model':
        return this.editModel(data);
      case 'TransmissionType':
        return this.editTransmissionType(data);
      case 'Variant':
        return this.editVariant(data);
      case 'Coverage':
        return this.editCoverage(data);
      default:
        // Handle the default case or return undefined
        return throwError('Invalid Name'); // or return of(null);
    }
  }


  //#region Get  Tables Methods
  private getBodyType(): Observable<BodyType[]> {
    try {
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

  private getAllCoverage(): Observable<Coverage[]> {
    try {
      return this.http.get<Coverage[]>(this.baseUrl + 'Coverages');
    } catch (error) {
      throw (error)
    }
  }
  //#endregion

  //#region Add  Tables Methods

  
  addBodyType(data: BodyType): Observable<BodyType> {
    try {
      const sendData:BodyType={
        bodyTypeId:data.bodyTypeId ?? 0,
        bodyType:data.bodyType ?? '',
        description:data.description?? '',
        isActive:data.isActive ?? false
      }
      return this.http.post<BodyType>(this.baseUrl + 'BodYType/AddBodyType', sendData);
    } catch (error) {
      throw (error)
    }
  }
  addFuelType(data: FuelType): Observable<FuelType> {

    try {
      const sendData:FuelType={
        fuelTypeId:data.fuelTypeId?? 0,
        fuelType:data.fuelType?? '',
        description:data.description?? '',
        isActive:data.isActive?? false
      }
      return this.http.post<FuelType>(this.baseUrl + 'FuelType/AddFuelType', sendData);
    } catch (error) {
      throw (error)
    }
  }

  addRTO(data: RTO): Observable<RTO> {
    try {
      const sendData:RTO={
        rtoId:data.rtoId?? 0,
        rtoName:data.rtoName?? '',
        city:data.city?? '',
        state:data.state?? '',
        description:data.description?? '',
        isActive:data.isActive??false
      }
      return this.http.post<RTO>(this.baseUrl + 'RTO/AddRTO', sendData);
    } catch (error) {
      throw (error)
    }
  } 
  
  addVehicleType(data: VehicleType): Observable<VehicleType> {
    try {
      const sendData:VehicleType={
        vehicleTypeId:data.vehicleTypeId?? 0,
        vehicleType:data.vehicleType?? '',
        description:data.description?? '',
        isActive:data.isActive?? false
      }
      return this.http.post<VehicleType>(this.baseUrl + 'VehicleType/AddVehicleType', sendData);
    } catch (error) {
      throw (error)
    }
  } 
  
  
  addBrand(data: Brand): Observable<Brand> {
    try {  
      const sendData: Brand = {
        brand: data.brand ?? '',
        brandId: data.brandId ?? 0,
        vehicleTypeId: data.vehicleTypeId ?? 0,
        description: data.description ?? '',
        sortOrder: data.sortOrder ?? 0,
        isActive: data.isActive ?? false
    };    
      return this.http.post<Brand>(this.baseUrl + 'Brands/AddBrands', sendData);
    } catch (error) {
      throw (error)
    }
  } 
  
  addModel(data: Model): Observable<Model> {
    try {
      const sendData:Model={
        modelId:data.modelId?? 0,
        brandId:data.brandId?? 0,
        modelName:data.modelName?? '',
        description:data.description?? ''
      }
      return this.http.post<Model>(this.baseUrl + 'Model/AddModels', sendData);
    } catch (error) {
      throw (error)
    }
  } 
  
  addTransmissionType(data: TransmissionType): Observable<TransmissionType> {
    try {
      const sendData:TransmissionType={
        transmissionTypeId:data.transmissionTypeId?? 0,
        transmissionType:data.transmissionType?? '',
        description:data.description?? ''
      }
      return this.http.post<TransmissionType>(this.baseUrl + 'TransmissionType/AddTransmissionType', sendData);
    } catch (error) {
      throw (error)
    }
  } 
  
  addVariant(data: Variant): Observable<Variant> {
    try {
      const sendData:Variant={
        variantId:data.variantId??0,
        variant:data.variant?? '',
        description:data.description?? '',
        isActive:data.isActive?? false
      }
      return this.http.post<Variant>(this.baseUrl + 'Variant/AddVariant', sendData);
    } catch (error) {
      throw (error)
    }
  } 
  
  addCoverage(data: Coverage): Observable<Coverage> {
    try {
      const sendData:Coverage={
        length:data.length??'',
        coverageId:data.coverageId?? 0,
        coverageName:data.coverageName?? '',
        covCd:data.covCd?? '',
        effectiveDt:data.effectiveDt?? new Date() ,
        expirationDt: data.expirationDt?? new Date(),
        description:data.description?? '',
        sortOrder:data.sortOrder?? 0,
        IsActive:data.IsActive?? false
      }
      return this.http.post<Coverage>(this.baseUrl + 'Coverages/AddCoverage', sendData);
    } catch (error) {
      throw (error)
    }
  }
  //#endregion

  
editBodyType(data: BodyType): Observable<BodyType> {
  try {
    const sendData:BodyType={
      bodyTypeId:data.bodyTypeId ?? 0,
      bodyType:data.bodyType ?? '',
      description:data.description?? '',
      isActive:data.isActive ?? false
    }
    return this.http.put<BodyType>(this.baseUrl + 'BodYType/EditBodyType', sendData);
  } catch (error) {
    throw (error)
  }
}
editFuelType(data: FuelType): Observable<FuelType> {

  try {
    const sendData:FuelType={
      fuelTypeId:data.fuelTypeId?? 0,
      fuelType:data.fuelType?? '',
      description:data.description?? '',
      isActive:data.isActive?? false
    }
    return this.http.put<FuelType>(this.baseUrl + 'FuelType/EditFuelType', sendData);
  } catch (error) {
    throw (error)
  }
}

editRTO(data: RTO): Observable<RTO> {
  try {
    const sendData:RTO={
      rtoId: data.rtoId ?? 0,
      rtoName: data.rtoName ?? '',
      city: data.city ?? '',
      state: data.state ?? '',
      description: data.description ?? '',
      isActive:data.isActive ?? false
    }
    console.log(sendData)
    return this.http.put<RTO>(this.baseUrl + 'RTO/EditRTO', sendData);
  } catch (error) {
    throw (error)
  }
} 

editVehicleType(data: VehicleType): Observable<VehicleType> {
  try {
    const sendData:VehicleType={
      vehicleTypeId:data.vehicleTypeId?? 0,
      vehicleType:data.vehicleType?? '',
      description:data.description?? '',
      isActive:data.isActive?? false
    }
    return this.http.put<VehicleType>(this.baseUrl + 'VehicleType/EditVehicleType', sendData);
  } catch (error) {
    throw (error)
  }
} 


editBrand(data: Brand): Observable<Brand> {
  try {  
    const sendData: Brand = {
      brand: data.brand ?? '',
      brandId: data.brandId ?? 0,
      vehicleTypeId: data.vehicleTypeId ?? 0,
      description: data.description ?? '',
      sortOrder: data.sortOrder ?? 0,
      isActive: data.isActive ?? false
  };    
    return this.http.put<Brand>(this.baseUrl + 'Brands/EditBrands', sendData);
  } catch (error) {
    throw (error)
  }
} 

editModel(data: Model): Observable<Model> {
  try {
    const sendData:Model={
      modelId:data.modelId?? 0,
      brandId:data.brandId?? 0,
      modelName:data.modelName?? '',
      description:data.description?? ''
    }
    return this.http.put<Model>(this.baseUrl + 'Model/EditModels', sendData);
  } catch (error) {
    throw (error)
  }
} 

editTransmissionType(data: TransmissionType): Observable<TransmissionType> {
  try {
    const sendData:TransmissionType={
      transmissionTypeId:data.transmissionTypeId?? 0,
      transmissionType:data.transmissionType?? '',
      description:data.description?? ''
    }
    return this.http.put<TransmissionType>(this.baseUrl + 'TransmissionType/EditTransmissionType', sendData);
  } catch (error) {
    throw (error)
  }
} 

editVariant(data: Variant): Observable<Variant> {
  try {
    const sendData:Variant={
      variantId:data.variantId??0,
      variant:data.variant?? '',
      description:data.description?? '',
      isActive:data.isActive?? false
    }
    return this.http.put<Variant>(this.baseUrl + 'Variant/EditVariant', sendData);
  } catch (error) {
    throw (error)
  }
} 

editCoverage(data: Coverage): Observable<Coverage> {
  try {
    const sendData:Coverage={
      length:data.length??'',
      coverageId:data.coverageId?? 0,
      coverageName:data.coverageName?? '',
      covCd:data.covCd?? '',
      effectiveDt:data.effectiveDt?? new Date() ,
      expirationDt: data.expirationDt?? new Date(),
      description:data.description?? '',
      sortOrder:data.sortOrder?? 0,
      IsActive:data.IsActive?? false
    }
    return this.http.put<Coverage>(this.baseUrl + 'Coverages/EditCoverage', sendData);
  } catch (error) {
    throw (error)
  }
}

}


  