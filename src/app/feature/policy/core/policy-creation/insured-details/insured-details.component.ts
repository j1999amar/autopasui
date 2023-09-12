import { Component,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GLOBAL_VAR } from 'src/app/app.global';
import { Insured } from 'src/app/models/insured.model';
import { InsuredService } from 'src/app/services/insured.service';

@Component({
  selector: 'app-insured-details',
  templateUrl: './insured-details.component.html',
  styleUrls: ['./insured-details.component.css']
})

export class InsuredDetailsComponent {
  
submitted = false;
insuredFormValid : boolean = false;
eventname!: Event;
public insuredForm!: FormGroup;
@Output() Next=new EventEmitter;
@Output() Previous=new EventEmitter;
flag: boolean=false;
submitFlag:boolean=false;

insuredFormValidCheck(validationCheck: boolean){
  this.insuredFormValid = validationCheck
}

keypressControlName(keypressControl:Event){
  this.eventname =keypressControl
}

constructor(private insuredService:InsuredService,private fb: FormBuilder){ }

insuredDetailsPost(insureddata:Insured) {
  this.submitted = true;
    if (this.insuredFormValid) {
      this.insuredService.postInsured(insureddata).subscribe({
        next: (res) => {
          {
            alert("Insured Details saved successfully"); 
            if(this.flag==true){
              this.Next.emit(2);
              this.flag=false} 
            this.submitFlag=true
          }
            
        },
        error: (e) => {
          alert("Error While Saving Insured Details")
        }
      });
    }
  }

  keypressValidation(eventname:any) 
  {
      var controlname = eventname.target.attributes.getNamedItem('ng-reflect-name').value;
      let pattern = new RegExp("")
    
      if (controlname == "Mobile" || controlname == "AccountNumber"){
        pattern =  /[0-9]/;
      }
      else if(controlname == "Pincode" || controlname == "AadharNumber") {
        pattern = /^[0-9 ]+$/;
      }
      else if(controlname == "IfscCode") {
        pattern = /^[a-zA-Z0-9]+$/;
      }
      else if(controlname == "PanNumber") {
        pattern = /^[A-Z0-9]+$/;
      }
      else if(controlname == "FirstName" || controlname == "LastName" || controlname == "State" || controlname == "City") {
        pattern = /^[a-zA-Z ]+$/;  
      }
      else  {}
      let inputChar = String.fromCharCode(eventname.charCode);
      if (eventname.keyCode  && !pattern.test(inputChar)) {
        eventname.preventDefault();
      }
  }
  SaveNextHandler(){
    this.flag=true
    if(this.submitFlag==true){
      this.Next.emit(2);
      this.flag=false
      this.submitFlag=false;
    }
    this.submitFlag=false;
    }  
    PreviousHandler(){
      this.Previous.emit()
    }
}