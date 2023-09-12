import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog ,MatDialogRef} from '@angular/material/dialog';
import { RatetablesService } from 'src/app/services/ratetables.service';

@Component({
  selector: 'app-ratetables-form',
  templateUrl: './ratetables-form.component.html',
  styleUrls: ['./ratetables-form.component.css']
})
export class RatetablesFormComponent implements OnInit{

  public rateTablesListForm! : FormGroup;
  isPopupOpened = true;

  constructor(private _formBuilder : FormBuilder,
    private dialogRef : MatDialogRef<RatetablesFormComponent>, private _ratetablesService:RatetablesService,
    @Inject(MAT_DIALOG_DATA) public data:any)
{

} 

  ngOnInit(): void {
    


   /* this.rateTablesListForm=new FormGroup({
      ID: <any> [this.data.ID, [Validators.required]],
      Name :<any> [this.data.no_claim_year, [Validators.required]],
      Factor :<any>[this.data.factor, [Validators.required]]
    });*/alert(this.data.id);
    this.rateTablesListForm = this._formBuilder.group({
  
      id: [this.data.id, [Validators.required]],
      no_claim_year : [this.data.no_claim_year, [Validators.required]],
      factor :[this.data.factor, [Validators.required]]
    
     });
  
 }
  

  onClose() :void{
    this.dialogRef.close();
  }
  onSubmit(){
    //this.editRate();
    this.dialogRef.close();
  }
  

}
