import { Component ,OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent {
  policyFlag:boolean=false; 
  insuredFlag:boolean=false;
  vehicleFlag:boolean=false;
  coverageFlag:boolean=false;
  premiumFlag:boolean=false;

  selectedTabIndex =0;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {}

  onFormSubmit(flag:number) {
     if(flag==1){
      this.policyFlag=true
     }
     else if(flag==2){
      this.insuredFlag=true
     }
     else if(flag==3){
      this.vehicleFlag=true
     }
     else if(flag==4){
      this.coverageFlag=true
     }
     else if(flag==5){
      this.premiumFlag=true
     }
    }
  onTabChange(event: any) {
      this.selectedTabIndex = event.index;
    }
  nextTab(flag:number) {
        this.onFormSubmit(flag)
        this.selectedTabIndex = (this.selectedTabIndex + 1) % 6;
    }
  previousTab() {
      const tabCount = 6
      this.selectedTabIndex = (this.selectedTabIndex + tabCount - 1) % tabCount;
    }  
  
}
