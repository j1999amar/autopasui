import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatetablesFormComponent } from './ratetables-form.component';

describe('RatetablesFormComponent', () => {
  let component: RatetablesFormComponent;
  let fixture: ComponentFixture<RatetablesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatetablesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatetablesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
