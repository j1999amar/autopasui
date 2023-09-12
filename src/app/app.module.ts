import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { PolicyDetailsComponent } from './feature/policy/core/policy-creation/policy-details/policy-details.component';
import { InsuredDetailsComponent } from './feature/policy/core/policy-creation/insured-details/insured-details.component';
import { VehicleDetailsComponent } from './feature/policy/core/policy-creation/vehicle-details/vehicle-details.component';
import { PolicyDatailsFormComponent } from './feature/policy/ui/policy-datails-form/policy-datails-form.component';
import { InsuredDetailsFormComponent } from './feature/policy/ui/insured-details-form/insured-details-form.component';
import { HeaderComponent } from './shared/ui/header/header.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { SideBarComponent } from './shared/ui/side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule} from '@angular/material/list';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoverageDetailsComponent } from './feature/policy/core/policy-creation/coverage-details/coverage-details.component';
import { ReactiveFormsModule }   from '@angular/forms';
import { VehicleDetailsFormComponent } from './feature/policy/ui/vehicle-details-form/vehicle-details-form.component';
import { CoverageDetailsFormComponent } from './feature/policy/ui/coverage-details-form/coverage-details-form.component';
import { MatTabsModule} from '@angular/material/tabs';
import { StoreModule } from '@ngrx/store';
import { TabGroupComponent } from './shared/ui/tab-group/tab-group.component';
import { RatetablesUploadComponent } from './feature/RateTable/core/ratetables-upload/ratetables-upload.component';
import { RatetablesUploadFormComponent } from './feature/RateTable/ui/ratetables-upload-form/ratetables-upload-form.component';
import { MatDialogModule} from '@angular/material/dialog';
import { RatetablesFormComponent } from './feature/policy/ui/ratetables-form/ratetables-form.component';
import { MatCardModule} from '@angular/material/card';
import { RatetablesListFormComponent } from './feature/policy/ui/ratetables-list-form/ratetables-list-form.component';
import { TabGroupEditComponent } from './shared/ui/tab-group-edit/tab-group-edit.component';
import { DashboardComponent } from './shared/ui/dashboard/dashboard.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PolicyDetailsEditComponent } from './feature/policy/core/policy-edit/policy-details-edit/policy-details-edit.component';
import { VehicleDetailsEditComponent } from './feature/policy/core/policy-edit/vehicle-details-edit/vehicle-details-edit.component';
import { InsuredDetailsEditComponent } from './feature/policy/core/policy-edit/insured-details-edit/insured-details-edit.component';
import { CoverageDetailsEditComponent } from './feature/policy/core/policy-edit/coverage-details-edit/coverage-details-edit.component';
import { PremiumRatingComponent } from './shared/ui/premium-rating/premium-rating.component';
import { SupportingDocumentsUploadComponent } from './feature/policy/core/policy-creation/supporting-documents-upload/supporting-documents-upload.component';
import { SupportingDocumentsUploadEditComponent } from './feature/policy/core/policy-edit/supporting-documents-upload-edit/supporting-documents-upload-edit.component';
import { SupportingDocumentsUploadFormComponent } from './feature/policy/ui/supporting-documents-upload-form/supporting-documents-upload-form.component';
import { RateTableDetailsCoreComponent } from './feature/RateTable/core/rate-table-details-core/rate-table-details-core.component';
import { RateTableDetailsUIComponent } from './feature/RateTable/ui/rate-table-details-ui/rate-table-details-ui.component';
import { RateTableNameDialogComponent } from './feature/RateTable/ui/rate-table-name-dialog/rate-table-name-dialog.component';
import { MasterTableComponent } from './feature/master/core/master-table/master-table.component';
import { MasterTableListComponent } from './feature/master/ui/master-table-list/master-table-list.component';
import { BodyTypeComponent } from './feature/master/core/master-table-list-table/master-table-list-table.component';
import { BodyTypeListComponent } from './feature/master/ui/body-type-list/master-table-list-table-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyDetailsComponent,
    InsuredDetailsComponent,
    VehicleDetailsComponent,
    PolicyDatailsFormComponent,
    InsuredDetailsFormComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    CoverageDetailsComponent,
    VehicleDetailsFormComponent,
    CoverageDetailsFormComponent,
    TabGroupComponent,
    RatetablesUploadComponent,
    RatetablesUploadFormComponent,
    RatetablesFormComponent,
    RatetablesListFormComponent,
    DashboardComponent,
    PolicyDetailsEditComponent,
    VehicleDetailsEditComponent,
    TabGroupEditComponent,
    InsuredDetailsEditComponent,
    CoverageDetailsEditComponent,
    PremiumRatingComponent,
    SupportingDocumentsUploadComponent,
    SupportingDocumentsUploadEditComponent,
    SupportingDocumentsUploadFormComponent,
    RateTableDetailsCoreComponent,
    RateTableDetailsUIComponent,
    RateTableNameDialogComponent,
    MasterTableComponent,
    MasterTableListComponent,
    BodyTypeComponent,
    BodyTypeListComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,   
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
