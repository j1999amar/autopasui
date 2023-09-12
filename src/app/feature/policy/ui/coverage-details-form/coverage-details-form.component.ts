import { Component,EventEmitter,Input,Output,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray,FormControl,ValidatorFn } from '@angular/forms';
import { Coverage } from 'src/app/models/coverage';

@Component({
  selector: 'app-coverage-details-form',
  templateUrl: './coverage-details-form.component.html',
  styleUrls: ['./coverage-details-form.component.css']
})
export class CoverageDetailsFormComponent implements OnInit {
  @Input() public coverageform!: FormGroup;
  @Input()  public Coverage:Coverage[]=[]
  selectedCoverageIds: number[] = [];
  @Input() ncb: number = 0;
  @Input() submitted : boolean = false;
  @Input()  totalPremium: number = 0;
  @Output() GetAllCoverageHandler = new EventEmitter;
  @Output() submitHandlder = new EventEmitter;
  @Output()  CalculatePremiumHandlder = new EventEmitter;
  @Output() public coverageFormValid = new EventEmitter();
  @Output() PreviousHandler= new EventEmitter;
  @Output() UpdateNCBHandler= new EventEmitter;
  @Input() coverageDetails:any[]=[];
  @Input() flag:boolean=false;
  @Output() SaveNextHandler = new EventEmitter;   

  get coveragesFormArray()
   {
    return this.coverageform.controls['coverages'] as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {

    this.coverageform = this.formBuilder.group(
      {
        coverages: new FormArray([])
      });

    
   
  }
  ngOnInit(): void {
  }
  
  check(i:number){
  

  }
  submit(){
    this.coverageFormValid.emit(this.coverageform.valid)
    this.UpdateNCBHandler.emit(this.ncb)
    this.submitHandlder.emit(this.coverageform)  
  }
  SaveNext(){
    this.SaveNextHandler.emit() 
    if(this.flag==false){
      this.submit();}
    
  }

  CalculatePremium(){
  
    this.CalculatePremiumHandlder.emit(this.ncb)
  }
  Previous(){
    this.PreviousHandler.emit()
  }
}
