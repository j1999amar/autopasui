import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { HeaderComponent } from './shared/ui/header/header.component';
import { SideBarComponent } from './shared/ui/side-bar/side-bar.component';
import { DashboardComponent } from './shared/ui/dashboard/dashboard.component';
import { PolicyDetailsComponent } from './feature/policy/core/policy-creation/policy-details/policy-details.component';
import { InsuredDetailsComponent } from './feature/policy/core/policy-creation/insured-details/insured-details.component';
import { CoverageDetailsComponent } from './feature/policy/core/policy-creation/coverage-details/coverage-details.component';
import { VehicleDetailsComponent } from './feature/policy/core/policy-creation/vehicle-details/vehicle-details.component';
import { RatetablesUploadComponent } from './feature/RateTable/core/ratetables-upload/ratetables-upload.component';
import { TabGroupComponent } from './shared/ui/tab-group/tab-group.component';
import { RatetablesListFormComponent } from './feature/policy/ui/ratetables-list-form/ratetables-list-form.component';
import { TabGroupEditComponent } from './shared/ui/tab-group-edit/tab-group-edit.component';
import { RateTableDetailsCoreComponent } from './feature/RateTable/core/rate-table-details-core/rate-table-details-core.component';
import { MasterTableComponent } from './feature/master/core/master-table/master-table.component';
import { BodyTypeComponent } from './feature/master/core/master-table-list-table/master-table-list-table.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"tabgroup",component:TabGroupComponent},
  {path:"tabgroupedit",component:TabGroupEditComponent},
  {path:"policydetails", component:PolicyDetailsComponent},
  {path:"insureddetails", component:InsuredDetailsComponent},
  {path:"coveragedetails",component:CoverageDetailsComponent},
  {path:"vehicledetails", component:VehicleDetailsComponent},
  {path: "ratetables", component:RatetablesUploadComponent},
  {path: "ratetableslist", component:RatetablesListFormComponent},
  {path:"rating",component:RateTableDetailsCoreComponent},
  {path:"master",component:MasterTableComponent},
  {path:"bodytype",component:BodyTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
