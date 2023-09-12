import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageDetailsComponent } from './coverage-details.component';

describe('CoverageDetailsComponent', () => {
  let component: CoverageDetailsComponent;
  let fixture: ComponentFixture<CoverageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
