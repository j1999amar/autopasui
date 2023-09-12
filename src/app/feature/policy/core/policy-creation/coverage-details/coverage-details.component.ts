import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { CoverageService } from 'src/app/services/coverage.service';
import { PolicyService } from 'src/app/services/policy.service';

import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
import { Coverage } from 'src/app/models/coverage';

@Component({
  selector: 'app-coverage-details',
  templateUrl: './coverage-details.component.html',
  styleUrls: ['./coverage-details.component.css']
})
export class CoverageDetailsComponent  {
  
  public Coverage:Coverage[] =[];
  selectedCoverageIds: number[] = [];
  @Input() coverageform: FormGroup;
  ncb: number = 0;
  totalPremium: number=0;
  coverageFormValid:boolean=false;
  @Output() Previous= new EventEmitter;
  flag: boolean = false;
  submitFlag: boolean = false;
  @Output() Next = new EventEmitter;
  submitted = false;


  get coveragesFormArray()
   {
    return this.coverageform.controls['coverages'] as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private coverageService: CoverageService, private policyService: PolicyService ) {

    this.coverageform = this.formBuilder.group(
      {
        coverages: new FormArray([])
      });

    this.GetAllCoverage();

  }
  coverageFormValidCheck(validationCheck: boolean){
    this.coverageFormValid = validationCheck
  }
  
  GetAllCoverage(){
    this.coverageService.getAllCoverage()
      .subscribe({
        next: (response) => {
          this.Coverage = response;
          this.Coverage.forEach(() => this.coveragesFormArray.push(new FormControl(false)));
        },
        error: (e) => {
          alert("Error Fetching Coverages")
        }
      });
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
          
          this.coverageService.postCoverage(selectecoverageIds)
              .subscribe({
                next: (res) => {
                  { alert("Coverage Details saved successfully"); 
                  if (this.flag == true) {
                    this.Next.emit(4)
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
            this.Next.emit(4);
            this.flag = false
            this.submitFlag = false;
          }
          this.submitFlag = false;
        }
  CalculatePremium(ncb:number):void {
    this.ncb=ncb
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

}
