import { Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Policy } from 'src/app/models/policy.model';
import { PolicyService } from 'src/app/services/policy.service';
import { Store } from '@ngrx/store';
import { GLOBAL_VAR } from 'src/app/app.global';
import { SetPolicyId } from 'src/app/app.actions';
import { AppState } from 'src/app/app.state';
import { concatMap } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  Data:Policy[]=[]
  displayedColumns: string[] = ['si_no','policy_number','effective_date','expiration_date', 'status','view'];
  dataSource = new MatTableDataSource<Policy>(this.Data);

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(private policyService: PolicyService,private store: Store<AppState>) { }

  ngOnInit() {
    //this.GetCount();
    this.paginator.pageSize = 5;
    this.GetPolicies();
  }
  GetAllPolicies(){
    this.policyService.getPolicies()
      .subscribe({
        next: (response) => {
        },
        error: (e) => {
          alert("Error in fetching policies")
        }
      });
  }
  getSerialNumber(index: number) {
    return (this.paginator.pageIndex * this.paginator.pageSize + index + 1);
  }
  setPolicyId(policyid:string) {
    GLOBAL_VAR.policyId=policyid
  }
  GetPolicies(){
    this.policyService.getPoliciesByIndex(this.paginator.pageIndex*this.paginator.pageSize,this.paginator.pageSize)
      .pipe(
        concatMap((response) => {
          this.Data = response;
          this.dataSource.data = response;
          return this.policyService.getPolicyCount();
        })
      )
      .subscribe({
        next: (response) => {
        this.paginator.length= response;
        },
        error: (e) => {
          alert("Error in fetching policies")
        }
      });
  }
}
