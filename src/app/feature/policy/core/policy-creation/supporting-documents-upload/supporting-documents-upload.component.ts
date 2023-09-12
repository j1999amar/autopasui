import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { documentUploadService } from 'src/app/services/docupload.service';
import { GLOBAL_VAR } from 'src/app/app.global';

import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-supporting-documents-upload',
  templateUrl: './supporting-documents-upload.component.html',
  styleUrls: ['./supporting-documents-upload.component.css']
})

export class SupportingDocumentsUploadComponent {
  @Input() documentform: FormGroup;
  @Output() Previous= new EventEmitter;

  constructor(private formBuilder: FormBuilder, private documentUploadService: documentUploadService ) {
    GLOBAL_VAR.editflag=false;
    this.documentform = this.formBuilder.group(
    {
    });
  }

  submit(formvalue:any): void {
    this.documentUploadService.uploadDoc(formvalue).subscribe({
      next: (res) =>  { 
        alert("Documents Uploded successfully.");
        },
      error: (e) => {
        alert("Error While Uploading Documents")
    }})
  }

  PreviousHandler(){
    this.Previous.emit()
  }
}
