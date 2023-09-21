import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-master-table-list-table-form-ui',
  templateUrl: './master-table-list-table-form-ui.component.html',
  styleUrls: ['./master-table-list-table-form-ui.component.css']
})
export class MasterTableListTableFormUiComponent implements OnInit {
  @Input() fields: Array<string> = []
  tableFormField!: FormGroup
  formSubmitFlag=false;
  @Output() addForms=new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.tableFormField = this.fb.group({})
  }
  ngOnInit(): void {
      
    this.fields.splice(this.fields.indexOf('action'),1)//remove action element from array

    this.addFromFields();


  }
  addFromFields() {
    

    this.fields.forEach(field => {
     if(field.includes('Id')){
      const control = new FormControl('',Validators.required)
      this.tableFormField.addControl(field, control)
     }
     else {
      const control = new FormControl()
      this.tableFormField.addControl(field, control)
     }
    })
  }
  submitForm() {
    this.formSubmitFlag=true
    if (this.tableFormField.valid) {
      this.addForms.emit(this.tableFormField)
    }  }



}
