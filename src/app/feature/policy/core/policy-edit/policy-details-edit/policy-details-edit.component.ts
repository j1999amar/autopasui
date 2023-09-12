import { Component,Output,EventEmitter,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Policy, PolicyDetails } from 'src/app/models/policy.model';
import { PolicyService } from 'src/app/services/policy.service';
import { Store,select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { GLOBAL_VAR } from 'src/app/app.global';


@Component({
  selector: 'app-policy-details-edit',
  templateUrl: './policy-details-edit.component.html',
  styleUrls: ['./policy-details-edit.component.css']
})
export class PolicyDetailsEditComponent implements OnInit{
  public policyForm!: FormGroup;
  submitted = false;
  policyid='';
  policyFormValid : boolean = false;
  @Output() Next=new EventEmitter;
  flag: boolean =false;
  submitFlag:boolean=false;
  recieveFlag:boolean=false;
  policyDetails:Policy[]=[];

  constructor(private policyService: PolicyService,private store: Store<AppState>) { }

  policy:PolicyDetails={
    PolicyEffectiveDt:'',
    PolicyExpirationDt:'',
    Term:0,
  }
  
  ngOnInit(): void {
    this.getData();
    //this.store.pipe(select(state => state.policyid)).subscribe(policyid => {this.policyid = policyid;});
  }
  
  policyFormValidCheck(validationCheck: boolean){
    this.policyFormValid = validationCheck
  }
  PostPolicy(policy:PolicyDetails) {  
    this.submitted = true; 
    if (this.policyFormValid) {
      this.policyService.UpdatePolicyById(GLOBAL_VAR.policyId,policy).subscribe({
        next: (res) =>  { 
          alert("Policy Updated saved successfully.");
          if(this.flag==true){
            this.Next.emit(1);
            this.flag=false} 
          this.submitFlag=true},
        error: (e) => {
          alert("Error While Updating Policy Details")
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
  getData(){
    this.recieveFlag=true;
    this.policyService.getPolicyById( GLOBAL_VAR.policyId).subscribe({
      next: (res) =>  { 
        this.policyDetails=res; 
      },
      error: (e) => {
        alert("Error While Fetching")
    }})
  }

}
