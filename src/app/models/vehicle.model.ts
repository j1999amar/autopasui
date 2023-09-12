export interface Vehicle{
    VehicleId: string;
    VehicleTypeid: number;
    RTOId: number;
    BrandId: number;
    ModelId: number;
    VariantId: number;
    BodyTypeId: number;
    FuelTypeId: number;
    TransmissionTypeId: number;
    PINCode: string;
    RegistrationNumber: string;
    DateOfPurchase: Date;
    Color: string;
    ChasisNumber: string;
    EngineNumber: string;
    CubicCapacity: number;
    SeatingCapacity: number;
    YearOfManufacture: number;
    IDV:number;
    ExShowroomPrice:number;
}
export interface BodyType {
    bodyTypeId: number, 
    bodyType: string, 
    description: string, 
    isActive: boolean
}
export interface VehicleType {
    vehicleTypeId: number, 
    vehicleType: string, 
    description: string, 
    isActive: boolean
}
export interface Variant {
    variantId: number, 
    variant: string, 
    description: string, 
    isActive: boolean
}
export interface FuelType  {
    fuelTypeId: number, 
    fuelType: string, 
    description: string, 
    isActive:boolean
}
export interface RTOState{
    rtoId: number, 
    rtoName: string, 
    city: string, 
    state: string, 
    description: string,
    IsActive:boolean
}
export interface RTOCity {
    rtoId: number, 
    rtoName: string, 
    city: string, 
    state: string, 
    description: string,
    IsActive:boolean
}
 export interface RTO {
    rtoId: number, 
    rtoName: string, 
    city: string, 
    state: string, 
    description: string,
    IsActive:boolean
 }
export interface Brand {
    brandId: number, 
    vehicleTypeId: number, 
    brand: string, 
    description: string, 
    sortOrder:number,
    IsActive:boolean
}
export interface Model {
    modelId: number, 
    brandId: number, 
    modelName: string, 
    description:string
}
export interface TransmissionType {
    transmissionTypeId: number, 
    transmissionType: string, 
    description: string

}