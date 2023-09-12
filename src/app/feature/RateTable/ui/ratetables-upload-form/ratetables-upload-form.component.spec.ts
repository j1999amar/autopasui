import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatetablesUploadFormComponent } from './ratetables-upload-form.component';

describe('RatetablesUploadFormComponent', () => {
  let component: RatetablesUploadFormComponent;
  let fixture: ComponentFixture<RatetablesUploadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatetablesUploadFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatetablesUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
