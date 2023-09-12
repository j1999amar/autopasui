import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumRatingComponent } from './premium-rating.component';

describe('PremiumRatingComponent', () => {
  let component: PremiumRatingComponent;
  let fixture: ComponentFixture<PremiumRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
