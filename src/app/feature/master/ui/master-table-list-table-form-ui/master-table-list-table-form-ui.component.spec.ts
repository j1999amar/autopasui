import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTableListTableFormUiComponent } from './master-table-list-table-form-ui.component';

describe('MasterTableListTableFormUiComponent', () => {
  let component: MasterTableListTableFormUiComponent;
  let fixture: ComponentFixture<MasterTableListTableFormUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterTableListTableFormUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterTableListTableFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
