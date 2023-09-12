import { HttpClient } from '@angular/common/http';
import { Component,Input,Output, inject, Inject, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { RateTableNameDialogComponent } from '../rate-table-name-dialog/rate-table-name-dialog.component';
import { RatetablesService } from 'src/app/services/ratetables.service';
import { RateTable} from 'src/app/models/ratetables.model';
@Component({
  selector: 'app-ratetables-upload-form',
  templateUrl: './ratetables-upload-form.component.html',
  styleUrls: ['./ratetables-upload-form.component.css']
})
export class RatetablesUploadFormComponent {
  constructor(private dialog: MatDialog) {}
  rateTablesForm! : FormGroup;
  @Input() RateTables: Array<RateTable> = [];
  isPopupOpened = true;
  selectFlag:boolean=false;
  tableRow:string[]=[];
  tableEntry: any[] = [];
  newEntry: any={};
  tableField:string='';
  firstFlag:boolean=false;
  secondFlag:boolean=false;
  isEdit : any = false;
  len:number=0;
  private baseUrl=environment.baseUrl;
  fileSelected : File |any = null;
  fileSelectedName :string = "";
  fileName :string = "";
  tableList:any=[];
  @Output() OnFileUploadHandler=new EventEmitter<{data: string,filename:string}>
  @Output() OnFileCreateHandler=new EventEmitter<{data: any[],headers:string[],filename:string}>
  
  ngOnInit(): void {
    this.rateTablesForm=new FormGroup({
       file: new FormControl('',Validators.compose([
         Validators.required,
           ])),
           fileSource: new FormControl('', [Validators.required])
     });
     
}
 
onFileChange(event: any) {
  this.selectFlag=true;
    this.fileSelected = event.target.files[0];
    this.fileSelectedName = this.fileSelected.name;
    let filesize = 0;
    let ext = null;
    filesize = (Math.round(this.fileSelected.size * 100 / (1024 * 1024)) / 100)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.rateTablesForm.patchValue({
      fileSource: file
      });
      }
 }
 onTableSelected(value: string) {
  if (value === 'Other') {
    this.openDialog()
  } else {
    this.fileName=value;
  }
}
onFileUpload (data:any)  {
  const filename=this.fileName
  this.OnFileUploadHandler.emit({data,filename})
}
AddField() {
  if (this.tableField) {
    this.tableRow.push(this.tableField);
    this.tableField = '';
    this.secondFlag = true;
  }
}
AddEntry(entry:string[]){
  if (Object.keys(entry).length > 0) {
    this.tableEntry.push(entry);
    this.newEntry = {}; 
  }
}
/**
   * @param item 
   */
onEdit(item : any){
  item.isEdit = true;
}
/**
 * @param item 
 */
afterEdit(item:any){
  delete item.isEdit;
}
deleteEntry(item:any){
  this.tableEntry=this.tableEntry.filter(x=> x !== item);
}
openDialog(): void {
  const dialogRef = this.dialog.open(RateTableNameDialogComponent);
  dialogRef.afterClosed().subscribe((result) => {
    this.fileName=result;
    alert(this.fileName);
  });
}
onFileCreate(entry:string[]){
  if (Object.keys(entry).length > 0) {
    this.tableEntry.push(entry);
    this.newEntry = {}; 
  }
  const data=this.tableEntry;
  const headers=this.tableRow
  const filename=this.fileName
  this.OnFileCreateHandler.emit({data,headers,filename})
}
}
