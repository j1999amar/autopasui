import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDetailsEditComponent } from './policy-details-edit.component';

describe('PolicyDetailsEditComponent', () => {
  let component: PolicyDetailsEditComponent;
  let fixture: ComponentFixture<PolicyDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyDetailsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
