import { Component, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CoverageService } from 'src/app/services/coverage.service';

@Component({
  selector: 'app-premium-rating',
  templateUrl: './premium-rating.component.html',
  styleUrls: ['./premium-rating.component.css']
  
})
export class PremiumRatingComponent {
  viewFlag:boolean=false;
  premiumData:any;
  @Output() Previous= new EventEmitter;
  @Output() Next = new EventEmitter;  
  displayedColumns: string[] = ['base','year','factor','premium'];
  Data:any[]=[{base:'Year of Manufacture',year:0},
              {base:'Ex ShowRoom Price',premium:0.0},
              {base:'Insured Declared Value',premium:0.0},
              {base:'Own Damage',factor:'',premium:0.0},
              {base:'No Claim Bonus',factor:'',premium:0.0},
              {base:'Third Party Cover',premium:0.0},
              {base:'Theft',premium:0.0},
              {base:'Net Premium',premium:0.0},
              {base:'Service Tax',factor:'',premium:0.0},
              {base:'Total Premium',premium:0.0}]
  dataSource = new MatTableDataSource<any>(this.Data);
  constructor(private coverageService: CoverageService) { }
  calculate(){
    this.coverageService.CalculatePremium() .subscribe({
      next: (res) => {
        {
           this.premiumData=res; 
          this.Data[0].year=this.premiumData.year;
          this.Data[1].premium=this.premiumData.exShowroomPrice;
          this.Data[2].premium=this.premiumData.idv;
          this.Data[3].premium=this.premiumData.odp;
          this.Data[3].factor=((this.premiumData.odp/this.premiumData.idv)*100).toFixed(0).toString()+"%"
          this.Data[4].premium=this.premiumData.ncb;
          this.Data[4].factor=((this.premiumData.ncb/this.premiumData.odp)*100).toFixed(0).toString()+"%"
          this.Data[5].premium=this.premiumData.tcp;
          this.Data[6].premium=this.premiumData.theft;
          this.Data[7].premium=this.premiumData.netPremium;
          this.Data[8].premium=this.premiumData.gst;
          this.Data[8].factor=((this.premiumData.gst / this.premiumData.netPremium) * 100).toFixed(0).toString()+"%"
          this.Data[9].premium=this.premiumData.totalPremium
          this.viewFlag=true
          }
      },
      error: (e) => {
        alert("Error While Calculating premium")
      }
    });
  }
  PreviousHandler(){
    this.Previous.emit()
  }
  SaveNext(){
    this.Next.emit(5)   
  }
}
