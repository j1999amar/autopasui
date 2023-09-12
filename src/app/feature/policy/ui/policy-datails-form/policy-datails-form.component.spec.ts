import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDatailsFormComponent } from './policy-datails-form.component';

describe('PolicyDatailsFormComponent', () => {
  let component: PolicyDatailsFormComponent;
  let fixture: ComponentFixture<PolicyDatailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyDatailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyDatailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
