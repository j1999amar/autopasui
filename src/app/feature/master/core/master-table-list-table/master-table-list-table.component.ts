import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MasterTableListTable } from 'src/app/services/master-table-list-table.service';

@Component({
  selector: 'app-master-table-list-table',
  templateUrl: './master-table-list-table.component.html',
  styleUrls: ['./master-table-list-table.component.css'],

})
export class MasterTableListTableComponent implements OnInit {
  constructor(private masterTableList: MasterTableListTable, private dataService: DataService) { }
  tableTypeList: any[] = [];
  keys: string[] = []
  tableName: any = ''

  ngOnInit(): void {
    this.dataService.sharedData$.subscribe(
      data => {
        this.tableName = data
        switch (this.tableName) {
          case 'BodyType':
            this.getAllBodyType();
            break;
          case 'FuelType':
            this.getAllFuelType();
            break;
          case 'RTO':
            this.getAllRTO();
            break;
          case 'VehicleType':
            this.getAllVehicleType();
            break;
          case 'Brand':
            this.getAllBrand();
            break;
          case 'Model':
            this.getAllModel();
            break;
          case 'TransmissionType':
            this.getAllTransmissionType();
            break;
          case 'Variant':
            this.getAllVariant();
            break;
        }
      }
    )
  }
  extractColumnNames(data: any[]): string[] {
    if (Array.isArray(data) && data.length > 0) {
      return Object.keys(data[0]);
    }
    return [];
  }
  getAllBodyType() {
    this.masterTableList.getBodyTypeTable()
      .subscribe({
        next: (response) => {
          this.tableTypeList = response
          this.keys = this.extractColumnNames(this.tableTypeList)
          this.keys.push('action')
        },
        error: (e) => {
          alert("Error Fetching Body Type Table")
        }
      });

  }

  getAllFuelType() {
    this.masterTableList.getFuelTypeTable()
      .subscribe({
        next: (response) => {
          this.tableTypeList = response
          this.keys = this.extractColumnNames(this.tableTypeList)
          this.keys.push('action')

        },
        error: (e) => {
          alert("Error Fetching Fuel Type Table")
        }
      });
  }

  getAllRTO() {
    this.masterTableList.getRTOTable()
      .subscribe({
        next: (response) => {
          this.tableTypeList = response
          this.keys = this.extractColumnNames(this.tableTypeList)
          this.keys.push('action')

        },
        error: (e) => {
          alert("Error Fetching RTO Table")
        }
      });
  }

  getAllVehicleType() {
    this.masterTableList.getAllVehicleTypeTable()
      .subscribe({
        next: (response) => {
          this.tableTypeList = response
          this.keys = this.extractColumnNames(this.tableTypeList)
          this.keys.push('action')

        },
        error: (e) => {
          alert("Error Fetching VehicleType Table")
        }
      });
  }

  getAllBrand() {
    this.masterTableList.getAllBrandTable()
      .subscribe({
        next: (response) => {
          this.tableTypeList = response
          this.keys = this.extractColumnNames(this.tableTypeList)
          this.keys.push('action')

        },
        error: (e) => {
          alert("Error Fetching Brand Table")
        }
      });
  }

  getAllModel() {
    this.masterTableList.getAllModelTable()
      .subscribe({
        next: (response) => {
          this.tableTypeList = response
          this.keys = this.extractColumnNames(this.tableTypeList)
          this.keys.push('action')

        },
        error: (e) => {
          alert("Error Fetching Model Table")
        }
      });
  }
  getAllTransmissionType() {
    this.masterTableList.getAllTransmissionTypeTable()
      .subscribe({
        next: (response) => {
          this.tableTypeList = response
          this.keys = this.extractColumnNames(this.tableTypeList)
          this.keys.push('action')

        },
        error: (e) => {
          alert("Error Fetching Transmission Type Table")
        }
      });
  }
  getAllVariant() {
    this.masterTableList.getAllVariantTable()
      .subscribe({
        next: (response) => {
          this.tableTypeList = response
          this.keys = this.extractColumnNames(this.tableTypeList)
          this.keys.push('action')

        },
        error: (e) => {
          alert("Error Fetching Variant Table")
        }
      });
  }



}
