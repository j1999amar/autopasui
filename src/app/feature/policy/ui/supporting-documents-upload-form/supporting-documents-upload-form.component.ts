import { Component, EventEmitter,Input,Output,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray,FormControl,ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GLOBAL_VAR } from 'src/app/app.global';

@Component({
  selector: 'app-supporting-documents-upload-form',
  templateUrl: './supporting-documents-upload-form.component.html',
  styleUrls: ['./supporting-documents-upload-form.component.css']
})

export class SupportingDocumentsUploadFormComponent implements OnInit {
  @Output() PreviousHandler= new EventEmitter;
  @Input() documentform: FormGroup;
  @Output() submitHandlder = new EventEmitter;
  @Output() updateHandlder = new EventEmitter;
  @Output() dowloadHandlder = new EventEmitter;
  @Input() flag:boolean=false;
  editFlag:boolean=GLOBAL_VAR.editflag;
 
  public obj: any = {};
  public cart: any = [];
  private baseUrl = environment.baseUrl; 
  fileSelected : File |any = null;


  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.documentform = this.formBuilder.group(
      {
        AdharUpload: ['', [Validators.required]],
      });
  }
  ngOnInit(): void {}
  

  get documentFormControl() {
    return this.documentform.controls;
  }

  submit(){
    var arr = []
    let fData: FormData = new FormData;
    for (var val of this.cart) {
      arr.push(val.fileName.split('.')[0])
      fData.append("files", val);
    }
    if((!arr.includes('Adhar') && !this.editFlag)){
      alert('Please Upload Adhar Details')
      return ;
    }

    if((!arr.includes('RC') && !this.editFlag)){
      alert('Please Upload Vehicle RC Details')
      return ;
    }
  
    const formData = new FormData();

    for (let i = 0; i < this.cart.length; i++) { 
      formData.append('files', this.cart[i], this.cart[i].fileName); 
    }
    if(!this.editFlag){
      this.submitHandlder.emit(formData)
    }
    else{
      this.updateHandlder.emit(formData)
    }
  }
  
  Previous(){
    this.PreviousHandler.emit()
  }

  uploadadhar(event: any) {
      this.obj = event.target.files[0];
      this.fileSelected = event.target.files[0];
      var extension = this.obj.name.split('.')[1];
      this.obj.fileName = 'Adhar.'+ extension;
      this.cart.push(this.fileSelected);
    }

    uploadpan(event: any) {
      this.obj = event.target.files[0];
      var extension = this.obj.name.split('.')[1];
      this.obj.fileName = 'Pan.'+ extension;
      this.cart.push(this.obj);
    }

    uploaddrivinglicense(event: any) {
      this.obj = event.target.files[0];
      var extension = this.obj.name.split('.')[1];
      this.obj.fileName = 'License.'+ extension;
      this.cart.push(this.obj);
    }

    uploadinvoice(event: any) {
      this.obj = event.target.files[0];
      var extension = this.obj.name.split('.')[1];
      this.obj.fileName = 'Invoice.'+ extension;
      this.cart.push(this.obj);
    }

    uploadvehiclepic(event: any) {
      this.obj = event.target.files[0];
      var extension = this.obj.name.split('.')[1];
      this.obj.fileName = 'picture.'+ extension;
      this.cart.push(this.obj);
    }

    uploadrc(event: any) {
      this.obj = event.target.files[0];
      var extension = this.obj.name.split('.')[1];
      this.obj.fileName = 'RC.'+ extension;
      this.cart.push(this.obj);
    }

    downloadFile(event: any)
    {
      this.dowloadHandlder.emit(event.target.id)
    }
}
