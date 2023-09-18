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
    console.log(data)
    if (!data.isActive) {
      data.isActive = false
    }
    this.apiService.apiPostCall(data, this.tableName).subscribe({
      next: (value) => {
        alert(`Table ${this.tableName} is added successfully`)
        window.history.back();
      },
      error: (err) => {
        alert(err.error)
      },
    }
    )
  }
  ngOnInit(): void {

  }
}
