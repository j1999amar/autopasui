import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageDetailsEditComponent } from './coverage-details-edit.component';

describe('CoverageDetailsEditComponent', () => {
  let component: CoverageDetailsEditComponent;
  let fixture: ComponentFixture<CoverageDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageDetailsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverageDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
