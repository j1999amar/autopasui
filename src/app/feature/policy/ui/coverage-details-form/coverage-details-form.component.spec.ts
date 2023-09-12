import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageDetailsFormComponent } from './coverage-details-form.component';

describe('CoverageDetailsFormComponent', () => {
  let component: CoverageDetailsFormComponent;
  let fixture: ComponentFixture<CoverageDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverageDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
