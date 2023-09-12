import { Component,OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { GLOBAL_VAR } from 'src/app/app.global';
import { Policy, PolicyDetails } from 'src/app/models/policy.model';


@Component({
  selector: 'app-policy-datails-form',
  templateUrl: './policy-datails-form.component.html',
  styleUrls: ['./policy-datails-form.component.css']
})
export class PolicyDatailsFormComponent implements OnInit{

  @Input() policyForm! : FormGroup;
  @Input() submitted : boolean = false;
  @Output() PostPolicyHandler = new EventEmitter;  
  @Output() SaveNextHandler = new EventEmitter;  
  @Input() policyDetails:any=[];
  PolicyEffectiveDt:string=''
  PolicyExpirationDt:string=''
  Term=this.policyDetails.length>0?this.policyDetails[0].term:0
  @Output() public policyFormValid = new EventEmitter();
  @Input() flag:boolean=false;
  editFlag:boolean=GLOBAL_VAR.editflag;
  

  constructor(private fb: FormBuilder){}

  ngOnInit() {
      if(this.policyDetails.length!=0){
        const effective= String(this.policyDetails[0].policyEffectiveDt)
        const expiration= String(this.policyDetails[0].policyExpirationDt)
        this.PolicyEffectiveDt=effective.slice(0, 10) ;
        this.PolicyExpirationDt=expiration.slice(0, 10) ;
        this.Term=this.policyDetails[0].term;
      }
      this.policyForm = this.fb.group({
        PolicyEffectiveDt: ['', [Validators.required]],
        PolicyExpirationDt: ['', [Validators.required]],
        Term: ['', Validators.pattern(/^[1-9]\d*$/)]
      });
  }
 

  get policyFormControl() {
    return this.policyForm.controls;
  }
  
  
  

  PostPolicy(policy:PolicyDetails){
  
    this.policyFormValid.emit(this.policyForm.valid)
    const start = new Date(policy.PolicyEffectiveDt);
    const end = new Date(policy.PolicyExpirationDt);
    const effYear = start.getFullYear();
    const currEffYear = new Date().getFullYear();
    const maxEffYear = currEffYear + 1;
    const expYear = end.getFullYear();
    const maxExpYear = currEffYear + 70;
    let isvalidData=1;
    if ((start.toString() != "Invalid Date") && (end.toString() != "Invalid Date")) {
      if (effYear.toString().length != 4) {
        alert("Invalid year is entered for Policy Effective Date. Please enter a valid year.");
        isvalidData=0;
        return;
      }
      else if ((effYear < currEffYear) || (effYear > maxEffYear)) {
        alert("Enter year between " + currEffYear + " and " + maxEffYear + " for Policy Effective Date.");
        isvalidData=0;
        return;
      }
      if (expYear.toString().length != 4) {
        alert("Invalid year is entered for Policy Expiration Date. Please enter a valid year.");
        isvalidData=0;
        return;
      }
      if (expYear > maxExpYear) {
        alert("Enter year less than " + maxExpYear + " for Policy Expiration Date.");
        isvalidData=0;
        return;
      }
      if (end < start) {
        alert("policy expiration date should be greater than policy effective date.");
        return;
      }
    }
    this.PostPolicyHandler.emit(policy) 
  }
   SaveNext(nextpolicy:PolicyDetails){
    
    if(this.flag==false){
    this.PostPolicy(nextpolicy);}
    this.SaveNextHandler.emit() 
    
  }
  CalculateDifference() {
    const start = new Date(this.PolicyEffectiveDt);
    const end = new Date(this.PolicyExpirationDt);
    const differenceInTime = end.getTime() - start.getTime();
    this.Term = Math.floor(differenceInTime / (1000 * 60 * 60 * 24 * 365));
    if (this.Term <= 0) {
      this.Term = 0
    }
  }
  show(){
    
  }

}
