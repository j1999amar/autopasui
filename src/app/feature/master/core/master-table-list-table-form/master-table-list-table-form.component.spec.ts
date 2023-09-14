import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTableListTableFormComponent } from './master-table-list-table-form.component';

describe('MasterTableListTableFormComponent', () => {
  let component: MasterTableListTableFormComponent;
  let fixture: ComponentFixture<MasterTableListTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterTableListTableFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterTableListTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
