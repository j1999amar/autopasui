import { Component,EventEmitter,Input,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GLOBAL_VAR } from 'src/app/app.global';
import { Insured } from 'src/app/models/insured.model';



@Component({
  selector: 'app-insured-details-form',
  templateUrl: './insured-details-form.component.html',
  styleUrls: ['./insured-details-form.component.css']
})

export class InsuredDetailsFormComponent {
  
  @Input()  submitted:boolean = false;
  @Input() public insuredForm!: FormGroup;
  @Output() public insuredFormValid = new EventEmitter();
  @Output() public keypressValidation = new EventEmitter();
  @Output() SaveNextHandler = new EventEmitter;  
  @Output() PreviousHandler= new EventEmitter;
  @Output() public insuredDetailsPost : EventEmitter<any> = new EventEmitter();
  @Input() flag:boolean=false;
  @Input() insuredDetails:any=[];
  @Input() contactDetails:any=[];
  editFlag:boolean=GLOBAL_VAR.editflag;
  
  constructor(private fb: FormBuilder){ }

  ngOnInit() 
    {
        this.insuredForm = this.fb.group({
        FirstName: [this.insuredDetails.length>0?this.insuredDetails[0].firstName:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
        LastName: [this.insuredDetails.length>0?this.insuredDetails[0].lastName:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
        BankName:[this.insuredDetails.length>0?this.insuredDetails[0].bankName:'', [Validators.pattern("^[a-zA-Z ]+$")]],
        BankAddress:[this.insuredDetails.length>0?this.insuredDetails[0].bankAddress:'', [Validators.pattern("^[a-zA-Z ]+$")]],
        AddressLine1 : [this.contactDetails.length>0?this.contactDetails[0].addressLine1:'', [Validators.required]],
        AddressLine2 : [this.contactDetails.length>0?this.contactDetails[0].addressLine2:'', [Validators.required]],
        City : [this.contactDetails.length>0?this.contactDetails[0].city:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
        State : [this.contactDetails.length>0?this.contactDetails[0].state:'', [Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
        Pincode : [this.contactDetails.length>0?this.contactDetails[0].pincode:'', [Validators.required,Validators.pattern("^[1-9]{1}[0-9]{2}\\s?[0-9]{3}$")]],
        Mobile : [this.contactDetails.length>0?this.contactDetails[0].mobileNo:'', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        Email: [this.contactDetails.length>0?this.contactDetails[0].email:'', [Validators.pattern("^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$")]],
        AadharNumber: [this.insuredDetails.length>0?this.insuredDetails[0].aadharNumber:'', [Validators.pattern("^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$")]],
        LicenseNumber: [this.insuredDetails.length>0?this.insuredDetails[0].licenseNumber:'', [Validators.pattern("^[0-9]{1,4}\/[0-9]{4}\/[0-9]{4}$")]],
        PanNumber: [this.insuredDetails.length>0?this.insuredDetails[0].panNumber:'', [Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]],
        AccountNumber: [this.insuredDetails.length>0?this.insuredDetails[0].accountNumber:'', [Validators.pattern("[0-9]{14}")]],
        IfscCode: [this.insuredDetails.length>0?this.insuredDetails[0].ifscCode:'', [Validators.pattern("^[A-Za-z]{4}0[A-Z0-9]{6}$")]]
      })
    }

  public  get insuredFormControl()  
    {
      return this.insuredForm.controls;
    }

    PostInsured(insured:Insured){  
      this.insuredFormValid.emit(this.insuredForm.valid)  
      this.insuredDetailsPost.emit(insured);
    }
    SaveNext(insured:Insured){
      this.SaveNextHandler.emit() 
      if(this.flag==false){
        this.PostInsured(insured);}
    }
    Previous(){
      this.PreviousHandler.emit()
    }
}