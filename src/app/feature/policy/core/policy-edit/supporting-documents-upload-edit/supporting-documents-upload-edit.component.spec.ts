import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingDocumentsUploadEditComponent } from './supporting-documents-upload-edit.component';

describe('SupportingDocumentsUploadEditComponent', () => {
  let component: SupportingDocumentsUploadEditComponent;
  let fixture: ComponentFixture<SupportingDocumentsUploadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportingDocumentsUploadEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportingDocumentsUploadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
