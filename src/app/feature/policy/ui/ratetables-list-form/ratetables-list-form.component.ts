import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RatetablesService } from 'src/app/services/ratetables.service';
import { RatetablesFormComponent } from '../ratetables-form/ratetables-form.component';
import { count } from 'rxjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-ratetables-list-form',
  templateUrl: './ratetables-list-form.component.html',
  styleUrls: ['./ratetables-list-form.component.css']
})
export class RatetablesListFormComponent {
  isPopupOpened = true;
  fetchedNCB : any = [];
  fetchedOD : any = []; 
  fetchedGST : any = [];
  fetchedTF : any = [];
  fetchedTPC : any = [];
  fetchedLLP : any = [];
  editRateId: any ;
  tableList:any=[];
  isEdit : any = false;
  private baseUrl=environment.baseUrl;
  constructor(private http: HttpClient,private dialog : MatDialog, private _rateTablesService :RatetablesService){ }

  ngOnInit(): void {
    this.getTableList();
   /* this.getNCBDeails();
    this.getGstFactorDetails();
    this.getLegalLiabilityDetails();
    this.getOwnDamageDetails();
    this.getTheftFactorDetails();
    this.getThirdPartyCoverDetails();*/
    this.isEdit = false;
  }
  /**
   * * Function for making required row editable for changing the NCB factor field editable
   * @param item
   */
  onEdit(item : any){
   
    item.isEdit = true;
  }
  
  /**
   * 
   * Function for saving the edited NCB Factor
   * @param item 
   */
  afterEditNCB(item : any)
  {
    
    this._rateTablesService.editRateTablesNCB(item).subscribe({
      next: (res) => {
        {  
           alert("Updated NCB Factor"); 
           item.isEdit = false;
        } 
      },
      error: (e) => {
        alert("Error While Editing NCB Facor")
      }
    });
    
  }

  afterEditOD(item : any){
    this._rateTablesService.editRateTablesODP(item).subscribe({
      next: (res) => {
        {  
           alert("Updated OD Factor"); 
           item.isEdit = false;
        } 
      },
      error: (e) => {
        alert("Error While Editing OD Facor")
      }
    });
  }
  afterEditTP(item : any)
  {
    this._rateTablesService.editRateTablesTPC(item).subscribe({
      next: (res) => {
        {  
           alert("Updated TP Factor"); 
           item.isEdit = false;
        } 
      },
      error: (e) => {
        alert("Error While Editing TP Facor")
      }
    });
  }
  afterEditLLP(item : any)
  {
    this._rateTablesService.editRateTablesLLP(item).subscribe({
      next: (res) => {
        {  
           alert("Updated LLP Factor"); 
           item.isEdit = false;
        } 
      },
      error: (e) => {
        alert("Error While Editing LLP Facor")
      }
    });
  }
  afterEdittheft(item : any)
  {
    this._rateTablesService.editRateTablesTHEFT(item).subscribe({
      next: (res) => {
        {  
           alert("Updated Theft Factor"); 
           item.isEdit = false;
        } 
      },
      error: (e) => {
        alert("Error While Editing Theft Facor")
      }
    });
  }
  afterEditgst(item : any)
  {
    this._rateTablesService.editRateTablesGST(item).subscribe({
      next: (res) => {
        {  
           alert("Updated GST Factor"); 
           item.isEdit = false;
        } 
      },
      error: (e) => {
        alert("Error While Editing GST Facor")
      }
    });
  }
  /**
   * 
   * Function for fetching NCB Factor row from Database for editing
   * @param id 
   */
  editRateNCB(id:string){
    this.isPopupOpened = true;
    const ncbFetched = this._rateTablesService.getRateTablesById(id).subscribe({
      next: (res) => {
        this.editRateId = JSON.stringify(res);
      },
      error : (e) => {
        alert('Error fetching NCB details based on Id');
      }
    })
  }
  getNCBDeails(){

    this.http.get("https://localhost:59363/autopasapi/Rating/GetNCBFactors")
      .subscribe({
        next: (response) => {
           this.fetchedNCB = response;
        },
        error: (e) => {
          alert("Error Fetching Coverages")
        }
      });
  }
  getOwnDamageDetails(){
    this.http.get("https://localhost:59363/autopasapi/Rating/GetODFactors")
      .subscribe({
        next: (response) => {
         this.fetchedOD = response;
        },
        error: (e) => {
          alert("Error Fetching Coverages")
        }
      });
  }
  getGstFactorDetails(){
    this.http.get("https://localhost:59363/autopasapi/Rating/GetGSTFactors")
      .subscribe({
        next: (response) => {
         this.fetchedGST = response;
        },
        error: (e) => {
          alert("Error Fetching Coverages")
        }
      });
  }
  getTheftFactorDetails(){
    this.http.get("https://localhost:59363/autopasapi/Rating/GetTheftFactors")
      .subscribe({
        next: (response) => {
         this.fetchedTF = response;
        },
        error: (e) => {
          alert("Error Fetching Coverages")
        }
      });
  }
  getThirdPartyCoverDetails(){
    this.http.get("https://localhost:59363/autopasapi/Rating/GetTPCPFactors")
      .subscribe({
        next: (response) => {
         this.fetchedTPC = response;
        },
        error: (e) => {
          alert("Error Fetching Coverages")
        }
      });
  }
  getLegalLiabilityDetails(){
    this.http.get("https://localhost:59363/autopasapi/Rating/GetLLPFactors")
      .subscribe({
        next: (response) => {
         this.fetchedLLP = response;
        },
        error: (e) => {
          alert("Error Fetching Coverages")
        }
      });
  }
  fetch(list:any){
    if(list.some((item: { id: string; }) => item.id === 'RT_NCB')){
      this.getNCBDeails();
    }
    if(list.some((item: { id: string; }) => item.id === 'RT_GST')){
      this.getGstFactorDetails();
    }
    if(list.some((item: { id: string; }) => item.id === 'RT_LLP')){
      this.getLegalLiabilityDetails();
    }
    if(list.some((item: { id: string; }) => item.id === 'RT_ODP')){
      this.getOwnDamageDetails();
    }
    if(list.some((item: { id: string; }) => item.id === 'RT_THEFT')){
      this.getTheftFactorDetails();
    }
    if(list.some((item: { id: string; }) => item.id === 'RT_TPC')){
      this.getThirdPartyCoverDetails();
    }
  }
  getTableList(){
    this.http.get("https://localhost:59363/autopasapi/Upload/GetTableList")
    .subscribe({
      next: (response) => {
       this.tableList= response;
       this.fetch(response)
      },
      error: (e) => {
        alert("Error Fetching Coverages")
      }
    });
  }
}
