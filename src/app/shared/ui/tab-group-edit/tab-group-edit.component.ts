import { Component ,OnInit} from '@angular/core';
import { Store,select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-tab-group-edit',
  templateUrl: './tab-group-edit.component.html',
  styleUrls: ['./tab-group-edit.component.css']
})
export class TabGroupEditComponent {
  selectedTabIndex =0;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {}

  
  onTabChange(event: any) {
      this.selectedTabIndex = event.index;
    }
  nextTab(flag:number) {
        this.selectedTabIndex = (this.selectedTabIndex + 1) % 6;
    }
  previousTab() {
      const tabCount = 6
      this.selectedTabIndex = (this.selectedTabIndex + tabCount - 1) % tabCount;
    }  
  
}
