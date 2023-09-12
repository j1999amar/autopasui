import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { CoverageService } from 'src/app/services/coverage.service';
import { PolicyService } from 'src/app/services/policy.service';
import { concatMap } from 'rxjs/operators';

import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
import { Coverage } from 'src/app/models/coverage';
import { GLOBAL_VAR } from 'src/app/app.global';

@Component({
  selector: 'app-coverage-details-edit',
  templateUrl: './coverage-details-edit.component.html',
  styleUrls: ['./coverage-details-edit.component.css']
})
export class CoverageDetailsEditComponent implements OnInit {
  public Coverage:Coverage[] =[];
  selectedCoverageIds: number[] = [];
  coverageDetails: Coverage[]=[];
  @Input() coverageform: FormGroup;
  public ncbvalue: number = 0;
  totalPremium: number=0;
  coverageFormValid:boolean=false;
  @Output() Next = new EventEmitter;
  @Output() Previous= new EventEmitter;
  submitted = false;
  flag: boolean = false;
  submitFlag: boolean = false;

ngOnInit(): void {
  this.GetCoverageById();
  this.GetNCBByID();
}

  get coveragesFormArray()
   {
    return this.coverageform.controls['coverages'] as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private coverageService: CoverageService, private policyService: PolicyService ) {

    this.coverageform = this.formBuilder.group(
      {
        coverages: new FormArray([])
      });


  }
  coverageFormValidCheck(validationCheck: boolean){
    this.coverageFormValid = validationCheck
  }
  
  UpdateNCB(ncb:number){
    this.policyService.UpdateNCB(ncb).subscribe({
      next: (res) => {
        {  alert("Updated"); }
      },
      error: (e) => {
        alert("Error ")
      }
    });
  }
  
  submit(formvalue:any): void {
    this.coverageform=formvalue
    const selectecoverageIds = this.coverageform.value.coverages.map((checked: any, i: any) => checked ? this.Coverage[i].coverageId : null).filter((v: null) => v !== null);
            this.coverageService.updateCoverage(GLOBAL_VAR.policyId,selectecoverageIds)
              .subscribe({
                next: (res) => {
                  { alert("Coverage Details saved successfully"); 
                  if (this.flag == true) {
                    this.Next.emit(3)
                    this.flag = false
                  }
                  this.submitFlag = true}
                },
                error: (e) => {
                  alert("Error While Saving Coverage Details")
                }
              });
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
  CalculatePremium(ncb:number):void {
    this.ncbvalue=ncb
    this.coverageService.CalculatePremium() .subscribe({
      next: (res) => {
        {
          alert(res)
           this.totalPremium=res; }
      },
      error: (e) => {
        alert("Error While Calculating premium")
      }
    });
  }
  PreviousHandler(){
    this.Previous.emit()
  }
  GetNCBByID(){
    this.policyService.getNCBById(GLOBAL_VAR.policyId)
    .subscribe({
      next: (response) => {
        this.ncbvalue=response
      }
    });
  }
  GetCoverageById() {
    this.coverageService.getCoverageById(GLOBAL_VAR.policyId)
      .pipe(
        concatMap((response) => {
          this.coverageDetails = response;
          return this.coverageService.getAllCoverage();
        })
      )
      .subscribe({
        next: (response) => {
          this.Coverage = response;
          this.Coverage.forEach((coverage) => {
            const isSelected = this.coverageDetails.some((detail) => detail.coverageId === coverage.coverageId);
            this.coveragesFormArray.push(new FormControl(isSelected));
          });
        },
        error: (e) => {
          alert("Error Fetching Coverages");
        }
      });
  }
}
