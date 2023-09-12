import { Component, Input,Output, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { RateTable } from 'src/app/models/ratetables.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RatetablesService } from 'src/app/services/ratetables.service';

@Component({
  selector: 'app-rate-table-details-ui',
  templateUrl: './rate-table-details-ui.component.html',
  styleUrls: ['./rate-table-details-ui.component.css']
})
export class RateTableDetailsUIComponent implements OnInit {
  @Input() RateTables: Array<RateTable> = [];
  @Input() DataTable:Array<any>=[];
  @Output() UpdateRatetable=new EventEmitter;
  @Output() getTableByNameHandler=new EventEmitter;
  @Output() UpdatedEntryHandler = new EventEmitter<{tableId: string,item: any}>;
  @Output() AddNewEntryHandler=new EventEmitter<{tableId: string,item: any}>;
  @Output() DeleteEntryHandler=new EventEmitter<{tableId: string,Id: number}>
  tableRow:any;
  newEntry:any={};
  filterValue: string = '';
  editEntry:boolean=false;
  isEdit : any = false;
  addnewflag:boolean=false;
  displayedColumns: string[] = ['title', 'description', 'maintain', 'view'];
  dataSource = new MatTableDataSource<RateTable>();
  
  constructor(private dialog: MatDialog, private ratetableservice:RatetablesService) {}
  ngOnInit(): void {
    this.dataSource.data = this.RateTables
  }
  applyFilter(event: any) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getTableByName(element:RateTable){
    this.getTableByNameHandler.emit(element.id);
    this.tableRow=element;
    this.editEntry=true;
  }

  /**
   * @param item 
   */
  onEdit(item : any){
    item.isEdit = true;
  }
  /**
   * @param item 
   */
  afterEdit(tableId:string,item:any){
    delete item.isEdit;
    this.UpdatedEntryHandler.emit({tableId,item})
  }
  /**
   * @param item 
   */
  afterTableEdit(item:any){
    delete item.isEdit;
    this.UpdateRatetable.emit(item);
    
  }
  closeTable(){
    this.editEntry=false;
  }
  addNewEntry(tableId:string) {
    this.newEntry.id=this.DataTable[this.DataTable.length-1].id+1;
    this.DataTable[this.DataTable.length]=this.newEntry;
    const item=this.newEntry
    this.AddNewEntryHandler.emit({tableId,item})
    this.addnewflag=false
    this.newEntry={};
  }
  removeNewEntry(){
    this.addnewflag=false
    this.newEntry={}
  }
  deleteEntry(tableId:string,Id:number){
    this.DataTable=this.DataTable.filter(item => item.id !== Id);
    this.DeleteEntryHandler.emit({tableId,Id})
  }
}
