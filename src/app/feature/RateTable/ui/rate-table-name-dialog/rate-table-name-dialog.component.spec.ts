import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateTableNameDialogComponent } from './rate-table-name-dialog.component';

describe('RateTableNameDialogComponent', () => {
  let component: RateTableNameDialogComponent;
  let fixture: ComponentFixture<RateTableNameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateTableNameDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateTableNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
