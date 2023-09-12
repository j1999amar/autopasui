import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsEditComponent } from './vehicle-details-edit.component';

describe('VehicleDetailsEditComponent', () => {
  let component: VehicleDetailsEditComponent;
  let fixture: ComponentFixture<VehicleDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
