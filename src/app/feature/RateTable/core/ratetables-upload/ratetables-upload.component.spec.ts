import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatetablesUploadComponent } from './ratetables-upload.component';

describe('RatetablesUploadComponent', () => {
  let component: RatetablesUploadComponent;
  let fixture: ComponentFixture<RatetablesUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatetablesUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatetablesUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
