import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BodyType } from 'src/app/models/vehicle.model';
import { DataService } from 'src/app/services/data.service';
import { MasterTableListTable } from 'src/app/services/master-table-list-table.service';

@Component({
  selector: 'app-master-table-list-table-form',
  templateUrl: './master-table-list-table-form.component.html',
  styleUrls: ['./master-table-list-table-form.component.css']
})
export class MasterTableListTableFormComponent implements OnInit {
  passfields: Array<string> = []
  tableTypeList: any;
  tableName: any;
  constructor(private apiService: MasterTableListTable, private dataservice: DataService) {

    this.passfields = this.dataservice.addTableFormFields
    this.tableName = this.dataservice.shareTableName
  }
  addForm(addFormData: any) {
    let data: any = addFormData.value
    this.apiService.apiPostCall(data, this.tableName).subscribe(
      {
        next: (value) => {
          alert(`Table ${this.tableName} is added successfully`)
          window.history.back();
        },
        error: (err: any) => {
          this.handleApiErrors(err)

        },
      }
    )
  }

  handleApiErrors(error: any) {
    if (error.status === 400 && error.error && error.error.errors) {
      // Handle multiple errors here
      const errorMessages = error.error.errors;
      let errorKey

      for (let key in error.error.errors) {
        if (error.error.errors.hasOwnProperty(key)) {
          alert(error.error.errors[key]);
        }
      }
    } else {
      alert('An error occurred: ' + error.error);
    }
  }


  ngOnInit(): void {

  }
}
