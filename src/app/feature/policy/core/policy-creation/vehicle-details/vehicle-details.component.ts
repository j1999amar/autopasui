import { Component, OnInit,OnChanges,SimpleChanges,Output,EventEmitter } from '@angular/core';
import { BodyType, Brand, FuelType, Model, RTO, RTOCity, RTOState, TransmissionType, Variant, Vehicle, VehicleType } from 'src/app/models/vehicle.model';
import { VehicleService } from 'src/app/services/vehicle.service';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { GLOBAL_VAR } from 'src/app/app.global';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  saved:boolean=false;
  vehicletypeid: number = 0;
  brandid: number = 0;
  modelid: number = 0;
  fuelid: number = 0;
  transmissionid: number = 0;
  RTOStates: RTOState[] = [];
  RTOCities: RTOCity[] = [];
  RTOs: RTO[] = [];
  BodyTypes: BodyType[] = []
  Brands: Brand[] = [];
  Models: Model[] = [];
  VehicleTypes: VehicleType[] = [];
  TransmissionTypes: TransmissionType[] = [];
  FuelTypes: FuelType[] = [];
  Variants: Variant[] = [];
  public vehicleForm!: FormGroup;
  submitted = false;
  vehicleFormValid : boolean = false;
  @Output() Next=new EventEmitter;
  @Output() Previous=new EventEmitter;
  flag: boolean=false;
  submitFlag:boolean=false;


  constructor(private vehicleService: VehicleService) { }
  

  ngOnInit(): void {
    this.GetAllBodyType();
    this.GetAllVehicleType();
    this.GetAllRTOState();
  }

  vehicleFormValidCheck(validationCheck: boolean){
    this.vehicleFormValid = validationCheck
  }
  PostVehicle(vehicledata: Vehicle) {
    this.submitted = true;
    if(this.vehicleFormValid){
      this.vehicleService.postVehicle(vehicledata)
        .subscribe({
          next: (res) => {
            { 
              alert("Vehicle Details saved successfully");
              if(this.flag==true){
                this.Next.emit(3)
                this.flag=false}  
              this.submitFlag=true}
          },
          error: (e) => {
            alert("Error While Saving Vehicle Details")
          }
        });
      }
  }
  SaveNextHandler(){
    this.flag=true
    if(this.submitFlag==true){
      this.Next.emit(3);
      this.flag=false
      this.submitFlag=false;
    }
    this.submitFlag=false;
    }
  
  PreviousHandler(){
      this.Previous.emit()
    }
  GetAllBodyType() {
    this.vehicleService.getAllBodyType()
      .subscribe({
        next: (response) => {
          this.BodyTypes = response;
        },
        error: (e) => {
          alert("Error in fetching Body Types")
        }
      });
  }
  GetAllVehicleType() {
    this.vehicleService.getAllVehicleType()
      .subscribe({
        next: (response) => {
          this.VehicleTypes = response;
        },
        error: (e) => {
          alert("Error in fetching Vehicle Types")
        }
      });
  }
  GetVariant(variantdata:any) {
    this.modelid = parseInt(variantdata.modelid)
    this.fuelid = parseInt(variantdata.fuelid)
    this.transmissionid = parseInt(variantdata.transmissionid)
    this.vehicleService.getVariant(this.modelid, this.fuelid, this.transmissionid)
      .subscribe({
        next: (response) => {
          this.Variants = response;
        },
        error: (e) => {
          alert("Error in fetching Variants")
        }
      });
  }
  GetBrand(vehicletypeid: string) {
    this.vehicletypeid = parseInt(vehicletypeid)
    this.vehicleService.getBrand(this.vehicletypeid)
      .subscribe({
        next: (response) => {
          this.Brands = response;
        },
        error: (e) => {
          alert("Error in fetching Brands")
        }
      });
  }
  GetAllRTOState() {
    this.vehicleService.getAllRTOState()
      .subscribe({
        next: (response) => {
          this.RTOStates = response;
        },
        error: (e) => {
          alert("Error in fetching States")
        }
      });
  }
  GetRTOCityByState(state: String) {
    this.vehicleService.getRTOCityByState(state)
      .subscribe({
        next: (response) => {
          this.RTOCities = response;
        },
        error: (e) => {
          alert("Error in fetching Cities")
        }
      });
  }
  GetRTONameByCity(city: String) {
    this.vehicleService.getRTONameByCity(city)
      .subscribe({
        next: (response) => {
          this.RTOs = response;
        },
        error: (e) => {
          alert("Error in fetching RTOs")
        }
      });
  }
  GetTransmissionType(transmissiondata:any) {
    this.modelid = parseInt(transmissiondata.modelid)
    this.fuelid = parseInt(transmissiondata.fuelid)
    this.vehicleService.getTransmissionType(this.modelid, this.fuelid)
      .subscribe({
        next: (response) => {
          this.TransmissionTypes = response;
        },
        error: (e) => {
          alert("Error in fetching Transmission Types")
        }
      });
  }
  GetFuelType(modelid: string) {
    this.modelid = parseInt(modelid)
    this.vehicleService.getFuelType(this.modelid)
      .subscribe({
        next: (response) => {
          this.FuelTypes = response;
        },
        error: (e) => {
          alert("Error in fetching Fuel Types")
        }
      });
  }
  GetModel(brandid: string) {
    this.brandid = parseInt(brandid)
    this.vehicleService.getModel(this.brandid)
      .subscribe({
        next: (response) => {
          this.Models = response;
        },
        error: (e) => {
          alert("Error in fetching Models")
        }
      });

  }
  
}
