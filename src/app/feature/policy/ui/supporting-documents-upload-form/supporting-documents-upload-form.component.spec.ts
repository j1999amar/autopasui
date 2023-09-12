import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingDocumentsUploadFormComponent } from './supporting-documents-upload-form.component';

describe('SupportingDocumentsUploadFormComponent', () => {
  let component: SupportingDocumentsUploadFormComponent;
  let fixture: ComponentFixture<SupportingDocumentsUploadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportingDocumentsUploadFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportingDocumentsUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
