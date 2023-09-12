import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateTableDetailsUIComponent } from './rate-table-details-ui.component';

describe('RateTableDetailsUIComponent', () => {
  let component: RateTableDetailsUIComponent;
  let fixture: ComponentFixture<RateTableDetailsUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateTableDetailsUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateTableDetailsUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
