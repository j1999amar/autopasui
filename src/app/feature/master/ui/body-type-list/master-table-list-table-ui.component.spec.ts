import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTypeListComponent } from './master-table-list-table-ui.component';

describe('BodyTypeListComponent', () => {
  let component: BodyTypeListComponent;
  let fixture: ComponentFixture<BodyTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
