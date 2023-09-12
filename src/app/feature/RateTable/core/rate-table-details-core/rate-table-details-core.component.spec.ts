import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateTableDetailsCoreComponent } from './rate-table-details-core.component';

describe('RateTableDetailsCoreComponent', () => {
  let component: RateTableDetailsCoreComponent;
  let fixture: ComponentFixture<RateTableDetailsCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateTableDetailsCoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateTableDetailsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
