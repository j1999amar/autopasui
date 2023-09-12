import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { BodyType, Brand, FuelType, Model, RTO, RTOCity, RTOState, TransmissionType, Variant, Vehicle, VehicleType } from 'src/app/models/vehicle.model';
import { VehicleService } from 'src/app/services/vehicle.service';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { GLOBAL_VAR } from 'src/app/app.global';
import { Observable, concatMap, map } from 'rxjs';


@Component({
  selector: 'app-vehicle-details-edit',
  templateUrl: './vehicle-details-edit.component.html',
  styleUrls: ['./vehicle-details-edit.component.css']
})
export class VehicleDetailsEditComponent implements OnInit {
  saved: boolean = false;
  vehicletypeid: number = 0;
  brandid: number = 0;
  modelid: number = 0;
  fuelid: number = 0;
  transmissionid: number = 0;
  VehicleData: Vehicle[] = [];
  RTOStates: RTOState[] = [];
  RTOCities: RTOCity[] = [];
  RTOs: RTO[] = [];
  city:string=''
  state:string=''
  //RTOs$: Observable<RTO[]>;
  //allStates$: Observable<string[]>
  //allCities$: Observable<string[]>
  BodyTypes: BodyType[] = []
  Brands: Brand[] = [];
  Models: Model[] = [];
  VehicleTypes: VehicleType[] = [];
  TransmissionTypes: TransmissionType[] = [];
  FuelTypes: FuelType[] = [];
  Variants: Variant[] = [];
  vehicleDetails: Vehicle[] = [];
  public vehicleForm!: FormGroup;
  submitted = false;
  vehicleFormValid: boolean = false;
  @Output() Next = new EventEmitter;
  @Output() Previous = new EventEmitter;
  flag: boolean = false;
  submitFlag: boolean = false;


  constructor(private vehicleService: VehicleService) {
    
  }


  ngOnInit(): void {
    this.GetVehicleById();
    this.GetAllBodyType();
    this.GetAllVehicleType();
    this.GetAllRTO();
    this.GetAllRTOState();
    this.GetAllBrand();
    this.GetAllModel();
    this.GetAllFuelType();
    this.GetAllTransmissionType();
    this.GetAllVariant();
    
  }

  vehicleFormValidCheck(validationCheck: boolean) {
    this.vehicleFormValid = validationCheck
  }
  PostVehicle(vehicledata: Vehicle) {
    this.submitted = true;
    if (this.vehicleFormValid) {
      this.vehicleService.UpdateVehicleById(GLOBAL_VAR.policyId, vehicledata)
        .subscribe({
          next: (res) => {
            {
              alert("Vehicle Details saved successfully");
              if (this.flag == true) {
                this.Next.emit(3)
                this.flag = false
              }
              this.submitFlag = true
            }
          },
          error: (e) => {
            alert("Error While Saving Vehicle Details")
          }
        });
    }
  }
  SaveNextHandler() {
    this.flag = true
    if (this.submitFlag == true) {
      this.Next.emit(3);
      this.flag = false
      this.submitFlag = false;
    }
    this.submitFlag = false;
  }

  PreviousHandler() {
    this.Previous.emit()
  }
  GetVehicleById() {
    this.vehicleService.getVehicleById(GLOBAL_VAR.policyId)
      .subscribe({
        next: (response) => {
          this.vehicleDetails = response;
        },
        error: (e) => {
          alert("Error in fetching Vehicle Data")
        }
      });
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
  GetVariant(variantdata: any) {
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
  GetAllVariant() {
    this.vehicleService.getAllVariant()
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
  GetAllBrand() {
    this.vehicleService.getAllBrand()
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
  GetTransmissionType(transmissiondata: any) {
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
  GetAllTransmissionType() {
    this.vehicleService.getAllTransmissionType()
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
  GetAllFuelType() {
    this.vehicleService.getAllFuelType()
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
  GetAllModel() {
    this.vehicleService.getAllModel()
      .subscribe({
        next: (response) => {
          this.Models = response;
        },
        error: (e) => {
          alert("Error in fetching Models")
        }
      });
  }
  GetAllRTO() {
    this.vehicleService.getCity(GLOBAL_VAR.policyId)
    .pipe(
      concatMap((response) => {
        this.RTOCities = response;
        return this.vehicleService.getAllRTOs(GLOBAL_VAR.policyId);
      })
    )
      .subscribe({
        next: (response) => {
          this.RTOs = response;
          this.city=response[0].city;
          this.state=response[0].state;
        },
        error: (e) => {
          alert("Error in fetching Models")
        }
      });
  }
  GetData(){

  }
}
