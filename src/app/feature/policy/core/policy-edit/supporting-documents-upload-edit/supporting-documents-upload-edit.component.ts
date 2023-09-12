import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { documentUploadService } from 'src/app/services/docupload.service';
import { GLOBAL_VAR } from 'src/app/app.global';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-supporting-documents-upload-edit',
  templateUrl: './supporting-documents-upload-edit.component.html',
  styleUrls: ['./supporting-documents-upload-edit.component.css']
})

export class SupportingDocumentsUploadEditComponent implements OnInit{

  @Output() Previous= new EventEmitter;
  documentDetails:any[]=[];
  @Input() documentform: FormGroup;
  downloadUrl:string='';

  constructor( private formBuilder: FormBuilder, private documentUploadService: documentUploadService, private sanitizer: DomSanitizer, private http: HttpClient ) {
     GLOBAL_VAR.editflag=true;
     this.documentform = this.formBuilder.group({});
  }

  ngOnInit(): void {
  }

  submit(formvalue:any): void {
    this.documentUploadService.updateDoc(formvalue).subscribe({
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

  GetContentTypeForFile(fileext : string){
    switch (fileext.toLowerCase())
    {
      case "application/pdf":
        return "pdf";
      case "text/plain":
        return "txt";
      case "application/msword":
        return "docx";
      case "application/vnd.ms-excel":
        return "xlsx";
      case "application/vnd.ms-powerpoint":
        return "pptx";
      case "image/jpeg":
        return "png";
      case "text/csv":
        return "csv"
      default:
        return "ext"
    }
  }

  GetDocumentsById(fileName:string) {
    this.documentUploadService.GetDocumentsById(GLOBAL_VAR.policyId, fileName)
    .subscribe({
      next: (fileData: Blob) => {
          var extension_str = fileData.type;
          const extension = this.GetContentTypeForFile(extension_str);
          const blobUrl = URL.createObjectURL(fileData);

          // Create a temporary link to trigger the download
          const downloadLink = document.createElement('a');
          downloadLink.href = blobUrl;
          downloadLink.download = fileName + "." + extension; // Set the desired file name here

          // Programmatically trigger the download
          downloadLink.click();

          // Cleanup the Blob URL to release resources
          URL.revokeObjectURL(blobUrl);
        },
        error: (e) => {
          alert("No Document upload")
      }})
  }
  
  dowloadHandlder(name:string)
  {
    this.GetDocumentsById(name);
  }

}
