import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTypeComponent } from './master-table-list-table.component';

describe('BodyTypeComponent', () => {
  let component: BodyTypeComponent;
  let fixture: ComponentFixture<BodyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
