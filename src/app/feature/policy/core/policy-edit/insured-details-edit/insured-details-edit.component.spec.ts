import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredDetailsEditComponent } from './insured-details-edit.component';

describe('InsuredDetailsEditComponent', () => {
  let component: InsuredDetailsEditComponent;
  let fixture: ComponentFixture<InsuredDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuredDetailsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuredDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
