import { Component, OnInit } from '@angular/core';
import { RateTable } from 'src/app/models/ratetables.model';
import { RatetablesService } from 'src/app/services/ratetables.service';

@Component({
  selector: 'app-rate-table-details-core',
  templateUrl: './rate-table-details-core.component.html',
  styleUrls: ['./rate-table-details-core.component.css']
})
export class RateTableDetailsCoreComponent implements OnInit {
  tableList: RateTable[] = [];
  DataTable: any;
  entryData: any;
  constructor(private ratetableService: RatetablesService) { }
  ngOnInit(): void {
    this.GetTableList();
  }

  GetTableList() {
    this.ratetableService.getRateTablesData()
      .subscribe({
        next: (response) => {
          this.tableList = response;
        },
        error: (e) => {
          alert("Error Fetching Table")
        }
      });
  }
  UpdateTablelistById(result: RateTable) {
    this.ratetableService.updateRateTablesById(result.id, result)
      .subscribe({
        next: (response) => {
          this.GetTableList()
          return;
        },
        error: (e) => {
          alert("Error Fetching Table")
        }
      })
  }
  GetTableByName(name: string) {
    this.ratetableService.getTableDataByName(name)
        .subscribe({
          next: (response) => {
            this.DataTable = response
          },
          error: (e) => {
            alert("Error Fetching Table")
          }
        })
  }
  UpdateEntry(entryData: any) {
    this.ratetableService.updateTableEntryByName(entryData.tableId,entryData.item)
    .subscribe({
      next: (res) => {
        alert("Updated Entry");
      },
      error: (e) => {
        alert("Error While Editing Entry")
      }
    })
  }
  AddNewEntry(entryData: any){
    this.ratetableService.addTableEntryByName(entryData.tableId,entryData.item)
    .subscribe({
      next: (res) => {
        alert("Entry Added");
      },
      error: (e) => {
        alert("Error While Adding Entry")
      }
    })
  }
  DeleteEntry(entryData: any){
    this.ratetableService.deleteTableEntryByNameAndId(entryData.tableId,entryData.Id)
    .subscribe({
      next: (res) => {
        alert("Entry Deleted");
      },
      error: (e) => {
        alert("Error While Deleting Entry")
      }
    })  
  }
}
