import { Component,Output,EventEmitter,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GLOBAL_VAR } from 'src/app/app.global';
import { Policy, PolicyDetails } from 'src/app/models/policy.model';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})

export class PolicyDetailsComponent implements OnInit{
  public policyForm!: FormGroup;
  submitted = false;
  policyFormValid : boolean = false;
  @Output() Next=new EventEmitter;
  flag: boolean =false;
  submitFlag:boolean=GLOBAL_VAR.policySubmitFlag;
  constructor(private policyService: PolicyService) { }

  policy:PolicyDetails={
    PolicyEffectiveDt:'',
    PolicyExpirationDt:'',
    Term:0,
  }
  ngOnInit(): void {
    this.submitFlag=false;
  }
  
  policyFormValidCheck(validationCheck: boolean){
    this.policyFormValid = validationCheck
  }
  PostPolicy(policy:PolicyDetails) {  
    this.submitted = true; 
    if (this.policyFormValid) {
      this.policyService.postPolicy(policy).subscribe({
        next: (res) =>  { 
          alert("Policy Details saved successfully.");
          if(this.flag==true){
            this.Next.emit(1);
            this.flag=false;
            this.submitFlag=true} 
          },
        error: (e) => {
          alert("Error While Saving Policy Details")
      }})}
  }
  SaveNextHandler(){
  this.flag=true
  if(this.submitFlag==true){
    this.Next.emit(1);
    this.flag=false
    this.submitFlag=false;
  }
  this.submitFlag=false;
  }

}
