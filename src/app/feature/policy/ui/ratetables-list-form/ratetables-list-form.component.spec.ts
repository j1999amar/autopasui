import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatetablesListFormComponent } from './ratetables-list-form.component';

describe('RatetablesListFormComponent', () => {
  let component: RatetablesListFormComponent;
  let fixture: ComponentFixture<RatetablesListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatetablesListFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatetablesListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
