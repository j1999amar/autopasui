import { Component,OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { BodyType, RTOState,RTOCity,RTO,Brand,Model,VehicleType,TransmissionType,FuelType,Variant,Vehicle } from 'src/app/models/vehicle.model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle-details-form',
  templateUrl: './vehicle-details-form.component.html',
  styleUrls: ['./vehicle-details-form.component.css']
})
export class VehicleDetailsFormComponent implements OnInit {
  
  @Input() vehicleForm! : FormGroup
  @Input() submitted : boolean = false;
  @Input() BodyTypes: Array<BodyType>=[];
  @Input() RTOStates: Array<RTO>= [];
  @Input() RTOCities: Array<RTO>=[];
  @Input() vehicleDetails:any=[];
  @Input() RTOs: Array<RTO>=[];
  @Input() city:string=''
  @Input() state:string=''
  @Input() Brands: Array<Brand>=[];
  @Input() Models: Array<Model>=[];
  @Input() VehicleTypes: Array<VehicleType>=[];
  @Input() TransmissionTypes: Array<TransmissionType>=[];
  @Input() FuelTypes: Array<FuelType>=[];
  @Input() Variants: Array<Variant>=[];
  maxYearofManufacture = new Date().getFullYear();
  @Output() PostVehicleHandler = new EventEmitter; 
  @Output() SaveNextHandler = new EventEmitter;   
  @Output() PreviousHandler= new EventEmitter;
  @Output() GetRTOCityByStateHandler = new EventEmitter;
  @Output() GetRTONameByCityHandler = new EventEmitter;
  @Output() GetBrandHandler = new EventEmitter;
  @Output() GetModelHandler = new EventEmitter;
  @Output() GetFuelTypeHandler = new EventEmitter;
  @Output() GetTransmissionTypeHandler = new EventEmitter<{modelid: string,fuelid: string}>;
  @Output() GetVariantHandler = new EventEmitter<{modelid: string, fuelid: string, transmissionid: string}>;
  @Output() public vehicleFormValid = new EventEmitter();
  @Input() flag:boolean=false;
  

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.vehicleForm = this.fb.group({
      RegistrationNumber: [this.vehicleDetails.length>0?this.vehicleDetails[0].registrationNumber:'', [Validators.required, Validators.pattern("^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$")]],
      Rtostate: [this.vehicleDetails.length>0?this.state:'', [Validators.required]],
      Rtocity: [this.vehicleDetails.length>0?this.city:'', [Validators.required]],
      RTOId: [this.vehicleDetails.length>0?this.vehicleDetails[0].rtoId:'', [Validators.required,Validators.min(1)]],
      DateOfPurchase: [this.vehicleDetails.length>0?String(this.vehicleDetails[0].dateOfPurchase).slice(0, 10):'', [Validators.required]],
      VehicleTypeid: [this.vehicleDetails.length>0?this.vehicleDetails[0].vehicleTypeid:'', [Validators.required]],
      BrandId: [this.vehicleDetails.length>0?this.vehicleDetails[0].brandId:'', [Validators.required]],
      ModelId: [this.vehicleDetails.length>0?this.vehicleDetails[0].modelId:'', [Validators.required]],
      FuelTypeId: [this.vehicleDetails.length>0?this.vehicleDetails[0].fuelTypeId:'', [Validators.required]],
      TransmissionTypeId: [this.vehicleDetails.length>0?this.vehicleDetails[0].transmissionTypeId:'', [Validators.required]],
      VariantId: [this.vehicleDetails.length>0?this.vehicleDetails[0].variantId:'', [Validators.required]],
      Color: [this.vehicleDetails.length>0?this.vehicleDetails[0].color:'', [Validators.required]],
      ChasisNumber: [this.vehicleDetails.length>0?this.vehicleDetails[0].chasisNumber:'', [Validators.required, Validators.pattern("[0-9A-Z]{11}[0-9]{6}")]],
      EngineNumber: [this.vehicleDetails.length>0?this.vehicleDetails[0].engineNumber:'', [Validators.required, Validators.pattern("^[A-Z0-9]+$")]],
      CubicCapacity: [this.vehicleDetails.length>0?this.vehicleDetails[0].cubicCapacity:'', [Validators.required, Validators.pattern("^(?!(0))[0-9]+$")]],
      SeatingCapacity: [this.vehicleDetails.length>0?this.vehicleDetails[0].seatingCapacity:'', [Validators.required, Validators.pattern("^(?!(0))[0-9]+$")]],
      YearOfManufacture: [this.vehicleDetails.length>0?this.vehicleDetails[0].yearOfManufacture:"", [Validators.required, this.yearRangeValidator(1900, this.maxYearofManufacture)]],
      BodyTypeId: [this.vehicleDetails.length>0?this.vehicleDetails[0].bodyTypeId:'', [Validators.required]],
      ExShowroomPrice: [this.vehicleDetails.length>0?this.vehicleDetails[0].exShowroomPrice:"", [Validators.required, Validators.pattern("^([0-9]{5,10})+(.[0-9]{0,2})?$")]]

    },)
  }
  get vehicleFormControl() {
    return this.vehicleForm.controls;
  }
  yearRangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
        return { 'yearRange': true };
        alert(control.value)
      }
      return null;
    };
  }
  KeyPress(event: any) {

    var controlname = event.target.attributes.getNamedItem('ng-reflect-name').value;
    let pattern = new RegExp("")

    if (controlname == "RegistrationNumber") {
      pattern = /^[A-Z0-9 ]+$/;
    }
    else if (controlname == "SeatingCapacity" || controlname == "CubicCapacity" || controlname == "YearOfManufacture") {
      pattern = /^[0-9]+$/;
    }
    else if (controlname == "ChasisNumber" || controlname == "EngineNumber") {
      pattern = /^[A-Z0-9]+$/;
    }
    else { }
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  PostVehicle(vehicledata: Vehicle){
    this.vehicleFormValid.emit(this.vehicleForm.valid)
    this.PostVehicleHandler.emit(vehicledata) 
  }
  SaveNext(vehicledata: Vehicle){
    this.SaveNextHandler.emit() 
    if(this.flag==false){
      this.PostVehicle(vehicledata);}
    
  }
  Previous(){
    this.PreviousHandler.emit()
  }
  GetRTOCityByState(state:string){
    this.GetRTOCityByStateHandler.emit(state)
  }
  GetRTONameByCity(city: String){
    this.GetRTONameByCityHandler.emit(city)
  }
  GetBrand(vehicletypeid: string){
    this.GetBrandHandler.emit(vehicletypeid)
  }
  GetModels(brandid: string) {
    this.GetModelHandler.emit(brandid)
  }
  GetFuelType(modelid: string) {
    this.GetFuelTypeHandler.emit(modelid)
  }
  GetTransmissionType(modelid: string, fuelid: string) {
    this.GetTransmissionTypeHandler.emit({modelid,fuelid})
  }
  GetVariant(modelid: string, fuelid: string, transmissionid: string) {
    this.GetVariantHandler.emit({modelid,fuelid,transmissionid})
  }

}
