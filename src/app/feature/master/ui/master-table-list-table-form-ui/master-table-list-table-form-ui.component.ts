import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-master-table-list-table-form-ui',
  templateUrl: './master-table-list-table-form-ui.component.html',
  styleUrls: ['./master-table-list-table-form-ui.component.css']
})
export class MasterTableListTableFormUiComponent implements OnInit {
  @Input() fields: Array<string> = []
  tableFormField!: FormGroup
  formSubmitFlag = false;
  updateFlag=false;
  @Output() addForms = new EventEmitter<any>();
  @Output() updateForms = new EventEmitter<any>();

  data: any

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.data = this.activatedRoute.snapshot.params['obj']
    if (this.data != undefined) {
      this.activatedRoute.params.subscribe(param => {
        this.data = JSON.parse(param['obj'])
      })
    }
    this.tableFormField = this.fb.group({})
  }
  ngOnInit(): void {

    this.fields.splice(this.fields.indexOf('action'), 1)//remove action element from array

    if (this.data) {
      this.updateFromFields(this.data)
      this.updateFlag=true
    } else {
      this.addFromFields();

    }


  }
  addFromFields() {


    this.fields.forEach(field => {
      if (field.includes('Id')) {
        const control = new FormControl('', Validators.required)
        this.tableFormField.addControl(field, control)
      }
      else {
        const control = new FormControl()
        this.tableFormField.addControl(field, control)
      }
    })
  }

  updateFromFields(data: any) {


    this.fields.forEach(field => {
      if (field.includes('Id')) {
        const control = new FormControl(data[field], Validators.required)
        this.tableFormField.addControl(field, control)
      }
      else {
        const control = new FormControl(data[field])
        this.tableFormField.addControl(field, control)
      }
    })
  }
  submitForm() {
    this.formSubmitFlag = true

    if (this.tableFormField.valid) {
      if(this.updateFlag){
        this.updateForms.emit(this.tableFormField)
      }else{
        this.addForms.emit(this.tableFormField)
      }
    }
  }



}
