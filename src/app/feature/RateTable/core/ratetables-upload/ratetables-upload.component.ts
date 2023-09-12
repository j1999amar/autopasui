import { Component, OnInit } from '@angular/core';
import { RateTable } from 'src/app/models/ratetables.model';
import { RatetablesService } from 'src/app/services/ratetables.service';

@Component({
  selector: 'app-ratetables-upload',
  templateUrl: './ratetables-upload.component.html',
  styleUrls: ['./ratetables-upload.component.css']
})
export class RatetablesUploadComponent implements OnInit {
  tableList: RateTable[] = [];
  constructor(private ratetableService: RatetablesService) { }
  ngOnInit(): void {
    this.GetTableList();
  }

  OnFileUpload(filedata: any) {
    console.log(filedata);
    this.ratetableService.onFileUpload(filedata.data, filedata.filename)
      .subscribe(
        {
          next: (res) => {
            alert("File uploaded successfully");
          },
          error: (e) => {
            console.log(e);
          }
        }
      );
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
  OnFileCreate(filedata:any){
    console.log(filedata);
  }
}
