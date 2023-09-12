import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredDetailsFormComponent } from './insured-details-form.component';

describe('InsuredDetailsFormComponent', () => {
  let component: InsuredDetailsFormComponent;
  let fixture: ComponentFixture<InsuredDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuredDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuredDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
